Ext.onReady(function () {
	// Define header menu. Can be nested one level deep.
	var sogis_menu = [
		{'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis.html', 'title': 'SO!GIS', 'class': 'sogis-aktiv', 'target':'_blank', 'submenu' : [
			{'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/leitbild.html', 'title': 'Leitbild', 'target':'_blank'},
			{'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/open-source-gis.html', 'title': 'Open Source GIS', 'target':'_blank'},
			{'url': 'http://www.so.ch/departemente/bau-und-justiz/amt-fuer-geoinformation.html', 'title': 'Amt f&uuml;r Geoinformation', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis.html', 'title': 'SO!GIS', 'target':'_blank'}
		]},
		{'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/interaktive-karten.html', 'title': 'Weitere Karten', 'target':'_blank', 'submenu' : [
            {'url': 'javascript:provLayerSwitcher(\'ortsplan\');', 'title': 'Ortsplan', 'target':''},
            {'url': 'javascript:provLayerSwitcher(\'nutzungszonen\');', 'title': 'Nutzungszonen', 'target':''},
            {'url': 'javascript:provLayerSwitcher(\'gemeindegis\');', 'title': 'Gemeindegis', 'target':''},
            {'url': 'javascript:provLayerSwitcher(\'grundbuch\');', 'title': 'Grundbuch', 'target':''},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/interaktive-karten.html', 'title': 'Noch mehr Karten', 'target':'_blank'}
        ]},
        {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/sogis-daten.html', 'title': 'Datenbezug', 'target':'_blank', 'submenu' : [
            {'url': 'http://www.sogis1.so.ch/sogis/OnLineData/php/index.php', 'title': 'Online Bezug', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/sogis-daten/sogis-downloads.html', 'title': 'Übersichtskarten', 'target':'_blank'},
            {'url': 'http://www.sogis1.so.ch/sogis/OnLineData/php/datenbeschreibung_auswahl.php', 'title': 'Datenbeschreibung', 'target':'_blank'}
            
        ]},
        {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms.html', 'title': 'WMS', 'target':'_blank', 'submenu' : [
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-geologie.html', 'title': 'WMS Geologie', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-gewaesser.html', 'title': 'WMS Gewässer', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-naturgefahren.html', 'title': 'WMS Naturgefahren', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-oekomorphologie.html', 'title': 'WMS Ökomorphologie', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-richtplankarte.html', 'title': 'WMS Richtplankarte', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-verkehr.html', 'title': 'WMS Verkehr', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-relief-und-wanderwege.html', 'title': 'WMS Wanderwege', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-ortsplan.html', 'title': 'WMS Ortsplan', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-plan-der-amtlichen-vermessung.html', 'title': 'WMS Plan der AV', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-uebersichtsplan.html', 'title': 'WMS Übersichtsplan', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-strassenkarte.html', 'title': 'WMS Strassenkarte', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-orthofoto.html', 'title': 'WMS Orthofoto', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/wms-dtm-dom.html', 'title': 'WMS DTM/DOM', 'target':'_blank'},
            {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/web-map-services-wms/av-wms.html', 'title': 'AV WMS', 'target':'_blank'}
            
            
        ]},
	  {'url': 'http://www.so.ch/departemente/bau-und-justiz/sogis/rechtliche-hinweise.html', 'title': 'Rechtliche Hinweise', 'target':'_blank'}

	
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

	Ext.get("ext-gen20").addClass('sogis-header').insertHtml('beforeEnd', '<div class="sogis-headernav">'+getMenuString(sogis_menu)+'</div>');
	Ext.get("ext-gen23").addClass('sogis-header-text').insertHtml('afterEnd', '<a href="http://www.so.ch/" class="sogis-header-logo" />');
	Ext.getCmp('GisBrowserPanel').setHeight(window.innerHeight);
    
    
    

});

function provLayerSwitcher(strMapName){
    
    var left = Math.round(geoExtMap.map.getExtent().left);
    var right = Math.round(geoExtMap.map.getExtent().right);
    var top = Math.round(geoExtMap.map.getExtent().top);
    var bottom = Math.round(geoExtMap.map.getExtent().bottom);
    var scale = Math.round(geoExtMap.map.getScale());
    
    switch(strMapName){
        case 'ortsplan':
            window.location = './ortsplan?startExtent='+left+','+bottom+','+right+','+top+'&visibleLayers=Gemeindegrenzen,Ortsplan';
            break;
        case 'nutzungszonen':
            window.location = './nutzungszonen?startExtent='+left+','+bottom+','+right+','+top+'&visibleLayers=Gemeindegrenzen,Nutzungszonen,Orthofoto';
            break;
        case 'gemeindegis':
            window.location = './gemeindegis?startExtent='+left+','+bottom+','+right+','+top+'&visibleLayers=Amtliche%20Vermessung,Wasser,Abwasser';
            //window.location='./gemeindegis?startExtent=615200,257000,618400,260750&visibleLayers=Amtliche%20Vermessung,Wasser,Abwasser';
            break;
        case 'grundbuch':
            window.open('http://www.sogis1.so.ch/sogis/internet/pmapper/somap.php?karte=grundbuch&extent='+left+','+bottom+','+right+','+top,'_new_tab');
            break;
        default:
            // do nothing
            
    }
}
