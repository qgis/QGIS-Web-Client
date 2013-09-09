var servername = "http://"+location.href.split(/\/+/)[1];
var strSOGISTooltipURL = servername + '/sogis/qgis-web-tooltip/'; // URL to the SOGIS tooltip

Ext.onReady(function () {
	// Define header menu. Can be nested one level deep.
	var sogis_menu = [
		{'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis.html', 'title': 'SO!GIS', 'class': 'sogis-aktiv', 'target':'_blank', 'submenu' : [
			{'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/leitbild.html', 'title': 'Leitbild', 'target':'_blank'},
			{'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/open-source-gis.html', 'title': 'Open Source GIS', 'target':'_blank'},
			{'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation.html', 'title': 'Amt f&uuml;r Geoinformation', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis.html', 'title': 'SO!GIS', 'target':'_blank'}
		]},
		{'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/interaktive-karten.html', 'title': 'Weitere Karten', 'target':'_blank', 'submenu' : [
                 ]},
        {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/sogis-daten.html', 'title': 'Datenbezug', 'target':'_blank', 'submenu' : [
            {'url': 'http://www.sogis1.so.ch/sogis/OnLineData/php/index.php', 'title': 'Online Bezug', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/sogis-daten/sogis-downloads.html', 'title': 'Übersichtskarten', 'target':'_blank'},
            {'url': 'http://www.sogis1.so.ch/sogis/OnLineData/php/datenbeschreibung_auswahl.php', 'title': 'Datenbeschreibung', 'target':'_blank'}
            
        ]},
        {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms.html', 'title': 'WMS', 'target':'_blank', 'submenu' : [
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-geologie.html', 'title': 'WMS Geologie', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-gewaesser.html', 'title': 'WMS Gewässer', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-naturgefahren.html', 'title': 'WMS Naturgefahren', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-oekomorphologie.html', 'title': 'WMS Ökomorphologie', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-richtplankarte.html', 'title': 'WMS Richtplankarte', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-verkehr.html', 'title': 'WMS Verkehr', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-relief-und-wanderwege.html', 'title': 'WMS Wanderwege', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-ortsplan.html', 'title': 'WMS Ortsplan', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-plan-der-amtlichen-vermessung.html', 'title': 'WMS Plan der AV', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-uebersichtsplan.html', 'title': 'WMS Übersichtsplan', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-strassenkarte.html', 'title': 'WMS Strassenkarte', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-orthofoto.html', 'title': 'WMS Orthofoto', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-dtm-dom.html', 'title': 'WMS DTM/DOM', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/av-wms.html', 'title': 'AV WMS', 'target':'_blank'}
            
            
        ]},
	  {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/rechtliche-hinweise.html', 'title': 'Rechtliche Hinweise', 'target':'_blank'}

	
	];

	// Builds a HTML string for a nested menu (see above).
	var getMenuString = function(menu) {

		var menuString = '<ul>', aClass = '', title = '';

		for(var i=0; i < menu.length; i++) {

			if (i === 0) {
				aClass = menu[i]['class']+' sogis-first';
			} else {
				aClass = menu[i]['class'];
			}
			title = menu[i].title.replace(/<(?:.|\n)*?>/gm, '');
			menuString += '<li><a class="'+aClass+'" href="'+menu[i].url+'" title="'+title+'" target="'+menu[i].target+'">'+menu[i].title+'</a>';
			if (menu[i].submenu) {
				menuString += getMenuString(menu[i].submenu);
			}
			menuString += '</li>';
		}
		menuString += '</ul>';
		return menuString;
	}

	Ext.get("ext-gen16").addClass('sogis-header').insertHtml('beforeEnd', '<div class="sogis-headernav">'+getMenuString(sogis_menu)+'</div>');
	Ext.get("panel_header_title").addClass('sogis-header-text').insertHtml('afterEnd', '<a href="http://www.so.ch/" class="sogis-header-logo" />');
	Ext.getCmp('GisBrowserPanel').setHeight(window.innerHeight);

    //Remove button SendEmail
    Ext.getCmp("SendPermalink").hide();
    
    
    isTooltipSOGIS();
    
    


});

