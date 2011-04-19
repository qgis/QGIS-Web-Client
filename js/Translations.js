//list of available languages
var availableLanguages = new Array();
availableLanguages["en"] = {names:[], translator:"Andreas Neumann"}; //a(dot)neumann(at)carto(dot)net
availableLanguages["de"] = {names:[], translator:"Andreas Neumann"}; //a(dot)neumann(at)carto(dot)net

//translations of languages
//english; first language index is fixed, second variable
availableLanguages["en"].names["en"] = "english";
availableLanguages["en"].names["de"] = "Englisch";
//german
availableLanguages["de"].names["en"] = "german";
availableLanguages["de"].names["de"] = "Deutsch";

/***********************
Status messages
***********************/

//map loading string displayed when starting the map application
var mapAppLoadingString = new Array();
mapAppLoadingString["en"] = "Loading map application ...";
mapAppLoadingString["de"] = "Kartenapplikation wird geladen ...";

//indicating that map app was loaded and we are now loading the map
var mapLoadingString = new Array();
mapLoadingString["en"] = "Loading Map ...";
mapLoadingString["de"] = "Karte wird geladen ...";

//mode string for navigation
var modeNavigationString = new Array();
modeNavigationString["en"] = "Mode: navigation. Shift/rectangle or mouse wheel for zooming.";
modeNavigationString["de"] = "Modus: Navigation. Shift/Rechteck aufziehen oder Mausrad zum zoomen.";

//mode string for rectangle zoom
var modeZoomRectangle = new Array();
modeZoomRectangle["en"] = "Mode: zoom with rectangle. Draw rectangle over region you wish to zoom in.";
modeZoomRectangle["de"] = "Modus: Zoom mit Rechteck. Ziehen Sie die gewünschte Region auf.";

//mode string for attribute data detailed
var modeObjectIdentificationString = new Array();
modeObjectIdentificationString["en"] = "Mode: object identification. attribute data view with mouse click.";
modeObjectIdentificationString["de"] = "Modus: Objektidentifikation. Attributdatenabfrage über Mausklick.";

//mode string for map tips (display main attribute with tooltips)
var modeMapTipsString = new Array();
modeMapTipsString["en"] = "Mode: MapTips. Display on mouse over with Tooltips.";
modeMapTipsString["de"] = "Modus: MapTips. Anzeige mit Mouseover über tooltips.";

//mode measure distance
var modeMeasureDistanceString = new Array();
modeMeasureDistanceString["en"] = "Mode: measure distance. Finish with double click.";
modeMeasureDistanceString["de"] = "Modus: Distanzmessung. Beenden mit Doppelklick.";

//mode measure area
var modeMeasureAreaString = new Array();
modeMeasureAreaString["en"] = "Mode: measure area. Finish with double click.";
modeMeasureAreaString["de"] = "Modus: Flächenmessung. Beenden mit Doppelklick.";

//mode printing
var modePrintingString = new Array();
modePrintingString["en"] = "Mode: printing. Move or rotate the map extent. Print with the 'Print'-Button.";
modePrintingString["de"] = "Modus: Drucken. Verschieben oder Rotieren Sie den Kartenausschnitt. Drucken mit 'Drucken'-Knopf.";


/***********************
GUI stuff
***********************/

//title of panel on the left
var leftPanelTitleString = new Array();
leftPanelTitleString["en"] = "Info and Tools";
leftPanelTitleString["de"] = "Infos und Werkzeuge";

//title of map layer tree
var layerTreeTitleString = new Array();
layerTreeTitleString["en"] = "Map Layers";
layerTreeTitleString["de"] = "Kartenebenen";

//title of legend tab
var legendTabTitleString = new Array();
legendTabTitleString["en"] = "Legend";
legendTabTitleString["de"] = "Legende";

//title of metadata tab
var metadataTabTitleString = new Array();
metadataTabTitleString["en"] = "Metadata";
metadataTabTitleString["de"] = "Metadaten";

//label in main toolbar for object identification
var objectIdentificationTextLabel = new Array();
objectIdentificationTextLabel["en"] = "Object identification: ";
objectIdentificationTextLabel["de"] = "Objektdentifikation: ";

//Coordinate text label (coordinate display in bottom toolbar of main map window)
var coordinateTextLabel = new Array();
coordinateTextLabel["en"] = "Coordinate:";
coordinateTextLabel["de"] = "Koordinate:";

