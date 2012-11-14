var gis_projects = {
	"path": "/mapsdev",
	"mapserver": "/wms",
	"thumbnails": "/webgis/thumbnails",
	"title": "Webgis-Uster",
	"topic": [{
		"name": "Amtliche Vermessung und Basispläne",
		"project": [{
			"name": "Grundplan Amtliche Vermessung mit Abstandslinien (schwarz/weiss)",
			"projectpath": "av",
			"projectfile": "grundplan_av",
			"format": "image/png; mode=8bit",
			"visibleLayers": "Abstandslinien,Nomenklatur,Fixpunkte,Gebäude,Grenzen,Einzelobjekte,Rohrleitungen,Bodenbedeckung,Liegenschaften Fläche,Einzelobjekte Unterstände,Einzelobjekte Unterirdische Gebäude",
			"fullColorLayers": "Orthofoto aktuell (2010)",
			"updateInterval": "wöchentlich",
			"responsible": "Stadt Uster, Stadtvermessung",
			"startExtent": "692000,241500,700100,249000",
			"maxExtent": "692000,241500,700100,249000",
			"tags": "Basisplan,Grundkarte,Grundplan,Vermessung"
		}, {
			"name": "Grundplan Amtliche Vermessung mit Abstandslinien (farbig)",
			"projectpath": "av",
			"projectfile": "grundplan_av_farbig",
			"format": "image/png; mode=8bit",
			"visibleLayers": "Abstandslinien,Nomenklatur,Fixpunkte,Gebäude,Grenzen,Einzelobjekte,Rohrleitungen,Bodenbedeckung,Liegenschaften Fläche,Einzelobjekte Unterstände,Einzelobjekte Unterirdische Gebäude,Bodenbedeckung Fläche detailliert,Bodenbedeckung Fläche grob",
			"fullColorLayers": "Orthofoto aktuell (2010)",
			"updateInterval": "wöchentlich",
			"responsible": "Stadt Uster, Stadtvermessung",
			"startExtent": "692000,241500,700100,249000",
// 			"maxExtent": "692000,241500,700100,249000",
			"tags": "Basisplan,Grundkarte,Grundplan,Vermessung"
		}, {
			"name": "Orthofotos und Übersichtspläne (inkl. historische)",
			"projectpath": "orthofotos_und_uep",
			"projectfile": "orthofotos_und_uep",
			"format": "image/jpeg",
			"visibleLayers": "Gemeindegrenze,Orthofoto 2010 (25cm)",
			"updateInterval": "Orthofotos: gelegentlich (ca. alle 2-4 Jahre), Übersichtspläne: derzeit alle 3 Jahre",
			"responsible": "Orthofotos: Swisstopo, Osterwalder/Lehmann; Übersichtspläne: ARE Kanton Zürich und Stadt Uster",
			"startExtent": "692000,241500,700100,249000",
			"maxExtent": "692000,241500,700100,249000",
			"tags": "Luftbilder, Orthobilder, Orthofotos, Historische Karten, Alte Karten"
		}, {
			"name": "Administrative Grenzen (Quartiere, Postkreise, Zivilgemeinden)",
			"projectpath": "admin",
			"projectfile": "administrative_grenzen",
			"format": "image/jpeg",
			"visibleLayers": "Gemeindegrenze,Quartiervereine,Pixelkarten und Übersichtspläne",
			"updateInterval": "gelegentlich bei Bedarf",
			"responsible": "Stadt Uster Vermessung und Präsidiales",
			"startExtent": "692000,241500,700100,249000",
			"maxExtent": "692000,241500,700100,249000",
			"tags:": "Grenzen, Administration, Quartiere, Postkreise, Zivilgemeinden"
		}, {
			"name": "Grundplan Amtliche Vermessung mit Eigentum (schwarz/weiss)",
			"path": "/maps-eigentum",
			"mapserver": "/wms-eigentum",
			"projectpath": "av",
			"projectfile": "grundplan_av_mit_eigentum",
			"format": "image/png; mode=8bit",
			"visibleLayers": "Abstandslinien,Nomenklatur,Fixpunkte,Gebäude,Grenzen,Einzelobjekte,Rohrleitungen,Bodenbedeckung,Liegenschaften Fläche,Einzelobjekte Unterstände,Einzelobjekte Unterirdische Gebäude",
			"fullColorLayers": "Orthofoto aktuell (2010)",
			"updateInterval": "wöchentlich",
			"responsible": "Stadt Uster, Stadtvermessung",
			"pwProtected": "yes",
			"pwMessage": "Berechtigte Nutzer können über die Email gis@stadt-uster.ch oder Tel. 044-944 72 66 einen Zugang beantragen.",
			"startExtent": "692000,241500,700100,249000",
			"maxExtent": "692000,241500,700100,249000",
			"tags": "Eigentum,Liegenschaften,Basisplan,Grundkarte,Grundplan,Vermessung"
		}]
	}, {
		"name": "Raumplanung",
		"project": [{
			"name": "Zonenplan",
			"projectpath": "raumplanung",
			"projectfile": "zonenplan",
			"format": "image/jpeg",
			"visibleLayers": "Gestaltungspläne Beschriftung,Baumschutz Einzelbäume,Baumschutz Flächen,Gemeindegrenze,Sondernutzungen,Sondernutzungen Bauzonen mit Gestaltungsplanpflicht,Differenzierte Lärmempfindlichkeitsstufe,Nutzungszonen,Hintergrundkarte (Pixelkarten/Übersichtsplan)",
			"updateInterval": "gelegentlich, ca. 1 x jährlich",
			"responsible": "Stadt Uster, Stadtraum und Natur",
			"startExtent": "692000,241500,700100,249000",
			"maxExtent": "692000,241500,700100,249000",
			"tags": "Zonenplan,Raumplanung,Nutzungszonen,Lärmempfindlichkeitsstufen,Baumschutz,Gestaltungsplangrenzen"
		}]
	}, {
		"name": "Hydrologie und Grundwasser",
		"project": [{
			"name": "Gewässerplan",
			"projectpath": "gewaesserplan",
			"projectfile": "gewaesserplan",
			"format": "image/png;mode=8bit",
			"visibleLayers": "Gewässerachsen,Gemeindegrenze,Pixelkarten und Übersichtsplan",
			"updateInterval": "gelegentlich",
			"lastUpdate": "2012-11-12",
			"responsible": "Stadt Uster, Vermessung; Kanton Zürich, AWEL",
			"startExtent": "692000,241500,700100,249000",
			"maxExtent": "692000,241500,700100,249000",
			"tags": "Gewässer,Gewässerplan,Hydrologie,Bäche,Flüsse,Gewässerachsen"
		}]
	}, {
		"name": "Infrastruktur",
		"project": [{
			"name": "Abfallentsorgung",
			"projectpath": "abfall",
			"projectfile": "abfallentsorgung",
			"format": "image/jpeg",
			"visibleLayers": "Gemeindegrenze,Quartiere,Altstoffsammelstellen,Abfallbehälter,Strassen nach Entsorgungsgebieten,Eisenbahn,Autobahn,Abfallentsorgungskreise,Pixelkarten und Übersichtsplan",
			"updateInterval": "gelegentlich",
			"responsible": "Stadt Uster, Abfall und Umwelt",
			"startExtent": "692000,241500,700100,249000",
			"maxExtent": "692000,241500,700100,249000",
			"tags": "Abfall, Entsorgung, Abfalleimer, Altstoffsammelstellen, Robidog"
		}, {
			"name": "Öffentliche WC-Anlagen",
			"projectpath": "stadtentwaesserung",
			"projectfile": "wc_anlagen",
			"format": "image/jpeg",
			"visibleLayers": "WC-Anlagen,Gemeindegrenze,Pixelkarten und Übersichtsplan",
			"updateInterval": "gelegentlich",
			"responsible": "Stadt Uster, Stadtentwaesserung",
			"startExtent": "692000,241500,700100,249000",
			"maxExtent": "692000,241500,700100,249000",
			"tags": "WC, WC-Anlagen, Toiletten, Öffentliche Toiletten"
		}]
	}, {
		"name": "Werkpläne und Leitungskataster",
		"project": [{
			"name": "Leitungskataster",
			"path": "/maps-leitungskataster",
			"mapserver": "/wms-leitungskataster",
			"projectpath": "leitungskataster",
			"projectfile": "leitungskataster",
			"format": "image/png; mode=8bit",
			"visibleLayers": "Swisscom,Gas,Wasser,Elektro,Abwasser,Nomenklatur,Gebäude,Grenzen,Einzelobjekte,Rohrleitungen,Bodenbedeckung,Liegenschaften Fläche,Einzelobjekte Unterstände,Einzelobjekte Unterirdische Gebäude",
			"fullColorLayers": "Orthofoto 2010 (25cm),Orthofoto 2008 (10cm)",
			"searchtables": "abwasser.suchtabelle",
			"updateInterval": "Abwasser: täglich, Energie Uster (Gas/Wasser/Elektro): 2-monatlich, EKZ (Elektro Sulzbach/Freudwil): jährlich, Swisscom: halbjährlich",
			"responsible": "Stadt Uster, Stadtentwässerung Uster; Energie Uster AG; EKZ; Swisscom",
			"pwProtected": "yes",
			"pwMessage": "Planungsbüros und Architekten können über die Email gis@stadt-uster.ch oder Tel. 044-944 72 66 einen Zugang beantragen. Ein Zugang für Privatpersonen ist im Moment nicht vorgesehen.",
			"startExtent": "692000,241500,700100, 249000",
			"maxExtent": "692000,241500,700100,249000",
			"tags": "Leitungen, Leitungskataster, Gas, Wasser, Elektro, Abwasser, Telekom, Telefon, Fernwärme"
		}, {
			"name": "Werkplan Abwasser",
			"path": "/maps-abwasser",
			"mapserver": "/wms-abwasser",
			"projectpath": "liegenschaftsentwaesserung",
			"projectfile": "abwasser_werkplan",
			"format": "image/png; mode=8bit",
			"visibleLayers": "Nomenklatur,Fixpunkte,Gebäude,Grenzen,Einzelobjekte,Rohrleitungen,Bodenbedeckung,Liegenschaften Fläche,Einzelobjekte Unterstände,Einzelobjekte Unterirdische Gebäude,Gewässer (AV),Werkplan",
			"fullColorLayers": "Orthofoto 2010 (25cm),Orthofoto 2008 (10cm)",
			"searchtables": "abwasser.suchtabelle",
			"updateInterval": "täglich",
			"responsible": "Stadt Uster, Stadtentwässerung Uster",
			"pwProtected": "yes",
			"pwMessage": "Planungsbüros und Architekten können über die Email gis@stadt-uster.ch oder Tel. 044-944 72 66 einen Zugang beantragen. Ein Zugang für Privatpersonen ist im Moment nicht vorgesehen.",
			"startExtent": "692000,241500,700100,249000",
			"maxExtent": "692000,241500,700100,249000",
			"tags": "Werkplan Abwasser, Kanalisation"
		}]
	}]
};
