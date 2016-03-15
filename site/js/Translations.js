/*
 *
 * Translations.js -- part of QGIS Web Client
 *
 * Copyright (2010-2012), The QGIS Project All rights reserved.
 * QGIS Web Client is released under a BSD license. Please see
 * https://github.com/qgis/qgis-web-client/blob/master/README
 * for the full text of the license and the list of contributors.
 *
*/

//indicating which of the help files have been translated already
var availableHelpLanguages = Array("en","de","hu","it","pl","fr","ro","ru","sv","sl");

//list of available languages
var availableLanguages = new Array();
availableLanguages["en"] = {names:[], translator:"Andreas Neumann"}; //a (dot) neumann (at) carto (dot) net
availableLanguages["es"] = {names:[], translator:"Samuel Mesa, Diana Galindo, Germán Carrillo"}; // samuelmesa (at) gmail (dot) com , drgalindog (at) linuxmail (dot) org
availableLanguages["de"] = {names:[], translator:"Andreas Neumann"}; //a(dot)neumann(at)carto(dot)net
availableLanguages["fr"] = {names:[], translator:"Mayeul Kauffmann, Amandine Schloupt (Aguram)"}; //mayeul (dot) kauffmann (at) free (dot) fr, aschloupt (at) aguram (dot) org
availableLanguages["it"] = {names:[], translator:"Paolo Cavallini (Faunalia), Giovanni Allegri (Gis3W), Alessandro Pasotti (ItOpen)"}; //cavallini (at) faunalia (dot) itA
availableLanguages["pt_PT"] = {names:[], translator:"Nelson Silva, Giovanni Manghi (Faunalia)"}; //nelson (dot) jgs (at) gmail (dot) com>, giovanni (dot) manghi (at) faunalia (dot) pt
availableLanguages["pt_BR"] = {names:[], translator:"Caio Hamamura"}; //caiohamamura (at) gmail (dot) com>
availableLanguages["uk"] = {names:[], translator:"Pavlo Taranov"}; //taranov (dot) pavel (at) gmail (dot) com>
availableLanguages["hu"] = {names:[], translator:"Szilárd Lajcsik"}; //szilajinfo (at) gmail (dot) com>
availableLanguages["ro"] = {names:[], translator:"Tudor Bărăscu"}; //tudorbarascu (at) qtibia (dot) ro>
availableLanguages["ru"] = {names:[], translator:"Nikolay Zhigalov"}; //jederlacht1 (at) gmail (dot) com>
availableLanguages["sl"] = {names:[], translator:"Uroš Preložnik"};	//uros00 (at) gmail (dot) com
availableLanguages["nl"] = {names:[], translator:"Carl Defevere"}; //carl (dot) defevere (at) gmail (dot) com>
availableLanguages["pl"] = {names:[], translator:"Sławomir Bienias"}; //slawomir (dot) bienias (at) gmail (dot) com>
availableLanguages["sv"] = {names:[], translator:"Klas Karlsson"}; //klaskarlsson (at) hotmail (dot) com>

//translations of languages
// first language index is fixed, second variable
// The string is the name of the first language translated in the second language.

//English;
availableLanguages["en"].names["en"] = "English";
availableLanguages["en"].names["de"] = "Englisch";
availableLanguages["en"].names["es"] = "Inglés";
availableLanguages["en"].names["fr"] = "Anglais";
availableLanguages["en"].names["it"] = "Inglese";
availableLanguages["en"].names["pt_PT"] = "Inglês";
availableLanguages["en"].names["pt_BR"] = "Inglês";
availableLanguages["en"].names["uk"] = "Англійська";
availableLanguages["en"].names["hu"] = "Angol";
availableLanguages["en"].names["ro"] = "Engleză";
availableLanguages["en"].names["ru"] = "Ангийский";
availableLanguages["en"].names["sl"] = "Angleščina";
availableLanguages["en"].names["nl"] = "Engels";
availableLanguages["en"].names["pl"] = "Angielski";
availableLanguages["en"].names["sv"] = "Engelska";

//German
availableLanguages["de"].names["en"] = "German";
availableLanguages["de"].names["de"] = "Deutsch";
availableLanguages["de"].names["es"] = "Alemán";
availableLanguages["de"].names["fr"] = "Allemand";
availableLanguages["de"].names["it"] = "Tedesco";
availableLanguages["de"].names["pt_PT"] = "Alemão";
availableLanguages["de"].names["pt_BR"] = "Alemão";
availableLanguages["de"].names["uk"] = "Німецька";
availableLanguages["de"].names["hu"] = "Német";
availableLanguages["de"].names["ro"] = "Germană";
availableLanguages["de"].names["ru"] = "Немецкий";
availableLanguages["de"].names["sl"] = "Nemščina";
availableLanguages["de"].names["nl"] = "Duits";
availableLanguages["de"].names["pl"] = "Niemiecki";
availableLanguages["de"].names["sv"] = "Tyska";
//Spanish
availableLanguages["es"].names["en"] = "Spanish";
availableLanguages["es"].names["de"] = "Spanisch";
availableLanguages["es"].names["es"] = "Español";
availableLanguages["es"].names["fr"] = "Espagnol";
availableLanguages["es"].names["it"] = "Spagnolo";
availableLanguages["es"].names["pt_PT"] = "Espnhol";
availableLanguages["es"].names["pt_BR"] = "Espanhol";
availableLanguages["es"].names["uk"] = "іспанська";
availableLanguages["es"].names["hu"] = "Spanyol";
availableLanguages["es"].names["ro"] = "Spaniolă";
availableLanguages["es"].names["ru"] = "spaиспанский";
availableLanguages["es"].names["sl"] = "Španski";
availableLanguages["es"].names["nl"] = "Spaans";
availableLanguages["es"].names["pl"] = "Hiszpański";
availableLanguages["de"].names["sv"] = "Spanska";

//French
availableLanguages["fr"].names["en"] = "French";
availableLanguages["fr"].names["de"] = "Französisch";
availableLanguages["fr"].names["es"] = "Francés";
availableLanguages["fr"].names["fr"] = "Français";
availableLanguages["fr"].names["it"] = "Francese";
availableLanguages["fr"].names["pt_PT"] = "Francês";
availableLanguages["fr"].names["pt_BR"] = "Francês";
availableLanguages["fr"].names["uk"] = "Французька";
availableLanguages["fr"].names["hu"] = "Francia";
availableLanguages["fr"].names["ro"] = "Franceză";
availableLanguages["fr"].names["ru"] = "Францкузский";
availableLanguages["fr"].names["sl"] = "Francoščina";
availableLanguages["fr"].names["nl"] = "Frans";
availableLanguages["fr"].names["pl"] = "Francuski";
availableLanguages["fr"].names["sv"] = "Franska";

//Italian
availableLanguages["it"].names["en"] = "Italian";
availableLanguages["it"].names["de"] = "Italienisch";
availableLanguages["it"].names["es"] = "Italiano";
availableLanguages["it"].names["fr"] = "Italien";
availableLanguages["it"].names["it"] = "Italiano";
availableLanguages["it"].names["pt_PT"] = "Italiano";
availableLanguages["it"].names["pt_BR"] = "Italiano";
availableLanguages["it"].names["uk"] = "Італійська";
availableLanguages["it"].names["hu"] = "Olasz";
availableLanguages["it"].names["ro"] = "Italiană";
availableLanguages["it"].names["ru"] = "Итальянский";
availableLanguages["it"].names["sl"] = "Italijanščina";
availableLanguages["it"].names["nl"] = "Italiaans";
availableLanguages["it"].names["pl"] = "Włoski";
availableLanguages["it"].names["sv"] = "Italienska";

//Portuguese
availableLanguages["pt_PT"].names["en"] = "Portuguese";
availableLanguages["pt_BR"].names["en"] = "Portuguese - BR";
availableLanguages["pt_PT"].names["de"] = "Portugiesisch";
availableLanguages["pt_BR"].names["de"] = "Portugiesisch - BR";
availableLanguages["pt_PT"].names["es"] = "Portugués";
availableLanguages["pt_BR"].names["es"] = "Portugués - BR";
availableLanguages["pt_PT"].names["fr"] = "Portugais";
availableLanguages["pt_BR"].names["fr"] = "Portugais - BR";
availableLanguages["pt_PT"].names["it"] = "Portoghese";
availableLanguages["pt_BR"].names["it"] = "Portoghese - BR";
availableLanguages["pt_PT"].names["pt_PT"] = "Português";
availableLanguages["pt_PT"].names["pt_BR"] = "Português";
availableLanguages["pt_BR"].names["pt_PT"] = "Português - BR";
availableLanguages["pt_BR"].names["pt_BR"] = "Português - BR";
availableLanguages["pt_PT"].names["uk"] = "Португальська";
availableLanguages["pt_BR"].names["uk"] = "Португальська - BR";
availableLanguages["pt_PT"].names["hu"] = "Portugál";
availableLanguages["pt_BR"].names["hu"] = "Portugál - BR";
availableLanguages["pt_PT"].names["ro"] = "Portugheză";
availableLanguages["pt_BR"].names["ro"] = "Portugheză - BR";
availableLanguages["pt_PT"].names["ru"] = "Португальский";
availableLanguages["pt_BR"].names["ru"] = "Португальский - BR";
availableLanguages["pt_PT"].names["sl"] = "Portugalščina";
availableLanguages["pt_BR"].names["sl"] = "Portugalščina - BR";
availableLanguages["pt_PT"].names["nl"] = "Portugees";
availableLanguages["pt_BR"].names["nl"] = "Portugees - BR";
availableLanguages["pt_PT"].names["pl"] = "Portugalski";
availableLanguages["pt_BR"].names["pl"] = "Portugalski - BR";
availableLanguages["pt_PT"].names["sv"] = "Portugisiska";
availableLanguages["pt_BR"].names["sv"] = "Portugisiska - BR";

//Ukrainian
availableLanguages["uk"].names["en"] = "Ukrainian";
availableLanguages["uk"].names["de"] = "Ukrainisch";
availableLanguages["uk"].names["es"] = "Ucraniano";
availableLanguages["uk"].names["fr"] = "Ukrainien";
availableLanguages["uk"].names["it"] = "Ucraino";
availableLanguages["uk"].names["pt_PT"] = "Ucraniano";
availableLanguages["uk"].names["pt_BR"] = "Ucraniano";
availableLanguages["uk"].names["uk"] = "Українська";
availableLanguages["uk"].names["hu"] = "Ukrán";
availableLanguages["uk"].names["ro"] = "Ucraineană";
availableLanguages["uk"].names["ru"] = "Украинский";
availableLanguages["uk"].names["sl"] = "Ukrajinščina";
availableLanguages["uk"].names["nl"] = "Oekraiëns";
availableLanguages["uk"].names["pl"] = "Ukraiński";
availableLanguages["uk"].names["sv"] = "Ukrainska";

//Hungarian
availableLanguages["hu"].names["en"] = "Hungarian";
availableLanguages["hu"].names["de"] = "Ungarisch";
availableLanguages["hu"].names["es"] = "Húngaro";
availableLanguages["hu"].names["fr"] = "Hongrois";
availableLanguages["hu"].names["it"] = "Ungherese";
availableLanguages["hu"].names["pt_PT"] = "Húngaro";
availableLanguages["hu"].names["pt_BR"] = "Húngaro";
availableLanguages["hu"].names["uk"] = "Угорська";
availableLanguages["hu"].names["hu"] = "Magyar";
availableLanguages["hu"].names["ro"] = "Maghiară";
availableLanguages["hu"].names["ru"] = "Венгерский";
availableLanguages["hu"].names["sl"] = "Madžarščina";
availableLanguages["hu"].names["nl"] = "Hongaars";
availableLanguages["hu"].names["pl"] = "Węgierski";
availableLanguages["hu"].names["sv"] = "Ungerska";

//Romanian
availableLanguages["ro"].names["en"] = "Romanian";
availableLanguages["ro"].names["de"] = "Rumänisch";
availableLanguages["ro"].names["es"] = "Rumano";
availableLanguages["ro"].names["fr"] = "Roumain";
availableLanguages["ro"].names["it"] = "Rumeno";
availableLanguages["ro"].names["pt_PT"] = "Romeno";
availableLanguages["ro"].names["pt_BR"] = "Romeno";
availableLanguages["ro"].names["uk"] = "Румунська";
availableLanguages["ro"].names["hu"] = "Román";
availableLanguages["ro"].names["ro"] = "Română";
availableLanguages["ro"].names["ru"] = "Румынский";
availableLanguages["ro"].names["sl"] = "Romunščina";
availableLanguages["ro"].names["nl"] = "Roemeens";
availableLanguages["ro"].names["pl"] = "Rumuński";
availableLanguages["ro"].names["sv"] = "Rumänska";

//Russian
availableLanguages["ru"].names["en"] = "Russian";
availableLanguages["ru"].names["de"] = "Russish";
availableLanguages["ru"].names["es"] = "Ruso";
availableLanguages["ru"].names["fr"] = "Russe";
availableLanguages["ru"].names["it"] = "Russa";
availableLanguages["ru"].names["pt_PT"] = "Russa";
availableLanguages["ru"].names["pt_BR"] = "Russo";
availableLanguages["ru"].names["uk"] = "Російська";
availableLanguages["ru"].names["hu"] = "Orosz";
availableLanguages["ru"].names["ro"] = "Rusă";
availableLanguages["ru"].names["ru"] = "Русский";
availableLanguages["ru"].names["sl"] = "Ruščina";
availableLanguages["ru"].names["nl"] = "Russisch";
availableLanguages["ru"].names["pl"] = "Rosyjski";
availableLanguages["ru"].names["sv"] = "Ryska";

//Slovenian
availableLanguages["sl"].names["en"] = "Slovenian";
availableLanguages["sl"].names["de"] = "Slowenisch";
availableLanguages["sl"].names["es"] = "Esloveno";
availableLanguages["sl"].names["fr"] = "Slovène";
availableLanguages["sl"].names["it"] = "Sloveno";
availableLanguages["sl"].names["pt_PT"] = "Esloveno";
availableLanguages["sl"].names["pt_BR"] = "Esloveno";
availableLanguages["sl"].names["uk"] = "Словенська";
availableLanguages["sl"].names["hu"] = "Szlovén";
availableLanguages["sl"].names["ro"] = "Slovenă";
availableLanguages["sl"].names["ru"] = "Cловенский";
availableLanguages["sl"].names["sl"] = "Slovenščina";
availableLanguages["sl"].names["nl"] = "Sloveens";
availableLanguages["sl"].names["pl"] = "Słoweński";
availableLanguages["sl"].names["sv"] = "Slovenska";

//Dutch;
availableLanguages["nl"].names["en"] = "Dutch";
availableLanguages["nl"].names["de"] = "Niederlandisch";
availableLanguages["nl"].names["es"] = "Holandés";
availableLanguages["nl"].names["fr"] = "Néerlandais";
availableLanguages["nl"].names["it"] = "Olandese";
availableLanguages["nl"].names["pt_PT"] = "Holandês";
availableLanguages["nl"].names["pt_BR"] = "Holandês";
availableLanguages["nl"].names["uk"] = "Голандський";
availableLanguages["nl"].names["hu"] = "Holland";
availableLanguages["nl"].names["ro"] = "Olandeză";
availableLanguages["nl"].names["sl"] = "Nizozemščina";
availableLanguages["nl"].names["nl"] = "Nederlands";
availableLanguages["nl"].names["pl"] = "Holenderski";
availableLanguages["nl"].names["sv"] = "Holländska";

//Polish;
availableLanguages["pl"].names["en"] = "Polish";
availableLanguages["pl"].names["de"] = "Polish"; //FIXME
availableLanguages["pl"].names["es"] = "Polish"; //FIXME
availableLanguages["pl"].names["fr"] = "Polonais";
availableLanguages["pl"].names["it"] = "Polish"; //FIXME
availableLanguages["pl"].names["pt_PT"] = "Polish"; //FIXME
availableLanguages["pl"].names["pt_BR"] = "Polonês"; //FIXME
availableLanguages["pl"].names["uk"] = "Polish"; //FIXME
availableLanguages["pl"].names["hu"] = "Polish"; //FIXME
availableLanguages["pl"].names["ro"] = "Poloneză";
availableLanguages["pl"].names["sl"] = "Poljščina";
availableLanguages["pl"].names["nl"] = "Pools";
availableLanguages["pl"].names["pl"] = "Polski";
availableLanguages["pl"].names["sv"] = "Polska";

//Swedish;
availableLanguages["sv"].names["en"] = "Swedish";
availableLanguages["sv"].names["de"] = "Schwedisch";
availableLanguages["sv"].names["es"] = "Sueco";
availableLanguages["sv"].names["fr"] = "Suédois";
availableLanguages["sv"].names["it"] = "Svedese";
availableLanguages["sv"].names["pt_PT"] = "Sueco";
availableLanguages["sv"].names["pt_BR"] = "Sueco";
availableLanguages["sv"].names["uk"] = "Шведська";
availableLanguages["sv"].names["hu"] = "Svéd";
availableLanguages["sv"].names["ro"] = "Suedeză";
availableLanguages["sv"].names["sl"] = "Švedščina";
availableLanguages["sv"].names["nl"] = "Zweeds";
availableLanguages["sv"].names["pl"] = "Szwedzki";
availableLanguages["sv"].names["sv"] = "Svenska";

/***********************
Status messages
***********************/

//map loading string displayed when starting the map application
var mapAppLoadingString = new Array();
mapAppLoadingString["en"] = "Loading map application...";
mapAppLoadingString["es"] = "Cargando la aplicación del mapa...";
mapAppLoadingString["de"] = "Kartenapplikation wird geladen...";
mapAppLoadingString["fr"] = "Chargement de l'application cartographique...";
mapAppLoadingString["it"] = "Sto caricando l'applicazione cartografica...";
mapAppLoadingString["pt_PT"] = "Carregando a aplicação do mapa...";
mapAppLoadingString["pt_BR"] = "Carregando aplicativo do mapa...";
mapAppLoadingString["uk"] = "Завантаження додатку...";
mapAppLoadingString["hu"] = "Térkép kliens betöltése";
mapAppLoadingString["ro"] = "Aplicația se încarcă...";
mapAppLoadingString["ru"] = "Загрузка приложения...";
mapAppLoadingString["sl"] = "Nalaganje aplikacije...";
mapAppLoadingString["nl"] = "Kaartapplicatie laden...";
mapAppLoadingString["pl"] = "Ładowanie aplikacji mapy...";
mapAppLoadingString["sv"] = "Öppnar kartapplikationen...";

//indicating that map app was loaded and we are now loading the map
var mapLoadingString = new Array();
mapLoadingString["en"] = "Loading Map...";
mapLoadingString["es"] = "Cargando mapa...";
mapLoadingString["de"] = "Karte wird geladen...";
mapLoadingString["fr"] = "Chargement de la carte...";
mapLoadingString["it"] = "Sto caricando la la mappa...";
mapLoadingString["pt_PT"] = "Carregando o mapa...";
mapLoadingString["pt_BR"] = "Carregando o mapa...";
mapLoadingString["uk"] = "Завантаження мапи...";
mapLoadingString["hu"] = "Térkép betöltése folyamatban...";
mapLoadingString["ro"] = "Harta se încarcă...";
mapLoadingString["ru"] = "Загрузка карты...";
mapLoadingString["sl"] = "Nalaganje karte...";
mapLoadingString["nl"] = "Kaart laden...";
mapLoadingString["pl"] = "Ładowanie mapy...";
mapLoadingString["sv"] = "Öppnar karta...";

//mode string for navigation
var modeNavigationString = new Array();
modeNavigationString["en"] = "Mode: navigation. Shift/rectangle or mouse wheel for zooming.";
modeNavigationString["es"] = "Modo: navegación. Shift/rectángulo o rueda del ratón que desea zoom.";
modeNavigationString["de"] = "Modus: Navigation. Shift/Rechteck aufziehen oder Mausrad zum zoomen.";
modeNavigationString["fr"] = "Mode: navigation. Majuscule+tracer un rectangle ou roulette de la souris pour zoomer.";
modeNavigationString["it"] = "Modalità: navigazione. Shift+rettangolo o rotellina del mouse per ingrandire o ridurre.";
modeNavigationString["pt_PT"] = "Modo: navegação. Shift+rectângulo ou roda do rato para efectuar zoom.";
modeNavigationString["pt_BR"] = "Modo: navegação. Shift+retângulo ou roda do mouse para efetuar zoom.";
modeNavigationString["uk"] = "Режим: навігація. Shift/прямокутне виділення або колесо миші для зміни масштабу.";
modeNavigationString["hu"] = "Mód: navigáció. Shift / téglalappal vagy egér görgővel lehet nagyítani.";
modeNavigationString["ro"] =  "Mod: navigare. Shift+desenează un dreptunghi; folosește rotița mouse-ului pentru zoom.";
modeNavigationString["ru"] =  "Режим:навигация. Shift+выделение прямоугольника или колесо мыши для изменения масштаба.";
modeNavigationString["sl"] = "Način: navigacija. Miška (levi gumb premik, kolešček povečava), Tipkovnica (smerne tipke, +-), SHIFT+pravokotnik za povečavo.";
modeNavigationString["nl"] = "Mode: navigatie. Shift/rechthoek of muiswiel om te zoomen.";
modeNavigationString["pl"] = "Tryb: nawigacja. Shift+zaznacz obszar lub użyj kółka myszy, aby przybliżyć.";
modeNavigationString["sv"] = "Mode: navigering. Shift+rektangel eller skrollhjul för att zooma.";

//mode string for rectangle zoom
var modeZoomRectangle = new Array();
modeZoomRectangle["en"] = "Mode: zoom with rectangle. Draw rectangle over region you wish to zoom in.";
modeZoomRectangle["es"] = "Modo: zoom con rectángulo. Dibujar el rectángulo sobre la región que desea acercar.";
modeZoomRectangle["de"] = "Modus: Zoom mit Rechteck. Ziehen Sie die gewünschte Region auf.";
modeZoomRectangle["fr"] = "Mode: zoom rectangle. Dessiner un rectangle pour zoomer sur la zone souhaitée.";
modeZoomRectangle["it"] = "Modalità: zoom con rettangolo. Disegnare un rettangolo sulla zona da ingrandire.";
modeZoomRectangle["pt_PT"] = "Modo: zoom com rectângulo. Desenhar um rectângulo sobre a zona que deseja aproximar.";
modeZoomRectangle["pt_BR"] = "Modo: zoom com retângulo. Desenhar um retângulo sobre a área que deseja aproximar.";
modeZoomRectangle["uk"] = "Режим: збільшення прямокутником. Виділіть прямокутником регіон який Ви бажаєте збільшити.";
modeZoomRectangle["hu"] = "Mód: nagyítás kijelöléssel. Rajzolj egy téglalapot a nagyítani kívánt területre.";
modeZoomRectangle["ro"] = "Mod: zoom cu dreptunghi. Se desenează un dreptunghi deasupra regiunii dorite.";
modeZoomRectangle["ru"] = "Режим: масштаб прямоугольником. Выделите прямоугольником регион чтобы увеличить его.";
modeZoomRectangle["sl"] = "Način: povečava s pravokotnikom. Nariši pravokotnik na območju želene povečave.";
modeZoomRectangle["nl"] = "Mode: zoomen met rechthoek. Teken een rechthoek over de regio waar je wenst te zoomen.";
modeZoomRectangle["pl"] = "Tryb: przybliż zaznaczeniem. Narysuj prostokąt obejmujący obszar, który chcesz zbliżyć.";
modeZoomRectangle["sv"] = "Mode: zooma med rektangel. Dra en rektangel över området du vill zooma till.";

