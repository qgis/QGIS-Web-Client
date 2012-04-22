//list of available languages
var availableLanguages = new Array();
availableLanguages["en"] = {names:[], translator:"Andreas Neumann"}; //a(dot)neumann(at)carto(dot)net
availableLanguages["es"] = {names:[], translator:"Samuel Mesa"}; // samuelmesa (at) gmail (dot) com
availableLanguages["de"] = {names:[], translator:"Andreas Neumann"}; //a(dot)neumann(at)carto(dot)net
availableLanguages["fr"] = {names:[], translator:"Mayeul Kauffmann"}; //mayeul(_dot_)kauffmann(at)free(dot)fr
availableLanguages["it"] = {names:[], translator:"Paolo Cavallini, Faunalia"}; //cavallini(at)faunalia(dot)it
availableLanguages["pt_PT"] = {names:[], translator:"Nelson Silva"}; //nelson(dot)jgs(at)gmail(dot)com>
availableLanguages["uk"] = {names:[], translator:"Pavlo Taranov"}; //taranov(dot)pavel(at)gmail(dot)com>

//translations of languages
// first language index is fixed, second variable
// The string is the name of the first language translated in the second language.
//English; 
availableLanguages["en"].names["en"] = "English";
availableLanguages["en"].names["de"] = "Englisch";
availableLanguages["en"].names["es"] = "Ingl&eacute;s"; //FIXME
availableLanguages["en"].names["fr"] = "Anglais";
availableLanguages["en"].names["it"] = "Inglese";
availableLanguages["en"].names["pt_PT"] = "Inglês";
availableLanguages["en"].names["uk"] = "Англійська";

//German
availableLanguages["de"].names["en"] = "German";
availableLanguages["de"].names["de"] = "Deutsch";
availableLanguages["de"].names["es"] = "Alem&aacute;n"; //FIXME
availableLanguages["de"].names["fr"] = "Allemand";
availableLanguages["de"].names["it"] = "Tedesco";
availableLanguages["de"].names["pt_PT"] = "Alem&atilde;o"; //FIXME
availableLanguages["de"].names["uk"] = "Німецька";

//French
availableLanguages["fr"].names["en"] = "French";
availableLanguages["fr"].names["de"] = "Französisch";
availableLanguages["fr"].names["es"] = "Franc&eacute;s"; //FIXME
availableLanguages["fr"].names["fr"] = "Fran&ccedil;ais"; //FIXME
availableLanguages["fr"].names["it"] = "Francese";
availableLanguages["fr"].names["pt_PT"] = "Francês";
availableLanguages["fr"].names["uk"] = "Французька";

//Italian
availableLanguages["it"].names["en"] = "Italian";
availableLanguages["it"].names["de"] = "Italienisch";
availableLanguages["it"].names["es"] = "Ingl&eacute;s"; //FIXME
availableLanguages["it"].names["fr"] = "Italien";
availableLanguages["it"].names["it"] = "Italiano";
availableLanguages["it"].names["pt_PT"] = "Italiano";
availableLanguages["it"].names["uk"] = "Італійська";

//Portuguese
availableLanguages["pt_PT"].names["en"] = "Portuguese";
availableLanguages["pt_PT"].names["de"] = "Portugiesisch";
availableLanguages["pt_PT"].names["es"] = "Portugu&eacute;s"; //FIXME
availableLanguages["pt_PT"].names["fr"] = "Portugais";
availableLanguages["pt_PT"].names["it"] = "Portoghese";
availableLanguages["pt_PT"].names["pt_PT"] = "Português";
availableLanguages["pt_PT"].names["uk"] = "Португальська";

//Ukrainian
availableLanguages["uk"].names["en"] = "Ukrainian";
availableLanguages["uk"].names["de"] = "Ukrainisch";
availableLanguages["uk"].names["es"] = "Ucranio";
availableLanguages["uk"].names["fr"] = "Ukrainiens";
availableLanguages["uk"].names["it"] = "Ucraino";
availableLanguages["uk"].names["pt_PT"] = "Ucraniano";
availableLanguages["uk"].names["uk"] = "Українська";

/***********************
Status messages
***********************/

//map loading string displayed when starting the map application
var mapAppLoadingString = new Array();
mapAppLoadingString["en"] = "Loading map application...";
mapAppLoadingString["es"] = "Cargando aplicaci&oacute;n de mapa..."; //FIXME
mapAppLoadingString["de"] = "Kartenapplikation wird geladen...";
mapAppLoadingString["fr"] = "Chargement de l'application cartographique...";
mapAppLoadingString["it"] = "Caricamento dell'applicazione cartografica...";
mapAppLoadingString["pt_PT"] = "Carregando a aplicaç&atilde;o do mapa..."; //FIXME
mapAppLoadingString["uk"] = "Завантаження додатку...";

//indicating that map app was loaded and we are now loading the map
var mapLoadingString = new Array();
mapLoadingString["en"] = "Loading Map...";
mapLoadingString["es"] = "Cargando mapa...";
mapLoadingString["de"] = "Karte wird geladen...";
mapLoadingString["fr"] = "Chargement de la carte...";
mapLoadingString["it"] = "Caricamento della mappa...";
mapLoadingString["pt_PT"] = "Carregando o mapa...";
mapLoadingString["uk"] = "Завантаження мапи...";

//mode string for navigation
var modeNavigationString = new Array();
modeNavigationString["en"] = "Mode: navigation. Shift/rectangle or mouse wheel for zooming.";
modeNavigationString["es"] = "Modo: navegaci&oacute;n. Shift/rect&aacute;ngulo o rueda del rat&oacute;n para zoom."; //FIXME
modeNavigationString["de"] = "Modus: Navigation. Shift/Rechteck aufziehen oder Mausrad zum zoomen.";
modeNavigationString["fr"] = "Mode: navigation. Majuscule+tracer un rectangle ou roulette de la souris pour zoomer.";
modeNavigationString["it"] = "Modalit&agrave;: navigazione. Shift+rettangolo o rotella del mouse per zommare."; //FIXME
modeNavigationString["pt_PT"] = "Modo: navegaç&atilde;o. Shitf+rect&acirc;ngulo ou roda do rato para efectuar zoom."; //FIXME
modeNavigationString["uk"] = "Режим: навігація. Shift/прямокутне виділення або колесо миші для зміни масштабу.";

