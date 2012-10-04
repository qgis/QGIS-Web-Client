//we need to call this part of the script before initializing the GUI
//because some settings, like the language choice, influence the GUI

var urlParams = {};
var urlParamsOK = true;
var wmsURI; //URI with map parameter or appended map name (with URL rewriting)
var wmsMapName; // map parameter or appended map name (with URL rewriting)
var urlString = "";
var format = "image/png"; //the default image format
var origFormat = format; //the original default image format, format is temporarily changed
var searchtables = null;
var visibleLayers = null; //layers that are initially visible
var fullColorLayers = new Array(); //layers that should be displayed in 24bit (JPEG) instead of 8bit PNG, only relevant if the project format is 8bit

if (document.documentURI) {
  //all browsers except older IE
  urlString = document.documentURI;
}
else {
  //older IEs do not know document.documentURI
  urlString = window.location.href;
}
var urlArray = urlString.split('?');
//substr did not work on ie - patch from Noda
var norewrite;
if ( serverAndCGI.substr( serverAndCGI.length-3 ,3).toLowerCase() === "cgi" ) {
  norewrite = true ;
} 
else { 
  norewrite = false ; 
}
//patch ends
if (!norewrite) {
  //Get map name from base URL (e.g. http://example.com/maps/mapname)
  var urlBaseArray = urlArray[0].split('/')
  //Remove host and first element of path. http://example.com/maps/subdir/mapname -> subdir/mapname
  var map = urlBaseArray.slice(4).join('/');
  //Search for wms directory suffix (maps-protected -> wms-protected)
  var suffix = '';
  var dashpos = urlBaseArray[3].indexOf('-')
  if (dashpos != -1) {
    suffix = urlBaseArray[3].substr(dashpos);
  }
  wmsURI = serverAndCGI+suffix+"/"+map+"?";
  wmsMapName = map;
}
if (urlArray.length > 1) {
  urlParams = Ext.urlDecode(urlArray[1]);
  if (norewrite) {
    if (urlParams.map == undefined) {
      alert(errMessageStartupMapParamString[lang]);
      urlParamsOK = false;
    } else {
      wmsURI = serverAndCGI+"?map="+urlParams.map+"&";
      wmsMapName = urlParams.map;
    }
  }
  if (urlParams.visibleLayers != null) {
    if (urlParams.visibleLayers == "") {
      visibleLayers = [];
    }
    else {
      visibleLayers = urlParams.visibleLayers.split(",");
    }
  }
  if (urlParams.fullColorLayers != null) {
    if (urlParams.fullColorLayers == "") {
      fullColorLayers = [];
    }
    else {
      fullColorLayers = urlParams.fullColorLayers.split(",");
    }
  }
  if (urlParams.format) {
    format = urlParams.format;
  }
  origFormat = format;
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
  urlParamsOK = !norewrite;
}
