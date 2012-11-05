var geoExtMap;
var layerTree;
var selectedLayers = "";
var selectedQueryableLayers = "";
var thematicLayer, highlightLayer;
var highLightGeometry = new Array();
var WMSGetFInfo, WMSGetFInfoHover;
var AttributeDataTree;
var lastLayer, lastFeature;
var featureInfoResultLayers;
var measureControls;
var mainStatusText, rightStatusText;
var loadMask; //mask displayed during loading or longer operations
var attribToolTip;
var screenDpi;
var qgisSearchCombo; //modified search combobox
var wmsLoader; //modified WMSCapabilitiesLoader from GeoExt
var xsiNamespace = "http://www.w3.org/2001/XMLSchema-instance";
var printWindow;
var printProvider, printExtent;
var ptTomm = 0.35277; //conversion pt to mm
var printScaleCombobox;
var coordinateTextField; //reference to number field for coordinate display
var printLayoutsDefined = false; //true if ComposerTemplates are found in QGIS
var navHistoryCtrl; //OpenLayers NavigationHistory control
var identificationMode; //can have a value from objectIdentificationModes
var mapInfoFieldName = "tooltip"; // this field is suppressed in the AttributeTree panel
var identifyToolActive = false; // a state variable used to track whether the tooltip should be displayed or not
var initialLoadDone = false; //a state variable defining if an initial project was loaded or not
var gisProjectListingStore = undefined; //this will later hold a json store containing 


Ext.onReady(function() {
  //dpi detection
  screenDpi = document.getElementById("dpiDetection").offsetHeight;
  OpenLayers.DOTS_PER_INCH = screenDpi;

  //some references
  AttributeDataTree = Ext.getCmp('AttributeDataTree');
  layerTree = Ext.getCmp('LayerTree');
  mainStatusText = Ext.getCmp('mainStatusText');
  rightStatusText = Ext.getCmp('rightStatusText');

  //set some status messsages
  mainStatusText.setText(mapAppLoadingString[lang]);

  loadMask = new Ext.LoadMask(Ext.getCmp('MapPanel').body, {msg:mapLoadingString[lang]});
  loadMask.show();

  if (urlParamsOK) {
    var getCapURI = wmsURI+"SERVICE=WMS&VERSION=1.3&REQUEST=GetCapabilities";
    //load getCapabilities info in treeview
    wmsLoader = new QGIS.WMSCapabilitiesLoader({
        url: getCapURI,
        layerOptions: {buffer: 0, singleTile: true, ratio: 1},
        layerParams: {'TRANSPARENT': 'TRUE'},
        // customize the createNode method to add a checkbox to nodes and the ui provider
        createNode: function(attr) {
          attr.checked = false;
          return QGIS.WMSCapabilitiesLoader.prototype.createNode.apply(this, [attr]);
        },
        baseAttrs:{
      uiProvider:Ext.tree.TriStateNodeUI
        }
    });
    var root = new Ext.tree.AsyncTreeNode({
      //loader: new GeoExt.tree.WMSCapabilitiesLoader({
      loader: wmsLoader,
      listeners: {
        'load': function() {
           postLoading();
           legend_visible(); 
        }
      }
    });

    layerTree.setRootNode(root);
  }
  else {
    alert(errMessageStartupNotAllParamsFoundString[lang]);
  }
});

