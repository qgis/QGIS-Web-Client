/*

  GUI.js -- part of Quantum GIS Web Client

  Copyright 2012 Quantum GIS Web Client Contributors, released under a FreeBSD
  license. Please see https://github.com/qgis/qgis-web-client/blob/master/README
  for the full text of the license.

*/

//this file contains the main gui definition (viewport) as edited through extjs designer
//source file for ext designer
//ext data store for combobox for selection of object identification modes (only active layer, all layers, top most hit)
objectIdentificationModes = Ext.extend(Ext.data.JsonStore, {
	constructor: function (cfg) {
		cfg = cfg || {};
		objectIdentificationModes.superclass.constructor.call(this, Ext.apply({
			storeId: 'objIdentificationModes',
			autoLoad: true,
			data: {
				"modes": [{
					"name": objectIdentificationModeString["topMostHit"][lang],
					"value": "topMostHit"
				}, {
					"name": objectIdentificationModeString["allLayers"][lang],
					"value": "allLayers"
				}, {
					"name": objectIdentificationModeString["activeLayers"][lang],
					"value": "activeLayers"
				}]
			},
			root: 'modes',
			fields: [{
				name: 'name',
				type: 'string',
				allowBlank: false
			}, {
				name: 'value',
				type: 'string',
				allowBlank: false
			}]
		}, cfg));
	}
});
new objectIdentificationModes();