//mode string for attribute data detailed
var modeObjectIdentificationString = new Array();
modeObjectIdentificationString["en"] = "Mode: object identification. Move the mouse over an object to identify it, click it to view its attribute data.";
modeObjectIdentificationString["es"] = "Modo: Identificación de objeto. Mueva el cursor sobre un objeto para identificarlo, haga click sobre él para ver sus atributos.";
modeObjectIdentificationString["de"] = "Modus: Objektidentifikation. Bewegen Sie die Maus über das Objekt, um es zu identifizeren, klicken Sie es an, um seine Attributdaten anzuzeigen.";
modeObjectIdentificationString["fr"] = "Mode: identification d'objets. Déplacez la souris sur un objet pour l'identifier, cliquez dessus pour afficher les attributs.";
modeObjectIdentificationString["it"] = "Modalità: identificazione degli elementi mediante il click del mouse.";
modeObjectIdentificationString["pt_PT"] = "Modo: identificação do elemento. Ver atributos dos dados por meio de um clique do rato.";
modeObjectIdentificationString["pt_BR"] = "Modo: identificação do elemento. Ver atributos dos dados por meio de um clique do mouse.";
modeObjectIdentificationString["uk"] = "Режим: вибір об'єкта. Клацніть лівою кнопкою щоб побачити атрибути об'єкта.";
modeObjectIdentificationString["hu"] = "Mód: térképi elem azonosítás. Mozgasd az egeret a kívánt térképi elem fölé, klikkelj rá.";
modeObjectIdentificationString["ro"] = "Mod: identificare obiect. Pentru aceasta se pune mouse-ul pe el; se poate da click pentru vizualizare atribute";
modeObjectIdentificationString["ru"] = "Режим: идентификация объекта. Наведите указатель мыши на объект чтобы идентифицировать его. Кликните чтобы просмотреть атрибуты";
modeObjectIdentificationString["sl"] = "Način: identifikacija objekta. Z miško klikni na objekt za prikaz atributnih  podatkov.";
modeObjectIdentificationString["nl"] = "Mode: object identificieren. Beweeg de muis over een object om het te identificieren, klik om de attribuutdata te bekijken.";
modeObjectIdentificationString["pl"] = "Tryb: identyfikacja obiektów. Najedź kursorem na obiekt, aby go zidentyfikować; kliknij na obiekt, aby zobaczyć wszystkie atrybuty";
modeObjectIdentificationString["sv"] = "Mode: identifiera objekt. Placera musen över ett objekt för att identifiera det, klicka för att visa dess attribut.";

//mode string for map tips (display main attribute with tooltips)
var modeMapTipsString = new Array();
modeMapTipsString["en"] = "Mode: MapTips. Display on mouse over with Tooltips.";
modeMapTipsString["es"] = "Modo: MapTips. Despliega textos emergentes con el cursor del ratón.";
modeMapTipsString["de"] = "Modus: MapTips. Anzeige mit Mouseover über tooltips.";
modeMapTipsString["fr"] = "Mode: infobulles. Afficher les infobulles au survol du curseur de la souris.";
modeMapTipsString["it"] = "Modalità: suggerimenti. Mostra i suggerimenti sotto il cursore del mouse.";
modeMapTipsString["pt_PT"] = "Modo: MapTips. Mostra dicas de atributos do mapa.";
modeMapTipsString["pt_BR"] = "Modo: MapTips. Mostra dicas de atributos do mapa.";
modeMapTipsString["uk"] = "Режим: випливаючі підказки. Наведіть мишою на об'єкт аби побачити підказку.";
modeMapTipsString["hu"] = "Mód: Térkép tipp. Megjelenik az egér fölött a buborék információ."; //FIXME
modeMapTipsString["ro"] = "Mod: Indicii hartă. Se afișează când mouse-ul este deasupra.";
modeMapTipsString["ru"] = "Режим: всплывающие подсказки. Показывать подсказки при наведении мыши.";
modeMapTipsString["sl"] = "Način: namigi. Prikaži namig, ko zadržim kurzor miške nad objektom.";
modeMapTipsString["nl"] = "Mode: MapTips. Weergeven tooltips tijdens mouse-over.";
modeMapTipsString["pl"] = "Mode: podpowiedzi. Wyświetl podpowiedź po najechaniu kursorem na obiekt.";
modeMapTipsString["sv"] = "Mode: Karttips. Visa verktygshjälp med mouse-over.";

//mode measure distance
var modeMeasureDistanceString = new Array();
modeMeasureDistanceString["en"] = "Mode: measure distance. Finish with double click.";
modeMeasureDistanceString["es"] = "Modo: medir distancia. Finalizar con doble click.";
modeMeasureDistanceString["de"] = "Modus: Distanzmessung. Beenden mit Doppelklick.";
modeMeasureDistanceString["fr"] = "Mode: mesure de distance. Terminer avec un double-clic.";
modeMeasureDistanceString["it"] = "Modalità: misura delle distanze. Terminare con un doppio clic.";
modeMeasureDistanceString["pt_PT"] = "Modo: medir distância. Para terminar, efectuar duplo clique.";
modeMeasureDistanceString["pt_BR"] = "Modo: medir distância. Para terminar, efetuar duplo clique.";
modeMeasureDistanceString["uk"] = "Режим: вимірювання відстаней. Подвійне клацання щоб завершити.";
modeMeasureDistanceString["hu"] = "Mód: távolság mérés. Befejezés dupla kattintással.";
modeMeasureDistanceString["ro"] = "Mod: masoară distanța. Se face dublu click pentru a termina.";
modeMeasureDistanceString["ru"] = "Режим: измерение дистанции. Двойной клик чтобы завершить.";
modeMeasureDistanceString["sl"] = "Način: merjenje razdalje. Začni s klikom, zaključi z dvoklikom.";
modeMeasureDistanceString["nl"] = "Mode: afstand meten. Beëindig door te dubbelklikken.";
modeMeasureDistanceString["pl"] = "Tryb: pomiar odległości. Kliknij dwukrotnie, aby zakończyć pomiar.";
modeMeasureDistanceString["sv"] = "Mode: mät avstånd. Avsluta med dubbelklick.";

//mode measure area
var modeMeasureAreaString = new Array();
modeMeasureAreaString["en"] = "Mode: measure area. Finish with double click.";
modeMeasureAreaString["es"] = "Modo: medir área. Finalizar con doble click.";
modeMeasureAreaString["de"] = "Modus: Flächenmessung. Beenden mit Doppelklick.";
modeMeasureAreaString["fr"] = "Mode: mesure de surface. Terminer avec un double-clic.";
modeMeasureAreaString["it"] = "Modalità: misura delle superifici. Terminare con un doppio clic.";
modeMeasureAreaString["pt_PT"] = "Modo: medir área. Para terminar, efectuar duplo clique.";
modeMeasureAreaString["pt_BR"] = "Modo: medir área. Para terminar, efetuar duplo clique.";
modeMeasureAreaString["uk"] = "Режим: вимірювання площі. Подвійне клацання щоб завершити.";
modeMeasureAreaString["hu"] = "Mód: terület mérés. Befejezés dupla kattintással.";
modeMeasureAreaString["ro"] = "Mod: masoară aria. Se face dublu click pentru a termina";
modeMeasureAreaString["ru"] = "Режим: измерение площади. Двойной клик чтобы завершить.";
modeMeasureAreaString["sl"] = "Način: merjenje površine. Začni s klikom, zaključi z dvoklikom.";
modeMeasureAreaString["nl"] = "Mode: oppervlakte berekenen. Beëindig door te dubbelklikken.";
modeMeasureAreaString["pl"] = "Tryb: pomiar powierzchni. Kliknij dwukrotnie, aby zakończyć pomiar.";
modeMeasureAreaString["sv"] = "Mode: mät yta. Avsluta med dubbelklick.";

//mode printing
var modePrintingString = new Array();
modePrintingString["en"] = "Mode: printing. Move or rotate the map extent. Print with the 'Print'-Button.";
modePrintingString["es"] = "Modo: imprimir. Mueva o rote la extensión del mapa. Imprima con el botón 'imprimir'.";
modePrintingString["de"] = "Modus: Drucken. Verschieben oder Rotieren Sie den Kartenausschnitt. Drucken mit 'Drucken'-Knopf.";
modePrintingString["fr"] = "Mode: impression. Déplacer ou faire pivoter la zone d'impression. Imprimer avec le bouton 'Imprimer'.";
modePrintingString["it"] = "Modalità: stampa. Spostare o ruotare la zona di stampa e cliccare sul pulsante 'Stampa'.";
modePrintingString["pt_PT"] = "Modo: impressão. Mover ou girar a extensão do mapa. Imprimir com o botão 'Imprimir'.";
modePrintingString["pt_BR"] = "Modo: impressão. Mover ou girar a extensão do mapa. Imprimir com o botão 'Imprimir'.";
modePrintingString["uk"] = "Режим: друк. Обаріть ділянку мапи. Роздрукуйте кнопкою 'Друк'.";
modePrintingString["hu"] = "Mód: nyomtatás. Mozgatható, forgatható a nyomtatási terület.";
modePrintingString["ro"] =  "Mod: tipărire/print. Suprafața hărtii se poate mișca sau roti. Apasă butonul 'Print' când ești gata.";
modePrintingString["ru"] =  "Режим:печать. Двигайте и поворачивайте прямоугольник чтобы выбрать участок карты. Для печати нажмите кнопку 'Печать'.";
modePrintingString["sl"] =  "Način: tiskanje. Premakni ali zasuči območje tiska. Nadaljuj z gumbom 'Tiskanje'.";
modePrintingString["nl"] = "Mode: afdrukken. Verplaats of roteer de kaartextent. Druk af met de 'Afdrukken'-knop.";
modePrintingString["pl"] = "Tryb: drukowanie. Przesuń lub obróć zasięg mapy. Wydrukuj widok klikając przycisk 'Drukuj'.";
modePrintingString["sv"] = "Mode: skriva ut. Flytta eller rotera utsträckningen. Skriv ut med 'Skriv ut' knappen.";

//indicating is waiting for print
var printLoadingString = new Array();
printLoadingString["en"] = "Printing initialised. Please wait...";
printLoadingString["es"] = "Printing initialised. Please wait..."; //FIXME
printLoadingString["de"] = "Der Druckauftrag ist erfolgt. Bitte haben sie etwas Geduld...";
printLoadingString["fr"] = "Impression en cours. Veuillez patienter...";
printLoadingString["it"] = "La stampa è stata avviata. Attendere, prego...";
printLoadingString["pt_PT"] = "Printing initialised. Please wait..."; //FIXME
printLoadingString["pt_BR"] = "Printing initialised. Please wait..."; //FIXME
printLoadingString["uk"] = "Printing initialised. Please wait..."; //FIXME
printLoadingString["hu"] = "Printing initialised. Please wait..."; //FIXME
printLoadingString["ro"] = "Tipărire inițializată. Așteaptă te rog...";
printLoadingString["ru"] = "Печать инициализирована . Пожалуйста, подождите...";
printLoadingString["sl"] = "Tiskanje se pripravlja. Prosimo počakajte...";
printLoadingString["nl"] = "Afdrukken geinitialiseerd. Gelieve te wachten...";
printLoadingString["pl"] = "Rozpoczynianie drukowania. Proszę czekać...";
printLoadingString["sv"] = "Skriver ut. Var vänlig vänta...";

/***********************
GUI stuff
***********************/

//title of panel on the left
var leftPanelTitleString = new Array();
leftPanelTitleString["en"] = "Info and Tools";
leftPanelTitleString["es"] = "Información y herramientas";
leftPanelTitleString["de"] = "Infos und Werkzeuge";
leftPanelTitleString["fr"] = "Infos et outils";
leftPanelTitleString["it"] = "Info e strumenti";
leftPanelTitleString["pt_PT"] = "Informação e Ferramentas";
leftPanelTitleString["pt_BR"] = "Informações e Ferramentas";
leftPanelTitleString["uk"] = "Дані та інструменти";
leftPanelTitleString["hu"] = "Információk és Eszközök";
leftPanelTitleString["ro"] = "Informații și unelte";
leftPanelTitleString["ru"] = "Информация и инструменты";
leftPanelTitleString["sl"] = "Informacije in orodja";
leftPanelTitleString["nl"] = "Info en Gereedschap";
leftPanelTitleString["pl"] = "Informacje i narzędzia";
leftPanelTitleString["sv"] = "Information och verktyg";

//title of search panel
var searchPanelTitleString = new Array();
searchPanelTitleString["en"] = "Search";
searchPanelTitleString["es"] = "Buscar";
searchPanelTitleString["de"] = "Suche";
searchPanelTitleString["fr"] = "Chercher";
searchPanelTitleString["it"] = "Cerca";
searchPanelTitleString["pt_PT"] = "Pesquisar";
searchPanelTitleString["pt_BR"] = "Pesquisar";
searchPanelTitleString["uk"] = "Пошук";
searchPanelTitleString["hu"] = "Keres";
searchPanelTitleString["ro"] = "Căutare";
searchPanelTitleString["ru"] = "Поиск";
searchPanelTitleString["sl"] = "Iskanje";
searchPanelTitleString["nl"] = "Zoeken";
searchPanelTitleString["pl"] = "Szukaj";
searchPanelTitleString["sv"] = "Sök";

//text of theme Switcher button
var mapThemeButtonTitleString = new Array();
mapThemeButtonTitleString["en"] = "Map themes";
mapThemeButtonTitleString["es"] = "Temas de mapas";
mapThemeButtonTitleString["de"] = "Kartenthemen";
mapThemeButtonTitleString["fr"] = "Modèles de carte";
mapThemeButtonTitleString["it"] = "Temi della mappa";
mapThemeButtonTitleString["pt_PT"] = "Pesquisar";
mapThemeButtonTitleString["pt_BR"] = "Pesquisar";
mapThemeButtonTitleString["uk"] = "Теми";
mapThemeButtonTitleString["hu"] = "Tematikus térképek";
mapThemeButtonTitleString["ro"] = "Tematici hărți";
mapThemeButtonTitleString["ru"] = "Темы";
mapThemeButtonTitleString["sl"] = "Tematske vsebine";
mapThemeButtonTitleString["nl"] = "Kaartthema's";
mapThemeButtonTitleString["pl"] = "Tematy map";
mapThemeButtonTitleString["sv"] = "Kartteman";

//theme switcher window title
var themeSwitcherWindowTitleString = new Array();
themeSwitcherWindowTitleString["en"] = "Map theme choice";
themeSwitcherWindowTitleString["es"] = "Elección de tema de mapa";
themeSwitcherWindowTitleString["de"] = "Kartenthemenwechsel";
themeSwitcherWindowTitleString["fr"] = "Choix des modèles de carte";
themeSwitcherWindowTitleString["it"] = "Scelta del tema della mappa";
themeSwitcherWindowTitleString["pt_PT"] = "Escolha temas de mapa";
themeSwitcherWindowTitleString["pt_BR"] = "Escolha de temas para mapa";
themeSwitcherWindowTitleString["uk"] = "Вибір теми";
themeSwitcherWindowTitleString["hu"] = "Tematikus térkép választó";
themeSwitcherWindowTitleString["ro"] = "Alegere tematică hartă";
themeSwitcherWindowTitleString["ru"] = "Выбор темы";
themeSwitcherWindowTitleString["sl"] = "Izbira tematike";
themeSwitcherWindowTitleString["nl"] = "Kaartthema keuze";
themeSwitcherWindowTitleString["pl"] = "Wybór tematu mapy";
themeSwitcherWindowTitleString["sv"] = "Välj karttema";

//theme switcher filter label string
var themeSwitcherFilterLabelString = new Array();
themeSwitcherFilterLabelString["en"] = "Filter by map title: ";
themeSwitcherFilterLabelString["es"] = "Filtrar por título de mapa: ";
themeSwitcherFilterLabelString["de"] = "Filterung nach Kartentitel: ";
themeSwitcherFilterLabelString["fr"] = "Filtrer par titre de carte: ";
themeSwitcherFilterLabelString["it"] = "Filtra sul titolo della mappa: ";
themeSwitcherFilterLabelString["pt_PT"] = "Filtrar pelo titulo do mapa: ";
themeSwitcherFilterLabelString["pt_BR"] = "Filtrar pelo título do mapa: ";
themeSwitcherFilterLabelString["uk"] = "Фільтр за назвою мапи: ";
themeSwitcherFilterLabelString["hu"] = "Szűrés térkép cím alapján:";
themeSwitcherFilterLabelString["ro"] = "Filtrează harta după titlu: ";
themeSwitcherFilterLabelString["ru"] = "Фильтр тем по названию: ";
themeSwitcherFilterLabelString["sl"] = "Filter po naslovu vsebine: ";
themeSwitcherFilterLabelString["nl"] = "Filter op kaarttitel: ";
themeSwitcherFilterLabelString["pl"] = "Filtruj po tytule mapy: ";
themeSwitcherFilterLabelString["sv"] = "Filtrera efter karttitel: ";

//theme switcher all themes string in list view
var themeSwitcherAllThemesListViewString = new Array();
themeSwitcherAllThemesListViewString["en"] = "All map themes";
themeSwitcherAllThemesListViewString["es"] = "Todos los temas de mapas";
themeSwitcherAllThemesListViewString["de"] = "Alle Kartenthemen";
themeSwitcherAllThemesListViewString["fr"] = "Tous les modèles de carte";
themeSwitcherAllThemesListViewString["it"] = "Tutti i temi della mappa";
themeSwitcherAllThemesListViewString["pt_PT"] = "Todos os temas de mapa";
themeSwitcherAllThemesListViewString["pt_BR"] = "Todos os temas de mapa";
themeSwitcherAllThemesListViewString["uk"] = "Усі теми мап";
themeSwitcherAllThemesListViewString["hu"] = "Összes tematikus térkép";
themeSwitcherAllThemesListViewString["ro"] = "Toate tematicile hărților";
themeSwitcherAllThemesListViewString["ru"] = "Все темы";
themeSwitcherAllThemesListViewString["sl"] = "Vse vsebine";
themeSwitcherAllThemesListViewString["nl"] = "Alle kaartthema's";
themeSwitcherAllThemesListViewString["pl"] = "Wszystkie tematy map";
themeSwitcherAllThemesListViewString["sv"] = "Alla kartteman";

var themeSwitcherTooltipResponsibleString = new Array();
themeSwitcherTooltipResponsibleString["en"] = "Responsible: ";
themeSwitcherTooltipResponsibleString["es"] = "Responsable: ";
themeSwitcherTooltipResponsibleString["de"] = "Verantwortlich: ";
themeSwitcherTooltipResponsibleString["fr"] = "Responsable: ";
themeSwitcherTooltipResponsibleString["it"] = "Responsabile: ";
themeSwitcherTooltipResponsibleString["pt_PT"] = "Responsavel: ";
themeSwitcherTooltipResponsibleString["pt_BR"] = "Responsável: ";
themeSwitcherTooltipResponsibleString["uk"] = "Відповідальний: ";
themeSwitcherTooltipResponsibleString["hu"] = "Felelős: ";
themeSwitcherTooltipResponsibleString["ro"] = "Responsabil: ";
themeSwitcherTooltipResponsibleString["ru"] = "Ответственный: ";
themeSwitcherTooltipResponsibleString["sl"] = "Odgovornost: ";
themeSwitcherTooltipResponsibleString["nl"] = "Verantwoordelijke: ";
themeSwitcherTooltipResponsibleString["pl"] = "Odpowiedzialność: ";
themeSwitcherTooltipResponsibleString["sv"] = "Ansvarig: ";

//either tags or keywords
var themeSwitcherTooltipTagString = new Array();
themeSwitcherTooltipTagString["en"] = "Tags: ";
themeSwitcherTooltipTagString["es"] = "Etiquetas: ";
themeSwitcherTooltipTagString["de"] = "Stichwörter: ";
themeSwitcherTooltipTagString["fr"] = "Etiquettes: ";
themeSwitcherTooltipTagString["it"] = "Etichette: ";
themeSwitcherTooltipTagString["pt_PT"] = "Etiquetas: ";
themeSwitcherTooltipTagString["pt_BR"] = "Rótulos: ";
themeSwitcherTooltipTagString["uk"] = "Теги: ";
themeSwitcherTooltipTagString["hu"] = "Címkék: ";
themeSwitcherTooltipTagString["ro"] = "Etichete: ";
themeSwitcherTooltipTagString["ru"] = "Тэги: ";
themeSwitcherTooltipTagString["sl"] = "Oznake: ";
themeSwitcherTooltipTagString["nl"] = "Labels: ";
themeSwitcherTooltipTagString["pl"] = "Tagi: ";
themeSwitcherTooltipTagString["sv"] = "Taggar: ";

var themeSwitcherTooltipMapThemeString = new Array();
themeSwitcherTooltipMapThemeString["en"] = "Map theme: ";
themeSwitcherTooltipMapThemeString["es"] = "Tema de mapa: ";
themeSwitcherTooltipMapThemeString["de"] = "Kartenthema: ";
themeSwitcherTooltipMapThemeString["fr"] = "Modèle de carte: ";
themeSwitcherTooltipMapThemeString["it"] = "Tema delle mappa: ";
themeSwitcherTooltipMapThemeString["pt_PT"] = "Tema de mapa: ";
themeSwitcherTooltipMapThemeString["pt_BR"] = "Tema de mapa: ";
themeSwitcherTooltipMapThemeString["uk"] = "Тема мапи: ";
themeSwitcherTooltipMapThemeString["hu"] = "Tematikus térkép: ";
themeSwitcherTooltipMapThemeString["ro"] = "Tematica hărții: ";
themeSwitcherTooltipMapThemeString["ru"] = "Тема карты: ";
themeSwitcherTooltipMapThemeString["sl"] = "Tematika mape: ";
themeSwitcherTooltipMapThemeString["nl"] = "Kaartthema: ";
themeSwitcherTooltipMapThemeString["pl"] = "Temat mapy: ";
themeSwitcherTooltipMapThemeString["sv"] = "Karttema: ";

