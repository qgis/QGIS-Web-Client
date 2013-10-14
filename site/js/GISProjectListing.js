var default_buttons_seperators = ['measureDistance',
                            'measureArea',
                            'PrintMap',
                            'permalink',
                            'IdentifyTool',
                            'ShowHelp',
                            'navZoomBoxButton',
                            'zoomNext',
                            'zoomLast',    
                            'separator'];

var gis_projects = {
	"path": "/map",
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
            "switcher": true,
            "sogistooltip": true,
            "sogistooltipwidth" : "300",
            "sogistooltipheight" : "400",
            "sogisbuttons" : default_buttons_seperators,
            "sogisdefaultbutton" : ""
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
            "sogistooltip": true,
            "sogistooltipwidth" : "600",
            "sogistooltipheight" : "300",
            "sogisbuttons" : default_buttons_seperators,
            "sogisdefaultbutton" : ""
		}]
	},{
		"name": "Amt für Umwelt",
		"projects": [{
			"name": "Neophyten",
			"projectpath": "",
			"projectfile": "neophyten",
			"format": "image/png",
			"visibleLayers": "2013 Pflanzenliste,Gemeindegrenzen,Baisplan 1:5000 farbig",
			"updateInterval": "occasional",
			"responsible": "Amt für Umwelt",
			"tags": "Neophyten",
            "switcher": true,
            "sogistooltip": true,
            "sogistooltipwidth" : "600",
            "sogistooltipheight" : "350",
            "sogisbuttons" : default_buttons_seperators,
            "sogisdefaultbutton" : ""
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
            "sogistooltip": true,
            "sogistooltipwidth" : "1000",
            "sogistooltipheight" : "350",
            "sogisbuttons" : default_buttons_seperators,
            "sogisdefaultbutton" : ""
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
            "sogistooltip": true,
            "sogistooltipwidth" : "600",
            "sogistooltipheight" : "300",
            "sogisbuttons" : default_buttons_seperators,
            "sogisdefaultbutton" : ""
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
            "sogistooltip": true,
            "sogistooltipwidth" : "600",
            "sogistooltipheight" : "300",
            "sogisbuttons" : default_buttons_seperators,
            "sogisdefaultbutton" : ""
		}]	
	},{
		"name": "Amt für Landwirtschaft",
		"projects": [{
			"name": "Bienenstandorte",
			"projectpath": "",
			"projectfile": "bienenstandorte",
			"format": "image/png",
			"visibleLayers": "Bienenstandorte,Streptomycineinsatz,Feuerbrand Schutzobjekte,Basisplan AV 1:10000,Hintergrundkarte 1:1 Mio",
			"updateInterval": "occasional",
			"responsible": "Amt für Landwirtschaft",
			"tags": "Bienenstandorte",
            "switcher": true,
            "sogistooltip": false,
            "sogistooltipwidth" : "",
            "sogistooltipheight" : "300",
            "sogisbuttons" : default_buttons_seperators,
            "sogisdefaultbutton" : ""
		}
		]	
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
            "switcher": true,
            "sogistooltip": false,
            "sogistooltipwidth" : "",
            "sogistooltipheight" : "300",
            "sogisbuttons" : default_buttons_seperators,
            "sogisdefaultbutton" : ""
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
            "sogistooltip": true,
            "sogistooltipwidth" : "600",
            "sogistooltipheight" : "300",
            "sogisbuttons" : default_buttons_seperators,
            "sogisdefaultbutton" : ""
		}]
    },{
		"name": "Amt für Verkehr und Tiefbau",
		"projects": [{
			"name": "Verkehrsmodell 2010",
			"projectpath": "",
			"projectfile": "verkehrsmodell2010",
			"format": "image/png",
			"visibleLayers": "",
			"updateInterval": "occasional",
			"responsible": "Amt für Verkehr und Tiefbau",
			"tags": "Meine Tags",
            "switcher": false,
            "sogistooltip": true,
            "sogistooltipwidth" : "600",
            "sogistooltipheight" : "300",
            "sogisbuttons" : default_buttons_seperators,
            "sogisdefaultbutton" : ""
		}]
    }]
};
