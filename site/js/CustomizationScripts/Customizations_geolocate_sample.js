// customInit() is called before any map initialization
function customInit() {




	///////////////////////////// GEOLOCATION  /////////////////
/************************** QGIS.geolocation ************************ */

QGIS.geolocater = Ext.extend(Object, {
  map: null,
  layer: null,
  //firstGeolocation: true,
  geolocateControls: null,
  geolocation: null,
  

  constructor: function(map, highlightLayer) {
    this.map = map;
    this.layer = highlightLayer;
    this.geolocation = new OpenLayers.Layer.Vector('geolocation');
    this.init();

  },

   init: function() {

					var style = {
						fillColor: '#000',
						fillOpacity: 0.1,
						strokeWidth: 0
					};


					var geolocation = this.geolocation;
					geoExtMap.map.addLayers([highlightLayer, geolocation]);

					
					var pulsate = function(feature) {
						var point = feature.geometry.getCentroid(),
							bounds = feature.geometry.getBounds(),
							radius = Math.abs((bounds.right - bounds.left)/2),
							count = 0,
							grow = 'up';

						var resize = function(){
							if (count>16) {
								clearInterval(window.resizeInterval);
							}
							var interval = radius * 0.03;
							var ratio = interval/radius;
							switch(count) {
								case 4:
								case 12:
									grow = 'down'; break;
								case 8:
									grow = 'up'; break;
							}
							if (grow!=='up') {
								ratio = - Math.abs(ratio);
							}
							feature.geometry.resize(1+ratio, point);
							geolocation.drawFeature(feature);
							count++;
						};
						window.resizeInterval = window.setInterval(resize, 50, point, radius);
					};

					var geolocateControls = new OpenLayers.Control.Geolocate({
						bind: false,
						geolocationOptions: {
							enableHighAccuracy: true,
							maximumAge: 0,
							timeout: 7000
						}
					});

					geoExtMap.map.addControl(geolocateControls);
					var firstGeolocation = true;
					geolocateControls.events.register("locationupdated", geolocateControls, function(e) {
						geolocation.removeAllFeatures();
						var circle = new OpenLayers.Feature.Vector(
							OpenLayers.Geometry.Polygon.createRegularPolygon(
								new OpenLayers.Geometry.Point(e.point.x, e.point.y),
								e.position.coords.accuracy/2,
								40,
								0
							),
							{},
							style
						);
						geolocation.addFeatures([
							new OpenLayers.Feature.Vector(
								e.point,
								{},
								{
									graphicName: 'cross',
									strokeColor: '#f00',
									strokeWidth: 2,
									fillOpacity: 0,
									pointRadius: 10
								}
							),
							circle
						]);
						if (firstGeolocation) {
							geoExtMap.map.zoomToExtent(geolocation.getDataExtent());
							pulsate(circle);
							firstGeolocation = false;
							this.bind = true;
						}
					});
					geolocateControls.events.register("locationfailed",this,function() {
						OpenLayers.Console.log('Location detection failed');
					});



						geolocateControls.watch = true;
						firstGeolocation = true;
						geolocateControls.activate();
						
						this.geolocation = geolocation;
						this.geolocateControls = geolocateControls;
    
  },
  
 						
  clear: function() {

		
		var geolocation = this.geolocation;
		geolocation.removeAllFeatures();
		
		var geolocateControls = this.geolocateControls;
		geolocateControls.watch = false;
		geolocateControls.deactivate();
		
		geoExtMap.map.removeControl(geolocateControls);
  }
  


  
});
			///////////////////////////// END GEOLOCATION  /////////////////		



}

// called before map initialization
function customBeforeMapInit() {

}

// called after map initialization
function customAfterMapInit() {

}

// called at the end of GetMapUrls
function customAfterGetMapUrls() {
}

// called when DOM is ready (Ext.onReady in WebgisInit.js)
function customPostLoading() {

}

// called when starting print
function customBeforePrint() {
    // do something. e.g. rearrange your layers
}

// called when printing is launched
function customAfterPrint() {
    // do something. e.g. rearrange your layers
}

var customButtons = [ 
						{
							xtype: 'tbseparator',
                            id: 'separator99'
						}, {
							xtype: 'button',
							enableToggle: true,
							allowDepress: true,
							toggleGroup: 'mapTools',
							scale: 'medium',
							icon: 'gis_icons/mActionGeolocate.png',
							tooltipType: 'qtip',
							tooltip: 'Geolocate',
							id: 'Geolocate'
						}
];			

// code to add buttons in the toolbar
function customToolbarLoad() {
	
						
	//Geolocate
	Ext.getCmp('Geolocate').toggleHandler = mapToolbarHandler;						



}

// called when an event on toolbar is invoked
function customMapToolbarHandler(btn, evt) {



		//Geolocate
		if (btn.id == "Geolocate") {
		if (btn.pressed) {
				geolocater = new QGIS.geolocater(geoExtMap.map, thematicLayer);

		} else {
				geolocater.clear();
				geolocater = null;
		}
	}
	//end Geolocate


}

// called when the user clicks on a check in layerTree.
// n is a Ext.TreeNode object
function customActionLayerTreeCheck(n) {

}


// called when the user zooms.
function customActionOnZoomEvent() {

}

// called after a drag, pan, or zoom completed
function customActionOnMoveEvent() {
	// ... action to do on call
}
