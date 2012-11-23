/*
 *
 * FeatureInfoDisplay.js -- part of Quantum GIS Web Client
 *
 * Copyright (2010-2012), The QGIS Project All rights reserved.
 * Quantum GIS Web Client is released under a BSD license. Please see
 * https://github.com/qgis/qgis-web-client/blob/master/README
 * for the full text of the license and the list of contributors.
 *
*/ 

function showFeatureInfo(evt) {
	//empty previous result in attribute Tree
	AttributeDataTree.getRootNode().removeAll();
	if (identifyToolActive) {
		if (window.DOMParser) {
			var parser = new DOMParser();
			xmlDoc = parser.parseFromString(evt.text, "text/xml");
		} else {
			xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
			xmlDoc.async = "false";
			xmlDoc.loadXML(evt.text);
		}
		// open AttributeTree panel
		AttributeDataTree.expand();
		featureInfoResultLayers = new Array();
		highLightGeometry = new Array();
		parseFeatureInfoResult(xmlDoc);
		featureInfoResultLayers.reverse();
		highLightGeometry.reverse();
		highlightLayer.removeAllFeatures();
		var idsToRemove = new Array(); // array to store fields/attributes that should not be displayed
		if (identificationMode == 'topMostHit' && featureInfoResultLayers.length > 0) {
			var featureInfoResult = featureInfoResultLayers[0];
			AttributeDataTree.getRootNode().appendChild(featureInfoResult);
			var feature = new OpenLayers.Feature.Vector(OpenLayers.Geometry.fromWKT(highLightGeometry[0]));
			highlightLayer.addFeatures([feature]);
			// scan through the results and check if there are any to be suppressed
			for (var j = 0; j < featureInfoResult.childNodes.length; j++) {
				var aFeatureInfo = featureInfoResult.childNodes[j];
				for (var k = 0; k < aFeatureInfo.childNodes.length; k++) {
					var anAttributeValue = aFeatureInfo.childNodes[k];
					var parts = anAttributeValue.attributes.text.split(":");
					// condition 1: field name = tooltip, cond 2 fields with null values
					if ((parts[0] === mapInfoFieldName) || (suppressEmptyValues && parts[1].replace(/^\s\s*/, '').replace(/\s\s*$/, '') === "")) {
						idsToRemove.push(anAttributeValue.id);
					}
				}
			}
		} else if (identificationMode == 'allLayers' || identificationMode == 'activeLayers') {
			var features = new Array();
			for (var i = 0; i < featureInfoResultLayers.length; i++) {
				var featureInfoResult = featureInfoResultLayers[i];
				AttributeDataTree.getRootNode().appendChild(featureInfoResult);
				features[i] = new OpenLayers.Feature.Vector(OpenLayers.Geometry.fromWKT(highLightGeometry[i]));
				// scan through the results and check if there are any to be suppressed
				for (var j = 0; j < featureInfoResult.childNodes.length; j++) {
					var aFeatureInfo = featureInfoResult.childNodes[j];
					for (var k = 0; k < aFeatureInfo.childNodes.length; k++) {
						var anAttributeValue = aFeatureInfo.childNodes[k];
						var parts = anAttributeValue.attributes.text.split(":");
						// condition 1: field name = tooltip, cond 2 fields with null values
						if ((parts[0] === mapInfoFieldName) || (suppressEmptyValues && parts[1].replace(/^\s\s*/, '').replace(/\s\s*$/, '') === "")) {
							idsToRemove.push(anAttributeValue.id);
						}
					}
				}
			}
			highlightLayer.addFeatures(features);
		}
		AttributeDataTree.getRootNode().expandChildNodes(true);
		// remove suppressed attributes
		for (var i = 0; i < idsToRemove.length; i++) {
			AttributeDataTree.getRootNode().findChild("id", idsToRemove[i], true).remove();
		}
	}
}

