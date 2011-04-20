QGIS Web Client (qgiswebclient):
================================

Purpose:
--------
A WMS based webgis client that makes use of QGIS specific WMS extensions (e.g. highlighting, printing, metadata, etc.). QGIS webclient reads the configuration from the WMS GetCapabilities command and builds the layer tree accordingly. Supports legend graphic, feature info requests and printing.

The client builds on existing Web-GIS libraries OpenLayers and GeoExt, as well as ExtJS 3 for the GUI widgets.

All major browsers should be supported.

Installation
------------
Requirements (Server):
* Apache2 - Webserver (Ubuntu: apache2)
* mod-fcgid (Ubuntu: libapache2-mod-fcgid)
* QGIS and QGIS Server (best installed from source)

The QGIS server compilation and installation will be covered in the QGIS manual.

For searching:
* python-wsgi for searching (Ubuntu: libapache2-mod-wsgi)
* psycopg2 PostgreSQL db driver (Ubuntu: python-psycopg2)
* webob - Python module providing WSGI request and response objects (Ubuntu: python-webob)

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

Configuration of search python script
-------------------------------------
Searching is handled by two separate python-wsgi scripts: "search.wsgi" lists back a hit list while the user is typing in the searchbox. It groups the results and returns a bounding box of the result. "getSearchGeom.wsgi" returns the actual wkt geometry for a selected search result. It is recommended to install the wsgi scripts in a separate directory, e.g. /home/www/wsgi, a place that is not reachable by regular web traffic.

You need to enable mod_wsgi as root. (Ubuntu: a2enmod mod_wsgi).

You need to configure apache with the following lines (e.g. in file /etc/apache2/sites-available/default):

#mod_wsgi
WSGIDaemonProcess gis processes=5 threads=15 display-name=%{GROUP}
WSGIScriptAlias /wsgi/ /home/www/wsgi/
WSGIScriptAliasMatch ^/wsgi/([^/]+) /home/www/wsgi/$1.wsgi

In the files "search.wsgi" and "getSearchGeom.wsgi" please edit the line containing the db connection strings. Search for the line
conn = psycopg2.connect("db='yourdb' port='5432' user='yourusername' password='yourpassword'")
and adapt the parameters according to your server/db.

PostgreSQL table setup for searching:

.................................

CREATE TABLE cadastre.searchtable
(
  searchstring text, --the search string (all lower case), e.g. "zürichstrasse 46, 8610 uster"
  displaytext text NOT NULL, --the display text for the search combobox, e.g. "Zürichstrasse 46, 8610 Uster (address)"
  search_category text, --should have a leading two digit number:, e.g. "03_parcels", where 03 is the order of the search categories, the number should be unique across all search tables
  the_geom geometry, --the actual geometry
  geometry_type text, --the geometry type as returned by ST_GeometryType(the_geom)
  searchstring_tsvector tsvector,
  CONSTRAINT searchtable_pkey PRIMARY KEY (displaytext)
)
WITH (
  OIDS=FALSE
);
GRANT SELECT ON TABLE cadastre.searchtable TO alle;

-- Index: cadastre.in_cadastre_searchstring_tsvector_gin

CREATE INDEX in_cadastre_searchstring_tsvector_gin
  ON cadastre.searchtable
  USING gin
  (searchstring_tsvector);
........................................................

The above search table can also be a view or materialized view. One can combine several search tables by specifying the "searchtables=searchtable1,searchtable2,searchtable3" parameter when requesting the "search.wsgi" script.


License
-------
GPL v3

Acknowledgements:
----------------

We'd like to thank the OpenLayers and GeoExt team for providing their base libraries.

