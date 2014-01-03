<?php
/**
    PROJECT - MODULE

    DESCRIPTION

    @copyright: 2013 by Alessandro Pasotti - ItOpen (http://www.itopen.it) <apasotti@gmail.com>
    @license: GNU AGPL, see COPYING for details.
*/

// Configuration for searchable layers
$searchlayers_config = array(
    // Key is layer name
    'Catasto fabbricati' => array(
        // SQL for text search: where to search
        'search_column' => 'sezione || \' \' || foglio || \' \' || mappale'
    ),
    'Catasto particelle' => array(
        // SQL for text search: where to search
        'search_column' => 'sezione || \' \' || foglio || \' \' || particella'
    )
);

// Default search tables
define('DEFAULT_SEARCH_LAYERS', 'Catasto fabbricati,Catasto particelle');
// Limit search results
define('SEARCH_LIMIT', 100);

/* End configuration */