function postLoading() {
  //set root node to active layer of layertree
  layerTree.selectPath(layerTree.root.firstChild.getPath());
  //handle events for legend display
  var selModel = layerTree.getSelectionModel();
  //add listeners to selection model
  selModel.on('selectionChange', function(selectionModel, treeNode) {
    var legendTab = Ext.getCmp('LegendTab');
    var ToolsPanel = Ext.getCmp('ToolsPanel');
    var ToolTabPanel = Ext.getCmp('ToolTabPanel');
    legendTab.setHeight(ToolsPanel.getInnerHeight() - (ToolTabPanel.getHeight() - ToolTabPanel.getInnerHeight()));
    Ext.getCmp('ToolTabPanel').activate(legendTab);
    var imageUrl = wmsURI+'SERVICE=WMS&VERSION=1.3&REQUEST=GetLegendGraphics&FORMAT=image/png&EXCEPTIONS=application/vnd.ogc.se_inimage&WIDTH=195&LAYERS='+encodeURIComponent(treeNode.text)+'&dpi='+screenDpi;
    var legendImage = '<p><img src="'+imageUrl+'" alt="Legend of Layer '+treeNode.text+'" /></p>';
    legendTab.update({html:legendImage,border:false});
    //change selected activated layers for GetFeatureInfo requests
    layerTree.fireEvent("leafschange");
  });
  //add event listener to ToolsPanel panel
  Ext.getCmp('ToolsPanel').on('resize', function(panel, w, h) {
    var legendTab = Ext.getCmp('LegendTab');
    var ToolTabPanel = Ext.getCmp('ToolTabPanel');
    legendTab.setHeight(panel.getInnerHeight() - (ToolTabPanel.getHeight() - ToolTabPanel.getInnerHeight()));
  });

  //now set all visible layers and document/toolbar title
  var layerNode;
  layerTree.suspendEvents();
  if (layerTree.root.hasChildNodes()) {
    //set titles in document and toolbar
    var title = layerTree.root.firstChild.text;
    document.title = titleBarText+title;
    Ext.getCmp('GisBrowserPanel').setTitle(document.title);

    if (visibleLayers == null) {
      // show all layers if URL parameter 'visibleLayers' is missing
      layerTree.root.firstChild.expand(true,false);
      layerTree.root.firstChild.findChildBy(function() {
          if (this.isExpandable()) {
            // expand node while traversing in order to allow toggling checkbox on deeper levels
            this.expand(true,false);
          }
          this.getUI().toggleCheck(true);
          return false;
      }, null, true);
    }
    else {
      layerTree.root.firstChild.expand(true,false);
      for (var index=0;index < visibleLayers.length; index++) {
        layerTree.root.firstChild.findChildBy(function() {
          if (this.isExpandable()) {
            // expand node while traversing in order to allow toggling checkbox on deeper levels
            this.expand(true,false);
          }
          if (this.attributes["text"] == visibleLayers[index]) {
            this.getUI().toggleCheck(true);
            return true;
          }
          return false;
        }, null, true);
        //test to see if we need to change to jpeg because checked
        //layer is in array fullColorLayers
        if (fullColorLayers.length > 0 && origFormat.match(/8bit/)) {
          for (var i=0;i<fullColorLayers.length;i++) {
            if (fullColorLayers[i] == visibleLayers[index]) {
              format = "image/jpeg";
              break;
            }
          }
        }
      }
    }
    //expand first level
    layerTree.root.firstChild.collapseChildNodes(true);
    layerTree.root.firstChild.expand(false,false);
  }
  layerTree.checkedLeafs= [];
  layerTree.resumeEvents();

  //deal with myTopToolbar (map tools)
  //toggle buttons
  Ext.getCmp('IdentifyTool').toggleHandler = mapToolbarHandler;
  Ext.getCmp('measureDistance').toggleHandler = mapToolbarHandler;
  Ext.getCmp('measureArea').toggleHandler = mapToolbarHandler;
  Ext.getCmp('PrintMap').toggleHandler = mapToolbarHandler;
  //combobox listeners
  var ObjectIdentificationModeCombobox = Ext.getCmp('ObjectIdentificationModeCombo');
  ObjectIdentificationModeCombobox.setValue("topMostHit");
  identificationMode = "topMostHit";
  ObjectIdentificationModeCombobox.on("select",function (combobox,record,index) {
    identificationMode = record.get("value");
    //need to updated active selected layers or all selected layers
    layerTree.fireEvent("leafschange");
  });

  //set map parameters
  //read values from first group (root) of GetCapabilities response
  if (urlParams.maxExtent) {
    var maxExtentParams = urlParams.maxExtent.split(",");
    var maxExtent = new OpenLayers.Bounds(parseFloat(maxExtentParams[0]),parseFloat(maxExtentParams[1]),parseFloat(maxExtentParams[2]),parseFloat(maxExtentParams[3]));
  }
  else {
    var BoundingBox = wmsLoader.WMSCapabilities.getElementsByTagName("BoundingBox")[0];
    var maxExtent = new OpenLayers.Bounds(parseFloat(BoundingBox.getAttribute("minx")),parseFloat(BoundingBox.getAttribute("miny")),parseFloat(BoundingBox.getAttribute("maxx")),parseFloat(BoundingBox.getAttribute("maxy")));
    var layer_crs = BoundingBox.getAttribute("CRS");
    if (layer_crs != null && layer_crs != MapOptions.projection.getCode()) {
      maxExtent.transform(new OpenLayers.Projection(layer_crs), MapOptions.projection);
    }
  }
  MapOptions.maxExtent = maxExtent;

  //now collect all selected layers (with checkbox enabled in tree)
  selectedLayers = Array();
  selectedQueryableLayers = Array();
  layerTree.root.firstChild.cascade(
    function (n) {
      if (n.isLeaf() && n.attributes.checked) {
        selectedLayers.push(n.text);
        if (wmsLoader.layerProperties[n.text].queryable == 1) {
          selectedQueryableLayers.push(n.text);
        }
      }
    }
  );
  mainStatusText.setText(mapLoadingString[lang]);

  //now extract printing parameters from the getCapabilities request
  var composerTemplateNodes = wmsLoader.WMSCapabilities.getElementsByTagName("ComposerTemplate");
  if (composerTemplateNodes.length > 0) {
    printLayoutsDefined = true;

    var layoutName = "";
    var mapWidth = "";
    var mapHeight = "";
    var composerMap = undefined;
    for (var i=0;i<composerTemplateNodes.length;i++) {
      layoutName = composerTemplateNodes[i].getAttribute("name");
      composerMap = composerTemplateNodes[i].getElementsByTagName("ComposerMap")[0];
      mapWidth = parseFloat(composerMap.getAttribute("width"));
      mapHeight = parseFloat(composerMap.getAttribute("height"));
      //for some strange reason we need to provide a "map" and a "size" object with identical content
      printCapabilities.layouts.push({"name":layoutName,"map":{"width":(mapWidth/ptTomm),"height":(mapHeight/ptTomm)},"size":{"width":(mapWidth/ptTomm),"height":(mapHeight/ptTomm)},"rotation":true})
    }
  }

  // The printProvider that connects us to the print service
  printProvider = new QGIS.PrintProvider({
    method: "GET", // "POST" recommended for production use
    capabilities: printCapabilities, // from the info.json script in the html
    url: wmsURI+'SERVICE=WMS&VERSION=1.3&REQUEST=GetPrint&FORMAT=pdf&EXCEPTIONS=application/vnd.ogc.se_inimage&TRANSPARENT=true'
  });

  printExtent = new GeoExt.plugins.PrintExtent({
    printProvider: printProvider
  });

  var styleHighLightLayer = new OpenLayers.Style();
  styleHighLightLayer.addRules([
    new OpenLayers.Rule({symbolizer: symbolizersHighLightLayer})
  ]);
  var styleMapHighLightLayer = new OpenLayers.StyleMap({"default": styleHighLightLayer});

  var MapPanelRef = Ext.getCmp('MapPanel');

  //create new map panel with a single OL layer
  geoExtMap = new GeoExt.MapPanel({
    zoom: 1.6,
    layers: [
      thematicLayer = new OpenLayers.Layer.WMS(layerTree.root.firstChild.text,
        wmsURI,
        {layers:selectedLayers.reverse().join(","),format:format,dpi:screenDpi},
        {buffer:0,singleTile:true,ratio:1,transitionEffect:"resize"}
      ),
      //layerOptions: {styleMap: styleMapMeasureControls}, isBaseLayer: false,
      highlightLayer = new OpenLayers.Layer.Vector("attribHighLight",{isBaseLayer: false, styleMap: styleMapHighLightLayer})
    ],
    map: MapOptions,
    id: "geoExtMapPanel",
    width: MapPanelRef.getInnerWidth(),
    height: MapPanelRef.getInnerHeight(),
    renderTo: MapPanelRef.body,
    plugins: [printExtent],
    items: [
    {
      xtype: "buttongroup",
      x: 10,
      y: 10,
      columns: 1,
      floating: true,
      frame: false,
      items: [{
        xtype: "button",
        scale: "medium",
        icon: 'gis_icons/mActionZoomIn.png',
        tooltip: zoomInTooltipString[lang],
        listeners: {
          'click': function() {
            geoExtMap.map.zoomIn();
          }
        }
      }]
    },
    {
        xtype: "gx_zoomslider",
        vertical: true,
        aggressive: true,
        height: 100,
        x: 17,
        y: 50,
        plugins: new GeoExt.ZoomSliderTip()
    },
    {
      xtype: "buttongroup",
      x: 10,
      y: 155,
      columns: 1,
      floating: true,
      frame: false,
      items: [{
        xtype: "button",
        scale: "medium",
        icon: 'gis_icons/mActionZoomOut.png',
        tooltip: zoomOutTooltipString[lang],
        listeners: {
          'click': function() {
            geoExtMap.map.zoomOut();
          }
        }
      }]
    }
    ]
  });
  if (urlParams.startExtent) {
    var startExtentParams = urlParams.startExtent.split(",");
    var startExtent = new OpenLayers.Bounds(parseFloat(startExtentParams[0]),parseFloat(startExtentParams[1]),parseFloat(startExtentParams[2]),parseFloat(startExtentParams[3]));
    geoExtMap.map.zoomToExtent(startExtent);
  }
  else {
    geoExtMap.map.zoomToMaxExtent();
  }

  //add listener to adapt map on panel resize (only needed because of IE)
  MapPanelRef.on('resize', function(panel, w, h) {
    geoExtMap.setWidth(panel.getInnerWidth());
    geoExtMap.setHeight(panel.getInnerHeight());
  });

  //scale listener to write current scale to numberfield
  geoExtMap.map.events.register('zoomend', this, function() {
    var currentScale = geoExtMap.map.getScale();
    Ext.getCmp('ScaleNumberField').setValue(Math.round(currentScale));
    if (geoExtMap.map.zoomBoxActive) {
      Ext.getCmp('navZoomBoxButton').toggle(false);
    }
  });

  // loading listeners 
  thematicLayer.events.register('loadstart', this, function() {
    mapIsLoading = true;
    // show the loadMask with a delay of one second, no need to show it for quick changes
    setTimeout("displayLoadMask()", 1000); 
  });

  thematicLayer.events.register('loadend', this, function() {
    mapIsLoading = false; 
    if (loadMask) {
      loadMask.hide();
      loadMask = null;
    }
  });

  //listener on numberfield to set map scale
  var ScaleNumberField = Ext.getCmp('ScaleNumberField');
  ScaleNumberField.setValue(Math.round(geoExtMap.map.getScale()));
  ScaleNumberField.on('change', function (numberField, newValue, oldValue) {
    var currentScale = Math.round(geoExtMap.map.getScale());
    if (currentScale != newValue) {
      geoExtMap.map.zoomToScale(newValue,true);
    }
  });

  ScaleNumberField.on('specialkey', function (numberField, evt) {
    if (evt.getKey() == evt.ENTER) {
      var currentScale = Math.round(geoExtMap.map.getScale());
      var newScale = numberField.getValue();
      if (currentScale != newScale) {
        geoExtMap.map.zoomToScale(newScale,true);
      }
    }
    //supress arrow keys propagation to underlying OpenLayers
    if (evt.getKey() > 36 && evt.getKey() < 41) {
      evt.stopPropagation();
    }
  });

  //add OpenLayers map controls
  geoExtMap.map.addControl(new OpenLayers.Control.KeyboardDefaults());
  geoExtMap.map.addControl(new OpenLayers.Control.Navigation());
  //to hide miles/feet in the graphical scale bar we need to adapt "olControlScaleLineBottom" in file /OpenLayers/theme/default/style.css: display:none;
  geoExtMap.map.addControl(new OpenLayers.Control.ScaleLine());

  //coordinate display
  coordinateTextField = Ext.getCmp('CoordinateTextField')
  geoExtMap.map.events.register('mousemove', this, function(evt) {
    var xy = geoExtMap.map.events.getMousePosition(evt);
    var geoxy = geoExtMap.map.getLonLatFromPixel(xy);
    var nDeci = 0;
    var currentScale = geoExtMap.map.getScale();
    if  (currentScale <= 400) {
      nDeci = 1;
      if (currentScale <= 100) {
        nDeci = 2;
      }
    }
    coordinateTextField.setRawValue(geoxy.lon.toFixed(nDeci)+","+geoxy.lat.toFixed(nDeci));
  });

  coordinateTextField.on('specialkey', function (textField, evt) {
    if (evt.getKey() == evt.ENTER) {
      var coords = textField.getValue().split(",");
      var newCenter = new OpenLayers.LonLat(parseFloat(coords[0]),parseFloat(coords[1]));
      geoExtMap.map.setCenter(newCenter);
    }
    //supress arrow keys propagation to underlying OpenLayers
    if (evt.getKey() > 36 && evt.getKey() < 41) {
      evt.stopPropagation();
    }
  });
  coordinateTextField.on('change', function (numberField, newValue, oldValue) {
      var coords = newValue.split(",");
      var newCenter = new OpenLayers.LonLat(parseFloat(coords[0]),parseFloat(coords[1]));
      geoExtMap.map.setCenter(newCenter);
  });

  //navigation history
  navHistoryCtrl = new OpenLayers.Control.NavigationHistory();
  geoExtMap.map.addControl(navHistoryCtrl);
  //controls for getfeatureinfo
  selectedQueryableLayers.reverse();
  var fiLayer = new OpenLayers.Layer.WMS(layerTree.root.firstChild.text,wmsURI,{layers:[]},{buffer:0,singleTile:true,ratio:1});
  WMSGetFInfo = new OpenLayers.Control.WMSGetFeatureInfo({layers: [fiLayer], infoFormat: "text/xml", queryVisible: true, vendorParams: {QUERY_LAYERS: selectedQueryableLayers.join(",")}});
  WMSGetFInfo.events.register("getfeatureinfo", this, showFeatureInfo);
  geoExtMap.map.addControl(WMSGetFInfo);
  WMSGetFInfoHover = new OpenLayers.Control.WMSGetFeatureInfo({layers: [fiLayer], infoFormat: "text/xml", queryVisible: true, hover: true, vendorParams: {QUERY_LAYERS: selectedQueryableLayers.join(",")}});
  WMSGetFInfoHover.events.register("getfeatureinfo", this, showFeatureInfoHover);
  geoExtMap.map.addControl(WMSGetFInfoHover);
  attribToolTip = new Ext.ToolTip(
    {
	   target:geoExtMap.body,
	   html:'<p>Attributdaten-Tooltip</p>',
	   disabled:true,
	   trackMouse:true,
	   autoHide:false,
	   autoWidth:true,
	   autoHeight:true,
	   listeners: {
	     'move': function(tt,x,y) {
			//fixes disabled tooltip that still displays - not nice, but it works
			if (!identifyToolActive) {
				tt.disable();
				tt.hide();
			}
		 }
	   }
	});


  //overview map
  OverviewMapOptions.maxExtent = maxExtent;
  geoExtMap.map.addControl(new OpenLayers.Control.OverviewMap({size:OverviewMapSize,minRatio:16,maxRatio:64,mapOptions:OverviewMapOptions,layers:[overviewLayer]}));

  //navigation actions
  var myTopToolbar = Ext.getCmp('myTopToolbar');
  //zoom box
  var zoomBoxAction = new GeoExt.Action({
    icon: 'gis_icons/mActionZoomBox.png',
    id: 'navZoomBoxButton',
    scale: 'medium',
    control: new OpenLayers.Control.ZoomBox({out: false}),
    map: geoExtMap.map,
    tooltip: zoomRectangleTooltipString[lang],
    tooltipType: 'qtip',
    toggleGroup: 'mapTools',
    enableToggle: true,
    allowDepress: true
  });
  myTopToolbar.insert(0,zoomBoxAction);
  geoExtMap.map.zoomBoxActive = false;
  Ext.getCmp('navZoomBoxButton').on('toggle',mapToolbarHandler);

  //zoom full
  var zoomToMaxExtentAction = new GeoExt.Action({
    icon: 'gis_icons/mActionZoomFullExtent.png',
    scale: 'medium',
    control: new OpenLayers.Control.ZoomToMaxExtent(),
    map: geoExtMap.map,
    tooltip: zoomFullViewTooltipString[lang],
    tooltipType: 'qtip'
  });
  myTopToolbar.insert(1,zoomToMaxExtentAction);
  //zoom previous
  var zoomToPreviousAction = new GeoExt.Action({
    icon: 'gis_icons/mActionZoomLast.png',
    scale: 'medium',
    control: navHistoryCtrl.previous,
    disabled: true,
    tooltip: navigationHistoryBackwardTooltipString[lang],
    tooltipType: 'qtip'
  });
  myTopToolbar.insert(2,zoomToPreviousAction);
  //zoom next
  var zoomToNextAction = new GeoExt.Action({
    icon: 'gis_icons/mActionZoomNext.png',
    scale: 'medium',
    control: navHistoryCtrl.next,
    disabled: true,
    tooltip: navigationHistoryForwardTooltipString[lang],
    tooltipType: 'qtip'
  });
  myTopToolbar.insert(3,zoomToNextAction);

  //add QGISSearchCombo
  if (useGeoNamesSearchBox || searchBoxQueryURL != null) {
    myTopToolbar.insert(myTopToolbar.items.length, new Ext.Toolbar.Fill());

    if (useGeoNamesSearchBox) {
      qgisSearchCombo = new GeoExt.ux.GeoNamesSearchCombo(
      {
        map: geoExtMap.map,
        width: 300,
        minChars: 2,
        loadingText: geonamesLoadingString[lang],
        emptyText: geonamesEmptyString[lang]
      });
    }
    else {
      qgisSearchCombo = new QGIS.SearchComboBox({
        map: geoExtMap.map,
        highlightLayerName:'attribHighLight',
        width: 300,
        searchtables: searchtables
      });
    }
    myTopToolbar.insert(myTopToolbar.items.length, qgisSearchCombo);

    var emptySearchFieldButton = new Ext.Button({
      scale: 'medium',
      icon: 'gis_icons/mActionUndo.png',
      tooltipType: 'qtip',
      tooltip: resetSearchFieldTooltipString[lang],
      id: 'EmptySearchField'
    });
    emptySearchFieldButton.handler = mapToolbarHandler;
    myTopToolbar.insert(myTopToolbar.items.length, emptySearchFieldButton);
  }

  myTopToolbar.doLayout();
  
  //map themes panel
  //var MapThemesPanel = Ext.getCmp('MapThemesPanel');
  if (mapThemeSwitcherActive == true) {
	//create a new jsonstore holding the project-listing data
	if (gis_projects) {
		gisProjectListingStore = new Ext.data.JsonStore({
			storeId: 'gisProjectListingStore',
			data: gis_projects,
			// reader configs
			root: 'topic',
			idProperty: 'name',
			fields: ['name']
		});
		/*var gisProjectsListView = new Ext.list.ListView({
			store: gisProjectListingStore,
			multiSelect: false,
			reserveScrollOffset: true,
			columns: [{
				dataIndex: 'name'
			}],
			renderTo: MapThemesPanel.body
		});*/
	}
	else {
		alert(errMessageGisProjectsJSONStructureMissing[lang]);
	}
  }
  else {
    // hide map theme button
    Ext.getCmp('mapThemeButton').hide();
  }

  //search panel and URL search parameters
  var searchPanelConfigs = [];
  if (wmsMapName in mapSearchPanelConfigs) {
    searchPanelConfigs = mapSearchPanelConfigs[wmsMapName];
  }
  if (searchPanelConfigs.length > 0) {
    // add QGIS search panels
    var searchTabPanel = Ext.getCmp('SearchTabPanel');
    for (var i=0; i<searchPanelConfigs.length; i++) {
      var panel = new QGIS.SearchPanel(searchPanelConfigs[i]);
      panel.on("featureselected", showFeatureSelected);
      panel.on("featureselectioncleared", clearFeatureSelected);
      searchTabPanel.add(panel);
    }
    searchTabPanel.setActiveTab(0);

    // show search from URL parameters
    showURLParametersSearch(searchPanelConfigs);
  }
  else {
    // hide search panel
    var searchPanel = Ext.getCmp('SearchPanel');
    searchPanel.removeAll();
    searchPanel.hide();
  }
  
  //update layout of left panel and adds a listener to automatically adjust layout after resizing
  var leftPanel = Ext.getCmp('LeftPanel');
  leftPanel.doLayout();
  leftPanel.addListener('resize',function(myPanel, adjWidth, adjHeight, rawWidth, rawHeight) {
	  myPanel.items.each(function(item,index,length) {
		item.width = adjWidth;
	  });
	  myPanel.doLayout();
  });

  function showURLParametersSearch(searchPanelConfigs) {
    if ('query' in urlParams) {
      // find search config for query
      var searchConfig = null;
      for (var i=0; i<searchPanelConfigs.length; i++) {
        if (urlParams.query == searchPanelConfigs[i].query) {
          searchConfig = searchPanelConfigs[i];
          break;
        }
      }

      // submit search request (using URL rewriting)
      Ext.Ajax.request({
        url: wmsURI,
        params: urlParams,
        method: 'GET',
        success: function(response) {
          var featureInfoParser = new QGIS.FeatureInfoParser();
          if (featureInfoParser.parseXML(response)) {
            if (featureInfoParser.featureIds().length > 0) {
              // select features in layer
              thematicLayer.mergeNewParams({"SELECTION": searchConfig.selectionLayer + ":" + featureInfoParser.featureIds().join(',')});

              // zoom to features
              var bbox = featureInfoParser.featuresBbox();
              geoExtMap.map.zoomToExtent(new OpenLayers.Bounds(bbox.minx, bbox.miny, bbox.maxx, bbox.maxy));
              var scale = geoExtMap.map.getScale() * 1.1;
              if (scale < 500) {
                scale = 500;
              }
              geoExtMap.map.zoomToScale(scale);
            }
          }
        }
      });
    };
  };

  //measure-controls (distance and area)
  var styleMeasureControls = new OpenLayers.Style();
  styleMeasureControls.addRules([
    new OpenLayers.Rule({symbolizer: sketchSymbolizersMeasureControls})
  ]);
  var styleMapMeasureControls = new OpenLayers.StyleMap({"default": styleMeasureControls});

  measureControls = {
    line: new OpenLayers.Control.Measure(
      OpenLayers.Handler.Path, {
        persist: true,
        handlerOptions: {
          layerOptions: {styleMap: styleMapMeasureControls}
        }
      }
    ),
    polygon: new OpenLayers.Control.Measure(
      OpenLayers.Handler.Polygon, {
        persist: true,
        handlerOptions: {
          layerOptions: {styleMap: styleMapMeasureControls}
        }
      }
    )
  };

  var control;
  for(var key in measureControls) {
    control = measureControls[key];
    control.events.on({
      "measure": handleMeasurements,
      "measurepartial": handleMeasurements
    });
    geoExtMap.map.addControl(control);
  }

  //listeners für layertree dazufügen
  layerTree.addListener('leafschange',function () {
    //now collect all selected queryable layers for WMS request
    selectedLayers = Array();
    selectedQueryableLayers = Array();
    format = origFormat;
    layerTree.root.firstChild.cascade(
      function (n) {
        if (n.isLeaf() && n.attributes.checked) {
          selectedLayers.push(n.text);
          if (wmsLoader.layerProperties[n.text].queryable == 1) {
            selectedQueryableLayers.push(n.text);
          }
          //test to see if we need to change to jpeg because checked
          //layer is in array fullColorLayers
          if (fullColorLayers.length > 0 && origFormat.match(/8bit/)) {
            for (var i=0;i<fullColorLayers.length;i++) {
              if (fullColorLayers[i] == n.text) {
                 format = "image/jpeg";
                 break;
              }
            } 
          }
        }
      }
    );
    thematicLayer.mergeNewParams({format:format});
    //change array order
    selectedLayers.reverse();
    selectedQueryableLayers.reverse();
    if (identificationMode == 'activeLayers') {
      //only collect selected layers that are active
      var selectedActiveLayers = Array();
      var selectedActiveQueryableLayers = Array();
      //need to find active layer
      var activeNode = layerTree.getSelectionModel().getSelectedNode();
      activeNode.cascade(
        function (n) {
          if (n.isLeaf() && n.attributes.checked) {
            selectedActiveLayers.push(n.text);
            if (wmsLoader.layerProperties[n.text].queryable == 1) {
              selectedActiveQueryableLayers.push(n.text);
            }
          }
        }
      );
      selectedActiveLayers.reverse();
      selectedActiveQueryableLayers.reverse();
    }
    thematicLayer.mergeNewParams({layers:selectedLayers.join(",")});
    if (identificationMode != 'activeLayers') {
      WMSGetFInfo.vendorParams = {'QUERY_LAYERS':selectedQueryableLayers.join(',')};
    }
    else {
      WMSGetFInfo.vendorParams = {'QUERY_LAYERS':selectedActiveQueryableLayers.join(',')};
    }
    if (identificationMode != 'activeLayers') {
      WMSGetFInfoHover.vendorParams = {'QUERY_LAYERS':selectedQueryableLayers.join(',')};
    }
    else {
      WMSGetFInfoHover.vendorParams = {'QUERY_LAYERS':selectedActiveQueryableLayers.join(',')};
    }
  });

  if (printLayoutsDefined == true) {
    //create new window to hold printing toolbar
    printWindow = new Ext.Window({
      title: printSettingsToolbarTitleString[lang],
      height: 67,
      width: 495,
      layout: "fit",
      renderTo: "geoExtMapPanel",
      resizable: false,
      closable: false,
      x:50,
      y:10,
      items: [{
      tbar: {
        xtype: 'toolbar',
        autoHeight: true,
        id: 'myPrintToolbar',
        items: [
          {
            xtype: 'combo',
            id: 'PrintLayoutsCombobox',
            width: 100,
            mode: 'local',
            triggerAction: 'all',
            readonly: true,
            store: new Ext.data.JsonStore({
              // store configs
              data: printCapabilities,
              storeId: 'printLayoutsStore',
              // reader configs
              root: 'layouts',
              fields: [{name:'name', type: 'string'},'map','size','rotation']
            }),
            valueField: 'name',
            displayField: 'name',
            listeners: {
            'select': function(combo,record,index) {
              printProvider.setLayout(record);
            }
            }
          },
          { xtype: 'tbspacer' },
          {
            xtype: 'combo',
            id: 'PrintScaleCombobox',
            width: 75,
            mode: 'local',
            triggerAction: 'all',
            store: new Ext.data.JsonStore({
              // store configs
              data: printCapabilities,
              storeId: 'printScalesStore',
              // reader configs
              root: 'scales',
              fields: [{name:'name', type: 'string'},{name:'value', type: 'int'}]
            }),
            valueField: 'value',
            displayField: 'name',
            listeners: {
            'select': function(combo,record,index) {
              printExtent.page.setScale(record);
            }
            }
          },
          { xtype: 'tbspacer' },
          {
            xtype: 'combo',
            id: 'PrintDPICombobox',
            width: 70,
            mode: 'local',
            triggerAction: 'all',
            store: new Ext.data.JsonStore({
              // store configs
              data: printCapabilities,
              storeId: 'printDPIStore',
              // reader configs
              root: 'dpis',
              fields: [{name:'name', type: 'string'},{name:'value', type: 'int'}]
            }),
            valueField: 'value',
            displayField: 'name',
            listeners: {
            'select': function(combo,record,index) {
              printProvider.setDpi(record);
            }
            }
          },
          { xtype: 'tbspacer' },
          { xtype: 'tbspacer' },
          {
            xtype: 'label',
            text: printSettingsRotationTextlabelString[lang]
          },
          { xtype: 'tbspacer' },
          {
            xtype: 'spinnerfield',
            id: 'PrintLayoutRotation',
            width: 60,
            value: 0,
            allowNegative: true,
            autoStripChars: true,
            allowDecimals: false,
            minValue: -360,
            maxValue: 360,
            enableKeyEvents: true,
            listeners: {
            'spin': function() {
              printExtent.page.setRotation(Ext.getCmp('PrintLayoutRotation').getValue(),true);
            },
            'keyup': function(textField,event) {
              printExtent.page.setRotation(Ext.getCmp('PrintLayoutRotation').getValue(),true);
              event.stopPropagation();
            },
            'keydown': function(textField,event) {
              event.stopPropagation();
            },
            'keypress': function(textField,event) {
              event.stopPropagation();
            }
            }
          },
          { xtype: 'tbspacer' },
          {
            xtype: 'button',
            tooltip: printButtonTooltipString[lang],
            text: printButtonTextString[lang],
            tooltipType: 'qtip',
            iconCls: '',
            scale: 'medium',
            id: 'StartPrinting',
            listeners: {
              'click': function() {
                Ext.getCmp('PrintMap').toggle(false);
                printProvider.print(geoExtMap,[printExtent.page]);
              }
            }
          },
          {
            xtype: 'button',
            tooltip: printCancelButtonTooltipString[lang],
            text: printCancelButtonTextString[lang],
            tooltipType: 'qtip',
            iconCls: '',
            scale: 'medium',
            id: 'CancelPrinting',
            listeners: {
              'click': function() {
                Ext.getCmp('PrintMap').toggle(false);
              }
            }
          }
        ]
      }
      }]
    });
    printLayoutsCombobox = Ext.getCmp('PrintLayoutsCombobox');
    printLayoutsCombobox.setValue(printLayoutsCombobox.store.getAt(0).data.name);
    var printDPICombobox = Ext.getCmp('PrintDPICombobox');
    printDPICombobox.setValue("300");
    //need to manually fire the event, because .setValue doesn't; index omitted, not needed
    printDPICombobox.fireEvent("select",printDPICombobox,printDPICombobox.findRecord(printDPICombobox.valueField,"300"));
    printExtent.initialized = false;
    //bug in spinnerField: need to explicitly show/hide printWindow (toolbar)
    printWindow.show();
    printWindow.hide();
  }
  else {
    //need to disable printing because no print layouts are defined in
    var printMapButton = Ext.getCmp('PrintMap');
    printMapButton.disable();
    printMapButton.setTooltip(printMapDisabledTooltipString[lang]);
  }
  printExtent.hide();

  //show that we are done with initializing the map
  mainStatusText.setText(modeNavigationString[lang]);
  loadMask.hide();
}

