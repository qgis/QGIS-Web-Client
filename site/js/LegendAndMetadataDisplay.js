/*
 *
 * LegendAndMetadataDisplay.js -- part of QGIS Web Client
 *
 * Copyright (2010-2013), The QGIS Project All rights reserved.
 * QGIS Web Client is released under a BSD license. Please see
 * https://github.com/qgis/qgis-web-client/blob/master/README
 * for the full text of the license and the list of contributors.
 *
*/ 

//scripts to display legend graphic and per layer metadata in a separate Ext window
function showInteractiveLegendAndMetadata(layertitle) {
	var layername = wmsLoader.layerTitleNameMapping[layertitle];
	//initialize Ext Window if undefined
	if (legendMetadataWindow == undefined) {
		setupLegendAndMetadataWindow();
	}
	legendMetadataWindow.setTitle(legendMetadataWindowTitleString[lang] + " '"+layertitle+"'");
	if (legendMetadataWindow_active == false) {
		legendMetadataWindow.show();
	}
	//create legend URI from GlobalOptions.js interactiveLegendGetLegendURL
    if (typeof(interactiveLegendGetLegendURL) == 'undefined'){
        Ext.MessageBox.alert('Configuration error', 'interactiveLegendGetLegendURL is not defined. Set it in GlobalOptions.js');
        return;
    }
	var legendUrl =  interactiveLegendGetLegendURL + Ext.urlEncode({
		layer: layername
	});
	legendMetaTabPanel = Ext.getCmp('legendMetaTabPanel');
	
	//create metadata text
	legendMetaTabPanel.activate(metadataTab);
	var metadataText = '<style type="text/css">.even { background-color:rgb(240,240,240);border:none;} .mdCell {padding:0.3em;border:none;} .mdHeader {padding:0.3em;font-weight:bold;border:none;}</style>';
	metadataText += '<div style="margin:1em;"><h1 style="margin-bottom:0.8em;">'+metadataSectionTitleString[lang]+'"'+layertitle+'"</h1>';
	//abstract
	if (wmsLoader.layerProperties[layername].abstract) {
		metadataText += '<p><b>'+abstractString[lang]+'</b><p><p>'+wmsLoader.layerProperties[layername].abstract+'</p>';
	}
	//is layer queryable
	metadataText += '<p style="margin-top:1em;">'+layerQueryable[lang];
	if (wmsLoader.layerProperties[layername].queryable) {
		metadataText += yesString[lang];
	}
	else {
		metadataText += noString[lang];
	}
	metadataText += '</p>';
	//display field
	if (wmsLoader.layerProperties[layername].queryable) {
		// wmsLoader.layerProperties[layername].displayField is null if GetCapabilities is used
		if (wmsLoader.layerProperties[layername].displayField) {
			metadataText += '<p style="margin-top:1em;"><b>'+displayFieldString[lang]+":</b> "+wmsLoader.layerProperties[layername].displayField + '</p>';
		}
	}
	//coordinate systems
	metadataText += '<p style="margin-top:1em;margin-bottom:0.4em;font-weight:bold;">'+coordinateSystemsString[lang]+"</p><ul>";
	for (srs in wmsLoader.layerProperties[layername].srsList) {
		metadataText += '<li style="list-style-type:square;list-style-position:inside;">'+srs+'</li>';
	}
	metadataText += '</ul>';
	//geographic extent
	metadataText += '<p style="margin-top:1em;margin-bottom:0.4em;font-weight:bold;">'+geographicExtentString[lang]+"</p><ul>";
	metadataText += '<table style="margin-top:0.5em;border:none;border-collapse:collapse;"><tr class="even"><th class="mdHeader">'+westString[lang]+'</th><th class="mdHeader">'+southString[lang]+'</th><th class="mdHeader">'+eastString[lang]+'</th><th class="mdHeader">'+northString[lang]+'</th></tr>';
	metadataText += '<tr><td class="mdCell">'+wmsLoader.layerProperties[layername].bbox[0]+'</td><td class="mdCell">'+wmsLoader.layerProperties[layername].bbox[1]+'</td><td class="mdCell">'+wmsLoader.layerProperties[layername].bbox[2]+'</td><td class="mdCell">'+wmsLoader.layerProperties[layername].bbox[3]+'</td></tr>';
	metadataText += '</table>'
	
	//attributes/fields
	if (wmsLoader.layerProperties[layername].attributes) {
		metadataText += '<p style="margin-top:1em"><b>'+attributesString [lang]+'</b></p><table style="margin-top:0.5em;border:none;border-collapse:collapse;"><tr class="even"><th class="mdHeader">'+attributeNameString[lang]+'</th><th class="mdHeader">'+attributeTypeString[lang]+'</th><th class="mdHeader">'+attributeCommentString[lang]+'</th><th class="mdHeader">'+attributeLengthString[lang]+'</th><th class="mdHeader">'+attributePrecisionString[lang]+'</th></tr>';
		var rowCounter = 1;
		for (var i=0;i<wmsLoader.layerProperties[layername].attributes.length;i++) {
			attribute = wmsLoader.layerProperties[layername].attributes[i];
			if (rowCounter % 2 == 0) {
				metadataText += '<tr class="even">';
			}
			else {
				metadataText += '<tr>';
			}
			metadataText += '<td class="mdCell">'+attribute.name+'</td><td class="mdCell">'+attribute.type+'</td><td class="mdCell">'+attribute.comment+'</td><td class="mdCell">'+attribute.length+'</td><td class="mdCell">'+attribute.precision+'</td></tr>';
			rowCounter++;
		}
		metadataText += '</table>'
	}
	metadataText += '</div>'
	metadataTab.update(metadataText);

    // Set loading... text
    legendTab.update(legendTabLoadingString[lang]);
    
	//create legend image
	legendMetaTabPanel.activate(legendTab);
    // Build the legend with an Ajax call
    Ext.Ajax.request({
        url: legendUrl,
        params: '',
        method: 'GET',
        success: function (response) {
            var legendText = '';
            var t = new Ext.Template('<tr><td><img src="data:image/png;base64,{image}" /></td><td>{name}</td></tr>');
            Ext.each(Ext.decode(response.responseText), function(k){
                legendText += t.apply(k);
            });
            legendTab.update('<table>' + legendText + '</table>');
        }
    });
}


