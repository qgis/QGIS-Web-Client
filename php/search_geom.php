<?php
/**
    QGIS-WEB-CLIENT - PHP HELPERS

    Get search geometry

    @copyright: 2013 by Alessandro Pasotti - ItOpen (http://www.itopen.it) <apasotti@gmail.com>
    @license: GNU AGPL, see COPYING for details.
*/


require_once(dirname(__FILE__). '/config.php');
require_once(dirname(__FILE__). '/helpers.php');


// Params
$map = get_map_path(@$_REQUEST['map']);
$layername = trim(@$_REQUEST['searchtable']);

if(array_key_exists($layername, $searchlayers_config)){
   $layer_config =  $searchlayers_config[$layername];
} else {
    err500('layer not found or not searchable');
}

$displaytext = trim(@$_REQUEST['displaytext']);

// Get project
$project = get_project($map);

// Sanitize
$displaytext = preg_replace('/[^A-z0-9_-]\s/', '', $displaytext);

// Get layer
$layer = get_layer($layername, $project);

$ds_params = get_layer_info($layer, $project);

$sql = "SELECT ST_AsText(${ds_params['geom_column']}) AS geom FROM " . $ds_params['table'] . " WHERE ${layer_config['search_column']} = ?";
$dbh = get_connection($layer, $project);
$stmt = $dbh->prepare($sql);
$stmt->bindValue(1, $displaytext, PDO::PARAM_STR);
$stmt->execute();

$row = $stmt->fetch(PDO::FETCH_NUM);
if(count($row)){
    $result = $row[0];
    header('Content-type: application/json');
    header('Content-length: ' . strlen($result));
    echo $result;
}
?>
