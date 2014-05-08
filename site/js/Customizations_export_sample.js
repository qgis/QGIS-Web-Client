// customInit() is called before any map initialization
function customInit() {

//     // I create a new control click event class
//     OpenLayers.Control.Click = OpenLayers.Class(OpenLayers.Control, {
//         defaultHandlerOptions: {
//                 'single': true,
//                 'double': false,
//                 'pixelTolerance': 0,
//                 'stopSingle': false,
//                 'stopDouble': false
//         },
//         initialize: function(options) {
//                 this.handlerOptions = OpenLayers.Util.extend(
//                         {}, this.defaultHandlerOptions
//                 );
//                 OpenLayers.Control.prototype.initialize.apply(
//                         this, arguments
//                 );
//                 this.handler = new OpenLayers.Handler.Click(
//                         this, {
//                                 'click': this.trigger
//                         }, this.handlerOptions
//                 );
//         }
//     });
/* ************************** derived from QGIS.PrintProvider - QGISExtensions.js************************** */
						// extends GeoExt.data.PrintProvider
						QGIS.ExportProvider = function(config) {
						  Ext.apply(this, config);
						  QGIS.ExportProvider.superclass.constructor.call(this,config);
						};

						Ext.extend(QGIS.ExportProvider, GeoExt.data.PrintProvider, {
						  print: function(map, pages, options) {
							if (map instanceof GeoExt.MapPanel) {
								map = map.map;
							}
							pages = pages instanceof Array ? pages : [pages];
							options = options || {};
							if(this.fireEvent("beforeprint", this, map, pages, options) === false) {
								return;
							}

							
							var printUrl = this.url+ '&SRS='+authid+'&map0:extent='+printExtent.page.getPrintExtent(map).toBBOX(1,false)+'&LAYERS='+encodeURIComponent(thematicLayer.params.LAYERS);

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
							  var ExportLoginWindow = new Ext.Window(
								{
								  title: 'Export',
								  width: Ext.getBody().getWidth() /4,
								  height: Ext.getBody().getHeight() /4,
								  resizable: true,
								  closable: true,
								  constrain: true,
								  constrainHeader: true,
								  x:50,
								  y:50,
								  html: '<object data="'+url+'" type="application/zip" width="100%" height="100%"><p style="margin:5px;"><a href="' + url + '">Download file</a>.</p></object>'
								}
							  );
							  ExportLoginWindow.show();
							  Ext.getBody().unmask();
							}
							this.fireEvent("print", this, url);
						  }
						}
						);
						
}

// called before map initialization
function customBeforeMapInit() {
}

// called after map initialization
function customAfterMapInit() {

//     // Create a new map control based on Control Click Event
//     openlayersClickEvent = new OpenLayers.Control.Click( {
//         trigger: function(e) {
//             var xy = geoExtMap.map.getLonLatFromViewPortPx(e.xy);
//             var x = xy.lon;
//             var y = xy.lat;
//             
//             alert ( "You clicked on " + x + ", " + y );
//         }
//     });
// 
//     geoExtMap.map.addControl(openlayersClickEvent);
				ExportProvider = new QGIS.ExportProvider({
						method: "POST", // "POST" recommended for production use
						capabilities: printCapabilities, // from the info.json script in the html
						url: '../php/export.php?'
				});

				
				var exportLayoutsDefined =true;
				
				var OriginalPrintProviderUrl = printProvider.url;

						
							if (exportLayoutsDefined == true) {
								//create new window to hold exporting toolbar
								exportWindow = new Ext.Window({
									title: 'Export',
									//printSettingsToolbarTitleString[lang],
									height: 67,
									width: 200,
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
											id: 'myExportToolbar',
											
											items: [{
												xtype: 'button',
												tooltip: 'Export',
												text: 'Export',
												tooltipType: 'qtip',
												iconCls: '',
												scale: 'medium',
												id: 'StartExporting',
												listeners: {
													'click': function () {
														Ext.getCmp('ExportMap').toggle(false);
														ExportProvider.print(geoExtMap, [printExtent.page]);

													}
												}
											}, {
												xtype: 'button',
												tooltip: printCancelButtonTooltipString[lang],
												text: printCancelButtonTextString[lang],
												tooltipType: 'qtip',
												iconCls: '',
												scale: 'medium',
												id: 'CancelExporting',
												listeners: {
													'click': function () {
														Ext.getCmp('ExportMap').toggle(false);
													}
												}
											}]
										}
									}]
								});
							}
}

// called when DOM is ready (Ext.onReady in WebgisInit.js)
function customPostLoading() {
//    Ext.get("panel_header").addClass('sogis-header').insertHtml('beforeEnd', '<div style="float: right; width: 250px;">hello world</div>');
}

// called when starting print
function customBeforePrint() {
    // do something. e.g. rearrange your layers
}

// new buttons for the toolbar
var customButtons = [ 
   
//    // Add a separator and a button
//    {
//      xtype: 'tbseparator'
//    }, {
//      xtype: 'button',
//      enableToggle: true,
//      allowDepress: true,
//      toggleGroup: 'mapTools',
//      scale: 'medium',
//      icon: 'gis_icons/test.gif',
//      tooltipType: 'qtip',
//      tooltip: "Test button - click on the map",
//      id: 'TESTBUTTON'
//    }
					//ExportMap
					{
							xtype: 'tbseparator',
                            id: 'separator99'
						}, {
							xtype: 'button',
							enableToggle: true,
							allowDepress: true,
							toggleGroup: 'mapTools',
							scale: 'medium',
							icon: 'gis_icons/mActionExport.png',
							tooltipType: 'qtip',
							tooltip: 'Export',
							id: 'ExportMap'
						}
];

// code to add buttons in the toolbar
function customToolbarLoad() {
//     // Handle the button click
//     Ext.getCmp('TESTBUTTON').toggleHandler = mapToolbarHandler;
	//Export
	Ext.getCmp('ExportMap').toggleHandler = mapToolbarHandler;
}

// called when an event on toolbar is invoked
function customMapToolbarHandler(btn, evt) {
//     // Check if the button is pressed or unpressed
//     if (btn.id == "TESTBUTTON") {
//         if (btn.pressed) {
//              alert ( "You clicked on Test Button!" );
//              openlayersClickEvent.activate();
//         }
//         else
//         {
//              alert ( "TEST button is toggled up!" );
//              openlayersClickEvent.deactivate();
//         }
//     }
		//Export
		if (btn.id == "ExportMap") {
		if (btn.pressed) {
			exportWindow.show();
			if (printExtent.initialized == false) {
				printExtent.addPage();
				printExtent.page.lastScale = Math.round(printExtent.page.scale.data.value);
				printExtent.page.on('change', function (page, modifications) {
					if (page.scale.data.value != printExtent.page.lastScale) {
						//Ext.getCmp('ExportScaleCombobox').setValue(page.scale.data.value);
						printExtent.page.lastScale = page.scale.data.value;
					}
				});
				printExtent.initialized = true;
			}

			printExtent.page.fit(geoExtMap, {
				'mode': 'screen'
			});
			printExtent.show();
			mainStatusText.setText('Export');
		} else {
			exportWindow.hide();
			printExtent.hide();
			mainStatusText.setText(modeNavigationString[lang]);
		}
	}
	//end Export
}
