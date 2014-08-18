/*
 *
 * GUI.js -- part of QGIS Web Client
 *
 * Copyright (2010-2012), The QGIS Project All rights reserved.
 * QGIS Web Client is released under a BSD license. Please see
 * https://github.com/qgis/qgis-web-client/blob/master/README
 * for the full text of the license and the list of contributors.
 *
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
var layoutHeaderCfg = {
	tag: 'div',
	cls: 'x-panel-header',
	id: 'panel_header',
	children: [
		{
			tag: 'div',
			id: 'panel_header_link',
			html: '<a></a>'
		},
		{
			tag: 'div',
			id: 'panel_header_title',
			html: 'GIS-Browser'
		},
		{
			tag: 'div',
			id: 'panel_header_terms_of_use',
			html: '<a></a>'
		}
	]
};
if (headerLogoImg != null) {
	// NOTE: header height must be fixed on creation or layout will not match
	layoutHeaderCfg['style'] = 'height: ' + headerLogoHeight + 'px;';
}


/*
 * The main application viewport.
 *
 * It contains the following regions:
 *
 *  +++++++++++++++++++++++++++++++++++
 *  +           toolbar               +
 *  +++++++++++++++++++++++++++++++++++
 *  +       +                +        +
 *  + Left  + CenterPanel    + Right  +
 *  + Panel +                + Panel  +
 *  +       +                +        +
 *  +++++++++++++++++++++++++++++++++++
 *  +         BottomPanel             +
 *  +++++++++++++++++++++++++++++++++++
 *
 * Right and Bottom panel are hidden by default but can be enabled on
 * request, see an example in Customizations.js: function
 * customAfterMapInit()
 * 
 */ 
MyViewportUi = Ext.extend(Ext.Viewport, {
	layout: 'fit',
	initComponent: function () {
		this.items = [{
			xtype: 'panel',
			layout: 'border',
			id: 'GisBrowserPanel',
			headerCfg: layoutHeaderCfg,
			items: [{
				xtype: 'panel',
                margins: '3 0 3 3',
                cmargins: '3 3 3 3',
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
					frame: false,
					id: 'collapsiblePanels',
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
						id: 'leftPanelMap',
						border: false,
						frame: false,
						items: [{
							xtype: 'treepanel',
							border: false,
							frame: false,
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
						},
						{
							region: 'south',
							xtype: 'qgis_layerorderpanel',
							id: 'LayerOrderTab',
							split: true,
							collapsible: true,
							collapsed: true,
							titleCollapse: false,
							autoScroll: true,
							height: 200,
							border: false,
							frame: false
						}] // map items
					}] // accordion items
				}] // left panel items
			}, {
				xtype: 'panel',
                border: false,
                frame: false,
                margins: '3 3 3 0',
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
							xtype: 'tbseparator',
                            id: 'separator1'
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
							text: objectIdentificationTextLabel[lang],
                            id: 'ObjectIdentificationText'
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
							xtype: 'tbseparator',
                            id: 'separator2'
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
							xtype: 'tbseparator',
                            id: 'separator3'
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
							xtype: 'button',
							enableToggle: false,
							allowDepress: false,
							scale: 'medium',
							icon: 'gis_icons/mActionMailSend.png',
							tooltipType: 'qtip',
							tooltip: sendPermalinkTooltipString[lang],
							id: 'SendPermalink'
						}, {
							xtype: 'tbseparator',
                            id: 'separator4'
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
							width: 75,
							enableKeyEvents: true,
							id: 'ScaleNumberField'
						}]
					}
				}]
			},
            {
                xtype: 'panel',
                id: 'RightPanel',
                region: 'east',                
                split: true,
                collapsible: true,
                collapsed: true,    
                hidden: true,
                width: 200
            },
            {
                xtype: 'panel',
                id: 'BottomPanel',        
                region: 'south',
                split: true,
                collapsible: true,
                collapsed: true,    
                hidden: true,
                height: 100 
            }]
		}];

		// Appends custom buttons from customizations.js
		this.items[0].items[1].items[0].tbar.items = this.items[0].items[1].items[0].tbar.items.concat ( customButtons ) ;

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