function legend_visible() {
    // on load active layers
    node = layerTree.getSelectionModel().getSelectedNode();
    selectedLayers = Array();
    selectedQueryableLayers = Array();

    layerTree.root.firstChild.cascade(
        function (n) {
            if (n.attributes.checked && n.isLeaf()) {
                selectedLayers.reverse();
                selectedLayers.push(n.text);

                selectedLayers.reverse();
                selectedLayers = legend_unique(selectedLayers);

                (legend_length == -1) ? legend_layers=selectedLayers : legend_layers = selectedLayers.slice(legend_length*(-1)) ;

                //update legend graphic
                legend_image(legend_layers);

                //update legend height
                legend_height();

            } //  End is leaf && checked
        }   //  End function n
    );	 //  End LayerTree Cascade

    // on checkchange active layers
    Ext.getCmp('LayerTree').on("checkchange", function(node){

        var selectedLayers = [];
        var legend_layers = [];
        node = layerTree.getSelectionModel().getSelectedNode();

        //layerTree.root.firstChild.disable();
        layerTree.root.firstChild.cascade(
            function (n) {
                if (n.attributes.checked && n.isLeaf()) {

                    selectedLayers.reverse();
                    selectedLayers.push(n.text);

                    selectedLayers.reverse();
                    selectedLayers = legend_unique(selectedLayers);

                    (legend_length == -1) ? legend_layers=selectedLayers : legend_layers = selectedLayers.slice(legend_length*(-1)) ;

                    //update legend graphic
                    legend_image(legend_layers);

                    //update legend height
                    legend_height();
                }
                else {

                    if (n.attributes.checked == false) {

                        (legend_length == -1) ? legend_layers=selectedLayers : legend_layers = selectedLayers.slice(legend_length*(-1)) ;

                        //update legend graphic
                        legend_image(legend_layers);

                        //update legend height
                        legend_height();

                        //output notification if no layer is selected
                        var legend_layers_count = legend_layers.length;
                        if (legend_layers_count == 0){
                            var legendTab = Ext.getCmp('LegendTab');
                            var msg = '<p>Keine Ebene ausgewählt</p>';
                            legendTab.update({html:msg,border:false, autoScroll: true, autoShow: true });
                        }
                    }
                }
            } // END function(n)
        ); // END Cascade
    });   //  END Checkchange
}

