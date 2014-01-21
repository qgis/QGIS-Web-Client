/*
 *
 * QGISExtensions.js -- part of Quantum GIS Web Client
 *
 * Copyright (2010-2012), The QGIS Project All rights reserved.
 * Quantum GIS Web Client is released under a BSD license. Please see
 * https://github.com/qgis/qgis-web-client/blob/master/README
 * for the full text of the license and the list of contributors.
 *
*/ 

/* Five QGIS extensions:
* QGIS.WMSCapabilitiesLoader
* QGIS.PrintProvider
* QGIS.SearchComboBox
* QGIS.SearchPanel
* QGIS.FeatureInfoParser
* QGIS.LayerOrderPanel
*/

/* ************************** QGIS.WMSCapabilitiesLoader ************************** */
// parse GetProjectSettings from QGIS Mapserver
// extends GeoExt.tree.WMSCapabilitiesLoader in order to expose the WMSCapabilities Tree to later read out settings from the tree
QGIS.WMSCapabilitiesLoader = function(config) {
  Ext.apply(this, config);
  QGIS.WMSCapabilitiesLoader.superclass.constructor.call(this,config);
};

Ext.extend(QGIS.WMSCapabilitiesLoader, GeoExt.tree.WMSCapabilitiesLoader, {
  useGetProjectSettings: true,
  WMSCapabilities: null,
  projectSettings: null,
  //this list holds layer properties, indexed by layername
  layerProperties: new Array(),
	//this list holds a mapping between title and layer name - the tree shows the title, the WMS requests need names
	layerTitleNameMapping: new Array(),
	initialVisibleLayers: new Array(),
  getParams: function(node) {
    return {
      SERVICE: 'WMS',
      VERSION: '1.3',
      REQUEST: this.useGetProjectSettings ? 'GetProjectSettings' : 'GetCapabilities'
    };
  },
  processResponse : function(response, node, callback, scope) {
    if (response.responseXML) {
      this.WMSCapabilities = response.responseXML;
    }
    else {
      if (window.DOMParser) {
        var parser=new DOMParser();
        this.WMSCapabilities=parser.parseFromString(response.responseText,"text/xml");
      }
      else { // Internet Explorer
        this.WMSCapabilities=new ActiveXObject("Microsoft.XMLDOM");
        this.WMSCapabilities.async="false";
        this.WMSCapabilities.loadXML(response.responseText);
      }
    }
    this.projectSettings = new OpenLayers.Format.WMSCapabilities({
      readers: {
        "wms": OpenLayers.Util.applyDefaults({

          "ComposerTemplates": function(node, obj) {
            obj.composerTemplates = []
            this.readChildNodes(node, obj.composerTemplates);
          },
          "ComposerTemplate": function(node, obj) {
            var composerTemplate = {
              name: node.getAttribute("name"),
              width: parseInt(node.getAttribute("width")),
              height: parseInt(node.getAttribute("height"))
            };
            this.readChildNodes(node, composerTemplate);
            obj.push(composerTemplate);
          },
          "ComposerMap": function(node, obj) {
            obj.map = {
              name: node.getAttribute("name"),
              width: parseInt(node.getAttribute("width")),
              height: parseInt(node.getAttribute("height"))
            };
          },

          "LayerDrawingOrder": function(node, obj) {
            obj.layerDrawingOrder = this.getChildValue(node).split(',');
          },

          // based on OpenLayers.Format.WMSCapabilities.v1 parser
          "Layer": function(node, obj) {
						var parentLayer, capability;
						if (obj.capability) {
								capability = obj.capability;
								parentLayer = obj;
						} else {
								capability = obj;
						}
            var attrNode = node.getAttributeNode("queryable");
            var queryable = (attrNode && attrNode.specified) ?
              node.getAttribute("queryable") : null;
            attrNode = node.getAttributeNode("cascaded");
            var cascaded = (attrNode && attrNode.specified) ?
              node.getAttribute("cascaded") : null;
            attrNode = node.getAttributeNode("opaque");
            var opaque = (attrNode && attrNode.specified) ?
              node.getAttribute('opaque') : null;

            // custom attributes
            attrNode = node.getAttributeNode("visible");
            var visible = (attrNode && attrNode.specified) ?
              node.getAttribute("visible") : null;
            var displayField = node.getAttribute('displayField');

            var noSubsets = node.getAttribute('noSubsets');
            var fixedWidth = node.getAttribute('fixedWidth');
            var fixedHeight = node.getAttribute('fixedHeight');
						var parent = parentLayer || {},
								extend = OpenLayers.Util.extend;
            var layer = {nestedLayers: [],
                    styles: parentLayer ? [].concat(parentLayer.styles) : [],
                    srs: parentLayer ? extend({}, parent.srs) : {}, 
                    metadataURLs: [],
                    bbox: parentLayer ? extend({}, parent.bbox) : {},
                    llbbox: parent.llbbox,
                    dimensions: parentLayer ? extend({}, parent.dimensions) : {},
                    authorityURLs: parentLayer ? extend({}, parent.authorityURLs) : {},
                    identifiers: {},
                    keywords: [],
                    queryable: (queryable && queryable !== "") ? 
                        (queryable === "1" || queryable === "true" ) :
                        (parent.queryable || false),
                    cascaded: (cascaded !== null) ? parseInt(cascaded) :
                        (parent.cascaded || 0),
                    opaque: opaque ? 
                        (opaque === "1" || opaque === "true" ) :
                        (parent.opaque || false),
										//visible and displayField are QGIS extensions
										visible: (visible && visible !== "") ?
											( visible === "1" || visible === "true" ) : true,
										displayField: displayField,
										noSubsets: (noSubsets !== null) ? 
												(noSubsets === "1" || noSubsets === "true" ) :
												(parent.noSubsets || false),
										fixedWidth: (fixedWidth != null) ? 
												parseInt(fixedWidth) : (parent.fixedWidth || 0),
										fixedHeight: (fixedHeight != null) ? 
												parseInt(fixedHeight) : (parent.fixedHeight || 0),
										minScale: parent.minScale,
										maxScale: parent.maxScale,
										attribution: parent.attribution
								};
            obj.nestedLayers.push(layer);
            layer.capability = capability;
            this.readChildNodes(node, layer);
						delete layer.capability;
                if(layer.name) {
                    var parts = layer.name.split(":"),
                        request = capability.request,
                        gfi = request.getfeatureinfo;
                    if(parts.length > 0) {
                        layer.prefix = parts[0];
                    }
                    capability.layers.push(layer);
                    if (layer.formats === undefined) {
                        layer.formats = request.getmap.formats;
                    }
                    if (layer.infoFormats === undefined && gfi) {
                        layer.infoFormats = gfi.formats;
                    }
                }
            },

          "Attributes": function(node, obj) {
            obj.attributes = []
            this.readChildNodes(node, obj.attributes);
          },
          "Attribute": function(node, obj) {
            var attribute = {
              name: node.getAttribute("name"),
              type: node.getAttribute("type"),
              precision: parseInt(node.getAttribute("precision")),
              length: parseInt(node.getAttribute("length")),
              editType: node.getAttribute("editType"),
              comment: node.getAttribute("comment")
            };
            obj.push(attribute);
          },
					"SRS": function(node, obj) {
							obj.srs[this.getChildValue(node)] = true;
					}
        }, OpenLayers.Format.WMSCapabilities.v1_3.prototype.readers["wms"])
      }
    }).read(this.WMSCapabilities);
    this.processLayer(this.projectSettings.capability, this.projectSettings.capability.request.getmap.href, node);

    //fill the list of layer properties
    for (var i=0; i<this.projectSettings.capability.layers.length; i++) {
      var layer = this.projectSettings.capability.layers[i];
      this.layerProperties[layer.name] = {
        name: layer.name,
        title: layer.title,
				abstract: layer.abstract,
				visible: layer.visible,
        opacity: 255,
        queryable: layer.queryable,
        displayField: layer.displayField,
        nrChildLayers: layer.nestedLayers.length,
				attributes: layer.attributes,
				srsList: layer.srs,
				bbox: layer.llbbox
      };
			this.layerTitleNameMapping[layer.title] = layer.name;
			if (layer.visible) {
				this.initialVisibleLayers.push(layer.name);
			}
    }

    // defaults for GetCapabilities
    if (this.projectSettings.capability.composerTemplates == undefined) {
      this.projectSettings.capability.composerTemplates = [];
    }

    //deal with callback function
    if (typeof callback == "function") {
        callback.apply(scope || node, [node]);
    }
  },
  createWMSLayer: function(layer, url) {
    if (layer.name) {
      return new OpenLayers.Layer.WMS(
        layer.title, url,
        OpenLayers.Util.extend({
          formats: layer.formats[0],
          layers: layer.name
        },
				this.layerParams),
        OpenLayers.Util.extend({
          minScale: layer.minScale,
          queryable: layer.queryable,
          maxScale: layer.maxScale,
          visible: layer.visible,
          metadata: layer
        }, this.layerOptions));
    } else {
      return null;
    }
  },
  findLayerNodeByName: function(layername) {
    //goal of this function is to find a layer by its name
    //we need to fork between IE 7/8 and modern browsers
    var xpathExpr = '//opengis:Layer/opengis:Name[text()="'+layername+'"]/..';
    var layerNode = undefined;
    //case standard compliant browsers
    if (typeof(this.WMSCapabilities.evaluate) == "function") {
      xpathResult = this.WMSCapabilities.evaluate(xpathExpr,this.WMSCapabilities.firstChild,this.nsResolver,XPathResult.ANY_TYPE,null);
      //type 4 = UNORDERED_NODE_ITERATOR_TYPE
      if (xpathResult.resultType == 4) {
        layerNode = xpathResult.iterateNext();
      }
    }
    else {
      //case older IEs
      this.WMSCapabilities.setProperty("SelectionLanguage", "XPath");
      this.WMSCapabilities.setProperty("SelectionNamespaces","xmlns:opengis='http://www.opengis.net/wms'");
      layerNode = this.WMSCapabilities.selectSingleNode(xpathExpr);
    }
    return layerNode;
  },
  nsResolver: function(prefix) {
    var ns = {
      'opengis' : 'http://www.opengis.net/wms'
    };
    return ns[prefix] || null;
  }
});


