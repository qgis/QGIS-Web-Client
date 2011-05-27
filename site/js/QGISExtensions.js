/* Three QGIS extensions:
 * QGIS.WMSCapabilitiesLoader 
 * QGIS.PrintProvider
 * QGIS.SearchComboBox
*/

/* ************************** QGIS.WMSCapabilitiesLoader ************************** */
// extends GeoExt.tree.WMSCapabilitiesLoader in order to expose the WMSCapabilities Tree to later read out settings from the tree
QGIS.WMSCapabilitiesLoader = function(config) {
    Ext.apply(this, config);
    QGIS.WMSCapabilitiesLoader.superclass.constructor.call(this,config);
};

Ext.extend(QGIS.WMSCapabilitiesLoader, GeoExt.tree.WMSCapabilitiesLoader, {
  WMSCapabilities: null,
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
        if (typeof callback == "function") {
            callback.apply(scope || node, [node]);
        }
  }}
);


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
					html: '<object data="'+url+'" type="application/pdf" width="100%" height="100%"><p style="margin:5px;">'+printingObjectDataAlternativeString1 + url + printingObjectDataAlternativeString2
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