function legend_image(legend_layers) {
    var legendTab = Ext.getCmp('LegendTab');
    var imageUrl = wmsURI+'SERVICE=WMS&VERSION=1.3&REQUEST=GetLegendGraphics&FORMAT=image/png&EXCEPTIONS=application/vnd.ogc.se_inimage&WIDTH=195&LAYERS='+encodeURIComponent(legend_layers)+'&dpi='+screenDpi;
    var legendImage = '<p><img id="legend_img" src="'+imageUrl+'" height="auto" alt="Legend of Layer '+legend_layers+'" /></p>';
    legendTab.update({html:legendImage,border:false, autoScroll: true, autoShow: true });
}

function legend_unique(origArr) {
    var newArr = [],
        origLen = origArr.length,
        found,
        x, y;

    for ( x = 0; x < origLen; x++ ) {
        found = undefined;
        for ( y = 0; y < newArr.length; y++ ) {
            if ( origArr[x] === newArr[y] ) {
                found = true;
                break;
            }
        }
        if ( !found) newArr.push( origArr[x] );
    }
    return newArr;
}

function legend_height() {
    var legendTab = Ext.getCmp('LegendTab');
    var ToolsPanel = Ext.getCmp('ToolsPanel');
    var ToolTabPanel = Ext.getCmp('ToolTabPanel');
    legendTab.setHeight(ToolsPanel.getInnerHeight() - (ToolTabPanel.getHeight() - ToolTabPanel.getInnerHeight()));
}

