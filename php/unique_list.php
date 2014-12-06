<?php
/**
    QGIS-WEB-CLIENT - PHP HELPERS

    Returns a list of unique values from a postgis layer column

    @copyright: 2013 by Alessandro Pasotti <apasotti@gmail.com>
    @license: GNU AGPL, see COPYING for details.
*/

require_once(dirname(__FILE__). '/config.php');
require_once(dirname(__FILE__). '/helpers.php');

// Params
$map_path = get_map_path(@$_REQUEST['map']);
// Name of the layer to query
$layername = @$_REQUEST['layer'];
// Field name from where unique values are read
$field = @$_REQUEST['field'];

if(!$field){
    err500('field parameter missing');
}

// Get project
$project = get_project($map_path);
// Get layer
$layer = get_layer($layername, $project);


try {
    $dbh = get_connection($layer, $project, $map_path);
    $ds_parms = get_layer_info($layer, $project);
    $_field = preg_replace('/[^A-z0-9_-]]/','',$field);
    $stmt = $dbh->prepare("SELECT DISTINCT $_field FROM ${ds_parms['table']} ORDER BY $_field");
    $stmt->execute();

    while ($row = $stmt->fetchColumn()) {
        $result[] = $row;
    }
    $json_result = json_encode($result);
    header('Content-type: application/json');
    header('Content-length: ' . strlen($json_result));
    echo $json_result;
    exit;

} catch (PDOException $e) {
    err500('db error: ' . $e->getMessage());
}
?>
