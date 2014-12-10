/*
 *
 * WebgisInit.js -- part of QGIS Web Client
 *
 * Copyright (2010-2013), The QGIS Project All rights reserved.
 * QGIS Web Client is released under a BSD license. Please see
 * https://github.com/qgis/qgis-web-client/blob/master/README
 * for the full text of the license and the list of contributors.
 *
*/

var geoExtMap;
var layerTree;
var selectedLayers; //later an array containing all visible (selected) layers
var selectedQueryableLayers; //later an array of all visible (selected and queryable) layers
var allLayers; //later an array containing all leaf layers
var thematicLayer, highlightLayer, featureInfoHighlightLayer;
var arrayOSM; //OSM
var arrayAerial; //OSM
var arrayCycle; //OSM
var baseOSM; //OSM
var baseAerial; //OSM
var mapnik; //OSM
var cycle; //OSM
var googleSatelliteLayer;
var googleMapLayer;
var bingSatelliteLayer;
var highlighter = null;
var highLightGeometry = new Array();
var WMSGetFInfo, WMSGetFInfoHover;
var lastLayer, lastFeature;
var featureInfoResultLayers;
var measureControls;
var mainStatusText, rightStatusText;
var loadMask; //mask displayed during loading or longer operations
var screenDpi;
var qgisSearchCombo; //modified search combobox
var wmsLoader; //modified WMSCapabilitiesLoader from GeoExt
var xsiNamespace = "http://www.w3.org/2001/XMLSchema-instance";
var hoverPopup = null;
var clickPopup = null;
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
var themeChangeActive = false; //status to indicate if theme change is active
var mapThemeSwitcher = null; //later optionally holds reference to themeSwitcher
var layerTreeSelectionChangeHandlerFunction; //a reference to the handler function of the selection tree
var layerOrderPanel = null;
var help_active = false; //help window is active or not
var helpWin; //Ext window that will display the help file
var legendMetadataWindow_active = false; //legend graphic and metadata window is active or not
var legendMetadataWindow; //Ext window that will hold the legend and metatadata
var legendMetaTabPanel; //a reference to the Ext tabpanel holding the tabs for legend graphic and metadata
var legendTab; //a reference to the Ext tab holding the legend graphic
var metadataTab; //a reference to the Ext tab holding the metadata information
var measurePopup;
var baseLayers = [];
var currentlyVisibleBaseLayer = null;
var layerImageFormats = layerImageFormats || []; // use config from GlobalOptions if any

// Call custom Init in Customizations.js
customInit();

Ext.onReady(function () {
	//dpi detection
	screenDpi = document.getElementById("dpiDetection").offsetHeight;
	OpenLayers.DOTS_PER_INCH = screenDpi;

	//fix for IE <= 8, missing indexOf function
	if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
        "use strict";
        if (this == null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n != n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n != 0 && n != Infinity && n != -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    }
	}

	//some references
	layerTree = Ext.getCmp('LayerTree');
	mainStatusText = Ext.getCmp('mainStatusText');
	rightStatusText = Ext.getCmp('rightStatusText');

	//set some status messsages
	mainStatusText.setText(mapAppLoadingString[lang]);

	//OpenstreetMap background layers
	if (enableOSMMaps) {	    
        	arrayOSM = ["http://otile1.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.jpg",
                    	"http://otile2.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.jpg",
                    	"http://otile3.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.jpg",
                    	"http://otile4.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.jpg"];
        	arrayAerial = ["http://otile1.mqcdn.com/tiles/1.0.0/sat/${z}/${x}/${y}.jpg",
                        "http://otile2.mqcdn.com/tiles/1.0.0/sat/${z}/${x}/${y}.jpg",
                        "http://otile3.mqcdn.com/tiles/1.0.0/sat/${z}/${x}/${y}.jpg",
                        "http://otile4.mqcdn.com/tiles/1.0.0/sat/${z}/${x}/${y}.jpg"];
       		arrayCycle = ["http://a.tile.opencyclemap.org/cycle/${z}/${x}/${y}.png",
   			"http://b.tile.opencyclemap.org/cycle/${z}/${x}/${y}.png",
   			"http://c.tile.opencyclemap.org/cycle/${z}/${x}/${y}.png"];

        	baseOSM = new OpenLayers.Layer.OSM("MapQuest-OSM Tiles", arrayOSM, {numZoomLevels: 19, attribution: "Data, imagery and map information provided by <a href='http://www.mapquest.com/'  target='_blank'>MapQuest</a>, <a href='http://www.openstreetmap.org/' target='_blank'>Open Street Map</a> and contributors, <a href='http://creativecommons.org/licenses/by-sa/2.0/' target='_blank'>CC-BY-SA</a>  <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>"} );
       		baseAerial = new OpenLayers.Layer.OSM("MapQuest Open Aerial Tiles (zoom < 11)", arrayAerial, {numZoomLevels: 11, attribution: "Data, imagery and map information provided by <a href='http://www.mapquest.com/'  target='_blank'>MapQuest</a>, <a href='http://www.openstreetmap.org/' target='_blank'>Open Street Map</a> and contributors, <a href='http://creativecommons.org/licenses/by-sa/2.0/' target='_blank'>CC-BY-SA</a>  <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>"});
		mapnik= new OpenLayers.Layer.OSM("OpenStreetMap (mapnik)");
		cycle = new OpenLayers.Layer.OSM("OpenCycleMap",arrayCycle, {attribution: "<a href='http://www.openstreetmap.org/' target='_blank'>Open Street Map</a> and contributors. Tiles courtesy of<a target='_blank' href='http://www.thunderforest.com/'>Andy Allan</a>"});


		baseLayers.push(mapnik)
		baseLayers.push(baseOSM);
		baseLayers.push(cycle);
		baseLayers.push(baseAerial);
	}

	if (enableGoogleCommercialMaps) {
		googleSatelliteLayer = new OpenLayers.Layer.Google(
			"Google Satellite",
			{type: google.maps.MapTypeId.SATELLITE, numZoomLevels: ZOOM_LEVELS, isBaseLayer: true}
		);
		baseLayers.push(googleSatelliteLayer);
		googleMapLayer = new OpenLayers.Layer.Google(
			"Google Map",
			{type: google.maps.MapTypeId.MAP, numZoomLevels: ZOOM_LEVELS, isBaseLayer: true}
		);
		baseLayers.push(googleMapLayer);
	}
	if (enableBingCommercialMaps) {
		bingSatelliteLayer = new OpenLayers.Layer.Bing({
			name: "Bing Satellite",
			key: bingApiKey,
			type: "Aerial",
			isBaseLayer: true,
			visibility: false
		});
		baseLayers.push(bingSatelliteLayer);
	}

	if (urlParamsOK) {
		loadWMSConfig(null);
	} else {
		alert(errMessageStartupNotAllParamsFoundString[lang]);
	}

	if (fullColorLayers.length > 0) {
		// add fullColorLayers to layerImageFormats
		var fullColorLayersAppended = false;
		for (var i = 0; i < layerImageFormats.length; i++) {
			var layerImageFormat = layerImageFormats[i];
			if (layerImageFormat.format == "image/jpeg") {
				// append fullColorLayers to jpeg format
				layerImageFormat.layers = layerImageFormat.layers.concat(fullColorLayers);
				fullColorLayersAppended = true;
				break;
			}
		}
		if (!fullColorLayersAppended) {
			// add new jpeg config with fullColorLayers
			layerImageFormats.push({
				format: "image/jpeg",
				layers: fullColorLayers
			});
		}
	}

    customPostLoading(); //in Customizations.js
});

function loadWMSConfig(topicName) {
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
			if (!attr.layer.metadata.showCheckbox) {
				// hide checkbox
				attr.cls = 'layer-checkbox-hidden';
			}
			return QGIS.WMSCapabilitiesLoader.prototype.createNode.apply(this, [attr]);
		},
		baseAttrs: {
			uiProvider: Ext.tree.TriStateNodeUI
		},
		topicName: topicName
	});

	var root = new Ext.tree.AsyncTreeNode({
        id: 'wmsNode',
        text: 'WMS',
		    loader: wmsLoader,
		    allowDrop: false,
        expanded: true,
        expandChildNodes: true,
		    listeners: {
			    'load': function () {
				    postLoading();
			    }
		    }
	});

	layerTree.setRootNode(root);

}