function mapToolbarHandler(btn,evt) {
  if (btn.id == "IdentifyTool") {
    if (btn.pressed) {
	  identifyToolActive = true;
      WMSGetFInfo.activate();
      WMSGetFInfoHover.activate();
      attribToolTip.enable();
      attribToolTip.show();
	  attribToolTip.update('<p>'+mapTipsNoResultString[lang]+'</p>');
      mainStatusText.setText(modeObjectIdentificationString[lang]);
    }
    else {
	  identifyToolActive = false;
      WMSGetFInfo.deactivate();
      WMSGetFInfoHover.deactivate();
      highlightLayer.removeAllFeatures();
      attribToolTip.disable();
      attribToolTip.hide();
      //AttributeDataTree.collapse();
      mainStatusText.setText(modeNavigationString[lang]);
    }
  }
  if (btn.id == "measureDistance") {
    if (btn.pressed) {
      measureControls["line"].activate();
      mainStatusText.setText(modeMeasureDistanceString[lang]);
    }
    else {
      measureControls["line"].deactivate();
      mainStatusText.setText(modeNavigationString[lang]);
      rightStatusText.setText("");
    }
  }
  if (btn.id == "measureArea") {
    if (btn.pressed) {
      measureControls["polygon"].activate();
      mainStatusText.setText(modeMeasureAreaString[lang]);
    }
    else {
      measureControls["polygon"].deactivate();
      mainStatusText.setText(modeNavigationString[lang]);
      rightStatusText.setText("");
    }
  }
  if (btn.id == "EmptySearchField") {
    qgisSearchCombo.clearSearchResult();
  }
  if (btn.id == "PrintMap") {
    if (btn.pressed) {
        printWindow.show();
        if (!printExtent.initialized) {
          printExtent.addPage();
          printExtent.page.lastScale = Math.round(printExtent.page.scale.data.value);
          printExtent.page.lastRotation = 0;
          Ext.getCmp('PrintScaleCombobox').setValue(printExtent.page.lastScale);
          //listener when page scale changes from page extent widget
          printExtent.page.on('change', function(page,modifications) {
          if (page.scale.data.value != printExtent.page.lastScale) {
          Ext.getCmp('PrintScaleCombobox').setValue(page.scale.data.value);
          printExtent.page.lastScale = page.scale.data.value;
          }
          if (Math.round(page.rotation) != printExtent.page.lastRotation) {
          Ext.getCmp('PrintLayoutRotation').setValue(Math.round(page.rotation));
          printExtent.page.lastRotation = Math.round(page.rotation);
          }
          });
          printExtent.initialized = true;
        }
        printExtent.page.setRotation(0,true);
        Ext.getCmp('PrintLayoutRotation').setValue(0);
        printExtent.page.fit(geoExtMap,{'mode':'screen'});
        printExtent.show();
        mainStatusText.setText(modePrintingString[lang]);
    }
    else {
        printWindow.hide();
        printExtent.hide();
        mainStatusText.setText(modeNavigationString[lang]);
    }
  }
  if (btn.id == "navZoomBoxButton") {
    if (btn.pressed) {
      geoExtMap.map.zoomBoxActive = true;
        mainStatusText.setText(modeZoomRectangle[lang]);
    }
    else {
      geoExtMap.map.zoomBoxActive = false;
        mainStatusText.setText(modeNavigationString[lang]);
    }
  }
}

