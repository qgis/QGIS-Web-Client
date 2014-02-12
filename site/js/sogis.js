var servername = "http://"+location.href.split(/\/+/)[1];
var strSOGISTooltipURL = servername + '/sogis/qgis-web-tooltip/'; // URL to the SOGIS tooltip

/**
* @desc load the header of so
*/
function loadSOGISHeader(){
    // Define header menu. Can be nested one level deep.
    var sogis_menu = [
        {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis.html', 'title': 'SO!GIS', 'class': 'sogis-aktiv', 'target':'_blank', 'submenu' : [
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/leitbild.html', 'title': 'Leitbild', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/open-source-gis.html', 'title': 'Open Source GIS', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation.html', 'title': 'Amt f&uuml;r Geoinformation', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis.html', 'title': 'SO!GIS', 'target':'_blank'}
        ]},
        {'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation/sogis-koordination/interaktive-karten.html', 'title': 'Weitere Karten', 'target':'_blank', 'submenu' : [
                 ]},
        {'url': 'http://www.sogis1.so.ch/sogis/OnLineData/php/index.php', 'title': 'Datenbezug', 'target':'_blank', 'submenu' : [
            {'url': 'http://www.sogis1.so.ch/sogis/OnLineData/php/index.php', 'title': 'Online Bezug', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation/sogis-koordination/kartenvorlagen.html', 'title': 'Übersichtskarten', 'target':'_blank'},
            {'url': 'http://www.sogis1.so.ch/sogis/OnLineData/php/datenbeschreibung_auswahl.php', 'title': 'Datenbeschreibung', 'target':'_blank'}
        ]},
        {'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation/sogis-koordination/web-map-services-wms.html', 'title': 'WMS', 'target':'_blank', 'submenu' : [
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation/sogis-koordination/web-map-services-wms/wms-geologie.html', 'title': 'WMS Geologie', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation/sogis-koordination/web-map-services-wms/wms-gewaesser.html', 'title': 'WMS Gewässer', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation/sogis-koordination/web-map-services-wms/wms-naturgefahren.html', 'title': 'WMS Naturgefahren', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation/sogis-koordination/web-map-services-wms/wms-oekomorphologie.html', 'title': 'WMS Ökomorphologie', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation/sogis-koordination/web-map-services-wms/wms-richtplankarte.html', 'title': 'WMS Richtplankarte', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation/sogis-koordination/web-map-services-wms/wms-verkehr.html', 'title': 'WMS Verkehr', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation/sogis-koordination/web-map-services-wms/wms-relief-und-wanderwege.html', 'title': 'WMS Wanderwege', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation/sogis-koordination/web-map-services-wms/wms-ortsplan.html', 'title': 'WMS Ortsplan', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation/sogis-koordination/web-map-services-wms/wms-plan-der-amtlichen-vermessung.html', 'title': 'WMS Plan der AV', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation/sogis-koordination/web-map-services-wms/wms-uebersichtsplan.html', 'title': 'WMS Übersichtsplan', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation/sogis-koordination/web-map-services-wms/wms-strassenkarte.html', 'title': 'WMS Strassenkarte', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation/sogis-koordination/web-map-services-wms/wms-orthofoto.html', 'title': 'WMS Orthofoto', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation/sogis-koordination/web-map-services-wms/wms-dtm-dom.html', 'title': 'WMS DTM/DOM', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation/sogis-koordination/web-map-services-wms/av-wms.html', 'title': 'AV WMS', 'target':'_blank'}
        ]},
      {'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation/sogis-koordination/rechtliche-hinweise.html', 'title': 'Rechtliche Hinweise', 'target':'_blank'}
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
    Ext.get("panel_header").addClass('sogis-header').insertHtml('beforeEnd', '<div class="sogis-headernav">'+getMenuString(sogis_menu)+'</div>');
    Ext.get("panel_header_title").addClass('sogis-header-text').insertHtml('afterEnd', '<a href="http://www.so.ch/" class="sogis-header-logo" />');
    //Ext.getCmp('GisBrowserPanel').setSize(window.innerHeight, window.innerWidth);
    Ext.getCmp('GisBrowserPanel').setHeight(innerHeight);
};

