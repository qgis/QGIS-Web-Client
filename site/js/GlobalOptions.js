//default language code, can be overwritten with lang parameter in URL
var lang = "en"; //for available codes see array availableLanguages in file GlobalOptions.js

//Help file (must be a local file)
var helpfile = "help_en.html";

//Servername (optional) and path and name name of QGIS Server FCGI-file
//either with or without server-name - without servername recommended for easier porting to other servers
//do not add a ? or & after the .fcgi extension
var serverAndCGI = "/cgi-bin/qgis_mapserv.fcgi";

//Optional url for print server hosted on a different server. Default: same as above.
// var serverAndCGI = "http://otherserver/cgi-bin/qgis_mapserv.fcgi";
var printServer = serverAndCGI;

//Define whether you want to use the GetProjectSettings extension of QGIS Server
//for more configuration options in the project.
//Set this to false to use GetCapabilities for older QGIS Server versions (<= 1.8).
var useGetProjectSettings = true;

// show the layerOrderTab in the GUI
var showLayerOrderTab = true;

// show layername in layerTree in gray when layer is outside visible scale
var grayLayerNameWhenOutsideScale = true;

// show the tab metadata in legend
var showMetaDataInLegend = true;

// show maptips when mouse is over object, set to false if you just want to click and show results
// if set to true every mouse position over feature of queriable layers is GetFeatureInfo request on server
var enableHoverPopup = true;


// use geodesic measures, i.e. not planar measures
// this is useful if a projection with high distortion of length/area is used, eg.g. GoogleMercator
var useGeodesicMeasurement = true;

//search box for queries while typing
//enable to use GeoNames search
var useGeoNamesSearchBox = false;
var geoNamesUserName = 'insert your geonames user name';
//URL for custom search scripts
var searchBoxQueryURL = null; // "/wsgi/search.wsgi?query=";
var searchBoxGetGeomURL = null; // "/wsgi/getSearchGeom.wsgi";

// use QGIS WMS highlight for selected search result in search box
var enableSearchBoxWmsHighlight = false;
// search result attribute to show as label if enableSearchBoxWmsHighlight is enabled
var searchBoxWmsHighlightLabel = 'displaytext';

// If set, will make sure that the layer for the search results is
// visible. This feature will work out of the box if PHP scripts are
// used.
var autoActivateSearchGeometryLayer = true;

// Used to dynamically determine the project.
var project_map = Ext.urlDecode(window.location.search.substring(1)).map;

// PHP based search scripts (postgis layers only)
//var searchBoxQueryURL = '../php/search.php?map=' + project_map;
//var searchBoxGetGeomURL = '../php/search_geom.php?map=' + project_map;

// show the permalink button
var enablePermalink = true;
//use a URL shortener for your permalink function
var permaLinkURLShortener = null; // "/wsgi/createShortPermalink.wsgi";

// enable to use commercial Google and Bing layers (also add BingApiKey)
var enableBingCommercialMaps = false;

if (enableBingCommercialMaps) {
    var bingApiKey = "add Bing api key here"; // http://msdn.microsoft.com/en-us/library/ff428642.aspx
}

var enableGoogleCommercialMaps = true;

var enableOSMMaps = true;

var enableBGMaps = false;
if (enableBingCommercialMaps || enableOSMMaps || enableGoogleCommercialMaps) {
	enableBGMaps = true;
}
if (enableBGMaps) {
	// enter the index of the backgroundLayer to be visible after loading,
	// set to a value < 0 to not show any backgroundLayer
	// this setting is overridden if a value for url-parameter visibleBackgroundLayer is passed
	var initialBGMap = 0;
}

// enable to use WMTS base layers
var enableWmtsBaseLayers = false;
// NOTE: also set MapOptions according to WMTS

// media base URL to match media links in layer attributes
var mediaurl = '';
// do not show fields in ObjectIdentification results that have null values
var suppressEmptyValues = true;
// hide geometry in ObjectIdentification results (should be only false if there is a good reason to do so)
var suppressInfoGeometry = true;
// do show field names in click-popup during object identification
var showFieldNamesInClickPopup = true;
// show or hide the layer title in the feature info popup
// can be overwritten on a per-project basis in GISProjectListing.js
var showFeatureInfoLayerTitle = true;
// max-width and max-height of the feature-info popup can be controlled in site/css/popup.css