var themeSwitcherTooltipUpdateString = new Array();
themeSwitcherTooltipUpdateString["en"] = "Update interval: ";
themeSwitcherTooltipUpdateString["es"] = "Intervalo de actualización: ";
themeSwitcherTooltipUpdateString["de"] = "Aktualisierung: ";
themeSwitcherTooltipUpdateString["fr"] = "Intervalle de mise à jour: ";
themeSwitcherTooltipUpdateString["it"] = "Intervallo di aggiornamento: ";
themeSwitcherTooltipUpdateString["pt_PT"] = "Intervalo de atualização: ";
themeSwitcherTooltipUpdateString["pt_BR"] = "Intervalo de atualização: ";
themeSwitcherTooltipUpdateString["uk"] = "Час оновлення: ";
themeSwitcherTooltipUpdateString["hu"] = "Frissítés intervalluma: ";
themeSwitcherTooltipUpdateString["ro"] = "Intervalul de actualizare: ";
themeSwitcherTooltipUpdateString["ru"] = "Интервал обновления: ";
themeSwitcherTooltipUpdateString["sl"] = "Osvežitveni interval: ";
themeSwitcherTooltipUpdateString["nl"] = "Update-interval: ";
themeSwitcherTooltipUpdateString["pl"] = "Częstość aktualizacji: ";
themeSwitcherTooltipUpdateString["sv"] = "Uppdateringsintervall: ";

var themeSwitcherTooltipLastUpdateString = new Array();
themeSwitcherTooltipLastUpdateString["en"] = "Last update: ";
themeSwitcherTooltipLastUpdateString["es"] = "Última actualización: ";
themeSwitcherTooltipLastUpdateString["de"] = "Letze Aktualisierung: ";
themeSwitcherTooltipLastUpdateString["fr"] = "Dernière mise à jour ";
themeSwitcherTooltipLastUpdateString["it"] = "Utimo aggiornamento: ";
themeSwitcherTooltipLastUpdateString["pt_PT"] = "Última atualização: ";
themeSwitcherTooltipLastUpdateString["pt_BR"] = "Última atualização: ";
themeSwitcherTooltipLastUpdateString["uk"] = "Останнє оновлення: ";
themeSwitcherTooltipLastUpdateString["hu"] = "Utolsó frissítés: ";
themeSwitcherTooltipLastUpdateString["ro"] = "Ultima actualizare: ";
themeSwitcherTooltipLastUpdateString["ru"] = "Последнее обновление: ";
themeSwitcherTooltipLastUpdateString["sl"] = "Zadnja sprememba: ";
themeSwitcherTooltipLastUpdateString["nl"] = "Laatste update: ";
themeSwitcherTooltipLastUpdateString["pl"] = "Ostatnia aktualizacja: ";
themeSwitcherTooltipLastUpdateString["sv"] = "Senaste uppdatering: ";

var themeSwitcherTooltipPwProtectedString = new Array();
themeSwitcherTooltipPwProtectedString["en"] = "password protected";
themeSwitcherTooltipPwProtectedString["es"] = "protegido por contraseña";
themeSwitcherTooltipPwProtectedString["de"] = "passwortgeschützt";
themeSwitcherTooltipPwProtectedString["fr"] = "protégé par mot de passe";
themeSwitcherTooltipPwProtectedString["it"] = "protetto tramite password";
themeSwitcherTooltipPwProtectedString["pt_PT"] = "protegido por palavra passe";
themeSwitcherTooltipPwProtectedString["pt_BR"] = "protegido por senha";
themeSwitcherTooltipPwProtectedString["uk"] = "захищено паролем";
themeSwitcherTooltipPwProtectedString["hu"] = "jelszóval védett";
themeSwitcherTooltipPwProtectedString["ro"] = "protejat cu parolă";
themeSwitcherTooltipPwProtectedString["ru"] = "защищено паролем";
themeSwitcherTooltipPwProtectedString["sl"] = "zaščiteno z geslom";
themeSwitcherTooltipPwProtectedString["nl"] = "Wachtwoord-beveiligd";
themeSwitcherTooltipPwProtectedString["pl"] = "chronione hasłem";
themeSwitcherTooltipPwProtectedString["sv"] = "lösenordsskyddad";

var emptyThemeSearchFieldString = new Array();
emptyThemeSearchFieldString["en"] = "Insert filter string";
emptyThemeSearchFieldString["es"] = "Inserte el texto para filtrar";
emptyThemeSearchFieldString["de"] = "Filtertext eingeben";
emptyThemeSearchFieldString["fr"] = "Entrer le texte pour filtrer";
emptyThemeSearchFieldString["it"] = "Inserire stringa di filtro";
emptyThemeSearchFieldString["pt_PT"] = "Inserir texto do filtro";
emptyThemeSearchFieldString["pt_BR"] = "Inserir texto do filtro";
emptyThemeSearchFieldString["uk"] = "Ведіть текст для фільтрації";
emptyThemeSearchFieldString["hu"] = "Szűrő feltétel helye";
emptyThemeSearchFieldString["ro"] = "Introduceți textul de filtrare";
emptyThemeSearchFieldString["ru"] = "Введите строку для фильтрации";
emptyThemeSearchFieldString["sl"] = "Vnesi besedilo za filter";
emptyThemeSearchFieldString["nl"] = "Filtertekst ingeven";
emptyThemeSearchFieldString["pl"] = "Wpisz tekst, by filtrować";
emptyThemeSearchFieldString["sv"] = "Infoga filtertext";

var resetThemeSearchFieldTooltipString = new Array();
resetThemeSearchFieldTooltipString["en"] = "Reset map theme search filter";
resetThemeSearchFieldTooltipString["es"] = "Borrar el filtro de búsqueda de temas de mapa";
resetThemeSearchFieldTooltipString["de"] = "Kartenthemenfilter zurücksetzen";
resetThemeSearchFieldTooltipString["fr"] = "Réinitialiser le filtre de recherche pour le modèle de carte";
resetThemeSearchFieldTooltipString["it"] = "Resetta il filtro per la ricerca del tema della mappa";
resetThemeSearchFieldTooltipString["pt_PT"] = "Apagar o filtro de pesquisa do tema de mapa";
resetThemeSearchFieldTooltipString["pt_BR"] = "Apagar o filtro de pesquisa do tema de mapa";
resetThemeSearchFieldTooltipString["uk"] = "Скинути фільтр пошуку тем мапи";
resetThemeSearchFieldTooltipString["hu"] = "Szűrő mező törlése";
resetThemeSearchFieldTooltipString["ro"] = "Resetează filtrul de căutare a tematicii de hartă";
resetThemeSearchFieldTooltipString["ru"] = "Сбросить фильтр поиска темы";
resetThemeSearchFieldTooltipString["sl"] = "Ponastavi iskalni filter";
resetThemeSearchFieldTooltipString["nl"] = "Kaartthemafilter terugplaatsen";
resetThemeSearchFieldTooltipString["pl"] = "Zresetuj filtr tematu mapy";
resetThemeSearchFieldTooltipString["sv"] = "Återställ sökfilter för kartteman";

//title of map panel
var mapPanelTitleString = new Array();
mapPanelTitleString["en"] = "Map";
mapPanelTitleString["es"] = "Mapa";
mapPanelTitleString["de"] = "Karte";
mapPanelTitleString["fr"] = "Carte";
mapPanelTitleString["it"] = "Mappa";
mapPanelTitleString["pt_PT"] = "Mapa";
mapPanelTitleString["pt_BR"] = "Mapa";
mapPanelTitleString["uk"] = "Мапа";
mapPanelTitleString["hu"] = "Térkép";
mapPanelTitleString["ro"] = "Hartă";
mapPanelTitleString["ru"] = "Карта";
mapPanelTitleString["sl"] = "Mapa";
mapPanelTitleString["nl"] = "Kaart";
mapPanelTitleString["pl"] = "Mapa";
mapPanelTitleString["sv"] = "Karta";

//title of map layer tree
var layerTreeTitleString = new Array();
layerTreeTitleString["en"] = "Map Layers";
layerTreeTitleString["es"] = "Capas";
layerTreeTitleString["de"] = "Kartenebenen";
layerTreeTitleString["fr"] = "Couches";
layerTreeTitleString["it"] = "Layer";
layerTreeTitleString["pt_PT"] = "Temas";
layerTreeTitleString["pt_BR"] = "Temas";
layerTreeTitleString["uk"] = "Шари мапи";
layerTreeTitleString["hu"] = "Térkép rétegei";
layerTreeTitleString["ro"] = "Straturi hartă";
layerTreeTitleString["ru"] = "Слои карты";
layerTreeTitleString["sl"] = "Sloji";
layerTreeTitleString["nl"] = "Kaartlagen";
layerTreeTitleString["pl"] = "Zawartość mapy";
layerTreeTitleString["sv"] = "Kartlager";

//title of background layers
var backgroundLayerTitleString = new Array();
backgroundLayerTitleString["en"] = "Background Layers";
backgroundLayerTitleString["es"] = "Background Layers";
backgroundLayerTitleString["de"] = "Hintergrundebenen";
backgroundLayerTitleString["fr"] = "Couches d'arrière-plan";
backgroundLayerTitleString["it"] = "Sfondi";
backgroundLayerTitleString["pt_PT"] = "Background Layers";
backgroundLayerTitleString["pt_BR"] = "Camadas de Fundo";
backgroundLayerTitleString["uk"] = "Background Layers";
backgroundLayerTitleString["hu"] = "Background Layers";
backgroundLayerTitleString["ro"] = "Straturi de Background ";
backgroundLayerTitleString["ru"] = "Background Layers";
backgroundLayerTitleString["sl"] = "Podlage";
backgroundLayerTitleString["nl"] = "Achtergrondlagen";
backgroundLayerTitleString["pl"] = "Warstwy podkładowe";
backgroundLayerTitleString["sv"] = "Bakgrundslager";

//title of layer order panel
var layerOrderPanelTitleString = new Array();
layerOrderPanelTitleString["en"] = "Layer order";
layerOrderPanelTitleString["es"] = "Layer order"; //FIXME
layerOrderPanelTitleString["de"] = "Ebenenreihenfolge";
layerOrderPanelTitleString["fr"] = "Ordre des couches";
layerOrderPanelTitleString["it"] = "Ordine dei layer";
layerOrderPanelTitleString["pt_PT"] = "Ordem e transparência camadas";
layerOrderPanelTitleString["pt_BR"] = "Ordem e transparência camadas";
layerOrderPanelTitleString["uk"] = "Layer order"; //FIXME
layerOrderPanelTitleString["hu"] = "Réteg sorrend";
layerOrderPanelTitleString["ro"] = "Ordinea straturilor";
layerOrderPanelTitleString["ru"] = "Порядок слоев";
layerOrderPanelTitleString["sl"] = "Vrstni red slojev";
layerOrderPanelTitleString["nl"] = "Laagvolgorde";
layerOrderPanelTitleString["pl"] = "Kolejność warstw";
layerOrderPanelTitleString["sv"] = "Lagerordning";

//tooltip of layer settings button in layer order panel
var layerOrderPanelLayerSettingsTooltipString = new Array();
layerOrderPanelLayerSettingsTooltipString["en"] = "Settings";
layerOrderPanelLayerSettingsTooltipString["es"] = "Settings"; //FIXME
layerOrderPanelLayerSettingsTooltipString["de"] = "Einstellungen";
layerOrderPanelLayerSettingsTooltipString["fr"] = "Réglages";
layerOrderPanelLayerSettingsTooltipString["it"] = "Impostazioni";
layerOrderPanelLayerSettingsTooltipString["pt_PT"] = "Configurações";
layerOrderPanelLayerSettingsTooltipString["pt_BR"] = "Configurações";
layerOrderPanelLayerSettingsTooltipString["uk"] = "Settings"; //FIXME
layerOrderPanelLayerSettingsTooltipString["hu"] = "Beállítások";
layerOrderPanelLayerSettingsTooltipString["ro"] = "Setări";
layerOrderPanelLayerSettingsTooltipString["ru"] = "Настройки";
layerOrderPanelLayerSettingsTooltipString["sl"] = "Nastavitve";
layerOrderPanelLayerSettingsTooltipString["nl"] = "Instellingen";
layerOrderPanelLayerSettingsTooltipString["pl"] = "Ustawienia";
layerOrderPanelLayerSettingsTooltipString["sv"] = "Inställningar";

//tooltip of remove layer button in layer order panel
var layerOrderPanelVisibilityChangeTooltipString = new Array();
layerOrderPanelVisibilityChangeTooltipString["en"] = "Change Layer Visibility";
layerOrderPanelVisibilityChangeTooltipString["es"] = "Change Layer Visibility"; //FIXME
layerOrderPanelVisibilityChangeTooltipString["de"] = "Ebenensichtbarkeit ändern";
layerOrderPanelVisibilityChangeTooltipString["fr"] = "Changer la visibilité de la couche";
layerOrderPanelVisibilityChangeTooltipString["it"] = "Imposta la visilità del layer";
layerOrderPanelVisibilityChangeTooltipString["pt_PT"] = "Mudar visibilidade da camada";
layerOrderPanelVisibilityChangeTooltipString["pt_BR"] = "Mudar visibilidade da camada";
layerOrderPanelVisibilityChangeTooltipString["uk"] = "Change Layer Visibility"; //FIXME
layerOrderPanelVisibilityChangeTooltipString["hu"] = "Réteg ki/be kapcsolása";
layerOrderPanelVisibilityChangeTooltipString["ro"] = "Schimbă vizibilitatea stratului";
layerOrderPanelVisibilityChangeTooltipString["ru"] = "Изменить видимость слоя";
layerOrderPanelVisibilityChangeTooltipString["sl"] = "Spremeni vidnost sloja";
layerOrderPanelVisibilityChangeTooltipString["nl"] = "Wijzig laagvisibiliteit";
layerOrderPanelVisibilityChangeTooltipString["pl"] = "Zmień przezroczystość warstwy";
layerOrderPanelVisibilityChangeTooltipString["sv"] = "Ändra lagersynlighet";

//text when dragging layer in layer order panel
var layerOrderPanelMoveLayerTextString = new Array();
layerOrderPanelMoveLayerTextString["en"] = "Move layer";
layerOrderPanelMoveLayerTextString["es"] = "Move layer"; //FIXME
layerOrderPanelMoveLayerTextString["de"] = "Ebene verschieben";
layerOrderPanelMoveLayerTextString["fr"] = "Supprimer la couche";
layerOrderPanelMoveLayerTextString["it"] = "Sposta layer";
layerOrderPanelMoveLayerTextString["pt_PT"] = "Deslocar camada";
layerOrderPanelMoveLayerTextString["pt_BR"] = "Deslocar camada";
layerOrderPanelMoveLayerTextString["uk"] = "Move layer"; //FIXME
layerOrderPanelMoveLayerTextString["hu"] = "Réteg mozgatása";
layerOrderPanelMoveLayerTextString["ro"] = "Mută stratul";
layerOrderPanelMoveLayerTextString["ru"] = "Переместить слой";
layerOrderPanelMoveLayerTextString["sl"] = "Premakni sloj";
layerOrderPanelMoveLayerTextString["nl"] = "Verplaats laag";
layerOrderPanelMoveLayerTextString["pl"] = "Przenieś warstwę";
layerOrderPanelMoveLayerTextString["sv"] = "Flytta lager";

//tooltip of transparency sliders in layer order panel
var layerOrderPanelTransparencyTooltipString = new Array();
layerOrderPanelTransparencyTooltipString["en"] = "Transparency {0}%";
layerOrderPanelTransparencyTooltipString["es"] = "Transparency {0}%"; //FIXME
layerOrderPanelTransparencyTooltipString["de"] = "Transparenz {0}%";
layerOrderPanelTransparencyTooltipString["fr"] = "Transparence {0}%";
layerOrderPanelTransparencyTooltipString["it"] = "Trasparenza {0}%";
layerOrderPanelTransparencyTooltipString["pt_PT"] = "Transparência {0}%";
layerOrderPanelTransparencyTooltipString["pt_BR"] = "Transparência {0}%";
layerOrderPanelTransparencyTooltipString["uk"] = "Transparency {0}%"; //FIXME
layerOrderPanelTransparencyTooltipString["hu"] = "Átlászóság {0}%";
layerOrderPanelTransparencyTooltipString["ro"] = "Transparență {0}%";
layerOrderPanelTransparencyTooltipString["ru"] = "Прозрачность {0}%";
layerOrderPanelTransparencyTooltipString["sl"] = "Prosojnost {0}%";
layerOrderPanelTransparencyTooltipString["nl"] = "Transparantie {0}%";
layerOrderPanelTransparencyTooltipString["pl"] = "Przezroczystość {0}%";
layerOrderPanelTransparencyTooltipString["sv"] = "Transparens {0}%";

//title of legend tab
var legendTabTitleString = new Array();
legendTabTitleString["en"] = "Legend";
legendTabTitleString["es"] = "Leyenda";
legendTabTitleString["de"] = "Legende";
legendTabTitleString["fr"] = "Légende";
legendTabTitleString["it"] = "Legenda";
legendTabTitleString["pt_PT"] = "Legenda";
legendTabTitleString["pt_BR"] = "Legenda";
legendTabTitleString["uk"] = "Легенда";
legendTabTitleString["hu"] = "Jelkulcs";
legendTabTitleString["ro"] = "Legendă";
legendTabTitleString["ru"] = "Легенда";
legendTabTitleString["sl"] = "Legenda";
legendTabTitleString["nl"] = "Legende";
legendTabTitleString["pl"] = "Legenda";
legendTabTitleString["sv"] = "Teckenförklaring";

//legend loading message in legend tab
var legendTabLoadingString = new Array();
legendTabLoadingString["en"] = "Loading legend, please wait...";
legendTabLoadingString["es"] = "Leyenda"; //FIXME
legendTabLoadingString["de"] = "Legende"; //FIXME
legendTabLoadingString["fr"] = "Chargement de la légende, veuillez patienter";
legendTabLoadingString["it"] = "Legenda in caricamento, attendere prego...";
legendTabLoadingString["pt_PT"] = "Legenda"; //FIXME
legendTabLoadingString["pt_BR"] = "Legenda"; //FIXME
legendTabLoadingString["uk"] = "Легенда"; //FIXME 
legendTabLoadingString["hu"] = "Jelkulcs"; //FIXME
legendTabLoadingString["ro"] = "Legenda se încarcă. Te rog așteaptă...";
legendTabLoadingString["ru"] = "Загрузка легенды. Пожалуйста, подождите"; 
legendTabLoadingString["sl"] = "Nalaganje legende, prosimo počakajte..."; 
legendTabLoadingString["ru"] = "Legende laden, gelieve te wachten..."; 
legendTabLoadingString["pl"] = "Ładowanie legendy, proszę czekać...";
legendTabLoadingString["sv"] = "Laddar teckenförklaring, var vänlig vänta...";

//title of metadata tab
var metadataTabTitleString = new Array();
metadataTabTitleString["en"] = "Metadata";
metadataTabTitleString["es"] = "Metadatos";
metadataTabTitleString["de"] = "Metadaten";
metadataTabTitleString["fr"] = "Métadonnées";
metadataTabTitleString["it"] = "Metadati";
metadataTabTitleString["pt_PT"] = "Metadados";
metadataTabTitleString["pt_BR"] = "Metadados";
metadataTabTitleString["uk"] = "Метадані";
metadataTabTitleString["hu"] = "Metaadat";
metadataTabTitleString["ro"] = "Metadate";
metadataTabTitleString["ru"] = "Метаданные";
metadataTabTitleString["sl"] = "Metapodatki";
metadataTabTitleString["nl"] = "Metadata";
metadataTabTitleString["pl"] = "Metadane";
metadataTabTitleString["sv"] = "Metadata";

//title of help window
var helpWindowTitleString = new Array();
helpWindowTitleString["en"] = "Help";
helpWindowTitleString["es"] = "Ayuda";
helpWindowTitleString["de"] = "Hilfe";
helpWindowTitleString["fr"] = "Aide";
helpWindowTitleString["it"] = "Aiuto";
helpWindowTitleString["pt_PT"] = "Ajuda";
helpWindowTitleString["pt_BR"] = "Ajuda";
helpWindowTitleString["uk"] = "Довідка";
helpWindowTitleString["hu"] = "Segítség";
helpWindowTitleString["ro"] = "Ajutor";
helpWindowTitleString["ru"] = "Помощь";
helpWindowTitleString["sl"] = "Pomoč";
helpWindowTitleString["nl"] = "Help";
helpWindowTitleString["pl"] = "Pomoc";
helpWindowTitleString["sv"] = "Hjälp";

//title of legend and per layer metadata window
var legendMetadataWindowTitleString = new Array();
legendMetadataWindowTitleString["en"] = "Legend and metadata information of layer";
legendMetadataWindowTitleString["es"] = "Legend and metadata information of layer"; //FIXME
legendMetadataWindowTitleString["de"] = "Legende und Metadaten der Ebene";
legendMetadataWindowTitleString["fr"] = "Légende et métadonnée de la couche";
legendMetadataWindowTitleString["it"] = "Legenda e metadati del layer";
legendMetadataWindowTitleString["pt_PT"] = "Legenda e metadados da camada";
legendMetadataWindowTitleString["pt_BR"] = "Legenda e metadados da camada";
legendMetadataWindowTitleString["uk"] = "Legend and metadata information of layer"; //FIXME
legendMetadataWindowTitleString["hu"] = "Jelkulcs és metaadat információ a következő rétegről: ";
legendMetadataWindowTitleString["ro"] = "Legenda și informațiile tip metadate ale stratului";
legendMetadataWindowTitleString["ru"] = "Легенда и метаданные слоя";
legendMetadataWindowTitleString["sl"] = "Legenda in metapodatki sloja";
legendMetadataWindowTitleString["nl"] = "Legende en metadata laaginformatie";
legendMetadataWindowTitleString["pl"] = "Legenda i metadane warstwy";
legendMetadataWindowTitleString["sv"] = "Teckenförklaring och metadata för lager";

