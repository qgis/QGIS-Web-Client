/*
 *
 * ThemeSwitcher.js -- part of QGIS Web Client
 *
 * Copyright (2010-2012), The QGIS Project All rights reserved.
 * QGIS Web Client is released under a BSD license. Please see
 * https://github.com/qgis/qgis-web-client/blob/master/README
 * for the full text of the license and the list of contributors.
 *
*/ 

//this object handles the theme optional switching
function ThemeSwitcher(parentPanel) {
	this.parentPanel = parentPanel;
	this.themeSwitcherWindow = undefined; //after initialization this will be the main panel of the themeSwitcher
	this.topicsListView = undefined; //will later hold a referemce to the list view holding the topics
	this.projectDataView = undefined; //will later hold a reference to the thumbnails data view
	this.activeTopicIndex = 0; //points to all topics
	this.activeTopicName = ""; //will hold the current topic filter later
	this.titleAndTagFilter = ""; //will hold the current title or tag filter string later
	this.activeProjectData = undefined; //will hold data of currently active project
	
	me = this;
	//create a new jsonstore holding the topic-listing data
	if (gis_projects) {
		//add a new record to json array
		gis_projects.topics.unshift({
			name: themeSwitcherAllThemesListViewString[lang],
			projects: []
		});
		this.gisTopicListingStore = new Ext.data.JsonStore({
			storeId: 'gisTopicListingStore',
			data: gis_projects,
			// reader configs
			root: 'topics',
			idProperty: 'name',
			fields: ['name', 'projects']
		});
		//fill a new array store with all project records
		//will be used to display a table of thumbnails
		var topicCounter = 0;
		var projListingArray = [];
		var mapName = wmsMapName.replace(/\.qgs$/,'');
		for (var i = 0; i < this.gisTopicListingStore.getCount(); i++) {
			var topicRec = this.gisTopicListingStore.getAt(i);
			for (var j = 0; j < topicRec.data.projects.length; j++) {
				var projData = topicRec.data.projects[j];
				projData.topic = topicRec.data.name;
				var tooltip = themeSwitcherTooltipMapThemeString[lang] + projData.name;
				if (projData.tags) {
					tooltip += "\n" + themeSwitcherTooltipTagString[lang] + projData.tags;
				}
				if (projData.responsible) {
					tooltip += "\n" + themeSwitcherTooltipResponsibleString[lang] + projData.responsible;
				}
				if (projData.updateInterval) {
					tooltip += "\n" + themeSwitcherTooltipUpdateString[lang] + projData.updateInterval;
				}
				if (projData.lastUpdate) {
					tooltip += "\n" + themeSwitcherTooltipLastUpdateString[lang] + projData.lastUpdate;
				}
				var pwprotected = "no";
				if (projData.pwProtected) {
					if (projData.pwProtected == "yes") {
						pwprotected = "yes";
						tooltip += "\n\n" + themeSwitcherTooltipPwProtectedString[lang] + ": " + projData.pwMessage;
					}
				}
				var projShowFeatureInfoLayerTitle = showFeatureInfoLayerTitle;
				if (typeof(projData.showFeatureInfoLayerTitle) == "boolean") {
					projShowFeatureInfoLayerTitle = projData.showFeatureInfoLayerTitle;
				}
				projData.showFeatureInfoLayerTitle = projShowFeatureInfoLayerTitle;
				var thumbnail = null;
				if (projData.thumbnail) {
					thumbnail = projData.thumbnail;
				}
				else {
					thumbnail = projData.projectfile + ".png";
				}
				projListingArray.push([topicCounter + '_' + projData.projectfile, projData.name, projData.topic, projData.projectfile, projData.tags, projData.showFeatureInfoLayerTitle, pwprotected, tooltip, thumbnail, projData]);
				//test to see if this record matches current project
				//variable "map" comes from file GetUrlParams.js
				if (projData.projectpath+"/"+projData.projectfile == mapName) {
					this.activeProjectData = projData;
				}
			}
			topicCounter++;
		}
		//create a new json data store holding the project data
		this.gisProjectListingStore = new Ext.data.ArrayStore({
			storeId: 'gisProjectListingStore',
			fields: ['id', 'projname', 'topic', 'projectfile', 'tags', 'showFeatureInfoLayerTitle', 'pwprotected', 'tooltip', 'thumbnail', 'data'],
			idProperty: 'id',
			data: projListingArray
		});
		//add click listener to button
		Ext.getCmp('mapThemeButton').addListener("click", function (myButton, event) {
			me.openOrInitialize();
		});
	} else {
		alert(errMessageGisProjectsJSONStructureMissing[lang]);
		//maybe we need to add some more checks if the datastore contains valid data
	}
}

