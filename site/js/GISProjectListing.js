var gis_projects = {
	"path": "/site",
	"mapserver": "/cgi-bin/qgis_mapserv.fcgi",
	"thumbnails": "/thumbnails",
	"title": "QGIS Mapserver demo",
	"topics": [{
		"name": "QGIS Server Hello World",
		"projects": [{
			"name": "QGIS Server Hello World", //name needs to correspond with the project title (Project Properties --> General --> Project Title)
			"projectpath": "/home/web/qgis-web-client/projects",
			"projectfile": "helloworld",
			"thumbnail": "helloworld.png",
			"format": "image/png",
			"visibleLayers": "Country,Hello",
/*
			// optional WMTS base layers (when using enableWmtsBaseLayers), omit or set null for none
			"wmtsLayers": [
				{
					// this WMS layer will be used for printing, feature info, legend and metadata
					"wmsLayerName": "Country",
					// WMTS base layer config
					"wmtsConfig": {
						"name": "OpenGeo Countries",
						"url": "http://v2.suite.opengeo.org/geoserver/gwc/service/wmts/",
						"layer": "opengeo:countries",
						"matrixSet": "EPSG:900913",
						"matrixIds": ["EPSG:900913:0", "EPSG:900913:1", "EPSG:900913:2", "EPSG:900913:3", "EPSG:900913:4", "EPSG:900913:5", "EPSG:900913:6", "EPSG:900913:7", "EPSG:900913:8", "EPSG:900913:9", "EPSG:900913:10", "EPSG:900913:11", "EPSG:900913:12", "EPSG:900913:13", "EPSG:900913:14", "EPSG:900913:15", "EPSG:900913:16", "EPSG:900913:17", "EPSG:900913:18", "EPSG:900913:19", "EPSG:900913:20", "EPSG:900913:21", "EPSG:900913:22", "EPSG:900913:23", "EPSG:900913:24", "EPSG:900913:25"],
						"format": "image/png",
						"style": "_null",
						"opacity": 0.7
					}
				}
			],
*/
			"updateInterval": "occasional",
			"responsible": "The QGIS project",
			"showFeatureInfoLayerTitle": false,
			"tags": "Hello World,beginner project"
		}]
	},{
		"name": "Natural Earth",
		"projects": [{
			"name": "Natural Earth View", //name needs to correspond with the project title (Project Properties --> General --> Project Title)
			"projectpath": "/home/web/qgis-web-client/projects",
			"projectfile": "naturalearth_110million",
			"format": "image/png; mode=8bit",
			"visibleLayers": "Land,Lakes,Glaciated Areas,Rivers,Shaded Relief",
			"opacities": {"Glaciated Areas":90,"Land":253},
			"updateInterval": "occasional",
			"responsible": "The QGIS project",
			"tags": "Natural Earth,Physical Earth Map"
		}]
	}]
};