/* ************************** QGIS.PrintProvider ************************** */
// extends GeoExt.data.PrintProvider
QGIS.PrintProvider = function(config) {
  Ext.apply(this, config);
  QGIS.PrintProvider.superclass.constructor.call(this,config);
};

Ext.extend(QGIS.PrintProvider, GeoExt.data.PrintProvider, {
  print: function(map, pages, options) {
    if (map instanceof GeoExt.MapPanel) {
        map = map.map;
    }
    pages = pages instanceof Array ? pages : [pages];
    options = options || {};
    if(this.fireEvent("beforeprint", this, map, pages, options) === false) {
        return;
    }

    //need to determine grid spacing
    var mapScale = printExtent.page.scale.get("value");
    var grid_interval = 10;
    if (mapScale > 100 && mapScale <= 250) {
      grid_interval = 25;
    }
    else if (mapScale > 250 && mapScale <= 1000) {
      grid_interval = 50;
    }
    else if (mapScale > 1000 && mapScale <= 2500) {
      grid_interval = 100;
    }
    else if (mapScale > 2500 && mapScale <= 5000) {
      grid_interval = 250;
    }
    else if (mapScale > 5000 && mapScale <= 12000) {
      grid_interval = 500;
    }
    else if (mapScale > 12000 && mapScale <= 25000) {
      grid_interval = 1000;
    }
    else if (mapScale > 25000 && mapScale <= 50000) {
      grid_interval = 2000;
    }
    else if (mapScale > 50000 && mapScale <= 100000) {
      grid_interval = 5000;
    }
    else if (mapScale > 100000 && mapScale <= 500000) {
      grid_interval = 10000;
    }
    else if (mapScale > 500000 && mapScale <= 1000000) {
      grid_interval = 50000;
    }
    else if (mapScale > 1000000 && mapScale <= 5000000) {
      grid_interval = 100000;
    }
    else if (mapScale > 5000000 && mapScale <= 10000000) {
      grid_interval = 250000;
    }
    else if (mapScale > 10000000 && mapScale <= 50000000) {
      grid_interval = 2500000;
    }
    else if (mapScale > 50000000 && mapScale <= 100000000) {
      grid_interval = 5000000;
    }
    else if (mapScale > 100000000) {
      grid_interval = 10000000;
    }

    // if the var fixedPrintResolution of GlobalOptions.js is set, the print resolution will be this value
    if (fixedPrintResolution != null && parseInt(fixedPrintResolution) > 0){
        printResolution = fixedPrintResolution;
    } else {
        printResolution = this.dpi.get("value");
    }

    var printUrl = this.url+'&SRS='+authid+'&DPI='+printResolution+'&TEMPLATE='+this.layout.get("name")+'&map0:extent='+printExtent.page.getPrintExtent(map).toBBOX(1,false)+'&map0:rotation='+(printExtent.page.rotation * -1)+'&map0:scale='+mapScale+'&map0:grid_interval_x='+grid_interval+'&map0:grid_interval_y='+grid_interval+'&LAYERS='+encodeURIComponent(thematicLayer.params.LAYERS);
    if (thematicLayer.params.OPACITIES) {
      printUrl += '&OPACITIES='+encodeURIComponent(thematicLayer.params.OPACITIES);
    }
    if (thematicLayer.params.SELECTION) {
      printUrl += '&SELECTION='+encodeURIComponent(thematicLayer.params.SELECTION);
    }

    // makes spatial query from map to use the attributes in the print template (more in README chap 4.5)
    var lonlat = printExtent.page.getPrintExtent(map).getCenterLonLat();
    var mapCenter = new OpenLayers.Geometry.Point(lonlat.lon, lonlat.lat);
    var myfilter = new OpenLayers.Filter.Comparison({
        type: OpenLayers.Filter.Spatial.INTERSECTS,
        value: mapCenter
    });
    Ext.getBody().mask(printLoadingString[lang], 'x-mask-loading');
    var protocol = new OpenLayers.Protocol.WFS({
            url: serverAndCGI + '/'+ wmsMapName,
            featureType: 'print',
            geometryName: 'geometry',
            srsName: authid,
            filter: myfilter,
            readWithPOST: true
    });

    protocol.read({
        callback: function(response) {
                if(response.features.length > 0) {
                    attributes = response.features[0].attributes;
                     for (key in attributes){
                        printUrl += '&' + key + '=' + encodeURIComponent(attributes[key]);
                    }
                }
            this.download(printUrl);
        },
        scope: this
    });

  },
  download: function(url) {
    if (this.fireEvent("beforedownload", this, url) !== false) {
      //because of an IE bug one has to do it in two steps
      var parentPanel = Ext.getCmp('geoExtMapPanel');
      var pdfWindow = new Ext.Window(
        {
          title: printWindowTitleString[lang],
          width: Ext.getBody().getWidth() - 100,
          height: Ext.getBody().getHeight() - 100,
          resizable: true,
          closable: true,
          constrain: true,
          constrainHeader: true,
          x:50,
          y:50,
          html: '<object data="'+url+'" type="application/pdf" width="100%" height="100%"><p style="margin:5px;">'+printingObjectDataAlternativeString1[lang] + url + printingObjectDataAlternativeString2[lang]
        }
      );
      pdfWindow.show();
      Ext.getBody().unmask();
    }
    this.fireEvent("print", this, url);
  }
}
);