function showFeatureInfo(evt) {
  //empty previous result in attribute Tree
  AttributeDataTree.getRootNode().removeAll();
  if (identifyToolActive) {
	  if (window.DOMParser) {
		var parser = new DOMParser();
		xmlDoc = parser.parseFromString(evt.text,"text/xml");
	  }
	  else {
		xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async="false";
		xmlDoc.loadXML(evt.text);
	  }
	  // open AttributeTree panel
	  AttributeDataTree.expand();
	  featureInfoResultLayers = new Array();
	  highLightGeometry = new Array();
	  parseFeatureInfoResult(xmlDoc);
	  featureInfoResultLayers.reverse();
	  highLightGeometry.reverse();
	  highlightLayer.removeAllFeatures();
	  var idsToRemove = new Array(); // array to store fields/attributes that should not be displayed
	  if (identificationMode == 'topMostHit' && featureInfoResultLayers.length > 0) {
		var featureInfoResult = featureInfoResultLayers[0];
		AttributeDataTree.getRootNode().appendChild(featureInfoResult);
		var feature = new OpenLayers.Feature.Vector(OpenLayers.Geometry.fromWKT(highLightGeometry[0]));
		highlightLayer.addFeatures([feature]);
		// scan through the results and check if there are any to be suppressed
		for (var j = 0;j<featureInfoResult.childNodes.length;j++) {
		  var aFeatureInfo = featureInfoResult.childNodes[j];
		  for (var k = 0;k<aFeatureInfo.childNodes.length;k++) {
			var anAttributeValue = aFeatureInfo.childNodes[k];
			var parts = anAttributeValue.attributes.text.split(":");
			// condition 1: field name = tooltip, cond 2 fields with null values
			if ((parts[0] === mapInfoFieldName) || (suppressEmptyValues && parts[1].replace(/^\s\s*/, '').replace(/\s\s*$/, '') === "")){
			  idsToRemove.push(anAttributeValue.id);
			}
		  }
		}
	  }
	  else if (identificationMode == 'allLayers' || identificationMode == 'activeLayers') {
		var features = new Array();
		for (var i = 0;i<featureInfoResultLayers.length;i++) {
		  var featureInfoResult = featureInfoResultLayers[i];
		  AttributeDataTree.getRootNode().appendChild(featureInfoResult);
		  features[i] = new OpenLayers.Feature.Vector(OpenLayers.Geometry.fromWKT(highLightGeometry[i]));
		  // scan through the results and check if there are any to be suppressed
		  for (var j = 0;j<featureInfoResult.childNodes.length;j++) {
			  var aFeatureInfo = featureInfoResult.childNodes[j];
			  for (var k = 0;k<aFeatureInfo.childNodes.length;k++) {
				  var anAttributeValue = aFeatureInfo.childNodes[k];
				  var parts = anAttributeValue.attributes.text.split(":");
				  // condition 1: field name = tooltip, cond 2 fields with null values
				  if ((parts[0] === mapInfoFieldName) || (suppressEmptyValues && parts[1].replace(/^\s\s*/, '').replace(/\s\s*$/, '') === "")){
					idsToRemove.push(anAttributeValue.id);
				  }
			   }
		   }
		}
		highlightLayer.addFeatures(features);
	  }
	  AttributeDataTree.getRootNode().expandChildNodes(true);
	  // remove suppressed attributes
	  for (var i = 0;i<idsToRemove.length;i++) {
		AttributeDataTree.getRootNode().findChild("id", idsToRemove[i], true).remove();
	  }
  }
}