//mode string for rectangle zoom
var modeZoomRectangle = new Array();
modeZoomRectangle["en"] = "Mode: zoom with rectangle. Draw rectangle over region you wish to zoom in.";
modeZoomRectangle["es"] = "Modo: zoom con rect&aacute;ngulo. Dibujar el rect&aacute;ngulo sobre la regi&oacute;n para acercar."; //FIXME
modeZoomRectangle["de"] = "Modus: Zoom mit Rechteck. Ziehen Sie die gewünschte Region auf.";
modeZoomRectangle["fr"] = "Mode: zoom rectangle. Dessiner un rectangle sur la zone sur laquelle zoomer.";
modeZoomRectangle["it"] = "Modalit&agrave;: zoom con rettangolo. Disegnare un rettangolo sulla zona da ingrandire."; //FIXME
modeZoomRectangle["pt_PT"] = "Modo: zoom com rect&acirc;ngulo. Desenhar um rect&acirc;ngulo sobre a &aacute;rea que deseja aproximar."; //FIXME
modeZoomRectangle["uk"] = "Режим: збільшення прямокутником. Виділіть прямокутником регіон який Ви бажаєте збільшити.";

//mode string for attribute data detailed
var modeObjectIdentificationString = new Array();
modeObjectIdentificationString["en"] = "Mode: object identification. Move the mouse over an object to identify it, click it to view its attribute data.";
modeObjectIdentificationString["es"] = "Modo: Identificaci&oacute;n de entidad. Ver atributos de datos con el click del rat&oacute;n."; //FIXME
modeObjectIdentificationString["de"] = "Modus: Objektidentifikation. Bewegen Sie die Maus über das Objekt, um es zu identifizeren, klicken Sie es an, um seine Attributdaten anzuzeigen.";
modeObjectIdentificationString["fr"] = "Mode: identification d'entit&eacute;. Identifier une entit&eacute; en cliquant."; //FIXME
modeObjectIdentificationString["it"] = "Modalit&agrave;: identificazione di elementi. Identificare un elemento tramite il click."; //FIXME
modeObjectIdentificationString["pt_PT"] = "Modo: identificaç&atilde;o do elemento. Ver atributos dos dados atrav&eacute;s de um clique do rato."; //FIXME
modeObjectIdentificationString["uk"] = "Режим: вибір об'єкта. Клацніть лівою кнопкою щоб побачити атрибути об'єкта.";

//mode string for map tips (display main attribute with tooltips)
var modeMapTipsString = new Array();
modeMapTipsString["en"] = "Mode: MapTips. Display on mouse over with Tooltips.";
modeMapTipsString["es"] = "Modo: MapTips. Desplegar textos emergentes con el cursor del rat&oactue;n."; //FIXME
modeMapTipsString["de"] = "Modus: MapTips. Anzeige mit Mouseover über tooltips.";
modeMapTipsString["fr"] = "Mode: infobulles. Montrer une infobulle sous le curseur de la souris.";
modeMapTipsString["it"] = "Modalit&agrave;: suggerimenti. Mostrare i suggerimenti con il cursore del mouse."; //FIXME
modeMapTipsString["pt_PT"] = "Modo: MapTips. Mostra dicas de atributos do mapa.";
modeMapTipsString["uk"] = "Режим: випливаючі підказки. Наведіть мишою на об'єкт аби побачити підказку.";

//mode measure distance
var modeMeasureDistanceString = new Array();
modeMeasureDistanceString["en"] = "Mode: measure distance. Finish with double click.";
modeMeasureDistanceString["es"] = "Modo: medir distancia. Finalizar con doble click.";
modeMeasureDistanceString["de"] = "Modus: Distanzmessung. Beenden mit Doppelklick.";
modeMeasureDistanceString["fr"] = "Mode: mesure de distance. Terminer avec un double-clic.";
modeMeasureDistanceString["it"] = "Modalit&agrave;: misura delle distanze. Interrompere con un doppio clic."; //FIXME
modeMeasureDistanceString["pt_PT"] = "Modo: medir dist&acirc;ncia. Para terminar, efectuar duplo clique."; //FIXME
modeMeasureDistanceString["uk"] = "Режим: вимірювання відстаней. Подвійне клацання щоб завершити.";

//mode measure area
var modeMeasureAreaString = new Array();
modeMeasureAreaString["en"] = "Mode: measure area. Finish with double click.";
modeMeasureAreaString["es"] = "Modo: medir &aacute;rea. Finalizar con doble click."; //FIXME
modeMeasureAreaString["de"] = "Modus: Flächenmessung. Beenden mit Doppelklick.";
modeMeasureAreaString["fr"] = "Mode: mesure de surface. Terminer avec un double-clic.";
modeMeasureAreaString["it"] = "Modalit&agrave;: misura delle superifici. Interrompere con un doppio clic."; //FIXME
modeMeasureAreaString["pt_PT"] = "Modo: medir &aacute;rea. Para terminar, efectuar duplo clique."; //FIXME
modeMeasureAreaString["uk"] = "Режим: вимірювання площі. Подвійне клацання щоб завершити.";

//mode printing
var modePrintingString = new Array();
modePrintingString["en"] = "Mode: printing. Move or rotate the map extent. Print with the 'Print'-Button.";
modePrintingString["es"] = "Modo: imprimir. mueva o rote la extensi&oacute;n del mapa. Imprima con el bot&oacute;n 'imprimir'."; //FIXME
modePrintingString["de"] = "Modus: Drucken. Verschieben oder Rotieren Sie den Kartenausschnitt. Drucken mit 'Drucken'-Knopf.";
modePrintingString["fr"] = "Mode: impression. D&eacute;placer ou faire tourner la zone d'impression. Imprimer avec le bouton 'Imprimer'."; //FIXME
modePrintingString["it"] = "Modalit&agrave;: stampa. Spostare o ruotare la zona di stampa. Stampare con il pulsante 'Stamap'."; //FIXME
modePrintingString["pt_PT"] = "Modo: impress&atilde;o. Mover ou girar a extens&atilde;o do mapa. Imprimir com o 'Print'-Button."; //FIXME
modePrintingString["uk"] = "Режим: друк. Обаріть ділянку мапи. Роздрукуйте кнопкою 'Друк'.";

/***********************
GUI stuff
***********************/