// Custom WMS GetFeatureInfo results formatters: you can define custom
// filter functions to apply custom formatting to values coming from
// GetFeatureInfo requests when the user use the "identify" tool.
// The same formatting functions can be normally also used as "renderer"
// function passed to column configuration in the "gridColumns" property
// of the grid configuration of the WMS GetFeatureInfo search panels.

// Example formatter, takes the value, the column name and the layer name,
// normally only the first parameter is used.
function customURLFormatter(attValue, attName, layerName){
    return '<a href="http://www.google.com/search?q=' + encodeURI(attValue) + '">' + attValue + '</a>';
}

// Formatters configuration
var getFeatureInfoCustomFormatters = {
    'Country': { // Layer name
        'name': customURLFormatter // Can be an array if you need multiple formatters
    }
};

//config for QGIS.SearchPanel
//Number of results: FEATURE_COUNT in WMS request
var simpleWmsSearchMaxResults = 10;

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
    {header: 'Name', dataIndex: 'name', menuDisabled: 'true', renderer: customURLFormatter}
  ],
//  highlightFeature: true,
//  highlightLabel: 'name',
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
//  highlightFeature: true,
//  highlightLabel: 'colour',
  selectionLayer: 'Hello',
  selectionZoom: 1
};

//list of configs for QGIS.SearchPanel per map name
var mapSearchPanelConfigs = {
  "helloworld": [simpleWmsSearch, urlRewriteSearch]
};

// Needed for helloworld project if rewrite is not active
mapSearchPanelConfigs[project_map] = [simpleWmsSearch, urlRewriteSearch];

//templates to define tooltips for a layer, to be shown on hover identify. The layer fields must be wrapped inside <%%> special tags.
//if a layers field is found with the name "tooltip" its content will have precedence over this configuration
var tooltipTemplates = {
	'Country':{
		template: "Look for the country on Google Search: <a href='http://www.google.it/#output=search&q=<%name%>' target='_blank'><%name%></a>"
	}
};


// SearchPanel search results output configuration
// by default, search results will be shown in left panel, under the
// search form. Sometimes this is not desired, here you can choose to
// show the results in one of the other panels, like BottomPanel and
// RightPanel. These additional panels are hidden by default because
// their expansion and collapse trigger a map resize->reload cycle that
// can slow down the application.
var mapSearchPanelOutputRegion = 'popup' ; // Possible values: default,right,bottom,popup

// Interactive legend. This is based on PHP get_legend.php script.
// You can define here an alternate URL for this service
//var interactiveLegendGetLegendURL = '../php/get_legend.php?map=' + project_map + '&';


//define whether you want to display a map theme switcher
//note that you have to also link a GISProjectListing.js file containing a valid
//project listing structure - the root object is called 'gis_projects'
//have a look at the template file and documentation for the correct json structure
var mapThemeSwitcherActive = true;
//you can provide an alternative template for the theme-switcher - see also file ThemeSwitcher.js (ThemeSwitcher.prototype.initialize)
var themeSwitcherTemplate = null;

//first part of titlebar text
var titleBarText = "GIS-Browser - "; // will be appended with project title

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

// Optional list of layers that should be displayed in a different image format,
// if the default image format is 8bit.
// The formats are applied in the order of the list, from highest to lowest priority.
/*
var layerImageFormats = [
  {
    format: "image/png",
    layers: ["Country"]
  },
  {
    format: "image/jpeg",
    layers: ["Shaded Relief"]
  }
];
*/

//EPSG projection code of your QGIS project
var authid = "EPSG:"+3857;

//background transparency for the QGIS Server generated layer (commercial background layers not effected)
//set to true if you want the background to be transparent, layer image will be bigger (32 vs 24bit)
var qgisLayerTransparency = true;

//number of zoomlevels, uses main map layer and all base layers
var ZOOM_LEVELS = 22;

