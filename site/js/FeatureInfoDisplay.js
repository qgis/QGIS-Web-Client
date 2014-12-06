/*
 *
 * FeatureInfoDisplay.js -- part of QGIS Web Client
 *
 * Copyright (2010-2012), The QGIS Project All rights reserved.
 * QGIS Web Client is released under a BSD license. Please see
 * https://github.com/qgis/qgis-web-client/blob/master/README
 * for the full text of the license and the list of contributors.
 *
*/

/* FeatureInfos are presented to the user in two ways using OpenLayers.Popup classes:
 * If the mouse stops and GetFeatureInfo has results for this mouse position
 * a small box presents the contents of the info field (GetProjectSettings) or the
 * field named "toolbox" (GetCapabilities), this is called hoverPopup throughout this script.
 * If the user clicks in the map the contents of all visible fields (and if activated the wkt geometry)
 * is presented in a popup called clickPopup throughout this script.
 * hoverPopups are disabled when a clickPopup is open, however clicking at another position in the map
 * closes the currently opened clickPopup and opens a new one (if there is GetFeatureInfo response).
 * If the cursor is at a position where there is GetFeatureInfo response it indicates the possibility
 * to click by changing to "hand".
*/

var featureInfoPopupContents;
var closePopupClick = false; // stores if the click results from closing a clickPopup

function showFeatureInfo(evt) {
    if (identifyToolActive) {
        if (!closePopupClick) {
            var map = geoExtMap.map; // gets OL map object
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
                if (hoverPopup) {removeHoverPopup();}
                if (clickPopup) {removeClickPopup();}
                var text = "";
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
                clickPopup = new OpenLayers.Popup.FramedCloud(
                    null, // id
                    map.getLonLatFromPixel(evt.xy), // lonlat
                    null, //new OpenLayers.Size(1,1), // contentSize
                    text, //contentHTML
                    null, // anchor
                    true,  // closeBox
                    onClickPopupClosed // closeBoxCallBackFunction
                    );
                // For the displacement problem
                clickPopup.panMapIfOutOfView = Ext.isGecko;
                clickPopup.autoSize = true;
                clickPopup.events.fallThrough = false;
                map.addPopup(clickPopup); //*/
                changeCursorInMap("default");
            }
        } else {
            closePopupClick = false;
        }
        activateGetFeatureInfo(true);
    }
}