ThemeSwitcher.prototype.openOrInitialize = function () {
	if (this.themeSwitcherWindow) {
		if (this.themeSwitcherWindow.hidden) {
			this.topicsListView.select(0);
			this.themeSwitcherWindow.show();
		} else {
			this.themeSwitcherWindow.hide();
			this.themeSearchField.reset();
			this.filterThumbnailsByTitleOrTag('');
			this.gisProjectListingStore.clearFilter(false);
			this.topicsListView.clearSelections(false);
		}
	} else {
		this.initialize();
	}
}

ThemeSwitcher.prototype.initialize = function () {
	me = this;
	var template = themeSwitcherTemplate?themeSwitcherTemplate:new Ext.XTemplate('<ul>', '<tpl for=".">', '<li class="project">', '<img width="300" height="200" class="thumbnail" src="thumbnails/{thumbnail}" title="{tooltip}" />', '<tpl if="pwprotected==\'yes\'">', '<img class="pwProtected" src="gis_icons/lockIcon.png" width="32" height="32" />','</tpl>','<strong>{projname}', '<tpl if="pwprotected==\'yes\'">', ' - ' + themeSwitcherTooltipPwProtectedString[lang], '</tpl>', '</strong>', '</li>', '</tpl>', '</ul>');

	//add data view for grid thumbnails view
	this.projectDataView = new Ext.DataView({
		store: this.gisProjectListingStore,
		tpl: template,
		id: 'projects',
		itemSelector: 'li.project',
		overClass: 'projects-hover',
		singleSelect: true,
		multiSelect: false,
		autoScroll: true,
		listeners: {
			'click': {
				fn: this.changeTheme,
				scope: this
			}
		}
	});

	this.themeSwitcherWindow = new Ext.Window({
		title: themeSwitcherWindowTitleString[lang],
		width: this.parentPanel.getInnerWidth() - 10,
		height: this.parentPanel.getInnerHeight() - 10,
		resizable: true,
		closable: true,
		maximizable: true,
		layout: 'border',
        constrain: false,
        constrainHeader: true,
		listeners: {
			"close": function (myWindow) {
				me.themeSearchField.reset();
				me.filterThumbnailsByTitleOrTag('');
				me.gisProjectListingStore.clearFilter(false);
				me.topicsListView.clearSelections(false);
				me.themeSwitcherWindow = undefined;
			}
		},
		x: Ext.getCmp('geoExtMapPanel').getBox().x + 5,
		y: Ext.getCmp('geoExtMapPanel').getBox().y + 5,
		items: [{
			xtype: 'panel',
			region: 'west',
			collapsible: false,
			boxMinWidth: 200,
			boxMaxWidth: 400,
			split: true,
			headerAsText: false,
			id: 'topicsListPanel',
			layout: 'fit',
			items: [{
				xtype: 'listview',
				store: this.gisTopicListingStore,
				multiSelect: false,
				singleSelect: true,
				id: 'mapTopicsListView',
				columns: [{
					width: 1,
					dataIndex: 'name'
				}],
				listeners: {
					"click": function (listView, index, node, evt) {
						me.filterThumbnailsByList(listView, index, node, evt);
					}
				}
			}]
		}, {
			xtype: 'panel',
			region: 'center',
			collapsible: false,
			split: true,
			headerAsText: false,
			layout: 'fit',
			id: 'imagePanel',
			tbar: {
				xtype: 'toolbar',
				autoHeight: true,
				items: [{
					xtype: 'tbtext',
					text: themeSwitcherFilterLabelString[lang]
				}, {
					xtype: 'textfield',
					width: '250',
					id: 'themeSearchField',
					//plugins: new Ext.ux.form.field.ClearButton({hideClearButtonWhenMouseOut: false}),
					//the ClearButton only works with ExtJS4
					emptyText: emptyThemeSearchFieldString[lang],
					enableKeyEvents: true,
					listeners: {
						"keyup": function (textfield, evt) {
							me.filterThumbnailsByTitleOrTag(textfield.getValue());
						}
					}
				}, {
					xtype: 'button',
					icon: 'gis_icons/mActionUndo.png',
					scale: 'medium',
					tooltipType: 'qtip',
					tooltip: resetThemeSearchFieldTooltipString[lang],
					id: 'EmptyThemeSearchField',
					listeners: {
						"click": function (button, evt) {
							Ext.getCmp('themeSearchField').reset();
							me.filterThumbnailsByTitleOrTag('');
						}
					}
				}]
			},
			items: [
			this.projectDataView]
		}]
	});

	this.topicsListView = Ext.getCmp('mapTopicsListView');
	this.topicsListView.select(0);
	this.themeSearchField = Ext.getCmp('themeSearchField');
	this.themeSwitcherWindow.show();
}

ThemeSwitcher.prototype.filterThumbnailsByList = function (listView, index, node, evt) {
	var topicName = listView.getRecord(node).data.name;
	this.activeTopicIndex = index;
	this.activeTopicName = topicName;
	this.filterThumbnails();
}