// OpenLayers global options
// see http://dev.openlayers.org/releases/OpenLayers-2.10/doc/apidocs/files/OpenLayers/Map-js.html
var MapOptions = {
  projection: new OpenLayers.Projection(authid),
  units: "m",
//  maxScale:50,
//  minScale:40000000,
  numZoomLevels:ZOOM_LEVELS,
  fractionalZoom: !enableWmtsBaseLayers && !enableBGMaps,
  transitionEffect:"resize",
  controls: []
};

// Options for the main map layer (OpenLayers.layer)
//see http://dev.openlayers.org/releases/OpenLayers-2.12/doc/apidocs/files/OpenLayers/Layer-js.html
var LayerOptions = {
  buffer:0,
  singleTile:true,
  ratio:1,
  transitionEffect:"resize",
  isBaseLayer: false,
  projection:authid,
  yx: {"EPSG:900913": false},
  // If your projection is known to have an inverse axis order in WMS 1.3 compared to WMS 1.1 enter true for yx.
  // For EPSG:900913 OpenLayers should know it by default but because of a bug in OL 2.12 we enter it here.
  tileOptions: {
    // use POST for long URLs
    maxGetUrlLength: 2048
  }
};

//overview map settings - do not change variable names!
var OverviewMapOptions = {
  projection: new OpenLayers.Projection(authid),
  units: "m",
  maxScale:50,
  minScale:300000000,
  transitionEffect:"resize"
};
var OverviewMapSize = new OpenLayers.Size(200,200);
var OverviewMapMaximized = false; // is the overview map opend or closed by default
var overviewLayer = null;
if (enableOSMMaps) {
  overviewLayer = new OpenLayers.Layer.OSM();
}
else {
  overviewLayer = new OpenLayers.Layer.WMS("Overview-Map",
  serverAndCGI+"?map=/home/web/qgis-web-client/projects/naturalearth_110million.qgs",
  {layers:"Land",format:"image/png"},
  {buffer:0,singleTile:true,transitionEffect:"resize"});
}

// prevent the user from choosing a print resolution
// if fixedPrintResolution = null, the user is allowed to choose the print resolution.
var fixedPrintResolution = null; // for a fixed resolution of 200dpi fill 200

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
    {"name":"1:75'000","value":"75000"},
    {"name":"1:100'000","value":"100000"},
    {"name":"1:250'000","value":"250000"},
    {"name":"1:500'000","value":"500000"},
    {"name":"1:750'000","value":"750000"},
    {"name":"1:1'000'000","value":"1000000"},
    {"name":"1:2'500'000","value":"2500000"},
    {"name":"1:5'000'000","value":"5000000"},
    {"name":"1:7'500'000","value":"7500000"},
    {"name":"1:10'000'000","value":"10000000"},
    {"name":"1:15'000'000","value":"15000000"},
    {"name":"1:20'000'000","value":"20000000"},
    {"name":"1:25'000'000","value":"25000000"},
    {"name":"1:30'000'000","value":"30000000"},
    {"name":"1:35'000'000","value":"35000000"},
    {"name":"1:50'000'000","value":"50000000"},
    {"name":"1:60'000'000","value":"60000000"},
    {"name":"1:75'000'000","value":"75000000"},
    {"name":"1:100'000'000","value":"100000000"},
    {"name":"1:125'000'000","value":"125000000"},
    {"name":"1:150'000'000","value":"150000000"}
 ],
  "dpis":[
    {"name":"150 dpi","value":"150"},
    {"name":"300 dpi","value":"300"},
    {"name":"600 dpi","value":"600"},
    {"name":"1200 dpi","value":"1200"}
  ],
  "layouts":[]
};

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
    fillColor: "none",
    fillOpacity: 0
  }
};

// style for highlight labels of search results
// font weight from 0 to 99 (Light: 25, Normal: 50, DemiBold: 63, Bold: 75, Black: 87)
var highlightLabelStyle = {
//  font: "Serif",
  size: 12,
//  weight: 75,
  color: "#000000",
  buffercolor: "#FFFFFF",
  buffersize: 1
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
