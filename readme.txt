QGIS Web Client (qgiswebclient):
================================

Purpose:
--------
A WMS based webgis client that makes use of proprietary QGIS WMS extensions (e.g. highlighting, printing, metadata, etc.). QGIS webclient reads the configuration from the WMS GetCapabilities command and builds the layer tree accordingly. Supports legend graphic, feature info requests and printing.

The client builds on existing Web-GIS libraries OpenLayers and GeoExt, as well as ExtJS 3 for the GUI widgets.

All major browsers should be supported.

Installation
------------
(the server part will be covered in the QGIS handbook):

Requirements (Server):
* Apache (Ubuntu: libapache2-mod-fcgid)
* python-wsgi for searching

The client part needs svn checkout with the following command:
svn co https://svn.osgeo.org/qgis/trunk/qgiswebclient qgiswebclient


Configuration of Client
-----------------------
Global Settings for all projects:
js/GlobalConfiguration.js

Translations (additional languages):
js/Translations.js

Project settings and index:
index.xml

Stylesheet of project index:
gis-project_listing.xsl

Thumbnails for individual projects:
thumbnails/projectname.png

License
-------

GPL

Acknowledgements:
----------------