/* ************************** QGIS.SearchComboBox ************************** */
// extends Ext.form.ComboBox in order to display search results pulled in from a serverside python script
// sample taken from Swisstopo search combobox
QGIS.SearchComboBox = Ext.extend(Ext.form.ComboBox, {

  map: null,
  highlightLayerName: null,
  highlightLayer: null,
  hasReverseAxisOrder: false,

  /** config
  */
  url: searchBoxQueryURL,
  geomUrl: searchBoxGetGeomURL,

  // default Ext.form.ComboBox config
  hideTrigger: false,
  minChars: 2,
  queryDelay: 50,
  displayField: 'label',
  forceSelection: true,
  searchtables: null,

  initComponent: function() {
    // i18n
    this.emptyText = OpenLayers.i18n(searchFieldDefaultTextString[lang]);
    this.triggerConfig = { // we use a default clear trigger here
              tag: "img", src: Ext.BLANK_IMAGE_URL, cls:'x-form-trigger x-form-clear-trigger'
            }; 
    this.on("keyUp", this.keyUpHandler);
    this.on("afterrender", this.afterrenderHandler);
    this.on("beforeselect", this.beforeselectHandler);
    this.store = new Ext.data.JsonStore({
      proxy: new Ext.data.ScriptTagProxy({
        url: this.url,
        method: 'GET',
        callbackParam: 'cb',
        nocache: false,
        autoAbort: true
      }),
      baseParams: {
        searchtables: this.getSearchTables()
      },
      root: 'results',
      fields: ['searchtable', 'displaytext', 'bbox']
    });
    this.tpl = new Ext.XTemplate(
      '<tpl for="."><div class="x-combo-list-item {service}">',
        '<tpl if="searchtable == null">',
          '<b>',
        '</tpl>',
              '{displaytext}',
        '<tpl if="searchtable == null">',
          '</b>',
        '</tpl>',
      '</div></tpl>').compile();

    QGIS.SearchComboBox.superclass.initComponent.call(this);

    //reference to highlightLayer
    if (this.highlightLayerName) {
      this.highlightLayer = this.map.getLayersByName(this.highlightLayerName)[0];
    }

    this.on("select", this.recordSelected, this);
  },

  // private
  afterrenderHandler: function() {
    this.trigger["hide"]();
  },

  beforeselectHandler: function(combo,record,index) {
    if (index > 0) { //user made a selection in combo
      this.collapse();
      // if index == 0: user pressed enter while entering search term
    }
  },
  
  keyUpHandler: function(cmp, e) {
    //reset if user deleted last sign
    this.checkTrigger();
    if (Ext.isEmpty(this.getValue())) {
      this.resetSearch();
    }
    //collapse if less than minChars are left
    if (this.getValue().length < this.minChars) {
      this.collapse();
    }
  },
  
  checkTrigger: function() {
    // show trigger only if there is any input
    if (this.rendered) {
      this.trigger[!Ext.isEmpty(this.getValue()) ? 'show': 'hide']();
    }
  },
    
  onTriggerClick: function() {
    // reimplements default onTriggerClick function (which does nothing)
    this.resetSearch();
    this.checkTrigger();
    this.focus();
  },
  
  onSelect: function(record, index){
    if(this.fireEvent('beforeselect', this, record, index) !== false){
      if (record.get('searchtable') != null) {
        this.setValue(record.get('displaytext'));
        this.fireEvent('select', this, record, index);
      }
    }
  },
  
  resetSearch: function(){
    this.collapse();
    this.clearSearchResult();
  },
  
  recordSelected: function(combo, record, index) {
    var extent = OpenLayers.Bounds.fromArray(record.get('bbox'), this.hasReverseAxisOrder);
    //make sure that map extent is not too small for point data
    //need to improve this for units other than "m", e.g. degrees
    var extWidth = extent.getWidth();
    var extHeight = extent.getHeight();
    if (extWidth < 50) {
      centerX = extent.left + extWidth * 0.5;
      extent.left = centerX - 25;
      extent.right = centerX + 25;
    }
    else {
      extent.left -= extWidth * 0.05;
      extent.right += extWidth * 0.05;
    }
    if (extHeight < 50) {
      centerY = extent.bottom + extHeight * 0.5;
      extent.bottom = centerY - 25;
      extent.top = centerY + 25;
    }
    else {
      extent.bottom -= extHeight = 0.05;
      extent.top += extHeight = 0.05;
    }
    //need to check if extent is too small
    this.map.zoomToExtent(extent);
    if (this.highlightLayer) {
      //network request to get real wkt geometry of search object
      Ext.Ajax.request({
      url: this.geomUrl,
      success: this.showSearchGeometry,
      failure: function ( result, request) {
        Ext.MessageBox.alert(errMessageSearchComboNetworkRequestFailureTitleString[lang], errMessageSearchComboNetworkRequestFailureString+result.responseText);
      },
      method: 'GET',
      params: { searchtable: record.get('searchtable'), displaytext: record.get('displaytext') }
      });
    }
  },
  showSearchGeometry: function(result, request) {
    this.highlightLayer.removeAllFeatures();
    var feature = new OpenLayers.Feature.Vector(OpenLayers.Geometry.fromWKT(result.responseText));
    this.highlightLayer.addFeatures([feature]);
  },
  clearSearchResult: function() {
    this.setValue("");
    if (this.highlightLayer) {
      this.highlightLayer.removeAllFeatures();
    }
  },
  getSearchTables: function() {
    returnVal = null;
    if (this.searchtables != null) {
      returnVal = this.searchtables;
    }
    return returnVal;
  }
});

