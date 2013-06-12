
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
            "sogistooltip": true
		},{
			"name": "Richtplan Stand Januar 2013",
			"projectpath": "",
			"projectfile": "richtplan",
			"format": "image/png",
			"visibleLayers": "Gemeindegrenzen,Übersichtsplan,Orthofoto 2006,Grundnutzung,Überlagerte Nutzung",
			"updateInterval": "occasional",
			"responsible": "Amtliche Vermessung",
			"tags": "Richtplan",
            "sogistooltip": true
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
            "sogistooltip": false
		},{
			"name": "Baugrundklassen",
			"projectpath": "",
			"projectfile": "baugrundklassen",
			"format": "image/png",
			"visibleLayers": "Gemeindegrenze,Baugrundklassen,Übersichtsplan,Strassenkarte",
			"updateInterval": "occasional",
			"responsible": "Amt für Umwelt",
			"tags": "Baugrundklassen",
            "sogistooltip": true
		},{
			"name": "Naturgefahrenhinweiskarte",
			"projectpath": "",
			"projectfile": "natgef",
			"format": "image/png",
			"visibleLayers": "Gemeindegrenze,Baugrundklassen,Übersichtsplan,Strassenkarte mit Relief,Orthofoto 2006",
			"updateInterval": "occasional",
			"responsible": "Amt für Umwelt",
			"tags": "Naturgefahrenhinweiskarte",
            "sogistooltip": true
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
            "sogistooltip": false
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
            "sogistooltip": false
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
            "sogistooltip": true
		}]
    }]
};
