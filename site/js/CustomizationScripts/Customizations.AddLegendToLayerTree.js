// This sample Customization.js script adds the
// legend to the enabled layers on the Layer Tree.
//
// When the user zooms, you will see only the legend
// of the visible features. In order to achieve it, 
// QGIS 2.6 is needed. With earlier versions, you will
// see the complete legend.

// customInit() is called before any map initialization
function customInit() {
}

// called before map initialization
function customBeforeMapInit() {
}

// called after map initialization
function customAfterMapInit() {

    // Add legend symbols to the toc
    var treeRoot = layerTree.getNodeById("wmsNode");
	treeRoot.firstChild.cascade(
		function (n) {
			if (n.isLeaf()) {
				if (n.attributes.checked) {
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
						LAYERTITLE: "FALSE",
						LAYERFONTCOLOR: '#FFFFFF',
						LAYERTITLESPACE: 0,
						TRANSPARENT: true,
						LAYERS: n.text,
						DPI: screenDpi
					});
					
					Ext.DomHelper.insertAfter(n.getUI().getAnchor(),
							"<div id='legend_"+n.text.replace(" ", "-")+"'><img style='vertical-align: middle; margin-left: 50px' src=\""+legendUrl+"\"/></div>"
					);
				}
				
			}
		}
	);
}

// called when DOM is ready (Ext.onReady in WebgisInit.js)
function customPostLoading() {
}

// called when starting print
function customBeforePrint() {
}

// called when printing is launched
function customAfterPrint() {
}

// new buttons for the toolbar
var customButtons = [ 
];

// code to add buttons in the toolbar
function customToolbarLoad() {
}

// called when an event on toolbar is invoked
function customMapToolbarHandler(btn, evt) {
}

// called when the user clicks on a check in layerTree.
// n is a Ext.TreeNode object
function customActionLayerTreeCheck(n) {
	if (n.isLeaf()) {
		if (n.attributes.checked) {
			toAdd = Ext.get ( "legend_"+n.text.replace(" ", "-") );
			if (toAdd) {
			} else {
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
					//SYMBOLWIDTH: 4,
					LAYERFONTSIZE: 8, 
					ITEMFONTSIZE: 8, 
					// LAYERFONTFAMILY: "Adobe Blank", 
					LAYERTITLE: "FALSE",
					LAYERFONTCOLOR: '#FFFFFF',
		// 			ITEMFONTCOLOR: '#FFFFFF',
					LAYERTITLESPACE: 0,
					TRANSPARENT: true,
					//ITEMFONTSIZE: 0,
					LAYERS: n.text,
					DPI: screenDpi
				});
				
				Ext.DomHelper.insertAfter(n.getUI().getAnchor(),
						"<div id='legend_"+n.text.replace(" ", "-")+"'><img style='vertical-align: middle; margin-left: 50px' src=\""+legendUrl+"\"/></div>"
				);
			}
		} else {
			toRemove = Ext.get ( "legend_"+n.text.replace(" ", "-") )
			if (toRemove)
				toRemove.remove();
			
		}
	}
}

// called when the user zooms.
function customActionOnZoomEvent() {
}


// skip update legend on "firstTime" (when the map is loaded in the browser)
firstTime = true;

// called after a drag, pan, or zoom completed
function customActionOnMoveEvent() {
	if (firstTime) {
		firstTime = false;
		return;
	}

    var treeRoot = layerTree.getNodeById("wmsNode");
	treeRoot.firstChild.cascade(
		function (n) {
			if (n.isLeaf()) {
				if (n.attributes.checked) {
					toRemove = Ext.get ( "legend_"+n.text.replace(" ", "-") )
					if (toRemove)
						toRemove.remove();
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
						LAYERTITLE: "FALSE",
						LAYERFONTCOLOR: '#FFFFFF',
						LAYERTITLESPACE: 0,
						TRANSPARENT: true,
						LAYERS: n.text,
						DPI: screenDpi
					});
					
					legendUrl = legendUrl + "&BBOX="+geoExtMap.map.getExtent().toBBOX();
					
					Ext.DomHelper.insertAfter(n.getUI().getAnchor(),
							"<div id='legend_"+n.text.replace(" ", "-")+"'><img style='vertical-align: middle; margin-left: 50px' src=\""+legendUrl+"\"/></div>"
						);
				}
				
			}
		}
	);
}
