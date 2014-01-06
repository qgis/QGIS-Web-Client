<?php
/**
    QGIS-WEB-CLIENT - PHP HELPERS

    Common functions and configuration

    @copyright: 2013 by Alessandro Pasotti - (http://www.itopen.it) <apasotti@gmail.com>
    @license: GNU AGPL, see COPYING for details.
*/


/****************************
 * Configuration
 */
// Prefix map name with path
#define('MAP_PATH_REWRITE', '/home/ale/public_html/QGIS-Web-Client/projects/');
// Append .qgs to the map name
#define('MAP_PATH_APPEND_QGS', true);


/*****************************
 * Functions
 */

function err500($msg){
    header('Internal server error', true, 500);
    echo "<h1>Internal server error (QGIS Client)</h1><p>$msg</p>";
    exit;
}


/**
 * Load .qgs file
 */
function get_project($map){
    if(file_exists($map) && is_readable($map)){
        $project = @simplexml_load_file($map);
        if(!$project){
            err500('project not valid');
        }
    } else {
        err500('project not found');
    }
    return $project;
}

/**
 * Get postgis layer connection and geom info
 */
function get_pg_layer_info($layer, $project){
    // Cache
    static $pg_layer_infos = array();

    if(!$layer->provider == 'postgis'){
        err500('not a postgis layer');
    }
    // Datasource
    $datasource = (string)$layer->datasource;

    if(array_key_exists($datasource, $pg_layer_infos)){
        return $pg_layer_infos[$datasource];
    }


    // Parse datasource
    $ds_parms = array();
    // First extract sql=
    if(preg_match('/sql=(.*)/', $datasource, $matches)){
        $datasource = str_replace($matches[0], '', $datasource);
        $ds_parms['sql'] = $matches[1];
    }
    foreach(explode(' ', $datasource) as $token){
        $kv = explode('=', $token);
        if(count($kv) == 2){
            $ds_parms[$kv[0]] = $kv[1];
        } else { // Parse (geom)
            if(preg_match('/\(([^\)]+)\)/', $kv[0], $matches)){
                $ds_parms['geom_column'] = $matches[1];
            }
            // ... maybe other parms ...
        }
    }
    $pg_layer_infos[$datasource] = $ds_parms;
    return $ds_parms;
}

/**
 * Rewrite and append
 */
function get_map_path($mapname){
    // Rewrite map to full path
    if(defined('MAP_PATH_REWRITE') && MAP_PATH_REWRITE){
        $mapname = MAP_PATH_REWRITE . $mapname;
        if(defined('MAP_PATH_APPEND_QGS') && MAP_PATH_APPEND_QGS){
            $mapname .= '.qgs';
        }
    }
    return $mapname;
}


/**
 * Load a layer instance from the project
 *
 */
function get_layer($layername, $project){
    // Caching
    static $layers = array();
    if(array_key_exists($layername, $layers)){
        return $layers[$layername];
    }
    $xpath = '//maplayer/layername[.="' . $layername . '"]/parent::*';
    if(!$layer = $project->xpath($xpath)){
        err500('layer not found');
    }
    $layers[$layername] = $layer[0];
    return $layer[0];
}


/**
 * List categories from a layer
 */
function get_categories($layer){
    // Ok, we have the layer, list categories
    $categories = $layer->xpath('//categories');
    return $categories;
}

/**
 * Get connection from layer
 */
function get_connection($layer, $project){

    $ds_parms = get_pg_layer_info($layer, $project);
    $PDO_DSN="pgsql:host=${ds_parms['host']};port=${ds_parms['port']};dbname=${ds_parms['dbname']}";

    try {
        $dbh = new PDO($PDO_DSN, $ds_parms['user'], $ds_parms['password']);
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        err500('db error: ' . $e->getMessage());
    }
    return $dbh;
}