/**
* @desc is the server sending a tooltip
* @return boolean if there is a tooltip or not
* @todo as apache makes a directory listening, only html without the tag <html> is being treated as a response. Better solution is welcome
*/
function isTooltipSOGIS(){
    var bolHasToolTip = null;
    for (var i=0;i<gis_projects.topics.length; i++){
        for (var j=0;j<gis_projects.topics[i].projects.length; j++){
            if ( gis_projects.topics[i].projects[j].projectfile == getProject() ){
                bolHasToolTip = gis_projects.topics[i].projects[j].sogistooltip;
                intSOGISTooltipWidth = gis_projects.topics[i].projects[j].sogistooltipwidth;
                intSOGISTooltipHeight = gis_projects.topics[i].projects[j].sogistooltipheight;
                strSOGISTooltipProject = getProject()
            }
        }
    }
    /* Ausnahme SOVOTE */
    if ((getProject().indexOf('ea_') != -1 ||
        getProject().indexOf('ka_') != -1) &&
        getProject().indexOf('_vorlage_') != -1){
        bolHasToolTip = true 
        strSOGISTooltipProject = 'ea_20130609_vorlage_1'
        intSOGISTooltipWidth = 600
        intSOGISTooltipHeight = 420
    }


    if ( bolHasToolTip == true ) {
        Ext.getCmp("ObjectIdentificationTextID").hide();
        Ext.getCmp("ObjectIdentificationModeCombo").hide();   
        Ext.getCmp("CenterPanel").doLayout(); 
        return true;
    } else {
        Ext.getCmp("ObjectIdentificationTextID").show();
        Ext.getCmp("ObjectIdentificationModeCombo").show();   
        Ext.getCmp("CenterPanel").doLayout(); 
        return false;
    }
}


/**
* @desc gets the html (usually a div with content) from the server
* @param number x the latitude
* @param number y the longitude
* @desc as apache makes a directory listening, only html without the tag <html> is being treated as a response. Better solution is welcome
*/
function getTooltipHtml(x,y, scale, extent){
    Ext.Ajax.request({
        url:  strSOGISTooltipURL + strSOGISTooltipProject + '/', // URL to the SOGIS tooltip
        params: {'x': x, //
                 'y': y,
                 'scale': scale,
                 'extent': extent,
                 'visiblelayers': selectedLayers.toString(),
                },
        method: 'GET',
        success: function(response){
                showTooltip(response.responseText);  
        }
    });
}

/**
* @desc shows a window with html inside
* @param string with html
*/
function showTooltip(str_html){
    var str_message = str_html;
        /*
        Ext.Msg.show({
        minWidth: 400,
        title: 'Tooltip ' + getProject(),
        msg: str_message,
        buttons: Ext.MessageBox.OK,
        maxHeight: 5,
        resizable: false,
        autoScroll: true
        //icon: Ext.MessageBox.INFO
        });
   */ 
        var x = new Ext.Window({
            title: 'Tooltip ' + getProject(),
            minWidth: intSOGISTooltipWidth,
            width: intSOGISTooltipWidth,
            minWidth: intSOGISTooltipWidth,
            minHeight: intSOGISTooltipHeight,
            height: intSOGISTooltipHeight,
            layout: 'auto',
            bodyStyle: 'background:#ffffff;',
            floating: true,
            html: str_message,
            modal: true,
            renderTo: document.body,
            buttonAlign: 'center',
            buttons : [
                {
                text: 'OK',
                handler: function(){
                    x.close();
                }                
        }
            ],
            closable: true,
            autoScroll: true,
        });
        x.show();
}

function showVisibleLayers(){
    visibleLayers = getVisibleLayers([],layerTree.root.firstChild);
    visibleLayers = uniqueLayersInLegend(visibleLayers);
    return visibleLayers;
}


/**
* @desc gets the last part of a url. In this context ist is the project name
* @return string with the project name
*/
function getProject(){
    return wmsMapName.replace("/", "");
}

/**
* @desc adds a permalink-button to the toolbar (called in WebgisInit.js)
*/
function addPermalinkToToolbar(toolbar) {
        var shortUrlButton = new Ext.Button({
            scale: 'medium',
            icon: 'gis_icons/mActionPermalink.png',
            tooltipType: 'qtip',
            tooltip: "Permalink",
            handler: updatePermalink
        });
        toolbar.addItem(shortUrlButton);
        
        var permalinkField = new Ext.form.TextField({
            emptyText: "Permalink",
            hidden: true,
            readOnly: true,
            width: 70,
            selectOnFocus: true
            
        });
        toolbar.addItem(permalinkField);
        
        function updatePermalink() {
            var permalink = createPermalink();
            permalinkField.setValue(permalink);
            permalinkField.show();
        }

        function unsetPermalink() {
            permalinkField.hide();
        }
        
        geoExtMap.map.events.register('moveend', this, unsetPermalink);
        geoExtMap.map.events.register('changelayer', this, unsetPermalink);
        
}

