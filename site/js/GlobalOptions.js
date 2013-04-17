//default language code, can be overwritten with lang parameter in URL
var lang = "de"; //for available codes see array availableLanguages in file GlobalOptions.js

//Help file (must be a local file)
var helpfile = "help_de.html";

//Servername and name of CGI-file
//Path must include the host name
var serverAndCGI = "http://srsofaioi12288.ktso.ch/wms"; //URL mit Name des qgis mapserver cgi

//Define whether you want to use the GetProjectSettings extension of QGIS Server
//for more configuration options in the project.
//Set this to false to use GetCapabilities for older QGIS Server versions (<= 1.8).
var useGetProjectSettings = false;

// show the layerOrderTab in the GUI
var showLayerOrderTab = true;

//search box for queries while typing
//enable to use GeoNames search
var useGeoNamesSearchBox = false;
//URL for custom search scripts
var searchBoxQueryURL = "/wsgi/search.wsgi?query=";
var searchBoxGetGeomURL = "/wsgi/getSearchGeom.wsgi";

// do not show fields in ObjectIdentification results that have null values
var suppressEmptyValues = false;

//config for QGIS.SearchPanel
var simpleWmsSearch = {
  title: "Search continent",
  query: 'simpleWmsSearch',
  useWmsRequest: true,
  queryLayer: "Country",
  formItems: [
    {
      xtype: 'textfield',
      name: 'name',
      fieldLabel: "Name",
      allowBlank: false,
      blankText: "Please enter a name (e.g. 'africa')",
      filterOp: "="
    }
  ],
  gridColumns: [
    {header: 'Name', dataIndex: 'name', menuDisabled: 'true'}
  ],
  selectionLayer: 'Country',
  selectionZoom: 0,
  doZoomToExtent: true
};

var urlRewriteSearch = {
  title: "Search letter",
  query: 'samplesearch',
  formItems: [
    {
      xtype: 'hidden',
      name: 'query',
      value: 'samplesearch'
    },
    {
      xtype: 'textfield',
      name: 'colour',
      fieldLabel: "Colour",
      allowBlank: false,
      blankText: "Please enter a colour (e.g. 'orange')"
    }
  ],
  gridColumns: [
    {header: 'PKUID', dataIndex: 'pkuid', menuDisabled: 'true'},
    {header: 'Colour', dataIndex: 'colour', menuDisabled: 'true'}
  ],
  selectionLayer: 'Hello',
  selectionZoom: 1
};

//list of configs for QGIS.SearchPanel per map name
var mapSearchPanelConfigs = {
  "helloworld": [simpleWmsSearch, urlRewriteSearch]
};

//define whether you want to display a map theme switcher
//note that you have to also link a gis-project-listing.js file containing a valid
//project listing structure - the root object is called 'gis_projects'
//have a look at the template file and documentation for the correct json structure
var mapThemeSwitcherActive = false;

//first part of titlebar text
var titleBarText = "SO!GIS-Browser - "; // will be appended with project title

// header logo image and link
var headerLogoImg = null; // path to image, set null for no logo
var headerLogoHeight = 60; // logo image height in pixels
var headerLogoLink = ""; // logo links to this URL
var headerTermsOfUseText = null; // set null for no link
var headerTermsOfUseLink = ""; // URL to terms of use

// optional project title per map name
var projectTitles = {
  "helloworld": "Hello World"
};

//EPSG projection code
var epsgcode = 21781;

// OpenLayers global options
// see http://dev.openlayers.org/releases/OpenLayers-2.10/doc/apidocs/files/OpenLayers/Map-js.html
var MapOptions = {
  projection: new OpenLayers.Projection("EPSG:"+epsgcode),
  units: "m",
  maxScale:50,
  minScale:500000,
  fractionalZoom: true,
  transitionEffect:"resize",
  controls: []
};

// Options for the main map layer (OpenLayers.layer)
//see http://dev.openlayers.org/releases/OpenLayers-2.10/doc/apidocs/files/OpenLayers/Layer-js.html
var LayerOptions = {
  buffer:0,
  singleTile:true,
  ratio:1,
  transitionEffect:"resize",
  projection:"EPSG:"+epsgcode
};

