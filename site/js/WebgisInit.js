/*

  WebgisInit.js -- part of Quantum GIS Web Client

  Copyright (2010-2012), The QGIS Project
  All rights reserved. 
  
  Released under a BSD license.
  Please see https://github.com/qgis/qgis-web-client/blob/master/README
  for the full text of the license.

*/

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
var identifyToolWasActive = false; //this state variable is used during theme switching
var initialLoadDone = false; //a state variable defining if an initial project was loaded or not
var themeChangeActive = false; //status to indicate if theme chang is active
var layerTreeSelectionChangeHandlerFunction; //a reference to the handler function of the selection tree
var help_active = false;
var helpWin;

Ext.onReady(function () {
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
	
	if (urlParamsOK) {
		loadWMSConfig();
	} else {
		alert(errMessageStartupNotAllParamsFoundString[lang]);
	}
});

function loadWMSConfig() {
	loadMask = new Ext.LoadMask(Ext.getCmp('MapPanel').body, {
		msg: mapLoadingString[lang]
	});
	loadMask.show();
	//load getCapabilities info in treeview
	wmsLoader = new QGIS.WMSCapabilitiesLoader({
		url: wmsURI,
		useGetProjectSettings: useGetProjectSettings,
		layerOptions: {
			buffer: 0,
			singleTile: true,
			ratio: 1
		},
		layerParams: {
			'TRANSPARENT': 'TRUE'
		},
		// customize the createNode method to add a checkbox to nodes and the ui provider
		createNode: function (attr) {
			attr.checked = false;
			return QGIS.WMSCapabilitiesLoader.prototype.createNode.apply(this, [attr]);
		},
		baseAttrs: {
			uiProvider: Ext.tree.TriStateNodeUI
		}
	});
	var root = new Ext.tree.AsyncTreeNode({
		loader: wmsLoader,
		listeners: {
			'load': function () {
				postLoading();
				legend_visible();
			}
		}
	});

	layerTree.setRootNode(root);	
}

layerTreeSelectionChangeHandlerFunction =  function (selectionModel, treeNode) {
	if (!themeChangeActive) {
		var legendTab = Ext.getCmp('LegendTab');
		var ToolsPanel = Ext.getCmp('ToolsPanel');
		var ToolTabPanel = Ext.getCmp('ToolTabPanel');
		legendTab.setHeight(ToolsPanel.getInnerHeight() - (ToolTabPanel.getHeight() - ToolTabPanel.getInnerHeight()));
		Ext.getCmp('ToolTabPanel').activate(legendTab);
		var imageUrl = wmsURI + 'SERVICE=WMS&VERSION=1.3&REQUEST=GetLegendGraphics&FORMAT=image/png&EXCEPTIONS=application/vnd.ogc.se_inimage&WIDTH=195&LAYERS=' + encodeURIComponent(treeNode.text) + '&dpi=' + screenDpi;
		var legendImage = '<p><img src="' + imageUrl + '" alt="Legend of Layer ' + treeNode.text + '" /></p>';
		legendTab.update({
			html: legendImage,
			border: false
		});
		//change selected activated layers for GetFeatureInfo requests
		layerTree.fireEvent("leafschange");
	}
}


