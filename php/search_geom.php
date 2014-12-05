<?php
/**
    QGIS-WEB-CLIENT - PHP HELPERS

    Get search geometry

    PARAMETERS

    map: string, map path (or name in case of rewrite)
    searchtable: string, layer name
    searchcolumn: string, optional, restrict search to this particular field
    displaytext: string, the search string

    @copyright: 2013-2014 by Alessandro Pasotti -
        ItOpen (http://www.itopen.it) <apasotti@gmail.com>
    @license: GNU AGPL, see COPYING for details.
*/


require_once(dirname(__FILE__). '/config.php');
require_once(dirname(__FILE__). '/helpers.php');


// Params
$map = get_map_path(@$_REQUEST['map']);
$layername = trim(@$_REQUEST['searchtable']);
$result = "nogeom";

if ($layername != "null") {
    if(array_key_exists($layername, $searchlayers_config)){
       $layer_config =  $searchlayers_config[$layername];
    } else {
        err500('layer not found or not searchable');
    }

    // Get the search string
    $displaytext = trim(@$_REQUEST['displaytext']);

    // Get project
    $project = get_project($map);

    // Sanitize
    $displaytext = preg_replace('/[^A-z0-9_-]\s/', '', $displaytext);

    // Get the search column from QS or default, sanitize
    $search_column = preg_replace('/[^A-z0-9_-]\s/', '', @$_REQUEST['searchcolumn']);
    if(!$search_column){
        $search_column = $layer_config['search_column'];
    }

    // Get layer
    $layer = get_layer($layername, $project);

    $ds_params = get_layer_info($layer, $project);

    $sql = "SELECT ST_AsText(${ds_params['geom_column']}) AS geom FROM " . $ds_params['table'] . " WHERE $search_column = ?";
    $dbh = get_connection($layer, $project, $map);
    $stmt = $dbh->prepare($sql);
    $stmt->bindValue(1, $displaytext, PDO::PARAM_STR);
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_NUM);
    if(count($row)){
        $result = $row[0];
    }
}
header('Content-type: application/json');
header('Content-length: ' . strlen($result));
echo $result;
?>