//overview map settings - do not change variable names!
var OverviewMapOptions = {
  projection: new OpenLayers.Projection("EPSG:"+epsgcode),
  units: "m",
  maxScale:50,
  minScale:3000000,
  transitionEffect:"resize"
};
var OverviewMapSize = new OpenLayers.Size(200,200);
var overviewLayer = new OpenLayers.Layer.WMS("Uebersicht",
  "http://www.sogis1.so.ch/wms/strassenkarte",
  {layers:"Strassenkarte",format:"image/png"},
  {buffer:0,singleTile:true,transitionEffect:"resize"});

//print options - scales and dpi
var printCapabilities={
  "scales":[
    {"name":"1:100","value":"100"},
    {"name":"1:200","value":"200"},
    {"name":"1:250","value":"250"},
    {"name":"1:500","value":"500"},
    {"name":"1:1'000","value":"1000"},
    {"name":"1:2'000","value":"2000"},
    {"name":"1:3'000","value":"3000"},
    {"name":"1:5'000","value":"5000"},
    {"name":"1:7'500","value":"7500"},
    {"name":"1:10'000","value":"10000"},
    {"name":"1:12'000","value":"12000"},
    {"name":"1:15'000","value":"15000"},
    {"name":"1:20'000","value":"20000"},
    {"name":"1:25'000","value":"25000"},
    {"name":"1:30'000","value":"30000"},
    {"name":"1:50'000","value":"50000"},
    {"name":"1:100'000","value":"100000"},
    {"name":"1:300'000","value":"300000"}/*,
    {"name":"1:500'000","value":"500000"},
    {"name":"1:1'000'000","value":"1000000"},
    {"name":"1:2'00'000","value":"2000000"},
    {"name":"1:4'000'000","value":"4000000"},
    {"name":"1:8'000'000","value":"8000000"},
    {"name":"1:16'000'000","value":"16000000"},
    {"name":"1:30'000'000","value":"30000000"},
    {"name":"1:60'000'000","value":"60000000"},
    {"name":"1:90'000'000","value":"90000000"},
    {"name":"1:100'000'000","value":"100000000"}
    */
  ],
  "dpis":[
    {"name":"150 dpi","value":"150"},
    {"name":"220 dpi","value":"220"}/*,
    {"name":"600 dpi","value":"600"},
    {"name":"1200 dpi","value":"1200"}
    */
  ],
  "layouts":[]
};

//var legend all at 
//if legendAllAtOnceAtBegin is set to true, the legend image is loaded at project
//load for all visible layers and whenever the visibility for a layer or group is
//changed by the user; if set to false, it is not loaded at the begin, but only
//if the user selects a group or layer in the layer tree
var legendAllAtOnceAtBegin = false;

// <------------ No changes should be needed below here ------------------>

//new namespace for QGIS extensions
//do not modify those three lines
if (!window.QGIS) {
  window.QGIS = {};
}

//styling definitions for highlightLayer
//is used for hightlighting features (GetFeatureInfo and search result visualization)
//see http://dev.openlayers.org/releases/OpenLayers-2.10/doc/apidocs/files/OpenLayers/Style-js.html
var symbolizersHighLightLayer = {
  "Point": {
    pointRadius: 4,
    graphicName: "circle",
    fillColor: "#FF8C00",
    fillOpacity: 0.3,
    strokeWidth: 1,
    strokeColor: "#FF8C00"
  },
  "Line": {
    strokeWidth: 3,
    strokeOpacity: 1,
    strokeColor: "#FF8C00",
    strokeDashstyle: "dash"
  },
  "Polygon": {
    strokeWidth: 2,
    strokeColor: "#FF8C00",
    fillColor: "none"
  }
};

//styling for measure controls (distance and area)
var sketchSymbolizersMeasureControls = {
  "Point": {
    pointRadius: 4,
    graphicName: "square",
    fillColor: "#FFFFFF",
    fillOpacity: 1,
    strokeWidth: 1,
    strokeOpacity: 1,
    strokeColor: "#FF0000"
  },
  "Line": {
    strokeWidth: 3,
    strokeOpacity: 1,
    strokeColor: "#FF0000",
    strokeDashstyle: "dash"
  },
  "Polygon": {
    strokeWidth: 2,
    strokeOpacity: 1,
    strokeColor: "#FF0000",
    fillColor: "#FFFFFF",
    fillOpacity: 0.3
  }
};


