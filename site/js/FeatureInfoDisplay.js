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

var featureInfoPopupContents;

function showFeatureInfo(evt) {
	if (identifyToolActive) {
		var map = geoExtMap.map; // gets OL map object
		if (hoverPopup) {removeHoverPopup();}
		if (clickPopup) {
			removeClickPopup();
			activateGetFeatureInfo(true);
		}
		if (window.DOMParser) {
			var parser = new DOMParser();
			xmlDoc = parser.parseFromString(evt.text, "text/xml");
		} else {
			xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
			xmlDoc.async = "false";
			xmlDoc.loadXML(evt.text);
		}
		// open AttributeTree panel
		featureInfoResultLayers = new Array();
		highLightGeometry = new Array();
		parseFIResult(xmlDoc);
		featureInfoResultLayers.reverse();
		highLightGeometry.reverse();
		if (featureInfoResultLayers.length > 0) {
			if (hoverPopup) {map.removePopup(hoverPopup);}
			var text = ""; //'<div class=qgsFeatureInfoPopup>'
			if (identificationMode == 'topMostHit') {
				text += featureInfoResultLayers[0];
				featureInfoHighlightLayer.addFeatures(highLightGeometry[0]);
				//feature.geometry.getBounds().getCenterLonLat()
			} else {
				for (var i = 0; i < featureInfoResultLayers.length; i++) {
					text += featureInfoResultLayers[i];
					featureInfoHighlightLayer.addFeatures(highLightGeometry[i]);
				}
			}
			//text += '</div>';
			clickPopup = new OpenLayers.Popup.FramedCloud(
				null, // id
				map.getLonLatFromPixel(evt.xy), // lonlat
				null, //new OpenLayers.Size(1,1), // contentSize
				text, //contentHTML
				null, // anchor
				true,  // closeBox
				onClickPopupClosed // closeBoxCallBackFunction
				);
			clickPopup.autoSize = true;
			clickPopup.events.fallThrough = false;
			//clickPopup.closeOnMove = true;
			//hoverPopup.setBackgroundColor("#C8C8C8");
			//hoverPopup.setOpacity(0.8);
			map.addPopup(clickPopup); //*/
			changeCursorInMap("default");
		} else {
			activateGetFeatureInfo(true);
		}
	}
}

function showFeatureInfoHover(evt) {
	var map = geoExtMap.map; // gets OL map object
	if (clickPopup) {
		removeClickPopup();
		activateGetFeatureInfo(true);
	}
	featureInfoHighlightLayer.removeAllFeatures();
	if (identifyToolActive) {
		if (hoverPopup) {removeHoverPopup();}
		if (window.DOMParser) {
			var parser = new DOMParser();
			xmlDoc = parser.parseFromString(evt.text, "text/xml");
		} else {
			xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
			xmlDoc.async = "false";
			xmlDoc.loadXML(evt.text);
		}
		var layerNodes = xmlDoc.getElementsByTagName("Layer");
		var text = ''
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
							featureInfoHighlightLayer.addFeatures([feature]);
						}
					}
				}
			}
			if (identificationMode == 'topMostHit' && result) {
				break;
			}
		}
		
		if (result == false) {
			changeCursorInMap("default");
		} else {
			changeCursorInMap("pointer");
			text = text.substring(0, text.lastIndexOf("<br/>"));
			hoverPopup = new OpenLayers.Popup(
				null, // id
				map.getLonLatFromPixel(evt.xy), // lonlat
				null, //new OpenLayers.Size(1,1), // contentSize
				text , //contentHTML
				/*null, // anchor */
				false // closeBox 
				);
			hoverPopup.autoSize = true;
			//hoverPopup.setBackgroundColor("#C8C8C8");
			hoverPopup.setOpacity(0.8);
			hoverPopup.events.on({"click": onHoverPopupClick});
			map.addPopup(hoverPopup); //*/
		}
	}
}

// disable all GetFeatureInfoRequest until we have a reponse
function onBeforeGetFeatureInfoClick(evt){
	activateGetFeatureInfo(false);
}

// reenable GetFeatureInfo
function noFeatureInfoClick(evt){
	activateGetFeatureInfo(true);
}

/* we need this function in order to pass through the click to the map events
 * */
function onHoverPopupClick(evt){
	if (hoverPopup) {removeHoverPopup();}
	var map = geoExtMap.map; // gets OL map object
	evt.xy = map.events.getMousePosition(evt); // non api function of OpenLayers.Events
	map.events.triggerEvent("click", evt);
}