//title of panel on the left
var leftPanelTitleString = new Array();
leftPanelTitleString["en"] = "Info and Tools";
leftPanelTitleString["es"] = "Informaci&oacute;n y herramientas"; //FIXME
leftPanelTitleString["de"] = "Infos und Werkzeuge";
leftPanelTitleString["fr"] = "Infos et outils";
leftPanelTitleString["it"] = "Info e strumenti";
leftPanelTitleString["pt_PT"] = "Informaç&atilde;o e Ferramentas"; //FIXME
leftPanelTitleString["uk"] = "Дані та інструменти";

//title of search panel
var searchPanelTitleString = new Array();
searchPanelTitleString["en"] = "Search";
searchPanelTitleString["es"] = "Search"; // FIXME
searchPanelTitleString["de"] = "Suche";
searchPanelTitleString["fr"] = "Search"; // FIXME
searchPanelTitleString["it"] = "Search"; // FIXME
searchPanelTitleString["pt_PT"] = "Search"; // FIXME
searchPanelTitleString["uk"] = "Пошук";

//title of map panel
var mapPanelTitleString = new Array();
mapPanelTitleString["en"] = "Map";
mapPanelTitleString["es"] = "Map"; // FIXME
mapPanelTitleString["de"] = "Karte";
mapPanelTitleString["fr"] = "Map"; // FIXME
mapPanelTitleString["it"] = "Map"; // FIXME
mapPanelTitleString["pt_PT"] = "Map"; // FIXME
mapPanelTitleString["uk"] = "Мапа";

//title of map layer tree
var layerTreeTitleString = new Array();
layerTreeTitleString["en"] = "Map Layers";
layerTreeTitleString["es"] = "Capas";
layerTreeTitleString["de"] = "Kartenebenen";
layerTreeTitleString["fr"] = "Couches";
layerTreeTitleString["it"] = "Layer";
layerTreeTitleString["pt_PT"] = "Temas";
layerTreeTitleString["uk"] = "Шари мапи";

//title of legend tab
var legendTabTitleString = new Array();
legendTabTitleString["en"] = "Legend";
legendTabTitleString["es"] = "Leyenda";
legendTabTitleString["de"] = "Legende";
legendTabTitleString["fr"] = "L&eacute;gende"; //FIXME
legendTabTitleString["it"] = "Legenda";
legendTabTitleString["pt_PT"] = "Legenda";
legendTabTitleString["uk"] = "Легенда";

//title of metadata tab
var metadataTabTitleString = new Array();
metadataTabTitleString["en"] = "Metadata";
metadataTabTitleString["es"] = "Metadatos";
metadataTabTitleString["de"] = "Metadaten";
metadataTabTitleString["fr"] = "M&eacute;tadonn&eacute;es"; //FIXME
metadataTabTitleString["it"] = "Metadati";
metadataTabTitleString["pt_PT"] = "Metadados";
metadataTabTitleString["uk"] = "Метадані";

//label in main toolbar for object identification
var objectIdentificationTextLabel = new Array();
objectIdentificationTextLabel["en"] = "Object identification: ";
objectIdentificationTextLabel["es"] = "Identificaci&oacute;n de entidades: "; //FIXME
objectIdentificationTextLabel["de"] = "Objektdentifikation: ";
objectIdentificationTextLabel["fr"] = "Identification d'entit&eacute;: "; //FIXME
objectIdentificationTextLabel["it"] = "Identificazione di entit&agrave;: "; //FIXME
objectIdentificationTextLabel["it"] = "Identificazione di entit&aagrave;: "; //FIXME
objectIdentificationTextLabel["pt_PT"] = "Identificaç&atilde;o de objectos: "; //FIXME
objectIdentificationTextLabel["uk"] = "Вибір об'єкту: ";

//Coordinate text label (coordinate display in bottom toolbar of main map window)
var coordinateTextLabel = new Array();
coordinateTextLabel["en"] = "Coordinate:";
coordinateTextLabel["es"] = "Coordenadas:";
coordinateTextLabel["de"] = "Koordinate:";
coordinateTextLabel["fr"] = "Coordonn&eacute;es:"; //FIXME
coordinateTextLabel["it"] = "Coordinate:";
coordinateTextLabel["pt_PT"] = "Coordenadas:";
coordinateTextLabel["uk"] = "Координати:";

//title of attribute data tree
var attributeDataTreeTitleString = new Array();
attributeDataTreeTitleString["en"] = "Attribute Data";
attributeDataTreeTitleString["es"] = "Atributos de datos";
attributeDataTreeTitleString["de"] = "Attributdaten";
attributeDataTreeTitleString["fr"] = "Attributs";
attributeDataTreeTitleString["it"] = "Attributi";
attributeDataTreeTitleString["pt_PT"] = "Atributos";
attributeDataTreeTitleString["uk"] = "Атрибути";

//
var attributeFeatureWithString = new Array();
attributeFeatureWithString["en"] = "Feature with ID:";
attributeFeatureWithString["es"] = "Elemento con identificador: ";
attributeFeatureWithString["de"] = "Feature mit ID:";
attributeFeatureWithString["fr"] = "Entit&eacute; avec l'identifiant ";//intentionally left with no colon  //FIXME
attributeFeatureWithString["it"] = "Elemento con ID ";//intentionally left with no colon
attributeFeatureWithString["pt_PT"] = "Elemento com identificador ";//intentionally left with no colon
attributeFeatureWithString["uk"] = "Об'єкт з ID:";

//search
var searchFieldDefaultTextString = new Array();
searchFieldDefaultTextString["en"] = "Search (addresses, parcel-nrs, names, etc.)";
searchFieldDefaultTextString["es"] = "Buscar (direcciones, registros, nombres, etc.)";
searchFieldDefaultTextString["de"] = "Suche (Adressen, Parzellenr, Flurnamen, etc.)";
searchFieldDefaultTextString["fr"] = "Chercher (adresses, n&deg; de parcelles, noms, etc.)"; //FIXME
searchFieldDefaultTextString["it"] = "Ricerca (indirizzi, n&deg; delle particelle, nomi, ecc.)"; //FIXME
searchFieldDefaultTextString["pt_PT"] = "Pesquisa (morada, parcelas, nomes, etc.)";
searchFieldDefaultTextString["uk"] = "Шукати (адреси, назви, тощо.)";

