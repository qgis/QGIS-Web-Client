//we need to call this part of the script before initializing the GUI
//because some settings, like the language choice, influence the GUI

var urlParams;
var urlParamsOK = true;
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
	if (urlParams.map == undefined) {
		alert(errMessageStartupMapParamString[lang]);
		urlParamsOK = false;
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
}
else {
	urlParamsOK = false;
}