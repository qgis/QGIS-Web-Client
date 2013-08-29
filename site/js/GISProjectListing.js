var gis_projects = {
	"path": "/site",
	"mapserver": "/cgi-bin/qgis_mapserv.fcgi",
	"thumbnails": "/thumbnails",
	"title": "QGIS Mapserver demo",
	"topics": [{
		"name": "QGIS Server Hello World",
		"projects": [{
			"name": "QGIS Server Hello World", //name needs to correspond with the project title (Project Properties --> General --> Project Title)
			"projectpath": "/var/www/qgis-web-client/projects",
			"projectfile": "helloworld",
			"format": "image/png",
			"visibleLayers": "Country,Hello",
			"updateInterval": "occasional",
			"responsible": "The QGIS project",
			"tags": "Hello World, beginner project"
		}]
	},{
		"name": "Natural Earth",
		"projects": [{
			"name": "Natural Earth View", //name needs to correspond with the project title (Project Properties --> General --> Project Title)
			"projectpath": "/var/www/qgis-web-client/projects",
			"projectfile": "naturalearth_110million",
			"format": "image/png; mode=8bit",
			"visibleLayers": "Ocean,Land,Lakes,Glaciated Areas,Rivers,Geographic Features",
			"opacities": {"Glaciated Areas":90,"Land":253},
			"updateInterval": "occasional",
			"responsible": "The QGIS project",
			"tags": "Natural Earth,Physical Earth Map"
		}]	
	},{
		"name": "QGIS Server Hello World",
		"projects": [{
			"name": "Natural Earth View", //name needs to correspond with the project title (Project Properties --> General --> Project Title)
			"projectpath": "/var/www/qgis-web-client/projects",
			"projectfile": "test",
			"format": "image/png; mode=8bit",
			"visibleLayers": "Bing maps",
			"updateInterval": "occasional",
			"responsible": "The QGIS project",
			"tags": "WMS layer example"
		}]	
	}]
};