//search button
var searchButtonString = new Array();
searchButtonString["en"] = "Search";
searchButtonString["es"] = "Search"; // FIXME
searchButtonString["de"] = "Suchen";
searchButtonString["fr"] = "Search"; // FIXME
searchButtonString["it"] = "Search"; // FIXME
searchButtonString["pt_PT"] = "Search"; // FIXME
searchButtonString["uk"] = "Пошук";

//reset button
var resetButtonString = new Array();
resetButtonString["en"] = "Reset";
resetButtonString["es"] = "Reset"; // FIXME
resetButtonString["de"] = "Zurücksetzen";
resetButtonString["fr"] = "Reset"; // FIXME
resetButtonString["it"] = "Reset"; // FIXME
resetButtonString["pt_PT"] = "Reset"; // FIXME
resetButtonString["uk"] = "Очистити";

//please wait
var pleaseWaitString = new Array();
pleaseWaitString["en"] = "Please wait";
pleaseWaitString["es"] = "Please wait"; // FIXME
pleaseWaitString["de"] = "Bitte warten";
pleaseWaitString["fr"] = "Please wait"; // FIXME
pleaseWaitString["it"] = "Please wait"; // FIXME
pleaseWaitString["pt_PT"] = "Please wait"; // FIXME
pleaseWaitString["uk"] = "Зачекайте";

//search result
var searchResultString = new Array();
searchResultString["en"] = "Search result";
searchResultString["es"] = "Search result"; // FIXME
searchResultString["de"] = "Suchresultat";
searchResultString["fr"] = "Search result"; // FIXME
searchResultString["it"] = "Search result"; // FIXME
searchResultString["pt_PT"] = "Search result"; // FIXME
searchResultString["uk"] = "Результати пошуку";

//network error
var networkErrorString = new Array();
networkErrorString["en"] = "Network error";
networkErrorString["es"] = "Network error"; // FIXME
networkErrorString["de"] = "Netzwerkfehler";
networkErrorString["fr"] = "Network error"; // FIXME
networkErrorString["it"] = "Network error"; // FIXME
networkErrorString["pt_PT"] = "Network error"; // FIXME
networkErrorString["uk"] = "Помилка мережі";

// missing or invalid search params
var missingOrInvalidSearchParams = new Array();
missingOrInvalidSearchParams["en"] = "Missing or invalid values in search form";
missingOrInvalidSearchParams["es"] = "Missing or invalid values in search form"; // FIXME
missingOrInvalidSearchParams["de"] = "Fehlende oder ungültige Werte im Suchformular";
missingOrInvalidSearchParams["fr"] = "Missing or invalid values in search form"; // FIXME
missingOrInvalidSearchParams["it"] = "Missing or invalid values in search form"; // FIXME
missingOrInvalidSearchParams["pt_PT"] = "Missing or invalid values in search form"; // FIXME
missingOrInvalidSearchParams["uk"] = "Відсутні або не правильні дані в полі пошуку";


//search error
var searchErrorString = new Array();
searchErrorString["en"] = "Error during search";
searchErrorString["es"] = "Error during search"; // FIXME
searchErrorString["de"] = "Fehler bei Suche";
searchErrorString["fr"] = "Error during search"; // FIXME
searchErrorString["it"] = "Error during search"; // FIXME
searchErrorString["pt_PT"] = "Error during search"; // FIXME
searchErrorString["uk"] = "Помилка під час пошуку";

//map tips no result
var mapTipsNoResultString = new Array();
mapTipsNoResultString["en"] = "No Result";
mapTipsNoResultString["es"] = "Sin resultados";
mapTipsNoResultString["de"] = "Kein Resultat";
mapTipsNoResultString["fr"] = "Pas de r&eacute;sultat"; //FIXME
mapTipsNoResultString["it"] = "Nessun risultato";
mapTipsNoResultString["pt_PT"] = "Sem resultados";
mapTipsNoResultString["uk"] = "Результат відсутній";

//print settings toolbar title
var printSettingsToolbarTitleString = new Array();
printSettingsToolbarTitleString["en"] = "Print Settings";
printSettingsToolbarTitleString["es"] = "Configuraci&oacute;n de impresi&oacute;n"; //FIXME
printSettingsToolbarTitleString["de"] = "Druckeinstellungen";
printSettingsToolbarTitleString["fr"] = "Configuration de l'impression";
printSettingsToolbarTitleString["it"] = "Configurazione della stampa";
printSettingsToolbarTitleString["pt_PT"] = "Configuraç&atilde;o de impress&atilde;o"; //FIXME
printSettingsToolbarTitleString["uk"] = "Налаштовування друку";

//print rotation text label
var printSettingsRotationTextlabelString = new Array();
printSettingsRotationTextlabelString["en"] = "Rotation: ";
printSettingsRotationTextlabelString["es"] = "Rotación: ";
printSettingsRotationTextlabelString["de"] = "Rotation: ";
printSettingsRotationTextlabelString["fr"] = "Rotation: ";
printSettingsRotationTextlabelString["it"] = "Rotazione: ";
printSettingsRotationTextlabelString["pt_PT"] = "Rotaç&atilde;o: "; //FIXME
printSettingsRotationTextlabelString["uk"] = "Поворот: ";

//print button text
var printButtonTextString = new Array();
printButtonTextString["en"] = "Print";
printButtonTextString["es"] = "Imprimir";
printButtonTextString["de"] = "Drucken";
printButtonTextString["fr"] = "Imprimer";
printButtonTextString["it"] = "Stampa";
printButtonTextString["pt_PT"] = "Impress&atilde;o"; //FIXME
printButtonTextString["uk"] = "Друк";

//print cancel button text
var printCancelButtonTextString = new Array();
printCancelButtonTextString["en"] = "Cancel";
printCancelButtonTextString["es"] = "Cancelar";
printCancelButtonTextString["de"] = "Abbrechen";
printCancelButtonTextString["fr"] = "Annuler";
printCancelButtonTextString["it"] = "Annullare";
printCancelButtonTextString["pt_PT"] = "Cancelar";
printCancelButtonTextString["uk"] = "Відмінити";

