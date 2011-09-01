/* Five QGIS extensions:
 * QGIS.WMSCapabilitiesLoader 
 * QGIS.PrintProvider
 * QGIS.SearchComboBox
 * QGIS.SearchPanel
 * QGIS.FeatureInfoParser
*/

/* ************************** QGIS.WMSCapabilitiesLoader ************************** */
// extends GeoExt.tree.WMSCapabilitiesLoader in order to expose the WMSCapabilities Tree to later read out settings from the tree
QGIS.WMSCapabilitiesLoader = function(config) {
    Ext.apply(this, config);
    QGIS.WMSCapabilitiesLoader.superclass.constructor.call(this,config);
};

Ext.extend(QGIS.WMSCapabilitiesLoader, GeoExt.tree.WMSCapabilitiesLoader, {
  WMSCapabilities: null,
  //this list holds layer properties, indexed by layername
  layerProperties: new Array(),
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
        var capabilities = new OpenLayers.Format.WMSCapabilities().read(this.WMSCapabilities);
        this.processLayer(capabilities.capability,capabilities.capability.request.getmap.href, node);
        //fill the list of layer properties
        var xpathExpr = '//opengis:Layer';
        //case standard compliant browsers
        if (typeof(this.WMSCapabilities.evaluate) == "function") {
          xpathResult = this.WMSCapabilities.evaluate(xpathExpr,this.WMSCapabilities.firstChild,this.nsResolver,XPathResult.ANY_TYPE,null);
          //type 4 = UNORDERED_NODE_ITERATOR_TYPE 
          if (xpathResult.resultType == 4) {
            layerNode = xpathResult.iterateNext();
            while(layerNode) {
              this.storeLayerProperties(layerNode);
              layerNode = xpathResult.iterateNext();
            }
          }
        }
        else {
          //case older IEs
          this.WMSCapabilities.setProperty("SelectionLanguage", "XPath");
          this.WMSCapabilities.setProperty("SelectionNamespaces","xmlns:opengis='http://www.opengis.net/wms'");
          var layerNodes = this.WMSCapabilities.selectNodes(xpathExpr);
          for (var i=0;i<layerNodes.length;i++) {
            this.storeLayerProperties(layerNodes[i]);
          }
        }
        //deal with callback function
        if (typeof callback == "function") {
            callback.apply(scope || node, [node]);
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
  storeLayerProperties: function(node) {
    var layerName = node.getElementsByTagName("Name")[0].firstChild.nodeValue;
    var layerTitle = node.getElementsByTagName("Title")[0].firstChild.nodeValue;
    var layerQueryable = parseInt(node.getAttribute("queryable"));
    //see if it is a leaf layer or not
    var nrChildLayers = node.getElementsByTagName("Layer").length;
    this.layerProperties[layerName] = {name:layerName, title:layerTitle, queryable:layerQueryable, nrChildLayers:nrChildLayers};
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
		else if (mapScale > 25000) {
			grid_interval = 2000;
		}
		
		var printUrl = this.url+'&SRS=EPSG:'+epsgcode+'&DPI='+this.dpi.get("value")+'&TEMPLATE='+this.layout.get("name")+'&map0:extent='+printExtent.page.getPrintExtent(map).toBBOX(1,false)+'&map0:rotation='+(printExtent.page.rotation * -1)+'&map0:scale='+mapScale+'&map0:grid_interval_x='+grid_interval+'&map0:grid_interval_y='+grid_interval+'&LAYERS='+encodeURIComponent(thematicLayer.params.LAYERS);
		if (thematicLayer.params.SELECTION) {
			printUrl += '&SELECTION='+encodeURIComponent(thematicLayer.params.SELECTION);
		}
 		this.download(printUrl);
	},
    download: function(url) {
        if (this.fireEvent("beforedownload", this, url) !== false) {
 			//because of an IE bug one has to do it in two steps
			var parentPanel = Ext.getCmp('geoExtMapPanel');
			var pdfWindow = new Ext.Window(
				{
					title: printWindowTitleString[lang],
					width: parentPanel.getInnerWidth() - 70,
					height: parentPanel.getInnerHeight() - 20,
					renderTo: "geoExtMapPanel",
					resizable: true,
					closable: true,
					x:50,
					y:10,
					html: '<object data="'+url+'" type="application/pdf" width="100%" height="100%"><p style="margin:5px;">'+printingObjectDataAlternativeString1[lang] + url + printingObjectDataAlternativeString2[lang]
				}
			);
			pdfWindow.show();
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

    /** config
     */
    url: searchBoxQueryURL,
    geomUrl: searchBoxGetGeomURL,

    // default Ext.form.ComboBox config
    hideTrigger: true,
    minChars: 2,
    queryDelay: 50,
    displayField: 'label',
    forceSelection: true,
    searchtables: null,

    initComponent: function() {
        // i18n
        this.emptyText = OpenLayers.i18n(searchFieldDefaultTextString[lang]);

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
    onSelect: function(record, index){
        if(this.fireEvent('beforeselect', this, record, index) !== false){
            if (record.get('searchtable') != null) {
	      this.setValue(record.get('displaytext'));
	      this.collapse();
	      this.fireEvent('select', this, record, index);
	    }
	    else {
	      this.collapse();
	    }
        }
    },

    recordSelected: function(combo, record, index) {
		var extent = OpenLayers.Bounds.fromArray(record.get('bbox'));
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
        config.selectionZoom = config.selectionZoom || 4;

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
                    text: "Suchen", // TODO: i18n
                    scope: this,
                    handler: this.onSubmit
                },
                {
                    text: "Zurücksetzen", // TODO: i18n
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
        this.el.mask("Bitte warten", 'x-mask-loading'); // TODO: i18n
        if (this.useWmsRequest) {
            this.submitGetFeatureInfo();
        }
        else {
            this.submitForm();
        }
    },

    submitGetFeatureInfo: function() {
        var filter = this.queryLayer + ":";
        var fieldValues = this.form.getForm().getFieldValues();
        var addAnd = false;
        for (var key in fieldValues) {
            if (addAnd) {
                filter += " AND ";
            }
            var field = this.form.getForm().findField(key);
            if (field.isXType('numberfield') || field.isXType('combo')) {
                valueQuotes = "";
            }
            else {
                valueQuotes = "'"
            }
            filter += "\"" + key + "\" = " + valueQuotes + fieldValues[key] + valueQuotes;
            addAnd = true;
        }

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
                'SRS': 'EPSG:' + epsgcode,
                'FILTER': filter
            },
            method: 'GET',
            scope: this,
            success: this.onSuccess
        });
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

                // create and add results grid
                this.resultsGrid = new Ext.grid.GridPanel({
                    title: "Suchresultat", // TODO: i18n
                    collapsible: true,
                    collapsed: true,
                    store: this.store,
                    columns: this.gridColumns,
                    viewConfig: {
                        forceFit: true
                    }
                });
                this.resultsGrid.on('rowclick', this.onRowClick, this);
                this.add(this.resultsGrid);
                this.doLayout();
            }

            // show results
            this.store.loadData(this.featureInfoParser.featuresArray(), true);
            this.resultsGrid.show();
            this.resultsGrid.expand(true);
            this.el.unmask();
        }
        else {
            // ServiceException
            this.showFailure(this.featureInfoParser.serviceException());
        }
    },

    onAjaxRequestException: function() {
        this.showFailure("Netzwerkfehler"); // TODO: i18n
    },

    onFormFailure: function(form, action) {
        this.showFailure(action.failureType);
    },

    showFailure: function(msg) {
        this.el.unmask();
        Ext.MessageBox.alert("Fehler bei Suche", msg); // TODO: i18n
    },

    onRowClick: function(grid, rowIndex, e) {
        var record = grid.store.getAt(rowIndex);
        var geom = record.data.geometry;
        if (geom != null) {
            var id = record.id;
            var wktFormat = new OpenLayers.Format.WKT();
            var feature = wktFormat.read(geom);
            var centroid = feature.geometry.getCentroid();
            var x = centroid.x;
            var y = centroid.y;
            this.fireEvent("featureselected", this.selectionLayer, id, x, y, this.selectionZoom);
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

            // get layer features
            var layerNode = node.getElementsByTagName("Layer")[0];
            var featureNodes = layerNode.getElementsByTagName("Feature");
            for (var i=0; i<featureNodes.length; i++) {
                var feature = [];
                var featureNode = featureNodes[i];
                feature.push(featureNode.getAttribute("id"));
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
                updateFields = false;
                this.features.push(feature);
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
    }
});
