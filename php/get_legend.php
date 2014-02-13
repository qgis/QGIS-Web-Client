<?php
/**
    QGIS-WEB-CLIENT - PHP HELPERS

    Return a cached json legend for easier customization
    It uses GetStyles for the given layer to retrieve styles informations
    and GetLegendGraphics for each symbol image

    @copyright: 2013 by Alessandro Pasotti ItOpen (http://www.itopen.it)
        <apasotti@gmail.com>
    @license: GNU AGPL, see COPYING for details.
*/


require_once(dirname(__FILE__). '/config.php');
require_once(dirname(__FILE__). '/helpers.php');


// Params
$mapname = @$_REQUEST['map'];
// Name of the layer to get legend for
$layername = @$_REQUEST['layer'];

$map = get_map_path($mapname);

// Get project
$project = get_project($map);


$legend = get_legend($mapname, $layername, $project);

$json_result = json_encode($legend);
header('Content-type: application/json');
header('Content-length: ' . strlen($json_result));
echo $json_result;