//objectIdentificationModeStrings
var objectIdentificationModeString = new Array();
objectIdentificationModeString["topMostHit"] = new Array();
objectIdentificationModeString["topMostHit"]["en"] = "Topmost hit";
objectIdentificationModeString["topMostHit"]["es"] = "La capa superior";
objectIdentificationModeString["topMostHit"]["de"] = "Oberster Treffer";
objectIdentificationModeString["topMostHit"]["fr"] = "Couche la plus haute";
objectIdentificationModeString["topMostHit"]["it"] = "Layer in alto";
objectIdentificationModeString["topMostHit"]["pt_PT"] = "Tema superior";
objectIdentificationModeString["topMostHit"]["uk"] = "Верхній шар";

objectIdentificationModeString["allLayers"] = new Array();
objectIdentificationModeString["allLayers"]["en"] = "All layers";
objectIdentificationModeString["allLayers"]["es"] = "Todas las capas";
objectIdentificationModeString["allLayers"]["de"] = "Alle Ebenen";
objectIdentificationModeString["allLayers"]["fr"] = "Toutes les couches";
objectIdentificationModeString["allLayers"]["it"] = "Tutti i layer";
objectIdentificationModeString["allLayers"]["pt_PT"] = "Todos os temas";
objectIdentificationModeString["allLayers"]["uk"] = "Усі шари";

objectIdentificationModeString["activeLayers"] = new Array();
objectIdentificationModeString["activeLayers"]["en"] = "Active Layer";
objectIdentificationModeString["activeLayers"]["es"] = "Capa activa";
objectIdentificationModeString["activeLayers"]["de"] = "Aktive Ebene";
objectIdentificationModeString["activeLayers"]["fr"] = "Couche active";
objectIdentificationModeString["activeLayers"]["it"] = "Layer attivo";
objectIdentificationModeString["activeLayers"]["pt_PT"] = "Tema activo";
objectIdentificationModeString["activeLayers"]["uk"] = "Активний шар";

//measure distance result prefix
var measureDistanceResultPrefixString = new Array();
measureDistanceResultPrefixString["en"] = "Distance";
measureDistanceResultPrefixString["es"] = "Distancia";
measureDistanceResultPrefixString["de"] = "Distanz";
measureDistanceResultPrefixString["fr"] = "Distance";
measureDistanceResultPrefixString["it"] = "Distanza";
measureDistanceResultPrefixString["pt_PT"] = "Dist&acirc;ncia"; //FIXME
measureDistanceResultPrefixString["uk"] = "Відстань";

//distance prefix for result:
var measureAreaResultPrefixString = new Array();
measureAreaResultPrefixString["en"] = "Area";
measureAreaResultPrefixString["es"] = "&Aacute;rea"; //FIXME
measureAreaResultPrefixString["de"] = "Fläche";
measureAreaResultPrefixString["fr"] = "Surface";
measureAreaResultPrefixString["it"] = "Area";
measureAreaResultPrefixString["pt_PT"] = "&aacute;rea"; //FIXME
measureAreaResultPrefixString["uk"] = "Площа";

/***********************
Tooltips
***********************/

//zoom rectangle tooltip
var zoomRectangleTooltipString = new Array();
zoomRectangleTooltipString["en"] = "Zoom with rectangle";
zoomRectangleTooltipString["es"] = "Zoom con rect&aacute;ngulo"; //FIXME
zoomRectangleTooltipString["de"] = "Zoom Rechteck aufziehen";
zoomRectangleTooltipString["fr"] = "Zoomer sur un rectangle";
zoomRectangleTooltipString["it"] = "Zoom su rettangolo";
zoomRectangleTooltipString["pt_PT"] = "Zoom com rect&acirc;ngulo"; //FIXME
zoomRectangleTooltipString["uk"] = "Масштабувати прямокутником";

//zoom to full view
var zoomFullViewTooltipString = new Array();
zoomFullViewTooltipString["en"] = "Zoom to the maximum map extent";
zoomFullViewTooltipString["es"] = "Zoom a la extensi&oacute;n m&aacute;xima "; //FIXME
zoomFullViewTooltipString["de"] = "Zoom zum maximalen Kartenausschnitt";
zoomFullViewTooltipString["fr"] = "Zoomer sur l'&eacute;tendue compl&egrave;te de la carte"; //FIXME
zoomFullViewTooltipString["it"] = "Zoom all'estensione massima";
zoomFullViewTooltipString["pt_PT"] = "Zoom &agrave; extens&atilde;o m&aacute;xima do mapa"; //FIXME
zoomFullViewTooltipString["uk"] = "Масштаб за розмірами мапи";

//navigation history backward
var navigationHistoryBackwardTooltipString = new Array();
navigationHistoryBackwardTooltipString["en"] = "Navigation history backward";
navigationHistoryBackwardTooltipString["es"] = "Navegaci&oacute;n zoom anterior"; //FIXME
navigationHistoryBackwardTooltipString["de"] = "Navigationshistorie zurück";
navigationHistoryBackwardTooltipString["fr"] = "Zone pr&eacute;c&eacute;dente dans l'historique"; //FIXME
navigationHistoryBackwardTooltipString["it"] = "Inquadramento precedente";
navigationHistoryBackwardTooltipString["pt_PT"] = "Enquadramento anterior";
navigationHistoryBackwardTooltipString["uk"] = "Історія навігіції: назад";

//navigation history forward
var navigationHistoryForwardTooltipString = new Array();
navigationHistoryForwardTooltipString["en"] = "Navigation history forward";
navigationHistoryForwardTooltipString["es"] = "Navegaci&oacute;n zoom posterior"; //FIXME
navigationHistoryForwardTooltipString["de"] = "Navigationshistorie vorwärts";
navigationHistoryForwardTooltipString["fr"] = "Zone suivante dans l'historique";
navigationHistoryForwardTooltipString["it"] = "Inquadramento successivo";
navigationHistoryForwardTooltipString["pt_PT"] = "Enquadramento seguinte";
navigationHistoryForwardTooltipString["uk"] = "Історія навігації: вперед";

//discrete zoom in button above zoom slider
var zoomInTooltipString = new Array();
zoomInTooltipString["en"] = "Zoom in (discrete step)";
zoomInTooltipString["es"] = "Acercar";
zoomInTooltipString["de"] = "Einzoomen (eine Stufe)";
zoomInTooltipString["fr"] = "Zoom avant";
zoomInTooltipString["it"] = "Ingrandisci";
zoomInTooltipString["pt_PT"] = "Ampliar";
zoomInTooltipString["uk"] = "Збільшити";

