
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
            "sogistooltip": true,
            "sogistooltipwidth" : "600",
            "sogistooltipheight" : "300"
		},{
			"name": "Richtplan Stand Januar 2013",
			"projectpath": "",
			"projectfile": "richtplan",
			"format": "image/png",
			"visibleLayers": "Gemeindegrenzen,Übersichtsplan,Orthofoto 2006,Grundnutzung,Überlagerte Nutzung",
			"updateInterval": "occasional",
			"responsible": "Amtliche Vermessung",
			"tags": "Richtplan",
            "sogistooltip": true,
            "sogistooltipwidth" : "600",
            "sogistooltipheight" : "300"
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
            "sogistooltip": true,
            "sogistooltipwidth" : "600",
            "sogistooltipheight" : "300"
		},{
			"name": "Grundwasserbewirtschaftung",
			"projectpath": "",
			"projectfile": "grundwasserbewirtschaftung",
			"format": "image/png",
			"visibleLayers": "Orthofoto Kt. Solothurn",
			"updateInterval": "occasional",
			"responsible": "Amt für Umwelt",
			"tags": "Gewaesserbewirtschaftung",
            "sogistooltip": true,
            "sogistooltipwidth" : "1000",
            "sogistooltipheight" : "300"
		},{
			"name": "Baugrundklassen",
			"projectpath": "",
			"projectfile": "baugrundklassen",
			"format": "image/png",
			"visibleLayers": "Gemeindegrenze,Baugrundklassen,Übersichtsplan,Strassenkarte",
			"updateInterval": "occasional",
			"responsible": "Amt für Umwelt",
			"tags": "Baugrundklassen",
            "sogistooltip": true,
            "sogistooltipwidth" : "600",
            "sogistooltipheight" : "300"
		},{
			"name": "Naturgefahrenhinweiskarte",
			"projectpath": "",
			"projectfile": "natgef",
			"format": "image/png",
			"visibleLayers": "Überflutungsgebiete,sehr flache Talböden ausserhalb der modellierten Überflutungsbereiche: Überflutung kann nicht ausgeschlossen werden,Übersarung / Schwemmkegel,Murgang,bekannte Ereignisse ausserhalb des modellierten Steinschlaggebietes,Steinschlag,Doline,tatsächliche Ereignisse,Übersichtsplan,Strassenkarte mit Relief,Orthofoto",
			"updateInterval": "occasional",
			"responsible": "Amt für Umwelt",
			"tags": "Naturgefahrenhinweiskarte",
            "sogistooltip": true,
            "sogistooltipwidth" : "600",
            "sogistooltipheight" : "300"
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
            "sogistooltip": false,
            "sogistooltipwidth" : "",
            "sogistooltipheight" : "300"
		},{
			"name": "SOVOTE TEST",
			"projectpath": "",
			"projectfile": "ea_20130609_vorlage_1",
			"format": "image/png",
			"visibleLayers": "",
			"updateInterval": "occasional",
			"responsible": "Staatskanzlei AGI",
			"tags": "SOVOTE TEST",
            "sogistooltip": true,
            "sogistooltipwidth" : "600",
            "sogistooltipheight" : "300"
		},{
			"name": "SOVOTE TEST2",
			"projectpath": "",
			"projectfile": "ea_20130609_vorlage_2",
			"format": "image/png",
			"visibleLayers": "",
			"updateInterval": "occasional",
			"responsible": "Staatskanzlei AGI",
			"tags": "SOVOTE TEST",
            "sogistooltip": true,
            "sogistooltipwidth" : "600",
            "sogistooltipheight" : "300"
		},{
			"name": "SOVOTE TEST3",
			"projectpath": "",
			"projectfile": "ka_20130609_vorlage_1",
			"format": "image/png",
			"visibleLayers": "",
			"updateInterval": "occasional",
			"responsible": "Staatskanzlei AGI",
			"tags": "SOVOTE TEST",
            "sogistooltip": true,
            "sogistooltipwidth" : "600",
            "sogistooltipheight" : "300"
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
            "sogistooltip": false,
            "sogistooltipwidth" : "",
            "sogistooltipheight" : "300"
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
            "sogistooltip": true,
            "sogistooltipwidth" : "600",
            "sogistooltipheight" : "300"
		}]
    }]
};