function setSOGISProjectSettings(){
    //get sogis settings
    for (var i=0;i<gis_projects.topics.length; i++){
        for (var j=0;j<gis_projects.topics[i].projects.length; j++){
            if ( gis_projects.topics[i].projects[j].projectfile == getProject() ){
                intSOGISTooltipWidth = gis_projects.topics[i].projects[j].sogistooltipwidth;
                intSOGISTooltipHeight = gis_projects.topics[i].projects[j].sogistooltipheight;
                arr_SOGISButtons = gis_projects.topics[i].projects[j].sogisbuttons;
                strSOGISDefaultButton = gis_projects.topics[i].projects[j].sogisdefaultbutton;
            }
        }
    }
}


/**
* @desc initialises the individual sogis projects
* 
*/
function initSOGISProjects(){
    
    removeButtons(); // remove all buttons

    
    /* EXCEPTION SOVOTE */
    if ((getProject().indexOf('ea_') != -1 ||
        getProject().indexOf('ka_') != -1) &&
        getProject().indexOf('_vorlage_') != -1){
        intSOGISTooltipWidth = 600
        intSOGISTooltipHeight = 420
        addButtons(['sogistooltip','PrintMap']);
        strSOGISDefaultButton = 'sogistooltip';
        setDefaultButton(strSOGISDefaultButton);
    /* all regular projects */
    } else {
        //handle buttons
        addButtons(arr_SOGISButtons);
        setDefaultButton(strSOGISDefaultButton);

    }

    if ( strSOGISDefaultButton == "sogistooltip") {
        Ext.getCmp("ObjectIdentificationText").hide();
        Ext.getCmp("ObjectIdentificationModeCombo").hide();   
        Ext.getCmp("CenterPanel").doLayout(); 
        return true;
    } else {
        Ext.getCmp("ObjectIdentificationText").show();
        Ext.getCmp("ObjectIdentificationModeCombo").show();   
        Ext.getCmp("CenterPanel").doLayout(); 
        return false;
    }
}

/**
* @desc shows a window with html inside, used for sogis tooltip
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
        if (typeof(Ext.getCmp('tooltipWindow')) != 'undefined'){
            Ext.getCmp('tooltipWindow').destroy();
        }

        var tooltipWindow = new Ext.Window({
            title: 'Tooltip ' + getProject(),
            minWidth: intSOGISTooltipWidth,
            width: intSOGISTooltipWidth,
            minHeight: intSOGISTooltipHeight,
            height: intSOGISTooltipHeight,
            bodyStyle: 'background:#ffffff;height:' + intSOGISTooltipHeight + 'px;',
            floating: true,
            html: str_message,
            id: 'tooltipWindow',
            renderTo: document.body,
            /*
            buttonAlign: 'center',
            buttons : [
                {
                text: 'OK',
                handler: function(){
                    tooltipWindow.close();
                }                
        }
            ],
            */
            closable: true,
            autoScroll: true
        });
        tooltipWindow.show();
}

/**
* @desc returns a comma-separated string with the visible layers
* @return string with the visible layers
* 
*/
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
    str_return = wmsMapName.replace("/", "");
    /* EXCEPTION legacy communes  */
    if (str_return == "gempen" || 
    str_return == "zuchwil" ||
    str_return == "grindel" ||
    str_return == "haerkingen" ||
    str_return == "langendorf" ||
    str_return == "oberdorf" ||
    str_return == "selzach" ||
    str_return == "obergerlafingen" ||
    str_return == "schnottwil" ||
    str_return == "dulliken"){
        str_return = "gemeindegis";
    }    
    return str_return;
}

/**
* @desc removes all buttons from the map
*/
function removeButtons(){
arr_buttons_seperators = ['measureDistance',
                            'measureArea',
                            'PrintMap',
                            'IdentifyTool',
                            'ShowHelp',
                            'navZoomBoxButton',
                            'zoomNext',
                            'zoomLast',    
                            'SendPermalink', // button SendEmail
                            'separator1',
                            'separator2',
                            'separator3',
                            'separator4',
                            'separator5',
                            'sogistooltip'];
    for (var i=0; i<arr_buttons_seperators.length; i++){
        Ext.getCmp(arr_buttons_seperators[i]).hide();
    }
}

