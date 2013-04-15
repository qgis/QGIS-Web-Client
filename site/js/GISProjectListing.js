var gis_projects = {
	"path": "/map",
	"mapserver": "/cgi-bin/qgis_mapserv.fcgi",
	"thumbnails": "/thumbnails",
	"title": "QGIS Mapserver demo",
	"topic": [{
		"name": "QGIS Hello World",
		"project": [{
			"name": "QGIS Hello World",
			"projectpath": "/home/web/qgis-web-client/projects",
			"projectfile": "helloworld",
			"format": "image/png",
			"visibleLayers": "Country,Hello",
			"updateInterval": "occasional",
			"responsible": "The QGIS project",
			"tags": "Hello World, beginner project"
		}]
	},{
		"name": "Natural Earth",
		"project": [{
			"name": "Physical Geography (Natural Earth)",
			"projectpath": "/home/web/qgis-web-client/projects",
			"projectfile": "naturalearth_110million",
			"format": "image/png; mode=8bit",
			"visibleLayers": "Ocean,Land,Lakes,Glaciated Areas,Rivers,Geographic Features",
			"updateInterval": "occasional",
			"responsible": "The QGIS project",
			"tags": "Natural Earth,Physical Earth Map"
		}]	
	}]
};
