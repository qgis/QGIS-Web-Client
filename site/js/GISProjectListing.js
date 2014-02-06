var default_buttons_seperators = [
                            'sogistooltip',
                            'measureDistance',
                            'measureArea',
                            'PrintMap',
                            'SendPermalink',
                            'ShowHelp',
                            //'navZoomBoxButton',
                            //'zoomNext',
                            //'zoomLast'
                            ];
                            
// default values when project is not yet configured in this document
var intSOGISTooltipWidth = 300;
var intSOGISTooltipHeight = 400;
var arr_SOGISButtons = ['measureDistance','measureArea','PrintMap','SendPermalink','ShowHelp','IdentifyTool'];
var strSOGISDefaultButton = 'IdentifyTool';

var gis_projects = {
  "path": "/maptest", /* DEPLOY !!! */
  "mapserver": "/wms",
  "thumbnails": "/thumbnails",
  "title": "SO!GIS",
  "topics": [{
      "name": "Amtliche Vermessung",
      "projects": [{
          "name": "Ortsplan",
          "projectpath": "",
          "projectfile": "ortsplan",
          "format": "image/png",
          "visibleLayers": "Hoheitsgrenzen,Ortsplan",
          "updateInterval": "occasional",
          "responsible": "Amtliche Vermessung",
          "tags": "Ortsplan",
          "switcher": false,
          "sogistooltipwidth" : "300",
          "sogistooltipheight" : "400",
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip"
    },{
          "name": "Richtplan Stand Januar 2013",
          "projectpath": "",
          "projectfile": "richtplan",
          "format": "image/png",
          "visibleLayers": "Gemeindegrenzen,Übersichtsplan,Orthofoto 2006,Grundnutzung,Überlagerte Nutzung",
          "updateInterval": "occasional",
          "responsible": "Amtliche Vermessung",
          "tags": "Richtplan",
          "switcher": false,
          "sogistooltipwidth" : "600",
          "sogistooltipheight" : "300",
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip"
   },{
          "name": "Mocheckso Error/Warning",
          "projectpath": "",
          "projectfile": "mocheckso",
          "format": "image/png",
          "visibleLayers": "Gemeindegrenzen",
          "updateInterval": "occasional",
          "responsible": "Amtliche Vermessung",
          "tags": "mocheckso",
          "switcher": false,
          "sogistooltipwidth" : "600",
          "sogistooltipheight" : "300",
          "sogisbuttons" : ['measureDistance','measureArea','PrintMap','IdentifyTool'],
          "sogisdefaultbutton" : "IdentifyTool"
    },{
          "name": "Grundbuchplan",
          "projectpath": "",
          "projectfile": "grundbuchplan",
          "format": "image/png",
          "visibleLayers": "Baulinien,Amtliche Vermessung (schwarz-weiss),Strassenkarte",
          "updateInterval": "occasional",
          "responsible": "Amtliche Vermessung",
          "tags": "Grundbuchplan",
          "switcher": true,
          "sogistooltipwidth" : "400",
          "sogistooltipheight" : "300",
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip"
    }]
  },{
    "name": "Amt für Umwelt",
    "projects": [{
          "name": "Neophyten",
          "projectpath": "",
          "projectfile": "neophyten",
          "format": "image/png",
          "visibleLayers": "2013 Pflanzenliste,Gemeindegrenzen,Grundkarte",
          "updateInterval": "occasional",
          "responsible": "Amt für Umwel",
          "tags": "Neophyten",
          "switcher": true,
          "sogistooltipwidth" : "600",
          "sogistooltipheight" : "400",
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip"
    },{
          "name": "Grundwasserbewirtschaftung",
          "projectpath": "",
          "projectfile": "grundwasserbewirtschaftung",
          "format": "image/png",
          "visibleLayers": "Orthofoto Kt. Solothurn",
          "updateInterval": "occasional",
          "responsible": "Amt für Umwelt",
          "tags": "Grundwasserbewirtschaftung",
          "switcher": false,
          "sogistooltipwidth" : "1000",
          "sogistooltipheight" : "350",
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip"
    },{
          "name": "Baugrundklassen",
          "projectpath": "",
          "projectfile": "baugrundklassen",
          "format": "image/png",
          "visibleLayers": "Gemeindegrenze,Baugrundklassen,Übersichtsplan,Strassenkarte",
          "updateInterval": "occasional",
          "responsible": "Amt für Umwelt",
          "tags": "Baugrundklassen",
          "switcher": false,
          "sogistooltipwidth" : "600",
          "sogistooltipheight" : "300",
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip"
    },{
          "name": "Naturgefahrenhinweiskarte",
          "projectpath": "",
          "projectfile": "natgef",
          "format": "image/png",
          "visibleLayers": "Überflutungsgebiete,sehr flache Talböden ausserhalb der modellierten Überflutungsbereiche: Überflutung kann nicht ausgeschlossen werden,Übersarung / Schwemmkegel,Murgang,bekannte Ereignisse ausserhalb des modellierten Steinschlaggebietes,Steinschlag,Doline,tatsächliche Ereignisse,Übersichtsplan,Strassenkarte mit Relief,Orthofoto",
          "updateInterval": "occasional",
          "responsible": "Amt für Umwelt",
          "tags": "Naturgefahrenhinweiskarte",
          "switcher": false,
          "sogistooltipwidth" : "600",
          "sogistooltipheight" : "300",
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip"
    },{
          "name": "Naturgefahren",
          "projectpath": "",
          "projectfile": "naturgefahren",
          "format": "image/png",
          "visibleLayers": "Naturgefahren",
          "updateInterval": "occasional",
          "responsible": "Amt für Umwelt",
          "tags": "Naturgefahren",
          "switcher": false,
          "sogistooltipwidth" : "600",
          "sogistooltipheight" : "400",
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip"
    }]  
  },{
    "name": "Amt für Landwirtschaf",
    "projects": [{
          "name": "Bienenstandorte",
          "projectpath": "",
          "projectfile": "bienenstandorte",
          "format": "image/png",
          "visibleLayers": "Bienenstandorte,Streptomycineinsatz,Feuerbrand Schutzobjekte,Gemeindegrenzen,Grundkarte",
          "updateInterval": "occasional",
          "responsible": "Amt für Landwirtschaf",
          "tags": "Bienenstandorte",
          "switcher": true,
          "sogistooltipwidth" : "400",
          "sogistooltipheight" : "300",
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip"
    }]  
  },{
    "name": "Amt für Raumplanung",
    "projects": [{
          "name": "Nutzungszonen",
          "projectpath": "",
          "projectfile": "nutzungszonen",
          "format": "image/png",
          "visibleLayers": "Nutzungszonen,Orthofoto,Gemeindegrenzen,Ortsplan",
          "updateInterval": "occasional",
          "responsible": "Amt für Raumplanung",
          "tags": "Nutzungszonen",
          "switcher": false,
          "sogistooltipwidth" : "",
          "sogistooltipheight" : "300",
          "sogisbuttons" : ['measureDistance','measureArea','PrintMap','IdentifyTool'],
          "sogisdefaultbutton" : "IdentifyTool" 
    }]
  },{
    "name": "Gemeinden",
    "projects": [{
          "name": "Leitungskataster",
          "projectpath": "",
          "projectfile": "gemeindegis",
          "format": "image/png",
          "visibleLayers": "Amtliche Vermessung,Wasser,Abwasser,Elektro",
          "updateInterval": "occasional",
          "responsible": "Gemeinden Kanton SO",
          "tags": "Leitungskataster,GemeindeGIS",
          "switcher": true,
          "sogistooltipwidth" : "600",
          "sogistooltipheight" : "300",
          "sogisbuttons" : ['measureDistance','measureArea','PrintMap','IdentifyTool'],
          "sogisdefaultbutton" : "IdentifyTool"
    }]
  },{
    "name": "Amt für Verkehr und Tiefbau",
    "projects": [{
          "name": "Verkehrsmodell 2010",
          "projectpath": "",
          "projectfile": "verkehrsmodell2010",
          "format": "image/png",
          "visibleLayers": "Gemeindegrenzen,Grundkarte",
          "updateInterval": "occasional",
          "responsible": "Amt für Verkehr und Tiefbau",
          "tags": "Meine Tags",
          "switcher": true,
          "sogistooltipwidth" : "450",
          "sogistooltipheight" : "400",
          "sogisbuttons" : default_buttons_seperators,
          "sogisdefaultbutton" : "sogistooltip"
    }]
 }]
};