/**
* @desc adds buttons to the map
* 
*/
function addButtons(arr_buttons_seperators){
    for (var i=0; i<arr_buttons_seperators.length; i++){
        if (Ext.getCmp(arr_buttons_seperators[i])) {
          Ext.getCmp(arr_buttons_seperators[i]).show();
        }
    }

}

/**
* @desc adds buttons to the map
*
*/
function setDefaultButton(defaultButton){
    if (defaultButton != ""){
        Ext.getCmp(defaultButton).toggle();
    }
}

/**
* @desc this function opens a window with a permalink
*/
function openPermaLink(permalink) {
    var formPanel =  {
        xtype       : 'form',
        layout      : 'auto',
        height      : 22,
        autoScroll  : false,
        id          : 'permalinkpanel',
        border      : false,
        defaultType : 'field',
        frame       : false,
        bodyStyle: 'background:#ffffff;border-width:0px;border-color:#ffffff;',
        items       : [
            {
                xtype: 'textfield',
                height: 20,
                value: permalink,
                hideLabel: true,
                border: false,
                editable: false,
                width: 600,
                selectOnFocus:true,
                id: 'permalinkfield'
            }
        ]
    };

    if (typeof(Ext.getCmp('permalinkWindow')) != 'undefined'){
        Ext.getCmp('permalinkWindow').destroy();
    }
    
    var permalinkWindow = new Ext.Window({
        title: 'Permalink',
        minWidth: 615,
        width: 615,
        minHeight: 120,
        height: 120,
        layout: 'auto',
        bodyStyle: 'background:#ffffff;',
        floating: true,
        id: 'permalinkWindow',
        items: [formPanel],
        renderTo: document.body,
        buttonAlign: 'center',
        html: '<p align="center" style="color:#888888;vertical-align:bottom;"><br/>Mit diesem Link kann die jetzige Kartenansicht jederzeit wieder hergestellt werden. <br/>Kopieren: Ctrl+C</p>',
        /*buttons : [
            {
                text: 'OK',
                handler: function(){
                permalinkWindow.close();
                }
            }
        ],
        */
        closable: true,
        autoScroll: true
    });
    permalinkWindow.show();
    Ext.getCmp('permalinkfield').focus(false, 100);
}

//Send permalink. Overwrite from Translation.js
var sendPermalinkTooltipString = new Array();
sendPermalinkTooltipString["en"] = "Permalink";
sendPermalinkTooltipString["es"] = "Permalink"; //FIXME
sendPermalinkTooltipString["de"] = "Permalink";
sendPermalinkTooltipString["fr"] = "Permalink";
sendPermalinkTooltipString["it"] = "Permalink"; //FIXME
sendPermalinkTooltipString["pt_PT"] = "Permalink";
sendPermalinkTooltipString["uk"] = "Permalink"; //FIXME
sendPermalinkTooltipString["hu"] = "Permalink";
sendPermalinkTooltipString["ro"] = "Permalink";

//mode string for attribute data detailed
var modeObjectIdentificationString = new Array();
modeObjectIdentificationString["en"] = "Mode: object identification. Move the mouse over an object to identify it, click it to view its attribute data.";
modeObjectIdentificationString["es"] = "Modo: Identificación de objeto. Mueva el cursor sobre un objeto para identificarlo, haga click sobre él para ver sus atributos.";
modeObjectIdentificationString["de"] = "Bewegen Sie die Maus über das Objekt, um es zu identifizeren, klicken Sie es an, um seine Attributdaten anzuzeigen.";
modeObjectIdentificationString["fr"] = "Mode: identification d'objets. Déplacez la souris sur un objet pour l'identifier, cliquez dessus pour afficher les attributs.";
modeObjectIdentificationString["it"] = "Modalità: identificazione di elementi. Identificare un elemento tramite il click.";
modeObjectIdentificationString["pt_PT"] = "Modo: identificação do elemento. Ver atributos dos dados por meio de um clique do rato.";
modeObjectIdentificationString["uk"] = "Режим: вибір об'єкта. Клацніть лівою кнопкою щоб побачити атрибути об'єкта.";
modeObjectIdentificationString["hu"] = "Mód: térképi elem azonosítás. Mozgasd az egeret a kívánt térképi elem fölé, klikkelj rá.";
modeObjectIdentificationString["ro"] = "Mod: identificare obiect. Pentru aceasta se pune mouse-ul pe el; se poate da click pentru a-i vizualiza atributele";