//title of metadata section
var metadataSectionTitleString = new Array();
metadataSectionTitleString["en"] = "Metadata of layer";
metadataSectionTitleString["es"] = "Metadata of layer"; //FIXME
metadataSectionTitleString["de"] = "Metadaten der Ebene";
metadataSectionTitleString["fr"] = "Métadonnée de la couche";
metadataSectionTitleString["it"] = "Metadati del layer";
metadataSectionTitleString["pt_PT"] = "Metadados da camada";
metadataSectionTitleString["pt_BR"] = "Metadados da camada";
metadataSectionTitleString["uk"] = "Metadata of layer"; //FIXME
metadataSectionTitleString["hu"] = "Réteg neve:";
metadataSectionTitleString["ro"] = "Metadatele stratului";
metadataSectionTitleString["ru"] = "Метаданные слоя";
metadataSectionTitleString["sl"] = "Metapodatki sloja";
metadataSectionTitleString["nl"] = "Metadata van laag ";
metadataSectionTitleString["pl"] = "Metadane warstwy";
metadataSectionTitleString["sv"] = "Metadata för lager";

//Abstract
var abstractString = new Array();
abstractString["en"] = "Abstract:";
abstractString["es"] = "Abstract:"; //FIXME
abstractString["de"] = "Zusammenfassung:";
abstractString["fr"] = "Résumé:";
abstractString["it"] = "Riassunto:";
abstractString["pt_PT"] = "Resumo:";
abstractString["pt_BR"] = "Resumo:";
abstractString["uk"] = "Abstract:"; //FIXME
abstractString["hu"] = "Absztrakt:";
abstractString["ro"] = "Abstract:";
abstractString["ru"] = "Абстрактные:";
abstractString["sl"] = "Opis:";
abstractString["nl"] = "Abstract:";
abstractString["pl"] = "Opis:";
abstractString["sv"] = "Sammanfattning:";

//title of legend and per layer metadata window
var layerQueryable = new Array();
layerQueryable["en"] = "This layer is queryable: ";
layerQueryable["es"] = "This layer is queryable: "; //FIXME
layerQueryable["de"] = "Diese Ebene ist abfragbar: ";
layerQueryable["fr"] = "Cette couche est interrogeable: ";
layerQueryable["it"] = "Questo layer è interrogabile: ";
layerQueryable["pt_PT"] = "A camada pode-se pesquisar: ";
layerQueryable["pt_BR"] = "A camada é pesquisável: ";
layerQueryable["uk"] = "This layer is queryable: "; //FIXME
layerQueryable["hu"] = "Ez a réteg lekérdezhető: ";
layerQueryable["ro"] = "Acest strat este interogabil: ";
layerQueryable["ru"] = "Возможны запросы к слою: ";
layerQueryable["sl"] = "Ta sloj omogoča poizvedovanje: ";
layerQueryable["nl"] = "Deze laag is bevraagbaar: ";
layerQueryable["pl"] = "Ta warstwa ma możliwość wykonania zapytania: ";
layerQueryable["sv"] = "Detta lager är sökbart: ";

//in case we need a yes
var yesString = new Array();
yesString["en"] = "yes";
yesString["es"] = "yes"; //FIXME
yesString["de"] = "ja";
yesString["fr"] = "oui";
yesString["it"] = "sl";
yesString["pt_PT"] = "sim";
yesString["pt_BR"] = "sim";
yesString["uk"] = "yes"; //FIXME
yesString["hu"] = "igen";
yesString["ro"] = "da";
yesString["ru"] = "да";
yesString["sl"] = "da";
yesString["nl"] = "ja";
yesString["pl"] = "tak";
yesString["sv"] = "ja";

//in case we need a no
var noString = new Array();
noString["en"] = "no";
noString["es"] = "no"; //FIXME
noString["de"] = "nein";
noString["fr"] = "non";
noString["it"] = "no";
noString["pt_PT"] = "não";
noString["pt_BR"] = "não";
noString["uk"] = "no"; //FIXME
noString["hu"] = "nem";
noString["ro"] = "nu";
noString["ru"] = "нет";
noString["sl"] = "ne";
noString["nl"] = "nee";
noString["pl"] = "nie";
noString["sv"] = "nej";

//metadata: layer group
var layerGroupString = new Array();
layerGroupString["en"] = "Layer group";
layerGroupString["es"] = "Layer group"; //FIXME
layerGroupString["de"] = "Ebenengruppe";
layerGroupString["fr"] = "Groupe de couches";
layerGroupString["it"] = "Gruppo del layer";
layerGroupString["pt_PT"] = "Layer group"; //FIXME
layerGroupString["pt_BR"] = "Grupo de camadas"; //FIXME
layerGroupString["uk"] = "Layer group"; //FIXME
layerGroupString["hu"] = "Layer group"; //FIXME
layerGroupString["ro"] = "Grup straturi";
layerGroupString["ru"] = "Группа слоев"; //FIXME
layerGroupString["sl"] = "Skupina slojev";
layerGroupString["nl"] = "Laaggroep";
layerGroupString["pl"] = "Grupa warstw";
layerGroupString["sv"] = "Lagergrupp";

//metadata: display field (for tooltips)
var displayFieldString = new Array();
displayFieldString["en"] = "Display-Field";
displayFieldString["es"] = "Display-Field"; //FIXME
displayFieldString["de"] = "Anzeigefeld";
displayFieldString["fr"] = "Affichage";
displayFieldString["it"] = "Campo visualizzato";
displayFieldString["pt_PT"] = "Atributo que será visualizado";
displayFieldString["pt_BR"] = "Atributo que será visualizado";
displayFieldString["uk"] = "Display-Field"; //FIXME
displayFieldString["hu"] = "Megjelenő-Mező";
displayFieldString["ro"] = "Afișaj";
displayFieldString["ru"] = "Display-Field"; //FIXME
displayFieldString["sl"] = "Polje za prikaz";
displayFieldString["nl"] = "Display-veld";
displayFieldString["pl"] = "Pole do wyświetlenia etykiety";
displayFieldString["sv"] = "Visningsfält";

//metadata: coordinate systems
var coordinateSystemsString = new Array();
coordinateSystemsString["en"] = "Available Coordinate Systems";
coordinateSystemsString["es"] = "Available Coordinate Systems"; //FIXME
coordinateSystemsString["de"] = "Verfügbare Koordinatensysteme";
coordinateSystemsString["fr"] = "Système de coordonnées disponible";
coordinateSystemsString["it"] = "Sistemi di coordinate disponibili";
coordinateSystemsString["pt_PT"] = "Sistemas de coordenadas disponíveis";
coordinateSystemsString["pt_BR"] = "Sistemas de coordenadas disponíveis";
coordinateSystemsString["uk"] = "Available Coordinate Systems"; //FIXME
coordinateSystemsString["hu"] = "Elérhető koordináta rendszerek";
coordinateSystemsString["ro"] = "Sisteme de coordonate disponibile";
coordinateSystemsString["ru"] = "Доступные системы координат";
coordinateSystemsString["sl"] = "Razpoložljivi koordinatni sistemi";
coordinateSystemsString["nl"] = "Beschikbare coördinatensystemen";
coordinateSystemsString["pl"] = "Dostępne układy odniesienia";
coordinateSystemsString["sv"] = "Tillgängliga koordinatsystem";

//metadata: geographic extent
var geographicExtentString = new Array();
geographicExtentString["en"] = "Geographic Extent";
geographicExtentString["es"] = "Geographic Extent"; //FIXME
geographicExtentString["de"] = "Geographischer Ausschnitt";
geographicExtentString["fr"] = "Etendue géographique";
geographicExtentString["it"] = "Estensione geografica";
geographicExtentString["pt_PT"] = "Extensão geográfica";
geographicExtentString["pt_BR"] = "Extensão geográfica";
geographicExtentString["uk"] = "Geographic Extent"; //FIXME
geographicExtentString["hu"] = "Földrajzi kiterjedés";
geographicExtentString["ro"] = "Întinderea geografică";
geographicExtentString["ru"] = "Географический экстент";
geographicExtentString["sl"] = "Območje";
geographicExtentString["nl"] = "Geografische extent";
geographicExtentString["pl"] = "Zasięg geograficzny";
geographicExtentString["sv"] = "Geografisk utsträckning";

//metadata: geographic extent
var westString = new Array();
westString["en"] = "west";
westString["es"] = "west"; //FIXME
westString["de"] = "Westen";
westString["fr"] = "ouest";
westString["it"] = "ovest";
westString["pt_PT"] = "oeste";
westString["pt_BR"] = "oeste";
westString["uk"] = "west"; //FIXME
westString["hu"] = "nyugat";
westString["ro"] = "Vest";
westString["ru"] = "запад";
westString["sl"] = "zahod";
westString["nl"] = "west";
westString["pl"] = "zachód";
westString["sv"] = "väster";

//metadata: geographic extent
var eastString = new Array();
eastString["en"] = "east";
eastString["es"] = "east"; //FIXME
eastString["de"] = "Osten";
eastString["fr"] = "est";
eastString["it"] = "est";
eastString["pt_PT"] = "leste";
eastString["pt_BR"] = "leste";
eastString["uk"] = "east"; //FIXME
eastString["hu"] = "kelet";
eastString["ro"] = "Est";
eastString["ru"] = "восток";
eastString["sl"] = "vzhod";
eastString["nl"] = "oost";
eastString["pl"] = "wschód";
eastString["sv"] = "öster";

//metadata: geographic extent
var northString = new Array();
northString["en"] = "north";
northString["es"] = "north"; //FIXME
northString["de"] = "Norden";
northString["fr"] = "nord";
northString["it"] = "nord";
northString["pt_PT"] = "norte";
northString["pt_BR"] = "norte";
northString["uk"] = "north"; //FIXME
northString["hu"] = "észak";
northString["ro"] = "Nord";
northString["ru"] = "север";
northString["sl"] = "sever";
northString["nl"] = "noord";
northString["pl"] = "północ";
northString["sv"] = "norr";

//metadata: geographic extent
var southString = new Array();
southString["en"] = "south";
southString["es"] = "south"; //FIXME
southString["de"] = "Süden";
southString["fr"] = "sud";
southString["it"] = "south"; //FIXME
southString["pt_PT"] = "sul";
southString["pt_BR"] = "sul";
southString["uk"] = "south"; //FIXME
southString["hu"] = "dél";
southString["ro"] = "Sud";
southString["ru"] = "юг";
southString["sl"] = "jug";
southString["nl"] = "zuid";
southString["pl"] = "południe";
southString["sv"] = "söder";

//attributes / fields
var attributesString = new Array();
attributesString["en"] = "Attributes / Fields";
attributesString["es"] = "Atributos";
attributesString["de"] = "Attribute / Felder";
attributesString["fr"] = "Attributs / Champs";
attributesString["it"] = "Attributi / Campi";
attributesString["pt_PT"] = "Atributos";
attributesString["pt_BR"] = "Atributos";
attributesString["uk"] = "Атрибути";
attributesString["hu"] = "Attribútumok / Mezők";
attributesString["ro"] = "Atribute / Câmpuri";
attributesString["ru"] = "Атрибуты / Поля";
attributesString["sl"] = "Opisni podatki / polja";
attributesString["nl"] = "Attributen / Velden";
attributesString["pl"] = "Atrybuty / Pola";
attributesString["sv"] = "Attribut / Fält";

//attribute name string
var attributeNameString = new Array();
attributeNameString["en"] = "Attribute name";
attributeNameString["es"] = "Attribute name";
attributeNameString["de"] = "Attributname";
attributeNameString["fr"] = "Nom des attributs";
attributeNameString["it"] = "Nome dell'attributo";
attributeNameString["pt_PT"] = "Attribute name";
attributeNameString["pt_BR"] = "Nome do atributo";
attributeNameString["uk"] = "Attribute name";
attributeNameString["hu"] = "Attribútum név";
attributeNameString["ro"] = "Nume atribute";
attributeNameString["ru"] = "Название атрибута";
attributeNameString["sl"] = "Ime";
attributeNameString["nl"] = "Attribuutnaam";
attributeNameString["pl"] = "Nazwa atrybutu";
attributeNameString["sv"] = "Attributnamn";

//attribute type string
var attributeTypeString = new Array();
attributeTypeString["en"] = "Type";
attributeTypeString["es"] = "Type";
attributeTypeString["de"] = "Typ";
attributeTypeString["fr"] = "Type";
attributeTypeString["it"] = "Tipo";
attributeTypeString["pt_PT"] = "Type";
attributeTypeString["pt_BR"] = "Tipo";
attributeTypeString["uk"] = "Type";
attributeTypeString["hu"] = "Típus";
attributeTypeString["ro"] = "Tip";
attributeTypeString["ru"] = "Тип";
attributeTypeString["sl"] = "Tip";
attributeTypeString["nl"] = "Type";
attributeTypeString["pl"] = "Typ";
attributeTypeString["sv"] = "Typ";

//attribute comment string
var attributeCommentString = new Array();
attributeCommentString["en"] = "Comment";
attributeCommentString["es"] = "Comment";
attributeCommentString["de"] = "Kommentar";
attributeCommentString["fr"] = "Commentaire";
attributeCommentString["it"] = "Commento";
attributeCommentString["pt_PT"] = "Comment";
attributeCommentString["pt_BR"] = "Comentário";
attributeCommentString["uk"] = "Comment";
attributeCommentString["hu"] = "Megjegyzés";
attributeCommentString["ro"] = "Comentariu";
attributeCommentString["ru"] = "Комментарий";
attributeCommentString["sl"] = "Komentar";
attributeCommentString["nl"] = "Commentaar";
attributeCommentString["pl"] = "Komentarz";
attributeCommentString["sv"] = "Kommentar";

//attribute length string
var attributeLengthString = new Array();
attributeLengthString["en"] = "Length";
attributeLengthString["es"] = "Length";
attributeLengthString["de"] = "Länge";
attributeLengthString["fr"] = "Longueur";
attributeLengthString["it"] = "Lunghezza";
attributeLengthString["pt_PT"] = "Length";
attributeLengthString["pt_BR"] = "Comprimento";
attributeLengthString["uk"] = "Length";
attributeLengthString["hu"] = "Hossz";
attributeLengthString["ro"] = "Lungime";
attributeLengthString["ru"] = "Длина";
attributeLengthString["sl"] = "Dolžina";
attributeLengthString["nl"] = "Lengte";
attributeLengthString["pl"] = "Długość";
attributeLengthString["sv"] = "Längd";

//attribute length string
var attributePrecisionString = new Array();
attributePrecisionString["en"] = "Precision";
attributePrecisionString["es"] = "Precision";
attributePrecisionString["de"] = "Präzision";
attributePrecisionString["fr"] = "Précision";
attributePrecisionString["it"] = "Precisione";
attributePrecisionString["pt_PT"] = "Precision";
attributePrecisionString["pt_BR"] = "Precisão";
attributePrecisionString["uk"] = "Precision";
attributePrecisionString["hu"] = "Pontosság";
attributePrecisionString["ro"] = "Precizie";
attributePrecisionString["ru"] = "Точность";
attributePrecisionString["sl"] = "Natančnost";
attributePrecisionString["nl"] = "Precisie";
attributePrecisionString["pl"] = "Dokładność";
attributePrecisionString["sv"] = "Precision";

//label in main toolbar for object identification
var objectIdentificationTextLabel = new Array();
objectIdentificationTextLabel["en"] = "Object identification: ";
objectIdentificationTextLabel["es"] = "Identificación de objetos: ";
objectIdentificationTextLabel["de"] = "Objektidentifikation: ";
objectIdentificationTextLabel["fr"] = "Identification d'entité: ";
objectIdentificationTextLabel["it"] = "Identificazione oggetti: ";
objectIdentificationTextLabel["pt_PT"] = "Identificação de objectos: ";
objectIdentificationTextLabel["pt_BR"] = "Identificação de objetos: ";
objectIdentificationTextLabel["uk"] = "Вибір об'єкту: ";
objectIdentificationTextLabel["hu"] = "Elem azonosítás: ";
objectIdentificationTextLabel["ro"] = "Identificare obiect: ";
objectIdentificationTextLabel["ru"] = "Идентификация объекта: ";
objectIdentificationTextLabel["sl"] = "Poizvedba na: ";
objectIdentificationTextLabel["nl"] = "Objectidentificatie: ";
objectIdentificationTextLabel["pl"] = "Identyfikacja obiektu: ";
objectIdentificationTextLabel["sv"] = "Identifiera objekt: ";

//Coordinate text label (coordinate display in bottom toolbar of main map window)
var coordinateTextLabel = new Array();
coordinateTextLabel["en"] = "Coordinate:";
coordinateTextLabel["es"] = "Coordenadas:";
coordinateTextLabel["de"] = "Koordinate:";
coordinateTextLabel["fr"] = "Coordonnées:";
coordinateTextLabel["it"] = "Coordinate:";
coordinateTextLabel["pt_PT"] = "Coordenadas:";
coordinateTextLabel["pt_BR"] = "Coordenadas:";
coordinateTextLabel["uk"] = "Координати:";
coordinateTextLabel["hu"] = "Koordináta:";
coordinateTextLabel["ro"] = "Coordonate:";
coordinateTextLabel["ru"] = "Координаты:";
coordinateTextLabel["sl"] = "Koordinate:";
coordinateTextLabel["nl"] = "Coördinaten:";
coordinateTextLabel["pl"] = "Współrzędne:";
coordinateTextLabel["sv"] = "Koordinater:";

//search
var searchFieldDefaultTextString = new Array();
searchFieldDefaultTextString["en"] = "Search (addresses, parcel-nrs, names, etc.)";
searchFieldDefaultTextString["es"] = "Buscar (direcciones, registros, nombres, etc.)";
searchFieldDefaultTextString["de"] = "Suche (Adressen, Parzellenr, Flurnamen, etc.)";
searchFieldDefaultTextString["fr"] = "Chercher (adresses, n° de parcelles, noms, etc.)";
searchFieldDefaultTextString["it"] = "Ricerca (indirizzi, n° delle particelle, nomi, ecc.)";
searchFieldDefaultTextString["pt_PT"] = "Pesquisar (morada, parcelas, nomes, etc.)";
searchFieldDefaultTextString["pt_BR"] = "Pesquisar (endereço, número, nomes, etc.)";
searchFieldDefaultTextString["uk"] = "Шукати (адреси, назви, тощо.)";
searchFieldDefaultTextString["hu"] = "Keres (cím, név, stb.)";
searchFieldDefaultTextString["ro"] = "Caută (adrese, nr. parcele, nume, etc.)";
searchFieldDefaultTextString["ru"] = "Поиск (адрес, индекс, название и др.)";
searchFieldDefaultTextString["sl"] = "Iskanje (naslovi, parcele, imena, ...)";
searchFieldDefaultTextString["nl"] = "Zoeken (adres, perceelnummers, namen, etc.)";
searchFieldDefaultTextString["pl"] = "Szukaj (adresy, numery działek, nazwy, itp.)";
searchFieldDefaultTextString["sv"] = "Sök (address, nummer, namn, osv.)";

//search button
var searchButtonString = new Array();
searchButtonString["en"] = "Search";
searchButtonString["es"] = "Buscar";
searchButtonString["de"] = "Suchen";
searchButtonString["fr"] = "Recherche";
searchButtonString["it"] = "Cerca";
searchButtonString["pt_PT"] = "Pesquisar";
searchButtonString["pt_BR"] = "Pesquisar";
searchButtonString["uk"] = "Пошук";
searchButtonString["hu"] = "Keres";
searchButtonString["ro"] = "Caută";
searchButtonString["ru"] = "Поиск";
searchButtonString["sl"] = "Išči";
searchButtonString["nl"] = "Zoeken";
searchButtonString["pl"] = "Szukaj";
searchButtonString["sv"] = "Sök";

//reset button
var resetButtonString = new Array();
resetButtonString["en"] = "Clear";
resetButtonString["es"] = "Limpiar";
resetButtonString["de"] = "Zurücksetzen";
resetButtonString["fr"] = "Effacer";
resetButtonString["it"] = "Annulla";
resetButtonString["pt_PT"] = "Apagar";
resetButtonString["pt_BR"] = "Apagar";
resetButtonString["uk"] = "Очистити";
resetButtonString["hu"] = "Törlés";
resetButtonString["ro"] = "Șterge";
resetButtonString["ru"] = "Очистить";
resetButtonString["sl"] = "Pobriši";
resetButtonString["nl"] = "Wissen";
resetButtonString["pl"] = "Wyczyść";
resetButtonString["sv"] = "Rensa";

//please wait
var pleaseWaitString = new Array();
pleaseWaitString["en"] = "Please wait";
pleaseWaitString["es"] = "Por favor espere";
pleaseWaitString["de"] = "Bitte warten";
pleaseWaitString["fr"] = "Attendez s'il vous plait";
pleaseWaitString["it"] = "Attendere prego";
pleaseWaitString["pt_PT"] = "Por favor espere";
pleaseWaitString["pt_BR"] = "Por favor aguarde";
pleaseWaitString["uk"] = "Зачекайте";
pleaseWaitString["hu"] = "Kérem várjon";
pleaseWaitString["ro"] = "Așteaptă te rog";
pleaseWaitString["ru"] = "Пожалуйста, подождите";
pleaseWaitString["sl"] = "Prosimo počakajte";
pleaseWaitString["nl"] = "Gelieve te wachten";
pleaseWaitString["pl"] = "Proszę czekać";
pleaseWaitString["sv"] = "Var vänlig vänta";

//search result
var searchResultString = new Array();
searchResultString["en"] = "Search result";
searchResultString["es"] = "Resultado de la búsqueda";
searchResultString["de"] = "Suchresultat";
searchResultString["fr"] = "Résultat de recherche";
searchResultString["it"] = "Risultati della ricerca";
searchResultString["pt_PT"] = "Resultado de pesquisa";
searchResultString["pt_BR"] = "Resultado de pesquisa";
searchResultString["uk"] = "Результати пошуку";
searchResultString["hu"] = "Keresés eredménye";
searchResultString["ro"] = "Rezultatul căutării";
searchResultString["ru"] = "Результаты поиска";
searchResultString["sl"] = "Rezultati iskanja";
searchResultString["nl"] = "Zoekresultaat";
searchResultString["pl"] = "Wyniki wyszukiwania";
searchResultString["sv"] = "Sökresultat";

//network error
var networkErrorString = new Array();
networkErrorString["en"] = "Network error";
networkErrorString["es"] = "Error de red";
networkErrorString["de"] = "Netzwerkfehler";
networkErrorString["fr"] = "Erreur reseau";
networkErrorString["it"] = "Errore di rete";
networkErrorString["pt_PT"] = "Erro de rede";
networkErrorString["pt_BR"] = "Erro de rede";
networkErrorString["uk"] = "Помилка мережі";
networkErrorString["hu"] = "Hálózati hiba";
networkErrorString["ro"] = "Eroare de rețea";
networkErrorString["ru"] = "Сетевая ошибка";
networkErrorString["sl"] = "Težava z omrežjem";
networkErrorString["nl"] = "Netwerkfout";
networkErrorString["pl"] = "Błąd sieci";
networkErrorString["sv"] = "Nätverksfel";