function showFeatureInfoHover(evt) {
    var map = geoExtMap.map; // gets OL map object
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
        var text = '';
        var result = false;
        //test if we need to show the feature info layer title
        //either from global setting or from project setting
        var showFILayerTitle = showFeatureInfoLayerTitle;
        if (mapThemeSwitcher) {
            if (mapThemeSwitcher.activeProjectData != undefined) {
                showFILayerTitle = mapThemeSwitcher.activeProjectData.showFeatureInfoLayerTitle;
            }
        }

        for (var i = layerNodes.length - 1; i > -1; --i) {
            //case vector layers
            var featureNodes = layerNodes[i].getElementsByTagName("Feature");
            // show layer display field or if missing, the attribute 'tooltip'
            var tooltipAttributeName = wmsLoader.layerProperties[layerNodes[i].getAttribute("name")].displayField || "tooltip";
            for (var j = 0; j < featureNodes.length; ++j) {
                if (j == 0) {
                    if (showFILayerTitle) {
                        text += '<h2 class="hoverLayerTitle">' + wmsLoader.layerProperties[layerNodes[i].getAttribute("name")].title + '</h2>';
                    }
                    result = true;
                }
                var attribNodes = featureNodes[j].getElementsByTagName("Attribute");
                var attributesDict = {};
                for (var k = 0; k < attribNodes.length; ++k) {
                    attributesDict[attribNodes[k].getAttribute("name")] = attribNodes[k].getAttribute("value");
                }

                var tooltipFieldAvailable = attributesDict.hasOwnProperty(tooltipAttributeName);
                var geometryFieldAvailable = attributesDict.hasOwnProperty('geometry');

                if (tooltipFieldAvailable) {
                    var aValue = attributesDict[tooltipAttributeName]
                    if (aValue.match(/</)) {
                        text += aValue;
                    }
                    else {
                        attribText = '<p>' + aValue.replace(/\n/, "<br/>");
                        attribText = attribText.replace("\n", "<br/>");
                        text += attribText + '</p>';
                    }
                    text += '<hr class="hrHoverLayer"/>';
                }
                else if (tooltipTemplates && tooltipTemplates.hasOwnProperty(layerNodes[i].getAttribute("name"))){
                    templateText = tooltipTemplates[layerNodes[i].getAttribute("name")].template;
                    tooltipText = templateText.replace(/<%(\w*)%>/g,function(m,key){
                        var value = attributesDict.hasOwnProperty(key) ? attributesDict[key] : "";
                        return value.replace(/&/g, "&amp;")
                                     .replace(/</g, "&lt;")
                                     .replace(/>/g, "&gt;")
                                     .replace(/"/g, "&quot;")
                                     .replace(/'/g, "&#039;");
                    })
                    text += tooltipText+"<br/>";
                } else if (tooltipAttributeName.indexOf('[%') !== -1){ // Look into displayField for template tags...
                    var tooltipText = tooltipAttributeName;
                    var re = new RegExp(/\[%[^"]*"(.*?)"[^"]*%\]/g);
                    var ttmatch;
                    while(ttmatch = re.exec(tooltipAttributeName)){
                        var key = ttmatch[1];
                        var val = attributesDict.hasOwnProperty(key) ? attributesDict[key] : "";
                        tooltipText = tooltipText.replace(ttmatch[0], val);
                    }
                    text += tooltipText+"<br/>";
                }
                if (geometryFieldAvailable) {
                    var feature = new OpenLayers.Feature.Vector(OpenLayers.Geometry.fromWKT(attributesDict["geometry"]));
                    featureInfoHighlightLayer.addFeatures([feature]);
                }
            }
            //case raster layers
            var rasterAttributeNodes = Array();
            var rasterLayerChildNode = layerNodes[i].firstChild;
            while (rasterLayerChildNode) {
                if (rasterLayerChildNode.nodeName == "Attribute") {
                    rasterAttributeNodes.push(rasterLayerChildNode);
                }
                rasterLayerChildNode = rasterLayerChildNode.nextSibling;
            }
            for (var j = 0; j < rasterAttributeNodes.length; ++j) {
                if (j == 0) {
                    if (showFILayerTitle) {
                        text += '<h2 class="hoverLayerTitle">' + wmsLoader.layerProperties[layerNodes[i].getAttribute("name")].title + '</h2>';
                    }
                    result = true;
                }
                text += '<p>'+rasterAttributeNodes[j].getAttribute("name")+": "+rasterAttributeNodes[j].getAttribute("value")+'</p>';
                text += '<hr class="hrHoverLayer"/>';
            }
            if (identificationMode == 'topMostHit' && result) {
                break;
            }
        }

        if (result) {
            changeCursorInMap("pointer");
            if (!clickPopup) {
                // only show hoverPopup if no clickPopup is open
                //get rid of last <hr/>
                text = text.replace(/<hr class="hrHoverLayer"\/>$/,'');
                hoverPopup = new OpenLayers.Popup.FramedCloud(
                    null, // id
                    map.getLonLatFromPixel(evt.xy), // lonlat
                    null, // new OpenLayers.Size(1,1), // contentSize
                    text , //contentHTML
                    null, // anchor
                    false, // closeBox
                    null // closeBoxCallback
                    );
                hoverPopup.autoSize = true;
                hoverPopup.keepInMap = true;
                hoverPopup.panMapIfOutOfView = false;
                hoverPopup.events.on({"click": onHoverPopupClick});
                map.addPopup(hoverPopup);
            }
        } else {
            changeCursorInMap("default");
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
    if (enableHoverPopup)
		WMSGetFInfoHover.activate();
    var map = geoExtMap.map; // gets OL map object
    evt.xy = map.events.getMousePosition(evt); // non api function of OpenLayers.Events
    map.events.triggerEvent("mousemove", evt);
    closePopupClick = true; // indicate to not open a new clickPopup
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
    featureInfoHighlightLayer.removeAllFeatures();
}


/**
 * Search for if a custom formatter exists for this layerName and
 * attName combination and return formatter's results if found.
 *
 */
function runCustomFormatters(attValue, attName, layerName ){
    try {
        if (typeof getFeatureInfoCustomFormatters[layerName][attName] == 'object') {
            var ret = '';
            Ext.each(getFeatureInfoCustomFormatters[layerName][attName], function(formatter){
                ret += formatter(attValue, attName, layerName);
            });
            return ret;
        } else {
            return getFeatureInfoCustomFormatters[layerName][attName](attValue, attName, layerName);
        }
    } catch(e){
        return attValue;
    }
}

function parseFIResult(node) {
    if (node.hasChildNodes()) {
		//test if we need to show the feature info layer title
		//either from global setting or from project setting
		var showFILayerTitle = showFeatureInfoLayerTitle;
		if (mapThemeSwitcher) {
			if (mapThemeSwitcher.activeProjectData != undefined) {
				showFILayerTitle = mapThemeSwitcher.activeProjectData.showFeatureInfoLayerTitle;
			}
		}
        if (node.hasChildNodes() && node.nodeName == "Layer") {
            var hasAttributes = false;
            var rasterData = false;
            var htmlText = "";
			if (showFILayerTitle) {
				htmlText += "<h2>" + wmsLoader.layerProperties[node.getAttribute("name")].title + "</h2>";
			}
            var geoms = new Array();
            var layerChildNode = node.firstChild;
            while (layerChildNode) {
                if (layerChildNode.hasChildNodes() && layerChildNode.nodeName === "Feature") {
                    htmlText += '\n <p></p>\n <table>\n  <tbody>';
                    //case vector data
                    var attributeNode = layerChildNode.firstChild;
                    while (attributeNode) {
                        if (attributeNode.nodeName == "Attribute") {
                            var attName = attributeNode.getAttribute("name");
                            var attValue = attributeNode.getAttribute("value");
                            if ((attName !== mapInfoFieldName) && ((suppressEmptyValues == true && attValue.replace(/^\s\s*/, '').replace(/\s\s*$/, '') !== "") || suppressEmptyValues == false)) {
                                if (attName === "geometry") {
                                    var feature = new OpenLayers.Feature.Vector(OpenLayers.Geometry.fromWKT(attValue));
                                    geoms.push(feature);
                                    if (! suppressInfoGeometry) {
                                        htmlText += "\n   <tr>";
                                        if (showFieldNamesInClickPopup) {
                                            htmlText += "<td>" + attName + ":</td>";
                                        }
                                        htmlText += "<td>" + attValue + "</td></tr>";
                                        hasAttributes = true;
                                    }
                                } else {
                                    if (attName !== "maptip") {
                                      htmlText += "\n   <tr>";
                                      if (showFieldNamesInClickPopup) {
                                          htmlText += "<td>" + attName + ":</td>";
                                      }
                                      // add hyperlinks for URLs in attribute values
                                      if (attValue != '' && /^((http|https|ftp):\/\/).+\..+/i.test(attValue)) {
                                          if (! /\<a./i.test(attValue)) {
                                              //do not reformat already formated tags
                                              attValue = "<a class=\"popupLink\" href=\"" + attValue + "\" target=\"_blank\">" + attValue + "</a>";
                                          }
                                      }
                                      // add hyperlinks for URLs containing mediaurl pattern
                                      if (mediaurl != ''){
                                          var mediapattern = new RegExp(mediaurl,'i');
                                          if (mediapattern.test(attValue)){
                                              attValue = "<a href=\"/" + attValue + "\" target=\"_blank\">" + attValue + "</a>";
                                          }
                                      }
                                      // Check for custom formatters and apply if found
                                      attValue = runCustomFormatters(attValue, attName, node.getAttribute("name"));
                                      htmlText += "<td>" + attValue + "</td></tr>";
                                      hasAttributes = true;
                                  }
                                }
                            }
                        }
                        attributeNode = attributeNode.nextSibling;
                    }
                    htmlText += "\n  </tbody>\n </table>";
                }
                else if (layerChildNode.nodeName === "Attribute") {
                    //case raster data
                    if (rasterData == false) {
                        htmlText += "\n <p></p>\n <table>\n  <tbody>";
                    }
                    htmlText += '\n<tr><td>'+layerChildNode.getAttribute("name") + '</td><td>' + layerChildNode.getAttribute("value") + '</td></tr>';
                    hasAttributes = true;
                    rasterData = true;
                }
                layerChildNode = layerChildNode.nextSibling;
            }
            //htmlText += "\n</ul>";
            if (hasAttributes) {
                if (rasterData) {
                    htmlText += "\n  </tbody>\n </table>";
                }
                //alert(htmlText);
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
