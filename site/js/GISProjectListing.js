var gis_projects = {
	"path": "/map",
	"mapserver": "/wms",
	"thumbnails": "/thumbnails",
	"title": "SO!GIS",
	"topic": [{
		"name": "Amtliche Vermessung",
		"project": [{
			"name": "Ortsplan",
			"projectpath": "",
			"projectfile": "ortsplan",
			"format": "image/png",
			"visibleLayers": "Hoheitsgrenzen,Ortsplan",
			"updateInterval": "occasional",
			"responsible": "Amtliche Vermessung",
			"tags": "Ortsplan",
            "sogistooltip": true
		}]
	},{
		"name": "Amt für Umwelt",
		"project": [{
			"name": "Neophyten",
			"projectpath": "",
			"projectfile": "neophyten",
			"format": "image/png",
			"visibleLayers": "2013 Pflanzenliste,Gemeindegrenzen,Baisplan 1:5000 farbig",
			"updateInterval": "occasional",
			"responsible": "Amt für Umwelt",
			"tags": "Neophyten",
            "sogistooltip": false
		}]	
	},{
		"name": "Amt für Landwirtschaft",
		"project": [{
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
		"project": [{
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
		"project": [{
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