// missing or invalid search params
var missingOrInvalidSearchParams = new Array();
missingOrInvalidSearchParams["en"] = "Missing or invalid values in search form";
missingOrInvalidSearchParams["es"] = "Valores inválidos o faltantes en el formulario de búsqueda";
missingOrInvalidSearchParams["de"] = "Fehlende oder ungültige Werte im Suchformular";
missingOrInvalidSearchParams["fr"] = "Valeurs invalides ou manquantes dans la recherche";
missingOrInvalidSearchParams["it"] = "Valori mancanti o in validi nel modulo di ricerca";
missingOrInvalidSearchParams["pt_PT"] = "Valores em falta ou inválidos no formulário de pesquisa";
missingOrInvalidSearchParams["pt_BR"] = "Valores inexistentes ou inválidos no formulário de pesquisa";
missingOrInvalidSearchParams["uk"] = "Відсутні або не правильні дані в полі пошуку";
missingOrInvalidSearchParams["hu"] = "Hiányzó vagy érvénytelen értékek a keresési űrlapon";
missingOrInvalidSearchParams["ro"] = "Valori lipsă sau invalide în căutare";
missingOrInvalidSearchParams["ru"] = "Отсутствуют или неправильны данные в форме поиска";
missingOrInvalidSearchParams["sl"] = "Nepopolna ali nepravilna vrednost iskanja";
missingOrInvalidSearchParams["nl"] = "Ontbrekende of niet correcte waarden in zoekveld";
missingOrInvalidSearchParams["pl"] = "Brakujące lub błędne formuły w polu wyszukiwania";
missingOrInvalidSearchParams["sv"] = "Saknade eller felaktiga söktermer i sökfältet";

//search error
var searchErrorString = new Array();
searchErrorString["en"] = "Error during search";
searchErrorString["es"] = "Error en la búsqueda";
searchErrorString["de"] = "Fehler bei Suche";
searchErrorString["fr"] = "Erreur pendant la recherche";
searchErrorString["it"] = "Errore durante la ricerca";
searchErrorString["pt_PT"] = "Erro durante a pesquisa";
searchErrorString["pt_BR"] = "Erro durante a pesquisa";
searchErrorString["uk"] = "Помилка під час пошуку";
searchErrorString["hu"] = "Hiba a keresés alatt";
searchErrorString["ro"] = "Eroare în timpul căutarii";
searchErrorString["ru"] = "Ошибка поиска";
searchErrorString["sl"] = "Napaka pri iskanju";
searchErrorString["nl"] = "Fout tijdens het zoeken";
searchErrorString["pl"] = "Błąd podczas wyszukiwania";
searchErrorString["sv"] = "Fel under sökningen";

//search no records found
var searchNoRecordsFoundString = new Array();
searchNoRecordsFoundString["en"] = "No records found"; 
searchNoRecordsFoundString["es"] = "Error en la búsqueda"; // FIXME
searchNoRecordsFoundString["de"] = "Fehler bei Suche"; // FIXME
searchNoRecordsFoundString["fr"] = "Aucun résultat trouvé (la recherche est sensible à la casse)";
searchNoRecordsFoundString["it"] = "Nessun risultato";
searchNoRecordsFoundString["pt_PT"] = "Erro durante a pesquisa"; // FIXME
searchNoRecordsFoundString["pt_BR"] = "Erro durante a pesquisa"; // FIXME
searchNoRecordsFoundString["uk"] = "Помилка під час пошуку"; // FIXME
searchNoRecordsFoundString["hu"] = "Hiba a keresés alatt"; // FIXME
searchNoRecordsFoundString["ro"] = "Nu am găsit niciun rezultat (căutarea e case-sensitive)";
searchNoRecordsFoundString["ru"] = "Записи не найдены"; 
searchNoRecordsFoundString["sl"] = "Ni najdenih rezultatov";
searchNoRecordsFoundString["nl"] = "Geen resultaten gevonden";
searchNoRecordsFoundString["pl"] = "Nie znaleziono szukanych atrybutów";
searchNoRecordsFoundString["sv"] = "Hittar inga poster";

//print settings toolbar title
var printSettingsToolbarTitleString = new Array();
printSettingsToolbarTitleString["en"] = "Print Settings";
printSettingsToolbarTitleString["es"] = "Configuración de impresión";
printSettingsToolbarTitleString["de"] = "Druckeinstellungen";
printSettingsToolbarTitleString["fr"] = "Configuration de l'impression";
printSettingsToolbarTitleString["it"] = "Configurazione della stampa";
printSettingsToolbarTitleString["pt_PT"] = "Configuração de impressão";
printSettingsToolbarTitleString["pt_BR"] = "Configuração de impressão";
printSettingsToolbarTitleString["uk"] = "Налаштовування друку";
printSettingsToolbarTitleString["hu"] = "Nyomtatás beállításai";
printSettingsToolbarTitleString["ro"] = "Setări tipărire/print";
printSettingsToolbarTitleString["ru"] = "Настройки печати";
printSettingsToolbarTitleString["sl"] = "Nastavitve tiskanja";
printSettingsToolbarTitleString["nl"] = "Afdrukinstellingen";
printSettingsToolbarTitleString["pl"] = "Ustawienia druku";
printSettingsToolbarTitleString["sv"] = "Utskriftsinställningar";

//print rotation text label
var printSettingsRotationTextlabelString = new Array();
printSettingsRotationTextlabelString["en"] = "Rotation: ";
printSettingsRotationTextlabelString["es"] = "Rotación: ";
printSettingsRotationTextlabelString["de"] = "Rotation: ";
printSettingsRotationTextlabelString["fr"] = "Rotation: ";
printSettingsRotationTextlabelString["it"] = "Rotazione: ";
printSettingsRotationTextlabelString["pt_PT"] = "Rotação: ";
printSettingsRotationTextlabelString["pt_BR"] = "Rotação: ";
printSettingsRotationTextlabelString["uk"] = "Поворот: ";
printSettingsRotationTextlabelString["hu"] = "Forgatás: ";
printSettingsRotationTextlabelString["ro"] = "Rotește: ";
printSettingsRotationTextlabelString["ru"] = "Поворот: ";
printSettingsRotationTextlabelString["sl"] = "Rotacija: ";
printSettingsRotationTextlabelString["nl"] = "Rotatie: ";
printSettingsRotationTextlabelString["pl"] = "Obrót: ";
printSettingsRotationTextlabelString["sv"] = "Rotation: ";

//print button text
var printButtonTextString = new Array();
printButtonTextString["en"] = "Print";
printButtonTextString["es"] = "Imprimir";
printButtonTextString["de"] = "Drucken";
printButtonTextString["fr"] = "Imprimer";
printButtonTextString["it"] = "Stampa";
printButtonTextString["pt_PT"] = "Impressão";
printButtonTextString["pt_BR"] = "Impressão";
printButtonTextString["uk"] = "Друк";
printButtonTextString["hu"] = "Nyomtat";
printButtonTextString["ro"] = "Printează";
printButtonTextString["ru"] = "Печать";
printButtonTextString["sl"] = "Tiskanje";
printButtonTextString["nl"] = "Afdrukken";
printButtonTextString["pl"] = "Drukuj";
printButtonTextString["sv"] = "Skriv ut";

//print cancel button text
var printCancelButtonTextString = new Array();
printCancelButtonTextString["en"] = "Cancel";
printCancelButtonTextString["es"] = "Cancelar";
printCancelButtonTextString["de"] = "Abbrechen";
printCancelButtonTextString["fr"] = "Annuler";
printCancelButtonTextString["it"] = "Annullare";
printCancelButtonTextString["pt_PT"] = "Cancelar";
printCancelButtonTextString["pt_BR"] = "Cancelar";
printCancelButtonTextString["uk"] = "Відмінити";
printCancelButtonTextString["hu"] = "Mégsem";
printCancelButtonTextString["ro"] = "Anulează";
printCancelButtonTextString["ru"] = "Отмена";
printCancelButtonTextString["sl"] = "Prekini";
printCancelButtonTextString["nl"] = "Annuleren";
printCancelButtonTextString["pl"] = "Anuluj";
printCancelButtonTextString["sv"] = "Avbryt";

//export toolbar title string
var exportSettingsToolbarTitleString = new Array();
exportSettingsToolbarTitleString["en"] = "Export Settings - Enter width/height or create rectangle in map.";
exportSettingsToolbarTitleString["es"] = "Export Settings - Enter width/height or create rectangle in map."; //FIXME
exportSettingsToolbarTitleString["de"] = "Exporteinstellungen - Geben Sie Breite/Höhe ein oder zeichnen Sie ein Rechteck in der Karte.";
exportSettingsToolbarTitleString["fr"] = "Paramètres d'exportation - Entrez une largeur/hauteur ou créer un rectangle sur la carte ";
exportSettingsToolbarTitleString["it"] = "Export Settings - Enter width/height or create rectangle in map."; //FIXME
exportSettingsToolbarTitleString["pt_PT"] = "Export Settings - Enter width/height or create rectangle in map."; //FIXME
exportSettingsToolbarTitleString["pt_BR"] = "Export Settings - Enter width/height or create rectangle in map."; //FIXME
exportSettingsToolbarTitleString["uk"] = "Export Settings - Enter width/height or create rectangle in map."; //FIXME
exportSettingsToolbarTitleString["hu"] = "Export Settings - Enter width/height or create rectangle in map."; //FIXME
exportSettingsToolbarTitleString["ro"] = "Setări Export - Se introduc lăţimea şi înălţimea sau se descrie o zonă din hartă cu mouse-ul.";
exportSettingsToolbarTitleString["ru"] = "Export Settings - Enter width/height or create rectangle in map."; //FIXME
exportSettingsToolbarTitleString["sl"] = "Export Settings - Enter width/height or create rectangle in map."; //FIXME
exportSettingsToolbarTitleString["nl"] = "Exportinstellingen - Geef breedte/hoogte in of creëer een rechtoek in het kaartvenster.";
exportSettingsToolbarTitleString["pl"] = "Export Settings - Enter width/height or create rectangle in map."; //FIXME
exportSettingsToolbarTitleString["sv"] = "Export Settings - Enter width/height or create rectangle in map."; //FIXME

//export window title
var exportWindowTitleString = new Array();
exportWindowTitleString["en"] = "File is being generated by server.";
exportWindowTitleString["es"] = "File is being generated by server."; //FIXME
exportWindowTitleString["de"] = "Datei wird vom Server generiert.";
exportWindowTitleString["fr"] = "Le fichier est généré par le serveur.";
exportWindowTitleString["it"] = "File is being generated by server."; //FIXME
exportWindowTitleString["pt_PT"] = "File is being generated by server."; //FIXME
exportWindowTitleString["pt_BR"] = "File is being generated by server."; //FIXME
exportWindowTitleString["uk"] = "File is being generated by server."; //FIXME
exportWindowTitleString["hu"] = "File is being generated by server."; //FIXME
exportWindowTitleString["ro"] = "Serverul generează fişierul.";
exportWindowTitleString["ru"] = "File is being generated by server."; //FIXME
exportWindowTitleString["sl"] = "File is being generated by server."; //FIXME
exportWindowTitleString["nl"] = "Bestand wordt gegenereerd door de server.";
exportWindowTitleString["pl"] = "File is being generated by server."; //FIXME
exportWindowTitleString["sv"] = "File is being generated by server."; //FIXME

//export width input field
var exportWidthInputField = new Array();
exportWidthInputField["en"] = "Width:";
exportWidthInputField["es"] = "Width"; //FIXME
exportWidthInputField["de"] = "Breite:";
exportWidthInputField["fr"] = "Largeur";
exportWidthInputField["it"] = "Width"; //FIXME
exportWidthInputField["pt_PT"] = "Width"; //FIXME
exportWidthInputField["pt_BR"] = "Width"; //FIXME
exportWidthInputField["uk"] = "Width"; //FIXME
exportWidthInputField["hu"] = "Width"; //FIXME
exportWidthInputField["ro"] = "Lăţime";
exportWidthInputField["ru"] = "Width"; //FIXME
exportWidthInputField["sl"] = "Width"; //FIXME
exportWidthInputField["nl"] = "Breedte";
exportWidthInputField["pl"] = "Width"; //FIXME
exportWidthInputField["sv"] = "Width"; //FIXME

//export height input field
var exportHeightInputField = new Array();
exportHeightInputField["en"] = "Height:";
exportHeightInputField["es"] = "Height"; //FIXME
exportHeightInputField["de"] = "Höhe:";
exportHeightInputField["fr"] = "Hauteur";
exportHeightInputField["it"] = "Height"; //FIXME
exportHeightInputField["pt_PT"] = "Height"; //FIXME
exportHeightInputField["pt_BR"] = "Height"; //FIXME
exportHeightInputField["uk"] = "Height"; //FIXME
exportHeightInputField["hu"] = "Height"; //FIXME
exportHeightInputField["ro"] = "Înălţime";
exportHeightInputField["ru"] = "Height"; //FIXME
exportHeightInputField["sl"] = "Height"; //FIXME
exportHeightInputField["nl"] = "Hoogte";
exportHeightInputField["pl"] = "Height"; //FIXME
exportHeightInputField["sv"] = "Height"; //FIXME

//text label lock export width/height ratio
var exportLockAspectRatioText = new Array();
exportLockAspectRatioText["en"] = "Lock Aspect Ratio";
exportLockAspectRatioText["es"] = "Lock Aspect Ratio"; //FIXME
exportLockAspectRatioText["de"] = "Seitenverhältnis sperren";
exportLockAspectRatioText["fr"] = "Verrouiller les proportions";
exportLockAspectRatioText["it"] = "Lock Aspect Ratio"; //FIXME
exportLockAspectRatioText["pt_PT"] = "Lock Aspect Ratio"; //FIXME
exportLockAspectRatioText["pt_BR"] = "Lock Aspect Ratio"; //FIXME
exportLockAspectRatioText["uk"] = "Lock Aspect Ratio"; //FIXME
exportLockAspectRatioText["hu"] = "Lock Aspect Ratio"; //FIXME
exportLockAspectRatioText["ro"] = "Blochează raport aspect";
exportLockAspectRatioText["ru"] = "Lock Aspect Ratio"; //FIXME
exportLockAspectRatioText["sl"] = "Lock Aspect Ratio"; //FIXME
exportLockAspectRatioText["nl"] = "Aspect ratio vastzetten";
exportLockAspectRatioText["pl"] = "Lock Aspect Ratio"; //FIXME
exportLockAspectRatioText["sv"] = "Lock Aspect Ratio"; //FIXME

//text label transparent
var exportTransparentOptionText = new Array();
exportTransparentOptionText["en"] = "Transparent";
exportTransparentOptionText["es"] = "Transparent"; //FIXME
exportTransparentOptionText["de"] = "Transparent";
exportTransparentOptionText["fr"] = "Transparent";
exportTransparentOptionText["it"] = "Transparent"; //FIXME
exportTransparentOptionText["pt_PT"] = "Transparent"; //FIXME
exportTransparentOptionText["pt_BR"] = "Transparent"; //FIXME
exportTransparentOptionText["uk"] = "Transparent"; //FIXME
exportTransparentOptionText["hu"] = "Transparent"; //FIXME
exportTransparentOptionText["ro"] = "Transparenţă";
exportTransparentOptionText["ru"] = "Transparent"; //FIXME
exportTransparentOptionText["sl"] = "Transparent"; //FIXME
exportTransparentOptionText["nl"] = "Transparant";
exportTransparentOptionText["pl"] = "Transparent"; //FIXME
exportTransparentOptionText["sv"] = "Transparent"; //FIXME

//export button text string
var exportButtonTextString = new Array();
exportButtonTextString["en"] = "Export";
exportButtonTextString["es"] = "Export"; //FIXME
exportButtonTextString["de"] = "Exportieren";
exportButtonTextString["fr"] = "Export";
exportButtonTextString["it"] = "Export"; //FIXME
exportButtonTextString["pt_PT"] = "Export"; //FIXME
exportButtonTextString["pt_BR"] = "Export"; //FIXME
exportButtonTextString["uk"] = "Export"; //FIXME
exportButtonTextString["hu"] = "Export"; //FIXME
exportButtonTextString["ro"] = "Exportă";
exportButtonTextString["ru"] = "Export"; //FIXME
exportButtonTextString["sl"] = "Export"; //FIXME
exportButtonTextString["nl"] = "Exporteer";
exportButtonTextString["pl"] = "Export"; //FIXME
exportButtonTextString["sv"] = "Export"; //FIXME

//export raster file properties text (window title)
var exportFilePropertyTextString = new Array();
exportFilePropertyTextString["en"] = "Rasterfile properties: ";
exportFilePropertyTextString["es"] = "Rasterfile properties: "; //FIXME
exportFilePropertyTextString["de"] = "Rasterdateieigenschaften: ";
exportFilePropertyTextString["fr"] = "Propriétés de l'image : ";
exportFilePropertyTextString["it"] = "Rasterfile properties: "; //FIXME
exportFilePropertyTextString["pt_PT"] = "Rasterfile properties: "; //FIXME
exportFilePropertyTextString["pt_BR"] = "Rasterfile properties: "; //FIXME
exportFilePropertyTextString["uk"] = "Rasterfile properties: "; //FIXME
exportFilePropertyTextString["hu"] = "Rasterfile properties: "; //FIXME
exportFilePropertyTextString["ro"] = "Proprietăţi raster: ";
exportFilePropertyTextString["ru"] = "Rasterfile properties: "; //FIXME
exportFilePropertyTextString["sl"] = "Rasterfile properties: "; //FIXME
exportFilePropertyTextString["nl"] = "Eigenschappen rasterbestand: ";
exportFilePropertyTextString["pl"] = "Rasterfile properties: "; //FIXME
exportFilePropertyTextString["sv"] = "Rasterfile properties: "; //FIXME

//export raster file copy/save hint (window title)
var exportSaveCopyHintText = new Array();
exportSaveCopyHintText["en"] = "Use context menu (right click) to save or copy file.";
exportSaveCopyHintText["es"] = "Use context menu (right click) to save or copy file."; //FIXME
exportSaveCopyHintText["de"] = "Verwenden Sie das Kontext-Menü (Rechts-Klick) zum Speichern oder Kopieren.";
exportSaveCopyHintText["fr"] = "Utilisez le menu contextuel ( clic droit) pour enregistrer ou copier le fichier.";
exportSaveCopyHintText["it"] = "Use context menu (right click) to save or copy file."; //FIXME
exportSaveCopyHintText["pt_PT"] = "Use context menu (right click) to save or copy file."; //FIXME
exportSaveCopyHintText["pt_BR"] = "Use context menu (right click) to save or copy file."; //FIXME
exportSaveCopyHintText["uk"] = "Use context menu (right click) to save or copy file."; //FIXME
exportSaveCopyHintText["hu"] = "Use context menu (right click) to save or copy file."; //FIXME
exportSaveCopyHintText["ro"] = "Foloseşte meniul contextual (click dreapta) pentru salvarea/copierea fişierului.";
exportSaveCopyHintText["ru"] = "Use context menu (right click) to save or copy file."; //FIXME
exportSaveCopyHintText["sl"] = "Use context menu (right click) to save or copy file."; //FIXME
exportSaveCopyHintText["nl"] = "Gebruik het contextmenu (rechtsklik) om het bestand op te slaan of te kopiëren";
exportSaveCopyHintText["pl"] = "Use context menu (right click) to save or copy file."; //FIXME
exportSaveCopyHintText["sv"] = "Use context menu (right click) to save or copy file."; //FIXME

//DXF export disclaimer window title
var DXFExportDisclaimerWindowTitle = new Array();
DXFExportDisclaimerWindowTitle["en"] = "Disclaimer regarding DXF data download and usage.";
DXFExportDisclaimerWindowTitle["es"] = "Disclaimer regarding DXF data download and usage."; //FIXME
DXFExportDisclaimerWindowTitle["de"] = "Haftungsausschluss bezüglich DXF Datendownload und Nutzung.";
DXFExportDisclaimerWindowTitle["fr"] = "Avertissement concernant le téléchargement de données DXF et leur droit d'utilisation.";
DXFExportDisclaimerWindowTitle["it"] = "Disclaimer regarding DXF data download and usage."; //FIXME
DXFExportDisclaimerWindowTitle["pt_PT"] = "Disclaimer regarding DXF data download and usage."; //FIXME
DXFExportDisclaimerWindowTitle["pt_BR"] = "Disclaimer regarding DXF data download and usage."; //FIXME
DXFExportDisclaimerWindowTitle["uk"] = "Disclaimer regarding DXF data download and usage."; //FIXME
DXFExportDisclaimerWindowTitle["hu"] = "Disclaimer regarding DXF data download and usage."; //FIXME
DXFExportDisclaimerWindowTitle["ro"] = "Limitări de responsabilitate privind descărcarea şi folosirea datelor DXF.";
DXFExportDisclaimerWindowTitle["ru"] = "Disclaimer regarding DXF data download and usage."; //FIXME
DXFExportDisclaimerWindowTitle["sl"] = "Disclaimer regarding DXF data download and usage."; //FIXME
DXFExportDisclaimerWindowTitle["nl"] = "Disclaimer met betrekking tot DXF-data -download en -gebruik.";
DXFExportDisclaimerWindowTitle["pl"] = "Disclaimer regarding DXF data download and usage."; //FIXME
DXFExportDisclaimerWindowTitle["sv"] = "Disclaimer regarding DXF data download and usage."; //FIXME

//DXF export disclaimer accept button
var acceptDXFDisclaimerButtonText = new Array();
acceptDXFDisclaimerButtonText["en"] = "Accept";
acceptDXFDisclaimerButtonText["es"] = "Accept"; //FIXME
acceptDXFDisclaimerButtonText["de"] = "Akzeptieren";
acceptDXFDisclaimerButtonText["fr"] = "Accepter";
acceptDXFDisclaimerButtonText["it"] = "Accept"; //FIXME
acceptDXFDisclaimerButtonText["pt_PT"] = "Accept"; //FIXME
acceptDXFDisclaimerButtonText["pt_BR"] = "Accept"; //FIXME
acceptDXFDisclaimerButtonText["uk"] = "Accept"; //FIXME
acceptDXFDisclaimerButtonText["hu"] = "Accept"; //FIXME
acceptDXFDisclaimerButtonText["ro"] = "Accept";
acceptDXFDisclaimerButtonText["ru"] = "Accept"; //FIXME
acceptDXFDisclaimerButtonText["sl"] = "Accept"; //FIXME
acceptDXFDisclaimerButtonText["nl"] = "Accepteer";
acceptDXFDisclaimerButtonText["pl"] = "Accept"; //FIXME
acceptDXFDisclaimerButtonText["sv"] = "Accept"; //FIXME