function showFeatureInfoHover(evt) {
	//highlightLayer leeren
	highlightLayer.removeAllFeatures();
	if (identifyToolActive) {
		if (window.DOMParser) {
			var parser = new DOMParser();
			xmlDoc = parser.parseFromString(evt.text, "text/xml");
		} else {
			xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
			xmlDoc.async = "false";
			xmlDoc.loadXML(evt.text);
		}
		var tooltipText = "";
		var nameText = "";
		var ogc_fidText = "";
		var gidText = "";
		var layerNodes = xmlDoc.getElementsByTagName("Layer");
		var text = '<p>';
		var result = false;
		for (var i = layerNodes.length - 1; i > -1; --i) {
			var featureNodes = layerNodes[i].getElementsByTagName("Feature");
			// show layer display field or if missing, the attribute 'tooltip'
			var tooltipAttributeName = wmsLoader.layerProperties[layerNodes[i].getAttribute("name")].displayField || "tooltip";
			for (var j = 0; j < featureNodes.length; ++j) {
				if (j == 0) {
					text += '<span style="font-weight:bold;">' + layerNodes[i].getAttribute("name") + '</span><br/>';
					result = true;
				}
				var attribNodes = featureNodes[j].getElementsByTagName("Attribute");
				for (var k = 0; k < attribNodes.length; ++k) {
					if (attribNodes[k].getAttribute("name") == tooltipAttributeName) {
						attribText = attribNodes[k].getAttribute("value").replace(/\n/, "<br/>");
						attribText = attribText.replace("\n", "<br/>");
						text += attribText + "<br/>";
					} else {
						if (attribNodes[k].getAttribute("name") == "geometry") {
							var feature = new OpenLayers.Feature.Vector(OpenLayers.Geometry.fromWKT(attribNodes[k].getAttribute("value")));
							highlightLayer.addFeatures([feature]);
						}
					}
				}
			}
			if (identificationMode == 'topMostHit' && result) {
				break;
			}
		}
		if (result == false) {
			text += mapTipsNoResultString[lang];
		}
		text += '</p>';
		attribToolTip.update(text);
	}
}

function showFeatureSelected(layer, id, x, y, zoom) {
	// select feature in layer
	thematicLayer.mergeNewParams({
		"SELECTION": layer + ":" + id
	});
	geoExtMap.map.setCenter(new OpenLayers.LonLat(x, y), zoom);
}

function clearFeatureSelected() {
	// clear selection
	thematicLayer.mergeNewParams({
		"SELECTION": null
	});
}

function parseFeatureInfoResult(node) {
	if (node.hasChildNodes()) {
		if (node.nodeName == "Layer") {
			featureInfoResultLayers.push(new Ext.tree.TreeNode({
				text: node.getAttribute("name")
			}));
			//in case of a raster layer there is no "Feature" child - we need to create an "artificial feature"
			if (node.getElementsByTagName("Feature").length == 0) {
				lastFeature = new Ext.tree.TreeNode({
					text: "Rasterzelle"
				});
				featureInfoResultLayers[featureInfoResultLayers.length - 1].appendChild(lastFeature);
			}
		}
		if (node.nodeName == "Feature") {
			lastFeature = new Ext.tree.TreeNode({
				text: attributeFeatureWithString[lang] + node.getAttribute("id")
			});
			featureInfoResultLayers[featureInfoResultLayers.length - 1].appendChild(lastFeature);
		}
		var child = node.firstChild;
		while (child) {
			parseFeatureInfoResult(child);
			child = child.nextSibling;
		}
	} else {
		//leaf node
		if (node.nodeName == "Attribute") {
			lastFeature.appendChild(new Ext.tree.TreeNode({
				text: node.getAttribute("name") + ": " + node.getAttribute("value")
			}));
			if (node.getAttribute("name") == "geometry") {
				highLightGeometry.push(node.getAttribute("value"));
			}
		}
	}
}