function postLoading() {
	//set root node to active layer of layertree
	layerTree.selectPath(layerTree.root.firstChild.getPath());
	var legendTab = Ext.getCmp('LegendTab');
	if (!initialLoadDone) {
		//add event listener to ToolsPanel panel
		Ext.getCmp('ToolsPanel').on('resize', function (panel, w, h) {
			var ToolTabPanel = Ext.getCmp('ToolTabPanel');
			legendTab.setHeight(panel.getInnerHeight() - (ToolTabPanel.getHeight() - ToolTabPanel.getInnerHeight()));
		});
	}
	legendTab.update({
		html: '<p style="margin:0.4em;font-family:sans-serif;font-size:smaller;border-width:0px;border-style:none">'+legendDisplayHowtoString[lang]+'</p>',
		border: false,
		frame: false
	});
	
	//now set all visible layers and document/toolbar title
	var layerNode;
	layerTree.suspendEvents();
	if (layerTree.root.hasChildNodes()) {
		//set titles in document and toolbar
		var title = layerTree.root.firstChild.text;
		document.title = titleBarText + title;
		Ext.getCmp('GisBrowserPanel').setTitle(document.title);

		if (visibleLayers == null) {
			// show all layers if URL parameter 'visibleLayers' is missing
			layerTree.root.firstChild.expand(true, false);
			layerTree.root.firstChild.findChildBy(function () {
				if (this.isExpandable()) {
					// expand node while traversing in order to allow toggling checkbox on deeper levels
					this.expand(true, false);
				}
				this.getUI().toggleCheck(this.attributes.layer.visible);
				return false;
			}, null, true);
		} else {
			layerTree.root.firstChild.expand(true, false);
			for (var index = 0; index < visibleLayers.length; index++) {
				layerTree.root.firstChild.findChildBy(function () {
					if (this.isExpandable()) {
						// expand node while traversing in order to allow toggling checkbox on deeper levels
						this.expand(true, false);
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
					for (var i = 0; i < fullColorLayers.length; i++) {
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
		layerTree.root.firstChild.expand(false, false);
	}
	layerTree.checkedLeafs = [];
	layerTree.resumeEvents();

	if (!initialLoadDone) {
		//deal with myTopToolbar (map tools)
		//toggle buttons
		Ext.getCmp('IdentifyTool').toggleHandler = mapToolbarHandler;
		Ext.getCmp('measureDistance').toggleHandler = mapToolbarHandler;
		Ext.getCmp('measureArea').toggleHandler = mapToolbarHandler;
		Ext.getCmp('PrintMap').toggleHandler = mapToolbarHandler;
        Ext.getCmp('ShowHelp').handler = mapToolbarHandler;
		//combobox listeners
		var ObjectIdentificationModeCombobox = Ext.getCmp('ObjectIdentificationModeCombo');
		ObjectIdentificationModeCombobox.setValue("topMostHit");
		identificationMode = "topMostHit";
		ObjectIdentificationModeCombobox.on("select", function (combobox, record, index) {
			identificationMode = record.get("value");
			//need to updated active selected layers or all selected layers
			layerTree.fireEvent("leafschange");
		});
	}
	
	//test if max extent was set from URL or project settings
	//set map parameters
	//get values from first layer group (root) of project settings
	if (maxExtent instanceof OpenLayers.Bounds == false) {
		var boundingBox = wmsLoader.projectSettings.capability.nestedLayers[0].bbox;
		for (var key in boundingBox) {
			var bbox = boundingBox[key];
			maxExtent = OpenLayers.Bounds.fromArray(bbox.bbox);
			if (bbox.srs != MapOptions.projection.getCode()) {
				maxExtent.transform(new OpenLayers.Projection(bbox.srs), MapOptions.projection);
			}
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
			if (wmsLoader.layerProperties[n.text].queryable) {
				selectedQueryableLayers.push(n.text);
			}
		}
	});
	mainStatusText.setText(mapLoadingString[lang]);

	if (initialLoadDone) {
		printCapabilities.layouts = [];
	}
	// apply printing parameters from project settings
	var composerTemplates = wmsLoader.projectSettings.capability.composerTemplates;
	if (composerTemplates.length > 0) {
		printLayoutsDefined = true;
		for (var i = 0; i < composerTemplates.length; i++) {
			var composerTemplate = composerTemplates[i];
			var mapWidth = composerTemplate.map.width / ptTomm;
			var mapHeight = composerTemplate.map.height / ptTomm;
			//for some strange reason we need to provide a "map" and a "size" object with identical content
			printCapabilities.layouts.push({
				"name": composerTemplate.name,
				"map": {
					"width": mapWidth,
					"height": mapHeight
				},
				"size": {
					"width": mapWidth,
					"height": mapHeight
				},
				"rotation": true
			});
		}
	}

	// The printProvider that connects us to the print service
	printUri = wmsURI + 'SERVICE=WMS&VERSION=1.3&REQUEST=GetPrint&FORMAT=pdf&EXCEPTIONS=application/vnd.ogc.se_inimage&TRANSPARENT=true';
	if (initialLoadDone) {
		printProvider.capabilities = printCapabilities;
		printProvider.url = printUri;
	}
	else {
		printProvider = new QGIS.PrintProvider({
			method: "GET", // "POST" recommended for production use
			capabilities: printCapabilities, // from the info.json script in the html
			url: printUri
		});
	}
	
	if (!initialLoadDone) {
		printExtent = new GeoExt.plugins.PrintExtent({
			printProvider: printProvider
		});

		var styleHighLightLayer = new OpenLayers.Style();
		styleHighLightLayer.addRules([
		new OpenLayers.Rule({
			symbolizer: symbolizersHighLightLayer
		})]);
		var styleMapHighLightLayer = new OpenLayers.StyleMap({
			"default": styleHighLightLayer
		});
	}

	var MapPanelRef = Ext.getCmp('MapPanel');

	// return input layers sorted by order defined in project settings
	function layersInDrawingOrder(layers) {
		var layerDrawingOrder = wmsLoader.projectSettings.capability.layerDrawingOrder;
		if (layerDrawingOrder != null) {
			var orderedLayers = [];
			for (var i = 0; i < layerDrawingOrder.length; i++) {
				var layer = layerDrawingOrder[i];
				if (layers.indexOf(layer) != -1) {
					orderedLayers.push(layer);
				}
			}
			return orderedLayers;
		}
		else {
			return layers.reverse();
		}
	}
	
	//create new map panel with a single OL layer
	selectedLayers = layersInDrawingOrder(selectedLayers);

	if (!initialLoadDone) {
		geoExtMap = new GeoExt.MapPanel({
			zoom: 1.6,
			layers: [
			thematicLayer = new OpenLayers.Layer.WMS(layerTree.root.firstChild.text,
				wmsURI, {
					layers: selectedLayers.join(","),
					format: format,
					dpi: screenDpi
				},
				LayerOptions
			),
			//layerOptions: {styleMap: styleMapMeasureControls}, isBaseLayer: false,
			highlightLayer = new OpenLayers.Layer.Vector("attribHighLight", {
				isBaseLayer: false,
				styleMap: styleMapHighLightLayer
			})],
			map: MapOptions,
			id: "geoExtMapPanel",
			width: MapPanelRef.getInnerWidth(),
			height: MapPanelRef.getInnerHeight(),
			renderTo: MapPanelRef.body,
			plugins: [printExtent],
			items: [{
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
						'click': function () {
							geoExtMap.map.zoomIn();
						}
					}
				}]
			}, {
				xtype: "gx_zoomslider",
				vertical: true,
				aggressive: true,
				height: 100,
				x: 17,
				y: 50,
				plugins: new GeoExt.ZoomSliderTip()
			}, {
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
						'click': function () {
							geoExtMap.map.zoomOut();
						}
					}
				}]
			}]
		});
	}
	else {
		thematicLayer.name = layerTree.root.firstChild.text;
		thematicLayer.url = wmsURI;
		thematicLayer.mergeNewParams({
			"LAYERS": selectedLayers.join(",")
		});
		thematicLayer.mergeNewParams({
			"FORMAT": format
		});
	}
	
	if (!initialLoadDone) {
		if (urlParams.startExtent) {
			var startExtentParams = urlParams.startExtent.split(",");
			var startExtent = new OpenLayers.Bounds(parseFloat(startExtentParams[0]), parseFloat(startExtentParams[1]), parseFloat(startExtentParams[2]), parseFloat(startExtentParams[3]));
			geoExtMap.map.zoomToExtent(startExtent);
		} else {
			geoExtMap.map.zoomToMaxExtent();
		}
		//add listener to adapt map on panel resize (only needed because of IE)
		MapPanelRef.on('resize', function (panel, w, h) {
			geoExtMap.setWidth(panel.getInnerWidth());
			geoExtMap.setHeight(panel.getInnerHeight());
		});

		//scale listener to write current scale to numberfield
		geoExtMap.map.events.register('zoomend', this, function () {
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
				geoExtMap.map.zoomToScale(newValue, true);
			}
		});

		ScaleNumberField.on('specialkey', function (numberField, evt) {
			if (evt.getKey() == evt.ENTER) {
				var currentScale = Math.round(geoExtMap.map.getScale());
				var newScale = numberField.getValue();
				if (currentScale != newScale) {
					geoExtMap.map.zoomToScale(newScale, true);
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
		geoExtMap.map.events.register('mousemove', this, function (evt) {
			var xy = geoExtMap.map.events.getMousePosition(evt);
			var geoxy = geoExtMap.map.getLonLatFromPixel(xy);
			var nDeci = 0;
			var currentScale = geoExtMap.map.getScale();
			if (currentScale <= 400) {
				nDeci = 1;
				if (currentScale <= 100) {
					nDeci = 2;
				}
			}
			coordinateTextField.setRawValue(geoxy.lon.toFixed(nDeci) + "," + geoxy.lat.toFixed(nDeci));
		});

		coordinateTextField.on('specialkey', function (textField, evt) {
			if (evt.getKey() == evt.ENTER) {
				var coords = textField.getValue().split(",");
				var newCenter = new OpenLayers.LonLat(parseFloat(coords[0]), parseFloat(coords[1]));
				geoExtMap.map.setCenter(newCenter);
			}
			//supress arrow keys propagation to underlying OpenLayers
			if (evt.getKey() > 36 && evt.getKey() < 41) {
				evt.stopPropagation();
			}
		});
		coordinateTextField.on('change', function (numberField, newValue, oldValue) {
			var coords = newValue.split(",");
			var newCenter = new OpenLayers.LonLat(parseFloat(coords[0]), parseFloat(coords[1]));
			geoExtMap.map.setCenter(newCenter);
		});

		//navigation history
		navHistoryCtrl = new OpenLayers.Control.NavigationHistory();
		geoExtMap.map.addControl(navHistoryCtrl);
	}
	
	//controls for getfeatureinfo
	selectedQueryableLayers = layersInDrawingOrder(selectedQueryableLayers);

	if (initialLoadDone) {
		geoExtMap.map.removeControl(WMSGetFInfoHover);
		geoExtMap.map.removeControl(WMSGetFInfo);
	}
	var fiLayer = new OpenLayers.Layer.WMS(layerTree.root.firstChild.text, wmsURI, {
		layers: []
	}, {
		buffer: 0,
		singleTile: true,
		ratio: 1
	});

	WMSGetFInfo = new OpenLayers.Control.WMSGetFeatureInfo({
		layers: [fiLayer],
		infoFormat: "text/xml",
		queryVisible: true,
		vendorParams: {
			QUERY_LAYERS: selectedQueryableLayers.join(",")
		}
	});
	WMSGetFInfo.events.register("getfeatureinfo", this, showFeatureInfo);
	geoExtMap.map.addControl(WMSGetFInfo);

	WMSGetFInfoHover = new OpenLayers.Control.WMSGetFeatureInfo({
		layers: [fiLayer],
		infoFormat: "text/xml",
		queryVisible: true,
		hover: true,
		vendorParams: {
			QUERY_LAYERS: selectedQueryableLayers.join(",")
		}
	});
	WMSGetFInfoHover.events.register("getfeatureinfo", this, showFeatureInfoHover);
	geoExtMap.map.addControl(WMSGetFInfoHover);
		
	if (!initialLoadDone) {
		//initialize EXTJS attribute tooltip for feature info display
		attribToolTip = new Ext.ToolTip({
			target: geoExtMap.body,
			html: '<p>Attributdaten-Tooltip</p>',
			disabled: true,
			trackMouse: true,
			autoHide: false,
			autoWidth: true,
			autoHeight: true,
			listeners: {
				'move': function (tt, x, y) {
					//fixes disabled tooltip that still displays - not nice, but it works
					if (!identifyToolActive) {
						tt.disable();
						tt.hide();
					}
				}
			}
		});
	}
	
	//overview map
	if (!initialLoadDone) {
		OverviewMapOptions.maxExtent = maxExtent;
		geoExtMap.map.addControl(new OpenLayers.Control.OverviewMap({
			size: OverviewMapSize,
			minRatio: 16,
			maxRatio: 64,
			mapOptions: OverviewMapOptions,
			layers: [overviewLayer]
		}));
	}
	else {
		//todo: find out how to change the max extent in the OverviewMap
	}

	//navigation actions
	if (!initialLoadDone) {
		var myTopToolbar = Ext.getCmp('myTopToolbar');
		//zoom box
		var zoomBoxAction = new GeoExt.Action({
			icon: 'gis_icons/mActionZoomBox.png',
			id: 'navZoomBoxButton',
			scale: 'medium',
			control: new OpenLayers.Control.ZoomBox({
				out: false
			}),
			map: geoExtMap.map,
			tooltip: zoomRectangleTooltipString[lang],
			tooltipType: 'qtip',
			toggleGroup: 'mapTools',
			enableToggle: true,
			allowDepress: true
		});
		myTopToolbar.insert(0, zoomBoxAction);
		geoExtMap.map.zoomBoxActive = false;
		Ext.getCmp('navZoomBoxButton').on('toggle', mapToolbarHandler);

		//zoom full
		var zoomToMaxExtentAction = new GeoExt.Action({
			icon: 'gis_icons/mActionZoomFullExtent.png',
			scale: 'medium',
			control: new OpenLayers.Control.ZoomToMaxExtent(),
			map: geoExtMap.map,
			tooltip: zoomFullViewTooltipString[lang],
			tooltipType: 'qtip'
		});
		myTopToolbar.insert(1, zoomToMaxExtentAction);
		//zoom previous
		var zoomToPreviousAction = new GeoExt.Action({
			icon: 'gis_icons/mActionZoomLast.png',
			scale: 'medium',
			control: navHistoryCtrl.previous,
			disabled: true,
			tooltip: navigationHistoryBackwardTooltipString[lang],
			tooltipType: 'qtip'
		});
		myTopToolbar.insert(2, zoomToPreviousAction);
		//zoom next
		var zoomToNextAction = new GeoExt.Action({
			icon: 'gis_icons/mActionZoomNext.png',
			scale: 'medium',
			control: navHistoryCtrl.next,
			disabled: true,
			tooltip: navigationHistoryForwardTooltipString[lang],
			tooltipType: 'qtip'
		});
		myTopToolbar.insert(3, zoomToNextAction);

		//add QGISSearchCombo
		if (useGeoNamesSearchBox || searchBoxQueryURL != null) {
			myTopToolbar.insert(myTopToolbar.items.length, new Ext.Toolbar.Fill());

			if (useGeoNamesSearchBox) {
				qgisSearchCombo = new GeoExt.ux.GeoNamesSearchCombo({
					map: geoExtMap.map,
					width: 300,
					minChars: 2,
					loadingText: geonamesLoadingString[lang],
					emptyText: geonamesEmptyString[lang]
				});
			} else {
				qgisSearchCombo = new QGIS.SearchComboBox({
					map: geoExtMap.map,
					highlightLayerName: 'attribHighLight',
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
		if (mapThemeSwitcherActive == true) {
			var MyThemeSwitcher = new ThemeSwitcher(Ext.getCmp('MapPanel'));
		} else {
			// hide map theme button
			Ext.getCmp('mapThemeButton').hide();
		}

		function showURLParametersSearch(searchPanelConfigs) {
			if ('query' in urlParams) {
				// find search config for query
				var searchConfig = null;
				for (var i = 0; i < searchPanelConfigs.length; i++) {
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
					success: function (response) {
						var featureInfoParser = new QGIS.FeatureInfoParser();
						if (featureInfoParser.parseXML(response)) {
							if (featureInfoParser.featureIds().length > 0) {
								// select features in layer
								thematicLayer.mergeNewParams({
									"SELECTION": searchConfig.selectionLayer + ":" + featureInfoParser.featureIds().join(',')
								});

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

		//search panel and URL search parameters
		var searchPanelConfigs = [];
		if (wmsMapName in mapSearchPanelConfigs) {
			searchPanelConfigs = mapSearchPanelConfigs[wmsMapName];
		}
		if (searchPanelConfigs.length > 0) {
			// add QGIS search panels
			var searchTabPanel = Ext.getCmp('SearchTabPanel');
			for (var i = 0; i < searchPanelConfigs.length; i++) {
				var panel = new QGIS.SearchPanel(searchPanelConfigs[i]);
				panel.on("featureselected", showFeatureSelected);
				panel.on("featureselectioncleared", clearFeatureSelected);
				searchTabPanel.add(panel);
			}
			searchTabPanel.setActiveTab(0);

			// show search from URL parameters
			showURLParametersSearch(searchPanelConfigs);
		} else {
			// hide search panel
			var searchPanel = Ext.getCmp('SearchPanel');
			searchPanel.removeAll();
			searchPanel.hide();
		}

		//update layout of left panel and adds a listener to automatically adjust layout after resizing
		var leftPanel = Ext.getCmp('LeftPanel');
		leftPanel.doLayout();
		leftPanel.addListener('resize', function (myPanel, adjWidth, adjHeight, rawWidth, rawHeight) {
			myPanel.items.each(function (item, index, length) {
				item.width = adjWidth;
			});
			myPanel.doLayout();
		});

		//measure-controls (distance and area)
		var styleMeasureControls = new OpenLayers.Style();
		styleMeasureControls.addRules([
		new OpenLayers.Rule({
			symbolizer: sketchSymbolizersMeasureControls
		})]);
		var styleMapMeasureControls = new OpenLayers.StyleMap({
			"default": styleMeasureControls
		});

		measureControls = {
			line: new OpenLayers.Control.Measure(
			OpenLayers.Handler.Path, {
				persist: true,
				handlerOptions: {
					layerOptions: {
						styleMap: styleMapMeasureControls
					}
				}
			}),
			polygon: new OpenLayers.Control.Measure(
			OpenLayers.Handler.Polygon, {
				persist: true,
				handlerOptions: {
					layerOptions: {
						styleMap: styleMapMeasureControls
					}
				}
			})
		};

		var control;
		for (var key in measureControls) {
			control = measureControls[key];
			control.events.on({
				"measure": handleMeasurements,
				"measurepartial": handleMeasurements
			});
			geoExtMap.map.addControl(control);
		}
	}
	else {
		//todo see if we need to change something on project reload in this block, e.g. search panel
	}

	leafsChangeFunction = function () {
		//now collect all selected queryable layers for WMS request
		selectedLayers = Array();
		selectedQueryableLayers = Array();
		format = origFormat;
		layerTree.root.firstChild.cascade(

		function (n) {
			if (n.isLeaf() && n.attributes.checked) {
				selectedLayers.push(n.text);
				if (wmsLoader.layerProperties[n.text].queryable) {
					selectedQueryableLayers.push(n.text);
				}
				//test to see if we need to change to jpeg because checked
				//layer is in array fullColorLayers
				if (fullColorLayers.length > 0 && origFormat.match(/8bit/)) {
					for (var i = 0; i < fullColorLayers.length; i++) {
						if (fullColorLayers[i] == n.text) {
							format = "image/jpeg";
							break;
						}
					}
				}
			}
		});
		thematicLayer.mergeNewParams({
			format: format
		});
		//change array order
		selectedLayers = layersInDrawingOrder(selectedLayers);
		selectedQueryableLayers = layersInDrawingOrder(selectedQueryableLayers);
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
					if (wmsLoader.layerProperties[n.text].queryable) {
						selectedActiveQueryableLayers.push(n.text);
					}
				}
			});
			selectedActiveLayers = layersInDrawingOrder(selectedActiveLayers);
			selectedActiveQueryableLayers = layersInDrawingOrder(selectedActiveQueryableLayers);
		}
		thematicLayer.mergeNewParams({
			layers: selectedLayers.join(",")
		});
		if (identificationMode != 'activeLayers') {
			WMSGetFInfo.vendorParams = {
				'QUERY_LAYERS': selectedQueryableLayers.join(',')
			};
		} else {
			WMSGetFInfo.vendorParams = {
				'QUERY_LAYERS': selectedActiveQueryableLayers.join(',')
			};
		}
		if (identificationMode != 'activeLayers') {
			WMSGetFInfoHover.vendorParams = {
				'QUERY_LAYERS': selectedQueryableLayers.join(',')
			};
		} else {
			WMSGetFInfoHover.vendorParams = {
				'QUERY_LAYERS': selectedActiveQueryableLayers.join(',')
			};
		}
	}
	
	if (initialLoadDone) {
		layerTree.removeListener("leafschange",leafsChangeFunction);
	}
	//add listeners for layertree
	layerTree.addListener('leafschange',leafsChangeFunction);

	//printing initalization
	if (!initialLoadDone) {
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
				x: 50,
				y: 10,
				items: [{
					tbar: {
						xtype: 'toolbar',
						autoHeight: true,
						id: 'myPrintToolbar',
						items: [{
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
								fields: [{
									name: 'name',
									type: 'string'
								}, 'map', 'size', 'rotation']
							}),
							valueField: 'name',
							displayField: 'name',
							listeners: {
								'select': function (combo, record, index) {
									printProvider.setLayout(record);
								}
							}
						}, {
							xtype: 'tbspacer'
						}, {
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
								fields: [{
									name: 'name',
									type: 'string'
								}, {
									name: 'value',
									type: 'int'
								}]
							}),
							valueField: 'value',
							displayField: 'name',
							listeners: {
								'select': function (combo, record, index) {
									printExtent.page.setScale(record);
								}
							}
						}, {
							xtype: 'tbspacer'
						}, {
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
								fields: [{
									name: 'name',
									type: 'string'
								}, {
									name: 'value',
									type: 'int'
								}]
							}),
							valueField: 'value',
							displayField: 'name',
							listeners: {
								'select': function (combo, record, index) {
									printProvider.setDpi(record);
								}
							}
						}, {
							xtype: 'tbspacer'
						}, {
							xtype: 'tbspacer'
						}, {
							xtype: 'label',
							text: printSettingsRotationTextlabelString[lang]
						}, {
							xtype: 'tbspacer'
						}, {
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
								'spin': function () {
									printExtent.page.setRotation(Ext.getCmp('PrintLayoutRotation').getValue(), true);
								},
								'keyup': function (textField, event) {
									printExtent.page.setRotation(Ext.getCmp('PrintLayoutRotation').getValue(), true);
									event.stopPropagation();
								},
								'keydown': function (textField, event) {
									event.stopPropagation();
								},
								'keypress': function (textField, event) {
									event.stopPropagation();
								}
							}
						}, {
							xtype: 'tbspacer'
						}, {
							xtype: 'button',
							tooltip: printButtonTooltipString[lang],
							text: printButtonTextString[lang],
							tooltipType: 'qtip',
							iconCls: '',
							scale: 'medium',
							id: 'StartPrinting',
							listeners: {
								'click': function () {
									Ext.getCmp('PrintMap').toggle(false);
									printProvider.print(geoExtMap, [printExtent.page]);
								}
							}
						}, {
							xtype: 'button',
							tooltip: printCancelButtonTooltipString[lang],
							text: printCancelButtonTextString[lang],
							tooltipType: 'qtip',
							iconCls: '',
							scale: 'medium',
							id: 'CancelPrinting',
							listeners: {
								'click': function () {
									Ext.getCmp('PrintMap').toggle(false);
								}
							}
						}]
					}
				}]
			});
			printLayoutsCombobox = Ext.getCmp('PrintLayoutsCombobox');
			printLayoutsCombobox.setValue(printLayoutsCombobox.store.getAt(0).data.name);
			var printDPICombobox = Ext.getCmp('PrintDPICombobox');
			printDPICombobox.setValue("300");
			//need to manually fire the event, because .setValue doesn't; index omitted, not needed
			printDPICombobox.fireEvent("select", printDPICombobox, printDPICombobox.findRecord(printDPICombobox.valueField, "300"));
			printExtent.initialized = false;
			//bug in spinnerField: need to explicitly show/hide printWindow (toolbar)
			printWindow.show();
			printWindow.hide();
		} else {
			//need to disable printing because no print layouts are defined in
			var printMapButton = Ext.getCmp('PrintMap');
			printMapButton.disable();
			printMapButton.setTooltip(printMapDisabledTooltipString[lang]);
		}
		printExtent.hide();
	}
	else {
		if (identifyToolWasActive) {
			identifyToolWasActive = false;
			Ext.getCmp('IdentifyTool').toggle(true);
		}
		//todo need to check whether printing needs some updates after project change
		themeChangeActive = false;
	}

	//handle events for legend display
	var selModel = layerTree.getSelectionModel();
	//add listeners to selection model
	selModel.addListener("selectionChange",layerTreeSelectionChangeHandlerFunction);

	//show that we are done with initializing the map
	mainStatusText.setText(modeNavigationString[lang]);
	loadMask.hide();
	initialLoadDone = true;
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