//scripts to display legend graphic and per layer metadata in a separate Ext window
function showLegendAndMetadata(layertitle) {
	var layername = wmsLoader.layerTitleNameMapping[layertitle];
	//initialize Ext Window if undefined
	if (legendMetadataWindow == undefined) {
		setupLegendAndMetadataWindow();
	}
	legendMetadataWindow.setTitle(legendMetadataWindowTitleString[lang] + ' "'+layertitle+'"');
	if (legendMetadataWindow_active == false) {
		legendMetadataWindow.show();
	}
	var layerProperties = wmsLoader.layerProperties[layername];

	// metadata
	if (showMetaDataInLegend && layerProperties.showMetadata) {
		// show and activate metadata tab
		legendMetaTabPanel.unhideTabStripItem(metadataTab);
		legendMetaTabPanel.activate(metadataTab);

		//create metadata text
		var metadataText = '<style type="text/css">.even { background-color:rgb(240,240,240);border:none;} .mdCell {padding:0.3em;border:none;} .mdHeader {padding:0.3em;font-weight:bold;border:none;}</style>';
		metadataText += '<div style="margin:1em;"><h1 style="margin-bottom:0.8em;">'+metadataSectionTitleString[lang]+' "'+layertitle+'"</h1>';
		//abstract
		if (layerProperties.abstract) {
			metadataText += '<p><b>'+abstractString[lang]+'</b><p><p>'+layerProperties.abstract+'</p>';
		}
		//is layer queryable
		metadataText += '<p style="margin-top:1em;">'+layerQueryable[lang];
		if (layerProperties.queryable) {
			metadataText += yesString[lang];
		}
		else {
			metadataText += noString[lang];
		}
		metadataText += '</p>';
		//display field
		if (layerProperties.queryable) {
			// layerProperties.displayField is null if GetCapabilities is used
			if (layerProperties.displayField) {
				metadataText += '<p style="margin-top:1em;"><b>'+displayFieldString[lang]+":</b> "+layerProperties.displayField + '</p>';
			}
		}
		//coordinate systems
		metadataText += '<p style="margin-top:1em;margin-bottom:0.4em;font-weight:bold;">'+coordinateSystemsString[lang]+"</p><ul>";
		for (var srs in layerProperties.srsList) {
			metadataText += '<li style="list-style-type:square;list-style-position:inside;">'+srs+'</li>';
		}
		metadataText += '</ul>';
		//geographic extent
		metadataText += '<p style="margin-top:1em;margin-bottom:0.4em;font-weight:bold;">'+geographicExtentString[lang]+"</p><ul>";
		metadataText += '<table style="margin-top:0.5em;border:none;border-collapse:collapse;"><tr class="even"><th class="mdHeader">'+westString[lang]+'</th><th class="mdHeader">'+southString[lang]+'</th><th class="mdHeader">'+eastString[lang]+'</th><th class="mdHeader">'+northString[lang]+'</th></tr>';
		metadataText += '<tr><td class="mdCell">'+layerProperties.bbox[0]+'</td><td class="mdCell">'+layerProperties.bbox[1]+'</td><td class="mdCell">'+layerProperties.bbox[2]+'</td><td class="mdCell">'+layerProperties.bbox[3]+'</td></tr>';
		metadataText += '</table>';

		//attributes/fields
		if (layerProperties.attributes) {
			metadataText += '<p style="margin-top:1em"><b>'+attributesString [lang]+'</b></p><table style="margin-top:0.5em;border:none;border-collapse:collapse;"><tr class="even"><th class="mdHeader">'+attributeNameString[lang]+'</th><th class="mdHeader">'+attributeTypeString[lang]+'</th><th class="mdHeader">'+attributeCommentString[lang]+'</th><th class="mdHeader">'+attributeLengthString[lang]+'</th><th class="mdHeader">'+attributePrecisionString[lang]+'</th></tr>';
			var rowCounter = 1;
			for (var i=0;i<layerProperties.attributes.length;i++) {
				attribute = layerProperties.attributes[i];
				if (rowCounter % 2 == 0) {
					metadataText += '<tr class="even">';
				}
				else {
					metadataText += '<tr>';
				}
				metadataText += '<td class="mdCell">'+attribute.name+'</td><td class="mdCell">'+attribute.type+'</td><td class="mdCell">'+attribute.comment+'</td><td class="mdCell">'+attribute.length+'</td><td class="mdCell">'+attribute.precision+'</td></tr>';
				rowCounter++;
			}
			metadataText += '</table>';
		}
		metadataText += '</div>';

		metadataTab.update(metadataText);
	}
	else {
		// hide metadata tab
		legendMetaTabPanel.hideTabStripItem(metadataTab);
	}

	// legend
	if (layerProperties.showLegend) {
		// show and activate legend tab
		legendMetaTabPanel.unhideTabStripItem(legendTab);
		legendMetaTabPanel.activate(legendTab);

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
			LAYERS: layername,
			DPI: screenDpi
		});

		//create legend image
		var legendImage = '<img src="'+legendUrl+'" />';
		legendTab.update(legendImage);
	}
	else {
		// hide legend tab
		legendMetaTabPanel.hideTabStripItem(legendTab);
	}
}

function setupLegendAndMetadataWindow() {
	legendMetadataWindow = new Ext.Window({
		title: legendMetadataWindowTitleString[lang],
		width: geoExtMap.getWidth() * 0.5,
		height: geoExtMap.getHeight() * 0.5,
		autoScroll: true,
		maximizable: true,
		layout: 'fit',
		items: [{
			xtype: 'tabpanel',
			activeTab: 0,
			defaults: {autoScroll: true},
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
			},
			close: function() {
				legendMetadataWindow = undefined;
			}
		}
	});
    legendMetaTabPanel = Ext.getCmp('legendMetaTabPanel');
    legendTab = Ext.getCmp('legendTab');
    metadataTab = Ext.getCmp('metadataTab');
}
