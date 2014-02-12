// customInit() is called before any map initialization
function customInit() {

    //set project settings 
    setSOGISProjectSettings();

    // I create a new control click event class
    OpenLayers.Control.Click = OpenLayers.Class(OpenLayers.Control, {
         defaultHandlerOptions: {
                 'single': true,
                 'double': false,
                 'pixelTolerance': 0,
                 'stopSingle': false,
                 'stopDouble': false
         },
         initialize: function(options) {
                 this.handlerOptions = OpenLayers.Util.extend(
                         {}, this.defaultHandlerOptions
                 );
                 OpenLayers.Control.prototype.initialize.apply(
                         this, arguments
                 );
                 this.handler = new OpenLayers.Handler.Click(
                         this, {
                                 'click': this.trigger
                         }, this.handlerOptions
                 );
         }
     });
}

// called before map initialization
function customBeforeMapInit() {
}

// called after map initialization
function customAfterMapInit() {

     // Create a new map control based on Control Click Event
    openlayersClickEvent = new OpenLayers.Control.Click( {
         trigger: function(e) {
             var xy = geoExtMap.map.getLonLatFromViewPortPx(e.xy);
             var x = xy.lon;
             var y = xy.lat;
             var left = Math.round(geoExtMap.map.getExtent().left);
             var bottom = Math.round(geoExtMap.map.getExtent().bottom);
             var right = Math.round(geoExtMap.map.getExtent().right);
             var top = Math.round(geoExtMap.map.getExtent().top);
             var extent = left + ',' + bottom + ',' + right + ',' + top;
             var scale = Math.round(geoExtMap.map.getScale());
             
             Ext.Ajax.request({
                url:  strSOGISTooltipURL + getProject() + '/', // URL to the SOGIS tooltip
                params: {
                    'x': x, 
                    'y': y,
                    'scale': scale,
                    'extent': extent,
                    'visiblelayers': selectedLayers.toString()
                },
                method: 'GET',
                success: function(response){
                    showTooltip(response.responseText);  
                }
             });
         }
     });
 
     geoExtMap.map.addControl(openlayersClickEvent);
     initSOGISProjects(); /* INIT SOGIS PROJECT */
}

function customPostLoading() {
    loadSOGISHeader(); // sogis header on top of the map
}

customButtons = [ 
    // Add a separator and a button
    {
        xtype: 'tbseparator',
        id: 'separator5'
    }, {
        xtype: 'button',
        enableToggle: true,
        allowDepress: true,
        toggleGroup: 'mapTools',
        scale: 'medium',
        icon: 'gis_icons/mActionIdentify.png',
        tooltipType: 'qtip',
        tooltip: "Tooltip - Zum Abfragen auf Kartenobjekt klicken",
        id: 'sogistooltip'
        }
];  

// code to add buttons in the toolbar
function customToolbarLoad() {
    Ext.getCmp('sogistooltip').toggleHandler = mapToolbarHandler;
}

// called when an event on toolbar is invoked
function customMapToolbarHandler(btn, evt) {
     // Check if the button is pressed or unpressed
     if (btn.id == "sogistooltip") {
         if (btn.pressed) {
              //alert ( "You clicked on Test Button!" );
              openlayersClickEvent.activate();
         }
         else
         {
              //alert ( "TEST button is toggled up!" );
              openlayersClickEvent.deactivate();
         }
     }
}
