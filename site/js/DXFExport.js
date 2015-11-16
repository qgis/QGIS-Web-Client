/*
 *
 * DXFExport.js -- part of QGIS Web Client
 *
 * Copyright (2010-2015), The QGIS Project All rights reserved.
 * Quantum GIS Web Client is released under a BSD license. Please see
 * https://github.com/qgis/qgis-web-client/blob/master/README
 * for the full text of the license and the list of contributors.
 *
*/

//note that DXF Export depends on whether a layer is exposed as WFS. Layers that are not exposes as WFS are not exported as DXF
function DXFExporter(parentPanel) {
		// disclaimer window for dxf export
		this.parentPanel = parentPanel;
		myExp = this;
		this.DXFExportDisclaimerWindow = new Ext.Window({
			title: DXFExportDisclaimerWindowTitle[lang],
			height: 350,
			width: 500,
			layout: {
				type:'vbox',
				align: 'stretch'
			},
			padding: 5,
			buttonAlign: 'center',
			renderTo: this.parentPanel,
			resizable: true,
			closable: false,
			x: 50,
			y: 10,
			items: [{
				xtype: 'container',
				id: 'DXFExportDisclaimerHTMLContainer',
				flex: 0.8,
				html: ''
			},
			{
				xtype: 'container',
				id: 'DXFExportDisclaimerButtons',
				flex: 0.2,
				layout: {
					type:'hbox',
					align: 'stretch'
				},
				items: [
					{
						xtype: 'button',
						id: 'acceptDXFDisclaimer',
						text: acceptDXFDisclaimerButtonText[lang],
						listeners: {
							'click': function () {
								myExp.DXFExportDisclaimerWindow.hide();
								myExp.DXFExportWindow.show();
							}
						},
						flex: 0.5
					},
					{
						xtype: 'button',
						id: 'declineDXFDisclaimer',
						text: declineDXFDisclaimerButtonText[lang],
						listeners: {
							'click': function () {
								myExp.DXFExportDisclaimerWindow.hide();
								Ext.getCmp('ExportDXF').toggle(false,false);
							}
					},
					flex: 0.5
				}]
			}]
		});
		this.DXFExportWindow = new Ext.Window({
			title: DXFExportWindowTitleString[lang],
			height: 67,
			width: 800,
			layout: "fit",
			renderTo: this.parentPanel,
			resizable: false,
			closable: false,
			x: 50,
			y: 10,
			items: [{
				tbar: {
					xtype: 'toolbar',
					autoHeight: true,
					id: 'myDXFExportToolbar',
					items: [
					{
						xtype: 'label',
						text: DXFExportSymbologyScaleLabel[lang]
					}, {
						xtype: 'tbspacer'
					},
					{
						xtype: 'combo',
						id: 'DXFExportScaleCombobox',
						width: 95,
						mode: 'local',
						forceSelection: true,
						triggerAction: 'all',
						lastQuery: '',
						store: new Ext.data.JsonStore({
							// store configs
							data: exportCapabilities,
							storeId: 'DXFExportScalesStore',
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
						listeners: {
							change: function(combo, record, index) {
								//combo.lastQuery = '';
							}
						},
						valueField: 'value',
						displayField: 'name'
					},
					{
						xtype: 'tbspacer'
					}, {
						xtype: 'tbseparator',
					}, {
						xtype: 'tbspacer'
					}, {
						xtype: 'label',
						id: 'DXFExportAreaLimitLabel',
						text: DXFExportAreaLimitLabel[lang]
					}, {
						xtype: 'label',
						id: 'DXFExportCurrentAreaLabel',
						text: ", "+DXFExportCurrentAreaLabel[lang] + "xxx m2"
					}, {
						xtype: 'tbseparator',
					}, {
						xtype: 'tbspacer'
					}, {
						xtype: 'button',
						tooltip: exportButtonTooltipString[lang],
						text: exportButtonTextString[lang],
						tooltipType: 'qtip',
						iconCls: '',
						scale: 'medium',
						id: 'DXFStartExporting',
						listeners: {
							'click': function () {
								Ext.getCmp('ExportDXF').toggle(false);
								//now need to build the correct URL
								var today = new Date().toJSON().split('T')[0];
								var getDXFURL = wmsURI + "SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMAP&FORMAT=application/dxf&FORMAT_OPTIONS=SCALE:"+Ext.getCmp('DXFExportScaleCombobox').getValue()+";MODE:SYMBOLLAYERSYMBOLOGY&FILE_NAME=";
								//add prefix to file_name
								if (gis_projects) {
									if (gis_projects.DXFExportPrefix) {
										getDXFURL += gis_projects.DXFExportPrefix;
									}
								}
								//add projectname to filename
								if (mapThemeSwitcher !== null && typeof(mapThemeSwitcher.activeProjectData) !== 'undefined') {
									getDXFURL += mapThemeSwitcher.activeProjectData.projectfile + "_";
								}
								//add date to filename
								getDXFURL += today+".dxf&CRS=EPSG:"+authid+"&BBOX="+geoExtMap.map.getExtent().toString()+"&WIDTH="+geoExtMap.map.getSize().w+"&HEIGHT="+geoExtMap.map.getSize().h+"&LAYERS=";
								//check if we need to enable additional layers
								var DXFExportLayers = thematicLayer.params.LAYERS;
								if (mapThemeSwitcher !== null && typeof(mapThemeSwitcher.activeProjectData) !== 'undefined') {
									if (mapThemeSwitcher.activeProjectData.DXFExportForcedLayers) {
										var DXFExportForcedLayers = mapThemeSwitcher.activeProjectData.DXFExportForcedLayers.split(",");
										for (var i=0; i < DXFExportForcedLayers.length; i++) {
											if (!DXFExportLayers.match(/DXFExportForcedLayers[i]/)) {
												//add layer before other layers
												DXFExportLayers = DXFExportForcedLayers[i]+","+DXFExportLayers;
											}
										}
									}
								}
								getDXFURL += encodeURIComponent(DXFExportLayers);
								//console.log(getDXFURL);
								window.location.href = getDXFURL;
							}
						}
					}, {
						xtype: 'button',
						tooltip: exportCancelButtonTooltipString[lang],
						text: printCancelButtonTextString[lang],
						tooltipType: 'qtip',
						iconCls: '',
						scale: 'medium',
						id: 'DXFCancelExporting',
						listeners: {
							'click': function () {
								Ext.getCmp('ExportDXF').toggle(false);
							}
						}
					}]
				}
			}]
		});
}

//test if DXF export should be enabled/disabled
DXFExporter.prototype.checkEnabled = function() {
	if (typeof(enableDXFExport) !== 'undefined') {
		if (mapThemeSwitcher !== null && typeof(mapThemeSwitcher) !== 'undefined') {
			if (mapThemeSwitcher.activeProjectData !== null && typeof(mapThemeSwitcher.activeProjectData) !== 'undefined') {
				if (mapThemeSwitcher.activeProjectData.enableDXFExport === undefined) {
					//if not defined on project level use the global option
					if (enableDXFExport == true) {
						Ext.getCmp('ExportDXF').show();
					}
					else {
						Ext.getCmp('ExportDXF').hide();
					}
				}
				else {
					if (mapThemeSwitcher.activeProjectData.enableDXFExport == true) {
						Ext.getCmp('ExportDXF').show();
					}
					if (mapThemeSwitcher.activeProjectData.enableDXFExport == false) {
						Ext.getCmp('ExportDXF').hide();
					}
				}
			}
			//global setting overrides everything if it is disabled, also project level can't override it
			if (enableDXFExport == false) {
				Ext.getCmp('ExportDXF').hide();
			}
		}
	}
	else {
		Ext.getCmp('ExportDXF').hide();
	}
}

//start the export process
DXFExporter.prototype.startDXFExport = function () {
	//test if we first need to start with a disclaimer
	var showDXFExportDisclaimer = false;
	if (gis_projects) {
		if (gis_projects.DXFExportDownloadDisclaimer) {
			Ext.getCmp('DXFExportDisclaimerHTMLContainer').update(gis_projects.DXFExportDownloadDisclaimer);
			showDXFExportDisclaimer = true;
		}
	}
	if (mapThemeSwitcher !== null && typeof(mapThemeSwitcher.activeProjectData) !== 'undefined') {
		if (mapThemeSwitcher.activeProjectData.DXFExportDownloadDisclaimer) {
			if (mapThemeSwitcher.activeProjectData.DXFExportDownloadDisclaimer.length > 1) {
				Ext.getCmp('DXFExportDisclaimerHTMLContainer').update(mapThemeSwitcher.activeProjectData.DXFExportDownloadDisclaimer);
				showDXFExportDisclaimer = true;
			}
		}
		if (mapThemeSwitcher.activeProjectData.DXFExportMaxArea) {
			Ext.getCmp('DXFExportAreaLimitLabel').update(DXFExportAreaLimitLabel[lang] + parseInt(mapThemeSwitcher.activeProjectData.DXFExportMaxArea).toLocaleString() + " m2");
		}
		else {
			Ext.getCmp('DXFExportAreaLimitLabel').update(DXFExportAreaLimitLabel[lang] + DXFExportNoAreaLimitLabel[lang]);
		}
		//need to register navigate events to keep current DXF export size up-to-date
		geoExtMap.map.events.register("moveend",geoExtMap.map,this.updateCurrentArea);
		this.updateCurrentArea();
	}
	//deal with dxf export scale limits
	var scaleCombobox = Ext.getCmp('DXFExportScaleCombobox');
	var scaleDataStore = scaleCombobox.getStore();
	if (mapThemeSwitcher !== null && typeof(mapThemeSwitcher.activeProjectData) !== 'undefined') {
		if (mapThemeSwitcher.activeProjectData.DXFExportDefaultScale) {
			scaleCombobox.setValue(mapThemeSwitcher.activeProjectData.DXFExportDefaultScale);
		}
		else {
			scaleCombobox.setValue(scaleDataStore.getAt(0).data.value);
		}
		if (mapThemeSwitcher.activeProjectData.DXFExportMaxScale) {
			scaleDataStore.clearFilter(false);
			scaleDataStore.filter([{
				fn: function(record) {
					if (record.get("value") <= mapThemeSwitcher.activeProjectData.DXFExportMaxScale)
						return true;
					else
						return false;
					}
			}]);
		}
		else {
			scaleDataStore.clearFilter(false);
		}
	}
	else {
		//scaleDataStore.clearFilter(false);
		scaleCombobox.setValue(scaleDataStore.getAt(0).data.value);
	}
	//deal with or without disclaimer
	if (showDXFExportDisclaimer === true) {
		this.DXFExportDisclaimerWindow.show();
	}
	else {
		//else we can display the dxf export settings without the disclaimer
		this.DXFExportWindow.show();
	}
}
//cancel the dxf export process
DXFExporter.prototype.cancelDXFExport = function () {
	//need to unregister navigate events that updates screen area
	geoExtMap.map.events.unregister("moveend",geoExtMap.map,this.updateCurrentArea);
	this.DXFExportDisclaimerWindow.hide();
	this.DXFExportWindow.hide();
}

//updates current map area if there is a size limit
DXFExporter.prototype.updateCurrentArea = function () {
	var myDXFExportCurrentAreaLabel = Ext.getCmp("DXFExportCurrentAreaLabel");
	var DXFStartExportingButton = Ext.getCmp("DXFStartExporting");
	myDXFExportCurrentAreaLabel.update(", "+DXFExportCurrentAreaLabel[lang] + Math.round(geoExtMap.map.getExtent().getWidth() * geoExtMap.map.getExtent().getHeight()).toLocaleString() + " m2");
	if ((geoExtMap.map.getExtent().getWidth() * geoExtMap.map.getExtent().getHeight()) > mapThemeSwitcher.activeProjectData.DXFExportMaxArea) {
		myDXFExportCurrentAreaLabel.addClass("DXFExportCurrentAreaLabel");
		DXFStartExportingButton.disable();
	}
	else {
		myDXFExportCurrentAreaLabel.removeClass("DXFExportCurrentAreaLabel");
		DXFStartExportingButton.enable("DXFStartExportingButton");
	}
}