/** api: xtype = qgis_searchcombo */
Ext.reg("qgis_searchcombo", QGIS.SearchComboBox);


/* *************************** QGIS.SearchPanel **************************** */
// extends Ext.Panel with a search form and a list of search results
QGIS.SearchPanel = Ext.extend(Ext.Panel, {
  form: null,
  featureInfoParser: null,
  store: null,
  resultsGrid: null,

  // config
  /**
  * Search request method:
  *   false: submit search form using URL rewriting
  *   true:  submit WMS GetFeatureInfo request
  */
  useWmsRequest: false,
  /**
  * WMS layer name for GetFeatureInfo request
  * required if useWmsRequest is true
  */
  queryLayer: '',
  /**
  * single item or array of child components to be added as form fields (see Ext.form.FormPanel.items)
  */
  formItems: [],
  /**
  * array of columns for results grid (see Ext.grid.GridPanel.columns)
  */
  gridColumns: [],
  /**
  * WMS layer name for feature selection
  */
  selectionLayer: '',
  /**
  * zoom level for feature selection
  */
  selectionZoom: 4,
  

  constructor: function (config) {
    config = config || {};
    config.useWmsRequest = config.useWmsRequest || false;
    config.queryLayer = config.queryLayer || '';
    config.formItems = config.formItems || [];
    config.gridColumns = config.gridColumns || [];
    config.selectionLayer = config.selectionLayer || '';
    if (config.selectionZoom == null) {
      config.selectionZoom = 4;
    }
    this.addEvents(['beforesearchdataloaded', 'aftersearchdataloaded', 'searchformsubmitted']);

    QGIS.SearchPanel.superclass.constructor.call(this, config);
  },

  initComponent: function() {
    this.form = new Ext.form.FormPanel({
      autoHeight: true,
      bodyBorder: false,
      defaults: {
        anchor: '-10'
      },
      items: this.formItems,
      buttons: [
        {
          text: searchButtonString[lang],
          scope: this,
          handler: this.onSubmit
        },
        {
          text: resetButtonString[lang],
          scope: this,
          handler: function() {
            this.fireEvent("featureselectioncleared");
            this.form.getForm().reset();
          }
        }
      ],
      keys: [
        {
          key: [Ext.EventObject.ENTER],
          handler: function() {
            this.onSubmit();
          },
          scope: this
        }
      ]
    });

    this.featureInfoParser = new QGIS.FeatureInfoParser();

    Ext.apply(this, {
      layout: 'fit',
      autoHeight: true,
      items: [
        this.form
      ]
    });
    QGIS.SearchPanel.superclass.initComponent.call(this);

    this.addEvents("featureselected");
    this.addEvents("featureselectioncleared");

    Ext.Ajax.on('requestexception', this.onAjaxRequestException, this);
  },

  onSubmit: function() {
    if (this.store != null) {
      this.store.removeAll();
    }
    if (this.resultsGrid != null) {
        this.resultsGrid.hide();
    }
    this.fireEvent("featureselectioncleared");
    this.fireEvent("searchformsubmitted");
    this.el.mask(pleaseWaitString[lang], 'x-mask-loading');
    if (this.useWmsRequest) {
      this.submitGetFeatureInfo();
    }
    else {
      this.submitForm();
    }
  },

  submitGetFeatureInfo: function() {
    var filter = [];
    var fieldValues = this.form.getForm().getFieldValues();
    var fieldsValidate = true;
    for (var key in fieldValues) {
      var field = this.form.getForm().findField(key);
      // Only add if not blank
      if(fieldValues[key]){
        var filterOp = field.initialConfig.filterOp ? field.initialConfig.filterOp : "=";
        if (field.isXType('numberfield') || field.isXType('combo')) {
          valueQuotes = "";
        }
        else {
          valueQuotes = "'"
        }
        filter.push("\"" + key + "\" "+ filterOp +" " + valueQuotes + fieldValues[key] + valueQuotes);
        fieldsValidate &= field.validate();
      }
    }    

    if (fieldsValidate) {
      filter = this.queryLayer + ":" + filter.join(' AND ');
      Ext.Ajax.request({
        url: wmsURI,
        params: {
          'SERVICE': 'WMS',
          'VERSION': '1.1.1',
          'REQUEST': 'GetFeatureInfo',
          'LAYERS': this.queryLayer,
          'QUERY_LAYERS': this.queryLayer,
          'FEATURE_COUNT': 10,
          'INFO_FORMAT': 'text/xml',
          'SRS': authid,
          'FILTER': filter
        },
        method: 'GET',
        scope: this,
        success: this.onSuccess
      });
    }
    else {
      this.showFailure("client");
    }
  },

  submitForm: function() {
    this.form.getForm().submit({
      url: wmsURI,
      method: 'GET',
      scope: this,
      success: this.onFormSuccess,
      failure: this.onFormFailure
    });
  },

  onFormSuccess: function(form, action) {
    this.onSuccess(action.response);
  },

  onSuccess: function(response) {
    if (this.featureInfoParser.parseXML(response)) {
      var features = this.featureInfoParser.featuresArray();

      // workaround for missing subsequent grid panel updates if first search result was empty:
      // recreate store and grid panel until a search result contains features
      var destroyStore = (this.store == null && features.length == 0);

      if (this.store == null) {
        // create store
        var storeFields = [];
        var featureFields = this.featureInfoParser.featureFields();
        for (var i=0; i<featureFields.length; i++) {
          storeFields.push({name: featureFields[i]});
        }
        this.store = new Ext.data.ArrayStore({
          idIndex: 0,
          fields: storeFields
        });

      }

      // show results, firing events: see Wegbisinit.js
      this.fireEvent('beforesearchdataloaded', this, features);
      this.store.loadData(features, false);
      this.el.unmask();

      if (destroyStore) {
        this.store = null;
      }
      this.fireEvent('aftersearchdataloaded', this);
    }
    else {
      // ServiceException
      this.showFailure(this.featureInfoParser.serviceException());
    }
  },

  onAjaxRequestException: function() {
    this.showFailure(networkErrorString[lang]);
  },

  onFormFailure: function(form, action) {
    // workaround for IE 8/9, when response is XML
    if (action.response != null && action.response.status == 200) {
      this.onSuccess(action.response);
      return;
    }

    this.showFailure(action.failureType);
  },

  showFailure: function(msg) {
    this.el.unmask();
    if (msg == "client") {
      Ext.MessageBox.alert(searchPanelTitleString[lang], missingOrInvalidSearchParams[lang]);
    }
    else {
      Ext.MessageBox.alert(searchErrorString[lang], msg);
    }
  },

  onRowClick: function(grid, rowIndex, e) {
    var record = grid.store.getAt(rowIndex);
    var bbox = record.data.bbox;
    if (bbox != null) {
      var id = record.id;
      var x = (bbox.minx + bbox.maxx) / 2.0;
      var y = (bbox.miny + bbox.maxy) / 2.0;
      var doZoomToExtent = false;
      if (this.hasOwnProperty('doZoomToExtent')){
        doZoomToExtent = this.doZoomToExtent;
      }
      this.fireEvent("featureselected", {"layer":this.selectionLayer, "id":id, "x":x, "y":y, "bbox":new OpenLayers.Bounds(bbox.minx,bbox.miny,bbox.maxx,bbox.maxy), "zoom":this.selectionZoom, "doZoomToExtent":doZoomToExtent});
    }
  }
});