function showFeatureInfoHover(evt) {
  //highlightLayer leeren
  highlightLayer.removeAllFeatures();
  if (identifyToolActive) {
	  if (window.DOMParser) {
		var parser = new DOMParser();
		xmlDoc = parser.parseFromString(evt.text,"text/xml");
	  }
	  else {
		xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async="false";
		xmlDoc.loadXML(evt.text);
	  }
	  var tooltipText = "";
	  var nameText = "";
	  var ogc_fidText = "";
	  var gidText = "";
	  var layerNodes = xmlDoc.getElementsByTagName("Layer");
	  var text = '<p>';
	  var result = false;
	  for (var i = layerNodes.length - 1; i > -1; --i) {
		var featureNodes = layerNodes[i].getElementsByTagName("Feature");
		for (var j = 0; j < featureNodes.length; ++j) {
		  if (j == 0) {
			text += '<span style="font-weight:bold;">'+layerNodes[i].getAttribute("name")+'</span><br/>';
			result = true;
		  }
		  var attribNodes = featureNodes[j].getElementsByTagName("Attribute");
		  for (var k = 0; k < attribNodes.length; ++k) {
			if (attribNodes[k].getAttribute("name") == "tooltip") {
			  attribText = attribNodes[k].getAttribute("value").replace(/\n/,"<br/>");
			  attribText = attribText.replace("\n","<br/>");
			  text += attribText + "<br/>";
			}
			else {
			  if (attribNodes[k].getAttribute("name") == "geometry") {
				var feature = new OpenLayers.Feature.Vector(OpenLayers.Geometry.fromWKT(attribNodes[k].getAttribute("value")));
				highlightLayer.addFeatures([feature]);
			  }
			}
		  }
		}
		if (identificationMode == 'topMostHit' && result) {
		  break;
		}
	  }
	  if (result == false) {
		text += mapTipsNoResultString[lang];
	  }
	  text += '</p>';
	  attribToolTip.update(text);
  }
}