//discrete zoom in button above zoom slider
var zoomOutTooltipString = new Array();
zoomOutTooltipString["en"] = "Zoom out (discrete step)";
zoomOutTooltipString["es"] = "Alejar";
zoomOutTooltipString["de"] = "Rauszoomen (eine Stufe)";
zoomOutTooltipString["fr"] = "Zoom arri&egrave;re"; //FIXME
zoomOutTooltipString["it"] = "Rimpicciolisci";
zoomOutTooltipString["pt_PT"] = "Diminuir";
zoomOutTooltipString["uk"] = "Зменшити";

//object identification tooltip
var objIdentificationTooltipString = new Array();
objIdentificationTooltipString["en"] = "Object identification (attribute data)";
objIdentificationTooltipString["es"] = "Indentificaci&oacute;n de entidad (atributos de datos)"; //FIXME
objIdentificationTooltipString["de"] = "Objektidentifizierung (Attributdaten)";
objIdentificationTooltipString["fr"] = "Identification d'entit&eacute; (attributs)"; //FIXME
objIdentificationTooltipString["it"] = "Identificazione di oggetti (attributi)";
objIdentificationTooltipString["pt_PT"] = "Identificaç&atilde;o de objectos (attributos)"; //FIXME
objIdentificationTooltipString["uk"] = "Вибір об'єкту (атрибути)";

//MapTips tooltip // Those were with simple quotes?!
var mapTipsTooltipString = new Array();
mapTipsTooltipString["en"] = "Display MapTips (attribute data)";
mapTipsTooltipString["es"] = "Desplegar textos emergentos (atributos de datos)";
mapTipsTooltipString["de"] = "MapTips anzeigen (Attributdaten)";
mapTipsTooltipString["fr"] = "Afficher les infobulles (attributs)";
mapTipsTooltipString["it"] = "Mostra le informazioni (attributi)";
mapTipsTooltipString["pt_PT"] = "Mostrar MapTips (atributos)";
mapTipsTooltipString["uk"] = "Показівати виринаючі підказки (атрибути)";

//Measure Distance
var measureDistanceTooltipString = new Array();
measureDistanceTooltipString["en"] = "Measure distance";
measureDistanceTooltipString["es"] = "Medir distancia";
measureDistanceTooltipString["de"] = "Distanz messen";
measureDistanceTooltipString["fr"] = "Mesurer une distance";
measureDistanceTooltipString["it"] = "Misura distanza";
measureDistanceTooltipString["pt_PT"] = "Medir dist&acirc;ncia"; //FIXME
measureDistanceTooltipString["uk"] = "Вимірювання відстані";

//Measure Area
var measureAreaTooltipString = new Array();
measureAreaTooltipString["en"] = "Measure area";
measureAreaTooltipString["es"] = "Medir &aacute;rea"; //FIXME
measureAreaTooltipString["de"] = "Fläche messen";
measureAreaTooltipString["fr"] = "Mesurer une surface";
measureAreaTooltipString["it"] = "Misura superficie";
measureAreaTooltipString["pt_PT"] = "Medir &aacute;rea"; //FIXME
measureAreaTooltipString["uk"] = "Вимірювання площі";

//Print Map
var printMapTooltipString = new Array();
printMapTooltipString["en"] = "Print Map";
printMapTooltipString["es"] = "Imprimir mapa";
printMapTooltipString["de"] = "Karte drucken";
printMapTooltipString["fr"] = "Imprimer la carte";
printMapTooltipString["it"] = "Stampa la mappa";
printMapTooltipString["pt_PT"] = "Imprimir mapa";
printMapTooltipString["uk"] = "Друкувати мапу";

//Print Map disabled
var printMapDisabledTooltipString = new Array();
printMapDisabledTooltipString["en"] = "Print disabled, no layout is defined into the QGIS project";
printMapDisabledTooltipString["es"] = "Imprima lisiado, ningun layout se define en el proyecto QGIS";
printMapDisabledTooltipString["de"] = "Drucken nicht möglich, da keine Layouts im QGIS-Projekt definiert wurden";
printMapDisabledTooltipString["fr"] = "Imprimez non activée, aucune layout est défini dans le projet QGIS";
printMapDisabledTooltipString["it"] = "Stampa disabilitata: nel progetto QGIS non &egrave; definito alcun layout"; //FIXME
printMapDisabledTooltipString["pt_PT"] = "Impress&atilde;o n&atilde;o dispon&iacute;vel: no projecto QGIS n&atilde;o &eacute; deinfido algum layout"; //FIXME
printMapDisabledTooltipString["uk"] = "Друк відключено, не вказано шар в QGIS проекті";

//Geonames loading string
var geonamesLoadingString = new Array();
geonamesLoadingString["en"] = "Search in Geonames...";
geonamesLoadingString["es"] = "Search in Geonames..."; // FIXME
geonamesLoadingString["de"] = "Suche in Geonames...";
geonamesLoadingString["fr"] = "Search in Geonames..."; // FIXME
geonamesLoadingString["it"] = "Search in Geonames..."; // FIXME
geonamesLoadingString["pt_PT"] = "Search in Geonames..."; // FIXME
geonamesLoadingString["uk"] = "Пошук в Геоданих...";

//Geonames empty string
var geonamesEmptyString = new Array();
geonamesEmptyString["en"] = "Search location in Geonames";
geonamesEmptyString["es"] = "Search location in Geonames"; // FIXME
geonamesEmptyString["de"] = "Suche Ort in Geonames";
geonamesEmptyString["fr"] = "Search location in Geonames"; // FIXME
geonamesEmptyString["it"] = "Search location in Geonames"; // FIXME
geonamesEmptyString["pt_PT"] = "Search location in Geonames"; // FIXME
geonamesEmptyString["uk"] = "Пошук місць у Геоданих";

//Reset Search Field
var resetSearchFieldTooltipString = new Array();
resetSearchFieldTooltipString["en"] = "Reset/empty Searchfield";
resetSearchFieldTooltipString["es"] = "Limpiar campo de b&uacute;squeda"; //FIXME
resetSearchFieldTooltipString["de"] = "Suchfeld zurücksetzen";
resetSearchFieldTooltipString["fr"] = "R&eacute;initialiser la recherche"; //FIXME
resetSearchFieldTooltipString["it"] = "Azzerare il campo di ricerca";
resetSearchFieldTooltipString["pt_PT"] = "Limpar campo de pesquisa";
resetSearchFieldTooltipString["uk"] = "Очистити поле пошуку";