//definition of main GUI
MyViewportUi = Ext.extend(Ext.Viewport, {
	layout: 'fit',
	initComponent: function () {
		this.items = [{
			xtype: 'panel',
			title: 'GIS-Browser',
			layout: 'border',
			id: 'GisBrowserPanel',
			items: [{
				xtype: 'panel',
				title: leftPanelTitleString[lang],
				height: 333,
				width: 225,
				collapsible: true,
				boxMinWidth: 200,
				boxMaxWidth: 400,
				layout: 'vbox',
				region: 'west',
				floatable: false,
				minWidth: 200,
				split: true,
				collapseMode: 'standard',
				id: 'LeftPanel',
				items: [{
					xtype: 'button',
					height: '1.5em',
					width: '100%',
					text: mapThemeButtonTitleString[lang],
					id: 'mapThemeButton',
					tooltip: mapThemeButtonTooltipString[lang],
					enableToggle: false,
					allowDepress: false,
					flex: 0.1
				}, {
					xtype: 'panel',
					layout: 'accordion',
					border: false,
					flex: 0.9,
					width: '100%',
					layoutConfig: {
						titleCollapse: true,
						animate: true,
						activeOnTop: false
					},
					activeItem: 1,
					items: [{
						xtype: 'panel',
						title: searchPanelTitleString[lang],
						id: 'SearchPanel',
						items: [{
							xtype: 'tabpanel',
							enableTabScroll: true,
							activeTab: 0,
							id: 'SearchTabPanel',
							items: []
						}]
					}, {
						xtype: 'panel',
						title: mapPanelTitleString[lang],
						layout: 'border',
						items: [{
							xtype: 'treepanel',
							title: layerTreeTitleString[lang],
							height: 159,
							split: true,
							region: 'center',
							collapsible: true,
							rootVisible: false,
							autoScroll: true,
							containerScroll: true,
							cls: 'x-tree-noicon',
							id: 'LayerTree',
							root: {
								text: 'Root',
								expanded: true,
								singleClickExpand: true
							},
							loader: {}
						}, {
							xtype: 'panel',
							region: 'south',
							collapsible: true,
							boxMinHeight: 275,
							split: true,
							headerAsText: false,
							id: 'ToolsPanel',
							items: [{
								xtype: 'tabpanel',
								activeTab: 0,
								id: 'ToolTabPanel',
								items: [{
									xtype: 'panel',
									title: legendTabTitleString[lang],
									autoScroll: true,
									id: 'LegendTab'
								}, {
									xtype: 'panel',
									title: metadataTabTitleString[lang],
									layout: 'fit',
									id: 'SearchTab'
								}]
							}]
						}] // map items
					}] // accordion items
				}] // left panel items
			}, {
				xtype: 'panel',
				flex: 1,
				region: 'center',
				width: 100,
				layout: 'border',
				id: 'CenterPanel',
				items: [{
					xtype: 'panel',
					region: 'center',
					tpl: '',
					layout: 'fit',
					id: 'MapPanel',
					tbar: {
						xtype: 'toolbar',
						autoHeight: true,
						id: 'myTopToolbar',
						items: [{
							xtype: 'tbseparator'
						}, {
							xtype: 'button',
							tooltip: objIdentificationTooltipString[lang],
							toggleGroup: 'mapTools',
							enableToggle: true,
							icon: 'gis_icons/mActionIdentify.png',
							allowDepress: true,
							tooltipType: 'qtip',
							iconCls: '',
							scale: 'medium',
							id: 'IdentifyTool'
						}, {
							xtype: 'tbtext',
							text: objectIdentificationTextLabel[lang]
						}, {
							xtype: 'combo',
							width: 120,
							store: 'objIdentificationModes',
							valueField: 'value',
							mode: 'local',
							displayField: 'name',
							triggerAction: 'all',
							id: 'ObjectIdentificationModeCombo'
						}, {
							xtype: 'tbseparator'
						}, {
							xtype: 'button',
							enableToggle: true,
							allowDepress: true,
							toggleGroup: 'mapTools',
							icon: 'gis_icons/mActionMeasure.png',
							tooltip: measureDistanceTooltipString[lang],
							tooltipType: 'qtip',
							scale: 'medium',
							id: 'measureDistance'
						}, {
							xtype: 'button',
							enableToggle: true,
							allowDepress: true,
							toggleGroup: 'mapTools',
							scale: 'medium',
							icon: 'gis_icons/mActionMeasureArea.png',
							tooltipType: 'qtip',
							tooltip: measureAreaTooltipString[lang],
							id: 'measureArea'
						}, {
							xtype: 'tbseparator'
						}, {
							xtype: 'button',
							enableToggle: true,
							allowDepress: true,
							toggleGroup: 'mapTools',
							scale: 'medium',
							icon: 'gis_icons/mActionFilePrint.png',
							tooltipType: 'qtip',
							tooltip: printMapTooltipString[lang],
							id: 'PrintMap'
                        }, {
                            xtype: 'tbseparator'
                        }, {
                            xtype: 'button',
                            enableToggle: false,
                            allowDepress: false,
                            scale: 'medium',
                            icon: 'gis_icons/mActionHelp.png',
                            tooltipType: 'qtip',
                            tooltip: showHelpTooltipString[lang],
                            id: 'ShowHelp'
                        }]
					},
					bbar: {
						xtype: 'toolbar',
						id: 'myBottomToolbar',
						items: [{
							xtype: 'tbtext',
							text: mapAppLoadingString[lang],
							id: 'mainStatusText'
						}, {
							xtype: 'tbfill'
						}, {
							xtype: 'tbtext',
							text: '',
							id: 'rightStatusText'
						}, {
							xtype: 'tbtext',
							text: coordinateTextLabel[lang]
						}, {
							xtype: 'tbspacer'
						}, {
							xtype: 'textfield',
							width: 130,
							regex: /^\d{6}\.?\d{0,2},\d{6}\.?\d{0,2}$/,
							enableKeyEvents: true,
							id: 'CoordinateTextField'
						}, {
							xtype: 'tbtext',
							text: '1:'
						}, {
							xtype: 'numberfield',
							minValue: 1,
							allowNegative: false,
							allowDecimals: false,
							width: 45,
							enableKeyEvents: true,
							id: 'ScaleNumberField'
						}]
					}
				}, {
					xtype: 'treepanel',
					title: attributeDataTreeTitleString[lang],
					rootVisible: false,
					region: 'east',
					collapsed: true,
					boxMinWidth: 300,
					boxMaxWidth: 600,
					collapsible: true,
					autoScroll: true,
					split: true,
					width: 300,
					id: 'AttributeDataTree',
					root: {
						text: 'Tree Node',
						expanded: true,
						editable: false
					},
					loader: {

					}
				}]
			}]
		}];
		MyViewportUi.superclass.initComponent.call(this);
	}
});

//initialize main gui
MyViewport = Ext.extend(MyViewportUi, {
	initComponent: function () {
		MyViewport.superclass.initComponent.call(this);
	}
});

//initialize tooltips and render main gui
Ext.onReady(function () {
	Ext.QuickTips.init();
	var cmp1 = new MyViewport({
		renderTo: Ext.getBody()
	});
	cmp1.show();
});