/** api: xtype = qgis_searchpanel */
Ext.reg('qgis_searchpanel', QGIS.SearchPanel);


/* ************************* QGIS.FeatureInfoParser ************************ */
// parse GetFeatureInfo result returned by QGIS Server
// offer feature fields and features as array for Ext.data.ArrayStore
QGIS.FeatureInfoParser = Ext.extend(Object, {
  serviceExceptionMessage: "",
  fields: [],
  features: [],
  ids: [],
  bbox: null,

  parseXML: function(response) {
    var xmlDoc = null;
    if (response.responseXML) {
      xmlDoc = response.responseXML;
    }
    else {
      if (window.DOMParser) {
        var parser = new DOMParser();
        xmlDoc = parser.parseFromString(response.responseText, "text/xml");
      }
      else { // Internet Explorer
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML(response.responseText);
      }
    }

    var node = xmlDoc.firstChild;
    if (node.nodeName == "ServiceExceptionReport") {
      var serviceException = node.getElementsByTagName("ServiceException")[0]
      this.serviceExceptionMessage = serviceException.text || serviceException.textContent;
      return false;
    }
    else if (node.nodeName == "GetFeatureInfoResponse") {
      this.fields = ['feature_id'];
      var updateFields = true;
      this.features = [];
      this.ids = [];

      // get bbox of all features
      var bboxNode = node.getElementsByTagName("BoundingBox")[0];
      this.bbox = {
        "minx": parseFloat(bboxNode.getAttribute("minx")),
        "miny": parseFloat(bboxNode.getAttribute("miny")),
        "maxx": parseFloat(bboxNode.getAttribute("maxx")),
        "maxy": parseFloat(bboxNode.getAttribute("maxy"))
      };

      // get layer features
      var layerNode = node.getElementsByTagName("Layer")[0];
      if (layerNode != null) {
        var featureNodes = layerNode.getElementsByTagName("Feature");
        for (var i=0; i<featureNodes.length; i++) {
          var feature = [];
          var featureNode = featureNodes[i];
          var id = featureNode.getAttribute("id");
          feature.push(id);
          this.ids.push(id);
          var attributeNodes = featureNode.getElementsByTagName("Attribute");
          for (var a=0; a<attributeNodes.length; a++) {
            var attributeNode = attributeNodes[a];
            if (updateFields) {
              // get fields from first feature
              this.fields.push(attributeNode.getAttribute("name"));
            }
            // add feature attribute value
            feature.push(attributeNode.getAttribute("value"));
          }
          var bboxNodes = featureNode.getElementsByTagName("BoundingBox");
          if (bboxNodes.length > 0) {
            var bboxNode = bboxNodes[0];
            if (updateFields) {
              this.fields.push("bbox");
            }
            // add feature bbox
            feature.push({
              "minx": parseFloat(bboxNode.getAttribute("minx")),
              "miny": parseFloat(bboxNode.getAttribute("miny")),
              "maxx": parseFloat(bboxNode.getAttribute("maxx")),
              "maxy": parseFloat(bboxNode.getAttribute("maxy"))
            });
          }
          updateFields = false;
          this.features.push(feature);
        }
      }
      return true;
    }

    this.serviceExceptionMessage = "Error";
    return false;
  },

  serviceException: function() {
    return this.serviceExceptionMessage;
  },

  featureFields: function() {
    return this.fields;
  },

  featuresArray: function() {
    return this.features;
  },

  featureIds: function() {
    return this.ids;
  },

  featuresBbox: function() {
    return this.bbox;
  }
});