//title of attribute data tree
var attributeDataTreeTitleString = new Array();
attributeDataTreeTitleString["en"] = "Attribute Data";
attributeDataTreeTitleString["de"] = "Attributdaten";

//
var attributeFeatureWithString = new Array();
attributeFeatureWithString["en"] = "Feature with ID:";
attributeFeatureWithString["de"] = "Feature mit ID:";

//search 
var searchFieldDefaultTextString = new Array();
searchFieldDefaultTextString["en"] = "Search (addresses, parcel-nrs, names, etc.)";
searchFieldDefaultTextString["de"] = "Suche (Adressen, Parzellenr, Flurnamen, etc.)";

//map tips no result
var mapTipsNoResultString = new Array();
mapTipsNoResultString["en"] = "No Result";
mapTipsNoResultString["de"] = "Kein Resultat";

//print settings toolbar title
var printSettingsToolbarTitleString = new Array();
printSettingsToolbarTitleString["en"] = "Print Settings";
printSettingsToolbarTitleString["de"] = "Druckeinstellungen";

//print rotation text label
var printSettingsRotationTextlabelString = new Array();
printSettingsRotationTextlabelString["en"] = "Rotation: ";
printSettingsRotationTextlabelString["de"] = "Rotation: ";

//print button text
var printButtonTextString = new Array();
printButtonTextString["en"] = "Print";
printButtonTextString["de"] = "Drucken";

//print cancel button text
var printCancelButtonTextString = new Array();
printCancelButtonTextString["en"] = "Cancel";
printCancelButtonTextString["de"] = "Abbrechen";

//objectIdentificationModeStrings
var objectIdentificationModeString = new Array();
objectIdentificationModeString["topMostHit"] = new Array();
objectIdentificationModeString["topMostHit"]["en"] = "Topmost hit";
objectIdentificationModeString["topMostHit"]["de"] = "Oberster Treffer";

objectIdentificationModeString["allLayers"] = new Array();
objectIdentificationModeString["allLayers"]["en"] = "All layers";
objectIdentificationModeString["allLayers"]["de"] = "Alle Ebenen";

objectIdentificationModeString["activeLayers"] = new Array();
objectIdentificationModeString["activeLayers"]["en"] = "Active Layer";
objectIdentificationModeString["activeLayers"]["de"] = "Aktive Ebene";

//measure distance result prefix
var measureDistanceResultPrefixString = new Array();
measureDistanceResultPrefixString["en"] = "Distance";
measureDistanceResultPrefixString["de"] = "Distanz";

//distance prefix for result:
var measureAreaResultPrefixString = new Array();
measureAreaResultPrefixString["en"] = "Area";
measureAreaResultPrefixString["de"] = "Fläche";


/***********************
Tooltips
***********************/

//zoom rectangle tooltip
var zoomRectangleTooltipString = new Array();
zoomRectangleTooltipString["en"] = "Zoom with rectangle";
zoomRectangleTooltipString["de"] = "Zoom Rechteck aufziehen";

//zoom to full view
var zoomFullViewTooltipString = new Array();
zoomFullViewTooltipString["en"] = "Zoom to the maximum map extent";
zoomFullViewTooltipString["de"] = "Zoom zum maximalen Kartenausschnitt";

//navigation history backward
var navigationHistoryBackwardTooltipString = new Array();
navigationHistoryBackwardTooltipString["en"] = "Navigation history backward";
navigationHistoryBackwardTooltipString["de"] = "Navigationshistorie zurück";

//navigation history forward
var navigationHistoryForwardTooltipString = new Array();
navigationHistoryForwardTooltipString["en"] = "Navigation history forward";
navigationHistoryForwardTooltipString["de"] = "Navigationshistorie vorwärts";

//discrete zoom in button above zoom slider
var zoomInTooltipString = new Array();
zoomInTooltipString["en"] = "Zoom in (discrete step)";
zoomInTooltipString["de"] = "Einzoomen (eine Stufe)";

//discrete zoom in button above zoom slider
var zoomOutTooltipString = new Array();
zoomOutTooltipString["en"] = "Zoom out (discrete step)";
zoomOutTooltipString["de"] = "Rauszoomen (eine Stufe)";

//object identification tooltip
var objIdentificationTooltipString = new Array();
objIdentificationTooltipString["en"] = "Object identification (attribute data)";
objIdentificationTooltipString["de"] = "Objektidentifizierung (Attributdaten)";

