/*
 *
 * LegendAndMetadataDisplay.js -- part of Quantum GIS Web Client
 *
 * Copyright (2010-2013), The QGIS Project All rights reserved.
 * Quantum GIS Web Client is released under a BSD license. Please see
 * https://github.com/qgis/qgis-web-client/blob/master/README
 * for the full text of the license and the list of contributors.
 *
*/ 

//scripts to display legend graphic and per layer metadata in a separate Ext window
function showLegendAndMetadata(layername) {
	//initialize Ext Window if undefined
	if (legendMetadataWindow == undefined) {
		setupLegendAndMetadataWindow();
	}
	legendMetadataWindow.setTitle(legendMetadataWindowTitleString[lang] + " '"+layername+"'");
	if (legendMetadataWindow_active == false) {
		legendMetadataWindow.show();
	}
	//create legend URI
	var legendUrl = wmsURI + Ext.urlEncode({
		SERVICE: "WMS",
		VERSION: "1.3.0",
		REQUEST: "GetLegendGraphics",
		FORMAT: "image/png",
		EXCEPTIONS: "application/vnd.ogc.se_inimage",
		BOXSPACE: 1,
		LAYERSPACE: 2,
		SYMBOLSPACE: 1,
		SYMBOLHEIGHT: 2,
		LAYERFONTSIZE: 8,
		ITEMFONTSIZE: 8,
		LAYERS: wmsLoader.layerTitleNameMapping[layername],
		DPI: screenDpi
	});
	legendMetaTabPanel = Ext.getCmp('legendMetaTabPanel');
	
	//create metadata text
	legendMetaTabPanel.activate(metadataTab);
	var metadataText = '<div style="margin:1em;"><h1 style="margin-bottom:10px;">Metadata of Layer "'+layername+'"</h1>';
	if (wmsLoader.layerProperties[wmsLoader.layerTitleNameMapping[layername]].abstract) {
		metadataText += '<p><b>Abstract:</b><p><p>'+wmsLoader.layerProperties[wmsLoader.layerTitleNameMapping[layername]].abstract+'</p>';
	}
	metadataText += '<p style="margin-top:1em;">'+layerQueryable[lang];
	if (wmsLoader.layerProperties[wmsLoader.layerTitleNameMapping[layername]].queryable) {
		metadataText += yesString[lang];
	}
	else {
		metadataText += noString[lang];
	}
	metadataText += '</p>';
	metadataText += '<p style="margin-top:1em;">'+displayFieldString[lang]+": "+wmsLoader.layerProperties[wmsLoader.layerTitleNameMapping[layername]].displayField + '</p>';
	metadataText += '<p style="margin-top:1em"><b>'+attributesString [lang]+'</b></p><table style="margin-top:0.5em;border:1px solid gray;padding:2px;"><tr><th>Name</th><th>Type</th><th>Comment</th><th>Length</th><th>Precision</th></tr>';
	for (var i=0;i<wmsLoader.layerProperties[wmsLoader.layerTitleNameMapping[layername]].attributes.length;i++) {
		attribute = wmsLoader.layerProperties[wmsLoader.layerTitleNameMapping[layername]].attributes[i];
		metadataText += '<tr><td>'+attribute.name+'</td><td>'+attribute.type+'</td><td>'+attribute.comment+'</td><td>'+attribute.length+'</td><td>'+attribute.precision+'</td></tr>';
	}
	metadataText += '</table>'
	metadataText += '</div>'
	metadataTab.update(metadataText);
	
	//create legend image
	legendMetaTabPanel.activate(legendTab);
	var legendImage = '<img src="'+legendUrl+'" />';
	legendTab.update(legendImage);
}

function setupLegendAndMetadataWindow() {
	legendMetadataWindow = new Ext.Window({
		title: legendMetadataWindowTitleString[lang],
		width: geoExtMap.getWidth() * 0.5,
		height: geoExtMap.getHeight() * 0.5,
		autoScroll: true,
		maximizable: true,
		items: [{
			xtype: 'tabpanel',
			activeTab: 0,
			id: 'legendMetaTabPanel',
			items: [{
				title: legendTabTitleString[lang],
				id: 'legendTab'
			},{
				title: metadataTabTitleString[lang],
				id: 'metadataTab'
    }]
		}],
		listeners: {
			show:function() {
				legendMetadataWindow_active = true;
			},
			hide:function() {
				legendMetadataWindow_active = false;
			}
		}
	});
	legendMetaTabPanel = Ext.getCmp('legendMetaTabPanel');
	legendTab = Ext.getCmp('legendTab');
	metadataTab = Ext.getCmp('metadataTab');
}