layerTreeSelectionChangeHandlerFunction = function (selectionModel, treeNode) {
	if (!themeChangeActive) {
		//change selected activated layers for GetFeatureInfo requests
		layerTree.fireEvent("leafschange");
	}
}

function postLoading() {

	// run the function from Customizations.js
	customBeforeMapInit();

	//set root node to active layer of layertree
	layerTree.selectPath(layerTree.root.firstChild.getPath());

	applyPermalinkParams();

	//now set all visible layers and document/toolbar title
	var layerNode;
	layerTree.suspendEvents();
	if (layerTree.root.hasChildNodes()) {
		//set titles in document and toolbar
		var title = layerTree.root.firstChild.text;
		if (title in projectTitles) {
			title = projectTitles[title];
		}
		document.title = titleBarText + title;
		Ext.get('panel_header_title').update(document.title);

		// set header logo and link
		if (headerLogoImg != null) {
			Ext.select('#panel_header_link a').replaceWith({
				tag: 'a',
				href: headerLogoLink,
				target: '_blank',
				children: [{
					tag: 'img',
					src: headerLogoImg,
					height: headerLogoHeight
				}]
			});

			// adjust title position
			Ext.get('panel_header_title').setStyle('padding-left', '8px');
			var paddingTop = (headerLogoHeight - 18) / 2;
			Ext.get('panel_header_title').setStyle('padding-top', paddingTop + 'px');
		}

		// set terms of use link
		if (headerTermsOfUseText != null) {
			Ext.select('#panel_header_terms_of_use a').replaceWith({
				tag: 'a',
				href: headerTermsOfUseLink,
				html: headerTermsOfUseText,
				target: '_blank'
			});

			if (headerLogoImg != null) {
				// adjust terms of use position
				paddingTop = (headerLogoHeight - 12) / 2;
				Ext.get('panel_header_terms_of_use').setStyle('padding-top', paddingTop + 'px');
			}
		}

		//now iterate 'visibleLayers'
		if (visibleLayers == null) {
			//in case the visible layers are not provided as URL parameter we read the visibility settings from the
			//GetProjectSettings response - we need to adapt the drawing order from the project
			visibleLayers = layersInDrawingOrder(wmsLoader.initialVisibleLayers);
		}

		layerTree.root.firstChild.expand(true, false);
		// expand all nodes in order to allow toggling checkboxes on deeper levels
		layerTree.root.findChildBy(function () {
			if (this.isExpandable()) {
				this.expand(true, false);
			}
			return false;
		}, null, true);
		for (var index = 0; index < visibleLayers.length; index++) {
			// toggle checkboxes of visible layers
			layerTree.root.findChildBy(function () {
				if (wmsLoader.layerTitleNameMapping[this.attributes["text"]] == visibleLayers[index]) {
					this.getUI().toggleCheck(true);
					// FIXME: never return true even if node is found to avoid TypeError
					//				return true;
				}
				return false;
			}, null, true);
		}

		//we need to get a flat list of visible layers so we can set the layerOrderPanel
		getVisibleFlatLayers(layerTree.root.firstChild);

		// add abstracts to project node and group nodes
		addAbstractToLayerGroups();

		// add components to tree nodes while tree is expanded to match GUI layout
		// info buttons in layer tree
		addInfoButtonsToLayerTree();

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
        // check for undefined to not break existing installations
        if (typeof(enablePermalink) == 'undefined') {
            enablePermalink = true;
        }
        // Remove permaLinkButton as configured in GlobalOptions
        if (!enablePermalink) {
            Ext.getCmp('SendPermalink').destroy();
        } else {
            Ext.getCmp('SendPermalink').handler = mapToolbarHandler;
        }
		Ext.getCmp('ShowHelp').handler = mapToolbarHandler;

		// Add custom buttons (Customizations.js)
		customToolbarLoad();

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
	//if not, set map parameters from GetProjectSettings/GetCapabilities
	//get values from first layer group (root) of project settings
	if (maxExtent instanceof OpenLayers.Bounds == false) {
		var boundingBox = wmsLoader.projectSettings.capability.nestedLayers[0].bbox;
		//iterate over bbox - there should be only one entry
		for (var key in boundingBox) {
			if (key.match(/^EPSG:*/)) {
				var bboxArray = boundingBox[key].bbox;
				var srs = boundingBox[key].srs;
				// dummyLayer is created only to check if reverseAxisOrder is true
				var dummyLayer = new OpenLayers.Layer.WMS("dummy",
					wmsURI, {
						VERSION: "1.3.0"
					},
					LayerOptions
				);
				dummyLayer.projection = new OpenLayers.Projection(authid);
				var reverseAxisOrder = dummyLayer.reverseAxisOrder();
				maxExtent = OpenLayers.Bounds.fromArray(bboxArray, reverseAxisOrder);
			}
		}
	}
	// never change the map extents when using WMTS base layers
	if (!enableWmtsBaseLayers) {
		MapOptions.maxExtent = maxExtent;
	}

	//now collect all selected layers (with checkbox enabled in tree)
	selectedLayers = Array();
	selectedQueryableLayers = Array();
	allLayers = Array();
	var wmtsLayers = Array();

	layerTree.root.firstChild.cascade(

	function (n) {
		if (n.isLeaf()) {
			if (n.attributes.checked) {
				if (!wmsLoader.layerProperties[wmsLoader.layerTitleNameMapping[n.text]].wmtsLayer) {
					selectedLayers.push(wmsLoader.layerTitleNameMapping[n.text]);
				}
				else {
					wmtsLayers.push(wmsLoader.layerTitleNameMapping[n.text]);
				}
				if (wmsLoader.layerProperties[wmsLoader.layerTitleNameMapping[n.text]].queryable) {
					selectedQueryableLayers.push(wmsLoader.layerTitleNameMapping[n.text]);
				}
			}
			allLayers.push(wmsLoader.layerTitleNameMapping[n.text]);
		}
	});
	mainStatusText.setText(mapLoadingString[lang]);
	format = imageFormatForLayers(selectedLayers);

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
	printUrl = printURI + 'SERVICE=WMS&VERSION=1.3&REQUEST=GetPrint&FORMAT=pdf&EXCEPTIONS=application/vnd.ogc.se_inimage&TRANSPARENT=true';
	if (initialLoadDone) {
		printProvider.capabilities = printCapabilities;
		printProvider.url = printUrl;
	}
	else {
		printProvider = new QGIS.PrintProvider({
			method: "GET", // "POST" recommended for production use
			capabilities: printCapabilities, // from the info.json script in the html
			url: printUrl
		});
		printProvider.addListener("beforeprint", customBeforePrint);
		printProvider.addListener("afterprint", customAfterPrint);
	}

	if (!printExtent) {
		printExtent = new GeoExt.plugins.PrintExtent({
			printProvider: printProvider
		});
	}
	else {
		printExtent.printProvider = printProvider;
	}
	//set this to false, so that printExtent object will be re-initalized
	if (!printExtent.initialized) {
		printExtent.initialized = false;
	}


	if (!initialLoadDone) {
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
		if (layerOrderPanel != null) {
			// override project settings (after first load)
			if (enableWmtsBaseLayers) {
				// prepend ordered WMTS layers
				var orderedLayers = layerOrderPanel.orderedLayers();
				var wmtsLayers = [];
				for (var i = 0; i < layerDrawingOrder.length; i++) {
					var layer = layerDrawingOrder[i];
					if (orderedLayers.indexOf(layer) == -1) {
						wmtsLayers.push(layer);
					}
				}
				layerDrawingOrder = wmtsLayers.concat(orderedLayers);
			}
			else {
				layerDrawingOrder = layerOrderPanel.orderedLayers();
			}
		}

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

	// return layer opacities sorted by input layers order
	function layerOpacities(layers) {
		var opacities = Array();
		for (var i=0; i<layers.length; i++) {
			opacities.push(wmsLoader.layerProperties[layers[i]].opacity);
		}
		return opacities;
	}

	setupLayerOrderPanel();

	//create new map panel with a single OL layer
	selectedLayers = layersInDrawingOrder(selectedLayers);

	if (!initialLoadDone) {
		//we need to make sure that OpenLayers.map.fallThrough is set to true
		//otherwise the mouse events are swallowed
		MapOptions.fallThrough = true;
		//creating the GeoExt map panel
		geoExtMap = new GeoExt.MapPanel({
            frame: false,
            border: false,
			zoom: 1.6,
			layers: baseLayers.concat([
			thematicLayer = new OpenLayers.Layer.WMS(layerTree.root.firstChild.text,
				wmsURI, {
					layers: selectedLayers.join(","),
					opacities: layerOpacities(selectedLayers),
					format: format,
					transparent: qgisLayerTransparency,
					dpi: screenDpi,
					VERSION: "1.3.0"
				},
				LayerOptions
			),
			highlightLayer = new OpenLayers.Layer.Vector("attribHighLight", {
				isBaseLayer: false,
				styleMap: styleMapHighLightLayer
			}),
			featureInfoHighlightLayer = new OpenLayers.Layer.Vector("featureInfoHighlight", {
				isBaseLayer: false,
				styleMap: styleMapHighLightLayer
			})]),
			map: MapOptions,
			id: "geoExtMapPanel",
			width: MapPanelRef.getInnerWidth(),
			height: MapPanelRef.getInnerHeight(),
			renderTo: MapPanelRef.body,
			plugins: [printExtent]
		});

	}
	else {
		thematicLayer.name = layerTree.root.firstChild.text;
		thematicLayer.url = wmsURI;
		thematicLayer.mergeNewParams({
			"LAYERS": selectedLayers.join(","),
			"OPACITIES": layerOpacities(selectedLayers),
			"FORMAT": format
		});
	}

	if (enableWmtsBaseLayers) {
		// add WMTS base layers
		updateWmtsBaseLayers(layerTree.root.firstChild.text, wmtsLayers);
	}

	if (!initialLoadDone) {
		if (urlParams.startExtent) {
			var startExtentParams = urlParams.startExtent.split(",");
			var startExtent = new OpenLayers.Bounds(parseFloat(startExtentParams[0]), parseFloat(startExtentParams[1]), parseFloat(startExtentParams[2]), parseFloat(startExtentParams[3]));
			//alert("startExtentOL="+startExtent.toString());
			geoExtMap.map.zoomToExtent(startExtent,false);
			//alert(geoExtMap.map.getExtent().toString());
		} else {
			geoExtMap.map.zoomToMaxExtent();
		}
		//add listener to adapt map on panel resize (only needed because of IE)
		MapPanelRef.on('resize', function (panel, w, h) {
            geoExtMap.setSize(panel.getInnerWidth(),panel.getInnerHeight());
		});

		// selection from permalink
		if (urlParams.selection) {
			thematicLayer.mergeNewParams({
				"SELECTION": urlParams.selection
			});
		}

		//scale listener to write current scale to numberfield
		geoExtMap.map.events.register('zoomend', this, function () {
			var currentScale = geoExtMap.map.getScale();
			Ext.getCmp('ScaleNumberField').setValue(Math.round(currentScale));
			if (geoExtMap.map.zoomBoxActive) {
				Ext.getCmp('navZoomBoxButton').toggle(false);
			}
			
			// call custom action on Zoom Event
			customActionOnZoomEvent();
		});
		
		//listener to call custom action on moveend event
		geoExtMap.map.events.register('moveend', this, function () {
			customActionOnMoveEvent();
		});


		//scale listener to gray out names in TOC, which are outside visible scale
		geoExtMap.map.events.register('zoomend', this, this.setGrayNameWhenOutsideScale);

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
		geoExtMap.map.addControl(new OpenLayers.Control.Attribution());
		//to hide miles/feet in the graphical scale bar we need to adapt "olControlScaleLineBottom" in file /OpenLayers/theme/default/style.css: display:none;
		geoExtMap.map.addControl(new OpenLayers.Control.ScaleLine());
		geoExtMap.map.addControl(new OpenLayers.Control.PanZoomBar({zoomWorldIcon:true,forceFixedZoomLevel:false}));

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
		if (enableHoverPopup)
			geoExtMap.map.removeControl(WMSGetFInfoHover);
		geoExtMap.map.removeControl(WMSGetFInfo);
	}
	var fiLayer = new OpenLayers.Layer.WMS(layerTree.root.firstChild.text, wmsURI, {
		layers: [],
		VERSION: "1.3.0"
	}, LayerOptions);

	WMSGetFInfo = new OpenLayers.Control.WMSGetFeatureInfo({
		layers: [fiLayer],
		infoFormat: "text/xml",
		queryVisible: true,
		vendorParams: {
			QUERY_LAYERS: selectedQueryableLayers.join(",")
		}
	});
	WMSGetFInfo.events.register("getfeatureinfo", this, showFeatureInfo);
	WMSGetFInfo.events.register("beforegetfeatureinfo", this, onBeforeGetFeatureInfoClick);
	WMSGetFInfo.events.register("nogetfeatureinfo", this, noFeatureInfoClick);
	geoExtMap.map.addControl(WMSGetFInfo);

	if (enableHoverPopup) {
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
	}
	
	//overview map
	if (!initialLoadDone) {
		OverviewMapOptions.maxExtent = maxExtent;
		geoExtMap.map.addControl(new OpenLayers.Control.OverviewMap({
			size: OverviewMapSize,
			minRatio: 16,
			maxRatio: 64,
			mapOptions: OverviewMapOptions,
            maximized: OverviewMapMaximized,
			layers: [overviewLayer]
		}));

	}
	else {
		//todo: find out how to change the max extent in the OverviewMap
	}

	// highlighting
	if (!initialLoadDone) {
		highlighter = new QGIS.Highlighter(geoExtMap.map, thematicLayer);
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

		var zoomToPreviousAction = new GeoExt.Action({
			icon: 'gis_icons/mActionZoomLast.png',
			scale: 'medium',
			control: navHistoryCtrl.previous,
			disabled: true,
			tooltip: navigationHistoryBackwardTooltipString[lang],
			tooltipType: 'qtip',
            id: 'zoomLast'
		});
		myTopToolbar.insert(1, zoomToPreviousAction);
		//zoom next
		var zoomToNextAction = new GeoExt.Action({
			icon: 'gis_icons/mActionZoomNext.png',
			scale: 'medium',
			control: navHistoryCtrl.next,
			disabled: true,
			tooltip: navigationHistoryForwardTooltipString[lang],
			tooltipType: 'qtip',
            id: 'zoomNext'
		});
		myTopToolbar.insert(2, zoomToNextAction);

		//add QGISSearchCombo
		if (useGeoNamesSearchBox || searchBoxQueryURL != null) {
			myTopToolbar.insert(myTopToolbar.items.length, new Ext.Toolbar.Fill());

			if (useGeoNamesSearchBox) {
				qgisSearchCombo = new GeoExt.ux.GeoNamesSearchCombo({
					map: geoExtMap.map,
					width: 300,
					minChars: 2,
					loadingText: geonamesLoadingString[lang],
					emptyText: geonamesEmptyString[lang],
					username: geoNamesUserName
				});
				var emptySearchFieldButton = new Ext.Button({
					scale: 'medium',
					icon: 'gis_icons/mActionUndo.png',
					tooltipType: 'qtip',
					tooltip: resetSearchFieldTooltipString[lang],
					id: 'EmptySearchField'
				});
				emptySearchFieldButton.handler = mapToolbarHandler;
				myTopToolbar.insert(myTopToolbar.items.length, emptySearchFieldButton);
			} else {
				qgisSearchCombo = new QGIS.SearchComboBox({
					map: geoExtMap.map,
					highlightLayerName: 'attribHighLight',
					useWmsHighlight: enableSearchBoxWmsHighlight,
					wmsHighlightLabelAttribute: searchBoxWmsHighlightLabel,
					highlighter: highlighter,
					hasReverseAxisOrder: false, // PostGIS returns bbox' coordinates always x/y
					width: 300,
					searchtables: searchtables
				});
			}
			myTopToolbar.insert(myTopToolbar.items.length, qgisSearchCombo);
		}

		myTopToolbar.doLayout();

		//map themes panel
		if (mapThemeSwitcherActive == true) {
			mapThemeSwitcher = new ThemeSwitcher(Ext.getCmp('MapPanel'));
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

        /*
         * Show search panel results
         */
        function showSearchPanelResults(searchPanelInstance, features){
            if(features.length){
                // Here we select where to show the search results
                var targetComponent = null;
                if(typeof(mapSearchPanelOutputRegion) == 'undefined'){
                   mapSearchPanelOutputRegion = 'default';
                }
                // These option are for different output modes
                var collapsible = true;
                var autoHeight = true;
                switch(mapSearchPanelOutputRegion){
                    case 'right':
                        targetComponent = Ext.getCmp('RightPanel');
                    break;
                    case 'bottom':
                        targetComponent = Ext.getCmp('BottomPanel');
                        collapsible = false; // No collapsible in bottom
                    break;
                    case 'popup':
                        if(typeof(Ext.getCmp('SearchResultsPopUp')) == 'undefined'){
                            targetComponent =  new Ext.Window(
                            {
                                id: 'SearchResultsPopUp',
                                layout: 'fit',
                                width: "80%",
                                height: 300,
                                modal: false,
                                closeAction: 'hide'
                            });
                        }
                        autoHeight = false; // No scrollbars if true
                        collapsible = false; // No collapsible in popup
                        targetComponent = Ext.getCmp('SearchResultsPopUp');
                    break;
                    case 'default':
                    default:
                        targetComponent = searchPanelInstance;
                    break;
                }
                // Make sure it's shown and expanded
                targetComponent.show();
                targetComponent.collapsible && targetComponent.expand();
                // Delete and re-create
                try {
                    Ext.getCmp('SearchPanelResultsGrid').destroy();
                } catch(e) {
                    // Eventually log...
                }
                searchPanelInstance.resultsGrid = new Ext.grid.GridPanel({
                  id: 'SearchPanelResultsGrid',
                  title: searchResultString[lang],
                  collapsible: collapsible,
                  collapsed: false,
                  store: searchPanelInstance.store,
                  columns: searchPanelInstance.gridColumns,
                  autoHeight: autoHeight, // No vert. scrollbars in popup if true!!
                  viewConfig: {
                    forceFit: true
                  }
                });
                searchPanelInstance.resultsGrid.on('rowclick', searchPanelInstance.onRowClick, searchPanelInstance);
                targetComponent.add(searchPanelInstance.resultsGrid);
                targetComponent.doLayout();
                // Always make sure it's shown and expanded
                searchPanelInstance.resultsGrid.show();
                searchPanelInstance.resultsGrid.collapsible && searchPanelInstance.resultsGrid.expand();
            } else {
                // No features: shouldn't we warn the user?
                Ext.MessageBox.alert(searchPanelTitleString[lang], searchNoRecordsFoundString[lang]);
                try {
                    Ext.getCmp('SearchPanelResultsGrid').destroy();
                } catch(e) {
                    // Eventually log...
                }
                searchPanelInstance.resultsGrid = null;
            }
            return true;
        }

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
				panel.on("featureselected", highlighter.highlightFeature, highlighter);
				panel.on("featureselectioncleared", highlighter.unhighlightFeature, highlighter);
				panel.on("beforesearchdataloaded", showSearchPanelResults);
                // Just for debugging...
				// panel.on("afterdsearchdataloaded", function(e){console.log(e);});
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
			control.setImmediate(true);
			control.geodesic = useGeodesicMeasurement;
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
		var wmtsLayers = Array();

		layerTree.root.firstChild.cascade(
		function (n) {
			if (n.isLeaf() && n.attributes.checked) {
				if (!wmsLoader.layerProperties[wmsLoader.layerTitleNameMapping[n.text]].wmtsLayer) {
					selectedLayers.push(wmsLoader.layerTitleNameMapping[n.text]);
				}
				else {
					wmtsLayers.push(wmsLoader.layerTitleNameMapping[n.text]);
				}
				if (wmsLoader.layerProperties[wmsLoader.layerTitleNameMapping[n.text]].queryable) {
					selectedQueryableLayers.push(wmsLoader.layerTitleNameMapping[n.text]);
				}
			}
			
			// Call custom action in Customizations.js
			customActionLayerTreeCheck(n);
		});
		format = imageFormatForLayers(selectedLayers);

		//change array order
		selectedLayers = layersInDrawingOrder(selectedLayers);
		selectedQueryableLayers = layersInDrawingOrder(selectedQueryableLayers);

		//special case if only active layers are queried for feature infos
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
				}
			);
			selectedActiveLayers = layersInDrawingOrder(selectedActiveLayers);
			selectedActiveQueryableLayers = layersInDrawingOrder(selectedActiveQueryableLayers);
		}
		thematicLayer.mergeNewParams({
			LAYERS: selectedLayers.join(","),
			OPACITIES: layerOpacities(selectedLayers),
			FORMAT: format
		});
		if (identificationMode != 'activeLayers') {
			WMSGetFInfo.vendorParams = {
				'QUERY_LAYERS': selectedQueryableLayers.join(',')
			};
			if (enableHoverPopup) {
				WMSGetFInfoHover.vendorParams = {
					'QUERY_LAYERS': selectedQueryableLayers.join(',')
				};
			}
		} else {
			WMSGetFInfo.vendorParams = {
				'QUERY_LAYERS': selectedActiveQueryableLayers.join(',')
			};
			if (enableHoverPopup) {
			WMSGetFInfoHover.vendorParams = {
				'QUERY_LAYERS': selectedActiveQueryableLayers.join(',')
			};
			}
		}

		if (enableWmtsBaseLayers) {
			// update WMTS layers
			setVisibleWmtsLayers(wmtsLayers);
		}

		// switch backgroundLayers
		if (enableBGMaps) {
			var checkedBackgroundNodes = [];
			var newVisibleBaseLayer = null;
			layerTree.root.lastChild.cascade(
			function (n) {
				if (n.isLeaf() && n.attributes.checked) {
					checkedBackgroundNodes.push(n);
				}
			});
			
			if (checkedBackgroundNodes.length == 1) {
				newVisibleBaseLayer = checkedBackgroundNodes[0].layer.name;
			} else if (checkedBackgroundNodes.length == 2) {
				layerTree.removeListener("leafschange",leafsChangeFunction);
				layerTree.root.lastChild.cascade(
				function (n) {
					if (n.isLeaf() && n.attributes.checked) {
						if (n.layer.name == currentlyVisibleBaseLayer) {
							n.unselect();
							n.layer.setVisibility(false);
						} else {
							newVisibleBaseLayer = n.layer.name;
						}
					}
				});
				layerTree.addListener('leafschange',leafsChangeFunction);
			}
			currentlyVisibleBaseLayer = newVisibleBaseLayer;
		}

		updateLayerOrderPanelVisibilities();
	}

	if (initialLoadDone) {
		layerTree.removeListener("leafschange",leafsChangeFunction);
	}
	else {
		layerTree.addListener('checkboxclick', onLayerCheckboxClick);
	}
	//add listeners for layertree
	layerTree.addListener('leafschange',leafsChangeFunction);

	initExclusiveLayerGroups();

	//deal with commercial external bg layers
	if (enableBGMaps) {
		var BgLayerList = new Ext.tree.TreeNode({
			leaf: false,
			expanded: true,
			text: backgroundLayerTitleString[lang]
		});

		layerTree.root.appendChild(BgLayerList);
		
		if (visibleBackgroundLayer != null) {
			initialBGMap = -1; 
			// do not show any baseLayer if passed visibleBackgroundLayer is not found
			for (var i = 0; i < baseLayers.length; i++) {
				if (baseLayers[i].name == visibleBackgroundLayer) {
					initialBGMap = i;
					break;
				}
			}
		}

		for (var i = 0; i < baseLayers.length; i++) {
			baseLayers[i].setVisibility(i == initialBGMap);
			var bgnode = new GeoExt.tree.LayerNode({
				layer: baseLayers[i],
				leaf: true,
				checked: (i == initialBGMap),
				uiProvider: Ext.tree.TriStateNodeUI
			});
			if (i == initialBGMap) {
				currentlyVisibleBaseLayer = baseLayers[i].name;
			}
			BgLayerList.appendChild(bgnode);
		}
	}

	if (!initialLoadDone) {
		if (printLayoutsDefined == true) {
			//create new window to hold printing toolbar
			printWindow = new Ext.Window({
				title: printSettingsToolbarTitleString[lang],
				height: 67,
				width: 530,
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
							width: 95,
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
		}
	}
	else {
		printLayoutsCombobox = Ext.getCmp('PrintLayoutsCombobox');
		printLayoutsCombobox.store.removeAll();
		printLayoutsCombobox.store.loadData(printCapabilities);
	}
	if (printLayoutsDefined == false) {
			//need to disable printing because no print layouts are defined in
			var printMapButton = Ext.getCmp('PrintMap');
			printMapButton.disable();
			printMapButton.setTooltip(printMapDisabledTooltipString[lang]);
	}
	else {
		printLayoutsCombobox = Ext.getCmp('PrintLayoutsCombobox');
		printLayoutsCombobox.setValue(printLayoutsCombobox.store.getAt(0).data.name);
		var printDPICombobox = Ext.getCmp('PrintDPICombobox');
		printDPICombobox.setValue("300");
		//need to manually fire the event, because .setValue doesn't; index omitted, not needed
		printDPICombobox.fireEvent("select", printDPICombobox, printDPICombobox.findRecord(printDPICombobox.valueField, "300"));
        //if the var fixedPrintResolution in GlobalOptions.js is set, the printLayoutsCombobox will be hidden
        if (fixedPrintResolution != null && parseInt(fixedPrintResolution) > 0){
            printDPICombobox.hide(); // hide dpi combobox
            printWindow.setWidth(printWindow.width - 80); // reduce the legth of the print window
        }
		//bug in spinnerField: need to explicitly show/hide printWindow (toolbar)
		printWindow.show();
		printWindow.hide();
	}
	printExtent.hide();

	if (initialLoadDone) {
		if (identifyToolWasActive) {
			identifyToolWasActive = false;
			Ext.getCmp('IdentifyTool').toggle(true);
		}
		themeChangeActive = false;
	}

	//handle selection events
	var selModel = layerTree.getSelectionModel();
	//add listeners to selection model
	selModel.addListener("selectionChange", layerTreeSelectionChangeHandlerFunction);

	//show that we are done with initializing the map
	mainStatusText.setText(modeNavigationString[lang]);
	if (loadMask) {
		loadMask.hide();
	}
	initialLoadDone = true;

    //draw layers outside scale gray
    setGrayNameWhenOutsideScale();

	// run the function in the Customizations.js
	customAfterMapInit();
}

function getVisibleLayers(visibleLayers, currentNode){
  while (currentNode != null){
    if (currentNode.attributes.checked) {
      visibleLayers.push(wmsLoader.layerTitleNameMapping[currentNode.text]);
    } else if (currentNode.attributes.checked == null) {
      // this node is partly checked, so it is a layer group with some layers visible
      // dive into this group for layer visibility
      for (var i = 0; i < currentNode.childNodes.length; i++) {
        visibleLayers = getVisibleLayers(visibleLayers, currentNode.childNodes[i]);
      }
    }
    currentNode = currentNode.nextSibling;
  }
  return visibleLayers;
}

function getVisibleFlatLayers(currentNode) {
  visibleLayers = [];
	currentNode.cascade(function(node) {
    if (node.isLeaf() && node.attributes.checked) {
      visibleLayers.push(wmsLoader.layerTitleNameMapping[node.text]);
    }
	});
}

function getVisibleBackgroundLayer() {
    var visibleBackgroundLayer = null;
    
    if (enableBGMaps) {
        layerTree.root.lastChild.cascade(function(node) {
            if (node.isLeaf() && node.attributes.checked) {
                visibleBackgroundLayer = node.text;
            }
        });
    }
    return visibleBackgroundLayer;
}
        
        
function uniqueLayersInLegend(origArr) {
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

function mapToolbarHandler(btn, evt) {
	removeMeasurePopup();

	// Call custom toolbar handler in Customizations.js
	customMapToolbarHandler(btn, evt);

	if (btn.id == "IdentifyTool") {
		if (btn.pressed) {
			identifyToolActive = true;
			activateGetFeatureInfo(true);
			mainStatusText.setText(modeObjectIdentificationString[lang]);
		} else {
			identifyToolActive = false;
			activateGetFeatureInfo(false);
			if (hoverPopup) {removeHoverPopup();}
			if (clickPopup) {removeClickPopup();}
			featureInfoHighlightLayer.removeAllFeatures();
			mainStatusText.setText(modeNavigationString[lang]);
		}
	}
	if (btn.id == "measureDistance") {
		if (btn.pressed) {
			measureControls["line"].activate();
			mainStatusText.setText(modeMeasureDistanceString[lang]);
			changeCursorInMap("crosshair");
		} else {
			measureControls["line"].deactivate();
			mainStatusText.setText(modeNavigationString[lang]);
			changeCursorInMap("default");
		}
	}
	if (btn.id == "measureArea") {
		if (btn.pressed) {
			measureControls["polygon"].activate();
			mainStatusText.setText(modeMeasureAreaString[lang]);
			changeCursorInMap("crosshair");
		} else {
			measureControls["polygon"].deactivate();
			mainStatusText.setText(modeNavigationString[lang]);
			changeCursorInMap("default");
		}
	}
	if (btn.id == "EmptySearchField") {
		qgisSearchCombo.clearSearchResult();
	}
	if (btn.id == "PrintMap") {
		if (btn.pressed) {
			printWindow.show();
			if (printExtent.initialized == false) {
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
			//need to check if current page matches entry of PrintLayoutsCombobox
			var printLayoutsCombobox = Ext.getCmp('PrintLayoutsCombobox');
			var currentIndex = printLayoutsCombobox.store.findExact('name',printLayoutsCombobox.getValue());
			var currentRecord = printLayoutsCombobox.store.getAt(currentIndex);
			if (printProvider.layout.data.size.width != currentRecord.data.size.width || printProvider.layout.data.size.height != currentRecord.data.size.height) {
				printProvider.setLayout(currentRecord);
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
	if (btn.id == "SendPermalink") {
		var permalink = createPermalink();
		if (permaLinkURLShortener) {
			var servername = "http://"+location.href.split(/\/+/)[1];
			Ext.Ajax.request({
			  url: servername + permaLinkURLShortener,
			  success: receiveShortPermalinkFromDB,
			  failure: function ( result, request) {
				alert("failed to get short URL from Python wsgi script.\n\nError Message:\n\n"+result.responseText);
			  },
			  method: 'GET',
			  params: { longPermalink: permalink }
			});
		}
		else {
			openPermaLink(encodeURIComponent(permalink));
		}
	}
  if (btn.id == "ShowHelp") {
    if (help_active == true){
      help_active = false;
      helpWin.close();
    } else {
      help_active = true;
	  //test if helpfile was specified, otherwise display default english help or language version if available
	  if (typeof(helpfile) === 'undefined') {
			helpfile = "help_en.html";
			if (availableHelpLanguages.indexOf(lang) != -1) {
				helpfile = "help_"+lang+".html";
			}
	  }
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

function removeMeasurePopup() {
	var map = geoExtMap.map; // gets OL map object
	if (measurePopup) {
		map.removePopup(measurePopup);
		measurePopup.destroy();
		measurePopup = null;
	}
}

function handleMeasurements(event) {
	var geometry = event.geometry;
	var units = event.units;
	var order = event.order;
	var measure = event.measure;
	var out = "";
	if (order == 1) {
		out += measureDistanceResultPrefixString[lang] + ": " + measure.toFixed(2) + units;
	} else {
		out += measureAreaResultPrefixString[lang] + ": " + measure.toFixed(2) + units + "<sup>2</sup>";
	}
	var map = geoExtMap.map; // gets OL map object
	removeMeasurePopup();
	measurePopup = new OpenLayers.Popup.Anchored(
		"measurePopup", // id
		geometry.getBounds().getCenterLonLat(), // lonlat
		null, // new OpenLayers.Size(1,1), // contentSize
		out , //contentHTML
		null, // anchor
		false, // closeBox
		null // closeBoxCallback
		);
	measurePopup.autoSize = true;
	measurePopup.keepInMap = true;
	measurePopup.panMapIfOutOfView = true;
	map.addPopup(measurePopup);
	//measurePopup.setBackgroundColor("gray");
	measurePopup.setOpacity(0.8);
}

// function to display a loadMask during lengthy load operations
function displayLoadMask() {
	if (mapIsLoading) { // check if layer is still loading
		loadMask = new Ext.LoadMask(Ext.getCmp('MapPanel').body, {msg:mapLoadingString[lang]});
		loadMask.show();
	}
}

function changeCursorInMap(cursorStyle) {
  var mapViewPort = Ext.query(".olMapViewport", document.getElementById("geoExtMapPanel"))[0];
  mapViewPort.style.cursor = cursorStyle;
}

//function for the help viewer
function scrollToHelpItem(targetId) {
	Ext.get(targetId).dom.scrollIntoView();
}

//function that creates a permalink
function createPermalink(){
	var visibleLayers = Array();
	var permalink;
	var permalinkParams = {};
	visibleLayers = getVisibleLayers(visibleLayers, layerTree.root.firstChild);
	visibleLayers = uniqueLayersInLegend(visibleLayers);
	var visibleBackgroundLayer = getVisibleBackgroundLayer();
	var startExtentArray = geoExtMap.map.getExtent().toArray();
	var startExtent = startExtentArray[0] + "," + startExtentArray[1] + "," + startExtentArray[2] + "," + startExtentArray[3];

	if (!norewrite){
		var servername = location.href.split(/\/+/)[1];
		permalink = "http://"+servername;
		if (gis_projects) {
			permalink += gis_projects.path + "/";
		}
		else {
			permalink += "/";
		}
		permalink += wmsMapName+"?";
	} else {
		permalink = urlArray[0] + "?map=";
		permalink = permalink + "/" + wmsMapName.replace("/", "");
		//add .qgs if it is missing
		if (!permalink.match(/\.qgs$/)) {
			permalink += ".qgs";
		}
		permalink += "&";
	}

	// extent
	permalinkParams.startExtent = startExtent;

	// visible BackgroundLayer
	permalinkParams.visibleBackgroundLayer = visibleBackgroundLayer;
    
	// visible layers and layer order
	permalinkParams.visibleLayers = visibleLayers.toString();

	// layer opacities as hash of <layername>: <opacity>
	var opacities = null;
	for (layer in wmsLoader.layerProperties) {
		if (wmsLoader.layerProperties.hasOwnProperty(layer)) {
			var opacity = wmsLoader.layerProperties[layer].opacity;
			// collect only non-default values
			if (opacity != 255) {
				if (opacities == null) {
					opacities = {};
				}
				opacities[layer] = opacity;
			}
		}
	}
	if (opacities != null) {
		permalinkParams.opacities = Ext.util.JSON.encode(opacities);
	}

	//layer order
	permalinkParams.initialLayerOrder = layerOrderPanel.orderedLayers().toString();

	// selection
	permalinkParams.selection = thematicLayer.params.SELECTION;

	if (permaLinkURLShortener) {
		permalink = encodeURIComponent(permalink + decodeURIComponent(Ext.urlEncode(permalinkParams)));
	}
	else {
		permalink = permalink + Ext.urlEncode(permalinkParams);
	}

	return permalink;
}

function addInfoButtonsToLayerTree() {
	var treeRoot = layerTree.getNodeById("wmsNode");
	treeRoot.firstChild.cascade(
		function (n) {
			var layerProperties = wmsLoader.layerProperties[wmsLoader.layerTitleNameMapping[n.text]];
			if (!layerProperties.showLegend && !layerProperties.showMetadata) {
				// no info button, add blank element to keep text aligned
				Ext.DomHelper.insertBefore(n.getUI().getAnchor(), {
					tag: 'b',
					cls: 'layer-button x-tool custom-x-tool-blank'
				});
			}
			else {
				// info button
				var buttonId = 'layer_' + n.id;
				Ext.DomHelper.insertBefore(n.getUI().getAnchor(), {
					tag: 'b',
					id: buttonId,
					cls: 'layer-button x-tool custom-x-tool-info'
				});
				Ext.get(buttonId).on('click', function(e) {
					if(typeof(interactiveLegendGetLegendURL) == 'undefined'){
						showLegendAndMetadata(n.text);
					} else {
						showInteractiveLegendAndMetadata(n.text);
					}
				});
			}
		}
	);
}

function addAbstractToLayerGroups() {
	var treeRoot = layerTree.getNodeById("wmsNode");
	treeRoot.firstChild.cascade(
		function (n) {
			if (! n.isLeaf()) {
				var layerProperties = wmsLoader.layerProperties[wmsLoader.layerTitleNameMapping[n.text]];
				if (n == treeRoot.firstChild) {
					layerProperties.abstract = wmsLoader.projectSettings.service.abstract;
				}
				else if (layerProperties.abstract === undefined) {
					layerProperties.abstract = layerGroupString[lang]+ ' "' + n.text + '"';
				}
			}
		}
	);
}

// apply initial exclusive layer groups: only a single layer of a group may be active, or none
function initExclusiveLayerGroups() {
	if (wmsLoader.projectSettings.capability.exclusiveLayerGroups.length == 0) {
		// no exclusive layer groups
		return;
	}

	// collect initially active layers
	var activeLayers = [];
	layerTree.root.firstChild.cascade(function(node) {
		if (node.isLeaf() && node.attributes.checked) {
			activeLayers.push(wmsLoader.layerTitleNameMapping[node.text]);
		}
	});

	// collect layers of exclusive layer groups
	var layersToUncheck = [];
	for (var i=0; i<wmsLoader.projectSettings.capability.exclusiveLayerGroups.length; i++) {
		var exclusiveGroup = wmsLoader.projectSettings.capability.exclusiveLayerGroups[i];

		// get first group layer from active layers
		var activeLayerName = null;
		for (var l=0; l<exclusiveGroup.length; l++) {
			var groupLayerName = exclusiveGroup[l];
			if (activeLayers.indexOf(groupLayerName) != -1) {
				activeLayerName = groupLayerName;
				break;
			}
		}

		// collect inactive group layers
		for (var l=0; l<exclusiveGroup.length; l++) {
			var groupLayerName = exclusiveGroup[l];
			if (groupLayerName != activeLayerName) {
				// add layer to uncheck if not yet in list
				if (layersToUncheck.indexOf(groupLayerName) == -1) {
					layersToUncheck.push(groupLayerName);
				}
			}
		}
	}

	if (layersToUncheck.length > 0) {
		// update layer tree
		layerTree.root.firstChild.cascade(function(node) {
			if (node.isLeaf() && node.attributes.checked) {
				// uncheck layer node
				if (layersToUncheck.indexOf(wmsLoader.layerTitleNameMapping[node.text]) != -1) {
					node.getUI().toggleCheck(false);
				}
			}
		});
		layerTree.fireEvent("leafschange");
	}
}

function onLayerCheckboxClick(node) {
	if (wmsLoader.projectSettings.capability.exclusiveLayerGroups.length == 0) {
		// no exclusive layer groups
		return;
	}

	// apply exclusive layer groups: only a single layer of a group may be active, or none
	if (node.attributes.checked) {
		var layersToUncheck = [];
		if (node.isLeaf()) {
			// layer checked

			// collect other layers of the first matching exclusive layer group
			var activeLayerName = wmsLoader.layerTitleNameMapping[node.text];
			for (var i=0; i<wmsLoader.projectSettings.capability.exclusiveLayerGroups.length; i++) {
				var exclusiveGroup = wmsLoader.projectSettings.capability.exclusiveLayerGroups[i];
				if (exclusiveGroup.indexOf(activeLayerName) != -1) {
					layersToUncheck = exclusiveGroup.slice().remove(activeLayerName);
					break;
				}
			}
		}
		else {
			// layer group checked

			// collect child layers
			var childLayers = [];
			node.cascade(function(node) {
				if (node.isLeaf()) {
					childLayers.push(wmsLoader.layerTitleNameMapping[node.text]);
				}
			});

			// collect layers of exclusive layer groups for all child layers, keep first layer occuring in child layers active
			for (var i=0; i<childLayers.length; i++) {
				for (var g=0; g<wmsLoader.projectSettings.capability.exclusiveLayerGroups.length; g++) {
					var exclusiveGroup = wmsLoader.projectSettings.capability.exclusiveLayerGroups[g];
					if (exclusiveGroup.indexOf(childLayers[i]) != -1) {
						// first matching exclusive layer group

						// get first group layer from child layers
						var activeLayerName = null;
						for (var l=0; l<exclusiveGroup.length; l++) {
							var groupLayerName = exclusiveGroup[l];
							if (childLayers.indexOf(groupLayerName) != -1) {
								activeLayerName = groupLayerName;
								break;
							}
						}

						// collect inactive group layers
						for (var l=0; l<exclusiveGroup.length; l++) {
							var groupLayerName = exclusiveGroup[l];
							if (groupLayerName != activeLayerName) {
								// add layer to uncheck if not yet in list
								if (layersToUncheck.indexOf(groupLayerName) == -1) {
									layersToUncheck.push(groupLayerName);
								}
							}
						}

						break;
					}
				}
			}
		}

		if (layersToUncheck.length > 0) {
			// update layer tree
			layerTree.root.firstChild.cascade(function(node) {
				if (node.isLeaf() && node.attributes.checked) {
					// uncheck layer node
					if (layersToUncheck.indexOf(wmsLoader.layerTitleNameMapping[node.text]) != -1) {
						node.getUI().toggleCheck(false);
					}
				}
			});
		}
	}
}

function applyPermalinkParams() {
	// restore layer opacities from hash of <layername>: <opacity>
	var opacities = undefined;
	//see if this comes in as a URL parameter
	if (urlParams.opacities) {
		opacities = Ext.util.JSON.decode(urlParams.opacities);
	}
	else {
		//see if project is defined in GIS ProjectListing
		//and has an opacities property
		var gisProjectSettings = getGisProjectSettings(layerTree.root.firstChild.text);
		if (gisProjectSettings != null) {
			opacities = gisProjectSettings.opacities;
		}
	}
	if (opacities) {
		for (layer in opacities) {
			if (opacities.hasOwnProperty(layer)) {
				wmsLoader.layerProperties[layer].opacity = opacities[layer];
			}
		}
	}
}

function setupLayerOrderPanel() {
	layerOrderPanel = Ext.getCmp('LayerOrderTab');

	/* initial layer order: (highest priority on top)
	 * - initialLayerOrder from permalink/URL param
	 * - layerDrawingOrder from GetProjectSettings
	 * - layer tree from GetCapabilities
	 */
	var orderedLayers = [];
	if (initialLayerOrder != null) {
		// use order from permalink or URL parameter
		orderedLayers = initialLayerOrder;
		//TODO: we need to add additional layers if the initialLayerOrder is shorter than the layerDrawingOrder from the project
		if (wmsLoader.projectSettings.capability.layerDrawingOrder != null) {
			//case GetProjectSettings supported
			if (initialLayerOrder.length < wmsLoader.projectSettings.capability.layerDrawingOrder.length) {
				for (var i=0;i<wmsLoader.projectSettings.capability.layerDrawingOrder.length;i++) {
					if (orderedLayers.indexOf(wmsLoader.projectSettings.capability.layerDrawingOrder[i]) == -1) {
						var layerIndex = wmsLoader.projectSettings.capability.layerDrawingOrder.indexOf(wmsLoader.projectSettings.capability.layerDrawingOrder[i]);
						if (layerIndex >= orderedLayers.length) {
							orderedLayers.push(wmsLoader.projectSettings.capability.layerDrawingOrder[i]);
						}
						else {
							orderedLayers.splice(layerIndex,0,wmsLoader.projectSettings.capability.layerDrawingOrder[i]);
						}
					}
				}
			}
		}
		else {
			//only GetCapabilities is supported
			if (initialLayerOrder.length < allLayers.length) {
				for (var i=0;i<allLayers.length;i++) {
					if (orderedLayers.indexOf(allLayers[i]) == -1) {
						var layerIndex = allLayers.indexOf(allLayers[i]);
						if (layerIndex >= orderedLayers.length) {
							orderedLayers.push(allLayers[i]);
						}
						else {
							orderedLayers.splice(layerIndex,0,allLayers[i]);
						}
					}
				}
			}
		}
	}
	else if (wmsLoader.projectSettings.capability.layerDrawingOrder != null) {
		// use order from GetProjectSettings
		orderedLayers = wmsLoader.projectSettings.capability.layerDrawingOrder;
	}
	else {
		// use order from GetCapabilities
		orderedLayers = allLayers.reverse();
	}

	layerOrderPanel.clearLayers();
	for (var i=0; i<orderedLayers.length; i++) {
		//because of a but in QGIS Server we need to check if a layer from layerDrawingOrder actually really exists
		//QGIS Server is delivering invalid layer when linking to different projects
		var layerProperties = wmsLoader.layerProperties[orderedLayers[i]];
		if (layerProperties && !layerProperties.wmtsLayer) {
			// skip WMTS base layers
			layerOrderPanel.addLayer(orderedLayers[i], layerProperties.opacity);
		}
	}

	if (!initialLoadDone) {
		if (showLayerOrderTab) {
			// handle layer order panel events
			layerOrderPanel.on('layerVisibilityChange', function(layer) {
				// deactivate layer node in layer tree
				layerTree.root.findChildBy(function() {
					if (wmsLoader.layerTitleNameMapping[this.attributes["text"]] == layer) {
						this.getUI().toggleCheck();
						// update active layers
						layerTree.fireEvent('checkboxclick', this);
						layerTree.fireEvent("leafschange");
						return true;
					}
					return false;
				}, null, true);
			});

			layerOrderPanel.on('orderchange', function() {
				// update layer order after drag and drop
				layerTree.fireEvent("leafschange");
			});

			layerOrderPanel.on('opacitychange', function(layer, opacity) {
				// update layer opacities after slider change
				wmsLoader.layerProperties[layer].opacity = opacity;
				layerTree.fireEvent("leafschange");
			});
			//hack to set title of southern panel - normally it is hidden in ExtJS
			Ext.layout.BorderLayout.Region.prototype.getCollapsedEl = Ext.layout.BorderLayout.Region.prototype.getCollapsedEl.createSequence(function() {
				if ( ( this.position == 'south' ) && !this.collapsedEl.titleEl ) {
					this.collapsedEl.titleEl = this.collapsedEl.createChild({cls: 'x-collapsed-title', cn: this.panel.title});
				}
			});
			Ext.getCmp('leftPanelMap').layout.south.getCollapsedEl().titleEl.dom.innerHTML = layerOrderPanelTitleString[lang];
		} else {
			Ext.getCmp('leftPanelMap').layout.south.getCollapsedEl().setVisible(showLayerOrderTab);
		}
	}
}

function updateLayerOrderPanelVisibilities() {
	// update layer visibilities in layer order panel according to layer tree
	layerTree.root.firstChild.cascade(function(node) {
		if (node.isLeaf()) {
			var layerName = wmsLoader.layerTitleNameMapping[node.text];
			if (layerOrderPanel.layerVisible(layerName) != node.attributes.checked) {
				layerOrderPanel.toggleLayerVisibility(layerName);
			}
		}
	});
}

function activateGetFeatureInfo(doIt) {
	// activate/deactivate FeatureInfo
	if (doIt) {
		WMSGetFInfo.activate();
		if (enableHoverPopup)
			WMSGetFInfoHover.activate();
	} else {
		WMSGetFInfo.deactivate();
		if (enableHoverPopup)
			WMSGetFInfoHover.deactivate();
	}
}

function openPermaLink(permalink) {
	var mailToText = "mailto:?subject="+sendPermalinkLinkFromString[lang]+titleBarText+layerTree.root.firstChild.text+"&body="+permalink;
	var mailWindow = window.open(mailToText);
	if (mailWindow){
		mailWindow.close();
	} // can be null, if e.g. popus are blocked
}

function receiveShortPermalinkFromDB(result, request) {
	var result = eval("("+result.responseText+")");
	openPermaLink(result.shortUrl);
}

// get best image format for a list of layers
function imageFormatForLayers(layers) {
	var format = origFormat;
	if (layerImageFormats.length > 0 && origFormat.match(/8bit/)) {
		for (var f = 0; f < layerImageFormats.length; f++) {
			var layerImageFormat = layerImageFormats[f];
			for (var l = 0; l < layerImageFormat.layers.length; l++) {
				if (layers.indexOf(layerImageFormat.layers[l]) != -1) {
					format = layerImageFormat.format;
					break;
				}
			}
			if (format != origFormat) {
				break;
			}
		}
	}
	return format;
}


//this function checks if layers and layer-groups are outside scale-limits.
//if a layer is outside scale-limits, its label in the TOC is being displayed in a light gray
function setGrayNameWhenOutsideScale() {
    if ( grayLayerNameWhenOutsideScale ) { //only if global boolean is set

        //layers
        //------
        var allLayersWithIDs = new Array();

        //iterate layer tree to get title and layer-id
        layerTree.root.firstChild.cascade(
            function (n) {
                if (n.isLeaf()) {
                    allLayersWithIDs.push([n.text,n.id]);
                }
            }
        );

        //iterate ProjectSettings
        for (var i=0;i<wmsLoader.projectSettings.capability.layers.length;i++){

            MaxScale = Math.round(wmsLoader.projectSettings.capability.layers[i].maxScale);
            //if no MaxScale is defined
            if (MaxScale < 1){
                MaxScale = 1;
            }

            MinScale = Math.round(wmsLoader.projectSettings.capability.layers[i].minScale);
            //if no MinScale is defined
            if (MinScale < 1){ //if not defined, this value is very small
                MinScale = 150000000; //within terrestrial dimensions big enough
            }

            //set content gray
            if (wmsLoader.projectSettings.capability.layers[i].maxScale > geoExtMap.map.getScale() ||
                wmsLoader.projectSettings.capability.layers[i].minScale < geoExtMap.map.getScale()) {
                    for (var j=0;j<allLayersWithIDs.length;j++){
                        //comparison layerTree and info from getProjectsettings
                        if (allLayersWithIDs[j][0] == wmsLoader.projectSettings.capability.layers[i].title) {
                                layerTree.root.findChild('id', allLayersWithIDs[j][1], true).setCls('outsidescale');//add css for outside scale
                                strTOCTooltip = tooltipLayerTreeLayerOutsideScale[lang] + ' 1:' + MaxScale + ' - 1:' + MinScale
                                layerTree.root.findChild('id', allLayersWithIDs[j][1], true).setTooltip(strTOCTooltip);
                                layerTree.root.findChild('id', allLayersWithIDs[j][1], true).isOutsideScale = true;
                                layerTree.root.findChild('id', allLayersWithIDs[j][1], true).MinScale = MinScale;
                                layerTree.root.findChild('id', allLayersWithIDs[j][1], true).MaxScale = MaxScale;
                            }
                        }

                    // reset gray
                    } else {
                        for (var j=0;j<allLayersWithIDs.length;j++){
                            if (allLayersWithIDs[j][0] == wmsLoader.projectSettings.capability.layers[i].title) {
                                layerTree.root.findChild('id', allLayersWithIDs[j][1], true).setTooltip(''); //empty tooltip
                                node = layerTree.root.findChild('id', allLayersWithIDs[j][1], true); //remove css class
                                node.ui.removeClass('outsidescale'); //remove css class
                                layerTree.root.findChild('id', allLayersWithIDs[j][1], true).isOutsideScale = false;
                                layerTree.root.findChild('id', allLayersWithIDs[j][1], true).MinScale = MinScale;
                                layerTree.root.findChild('id', allLayersWithIDs[j][1], true).MinScale = MaxScale;
                            }
                        }
                    }
                }

        // layer-groups
        // ------------
        var arrLayerGroups = new Array(); //array containing all layer-groups
        var arrOutsideScale = new Array(); //array with the state of all layers within the group
        var arrMaxScale = new Array(); //array with the defined max-scale of the group
        var arrMinScale = new Array(); //array with the defined min-scale of the group

        //iterate layer tree
        layerTree.root.firstChild.cascade(
            function (n) {
                if (!(n.isLeaf())) {
                    layerTree.root.findChild('id', n.id, true).cascade(
                    function (m) {
                        // has to be a leaf and outside scale
                        if (m.isLeaf()){
                            arrOutsideScale.push(m.isOutsideScale);
                            arrMaxScale.push(m.MaxScale);
                            arrMinScale.push(m.MinScale);
                        }
                    });
                    //arrLayerGroups: layer-id, layer-name, boolean if currently outside scale, maxscale, minscale
                    arrLayerGroups.push([n.id, n.text, arrOutsideScale, arrMaxScale, arrMinScale]);
                }
                // empty arrays for next iteration
                arrOutsideScale = [];
                arrMaxScale = [];
                arrMinScale = [];
            });

        //iterate all leaf layers within a group
        for (var i=0;i<arrLayerGroups.length;i++){
            bolGroupOutsideScale = true;
            MinScale = 0; //set an extreme minscale
            MaxScale = 150000000; //set an extreme maxscale

            for (var j=0;j<arrLayerGroups[i][2].length;j++){
                //in each iteration take the bigger minscale
                if (MinScale < arrLayerGroups[i][4][j]){
                    MinScale = arrLayerGroups[i][4][j];
                }
                //in each iteration take the smallest maxscale
                if (MaxScale > arrLayerGroups[i][3][j]){
                    MaxScale = arrLayerGroups[i][3][j];
                }

                //if one single leaf layer is visible, the group has as well to be visible
                if ( !arrLayerGroups[i][2][j] ){ //[2] = arrOutsideScale
                    bolGroupOutsideScale = false;
                }
            }

            //the group is invisible
            if ( bolGroupOutsideScale ) {
                layerTree.root.findChild('id', arrLayerGroups[i][0], true).setCls('outsidescale'); // add css class
                strTOCTooltip = tooltipLayerTreeLayerOutsideScale[lang] + ' 1:' + MaxScale + ' - 1:' + MinScale
                layerTree.root.findChild('id', arrLayerGroups[i][0], true).setTooltip(strTOCTooltip);

            //the group is visible
            } else {
                node = layerTree.root.findChild('id', arrLayerGroups[i][0], true); //remove css class
                node.ui.removeClass('outsidescale'); //remove css class
                layerTree.root.findChild('id', arrLayerGroups[i][0], true).setTooltip('');
            }
        }
    }

    if (enableWmtsBaseLayers) {
        updateScaleBasedWmtsLayersVisibility(geoExtMap.map.getScale());
    }
}

function getGisProjectSettings(topicName) {
	if (gis_projects) {
		// search in project listing
		for (var i=0; i<gis_projects.topics.length; i++) {
			for (var j=0; j<gis_projects.topics[i].projects.length; j++) {
				if (gis_projects.topics[i].projects[j].name == topicName) {
					return gis_projects.topics[i].projects[j];
				}
			}
		}
	}
	return null;
}

// WMTS base layers

function getWmtsLayersConfig(topicName) {
	var gisProjectSettings = getGisProjectSettings(topicName);
	if (gisProjectSettings != null) {
		return gisProjectSettings.wmtsLayers;
	}
	return null;
}

function getWmtsLayers() {
	return geoExtMap.map.getLayersBy('isWmtsLayer', true);
}

function updateWmtsBaseLayers(topicName, visibleWmtsLayers) {
	// cleanup old WMTS layers
	var oldWmtsLayers = getWmtsLayers();
	for (var i=0; i<oldWmtsLayers.length; i++) {
		geoExtMap.map.removeLayer(oldWmtsLayers[i]);
	}

	var wmtsLayersConfig = getWmtsLayersConfig(topicName);
	if (wmtsLayersConfig != null) {
		// create WMTS layers for current topic
		var wmtsLayers = [];
		for (var i=0; i<wmtsLayersConfig.length; i++) {
			wmtsLayers.push(
				new OpenLayers.Layer.WMTS(
					OpenLayers.Util.extend(
						wmtsLayersConfig[i].wmtsConfig,
						{
							visibility: false,
							isBaseLayer: false,
							// custom attributes
							isWmtsLayer: true,
							wmsLayerName: wmtsLayersConfig[i].wmsLayerName
						}
					)
				)
			);
		}
		wmtsLayers = wmtsLayers.reverse();

		if (wmtsLayers.length > 0) {
			// add WMTS layers
			var thematicLayerIndex = geoExtMap.map.getLayerIndex(thematicLayer);
			for (var i=0; i<wmtsLayers.length; i++) {
				var wmtsLayer = wmtsLayers[i];
				// add layer in front of main WMS layer
				geoExtMap.map.addLayer(wmtsLayer);
				geoExtMap.map.setLayerIndex(wmtsLayer, thematicLayerIndex);
			}
		}

		setVisibleWmtsLayers(visibleWmtsLayers);
	}
}

function setVisibleWmtsLayers(visibleWmtsLayers) {
	// set WMTS layer visibility flags
	var wmtsLayers = getWmtsLayers();
	for (var i=0; i<wmtsLayers.length; i++) {
		wmtsLayers[i].show = (visibleWmtsLayers.indexOf(wmtsLayers[i].wmsLayerName) != -1);
	}
	updateScaleBasedWmtsLayersVisibility(geoExtMap.map.getScale());
}

function updateScaleBasedWmtsLayersVisibility(scale) {
	// set WMTS layer visibilities for current scale
	var wmtsLayers = getWmtsLayers();
	for (var i=0; i<wmtsLayers.length; i++) {
		var wmtsLayer = wmtsLayers[i];
		var visibility = wmtsLayer.show;
		if (visibility) {
			// check if current scale is in range
			var layerProperties = wmsLoader.layerProperties[wmtsLayer.wmsLayerName];
			if (layerProperties.minScale != undefined) {
				visibility = visibility && (layerProperties.minScale > scale);
			}
			if (layerProperties.maxScale != undefined) {
				visibility = visibility && (layerProperties.maxScale <= scale);
			}
		}
		wmtsLayer.setVisibility(visibility);
		if (!visibility) {
			// hide layer immediately
			wmtsLayer.removeBackBuffer();
		}
	}
}
