QGIS Web Client - PHP helpers
=============================

Author: Alessandro Pasotti
Company: ItOpen http://www.itopen.it
License: AGPL

PHP implementation of the original wsgi Python scripts provided with
QGIS Web Client.

The scripts will work only with PostGIS layers.


Why?
----

I prefer Python to PHP but deploying PHP is far easier and many
customers will be happy to customize PHP script rather than messing
up with wsgi and Python.

Another reason for this implementation is that
I wanted to remove hardcoded values and to exploit the project
file to get from there as many configuration parameter as possible
without the need to define them explicitly.

I understand that the original wsgi implementation is just an example
implementation that must be adapted an tailored to suit the programmer's
needs, my implementation should work out of the box with just minimal
configuration.


Differences
-----------

Main difference is that there are no hardcoded values and much less
configuration is needed because all needed informations are read from
the project file.

Another notable difference is that layer names are used instead of
table names, this in order to not disclose internal DB details.


Configuration
-------------

Configuration for the services is stored in  `config.php`. You can use
the provided `config.php.tpl` as a starting point.

Example:

::

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



QGIS Web Client needs to know where to find the scripts, since most
configuration is read from the project file, this must be passed in the
query string, the file where this parameters are set is
`GlobalOptions.js` see the example below:


::

    // Adds project_map, read value from query string
    var project_map = Ext.urlDecode(window.location.search.substring(1)).map;

    var searchBoxQueryURL = '../php/search.php?map=' + project_map;
    var searchBoxGetGeomURL = '../php/search_geom.php?map=' + project_map;




TODO
----

* Permalinks.



