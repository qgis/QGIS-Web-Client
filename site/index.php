<?php
    $PROJECTS_DIR = '<absolute-path-to-qgis-server-projects>/'
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
    <title>QGIS Mapserver Client</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <!-- Framework CSS --> 
    <link rel="stylesheet" href="css/blueprint/screen.css" type="text/css" media="screen, projection"> 
    <link rel="stylesheet" href="css/blueprint/print.css" type="text/css" media="print"> 
    <!--[if lt IE 8]><link rel="stylesheet" href="css/blueprint/ie.css" type="text/css" media="screen, projection"><![endif]--> 
    
    <!-- Import fancy-type plugin for the sample page. --> 
    <link rel="stylesheet" href="css/blueprint/plugins/fancy-type/screen.css" type="text/css" media="screen, projection"> 
    <!-- Tims styles on top of blueprint -->
    <link rel="stylesheet" href="css/style.css" type="text/css" media="screen, projection"> 
  </head>
  <body>
    <div class="container">
      <div class="span-18">
        <h1>QGIS Web Client</h1>
        <h2 class="alt">Default Client Landing Page</h2> 
      </div>
      <div class="span-6 last">
        <a href="http://qgis.org"><img src="img/qgis-icon.png" alt="QGIS icon"/></a>
      </div>
      <hr>
      <div class="span-18 colborder">
        <h2>About this page</h2>
        <p>This is a default page provided when you install QGIS Web Client. The default installation assumes that you checkout the QGIS Web Client from <a href="https://github.com/qgis/qgis-web-client/">github</a> into the directory "/home/web/qgis-web-client". To start with the client configuration, please copy one of the "site/js/GlobalOptions.js.templ" template files into "site/js/GlobalOptions.js". If you use different paths, please adjust them accordingly on this landing page (site/index.html) and in the file "site/js/GlobalOptions.js". You will also have to install QGIS Server (FCGI) and Apache with the FCGID module. You will have to configure Apache for FCGI use any your document locations.</p>
        <h2>Your local maps</h2>
        <div>
          <ul class="map-list">
            <?php
            foreach(glob($PROJECTS_DIR.'*.qgs') as $file) {
                $filename = substr($file, 0, -4);
                $filename = end(explode('/', $filename));
                print "<li class='map-item'><a href='maps/$filename'>$filename</a></li>\n";
            }
            ?>
          </ul>
        </div>
        <h2>Your local wms</h2>
        <div>
          <ul class="map-list">
            <?php
            foreach(glob($PROJECTS_DIR.'*.qgs') as $file) {
                $filename = substr($file, 0, -4);
                $filename = end(explode('/', $filename));
                print "<li class='map-item'><a href='wms/$filename?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities'>$filename (GetCapabilities version 1.3.0)</a></li>\n";
            }
            ?>
          </ul>
        </div>
        <h2>Online production examples</h2>
        <div>
          <ul class="map-list">
            <li class="map-item"><a href="http://gis.uster.ch/">GIS City of Uster (local community GIS), Zurich, Switzerland (german interface)</a></li>
            <li class="map-item"><a href="http://map.geo.gl.ch/">GIS Kanton Glarus (provincial GIS), Kanton Glarus, Switzerland (german interface)</a></li>
            <li class="map-item"><a href="http://www.jena.de/kartenportal">Stadtplan und Kartenportal Jena (city map and local commmunity GIS), Jena, Thüringen, Germany (german interface)</a></li>
         </ul>
        </div>
      </div>
      <div class="span-5 last">
        <p>This client is based on <a href="http://openlayers.org">OpenLayers</a>, <a href="http://www.sencha.com/products/extjs/">ExtJS</a> and <a href="http://www.geoext.org/">GeoExt</a>. It should be installed along with <a href="http://hub.qgis.org/projects/quantum-gis/wiki/QGIS_Server_Tutorial">QGIS Server</a>.</p>
        <ul>
          <li class="list-header">Useful links
            <ul>
              <li><a href="http://github.com/qgis/qgis-web-client">QGIS Web Client Github Home</a></li>
              <li><a href="http://openlayers.org">OpenLayers Home</a></li>
              <li><a href="http://geoext.org">GeoExt Home</a></li>
              <li><a href="http://qgis.org">QGIS Home</a></li>
              <li><a href="http://hub.qgis.org/projects/quantum-gis/wiki/QGIS_Server_Tutorial">QGIS Server Tutorial</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </body>
</html>