function showFeatureSelected(layer, id, x, y, zoom) {
  // select feature in layer
  thematicLayer.mergeNewParams({"SELECTION": layer + ":" + id});
  geoExtMap.map.setCenter(new OpenLayers.LonLat(x, y), zoom);
}

function clearFeatureSelected() {
  // clear selection
  thematicLayer.mergeNewParams({"SELECTION": null});
}

function parseFeatureInfoResult(node) {
  if (node.hasChildNodes()) {
    if (node.nodeName == "Layer") {
      featureInfoResultLayers.push(new Ext.tree.TreeNode({text:node.getAttribute("name")}));
      //in case of a raster layer there is no "Feature" child - we need to create an "artificial feature"
      if (node.getElementsByTagName("Feature").length == 0) {
        lastFeature = new Ext.tree.TreeNode({text:"Rasterzelle"});
        featureInfoResultLayers[featureInfoResultLayers.length - 1].appendChild(lastFeature);
      }
    }
    if (node.nodeName == "Feature") {
      lastFeature = new Ext.tree.TreeNode({text:attributeFeatureWithString[lang] + node.getAttribute("id")});
      featureInfoResultLayers[featureInfoResultLayers.length - 1].appendChild(lastFeature);
    }
    var child = node.firstChild;
    while (child) {
      parseFeatureInfoResult(child);
      child = child.nextSibling;
    }
  }
  else {
    //leaf node
    if (node.nodeName == "Attribute") {
      lastFeature.appendChild(new Ext.tree.TreeNode({text:node.getAttribute("name") + ": " + node.getAttribute("value")}));
      if (node.getAttribute("name") == "geometry") {
        highLightGeometry.push(node.getAttribute("value"));
      }
    }
  }
}

function handleMeasurements(event) {
  var geometry = event.geometry;
  var units = event.units;
  var order = event.order;
  var measure = event.measure;
  var out = "";
  if(order == 1) {
    out += measureDistanceResultPrefixString[lang] +": " + measure.toFixed(2) + units + " | ";
  } else {
    out += measureAreaResultPrefixString[lang] + ": " + measure.toFixed(2) + units + "<sup>2</sup> | ";
  }
  rightStatusText.setText(out);
}

// function to display a loadMask during lengthy load operations
function displayLoadMask() {
  if (mapIsLoading) { // check if layer is still loading
    loadMask = new Ext.LoadMask(Ext.getCmp('MapPanel').body, {msg:mapLoadingString[lang]});
    loadMask.show();
  }
}