//print window title 
var printWindowTitleString = new Array();
printWindowTitleString["en"] = "The server is generating a PDF file. For correct up to scale printing please deactivate the option 'Fit to Page'!";
printWindowTitleString["es"] = "El servidor est&aacute; generando un archivo PDF. Para corregir la escala de impresi&oacute;n desactive la opci&oacute;n 'Ajustar a la p&aacute;gina'!"; //FIXME
printWindowTitleString["de"] = "PDF wird vom Server generiert. Für massstäbliches Drucken deaktivieren Sie bitte das 'Anpassen der Seitengrösse'!";
printWindowTitleString["fr"] = "Le serveur g&eacute;n&egrave;re le fichier PDF. Pour conserver l'&eacute;chelle, ne pas activer l'option 'Ajuster &agrave; la page'!" //FIXME
printWindowTitleString["it"] = "Il server sta generando il file PDF. Per stampare alla scala corretta disattivare l'opzione 'Ridimensiona alla pagina'!"
printWindowTitleString["pt_PT"] = "O servidor est&aacute; a gerar um ficheiro PDF. Para impress&atilde;o &agrave; escala correcta, desactivar a opç&atilde;o 'Fit to Page'!"; //FIXME
printWindowTitleString["uk"] = "На сервері створюється PDF файл. Для корректного масштабуваня друку відключіть опцію 'Підігнати до сторінки'!";

//print object data alternative string in case no pdf plugin is present in browser
//attention: single quotes around string, partially html formatting
var printingObjectDataAlternativeString1 = new Array();
printingObjectDataAlternativeString1["en"] = 'It looks like your browser cannot open PDF files directly. Not a big problem - you can <a href="';
printingObjectDataAlternativeString1["es"] = 'Su navegador no puede abrir archivos PDF directanmente. No es problema - usted puede <a href="';
printingObjectDataAlternativeString1["de"] = 'Es sieht so aus als ob Ihr Browser kein PDF Plugin unterstützt. Kein Problem, Sie können die <a href="';
printingObjectDataAlternativeString1["fr"] = 'Il semble que votre navigateur ne puisse pas ouvrir les fichiers PDF directement. Pas de probl&egrave;me, vous pouvez <a href="'; //FIXME
printingObjectDataAlternativeString1["it"] = 'Sembra che il vostro browser non possa aprire direttamente i files PDF. Nessun problema -  potete <a href="';
printingObjectDataAlternativeString1["pt_PT"] = 'Parece que o seu navegador n&atilde;o pode abrir ficheiros PDF directamente. N&atilde;o tem problema - pode <a href="'; //FIXME
printingObjectDataAlternativeString1["uk"] = 'Схоже Ваш оглядач не вміє відкривати PDF файли. Не проблема - скористуйтесь <a href="';

//the second part of the string after the URL
//attention: single quotes around string, partially html formatting
var printingObjectDataAlternativeString2 = new Array();
printingObjectDataAlternativeString2["en"] = '">download the PDF file here.</a>.</p></object>';
printingObjectDataAlternativeString2["es"] = '">descargar el archivo PDF aqu&iacute;.</a>.</p></object>'; //FIXME
printingObjectDataAlternativeString2["de"] = '">PDF-Datei hier herunterladen</a>.</p></object>';
printingObjectDataAlternativeString2["fr"] = '">t&eacute;l&eacute;charger le fichier PDF ici</a>.</p></object>'; //FIXME
printingObjectDataAlternativeString2["it"] = '">scaricare il PDF qui.</a>.</p></object>';
printingObjectDataAlternativeString2["pt_PT"] = '">descarregar ficheiro PDF aqui.</a>.</p></object>';
printingObjectDataAlternativeString2["uk"] = '">посиланням</a> аби завантажити PDF файл..</p></object>';

//print button tooltip
var printButtonTooltipString = new Array();
printButtonTooltipString["en"] = "Print (Generate PDF)";
printButtonTooltipString["es"] = "Imprimir (Generar PDF)";
printButtonTooltipString["de"] = "Drucken (PDF generieren)";
printButtonTooltipString["fr"] = "Imprimer (g&eacute;n&eacute;rer un PDF)"; //FIXME
printButtonTooltipString["it"] = "Stampa (generare un PDF)";
printButtonTooltipString["pt_PT"] = "Imprimir (gerar PDF)";
printButtonTooltipString["uk"] = "Друкувати (PDF)";

//print cancel button tooltip
var printCancelButtonTooltipString = new Array();
printCancelButtonTooltipString["en"] = "Cancel Print (Close)";
printCancelButtonTooltipString["es"] = "Cancelar impresi&oacute;n (Cerrar)"; //FIXME
printCancelButtonTooltipString["de"] = "Druck abbrechen (Schliesen)";
printCancelButtonTooltipString["fr"] = "Annuler l'impression (fermer)";
printCancelButtonTooltipString["it"] = "Annulla la stampa (chiudi)";
printCancelButtonTooltipString["pt_PT"] = "Cancelar impress&atilde;o (Fechar)"; //FIXME
printCancelButtonTooltipString["uk"] = "Скасувати друк (Закрити)";

/***********************
Error Messages
***********************/

//error messages on startup
var errMessageStartupMapParamString = new Array();
errMessageStartupMapParamString["en"] = "Startup-Parameter 'map' missing!";
errMessageStartupMapParamString["es"] = "Falta el parametro de inicio 'map'!";
errMessageStartupMapParamString["de"] = "Start-Parameter 'map' fehlt!";
errMessageStartupMapParamString["fr"] = "Le param&egrave;tre de d&eacute;marrage 'map' est manquant!"; //FIXME
errMessageStartupMapParamString["it"] = "Il parametro di inizializzazione manca!";
errMessageStartupMapParamString["pt_PT"] = "Parametro de inicializaç&atilde;o em falta!"; //FIXME
errMessageStartupMapParamString["uk"] = "Параметр 'map' відсутній!";