// override 3.4.0 to allow beforeshow to cancel the tooltip
Ext.override(Ext.ToolTip, {
   show: function(){
      if(this.anchor){
          this.showAt([-1000,-1000]);
          this.origConstrainPosition = this.constrainPosition;
          this.constrainPosition = false;
          this.anchor = this.origAnchor;
      }
      this.showAt(this.getTargetXY());
      
      if(this.anchor){
          this.anchorEl.show();
          this.syncAnchor();
          this.constrainPosition = this.origConstrainPosition;
      // added "if (this.anchorEl)"
      }else if (this.anchorEl){
          this.anchorEl.hide();
      }
   },
   showAt : function(xy){
      this.lastActive = new Date();
      this.clearTimers();
      Ext.ToolTip.superclass.showAt.call(this, xy);
      if(this.dismissDelay && this.autoHide !== false){
          this.dismissTimer = this.hide.defer(this.dismissDelay, this);
      }
      if(this.anchor && !this.anchorEl.isVisible()){
          this.syncAnchor();
          this.anchorEl.show();
      // added "if (this.anchorEl)"
      }else if (this.anchorEl){
          this.anchorEl.hide();
      }
   }
});

/* *************************** QGIS.LayerOrderPanel **************************** */
// extends Ext.Panel with a list of the active layers that can be ordered by the user
QGIS.LayerOrderPanel = Ext.extend(Ext.Panel, {
  title: layerOrderPanelTitleString[lang],

  store: null,
  grid: null,

  constructor: function (config) {
    config = config || {};

    QGIS.LayerOrderPanel.superclass.constructor.call(this, config);
  },

  initComponent: function() {
    this.addEvents(
      /**
       * @event layerVisibilityChange
       * fires after changing the visilibity of a layer
       * @param {String} layer name
       */
      'layerVisibilityChange',
      /**
       * @event orderchange
       * fires after reordering rows
       */
      'orderchange',
      /**
       * @event opacitychange
       * fires after moving opacity slider
       * @param {String} layer name
       * @param {Number} layer opacity
       */
      'opacitychange'
    );

    this.store = new Ext.data.ArrayStore({
      fields: [
        {name: 'layer'}
      ]
    });

    var me = this;
    this.grid = new Ext.grid.GridPanel({
      store: this.store,
      columns: [
        {
          id: 'layer',
          header: 'Ebene',
          dataIndex: 'layer',
          renderer: function(value, metadata, record, rowIndex, colIndex, store) {
            // DOM element marker for inserting opacity sliders
            var layer = record.get('layer');
            return layer + "<el id='layerOrder_" + me.escapeString(layer) + "'></el>";
          }
        },
        {
          xtype: 'actioncolumn',
          id: 'actions',
          width: 40,
          align: 'right',
          items: [
            {
              iconCls: 'action-icon action-down',
              tooltip: layerOrderPanelLayerSettingsTooltipString[lang],
              getClass: function(v, meta, rec) {
                return 'layerOptions_' + this.escapeString(rec.get('layer'));
              },
              handler: function(grid, rowIndex, colIndex, item) {
                var layerId = this.escapeString(this.store.getAt(rowIndex).get('layer'));

                // toggle icon
                var buttonEl = Ext.select('img.layerOptions_' + layerId).first();
                buttonEl.toggleClass('action-down');
                buttonEl.toggleClass('action-up');

                // toggle slider
                Ext.select('#opacitySlider_' + layerId).first().parent('tr').toggle();

                // resize slider
                this.resizeOpacitySlider(layerId, grid.getWidth());
              },
              scope: this
            },
            {
              iconCls: 'action-icon action-visible',
              tooltip: layerOrderPanelVisibilityChangeTooltipString[lang],
              getClass: function(v, meta, rec) {
                return 'layerOptions_' + this.escapeString(rec.get('layer'));
              },
              handler: function(grid, rowIndex, colIndex) {
                var layerId = this.escapeString(this.store.getAt(rowIndex).get('layer'));

                // toggle icon
                var buttonEl = Ext.select('img.layerOptions_' + layerId).first().next();
                buttonEl.toggleClass('action-visible');
                buttonEl.toggleClass('action-invisible');

                var rec = this.store.getAt(rowIndex);
								//set sprite of button
                this.fireEvent('layerVisibilityChange', rec.get('layer'));
              },
              scope: this
            }
          ]
        }
      ],
      listeners: {
        resize: function(panel, adjWidth, adjHeight, rawWidth, rawHeight) {
          panel.doLayout();

          // resize opacity sliders
          var records = this.getStore().getRange();
          for (var i=0; i<records.length; i++) {
            me.resizeOpacitySlider(me.escapeString(records[i].get('layer')), adjWidth);
          }
        },
        render: function(grid) {
          // drop target for reordering grid rows
          var ddrow = new Ext.dd.DropTarget (grid.container, {
            ddGroup: 'layerorder',
            copy: false,
            notifyDrop: function (dd, e, data) {
              var ds = grid.getStore();
              var sm = grid.getSelectionModel();
              var rows = sm.getSelections();
              if (dd.getDragData(e)) {
                var rowIndex = dd.getDragData(e).rowIndex;
                if (rowIndex != undefined) {
                  for (var i=0; i<rows.length; i++) {
                    ds.remove(ds.getById(rows[i].id));
                  }
                  ds.insert(rowIndex, data.selections);
                  sm.clearSelections();

                  // restore opacity slider
                  me.addOpacitySlider(data.selections[0].get('layer'));

                  me.fireEvent('orderchange');
                }
              }
            }
          });

          // disable drag on actions and opacity slider elements
          var dragZone = grid.getView().dragZone;
          dragZone.addInvalidHandleClass('x-grid3-col-actions');
          dragZone.addInvalidHandleClass('x-action-col-icon');
          dragZone.addInvalidHandleClass('opacity-slider');
          dragZone.addInvalidHandleClass('x-slider');
          dragZone.addInvalidHandleClass('x-slider-end');
          dragZone.addInvalidHandleClass('x-slider-inner');
          dragZone.addInvalidHandleClass('x-slider-thumb');
          dragZone.addInvalidHandleClass('x-slider-focus');
        }
      },
      ddGroup: 'layerorder',
      ddText: layerOrderPanelMoveLayerTextString[lang],
      enableDragDrop: true,
      sm: new Ext.grid.RowSelectionModel({singleSelect: true}),
      hideHeaders: true,
      autoExpandColumn: 'layer',
      border: false
    });

    Ext.apply(this, {
      layout: 'fit',
      autoScroll: true,
      border: false,
      items: [
        this.grid
      ]
    });

    QGIS.LayerOrderPanel.superclass.initComponent.call(this);
  },

  addLayer: function(layer, opacity) {
    var rec = new this.store.recordType({
      layer: layer
    }, layer);
    // insert on top
    this.store.insert(0, rec);
    // add opacity slider
    this.addOpacitySlider(layer);
		//set visibility
		if (visibleLayers.indexOf(layer) == -1) {
			this.toggleLayerVisibility(layer);
		}
  },

  clearLayers: function() {
    this.store.removeAll();
  },

  hasLayer: function(layer) {
    return this.store.getById(layer) != undefined;
  },
	
	toggleLayerVisibility: function(layer) {
			// toggle icon
			if (this.hasLayer(layer)) {
				var layerId = this.escapeString(layer);
				var buttonEl = Ext.select('img.layerOptions_' + layerId).first().next();
				buttonEl.toggleClass('action-visible');
				buttonEl.toggleClass('action-invisible');
			}
	},
	
	//return if a layer is visible (true) or not (false)
	//TODO:
	//maybe there is a more elegant solution to check the visibility of a layer in the layer order panel?
	layerVisible: function(layer) {
			var returnVal = undefined;
			if (this.hasLayer(layer)) {
				var layerId = this.escapeString(layer);
				var buttonEl = Ext.select('img.layerOptions_' + layerId).first().next();
				returnVal = true;
				if (buttonEl.dom.className.match(/action-invisible/)) {
					returnVal = false;
				}
			}
			return returnVal;
	},

  orderedLayers: function() {
    var layers = [];
    this.store.each(function(rec) {
      layers.push(rec.get('layer'));
    });

    return layers.reverse();
  },

  addOpacitySlider: function(layer) {
    // insert slider in second <tr>
    var layerId = this.escapeString(layer);
    var sliderId = 'opacitySlider_' + layerId;
    var sliderEl = Ext.DomHelper.insertAfter(Ext.select("tr:has(#layerOrder_" + layerId + ")").first(),
      {
        tag: 'tr',
        cls: 'opacity-slider',
        children: [
          {
            tag: 'td',
            colspan: 2,
            id: sliderId
          }
        ]
      },
      true
    );

    var transparencySlider = new Ext.slider.SingleSlider({
      renderTo: sliderId,
      id: 'opacitySliderCmp_' + layerId,
      minValue: 0,
      maxValue: 255,
      value: wmsLoader.layerProperties[layer].opacity,
      plugins: new Ext.slider.Tip({
        getText: function(thumb) {
          return String.format(layerOrderPanelTransparencyTooltipString[lang], Math.round((255 - thumb.value) / 255 * 100));
        }
      })
    });

    transparencySlider.on('changecomplete', function(slider, newValue, thumb) {
      this.fireEvent('opacitychange', layer, newValue);
    }, this);

    sliderEl.setVisibilityMode(Ext.Element.DISPLAY);
    sliderEl.hide();
  },

  resizeOpacitySlider: function(layerId, gridWidth) {
    var slider = Ext.ComponentMgr.get('opacitySliderCmp_' + layerId);
    if (slider.getEl().parent('tr').isVisible()) {
      slider.setWidth(gridWidth - 19); // NOTE: use hardcoded borders width
    }
  },

  escapeString: function(string) {
    return string.replace(/[^\w]/g, "_");
  }
});

/** api: xtype = qgis_layerorderpanel */
Ext.reg('qgis_layerorderpanel', QGIS.LayerOrderPanel);


/* ***************************************************************************** */
// fix for Ext.Slider in IE9
Ext.override(Ext.dd.DragTracker, {
  onMouseMove: function(e, target){
    // HACK: IE hack to see if button was released outside of window. Resolved in IE9.
    var ieCheck = Ext.isIE6 || Ext.isIE7 || Ext.isIE8;
    if(this.active && ieCheck && !e.browserEvent.button){
      e.preventDefault();
      this.onMouseUp(e);
      return;
    }

    e.preventDefault();
    var xy = e.getXY(), s = this.startXY;
    this.lastXY = xy;
    if(!this.active){
      if(Math.abs(s[0]-xy[0]) > this.tolerance || Math.abs(s[1]-xy[1]) > this.tolerance){
        this.triggerStart(e);
      }
      else{
        return;
      }
    }
    this.fireEvent('mousemove', this, e);
    this.onDrag(e);
    this.fireEvent('drag', this, e);
  }
});