function mapToolbarHandler(btn, evt) {
	if (btn.id == "IdentifyTool") {
		if (btn.pressed) {
			identifyToolActive = true;
			WMSGetFInfo.activate();
			WMSGetFInfoHover.activate();
			attribToolTip.enable();
			attribToolTip.show();
			attribToolTip.update('<p>' + mapTipsNoResultString[lang] + '</p>');
			mainStatusText.setText(modeObjectIdentificationString[lang]);
		} else {
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
		} else {
			measureControls["line"].deactivate();
			mainStatusText.setText(modeNavigationString[lang]);
			rightStatusText.setText("");
		}
	}
	if (btn.id == "measureArea") {
		if (btn.pressed) {
			measureControls["polygon"].activate();
			mainStatusText.setText(modeMeasureAreaString[lang]);
		} else {
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
				printExtent.page.on('change', function (page, modifications) {
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
			printExtent.page.setRotation(0, true);
			Ext.getCmp('PrintLayoutRotation').setValue(0);
			printExtent.page.fit(geoExtMap, {
				'mode': 'screen'
			});
			printExtent.show();
			mainStatusText.setText(modePrintingString[lang]);
		} else {
			printWindow.hide();
			printExtent.hide();
			mainStatusText.setText(modeNavigationString[lang]);
		}
	}
	if (btn.id == "navZoomBoxButton") {
		if (btn.pressed) {
			geoExtMap.map.zoomBoxActive = true;
			mainStatusText.setText(modeZoomRectangle[lang]);
		} else {
			geoExtMap.map.zoomBoxActive = false;
			mainStatusText.setText(modeNavigationString[lang]);
		}
	}
  if (btn.id == "ShowHelp") {
    if (help_active == true){
      help_active = false;
      helpWin.close();
    } else {
      help_active = true;
      helpWin = new Ext.Window({
        title: helpWindowTitleString[lang]
        ,width: geoExtMap.getWidth()
        ,height: geoExtMap.getHeight() * 0.7
        ,id:'autoload-win'
        ,autoScroll:true
        ,maximizable: true
        ,autoLoad:{
            url:helpfile
        }
        ,listeners:{
          show:function() {
            this.loadMask = new Ext.LoadMask(this.body, {
                msg:pleaseWaitString[lang]
            });
          },
          hide:function() {
            help_active = false;
            helpWin.close();
          }
        }
      });
      helpWin.show();
    }
  }
}

function handleMeasurements(event) {
	var geometry = event.geometry;
	var units = event.units;
	var order = event.order;
	var measure = event.measure;
	var out = "";
	if (order == 1) {
		out += measureDistanceResultPrefixString[lang] + ": " + measure.toFixed(2) + units + " | ";
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