function onClickPopupClosed(evt) {
	removeClickPopup();
	// enable the hover popup for the curent mosue position
	WMSGetFInfoHover.activate();
	var map = geoExtMap.map; // gets OL map object
	evt.xy = map.events.getMousePosition(evt); // non api function of OpenLayers.Events
	map.events.triggerEvent("mousemove", evt);
	// we need a delay here otherwise click on the close button is interpreted as a new click on the map
	setTimeout("activateGetFeatureInfo(true)", 500);
	
}

function removeClickPopup() {
	var map = geoExtMap.map; // gets OL map object
	map.removePopup(clickPopup);
	clickPopup.destroy();
	clickPopup = null;
	featureInfoHighlightLayer.removeAllFeatures();
}

function removeHoverPopup(){
	var map = geoExtMap.map; // gets OL map object
	map.removePopup(hoverPopup);
	hoverPopup.destroy();
	hoverPopup = null;
}

function showFeatureSelected(args) {
	// select feature in layer
	thematicLayer.mergeNewParams({
		"SELECTION": args["layer"] + ":" + args["id"]
	});
	if (args["doZoomToExtent"]){
		geoExtMap.map.zoomToExtent(args["bbox"]);
	}
	else{
		geoExtMap.map.setCenter(new OpenLayers.LonLat(args["x"], args["y"]), args["zoom"]);
	}
}

function clearFeatureSelected() {
	// clear selection
	thematicLayer.mergeNewParams({
		"SELECTION": null
	});
}

function parseFIResult(node) {
	if (node.hasChildNodes) {
		if (node.hasChildNodes && node.nodeName == "Layer") {
			var hasAttributes = false;
			var htmlText = "<h2>" + node.getAttribute("name") + "</h2>";
			var geoms = new Array();
			var featureNode = node.firstChild;
			while (featureNode) {
				if (featureNode.hasChildNodes && featureNode.nodeName == "Feature") {
					htmlText += "\n <p></p>\n <table>\n  <tbody>";
					var attributeNode = featureNode.firstChild;
					while (attributeNode) {
						if (attributeNode.nodeName == "Attribute") {
							var attName = attributeNode.getAttribute("name");
							var attValue = attributeNode.getAttribute("value");
							if ((attName !== mapInfoFieldName) && (suppressEmptyValues && attValue.replace(/^\s\s*/, '').replace(/\s\s*$/, '') !== "")) {
								if (attName === "geometry") {
									var feature = new OpenLayers.Feature.Vector(OpenLayers.Geometry.fromWKT(attValue));
									geoms.push(feature);
									if (! suppressInfoGeometry) {
										htmlText += "\n   <tr>";
										if (showFieldNamesInClickPopup) {
											htmlText += "<td>" + attName + ":</td>";
										}
										htmlText += "<td>" + attValue + "</td></tr>";
										var hasAttributes = true;
									}
								} else {
									htmlText += "\n   <tr>";
									if (showFieldNamesInClickPopup) {
										htmlText += "<td>" + attName + ":</td>";
									}
									// add hyperlinks for URLs in attribute values
									if (attValue != '' && /http:\/\/.+\..+/i.test(attValue)) {
										attValue = "<a class=\"popupLink\" href=\"" + attValue + "\" target=\"_blank\">" + attValue + "</a>";
									}
									htmlText += "<td>" + attValue + "</td></tr>";
									var hasAttributes = true;
								}
							}
						}
						attributeNode = attributeNode.nextSibling;
					}
					htmlText += "\n  </tbody>\n </table>";
					//htmlText += "\n  </ul>\n </li>";
				}
				featureNode = featureNode.nextSibling;
			}
			//htmlText += "\n</ul>";
			if (hasAttributes) {
				featureInfoResultLayers.push(htmlText);
				highLightGeometry.push(geoms);
			}
		} else {
			var child = node.firstChild;
			while (child) {
				parseFIResult(child);
				child = child.nextSibling;
			}
		}
	}
}


function listLayersWithFeatures(node) {
	if (node.hasChildNodes()) {
		if (node.nodeName == "Layer") {
			featureInfoResultLayers.push(node.getAttribute("name"));
		} else {
			var child = node.firstChild;
			while (child) {
				listLayersWithFeatures(child);
				child = child.nextSibling;
			}
		}
	}
}

function getFeatures(layerName, node) {
	if (node.hasChildNodes()) {
		if (node.nodeName == "Layer" && node.getAttribute("name") == layerName) {
			return node.firstChild;
		} else {
			var child = node.firstChild;
			while (child) {
				getFeatures(layerName, child);
				child = child.nextSibling;
			}
		}
	}
}