//DXF export disclaimer decline button
var declineDXFDisclaimerButtonText = new Array();
declineDXFDisclaimerButtonText["en"] = "Decline";
declineDXFDisclaimerButtonText["es"] = "Decline"; //FIXME
declineDXFDisclaimerButtonText["de"] = "Ablehnen";
declineDXFDisclaimerButtonText["fr"] = "Refuser";
declineDXFDisclaimerButtonText["it"] = "Decline"; //FIXME
declineDXFDisclaimerButtonText["pt_PT"] = "Decline"; //FIXME
declineDXFDisclaimerButtonText["pt_BR"] = "Decline"; //FIXME
declineDXFDisclaimerButtonText["uk"] = "Decline"; //FIXME
declineDXFDisclaimerButtonText["hu"] = "Decline"; //FIXME
declineDXFDisclaimerButtonText["ro"] = "Resping";
declineDXFDisclaimerButtonText["ru"] = "Decline"; //FIXME
declineDXFDisclaimerButtonText["sl"] = "Decline"; //FIXME
declineDXFDisclaimerButtonText["nl"] = "Weiger";
declineDXFDisclaimerButtonText["pl"] = "Decline"; //FIXME
declineDXFDisclaimerButtonText["sv"] = "Decline"; //FIXME

//DXF export window title
var DXFExportWindowTitleString = new Array();
DXFExportWindowTitleString["en"] = "DXF Export of the current map extent - Please select a symbology map scale";
DXFExportWindowTitleString["es"] = "DXF Export of the current map extent - Please select a symbology map scale"; //FIXME
DXFExportWindowTitleString["de"] = "DXF Export des aktuellen Kartenausschnittes - Wählen Sie einen Symbolisierungsmassstab";
DXFExportWindowTitleString["fr"] = "Exportation DXF de l'étendue actuelle de la carte - S'il vous plaît sélectionnez une échelle pour la symbologie";
DXFExportWindowTitleString["it"] = "DXF Export of the current map extent - Please select a symbology map scale"; //FIXME
DXFExportWindowTitleString["pt_PT"] = "DXF Export of the current map extent - Please select a symbology map scale"; //FIXME
DXFExportWindowTitleString["pt_BR"] = "DXF Export of the current map extent - Please select a symbology map scale"; //FIXME
DXFExportWindowTitleString["uk"] = "DXF Export of the current map extent - Please select a symbology map scale"; //FIXME
DXFExportWindowTitleString["hu"] = "DXF Export of the current map extent - Please select a symbology map scale"; //FIXME
DXFExportWindowTitleString["ro"] = "Export DXF al hărţii - Selectează te rog scara pentru simboluri";
DXFExportWindowTitleString["ru"] = "DXF Export of the current map extent - Please select a symbology map scale"; //FIXME
DXFExportWindowTitleString["sl"] = "DXF Export of the current map extent - Please select a symbology map scale"; //FIXME
DXFExportWindowTitleString["nl"] = "DXF-export van de huidige kaartextent - Gelieve een symbologiekaartschaal te selecteren";
DXFExportWindowTitleString["pl"] = "DXF Export of the current map extent - Please select a symbology map scale"; //FIXME
DXFExportWindowTitleString["sv"] = "DXF Export of the current map extent - Please select a symbology map scale"; //FIXME

//DXF export symbology scale label
var DXFExportSymbologyScaleLabel = new Array();
DXFExportSymbologyScaleLabel["en"] = "Symbology Scale: ";
DXFExportSymbologyScaleLabel["es"] = "Symbology Scale: "; //FIXME
DXFExportSymbologyScaleLabel["de"] = "Symbolisierungsmassstab: ";
DXFExportSymbologyScaleLabel["fr"] = "Echelle de la symbologie : ";
DXFExportSymbologyScaleLabel["it"] = "Symbology Scale: "; //FIXME
DXFExportSymbologyScaleLabel["pt_PT"] = "Symbology Scale: "; //FIXME
DXFExportSymbologyScaleLabel["pt_BR"] = "Symbology Scale: "; //FIXME
DXFExportSymbologyScaleLabel["uk"] = "Symbology Scale: "; //FIXME
DXFExportSymbologyScaleLabel["hu"] = "Symbology Scale: "; //FIXME
DXFExportSymbologyScaleLabel["ro"] = "Scară simboluri: ";
DXFExportSymbologyScaleLabel["ru"] = "Symbology Scale: "; //FIXME
DXFExportSymbologyScaleLabel["sl"] = "Symbology Scale: "; //FIXME
DXFExportSymbologyScaleLabel["nl"] = "Symbologieschaal: ";
DXFExportSymbologyScaleLabel["pl"] = "Symbology Scale: "; //FIXME
DXFExportSymbologyScaleLabel["sv"] = "Symbology Scale: "; //FIXME

//area limit for the DXF export label
var DXFExportAreaLimitLabel = new Array();
DXFExportAreaLimitLabel["en"] = "Area limit for export: ";
DXFExportAreaLimitLabel["es"] = "Area limit for export: "; //FIXME
DXFExportAreaLimitLabel["de"] = "Grössenlimit beim Export: ";
DXFExportAreaLimitLabel["fr"] = "Zone limite pour l'exportation : ";
DXFExportAreaLimitLabel["it"] = "Area limit for export: "; //FIXME
DXFExportAreaLimitLabel["pt_PT"] = "Area limit for export: "; //FIXME
DXFExportAreaLimitLabel["pt_BR"] = "Area limit for export: "; //FIXME
DXFExportAreaLimitLabel["uk"] = "Area limit for export: "; //FIXME
DXFExportAreaLimitLabel["hu"] = "Area limit for export: "; //FIXME
DXFExportAreaLimitLabel["ro"] = "Zona limită de export: ";
DXFExportAreaLimitLabel["ru"] = "Area limit for export: "; //FIXME
DXFExportAreaLimitLabel["sl"] = "Area limit for export: "; //FIXME
DXFExportAreaLimitLabel["nl"] = "Zonelimiet voor export: ";
DXFExportAreaLimitLabel["pl"] = "Area limit for export: "; //FIXME
DXFExportAreaLimitLabel["sv"] = "Area limit for export: "; //FIXME

//area limit for the DXF export label
var DXFExportCurrentAreaLabel = new Array();
DXFExportCurrentAreaLabel["en"] = "Current area: ";
DXFExportCurrentAreaLabel["es"] = "Current area: "; //FIXME
DXFExportCurrentAreaLabel["de"] = "Aktuelle Fläche: ";
DXFExportCurrentAreaLabel["fr"] = "Surface actuelle : ";
DXFExportCurrentAreaLabel["it"] = "Current area: "; //FIXME
DXFExportCurrentAreaLabel["pt_PT"] = "Current area: "; //FIXME
DXFExportCurrentAreaLabel["pt_BR"] = "Current area: "; //FIXME
DXFExportCurrentAreaLabel["uk"] = "Current area: "; //FIXME
DXFExportCurrentAreaLabel["hu"] = "Current area: "; //FIXME
DXFExportCurrentAreaLabel["ro"] = "Zona curentă: ";
DXFExportCurrentAreaLabel["ru"] = "Current area: "; //FIXME
DXFExportCurrentAreaLabel["sl"] = "Current area: "; //FIXME
DXFExportCurrentAreaLabel["nl"] = "Huidige zone: ";
DXFExportCurrentAreaLabel["pl"] = "Current area: "; //FIXME
DXFExportCurrentAreaLabel["sv"] = "Current area: "; //FIXME

//no limit for the DXF export label
var DXFExportNoAreaLimitLabel = new Array();
DXFExportNoAreaLimitLabel["en"] = "no limit";
DXFExportNoAreaLimitLabel["es"] = "no limit"; //FIXME
DXFExportNoAreaLimitLabel["de"] = "kein Limit";
DXFExportNoAreaLimitLabel["fr"] = "aucune limite";
DXFExportNoAreaLimitLabel["it"] = "no limit"; //FIXME
DXFExportNoAreaLimitLabel["pt_PT"] = "no limit"; //FIXME
DXFExportNoAreaLimitLabel["pt_BR"] = "no limit"; //FIXME
DXFExportNoAreaLimitLabel["uk"] = "no limit"; //FIXME
DXFExportNoAreaLimitLabel["hu"] = "no limit"; //FIXME
DXFExportNoAreaLimitLabel["ro"] = "fară limită";
DXFExportNoAreaLimitLabel["ru"] = "no limit"; //FIXME
DXFExportNoAreaLimitLabel["sl"] = "no limit"; //FIXME
DXFExportNoAreaLimitLabel["nl"] = "Geen limiet";
DXFExportNoAreaLimitLabel["pl"] = "no limit"; //FIXME
DXFExportNoAreaLimitLabel["sv"] = "no limit"; //FIXME

//objectIdentificationModeStrings
var objectIdentificationModeString = new Array();
objectIdentificationModeString["topMostHit"] = new Array();
objectIdentificationModeString["topMostHit"]["en"] = "Topmost hit";
objectIdentificationModeString["topMostHit"]["es"] = "Capa superior";
objectIdentificationModeString["topMostHit"]["de"] = "Oberster Treffer";
objectIdentificationModeString["topMostHit"]["fr"] = "Couche la plus haute";
objectIdentificationModeString["topMostHit"]["it"] = "Layer in alto";
objectIdentificationModeString["topMostHit"]["pt_PT"] = "Tema superior";
objectIdentificationModeString["topMostHit"]["pt_BR"] = "Camapda superior";
objectIdentificationModeString["topMostHit"]["uk"] = "Верхній шар";
objectIdentificationModeString["topMostHit"]["hu"] = "Legfelső találat";
objectIdentificationModeString["topMostHit"]["ro"] = "Stratul superior";
objectIdentificationModeString["topMostHit"]["ru"] = "Верхний слой";
objectIdentificationModeString["topMostHit"]["sl"] = "Zgornji sloj";
objectIdentificationModeString["topMostHit"]["nl"] = "Bovenste laag";
objectIdentificationModeString["topMostHit"]["pl"] = "Najwyższa warstwa";
objectIdentificationModeString["topMostHit"]["sv"] = "Bästa träff";

objectIdentificationModeString["allLayers"] = new Array();
objectIdentificationModeString["allLayers"]["en"] = "All layers";
objectIdentificationModeString["allLayers"]["es"] = "Todas las capas";
objectIdentificationModeString["allLayers"]["de"] = "Alle Ebenen";
objectIdentificationModeString["allLayers"]["fr"] = "Toutes les couches";
objectIdentificationModeString["allLayers"]["it"] = "Tutti i layer";
objectIdentificationModeString["allLayers"]["pt_PT"] = "Todos os temas";
objectIdentificationModeString["allLayers"]["pt_BR"] = "Todas as camadas";
objectIdentificationModeString["allLayers"]["uk"] = "Усі шари";
objectIdentificationModeString["allLayers"]["hu"] = "Minden réteg";
objectIdentificationModeString["allLayers"]["ro"] = "Toate straturile";
objectIdentificationModeString["allLayers"]["ru"] = "Все слои";
objectIdentificationModeString["allLayers"]["sl"] = "Vsi sloji";
objectIdentificationModeString["allLayers"]["nl"] = "Alle lagen";
objectIdentificationModeString["allLayers"]["pl"] = "Wszystkie warstwy";
objectIdentificationModeString["allLayers"]["sv"] = "Alla lager";

objectIdentificationModeString["activeLayers"] = new Array();
objectIdentificationModeString["activeLayers"]["en"] = "Active Layer";
objectIdentificationModeString["activeLayers"]["es"] = "Capa activa";
objectIdentificationModeString["activeLayers"]["de"] = "Aktive Ebene";
objectIdentificationModeString["activeLayers"]["fr"] = "Couche active";
objectIdentificationModeString["activeLayers"]["it"] = "Layer attivo";
objectIdentificationModeString["activeLayers"]["pt_PT"] = "Tema activo";
objectIdentificationModeString["activeLayers"]["pt_BR"] = "Camada ativa";
objectIdentificationModeString["activeLayers"]["uk"] = "Активний шар";
objectIdentificationModeString["activeLayers"]["hu"] = "Aktív réteg";
objectIdentificationModeString["activeLayers"]["ro"] = "Stratul activ";
objectIdentificationModeString["activeLayers"]["ru"] = "Активный слой";
objectIdentificationModeString["activeLayers"]["sl"] = "Aktiven sloj";
objectIdentificationModeString["activeLayers"]["nl"] = "Actieve laag";
objectIdentificationModeString["activeLayers"]["pl"] = "Aktywna warstwa";
objectIdentificationModeString["activeLayers"]["sv"] = "Aktiva lager";

//measure distance result prefix
var measureDistanceResultPrefixString = new Array();
measureDistanceResultPrefixString["en"] = "Distance";
measureDistanceResultPrefixString["es"] = "Distancia";
measureDistanceResultPrefixString["de"] = "Distanz";
measureDistanceResultPrefixString["fr"] = "Distance";
measureDistanceResultPrefixString["it"] = "Distanza";
measureDistanceResultPrefixString["pt_PT"] = "Distância";
measureDistanceResultPrefixString["pt_BR"] = "Distância";
measureDistanceResultPrefixString["uk"] = "Відстань";
measureDistanceResultPrefixString["hu"] = "Távolság";
measureDistanceResultPrefixString["ro"] = "Distanța";
measureDistanceResultPrefixString["ru"] = "Дистанция";
measureDistanceResultPrefixString["sl"] = "Razdalja";
measureDistanceResultPrefixString["nl"] = "Afstand";
measureDistanceResultPrefixString["pl"] = "Odległość";
measureDistanceResultPrefixString["sv"] = "Avstånd";

//distance prefix for result:
var measureAreaResultPrefixString = new Array();
measureAreaResultPrefixString["en"] = "Area";
measureAreaResultPrefixString["es"] = "Área";
measureAreaResultPrefixString["de"] = "Fläche";
measureAreaResultPrefixString["fr"] = "Surface";
measureAreaResultPrefixString["it"] = "Area";
measureAreaResultPrefixString["pt_PT"] = "Área";
measureAreaResultPrefixString["pt_BR"] = "Área";
measureAreaResultPrefixString["uk"] = "Площа";
measureAreaResultPrefixString["hu"] = "Terület";
measureAreaResultPrefixString["ro"] = "Aria";
measureAreaResultPrefixString["ru"] = "Площадь";
measureAreaResultPrefixString["sl"] = "Površina";
measureAreaResultPrefixString["nl"] = "Oppervlakte";
measureAreaResultPrefixString["pl"] = "Powierzchnia";
measureAreaResultPrefixString["sv"] = "Area";

/***********************
Tooltips
***********************/

//zoom rectangle tooltip
var zoomRectangleTooltipString = new Array();
zoomRectangleTooltipString["en"] = "Zoom with rectangle";
zoomRectangleTooltipString["es"] = "Zoom con rectángulo";
zoomRectangleTooltipString["de"] = "Zoom Rechteck aufziehen";
zoomRectangleTooltipString["fr"] = "Zoomer sur un rectangle";
zoomRectangleTooltipString["it"] = "Zoom su rettangolo";
zoomRectangleTooltipString["pt_PT"] = "Zoom com rectângulo";
zoomRectangleTooltipString["pt_BR"] = "Zoom com retângulo";
zoomRectangleTooltipString["uk"] = "Масштабувати прямокутником";
zoomRectangleTooltipString["hu"] = "Nagyítás téglalappal";
zoomRectangleTooltipString["ro"] = "Zoom cu dreptunghi";
zoomRectangleTooltipString["ru"] = "Масштаб прямоугольником";
zoomRectangleTooltipString["sl"] = "Povečava s pravokotnikom";
zoomRectangleTooltipString["nl"] = "Zoomen met rechthoek";
zoomRectangleTooltipString["pl"] = "Zbliż przez zaznaczenie";
zoomRectangleTooltipString["sv"] = "Zooma med rektangel";

//zoom to full view
var zoomFullViewTooltipString = new Array();
zoomFullViewTooltipString["en"] = "Zoom to the maximum map extent";
zoomFullViewTooltipString["es"] = "Zoom a la extensión máxima ";
zoomFullViewTooltipString["de"] = "Zoom zum maximalen Kartenausschnitt";
zoomFullViewTooltipString["fr"] = "Zoomer sur l'étendue complète de la carte";
zoomFullViewTooltipString["it"] = "Zoom all'estensione massima";
zoomFullViewTooltipString["pt_PT"] = "Zoom à extensão total do mapa";
zoomFullViewTooltipString["pt_BR"] = "Zoom para extensão total do mapa";
zoomFullViewTooltipString["uk"] = "Масштаб за розмірами мапи";
zoomFullViewTooltipString["hu"] = "Teljes nézet";
zoomFullViewTooltipString["ro"] = "Zoom la întinderea maximă a hărții";
zoomFullViewTooltipString["ru"] = "Масштаб по размеру карты";
zoomFullViewTooltipString["sl"] = "Povečava na celotno območje";
zoomFullViewTooltipString["nl"] = "Zoomen naar maximum kaartextent";
zoomFullViewTooltipString["pl"] = "Wyświetl całą mapę";
zoomFullViewTooltipString["sv"] = "Zooma till full utsträckning";

//navigation history backward
var navigationHistoryBackwardTooltipString = new Array();
navigationHistoryBackwardTooltipString["en"] = "Navigation history backward";
navigationHistoryBackwardTooltipString["es"] = "Ir a la vista anterior";
navigationHistoryBackwardTooltipString["de"] = "Navigationshistorie zurück";
navigationHistoryBackwardTooltipString["fr"] = "Zone précédente dans l'historique";
navigationHistoryBackwardTooltipString["it"] = "Inquadramento precedente";
navigationHistoryBackwardTooltipString["pt_PT"] = "Enquadramento anterior";
navigationHistoryBackwardTooltipString["pt_BR"] = "Visualização anterior";
navigationHistoryBackwardTooltipString["uk"] = "Історія навігіції: назад";
navigationHistoryBackwardTooltipString["hu"] = "Előző nagyítás";
navigationHistoryBackwardTooltipString["ro"] = "Înapoi la ultima zonă";
navigationHistoryBackwardTooltipString["ru"] = "Навигация назад";
navigationHistoryBackwardTooltipString["sl"] = "Navigacijska zgodovina nazaj";
navigationHistoryBackwardTooltipString["nl"] = "Navigatiegeschiedenis vorige";
navigationHistoryBackwardTooltipString["pl"] = "Przejdź do poprzedniego widoku";
navigationHistoryBackwardTooltipString["sv"] = "Navigationshistorik bakåt";

//navigation history forward
var navigationHistoryForwardTooltipString = new Array();
navigationHistoryForwardTooltipString["en"] = "Navigation history forward";
navigationHistoryForwardTooltipString["es"] = "Ir a la vista posterior";
navigationHistoryForwardTooltipString["de"] = "Navigationshistorie vorwärts";
navigationHistoryForwardTooltipString["fr"] = "Zone suivante dans l'historique";
navigationHistoryForwardTooltipString["it"] = "Inquadramento successivo";
navigationHistoryForwardTooltipString["pt_PT"] = "Enquadramento seguinte";
navigationHistoryForwardTooltipString["pt_BR"] = "Visualização seguinte";
navigationHistoryForwardTooltipString["uk"] = "Історія навігації: вперед";
navigationHistoryForwardTooltipString["hu"] = "Következő nagyítás";
navigationHistoryForwardTooltipString["ro"] = "La zona de dinainte";
navigationHistoryForwardTooltipString["ru"] = "Навигация вперед";
navigationHistoryForwardTooltipString["sl"] = "Navigacijska zgodovina naprej";
navigationHistoryForwardTooltipString["nl"] = "Navigatiegeschiedenis volgende";
navigationHistoryForwardTooltipString["pl"] = "Przejdź do następnego widoku";
navigationHistoryForwardTooltipString["sv"] = "Navigationshistorik frammåt";

//discrete zoom in button above zoom slider
var zoomInTooltipString = new Array();
zoomInTooltipString["en"] = "Zoom in (discrete step)";
zoomInTooltipString["es"] = "Acercar (un nivel)";
zoomInTooltipString["de"] = "Einzoomen (eine Stufe)";
zoomInTooltipString["fr"] = "Zoom avant";
zoomInTooltipString["it"] = "Ingrandisci";
zoomInTooltipString["pt_PT"] = "Ampliar";
zoomInTooltipString["pt_BR"] = "Ampliar";
zoomInTooltipString["uk"] = "Збільшити";
zoomInTooltipString["hu"] = "Nagyítás (diszkrét lépéssekkel)";
zoomInTooltipString["ro"] = "Zoom înăuntru (un nivel)";
zoomInTooltipString["ru"] = "Увеличить";
zoomInTooltipString["sl"] = "Povečava (diskretni način)";
zoomInTooltipString["nl"] = "Inzoomen";
zoomInTooltipString["pl"] = "Zbliż (o jeden poziom)";
zoomInTooltipString["sv"] = "Zooma in (stegvis)";

//discrete zoom in button above zoom slider
var zoomOutTooltipString = new Array();
zoomOutTooltipString["en"] = "Zoom out (discrete step)";
zoomOutTooltipString["es"] = "Alejar (un nivel)";
zoomOutTooltipString["de"] = "Rauszoomen (eine Stufe)";
zoomOutTooltipString["fr"] = "Zoom arrière";
zoomOutTooltipString["it"] = "Rimpicciolisci";
zoomOutTooltipString["pt_PT"] = "Diminuir";
zoomOutTooltipString["pt_BR"] = "Diminuir";
zoomOutTooltipString["uk"] = "Зменшити";
zoomOutTooltipString["hu"] = "Kicsinyít (diszkrét lépéssekkel)";
zoomOutTooltipString["ro"] = "Zoom în afară (un nivel)";
zoomOutTooltipString["ru"] = "Уменьшить";
zoomOutTooltipString["sl"] = "Pomanjšava (diskretni način)";
zoomOutTooltipString["nl"] = "Uitzoomen";
zoomOutTooltipString["pl"] = "Oddal (o jeden poziom)";
zoomOutTooltipString["sv"] = "Zooma ut (stegvis)";

