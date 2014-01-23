// customInit() is called before any map initialization
function customInit() {

//     // I create a new control click event class
//     OpenLayers.Control.Click = OpenLayers.Class(OpenLayers.Control, {
//         defaultHandlerOptions: {
//                 'single': true,
//                 'double': false,
//                 'pixelTolerance': 0,
//                 'stopSingle': false,
//                 'stopDouble': false
//         },
//         initialize: function(options) {
//                 this.handlerOptions = OpenLayers.Util.extend(
//                         {}, this.defaultHandlerOptions
//                 );
//                 OpenLayers.Control.prototype.initialize.apply(
//                         this, arguments
//                 );
//                 this.handler = new OpenLayers.Handler.Click(
//                         this, {
//                                 'click': this.trigger
//                         }, this.handlerOptions
//                 );
//         }
//     });
}

// called before map initialization
function customBeforeMapInit() {
}

// called after map initialization
function customAfterMapInit() {

//     // Create a new map control based on Control Click Event
//     openlayersClickEvent = new OpenLayers.Control.Click( {
//         trigger: function(e) {
//             var xy = geoExtMap.map.getLonLatFromViewPortPx(e.xy);
//             var x = xy.lon;
//             var y = xy.lat;
//             
//             alert ( "You clicked on " + x + ", " + y );
//         }
//     });
// 
//     geoExtMap.map.addControl(openlayersClickEvent);
}

// called when DOM is ready (Ext.onReady in WebgisInit.js)
function customPostLoading() {
//    Ext.get("panel_header").addClass('sogis-header').insertHtml('beforeEnd', '<div style="float: right; width: 250px;">hello world</div>');
}


// new buttons for the toolbar
var customButtons = [ 
   
//    // Add a separator and a button
//    {
//      xtype: 'tbseparator'
//    }, {
//      xtype: 'button',
//      enableToggle: true,
//      allowDepress: true,
//      toggleGroup: 'mapTools',
//      scale: 'medium',
//      icon: 'gis_icons/test.gif',
//      tooltipType: 'qtip',
//      tooltip: "Test button - click on the map",
//      id: 'TESTBUTTON'
//    }
];

// code to add buttons in the toolbar
function customToolbarLoad() {
//     // Handle the button click
//     Ext.getCmp('TESTBUTTON').toggleHandler = mapToolbarHandler;
}

// called when an event on toolbar is invoked
function customMapToolbarHandler(btn, evt) {
//     // Check if the button is pressed or unpressed
//     if (btn.id == "TESTBUTTON") {
//         if (btn.pressed) {
//              alert ( "You clicked on Test Button!" );
//              openlayersClickEvent.activate();
//         }
//         else
//         {
//              alert ( "TEST button is toggled up!" );
//              openlayersClickEvent.deactivate();
//         }
//     }
}
