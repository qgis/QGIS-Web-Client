<?php
/**
    QGIS-WEB-CLIENT - PHP HELPERS

    Common functions and configuration

    @copyright: 2013-2014 by Alessandro Pasotti - (http://www.itopen.it) <apasotti@gmail.com>
    @license: GNU AGPL, see COPYING for details.
*/



/**
 * Return 500 errro
 */
function err500($msg){
    header('Internal server error', true, 500);
    echo "<h1>Internal server error (QGIS Client)</h1><p>$msg</p>";
    exit;
}


/**
 * Load .qgs file
 */
function get_project($project_path){
    if(file_exists($project_path) && is_readable($project_path)){
        $project = @simplexml_load_file($project_path);
        if(!$project){
            err500('project not valid');
        }
    } else {
        err500('project not found');
    }
    return $project;
}

/**
 * Get layer connection and geom info
 */
function get_layer_info($layer, $project){
    // Cache
    static $pg_layer_infos = array();

    if((string)$layer->provider != 'postgres' && (string)$layer->provider != 'spatialite'){
        err500('only postgis or spatialite layers are supported' . (string)$layer->provider);
    }
    // Datasource
    $datasource = (string)$layer->datasource;

    if(array_key_exists($datasource, $pg_layer_infos)){
        return $pg_layer_infos[$datasource];
    }

    // Parse datasource
    $ds_parms = array(
        'provider' => (string)$layer->provider
    );
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
 *
 * MAP_PATH_REWRITE supports $map_name substitutions
 */
function get_map_path($mapname){
    // Rewrite map to full path
    if(defined('MAP_PATH_REWRITE') && MAP_PATH_REWRITE){
        // Replace map name, if present
        $map_prefix = str_replace('$map_name', $mapname, MAP_PATH_REWRITE);
        $mapname = $map_prefix . $mapname;
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
function get_connection($layer, $project, $map_path){

    $ds_parms = get_layer_info($layer, $project);
    if($ds_parms['provider'] == 'postgres') {
        $PDO_DSN="pgsql:host=${ds_parms['host']};port=${ds_parms['port']};dbname=${ds_parms['dbname']}";
    } else { // Spatialite
        // Calculate directory
        $dbpath = preg_replace("/'?([^']+)'?/", '\1', $ds_parms['dbname']);
        if($dbpath[0] != DIRECTORY_SEPARATOR){
            $dbpath = dirname($map_path) . DIRECTORY_SEPARATOR . $dbpath;
        }
        if(!file_exists($dbpath)){
            err500('sqlite fle not found.');
        }
        $PDO_DSN="sqlite:$dbpath";
    }

    try {
        $dbh = new PDO($PDO_DSN, @$ds_parms['user'], @$ds_parms['password']);
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        err500('db error: ' . $e->getMessage());
    }
    if($ds_parms['provider'] == 'spatialite') {
        try {
            $sql = "SELECT load_extension('libspatialite.so');";
            $stmt = $dbh->prepare($sql);
            $stmt->execute();
        } catch (PDOException $e) {
            err500('db error loading spatialite: ' . $e->getMessage());
        }
    }
    return $dbh;
}

/**
 * Return current base URL
 */
function get_current_base_url() {
    $pageURL = 'http';
    if (@$_SERVER["HTTPS"] == "on") {$pageURL .= "s";}
    $pageURL .= "://";
    if ($_SERVER["SERVER_PORT"] != "80") {
        $pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
    } else {
        $pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
    }
    // Strip query string
    $pageURL = substr($pageURL, 0, - (2 + strlen($_SERVER['QUERY_STRING']) + strlen(basename($_SERVER['PHP_SELF']))));
    return $pageURL;
}

/**
 * Returns WMS endpoint
 */
function get_wms_online_resource($mapname){
    $wms = defined('WMS_ONLINE_RESOURCE') && WMS_ONLINE_RESOURCE ? WMS_ONLINE_RESOURCE : get_current_base_url() . '/../cgi-bin/qgis_mapserv.fcgi?';
    // Add map
    $wms .= 'map='.urlencode($mapname).'&';
    return $wms;
}

/**
 * Returns legend data, querying WMS GetStyles and GetLegendGraphics
 */
function get_legend($mapname, $layername){
    // Check cache
    if(defined('GET_LEGEND_CACHE_EXPIRY') && GET_LEGEND_CACHE_EXPIRY){
        // Check cache folder
        $cache_folder = defined('GET_LEGEND_CACHE_DIRECTORY') && GET_LEGEND_CACHE_DIRECTORY ? GET_LEGEND_CACHE_DIRECTORY : dirname(__FILE__) . '/legend_cache/';
        if(!is_dir($cache_folder) && !@mkdir($cache_folder)){
            err500('Cannot create cache folder, check permissions and configuration.');
        }
        $cache_file = $cache_folder.'/'.md5($mapname.$layername);
        $filemtime = @filemtime($cache_file);  // returns FALSE if file does not exist
        if (!$filemtime or (time() - $filemtime >= GET_LEGEND_CACHE_EXPIRY)){
            file_put_contents($cache_file, serialize(build_legend($mapname, $layername)));
        }
        return unserialize(file_get_contents($cache_file));
    }
    return build_legend($mapname, $layername);
}


/**
 * Build the legend
 */
function build_legend($mapname, $layername){
    // First, get layer styles
    $wms = get_wms_online_resource($mapname);
    $wms_base_call = $wms.'VERSION=1.1.1&SERVICE=WMS&LAYERS='.urlencode($layername).'&REQUEST=';
    $styles = simplexml_load_file($wms_base_call.'GetStyles');
    if($styles === false){
        err500('Cannot fetch legend styles');
    }
    $results = array();
    // For each style, get legend string and image
    foreach($styles->xpath('//se:Rule') as $rule){
        $name = $rule->xpath('se:Name');
        // FIXME: temporary workaround for http://hub.qgis.org/issues/9321
        if((string)$name[0]){
            $filter = $rule->xpath('ogc:Filter/*');
            if(count($filter)){
                $filter = preg_replace('/>\s+</', '><', str_replace(array("\n", 'ogc:'), '', (string)$filter[0]->asXML()));
            } else {
                $filter = '';
            }
            $wms_image_call = $wms_base_call.'GetLegendGraphic&FORMAT=image/png&RULE='.urlencode((string)$name[0]);
            $image_data = file_get_contents($wms_image_call);
            if(!$image_data){
                err500('Cannot fetch legend image');
            }
            $results[] = array(
                'name' => (string)$name[0],
                'ogc_filter' => $filter,
                'image' => base64_encode($image_data)
            );
        }
    }
    return $results;
}