//object identification tooltip
var objIdentificationTooltipString = new Array();
objIdentificationTooltipString["en"] = "Object identification (attribute data)";
objIdentificationTooltipString["es"] = "Indentificación de objetos (atributos)";
objIdentificationTooltipString["de"] = "Objektidentifizierung (Attributdaten)";
objIdentificationTooltipString["fr"] = "Identification d'entité (attributs)";
objIdentificationTooltipString["it"] = "Identificazione di oggetti (attributi)";
objIdentificationTooltipString["pt_PT"] = "Identificação de objectos (atributos)";
objIdentificationTooltipString["pt_BR"] = "Identificação de objetos (atributos)";
objIdentificationTooltipString["uk"] = "Вибір об'єкту (атрибути)";
objIdentificationTooltipString["hu"] = "Elem azonosítás (attribútum adatok)";
objIdentificationTooltipString["ro"] = "Identificare obiect (date atribut)";
objIdentificationTooltipString["ru"] = "Идентификация объектов (атрибуты)";
objIdentificationTooltipString["sl"] = "Identifikacija objekta (atributni podatki)";
objIdentificationTooltipString["nl"] = "Objectidentificatie (attribuutdata)";
objIdentificationTooltipString["pl"] = "Identyfikacja obiektu (atrybuty)";
objIdentificationTooltipString["sv"] = "Identifiera objekt (attributdata)";

//MapTips tooltip
var mapTipsTooltipString = new Array();
mapTipsTooltipString["en"] = "Display MapTips (attribute data)";
mapTipsTooltipString["es"] = "Desplegar textos emergentes (atributos)";
mapTipsTooltipString["de"] = "MapTips anzeigen (Attributdaten)";
mapTipsTooltipString["fr"] = "Afficher les infobulles (attributs)";
mapTipsTooltipString["it"] = "Mostra le informazioni (attributi)";
mapTipsTooltipString["pt_PT"] = "Mostrar MapTips (atributos)";
mapTipsTooltipString["pt_BR"] = "Mostrar dicas do mapa (atributos)";
mapTipsTooltipString["uk"] = "Показівати виринаючі підказки (атрибути)";
mapTipsTooltipString["hu"] = "Megjeleníti térkép szövegbuborákait (attribútum adatok)";
mapTipsTooltipString["ro"] = "Afișează indicii hartă (date atribut)";
mapTipsTooltipString["ru"] = "Показывать подсказки (атрибуты)";
mapTipsTooltipString["sl"] = "Prikaz podatkov zemljevida (opisni podatki)";
mapTipsTooltipString["nl"] = "MapTips weergeven (attribuutdata)";
mapTipsTooltipString["pl"] = "Wyświetlanie podpowiedzi (atrybutów)";
mapTipsTooltipString["sv"] = "Visa karttips (attributdata)";

//Measure Distance
var measureDistanceTooltipString = new Array();
measureDistanceTooltipString["en"] = "Measure distance";
measureDistanceTooltipString["es"] = "Medir distancia";
measureDistanceTooltipString["de"] = "Distanz messen";
measureDistanceTooltipString["fr"] = "Mesurer une distance";
measureDistanceTooltipString["it"] = "Misura distanza";
measureDistanceTooltipString["pt_PT"] = "Medir distância";
measureDistanceTooltipString["pt_BR"] = "Medir distância";
measureDistanceTooltipString["uk"] = "Вимірювання відстані";
measureDistanceTooltipString["hu"] = "Távolság mérés";
measureDistanceTooltipString["ro"] = "Măsoară distanța";
measureDistanceTooltipString["ru"] = "Измерение дистанции";
measureDistanceTooltipString["sl"] = "Merjenje razdalje";
measureDistanceTooltipString["nl"] = "Afstand meten";
measureDistanceTooltipString["pl"] = "Zmierz odległość";
measureDistanceTooltipString["sv"] = "Mät avstånd";

//Measure Area
var measureAreaTooltipString = new Array();
measureAreaTooltipString["en"] = "Measure area";
measureAreaTooltipString["es"] = "Medir área";
measureAreaTooltipString["de"] = "Fläche messen";
measureAreaTooltipString["fr"] = "Mesurer une surface";
measureAreaTooltipString["it"] = "Misura superficie";
measureAreaTooltipString["pt_PT"] = "Medir área";
measureAreaTooltipString["pt_BR"] = "Medir área";
measureAreaTooltipString["uk"] = "Вимірювання площі";
measureAreaTooltipString["hu"] = "Terület mérés";
measureAreaTooltipString["ro"] = "Măsoară aria";
measureAreaTooltipString["ru"] = "Измерение площади";
measureAreaTooltipString["sl"] = "Merjenje površine";
measureAreaTooltipString["nl"] = "Oppervlakte meten";
measureAreaTooltipString["pl"] = "Zmierz powierzchnię";
measureAreaTooltipString["sv"] = "Mät område";

//Print Map
var printMapTooltipString = new Array();
printMapTooltipString["en"] = "Print Map";
printMapTooltipString["es"] = "Imprimir mapa";
printMapTooltipString["de"] = "Karte drucken";
printMapTooltipString["fr"] = "Imprimer la carte";
printMapTooltipString["it"] = "Stampa la mappa";
printMapTooltipString["pt_PT"] = "Imprimir mapa";
printMapTooltipString["pt_BR"] = "Imprimir mapa";
printMapTooltipString["uk"] = "Друкувати мапу";
printMapTooltipString["hu"] = "Térkép nyomtatás";
printMapTooltipString["ro"] = "Tipărește harta";
printMapTooltipString["ru"] = "Печать карты";
printMapTooltipString["sl"] = "Tiskanje karte";
printMapTooltipString["nl"] = "Kaart afdrukken";
printMapTooltipString["pl"] = "Drukuj mapę";
printMapTooltipString["sv"] = "Skriv ut karta";

//Print Map disabled
var printMapDisabledTooltipString = new Array();
printMapDisabledTooltipString["en"] = "Print disabled, no layout is defined in the QGIS project";
printMapDisabledTooltipString["es"] = "Imprimir deshabilitado, no hay formato definido en el proyecto de QGIS";
printMapDisabledTooltipString["de"] = "Drucken nicht möglich, da keine Layouts im QGIS-Projekt definiert wurden";
printMapDisabledTooltipString["fr"] = "Impossible d'imprimer car il n'y a pas de mise en page définie dans le projet QGIS";
printMapDisabledTooltipString["it"] = "Stampa disabilitata: nel progetto QGIS non è definito alcun layout";
printMapDisabledTooltipString["pt_PT"] = "Impressão indisponível: não tem definido nenhum layout no projecto QGIS";
printMapDisabledTooltipString["pt_BR"] = "Impressão indisponível: nenhum layout definido no projeto QGIS";
printMapDisabledTooltipString["uk"] = "Друк відключено, не вказано шар в QGIS проекті";
printMapDisabledTooltipString["hu"] = "Nyomtatás letiltva, nincs nyomtatási nézet definiálva a QGIS projektben";
printMapDisabledTooltipString["ro"] = "Tipărirea nu este activă deoarece niciun model de tipărire nu este definit în proiectul QGIS";
printMapDisabledTooltipString["ru"] = "Печать отключена.  Нет макета в проекте QGIS";
printMapDisabledTooltipString["sl"] = "Tiskanje onemogočeno, manjka predloga v QGIS projektu";
printMapDisabledTooltipString["nl"] = "Afdrukken uitgeschakeld, er is geen layout gedefinieerd in het QGIS-project";
printMapDisabledTooltipString["pl"] = "Drukowanie zablokowane - żaden szablon nie został zdefiniowany w projekcie QGIS";
printMapDisabledTooltipString["sv"] = "Utskrift ej möjlig, ingen layout är skapad i QGIS projektet";

//Export Map
var exportMapTooltipString = new Array();
exportMapTooltipString["en"] = "Export Map as Raster";
exportMapTooltipString["es"] = "Export Map as Raster"; //FIXME
exportMapTooltipString["de"] = "Karte als Raster exportieren";
exportMapTooltipString["fr"] = "Export de la carte comme image";
exportMapTooltipString["it"] = "Export Map as Raster"; //FIXME
exportMapTooltipString["pt_PT"] = "Export Map as Raster"; //FIXME
exportMapTooltipString["pt_BR"] = "Export Map as Raster"; //FIXME
exportMapTooltipString["uk"] = "Export Map as Raster"; //FIXME
exportMapTooltipString["hu"] = "Export Map as Raster"; //FIXME
exportMapTooltipString["ro"] = "Exportă Harta ca Raster";
exportMapTooltipString["ru"] = "Export Map as Raster"; //FIXME
exportMapTooltipString["sl"] = "Export Map as Raster"; //FIXME
exportMapTooltipString["nl"] = "Exporteer kaart als raster";
exportMapTooltipString["pl"] = "Export Map as Raster"; //FIXME
exportMapTooltipString["sv"] = "Export Map as Raster"; //FIXME

//Export DXF
var exportDXFTooltipString = new Array();
exportDXFTooltipString["en"] = "Export map extent as DXF";
exportDXFTooltipString["es"] = "Export map extent as DXF"; //FIXME
exportDXFTooltipString["de"] = "Kartenausschnitt als DXF exportieren";
exportDXFTooltipString["fr"] = "Export de la carte en DXF";
exportDXFTooltipString["it"] = "Export map extent as DXF"; //FIXME
exportDXFTooltipString["pt_PT"] = "Export map extent as DXF"; //FIXME
exportDXFTooltipString["pt_BR"] = "Export map extent as DXF"; //FIXME
exportDXFTooltipString["uk"] = "Export map extent as DXF"; //FIXME
exportDXFTooltipString["hu"] = "Export map extent as DXF"; //FIXME
exportDXFTooltipString["ro"] = "Exportă Harta ca DXF";
exportDXFTooltipString["ru"] = "Export map extent as DXF"; //FIXME
exportDXFTooltipString["sl"] = "Export map extent as DXF"; //FIXME
exportDXFTooltipString["nl"] = "Exporteer kaart als DXF";
exportDXFTooltipString["pl"] = "Export map extent as DXF"; //FIXME
exportDXFTooltipString["sv"] = "Export map extent as DXF"; //FIXME

//Send permalink
var sendPermalinkTooltipString = new Array();
sendPermalinkTooltipString["en"] = "Email a link to this map";
sendPermalinkTooltipString["es"] = "Email a link to this map"; //FIXME
sendPermalinkTooltipString["de"] = "Einen Link auf diese Karte per Email verschicken";
sendPermalinkTooltipString["fr"] = "Partager le lien de cette carte";
sendPermalinkTooltipString["it"] = "Invia un collegamento a questa mappa via email";
sendPermalinkTooltipString["pt_PT"] = "Enviar mapa através E-Mail";
sendPermalinkTooltipString["pt_BR"] = "Enviar mapa por e-mail";
sendPermalinkTooltipString["uk"] = "Email a link to this map"; //FIXME
sendPermalinkTooltipString["hu"] = "Email egy linkkel erre a térképre";
sendPermalinkTooltipString["ro"] = "Trimite un link către această hartă";
sendPermalinkTooltipString["ru"] = "Послать ссылку на карту по E-mail";
sendPermalinkTooltipString["sl"] = "Pošiljanje povezave na trenutno karto po e-pošti";
sendPermalinkTooltipString["nl"] = "Email een link naar deze kaart";
sendPermalinkTooltipString["pl"] = "Udostępnij łącze do mapy przez e-mail";
sendPermalinkTooltipString["sv"] = "Eposta en länk till denna karta";

//Send permalink
var sendPermalinkLinkFromString = new Array();
sendPermalinkLinkFromString["en"] = "Link from ";
sendPermalinkLinkFromString["es"] = "Link from "; //FIXME
sendPermalinkLinkFromString["de"] = "Link von ";
sendPermalinkLinkFromString["fr"] = "Lien de ";
sendPermalinkLinkFromString["it"] = "Collegamento da ";
sendPermalinkLinkFromString["pt_PT"] = "Link de ";
sendPermalinkLinkFromString["pt_BR"] = "Link de ";
sendPermalinkLinkFromString["uk"] = "Link from "; //FIXME
sendPermalinkLinkFromString["hu"] = "Link from ";
sendPermalinkLinkFromString["ro"] = "Link de la ";
sendPermalinkLinkFromString["ru"] = "Ссылка из ";
sendPermalinkLinkFromString["sl"] = "Povezava do zemljevida: ";
sendPermalinkLinkFromString["nl"] = "Link van ";
sendPermalinkLinkFromString["pl"] = "Łącze do mapy z ";
sendPermalinkLinkFromString["sv"] = "Länk från ";

//Show Help
var showHelpTooltipString = new Array();
showHelpTooltipString["en"] = "Show Help";
showHelpTooltipString["es"] = "Mostrar ayuda";
showHelpTooltipString["de"] = "Hilfe öffnen";
showHelpTooltipString["fr"] = "Afficher l'aide";
showHelpTooltipString["it"] = "Mostra l'aiuto";
showHelpTooltipString["pt_PT"] = "Mostrar ajuda";
showHelpTooltipString["pt_BR"] = "Mostrar ajuda";
showHelpTooltipString["uk"] = "Показати довідку";
showHelpTooltipString["hu"] = "Mutasd a súgót";
showHelpTooltipString["ro"] = "Afișează Ajutorul";
showHelpTooltipString["ru"] = "Показать помощь";
showHelpTooltipString["sl"] = "Pomoč";
showHelpTooltipString["nl"] = "Toon Help";
showHelpTooltipString["pl"] = "Pokaż pomoc";
showHelpTooltipString["sv"] = "Visa hjälp";

//Geonames loading string
var geonamesLoadingString = new Array();
geonamesLoadingString["en"] = "Search in Geonames...";
geonamesLoadingString["es"] = "Buscar en Geonames...";
geonamesLoadingString["de"] = "Suche in Geonames...";
geonamesLoadingString["fr"] = "Recherche dans Geonames...";
geonamesLoadingString["it"] = "Ricerca con Geonames...";
geonamesLoadingString["pt_PT"] = "Pesquisar em Geonames...";
geonamesLoadingString["pt_BR"] = "Pesquisar em Geonames...";
geonamesLoadingString["uk"] = "Пошук в Геоданих...";
geonamesLoadingString["hu"] = "Keresés geoadatokban...";
geonamesLoadingString["ro"] = "Caută în Geonames...";
geonamesLoadingString["ru"] = "Поиск в геоданных...";
geonamesLoadingString["sl"] = "Iskanje v Geonames...";
geonamesLoadingString["nl"] = "Zoek in Geonames...";
geonamesLoadingString["pl"] = "Szukaj w Geonames...";
geonamesLoadingString["sv"] = "Sök i Geonames...";

//Geonames empty string
var geonamesEmptyString = new Array();
geonamesEmptyString["en"] = "Search location in Geonames";
geonamesEmptyString["es"] = "Buscar lugar en Geonames";
geonamesEmptyString["de"] = "Suche Ort in Geonames";
geonamesEmptyString["fr"] = "Rechercher le lieu dans Geonames";
geonamesEmptyString["it"] = "Cerca località con Geonames";
geonamesEmptyString["pt_PT"] = "Pesquisar localização em Geonames";
geonamesEmptyString["pt_BR"] = "Pesquisar localização em Geonames";
geonamesEmptyString["uk"] = "Пошук місць у Геоданих";
geonamesEmptyString["hu"] = "Keresés a térképen";
geonamesEmptyString["ro"] = "Caută locația în Geonames";
geonamesEmptyString["ru"] = "Поиск местоположения в геоданных";
geonamesEmptyString["sl"] = "Iskanje lokacije v Geonames";
geonamesEmptyString["nl"] = "Zoek locatie in Geonames";
geonamesEmptyString["pl"] = "Wyszukaj lokację w Geonames";
geonamesEmptyString["sv"] = "Sök plats i Geonames";

//Reset Search Field
var resetSearchFieldTooltipString = new Array();
resetSearchFieldTooltipString["en"] = "Reset/empty Searchfield";
resetSearchFieldTooltipString["es"] = "Limpiar campo de búsqueda";
resetSearchFieldTooltipString["de"] = "Suchfeld zurücksetzen";
resetSearchFieldTooltipString["fr"] = "Réinitialiser la recherche";
resetSearchFieldTooltipString["it"] = "Azzerare il campo di ricerca";
resetSearchFieldTooltipString["pt_PT"] = "Limpar campo de pesquisa";
resetSearchFieldTooltipString["pt_BR"] = "Limpar campo de pesquisa";
resetSearchFieldTooltipString["uk"] = "Очистити поле пошуку";
resetSearchFieldTooltipString["hu"] = "Kereső mező törlése";
resetSearchFieldTooltipString["ro"] = "Resetează/golește câmpul de căutare";
resetSearchFieldTooltipString["ru"] = "Очистить поле поиска";
resetSearchFieldTooltipString["sl"] = "Ponastavi/izprazni iskalna polja";
resetSearchFieldTooltipString["nl"] = "Herstel/Wis zoekveld";
resetSearchFieldTooltipString["pl"] = "Wyczyść pole wyszukiwania";
resetSearchFieldTooltipString["sv"] = "Rensa sökfältet";

//print window title
var printWindowTitleString = new Array();
printWindowTitleString["en"] = "The server is generating a PDF file. For correct up to scale printing please deactivate the option 'Fit to Page'!";
printWindowTitleString["es"] = "El servidor está generando un archivo PDF. Para corregir la escala de impresión desactive la opción 'Ajustar a la página'!";
printWindowTitleString["de"] = "PDF wird vom Server generiert. Für massstäbliches Drucken deaktivieren Sie bitte das 'Anpassen der Seitengrösse'!";
printWindowTitleString["fr"] = "Le serveur génère le fichier PDF. Pour conserver l'échelle, ne pas activer l'option 'Ajuster à la page'!"
printWindowTitleString["it"] = "Il server sta generando il file PDF. Per stampare alla scala corretta disattivare l'opzione 'Ridimensiona alla pagina'!"
printWindowTitleString["pt_PT"] = "O servidor está a gerar um ficheiro PDF. Para imprimir na escala correcta, desactivar a opção 'Fit to Page'!";
printWindowTitleString["pt_BR"] = "O servidor está gerando um arquivo PDF. Para imprimir na escala correta, desativar a opção 'Fit to Page'!";
printWindowTitleString["uk"] = "На сервері створюється PDF файл. Для корректного масштабуваня друку відключіть опцію 'Підігнати до сторінки'!";
printWindowTitleString["hu"] = "A szerver generál egy PDF állományt. A helyes lépték érdekében kérem kapcsolja ki a 'Oldalhoz igazítás' opciót!";
printWindowTitleString["ro"] = "Serverul generează un fișier PDF . Pentru o imprimare la scara corectă deactivați opțiunea 'Fit to Page/Incadrare pe pagină' când dați print la acesta!";
printWindowTitleString["ru"] = "Сервер генерирует PDF файл . Для корректного масштабирования печати отключите опцию 'Подогнать по странице'!";
printWindowTitleString["sl"] = "Priprava PDF dokumenta. Za izris v izbranem merilu je potrebno izklopiti opcijo 'Prilagodi na stran/Fit to Page'!";
printWindowTitleString["nl"] = "De server genereert een PDF-bestand. Om correct op schaal af te drukken, gelieve de optie 'Fit to page' uit te schakelen!";
printWindowTitleString["pl"] = "Serwer generuje plik PDF. Dla poprawnego wydruku skali mapy deaktywuj opcję 'Dopasuj do strony'!";
printWindowTitleString["sv"] = "Servern skapar en PDF-fil. För korrekt skala i utskriften skall 'passa in på sida' ej väljas!";

//print object data alternative string in case no pdf plugin is present in browser
//attention: single quotes around string, partially html formatting
var printingObjectDataAlternativeString1 = new Array();
printingObjectDataAlternativeString1["en"] = 'It looks like your browser cannot open PDF files directly. Not a big problem - you can <a href="';
printingObjectDataAlternativeString1["es"] = 'Su navegador no puede abrir archivos PDF directamente. No es problema - usted puede <a href="';
printingObjectDataAlternativeString1["de"] = 'Es sieht so aus als ob Ihr Browser kein PDF Plugin unterstützt. Kein Problem, Sie können die <a href="';
printingObjectDataAlternativeString1["fr"] = 'Il semble que votre navigateur ne supporte pas le plugin PDF. Pas de problème, vous pouvez <a href="';
printingObjectDataAlternativeString1["it"] = 'Sembra che il vostro browser non possa aprire direttamente i files PDF. Nessun problema -  potete <a href="';
printingObjectDataAlternativeString1["pt_PT"] = 'Parece que o seu navegador não pode abrir ficheiros PDF directamente. Não tem problema - pode <a href="';
printingObjectDataAlternativeString1["pt_BR"] = 'Parece que o seu navegador não pode abrir arquivos PDF diretamente. Não tem problema - <a href="';
printingObjectDataAlternativeString1["uk"] = 'Схоже Ваш оглядач не вміє відкривати PDF файли. Не проблема - скористуйтесь <a href="';
printingObjectDataAlternativeString1["hu"] = 'Böngésző nem tudja megnyítni a PDF állományokat. PDF állomány elérhető <a href="';
printingObjectDataAlternativeString1["ro"] = 'Se pare ca browser-ul tău nu poate deschide direct fișiere PDF. Nu e grav - poți să <a href="';
printingObjectDataAlternativeString1["ru"] = 'Похоже, ваш браузер не может открыть PDF. Нет проблем - <a href="';
printingObjectDataAlternativeString1["sl"] = 'Vaš brskalnik ne omogoča neposrednega prikaza PDF dokumentov, lahko pa - <a href="';
printingObjectDataAlternativeString1["nl"] = 'Het lijkt er op dat je browser het PDF-bestand niet onmiddellijk kan openen. Geen probleem - je kan <a href="';
printingObjectDataAlternativeString1["pl"] = 'Wygląda na to, że Twoja przeglądarka nie może poprawnie otworzyć pliku PDF. To nie jest duży problem - możesz <a href="';
printingObjectDataAlternativeString1["sv"] = 'Det verkar som din webbläsare inte kan öppna PDF-filer direkt. Inget stort problem - du kan <a href="';

//the second part of the string after the URL
//attention: single quotes around string, partially html formatting
var printingObjectDataAlternativeString2 = new Array();
printingObjectDataAlternativeString2["en"] = '">download the PDF file here.</a>.</p></object>';
printingObjectDataAlternativeString2["es"] = '">descargar el archivo PDF aquí.</a>.</p></object>';
printingObjectDataAlternativeString2["de"] = '">PDF-Datei hier herunterladen</a>.</p></object>';
printingObjectDataAlternativeString2["fr"] = '">télécharger le fichier PDF ici</a>.</p></object>';
printingObjectDataAlternativeString2["it"] = '">scaricare il PDF qui.</a>.</p></object>';
printingObjectDataAlternativeString2["pt_PT"] = '">descarregar ficheiro PDF aqui.</a>.</p></object>';
printingObjectDataAlternativeString2["pt_BR"] = '">baixe o arquivo PDF aqui.</a>.</p></object>';
printingObjectDataAlternativeString2["uk"] = '">посиланням</a> аби завантажити PDF файл..</p></object>';
printingObjectDataAlternativeString2["hu"] = '">ezen a linken.</a>.</p></object>';
printingObjectDataAlternativeString2["ro"] = '">descarci fișierul PDF aici.</a>.</p></object>';
printingObjectDataAlternativeString2["ru"] = '">скачайте PDF-файл здесь.</a>.</p></object>';
printingObjectDataAlternativeString2["sl"] = '">prenesite PDF dokument tukaj.</a>.</p></object>';
printingObjectDataAlternativeString2["nl"] = '">het PDF-bestand hier downloaden.</a>.</p></object>';
printingObjectDataAlternativeString2["pl"] = '">ściągnąć plik PDF tutaj.</a>.</p></object>';
printingObjectDataAlternativeString2["sv"] = '">ladda hem PDF-filen här.</a>.</p></object>';

