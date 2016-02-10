<?php
/**
    QGIS-WEB-CLIENT - SEARCH CONFIGURATION

    Configuration for the search scripts

    @copyright: 2014 by Alessandro Pasotti -
       ItOpen (http://www.itopen.it) <apasotti@gmail.com>
    @license: GNU AGPL, see COPYING for details.
*/



/****************************
 * Map rewrite configuration
 */
// Prefix map name with path, also supports $map_name substitution
#define('MAP_PATH_REWRITE', '/home/xxx/public_html/QGIS-Web-Client/projects/');
// Append .qgs to the map name
#define('MAP_PATH_APPEND_QGS', true);


/**************************************
 * search configuration
 */
// Configuration for searchable layers
$searchlayers_config = array(
    // Key is layer name
    'Country' => array(
        // SQL for text search: where to search
        'search_column' => 'name'
    )
);

// Default search tables
define('DEFAULT_SEARCH_LAYERS', 'Country');
// Limit search results
define('SEARCH_LIMIT', 100);
// make themes choosable in search combo
define('THEMES_CHOOSABLE', false);
// zoom to this bbox if a layer is chosen in the search combo [minx, miny, maxx, maxy]
// set to null if extent should not be changed
define('MAX_BBOX', null);


/**************************************
 *  Get legend configuration
 */
// Cache expiry time in seconds 0=never cache
define('GET_LEGEND_CACHE_EXPIRY', 60*60);
// Cache directory, defaults to dirname(__FILE__) . '/legend_cache'
define('GET_LEGEND_CACHE_DIRECTORY', null);
// Defaults to current URL + '../cgi-bin/qgis_mapserv.fcgi?'
define('WMS_ONLINE_RESOURCE', null);

/* End configuration */
