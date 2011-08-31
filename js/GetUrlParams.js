//we need to call this part of the script before initializing the GUI
//because some settings, like the language choice, influence the GUI

var urlParams;
var urlParamsOK = true;
var wmsURI; //URI with map parameter or appended map name (with URL rewriting)
var urlString = "";
var format = "image/png";
var searchtables = null;
var visibleLayers = new Array();

if (document.documentURI) {
	//all browsers except older IE
	urlString = document.documentURI;
}
else {
	//older IEs do not know document.documentURI
	urlString = window.location.href;
}
var urlArray = urlString.split('?');
if (urlArray.length > 1) {
	urlParams = Ext.urlDecode(urlArray[1]);
	var norewrite = serverAndCGI.substr(-3) === "cgi";
	if (norewrite) {
		if (urlParams.map == undefined) {
			alert(errMessageStartupMapParamString[lang]);
			urlParamsOK = false;
		} else {
			wmsURI = serverAndCGI+"?map="+urlParams.map+"&";
		}
	} else {
		//Get map name from base URL (e.g. http://example.com/wms/mapname)
		var urlBaseArray = urlArray[0].split('/');
		var map = urlBaseArray[urlBaseArray.length-1];
/*
		//handle the case where there are additional directories between 
		//base directory and .qgs file
		var slashCtr = 2;
		if (urlBaseArray[urlBaseArray.length-slashCtr] != "wms") {
			map = urlBaseArray[urlBaseArray.length-slashCtr] + "/" + map;
			slashCtr++;
		}
*/
		wmsURI = serverAndCGI+"/"+map+"?";
	}
	if (urlParams.visibleLayers) {
		visibleLayers = urlParams.visibleLayers.split(",");
	}
	else {
		urlParams.visibleLayers = "";
	}
	if (urlParams.format) {
		format = urlParams.format;
	}
	if (typeof lang == "undefined") {
		//if lang is not defined in GlobalOptions.js we set it to "en"
		lang = "en";
	}
	if (urlParams.lang) {
		//check if language is available
		if (availableLanguages[urlParams.lang]) {
			lang = urlParams.lang;
		}
		else {
			alert(errMessageInvalidLanguageCodeString1[lang] + "'" + urlParams.lang + "'\n" + errMessageInvalidLanguageCodeString2[lang] + availableLanguages[lang].names[lang]+".");
		}
	}
	if (urlParams.searchtables) {
		searchtables = urlParams.searchtables;
	}
	if (urlParams.startExtent) {
		//need to check validity of startExtent parameter
		//can be either "project" or corner coordinates in OpenLayers.Bounds format (left, bottom, right, top)
		if (urlParams.startExtent.match(/^\d+,\d+,\d+,\d+$/)) {
			var startExtentParams = urlParams.startExtent.split(",");
			if (parseFloat(startExtentParams[0]) > parseFloat(startExtentParams[2]) || parseFloat(startExtentParams[1]) > parseFloat(startExtentParams[3])) {
				urlParamsOK = false;
			}
		}
		else {
			urlParamsOK = false;
			alert(errMessageExtentParamWrongPart1[lang] + "startExtent" + errMessageExtentParamWrongPart2[lang]);
		}
	}
	if (urlParams.maxExtent) {
		//need to check validity of maxExtent parameter
		//can be either "project" or corner coordinates in OpenLayers.Bounds format (left, bottom, right, top)
		if (urlParams.maxExtent.match(/^\d+,\d+,\d+,\d+$/)) {
			var maxExtentParams = urlParams.maxExtent.split(",");
			if (parseFloat(maxExtentParams[0]) > parseFloat(maxExtentParams[2]) || parseFloat(maxExtentParams[1]) > parseFloat(maxExtentParams[3])) {
				urlParamsOK = false;
			}
		}
		else {
			urlParamsOK = false;
			alert(errMessageExtentParamWrongPart1[lang] + "maxExtent" + errMessageExtentParamWrongPart2[lang]);
		}
	}
}
else {
	urlParamsOK = false;
}