//print button tooltip
var printButtonTooltipString = new Array();
printButtonTooltipString["en"] = "Print (Generate PDF)";
printButtonTooltipString["es"] = "Imprimir (Generar PDF)";
printButtonTooltipString["de"] = "Drucken (PDF generieren)";
printButtonTooltipString["fr"] = "Imprimer (générer un PDF)";
printButtonTooltipString["it"] = "Stampa (generare un PDF)";
printButtonTooltipString["pt_PT"] = "Imprimir (gerar PDF)";
printButtonTooltipString["pt_BR"] = "Imprimir (gerar PDF)";
printButtonTooltipString["uk"] = "Друкувати (PDF)";
printButtonTooltipString["hu"] = "Nyomtat (PDF generálása)";
printButtonTooltipString["ro"] = "Print/Tipărește (Generează un PDF)";
printButtonTooltipString["ru"] = "Печать (Генерация PDF)";
printButtonTooltipString["sl"] = "Tiskanje (Izdela PDF)";
printButtonTooltipString["nl"] = "Afdrukken (Genereer PDF)";
printButtonTooltipString["pl"] = "Drukuj (generuj PDF)";
printButtonTooltipString["sv"] = "Skriv ut (Skapa PDF)";

//print cancel button tooltip
var printCancelButtonTooltipString = new Array();
printCancelButtonTooltipString["en"] = "Cancel Print (Close)";
printCancelButtonTooltipString["es"] = "Cancelar impresión (Cerrar)";
printCancelButtonTooltipString["de"] = "Druck abbrechen (Schliesen)";
printCancelButtonTooltipString["fr"] = "Annuler l'impression (fermer)";
printCancelButtonTooltipString["it"] = "Annulla la stampa (chiudi)";
printCancelButtonTooltipString["pt_PT"] = "Cancelar impressão (Fechar)";
printCancelButtonTooltipString["pt_BR"] = "Cancelar impressão (Fechar)";
printCancelButtonTooltipString["uk"] = "Скасувати друк (Закрити)";
printCancelButtonTooltipString["hu"] = "Mégsem nyomtat (bezár)";
printCancelButtonTooltipString["en"] = "Cancel Print (Close)";
printCancelButtonTooltipString["ro"] = "Anulează Tipărirea (Închide)";
printCancelButtonTooltipString["ru"] = "Отмена печати (Закрыть)";
printCancelButtonTooltipString["sl"] = "Prekini tisk (Zapri)";
printCancelButtonTooltipString["nl"] = "Annuleer afdruk (Sluiten)";
printCancelButtonTooltipString["pl"] = "Anuluj drukowanie (Zamknij)";
printCancelButtonTooltipString["sv"] = "Avbryt utskrift (Stäng)";

//export button tooltip
var exportButtonTooltipString = new Array();
exportButtonTooltipString["en"] = "Export to chosen file format";
exportButtonTooltipString["es"] = "Export to chosen file format"; //FIXME
exportButtonTooltipString["de"] = "Export in gewähltes Dateiformat";
exportButtonTooltipString["fr"] = "Export to chosen file format"; //FIXME
exportButtonTooltipString["it"] = "Export to chosen file format"; //FIXME
exportButtonTooltipString["pt_PT"] = "Export to chosen file format"; //FIXME
exportButtonTooltipString["pt_BR"] = "Export to chosen file format"; //FIXME
exportButtonTooltipString["uk"] = "Export to chosen file format"; //FIXME
exportButtonTooltipString["hu"] = "Export to chosen file format"; //FIXME
exportButtonTooltipString["ro"] = "Exportă în formatul de fişiere ales";
exportButtonTooltipString["ru"] = "Export to chosen file format"; //FIXME
exportButtonTooltipString["sl"] = "Export to chosen file format"; //FIXME
exportButtonTooltipString["nl"] = "Exporteer naar het gekozen bestandsformaat";
exportButtonTooltipString["pl"] = "Export to chosen file format"; //FIXME
exportButtonTooltipString["sv"] = "Export to chosen file format"; //FIXME

//export cancel button tooltip
var exportCancelButtonTooltipString = new Array();
exportCancelButtonTooltipString["en"] = "Cancel Export";
exportCancelButtonTooltipString["es"] = "Cancel Export"; //FIXME
exportCancelButtonTooltipString["de"] = "Export abbrechen";
exportCancelButtonTooltipString["fr"] = "Annuler l'export";
exportCancelButtonTooltipString["it"] = "Cancel Export"; //FIXME
exportCancelButtonTooltipString["pt_PT"] = "Cancel Export"; //FIXME
exportCancelButtonTooltipString["pt_BR"] = "Cancel Export"; //FIXME
exportCancelButtonTooltipString["uk"] = "Cancel Export"; //FIXME
exportCancelButtonTooltipString["hu"] = "Cancel Export"; //FIXME
exportCancelButtonTooltipString["ro"] = "Întrerupe Exportul";
exportCancelButtonTooltipString["ru"] = "Cancel Export"; //FIXME
exportCancelButtonTooltipString["sl"] = "Cancel Export"; //FIXME
exportCancelButtonTooltipString["nl"] = "Export annuleren";
exportCancelButtonTooltipString["pl"] = "Cancel Export"; //FIXME
exportCancelButtonTooltipString["sv"] = "Cancel Export"; //FIXME

//theme switcher button tooltip
var mapThemeButtonTooltipString = new Array();
mapThemeButtonTooltipString["en"] = "Click to choose a new map theme";
mapThemeButtonTooltipString["es"] = "Haga click para escoger un nuevo tema de mapa";
mapThemeButtonTooltipString["de"] = "Klicken Sie um das Kartenthema zu wechseln";
mapThemeButtonTooltipString["fr"] = "Cliquer pour choisir un nouveau modèle de carte";
mapThemeButtonTooltipString["it"] = "Cliccare per scegliere un nuovo tema di mappa";
mapThemeButtonTooltipString["pt_PT"] = "Clique para escolher um novo tema de mapa";
mapThemeButtonTooltipString["pt_BR"] = "Clique para escolher um novo tema de mapa";
mapThemeButtonTooltipString["uk"] = "Клацніть щоб обрати нову тему мапи";
mapThemeButtonTooltipString["hu"] = "Klikkeljen ide új tematikus térkép választásához";
mapThemeButtonTooltipString["ro"] = "Click pentru a alege o nouă tematică de hartă";
mapThemeButtonTooltipString["ru"] = "Кликните чтобы выбрать новую тему для карты";
mapThemeButtonTooltipString["sl"] = "Klikni, da izbereš novo tematiko mape";
mapThemeButtonTooltipString["nl"] = "Klik om een kaartthema te kiezen";
mapThemeButtonTooltipString["pl"] = "Kliknij, aby wybrać nowy temat mapy";
mapThemeButtonTooltipString["sv"] = "Klicka för att välja ett nytt karttema";

//comment, if layer is outside scale range
var tooltipLayerTreeLayerOutsideScale = new Array();
tooltipLayerTreeLayerOutsideScale["en"] = "Visible at scales";
tooltipLayerTreeLayerOutsideScale["es"] = "Visible at scales"; //FIXME
tooltipLayerTreeLayerOutsideScale["de"] = "Sichtbar in den Massstäben";
tooltipLayerTreeLayerOutsideScale["fr"] = "Visible aux échelles";
tooltipLayerTreeLayerOutsideScale["it"] = "Visibile alle scale";
tooltipLayerTreeLayerOutsideScale["pt_PT"] = "Visible at scales"; //FIXME
tooltipLayerTreeLayerOutsideScale["pt_BR"] = "Visível na escala"; //FIXME
tooltipLayerTreeLayerOutsideScale["uk"] = "Visible at scales"; //FIXME
tooltipLayerTreeLayerOutsideScale["hu"] = "Visible at scales"; //FIXME
tooltipLayerTreeLayerOutsideScale["ro"] = "Vizibil la scara";
tooltipLayerTreeLayerOutsideScale["ru"] = "Visible at scales"; //FIXME
tooltipLayerTreeLayerOutsideScale["sl"] = "Vidno pri merilih";
tooltipLayerTreeLayerOutsideScale["nl"] = "Zichtbaar op schalen";
tooltipLayerTreeLayerOutsideScale["pl"] = "Widoczne przy skalach";
tooltipLayerTreeLayerOutsideScale["sv"] = "Synlig i skalor";

/***********************
Error Messages
***********************/

//error messages on startup
var errMessageStartupMapParamString = new Array();
errMessageStartupMapParamString["en"] = "Startup-Parameter 'map' missing!";
errMessageStartupMapParamString["es"] = "Falta el parámetro de inicio 'map'!";
errMessageStartupMapParamString["de"] = "Start-Parameter 'map' fehlt!";
errMessageStartupMapParamString["fr"] = "Le paramètre de démarrage 'map' est manquant!";
errMessageStartupMapParamString["it"] = "Parametro di inizializzazione assente!";
errMessageStartupMapParamString["pt_PT"] = "Parâmetro de inicialização em falta!";
errMessageStartupMapParamString["pt_BR"] = "Parâmetro de inicialização inexistente!";
errMessageStartupMapParamString["uk"] = "Параметр 'map' відсутній!";
errMessageStartupMapParamString["hu"] = "Indulási-Paraméter 'map' hiányzik!";
errMessageStartupMapParamString["ro"] = "Lipsește parametrul de pornire 'map'!";
errMessageStartupMapParamString["ru"] = "Параметр 'map' отсутствует!";
errMessageStartupMapParamString["sl"] = "Začetni parameter 'map' manjka!";
errMessageStartupMapParamString["nl"] = "Startparameter 'map' ontbreekt!";
errMessageStartupMapParamString["pl"] = "Brak początkowego parametru 'map'!";
errMessageStartupMapParamString["sv"] = "Startparameter 'map' saknas!";

//additional startup error message
var errMessageStartupNotAllParamsFoundString = new Array();
errMessageStartupNotAllParamsFoundString["en"] = "Some mandatory startup paramaters are missing or an optional startup parameter is invalid.";
errMessageStartupNotAllParamsFoundString["es"] = "Faltan algunos parámetros obligatorios";
errMessageStartupNotAllParamsFoundString["de"] = "Es wurden nicht alle notwendigen Web-GIS-Parameter gefunden oder ein optionaler Start-Parameter ist falsch.";
errMessageStartupNotAllParamsFoundString["fr"] = "Certains paramètres indispensables manquent.";
errMessageStartupNotAllParamsFoundString["it"] = "Alcuni parametri necessari sono assenti.";
errMessageStartupNotAllParamsFoundString["pt_PT"] = "Faltam alguns parâmetros necessários.";
errMessageStartupNotAllParamsFoundString["pt_BR"] = "Faltam alguns parâmetros necessários.";
errMessageStartupNotAllParamsFoundString["uk"] = "Відсутні обов'язкові параметри, або деякі параметри мають невірне значення.";
errMessageStartupNotAllParamsFoundString["hu"] = "Néhány kötelező indítási paramétert hiányzik, vagy egy opcionális indítási paraméter érvénytelen.";
errMessageStartupNotAllParamsFoundString["ro"] = "Lipsesc niște parametri obligatorii sau un parametru opțional de start este invalid.";
errMessageStartupNotAllParamsFoundString["ru"] = "Отсутствуют обязательные параметры или необязательный параметр неверен.";
errMessageStartupNotAllParamsFoundString["sl"] = "Manjkajo obvezni začetni parametri ali pa je neobvezen parameter nepravilen.";
errMessageStartupNotAllParamsFoundString["nl"] = "Enkele verplichte startparameters ontbreken of een optionele parameter is niet correct.";
errMessageStartupNotAllParamsFoundString["pl"] = "Brakuje niektórych parametrów startowych lub niektóre parametry są błędne.";
errMessageStartupNotAllParamsFoundString["sv"] = "Några obligatoriska startparametrar saknas eller så är en valfri parameter ogiltig.";

//error message if optional startExtent parameter is wrong
var errMessageExtentParamWrongPart1 = new Array();
errMessageExtentParamWrongPart1["en"] = "Start-parameter '";
errMessageExtentParamWrongPart1["es"] = "Parámetro de inicialización '";
errMessageExtentParamWrongPart1["de"] = "Start-Parameter '";
errMessageExtentParamWrongPart1["fr"] = "Paramètre d'initialisation '";
errMessageExtentParamWrongPart1["it"] = "Parametro di inizializzazione '";
errMessageExtentParamWrongPart1["pt_PT"] = "Parâmetro de inicialização '";
errMessageExtentParamWrongPart1["pt_BR"] = "Parâmetro de inicialização '";
errMessageExtentParamWrongPart1["uk"] = "Параметр '";
errMessageExtentParamWrongPart1["hu"] = "Indulási-paraméter '";
errMessageExtentParamWrongPart1["ro"] = "Parametrul de start '";
errMessageExtentParamWrongPart1["ru"] = "Параметр запуска '";
errMessageExtentParamWrongPart1["sl"] = "Začetni parameter '";
errMessageExtentParamWrongPart1["nl"] = "Startparameter '";
errMessageExtentParamWrongPart1["pl"] = "Parametr startowy '";
errMessageExtentParamWrongPart1["sv"] = "Startparameter '";

//error message if optional startExtent parameter is wrong
var errMessageExtentParamWrongPart2 = new Array();
errMessageExtentParamWrongPart2["en"] = "' needs to be in OpenLayers.Bounds format: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["es"] = "' debe estar en formato OpenLayers.Bounds: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["de"] = "' muss im OpenLayers.Bounds format sein: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["fr"] = "' devrait être dans le format OpenLayers.Bounds: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["it"] = "' deve essere nel formato di OpenLayers.Bounds: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["pt_PT"] = "' precisa de estar em OpenLayers.Bounds formato: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["pt_BR"] = "' precisa de estar em OpenLayers.Bounds formato: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["uk"] = "' має бути в форматі OpenLayers.Bounds: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["hu"] = "' következő formátum szükséges OpenLayers.Bounds: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["ro"] = "' trebuie sa fie in format OpenLayers.Bounds: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["ru"] = "' должен быть в формате OpenLayers.Bounds: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["sl"] = "' mora biti v 'OpenLayers.Bounds' formatu: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["nl"] = "' moet in OpenLayers.Bounds-formaat opgesteld zijn: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["pl"] = "' musi być w formacie OpenLayers.Bounds: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["sv"] = "' behöver vara i OpenLayers.Bounds formatet: 'left,bottom,right,top'.";

//error message invalid language code, part 1
var errMessageInvalidLanguageCodeString1 = new Array();
errMessageInvalidLanguageCodeString1["en"] = "Invalid language code provided: ";
errMessageInvalidLanguageCodeString1["es"] = "El código de idioma es inválido: ";
errMessageInvalidLanguageCodeString1["de"] = "Falscher Sprachparameter übergeben: ";
errMessageInvalidLanguageCodeString1["fr"] = "Identifiant de langue incorrect: ";
errMessageInvalidLanguageCodeString1["it"] = "Identificatore della lingua non corretto: ";
errMessageInvalidLanguageCodeString1["pt_PT"] = "Identificação do idioma incorrecto: ";
errMessageInvalidLanguageCodeString1["pt_BR"] = "Identificação do idioma incorreto: ";
errMessageInvalidLanguageCodeString1["uk"] = "Вказано невірний код мови: ";
errMessageInvalidLanguageCodeString1["hu"] = "Érvénytelen nyelvi kód: ";
errMessageInvalidLanguageCodeString1["ro"] = "Codul de limbă este invalid: ";
errMessageInvalidLanguageCodeString1["ru"] = "Неверный код языка: ";
errMessageInvalidLanguageCodeString1["sl"] = "Podana nepravilna koda jezika: ";
errMessageInvalidLanguageCodeString1["nl"] = "Incorrecte taalcode: ";
errMessageInvalidLanguageCodeString1["pl"] = "Wprowadzono niepoprawny kod języka: ";
errMessageInvalidLanguageCodeString1["sv"] = "Ogiltig landskod angiven: ";

//error message invalid language code, part 2
var errMessageInvalidLanguageCodeString2 = new Array();
errMessageInvalidLanguageCodeString2["en"] = "Switching back to default language ";
errMessageInvalidLanguageCodeString2["es"] = "Restableciendo el idioma por defecto ";
errMessageInvalidLanguageCodeString2["de"] = "Wechsle zurück zur Standardsprache ";
errMessageInvalidLanguageCodeString2["fr"] = "La langue par défaut sera utilisée ";
errMessageInvalidLanguageCodeString2["it"] = "Si utilizza la lingua di default ";
errMessageInvalidLanguageCodeString2["pt_PT"] = "Mudar para idioma padrão  ";
errMessageInvalidLanguageCodeString2["pt_BR"] = "Mudar para idioma padrão  ";
errMessageInvalidLanguageCodeString2["uk"] = "Переключаюсь на мову за замовчуванням ";
errMessageInvalidLanguageCodeString2["hu"] = "Visszatér az alapértelmezett nyelvhez ";
errMessageInvalidLanguageCodeString2["ro"] = "Trec pe limba implicită ";
errMessageInvalidLanguageCodeString2["ru"] = "Возвращение к языку по умолчанию ";
errMessageInvalidLanguageCodeString2["sl"] = "Preklop na privzeti jezik ";
errMessageInvalidLanguageCodeString2["nl"] = "Terugschakelen naar de standaardtaal ";
errMessageInvalidLanguageCodeString2["pl"] = "Zmiana języka na domyślny ";
errMessageInvalidLanguageCodeString2["sv"] = "Växla till standardspråk ";

//error message of search combo network request title
var errMessageSearchComboNetworkRequestFailureTitleString = new Array();
errMessageSearchComboNetworkRequestFailureTitleString["en"] = "Network request failed";
errMessageSearchComboNetworkRequestFailureTitleString["es"] = "Falló la solicitud de red";
errMessageSearchComboNetworkRequestFailureTitleString["de"] = "Netzwerk-Request fehlgeschlagen";
errMessageSearchComboNetworkRequestFailureTitleString["fr"] = "La requête réseau a échoué";
errMessageSearchComboNetworkRequestFailureTitleString["it"] = "La richiesta di rete è fallita";
errMessageSearchComboNetworkRequestFailureTitleString["pt_PT"] = "Pedido de rede falhou";
errMessageSearchComboNetworkRequestFailureTitleString["pt_BR"] = "Pedido de rede falhou";
errMessageSearchComboNetworkRequestFailureTitleString["uk"] = "Помилка мережевого запиту";
errMessageSearchComboNetworkRequestFailureTitleString["hu"] = "Hálózati kérés sikertelen";
errMessageSearchComboNetworkRequestFailureTitleString["ro"] = "Cererea de rețea a eșuat";
errMessageSearchComboNetworkRequestFailureTitleString["ru"] = "Ошибка сетевого запроса";
errMessageSearchComboNetworkRequestFailureTitleString["sl"] = "Omrežni zahtevek ni uspel";
errMessageSearchComboNetworkRequestFailureTitleString["nl"] = "Netwerkrequest mislukt";
errMessageSearchComboNetworkRequestFailureTitleString["pl"] = "Zapytanie sieci nie powiodło się";
errMessageSearchComboNetworkRequestFailureTitleString["sv"] = "Nätverksbegäran misslyckades";

//error message of search combo network request detailed message - do not forget the \n at the end of the string!
var errMessageSearchComboNetworkRequestFailureString = new Array();
errMessageSearchComboNetworkRequestFailureString["en"] = "The network request for the geometry of the search result failed:\n";
errMessageSearchComboNetworkRequestFailureString["es"] = "Falló la solicitud de red para la geometría del resultado de la búsqueda:\n";
errMessageSearchComboNetworkRequestFailureString["de"] = "Netzwerk-Request für Geometrie des gesuchten Objekts fehlgeschlagen:\n";
errMessageSearchComboNetworkRequestFailureString["fr"] = "La requête réseau pour la géométrie du résultat de la recherche a échoué:\n";
errMessageSearchComboNetworkRequestFailureString["it"] = "La richiesta di rete è fallita per la geometria del risultato di ricerca:\n";
errMessageSearchComboNetworkRequestFailureString["pt_PT"] = "O pedido de rede para a geometria do resultado de pesquisa falhou:\n";
errMessageSearchComboNetworkRequestFailureString["pt_BR"] = "O pedido de rede para a geometria do resultado de pesquisa falhou:\n";
errMessageSearchComboNetworkRequestFailureString["uk"] = "Не вдалося виконати запит геометрії для результатів пошуку:\n";
errMessageSearchComboNetworkRequestFailureString["hu"] = "Hálozati kérés a keresett geometriára sikertelen:\n";
errMessageSearchComboNetworkRequestFailureString["ro"] = "Cererea de rețea pentru geometria rezultatului căutarii a eșuat:\n";
errMessageSearchComboNetworkRequestFailureString["ru"] = "не удалось выполнить запрос геометрии для результатов поиска:\n";
errMessageSearchComboNetworkRequestFailureString["sl"] = "Omrežni zahtevek za geometrijo iskalnega rezultata ni uspel:\n";
errMessageSearchComboNetworkRequestFailureString["nl"] = "Netwerkrequest voor de geometrie van het zoekresultaat is mislukt:\n";
errMessageSearchComboNetworkRequestFailureString["pl"] = "Zapytanie sieci o geometrię wyszukiwania nie powiodło się:\n";
errMessageSearchComboNetworkRequestFailureString["sv"] = "Nätverksbegäran för den eftersökta geometrin misslyckades:\n";

//error message when help is unavailable for selected language
var errMessageHelpFile = new Array();
errMessageHelpFile["en"] = "Help file unavailable for this language!\n";
errMessageHelpFile["es"] = "Help file unavailable for this language!\n"; //FIXME
errMessageHelpFile["pt_PT"] = "Help file unavailable for this language!\n"; //FIXME
errMessageHelpFile["pt_BR"] = "Help file unavailable for this language!\n"; //FIXME
errMessageHelpFile["uk"] = "Help file unavailable for this language!\n"; //FIXME
errMessageHelpFile["nl"] = "Help-bestand is niet beschikbaar in deze taal!\n";