//additional startup error message
var errMessageStartupNotAllParamsFoundString = new Array();
errMessageStartupNotAllParamsFoundString["en"] = "Some mandatory startup paramaters are missing or an optional startup parameter is invalid.";
errMessageStartupNotAllParamsFoundString["es"] = "Faltan algunos parametros obligatorios";
errMessageStartupNotAllParamsFoundString["de"] = "Es wurden nicht alle notwendigen Web-GIS-Parameter gefunden oder ein optionaler Start-Parameter ist falsch.";
errMessageStartupNotAllParamsFoundString["fr"] = "Certains param&egrave;tres indispensables manquent."; //FIXME
errMessageStartupNotAllParamsFoundString["it"] = "Alcuni parametri necessari mancano.";
errMessageStartupNotAllParamsFoundString["pt_PT"] = "Faltam alguns parametros necess&aacute;rios."; //FIXME
errMessageStartupNotAllParamsFoundString["uk"] = "Відсутні обов'язкові параметри, або деякі параметри мають невірне значення.";

//error message if optional startExtent parameter is wrong
var errMessageExtentParamWrongPart1 = new Array();
errMessageExtentParamWrongPart1["en"] = "Start-parameter '";
errMessageExtentParamWrongPart1["es"] = "Start-parameter '";
errMessageExtentParamWrongPart1["de"] = "Start-Parameter '";
errMessageExtentParamWrongPart1["fr"] = "Start-parameter '";
errMessageExtentParamWrongPart1["it"] = "Start-parameter '";
errMessageExtentParamWrongPart1["pt_PT"] = "Start-parameter '";
errMessageExtentParamWrongPart1["uk"] = "Параметр '";

//error message if optional startExtent parameter is wrong
var errMessageExtentParamWrongPart2 = new Array();
errMessageExtentParamWrongPart2["en"] = "' needs to be in OpenLayers.Bounds format: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["es"] = "' needs to be in OpenLayers.Bounds format: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["de"] = "' muss im OpenLayers.Bounds format sein: 'links,unten,rechts,oben'.";
errMessageExtentParamWrongPart2["fr"] = "' needs to be in OpenLayers.Bounds format: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["it"] = "' needs to be in OpenLayers.Bounds format: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["pt_PT"] = "' needs to be in OpenLayers.Bounds format: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["uk"] = "' має бути в форматі OpenLayers.Bounds: 'left,bottom,right,top'.";

//error message invalid language code, part 1
var errMessageInvalidLanguageCodeString1 = new Array();
errMessageInvalidLanguageCodeString1["en"] = "Invalid language code provided: ";
errMessageInvalidLanguageCodeString1["es"] = "Inv&aacute;lido el c&amp;ooacute;digo de idioma prove&iacute;do: "; //FIXME
errMessageInvalidLanguageCodeString1["de"] = "Falscher Sprachparameter übergeben: ";
errMessageInvalidLanguageCodeString1["fr"] = "Identifiant de langue incorrect: ";
errMessageInvalidLanguageCodeString1["it"] = "Identificativo della lingua non corretto: ";
errMessageInvalidLanguageCodeString1["pt_PT"] = "Identificaç&atilde;o do idioma n&atilde;o &eacute; correcto: "; //FIXME
errMessageInvalidLanguageCodeString1["uk"] = "Вказано невірний код мови: ";

//error message invalid language code, part 2
var errMessageInvalidLanguageCodeString2 = new Array();
errMessageInvalidLanguageCodeString2["en"] = "Switching back to default language ";
errMessageInvalidLanguageCodeString2["es"] = "Se reestablece el idioma por defecto ";
errMessageInvalidLanguageCodeString2["de"] = "Wechsle zurück zur Standardsprache ";
errMessageInvalidLanguageCodeString2["fr"] = "La langue par d&eacute;faut sera utilis&eacute;e "; //FIXME
errMessageInvalidLanguageCodeString2["it"] = "Si utilizza la lingua di default ";
errMessageInvalidLanguageCodeString2["pt_PT"] = "Mudar para idioma padr&atilde;o  "; //FIXME
errMessageInvalidLanguageCodeString2["uk"] = "Переключаюсь на мову за замовчуванням ";

//error message of search combo network request title
var errMessageSearchComboNetworkRequestFailureTitleString = new Array();
errMessageSearchComboNetworkRequestFailureTitleString["en"] = "Network request failed";
errMessageSearchComboNetworkRequestFailureTitleString["es"] = "Fall&oacute; la solicitud de red"; //FIXME
errMessageSearchComboNetworkRequestFailureTitleString["de"] = "Netzwerk-Request fehlgeschlagen";
errMessageSearchComboNetworkRequestFailureTitleString["fr"] = "La requ&ecirc;te r&eacute;seau a &eacute;chou&eacute;"; //FIXME
errMessageSearchComboNetworkRequestFailureTitleString["it"] = "La richiesta di rete &egrave; fallita"; //FIXME
errMessageSearchComboNetworkRequestFailureTitleString["pt_PT"] = "Pedido de rede falhou";
errMessageSearchComboNetworkRequestFailureTitleString["uk"] = "Помилка мережевого запиту";

//error message of search combo network request detailed message - do not forget the \n at the end of the string!
var errMessageSearchComboNetworkRequestFailureString = new Array();
errMessageSearchComboNetworkRequestFailureString["en"] = "The network request for the geometry of the search result failed:\n";
errMessageSearchComboNetworkRequestFailureString["es"] = "Fall&oacute; la solicitud de red para el resultado  de la b&uacute;squeda de la geometr&iacute;:\n"; //FIXME
errMessageSearchComboNetworkRequestFailureString["de"] = "Netzwerk-Request für Geometrie des gesuchten Objekts fehlgeschlagen:\n";
errMessageSearchComboNetworkRequestFailureString["fr"] = "La requ&ecirc;te r&eacute;seau pour la g&eacute;om&eacute;trie du r&eacute;sultat de la recherche a &eacute;chou&eacute;:\n"; //FIXME
errMessageSearchComboNetworkRequestFailureString["it"] = "La richiesta di rete &egrave; fallita per la geometria del risultato di ricerca:\n"; //FIXME
errMessageSearchComboNetworkRequestFailureString["pt_PT"] = "O pedido de rede para a geometria do resultado de pesquisa falhou:\n";
errMessageSearchComboNetworkRequestFailureString["uk"] = "Не вдалося виконати запит геометрії для результатів пошуку:\n";