//MapTips tooltip
var mapTipsTooltipString = new Array();
mapTipsTooltipString["en"] = 'Display MapTips (attribute data)';
mapTipsTooltipString["de"] = 'MapTips anzeigen (Attributdaten)';

//Measure Distance
var measureDistanceTooltipString = new Array();
measureDistanceTooltipString["en"] = "Measure distance";
measureDistanceTooltipString["de"] = "Distanz messen";

//Measure Area
var measureAreaTooltipString = new Array();
measureAreaTooltipString["en"] = "Measure area";
measureAreaTooltipString["de"] = "Fläche messen";

//Print Map
var printMapTooltipString = new Array();
printMapTooltipString["en"] = "Print Map";
printMapTooltipString["de"] = "Karte drucken";

//Reset Search Field
var resetSearchFieldTooltipString = new Array();
resetSearchFieldTooltipString["en"] = "Reset/empty Searchfield";
resetSearchFieldTooltipString["de"] = "Suchfeld zurücksetzen";

//print window title
var printWindowTitleString = new Array();
printWindowTitleString["en"] = "The server is generating a PDF file. For correct up to scale printing please deactivate the option 'Fit to Page'!";
printWindowTitleString["de"] = "PDF wird vom Server generiert. Für massstäbliches Drucken deaktivieren Sie bitte das 'Anpassen der Seitengrösse'!";

//print object data alternative string in case no pdf plugin is present in browser
//attention: single quotes around string, partially html formatting
var printingObjectDataAlternativeString1 = new Array();
printingObjectDataAlternativeString1["en"] = 'It looks like your browser cannot open PDF files directly. Not a big problem -you can <a href="';
printingObjectDataAlternativeString1["de"] = 'Es sieht so aus als ob Ihr Browser kein PDF Plugin unterstützt. Kein Problem, Sie können die <a href="';

//the second part of the string after the URL
//attention: single quotes around string, partially html formatting
var printingObjectDataAlternativeString2 = new Array();
printingObjectDataAlternativeString2["en"] = '">download the PDF file here.</a>.</p></object>';
printingObjectDataAlternativeString2["de"] = '">PDF-Datei hier herunterladen</a>.</p></object>';

//print button tooltip
var printButtonTooltipString = new Array();
printButtonTooltipString["en"] = "Print (Generate PDF)";
printButtonTooltipString["de"] = "Drucken (PDF generieren)";

//print cancel button tooltip
var printCancelButtonTooltipString = new Array();
printCancelButtonTooltipString["en"] = "Cancel Print (Close)";
printCancelButtonTooltipString["de"] = "Druck abbrechen (Schliesen)";


/***********************
Error Messages
***********************/

//error messages on startup
var errMessageStartupMapParamString = new Array();
errMessageStartupMapParamString["en"] = "Startup-Parameter 'map' missing!";
errMessageStartupMapParamString["de"] = "Start-Parameter 'map' fehlt!";

//additional startup error message
var errMessageStartupNotAllParamsFoundString = new Array();
errMessageStartupNotAllParamsFoundString["en"] = "Some mandatory startup paramaters are missing";
errMessageStartupNotAllParamsFoundString["de"] = "Es wurden nicht alle notwendigen Web-GIS-Parameter gefunden.";

//error message invalid language code, part 1
var errMessageInvalidLanguageCodeString1 = new Array();
errMessageInvalidLanguageCodeString1["en"] = "Invalid language code provided: ";
errMessageInvalidLanguageCodeString1["de"] = "Falscher Sprachparameter übergeben: ";

//error message invalid language code, part 2
var errMessageInvalidLanguageCodeString2 = new Array();
errMessageInvalidLanguageCodeString2["en"] = "Switching back to default language ";
errMessageInvalidLanguageCodeString2["de"] = "Wechsle zurück zur Standardsprache ";

//error message of search combo network request title
var errMessageSearchComboNetworkRequestFailureTitleString = new Array();
errMessageSearchComboNetworkRequestFailureTitleString["en"] = "Network request failed";
errMessageSearchComboNetworkRequestFailureTitleString["de"] = "Netzwerk-Request fehlgeschlagen";

//error message of search combo network request detailed message - don not forget the \n at the end of the string!
var errMessageSearchComboNetworkRequestFailureString = new Array();
errMessageSearchComboNetworkRequestFailureString["en"] = "Network request for the geometry of the search result failed.\n";
errMessageSearchComboNetworkRequestFailureString["de"] = "Netzwerk-Request für Geometrie des gesuchten Objekts fehlgeschlagen:\n";