ThemeSwitcher.prototype.filterThumbnailsByTitleOrTag = function (newValue) {
	this.titleAndTagFilter = newValue;
	this.filterThumbnails();
}

ThemeSwitcher.prototype.filterThumbnails = function (listView, index, node, evt) {
	me = this;
	if (this.activeTopicIndex == 0 && this.titleAndTagFilter.length < 2) {
		this.gisProjectListingStore.clearFilter(false);
	} else {
		this.gisProjectListingStore.filterBy(

		function (record, recid) {
			returnVal = null;
			if (me.titleAndTagFilter.length < 2) {
				if (record.get('topic') == me.activeTopicName) {
					returnVal = record;
				}
			} else {
				var myRegExp = new RegExp(me.titleAndTagFilter, "i");
				var tags = record.get('projname') + record.get('tags');
				if (me.activeTopicIndex > 0) {
					if (record.get('topic') == me.activeTopicName && tags.match(myRegExp)) {
						returnVal = record;
					}
				} else {
					if (tags.match(myRegExp)) {
						returnVal = record;
					}
				}
			}
			return returnVal;
		});
	}
}

//here we actually change the map theme
ThemeSwitcher.prototype.changeTheme = function (dataView, index, node, evt) {
	if (dataView.getSelectedRecords().length > 0) {
		//close legend/metadata window if active
		 if (legendMetadataWindow_active) {
			legendMetadataWindow.close();
		 }
		
		//switch off GetFeatureInfo if active
		if (identifyToolActive) {
			identifyToolWasActive = true;
			Ext.getCmp('IdentifyTool').toggle(false);
		}
		themeChangeActive = true;
		var projData = dataView.getSelectedRecords()[0].data.data;
		this.activeProjectData = projData;
		this.themeSearchField.reset();
		this.filterThumbnailsByTitleOrTag('');
		this.gisProjectListingStore.clearFilter(false);
		this.topicsListView.clearSelections(false);
		this.themeSwitcherWindow.hide();
		layerTree.removeListener("selectionChange",layerTreeSelectionChangeHandlerFunction);
		urlParamsOK = true;
		//concatenate path for webserver and cgi
		wmsURI = '';
		if (projData.mapserver) {
			wmsURI = projData.mapserver;
		} else {
			wmsURI = gis_projects.mapserver;
		}
		if (norewrite) {
			wmsURI += "?map=" + projData.projectpath + "/" + projData.projectfile + ".qgs&";
			wmsMapName = projData.projectpath + "/" + projData.projectfile;
		} else {
			if (projData.projectpath.length > 0) {
				wmsURI += "/" + projData.projectpath + "/" + projData.projectfile + "?";
				wmsMapName = projData.projectpath + "/" + projData.projectfile;
			}
			else {
				wmsURI += "/" + projData.projectfile + "?";
				wmsMapName = projData.projectfile;
			}
		}
		//handle visible layers
		if (projData.visibleLayers) {
			visibleLayers = projData.visibleLayers.split(",");
		} else {
			visibleLayers = [];
		}
		//handle full color layers
		if (projData.fullColorLayers) {
			fullColorLayers = projData.fullColorLayers.split(",");
		} else {
			fullColorLayers = [];
		}
		//handle image format
		if (projData.format) {
			format = projData.format;
		}
		origFormat = format;
		//handle search tables
		if (projData.searchtables) {
			searchtables = projData.searchtables;
		}
		else {
			searchtables = null;
		}
		qgisSearchCombo.searchtables = searchtables;
		qgisSearchCombo.store.baseParams.searchtables = searchtables;
		
		//handle max extent
		if (projData.maxExtent) {
			//need to check validity of maxExtent parameter
			//can be either "project" or corner coordinates in OpenLayers.Bounds format (left, bottom, right, top)
			if (projData.maxExtent.match(olBoundsRegexp)) {
				var maxExtentParams = projData.maxExtent.split(",");
				if (parseFloat(maxExtentParams[0]) > parseFloat(maxExtentParams[2]) || parseFloat(maxExtentParams[1]) > parseFloat(maxExtentParams[3])) {
					urlParamsOK = false;
				}
				else {
					maxExtent = new OpenLayers.Bounds(parseFloat(maxExtentParams[0]), parseFloat(maxExtentParams[1]), parseFloat(maxExtentParams[2]), parseFloat(maxExtentParams[3]));				
				}
			} else {
				urlParamsOK = false;
				alert(errMessageExtentParamWrongPart1[lang] + "maxExtent" + errMessageExtentParamWrongPart2[lang]);
			}
		}
		//set initialLayerOrder to null to avoid that layers from last project are used for the layer order tree
		initialLayerOrder = null;
		//set printLayoutsDefined to false - will be loaded after theme switch
		printLayoutsDefined = false;
		//now load the config of the new project
		if (urlParamsOK) {
			loadWMSConfig(projData.name);
		} else {
			alert(errMessageStartupNotAllParamsFoundString[lang]);
		}
	}
}
