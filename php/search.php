<?php
/**
    QGIS-WEB-CLIENT - PHP HELPERS

    Generic search: just like search.wsgi

    @copyright: 2013 by Alessandro Pasotti ItOpen (http://www.itopen.it)
        <apasotti@gmail.com>
    @license: GNU AGPL, see COPYING for details.
*/


require_once(dirname(__FILE__). '/config.php');
require_once(dirname(__FILE__). '/helpers.php');


// Params
$map = get_map_path(@$_REQUEST['map']);
$query = trim(@$_REQUEST['query']);
// Get project
$project = get_project($map);

// WARNING: we are using layer names instead of table names, the
// parameter name "searchtables" was not changed.
// Search layers
$searchlayers = @$_REQUEST['searchtables'];

if(!$searchlayers){
    $searchlayers = DEFAULT_SEARCH_LAYERS;
}

// To array
$searchlayers = explode(',', $searchlayers);
$_querystrings = preg_split('/\s+/', $query);

// Sanitize
$querystrings = array();
foreach($_querystrings as $qs){
    $querystrings[] = trim(preg_replace('/[^A-z0-9_-]/', '', $qs));
}

/**
 * Build postgis SQL query, here also searchtable is layer name
 */
function build_postgis_search_query($dbtable, $search_column, $geom_column, $layername, $querystrings, $sql_filter){
    $sql = "SELECT $search_column as displaytext, '$layername' AS searchtable, '$layername' as search_category, ";
    # the following line is responsible for zooming in to the features
    # this is supposed to work in PostgreSQL since version 9.0
    $sql .= "'['||replace(regexp_replace(BOX2D($geom_column)::text,'BOX\(|\)','','g'),' ',',')||']'::text AS bbox ";
    # if the above line does not work for you, deactivate it and uncomment the next line
    #sql .= "'['||replace(regexp_replace(BOX2D(the_geom)::text,'BOX[(]|[)]','','g'),' ',',')||']'::text AS bbox ";
    $sql .= "FROM ".$dbtable." WHERE ";
    // Add sql filter if any
    if($sql_filter){
        $sql .= $sql_filter . ' AND ';
    }
    #for each querystring
    for($j = 0; $j < count($querystrings); $j++){
      
      $sql .= "$search_column ILIKE '%" . $querystrings[$j] . "%'";

      if ($j < count($querystrings) - 1){
        $sql .= " AND ";
      }
    }
    return $sql;
}


/**
 * Build spatialite SQL query, here also searchtable is layer name
 */
function build_spatialite_search_query($dbtable, $search_column, $geom_column, $layername, $querystrings, $sql_filter){
    $sql = "PRAGMA case_sensitive_like=OFF; SELECT $search_column as displaytext, '$layername' AS searchtable, '$layername' as search_category, ";
    # the following line is responsible for zooming in to the features
    # this is supposed to work in PostgreSQL since version 9.0
    $sql .= "'['||replace(regexp_replace(envelope($geom_column),'BOX\(|\)','','g'),' ',',')||']' AS bbox ";
    # if the above line does not work for you, deactivate it and uncomment the next line
    #sql .= "'['||replace(regexp_replace(BOX2D(the_geom)::text,'BOX[(]|[)]','','g'),' ',',')||']'::text AS bbox ";
    $sql .= "FROM ".$dbtable." WHERE ";
    // Add sql filter if any
    if($sql_filter){
        $sql .= $sql_filter . ' AND ';
    }
    #for each querystring
    for($j = 0; $j < count($querystrings); $j++){
      
      $sql .= "$search_column LIKE '%" . $querystrings[$j] . "%'";

      if ($j < count($querystrings) - 1){
        $sql .= " AND ";
      }
    }
    return $sql;
}

$sql = array();
foreach($searchlayers as $layername){
    // Get layer
    $layer = get_layer($layername, $project);
    $ds_params = get_layer_info($layer, $project);
    if(array_key_exists($layername, $searchlayers_config)){
        if($ds_params['provider'] == 'postgres'){
            $sql[] = build_postgis_search_query($ds_params['table'],
                $searchlayers_config[$layername]['search_column'],
                $ds_params['geom_column'],
                $layername,
                $querystrings,
                $ds_params['sql']
            );
        } else {
            // Spatialite
            $sql[] = build_spatialite_search_query($ds_params['table'],
                $searchlayers_config[$layername]['search_column'],
                $ds_params['geom_column'],
                $layername,
                $querystrings,
                $ds_params['sql']
            );
        }
    } else {
        // Silently skip...
    }
}


if(count($sql)){
    $sql = implode(' UNION ', $sql) . " ORDER BY search_category ASC, displaytext ASC";
    if(defined('SEARCH_LIMIT') && SEARCH_LIMIT){
        $sql .= ' LIMIT ' . SEARCH_LIMIT;
    }
    $sql .= ';';
    //die($sql);
    // Get connection from the last layer
    $dbh = get_connection($layer, $project, $map);
    $stmt = $dbh->prepare($sql);
    $stmt->execute();

    $row_data = array();
    $lastSearchCategory = null;
    while ($row = $stmt->fetch()) {
        if($lastSearchCategory != $row['search_category']){
            $row_data[] = array(
                "displaytext" => $row['search_category'],"searchtable" => null, "bbox" => null
            );
        }
        $row_data[] = array(
            "displaytext" => $row['displaytext'],"searchtable" => $row['searchtable'],"bbox" => $row['bbox']
        );
        $lastSearchCategory = $row['search_category'];
    }
    $resultString = '{"results": '.json_encode($row_data).'}';
    $resultString = str_replace('"bbox":"[','"bbox": [', $resultString);
    $resultString = str_replace(']"}',']}', $resultString);

    #we need to add the name of the callback function if the parameter was specified
    if ($cb = @$_REQUEST["cb"]){
        $resultString = $cb . '(' . $resultString . ')';
    }
    header('Content-type: application/json');
    header('Content-length: ' . strlen($resultString));
    echo $resultString;
    exit;

} else {
    // Silently fail...
}

