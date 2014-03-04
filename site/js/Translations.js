/*
 *
 * Translations.js -- part of Quantum GIS Web Client
 *
 * Copyright (2010-2012), The QGIS Project All rights reserved.
 * Quantum GIS Web Client is released under a BSD license. Please see
 * https://github.com/qgis/qgis-web-client/blob/master/README
 * for the full text of the license and the list of contributors.
 *
*/

//indicating which of the help files have been translated already
var availableHelpLanguages = Array("en","de","hu","it");

//list of available languages
var availableLanguages = new Array();
availableLanguages["en"] = {names:[], translator:"Andreas Neumann"}; //a (dot) neumann (at) carto (dot) net
availableLanguages["es"] = {names:[], translator:"Samuel Mesa, Diana Galindo, Germán Carrillo"}; // samuelmesa (at) gmail (dot) com , drgalindog (at) linuxmail (dot) org
availableLanguages["de"] = {names:[], translator:"Andreas Neumann"}; //a(dot)neumann(at)carto(dot)net
availableLanguages["fr"] = {names:[], translator:"Mayeul Kauffmann, Amandine Schloupt (Aguram)"}; //mayeul (dot) kauffmann (at) free (dot) fr, aschloupt (at) aguram (dot) org
availableLanguages["it"] = {names:[], translator:"Paolo Cavallini (Faunalia), Giovanni Allegri (Gis3W), Alessandro Pasotti (ItOpen)"}; //cavallini (at) faunalia (dot) it
availableLanguages["pt_PT"] = {names:[], translator:"Nelson Silva, Giovanni Manghi (Faunalia)"}; //nelson (dot) jgs (at) gmail (dot) com>, giovanni (dot) manghi (at) faunalia (dot) pt
availableLanguages["uk"] = {names:[], translator:"Pavlo Taranov"}; //taranov (dot) pavel (at) gmail (dot) com>
availableLanguages["hu"] = {names:[], translator:"Szilárd Lajcsik"}; //szilajinfo (at) gmail (dot) com>
availableLanguages["ro"] = {names:[], translator:"Tudor Bărăscu"}; //tudorbarascu (at) gmail (dot) com>
availableLanguages["ru"] = {names:[], translator:"Nikolay Zhigalov"}; //jederlacht1 (at) gmail (dot) com>

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
availableLanguages["en"].names["uk"] = "Англійська";
availableLanguages["en"].names["hu"] = "Angol";
availableLanguages["en"].names["ro"] = "Engleză";
availableLanguages["en"].names["ru"] = "Ангийский";

//German
availableLanguages["de"].names["en"] = "German";
availableLanguages["de"].names["de"] = "Deutsch";
availableLanguages["de"].names["es"] = "Alemán";
availableLanguages["de"].names["fr"] = "Allemand";
availableLanguages["de"].names["it"] = "Tedesco";
availableLanguages["de"].names["pt_PT"] = "Alemão";
availableLanguages["de"].names["uk"] = "Німецька";
availableLanguages["de"].names["hu"] = "Német";
availableLanguages["de"].names["ro"] = "Germană";
availableLanguages["de"].names["ru"] = "Немецкий";

//French
availableLanguages["fr"].names["en"] = "French";
availableLanguages["fr"].names["de"] = "Französisch";
availableLanguages["fr"].names["es"] = "Francés";
availableLanguages["fr"].names["fr"] = "Français";
availableLanguages["fr"].names["it"] = "Francese";
availableLanguages["fr"].names["pt_PT"] = "Francês";
availableLanguages["fr"].names["uk"] = "Французька";
availableLanguages["fr"].names["hu"] = "Francia";
availableLanguages["fr"].names["ro"] = "Franceză";
availableLanguages["fr"].names["ru"] = "Францкузский";

//Italian
availableLanguages["it"].names["en"] = "Italian";
availableLanguages["it"].names["de"] = "Italienisch";
availableLanguages["it"].names["es"] = "Italiano";
availableLanguages["it"].names["fr"] = "Italien";
availableLanguages["it"].names["it"] = "Italiano";
availableLanguages["it"].names["pt_PT"] = "Italiano";
availableLanguages["it"].names["uk"] = "Італійська";
availableLanguages["it"].names["hu"] = "Olasz";
availableLanguages["it"].names["ro"] = "Italiană";
availableLanguages["it"].names["ru"] = "Итальянский";

//Portuguese
availableLanguages["pt_PT"].names["en"] = "Portuguese";
availableLanguages["pt_PT"].names["de"] = "Portugiesisch";
availableLanguages["pt_PT"].names["es"] = "Portugués";
availableLanguages["pt_PT"].names["fr"] = "Portugais";
availableLanguages["pt_PT"].names["it"] = "Portoghese";
availableLanguages["pt_PT"].names["pt_PT"] = "Português";
availableLanguages["pt_PT"].names["uk"] = "Португальська";
availableLanguages["pt_PT"].names["hu"] = "Portugál";
availableLanguages["pt_PT"].names["ro"] = "Portugheză";
availableLanguages["pt_PT"].names["ru"] = "Португальский";

//Ukrainian
availableLanguages["uk"].names["en"] = "Ukrainian";
availableLanguages["uk"].names["de"] = "Ukrainisch";
availableLanguages["uk"].names["es"] = "Ucraniano";
availableLanguages["uk"].names["fr"] = "Ukrainien";
availableLanguages["uk"].names["it"] = "Ucraino";
availableLanguages["uk"].names["pt_PT"] = "Ucraniano";
availableLanguages["uk"].names["uk"] = "Українська";
availableLanguages["uk"].names["hu"] = "Ukrán";
availableLanguages["uk"].names["ro"] = "Ucraineană";
availableLanguages["uk"].names["ru"] = "Украинский";

//Hungarian
availableLanguages["hu"].names["en"] = "Hungarian";
availableLanguages["hu"].names["de"] = "Ungarisch";
availableLanguages["hu"].names["es"] = "Húngaro";
availableLanguages["hu"].names["fr"] = "Hongrois";
availableLanguages["hu"].names["it"] = "Ungherese";
availableLanguages["hu"].names["pt_PT"] = "Húngaro";
availableLanguages["hu"].names["uk"] = "Угорська";
availableLanguages["hu"].names["hu"] = "Magyar";
availableLanguages["hu"].names["ro"] = "Maghiară";
availableLanguages["hu"].names["ru"] = "Венгерский";

//Romanian
availableLanguages["ro"].names["en"] = "Romanian";
availableLanguages["ro"].names["de"] = "Rumänisch";
availableLanguages["ro"].names["es"] = "Rumano";
availableLanguages["ro"].names["fr"] = "Roumain";
availableLanguages["ro"].names["it"] = "Rumeno";
availableLanguages["ro"].names["pt_PT"] = "Romeno";
availableLanguages["ro"].names["uk"] = "Румунська";
availableLanguages["ro"].names["hu"] = "Román";
availableLanguages["ro"].names["ro"] = "Romană";
availableLanguages["ro"].names["ru"] = "Румынский";

//Russian
availableLanguages["ru"].names["en"] = "Russian";
availableLanguages["ru"].names["de"] = "Russish";
availableLanguages["ru"].names["es"] = "Ruso";
availableLanguages["ru"].names["fr"] = "Russe";
availableLanguages["ru"].names["it"] = "Russa";
availableLanguages["ru"].names["pt_PT"] = "Russa";
availableLanguages["ru"].names["uk"] = "Російська";
availableLanguages["ru"].names["hu"] = "Orosz";
availableLanguages["ru"].names["ro"] = "Rusă";
availableLanguages["ru"].names["ru"] = "Русский";

/***********************
Status messages
***********************/

//map loading string displayed when starting the map application
var mapAppLoadingString = new Array();
mapAppLoadingString["en"] = "Loading map application...";
mapAppLoadingString["es"] = "Cargando la aplicación del mapa...";
mapAppLoadingString["de"] = "Kartenapplikation wird geladen...";
mapAppLoadingString["fr"] = "Chargement de l'application cartographique...";
mapAppLoadingString["it"] = "Caricamento dell'applicazione cartografica...";
mapAppLoadingString["pt_PT"] = "Carregando a aplicação do mapa...";
mapAppLoadingString["uk"] = "Завантаження додатку...";
mapAppLoadingString["hu"] = "Térkép kliens betöltése";
mapAppLoadingString["ro"] = "Aplicatia se incarcă...";
mapAppLoadingString["ru"] = "Загрузка приложения...";

//indicating that map app was loaded and we are now loading the map
var mapLoadingString = new Array();
mapLoadingString["en"] = "Loading Map...";
mapLoadingString["es"] = "Cargando mapa...";
mapLoadingString["de"] = "Karte wird geladen...";
mapLoadingString["fr"] = "Chargement de la carte...";
mapLoadingString["it"] = "Caricamento della mappa...";
mapLoadingString["pt_PT"] = "Carregando o mapa...";
mapLoadingString["uk"] = "Завантаження мапи...";
mapLoadingString["hu"] = "Térkép betöltése folyamatban...";
mapLoadingString["ro"] = "Harta se incarcă...";
mapLoadingString["ru"] = "Загрузка карты...";

//mode string for navigation
var modeNavigationString = new Array();
modeNavigationString["en"] = "Mode: navigation. Shift/rectangle or mouse wheel for zooming.";
modeNavigationString["es"] = "Modo: navegación. Shift/rectángulo o rueda del ratón que desea zoom.";
modeNavigationString["de"] = "Modus: Navigation. Shift/Rechteck aufziehen oder Mausrad zum zoomen.";
modeNavigationString["fr"] = "Mode: navigation. Majuscule+tracer un rectangle ou roulette de la souris pour zoomer.";
modeNavigationString["it"] = "Modalità: navigazione. Shift+rettangolo o rotella del mouse per zoomare.";
modeNavigationString["pt_PT"] = "Modo: navegação. Shift+rectângulo ou roda do rato para efectuar zoom.";
modeNavigationString["uk"] = "Режим: навігація. Shift/прямокутне виділення або колесо миші для зміни масштабу.";
modeNavigationString["hu"] = "Mód: navigáció. Shift / téglalappal vagy egér görgővel lehet nagyítani.";
modeNavigationString["ro"] =  "Mod: navigare. Shift+desenează un dreptunghi sau rotița mouse pentru zoom.";
modeNavigationString["ru"] =  "Режим:навигация. Shift+выделение прямоугольника или колесо мыши для изменения масштаба.";


//mode string for rectangle zoom
var modeZoomRectangle = new Array();
modeZoomRectangle["en"] = "Mode: zoom with rectangle. Draw rectangle over region you wish to zoom in.";
modeZoomRectangle["es"] = "Modo: zoom con rectángulo. Dibujar el rectángulo sobre la región que desea acercar.";
modeZoomRectangle["de"] = "Modus: Zoom mit Rechteck. Ziehen Sie die gewünschte Region auf.";
modeZoomRectangle["fr"] = "Mode: zoom rectangle. Dessiner un rectangle pour zoomer sur la zone souhaitée.";
modeZoomRectangle["it"] = "Modalità: zoom con rettangolo. Disegnare un rettangolo sulla zona da ingrandire.";
modeZoomRectangle["pt_PT"] = "Modo: zoom com rectângulo. Desenhar um rectângulo sobre a zona que deseja aproximar.";
modeZoomRectangle["uk"] = "Режим: збільшення прямокутником. Виділіть прямокутником регіон який Ви бажаєте збільшити.";
modeZoomRectangle["hu"] = "Mód: nagyítás kijelöléssel. Rajzolj egy téglalapot a nagyítani kívánt területre.";
modeZoomRectangle["ro"] = "Mod: zoom cu dreptunghi. Se desenează un dreptunghi deasupra regiunii dorite.";
modeZoomRectangle["ru"] = "Режим: масштаб прямоугольником. Выделите прямоугольником регион чтобы увеличить его.";

//mode string for attribute data detailed
var modeObjectIdentificationString = new Array();
modeObjectIdentificationString["en"] = "Mode: object identification. Move the mouse over an object to identify it, click it to view its attribute data.";
modeObjectIdentificationString["es"] = "Modo: Identificación de objeto. Mueva el cursor sobre un objeto para identificarlo, haga click sobre él para ver sus atributos.";
modeObjectIdentificationString["de"] = "Modus: Objektidentifikation. Bewegen Sie die Maus über das Objekt, um es zu identifizeren, klicken Sie es an, um seine Attributdaten anzuzeigen.";
modeObjectIdentificationString["fr"] = "Mode: identification d'objets. Déplacez la souris sur un objet pour l'identifier, cliquez dessus pour afficher les attributs.";
modeObjectIdentificationString["it"] = "Modalità: identificazione di elementi. Identificare un elemento tramite il click.";
modeObjectIdentificationString["pt_PT"] = "Modo: identificação do elemento. Ver atributos dos dados por meio de um clique do rato.";
modeObjectIdentificationString["uk"] = "Режим: вибір об'єкта. Клацніть лівою кнопкою щоб побачити атрибути об'єкта.";
modeObjectIdentificationString["hu"] = "Mód: térképi elem azonosítás. Mozgasd az egeret a kívánt térképi elem fölé, klikkelj rá.";
modeObjectIdentificationString["ro"] = "Mod: identificare obiect. Pentru aceasta se pune mouse-ul pe el; se poate da click pentru a-i vizualiza atributele";
modeObjectIdentificationString["ru"] = "Режим: идентификация объекта. Наведите указатель мыши на объект чтобы идентифицировать его. Кликните чтобы просмотреть атрибуты";

//mode string for map tips (display main attribute with tooltips)
var modeMapTipsString = new Array();
modeMapTipsString["en"] = "Mode: MapTips. Display on mouse over with Tooltips.";
modeMapTipsString["es"] = "Modo: MapTips. Despliega textos emergentes con el cursor del ratón.";
modeMapTipsString["de"] = "Modus: MapTips. Anzeige mit Mouseover über tooltips.";
modeMapTipsString["fr"] = "Mode: infobulles. Afficher les infobulles au survol du curseur de la souris.";
modeMapTipsString["it"] = "Modalità: suggerimenti. Mostrare i suggerimenti con il cursore del mouse.";
modeMapTipsString["pt_PT"] = "Modo: MapTips. Mostra dicas de atributos do mapa.";
modeMapTipsString["uk"] = "Режим: випливаючі підказки. Наведіть мишою на об'єкт аби побачити підказку.";
modeMapTipsString["hu"] = "Mód: Térkép tipp. Megjelenik az egér fölött a buborék információ."; //FIXME
modeMapTipsString["ro"] = "Mod: Indicii hartă. Se afișează cand mouse-u este deasupra.";
modeMapTipsString["ru"] = "Режим: всплывающие подсказки. Показывать подсказки при наведении мыши.";

//mode measure distance
var modeMeasureDistanceString = new Array();
modeMeasureDistanceString["en"] = "Mode: measure distance. Finish with double click.";
modeMeasureDistanceString["es"] = "Modo: medir distancia. Finalizar con doble click.";
modeMeasureDistanceString["de"] = "Modus: Distanzmessung. Beenden mit Doppelklick.";
modeMeasureDistanceString["fr"] = "Mode: mesure de distance. Terminer avec un double-clic.";
modeMeasureDistanceString["it"] = "Modalità: misura delle distanze. Interrompere con un doppio clic.";
modeMeasureDistanceString["pt_PT"] = "Modo: medir distância. Para terminar, efectuar duplo clique.";
modeMeasureDistanceString["uk"] = "Режим: вимірювання відстаней. Подвійне клацання щоб завершити.";
modeMeasureDistanceString["hu"] = "Mód: távolság mérés. Befejezés dupla kattintással.";
modeMeasureDistanceString["ro"] = "Mod: masoară distanța. Se face dublu click pentru a termina.";
modeMeasureDistanceString["ru"] = "Режим: измерение дистанции. Двойной клик чтобы завершить.";

//mode measure area
var modeMeasureAreaString = new Array();
modeMeasureAreaString["en"] = "Mode: measure area. Finish with double click.";
modeMeasureAreaString["es"] = "Modo: medir área. Finalizar con doble click.";
modeMeasureAreaString["de"] = "Modus: Flächenmessung. Beenden mit Doppelklick.";
modeMeasureAreaString["fr"] = "Mode: mesure de surface. Terminer avec un double-clic.";
modeMeasureAreaString["it"] = "Modalità: misura delle superifici. Interrompere con un doppio clic.";
modeMeasureAreaString["pt_PT"] = "Modo: medir área. Para terminar, efectuar duplo clique.";
modeMeasureAreaString["uk"] = "Режим: вимірювання площі. Подвійне клацання щоб завершити.";
modeMeasureAreaString["hu"] = "Mód: terület mérés. Befejezés dupla kattintással.";
modeMeasureAreaString["ro"] = "Mod: masoară aria. Se face dublu click pentru a termina";
modeMeasureAreaString["ru"] = "Режим: измерение площади. Двойной клик чтобы завершить.";

//mode printing
var modePrintingString = new Array();
modePrintingString["en"] = "Mode: printing. Move or rotate the map extent. Print with the 'Print'-Button.";
modePrintingString["es"] = "Modo: imprimir. Mueva o rote la extensión del mapa. Imprima con el botón 'imprimir'.";
modePrintingString["de"] = "Modus: Drucken. Verschieben oder Rotieren Sie den Kartenausschnitt. Drucken mit 'Drucken'-Knopf.";
modePrintingString["fr"] = "Mode: impression. Déplacer ou faire pivoter la zone d'impression. Imprimer avec le bouton 'Imprimer'.";
modePrintingString["it"] = "Modalità: stampa. Spostare o ruotare la zona di stampa. Stampare con il pulsante 'Stampa'.";
modePrintingString["pt_PT"] = "Modo: impressão. Mover ou girar a extensão do mapa. Imprimir com o botão 'Imprimir'.";
modePrintingString["uk"] = "Режим: друк. Обаріть ділянку мапи. Роздрукуйте кнопкою 'Друк'.";
modePrintingString["hu"] = "Mód: nyomtatás. Mozgatható, forgatható a nyomtatási terület.";
modePrintingString["ro"] =  "Mod: tipărire/print. Suprafața hărtii se poate mișca sau roti. Când ești gata apasă butonul 'Print'";
modePrintingString["ru"] =  "Режим:печать. Двигайте и поворачивайте прямоугольник чтобы выбрать участок карты. Для печати нажмите кнопку 'Печать'.";

//indicating is waiting for print
var printLoadingString = new Array();
printLoadingString["en"] = "Printing initialised. Please wait...";
printLoadingString["es"] = "Printing initialised. Please wait..."; //FIXME
printLoadingString["de"] = "Der Druckauftrag ist erfolgt. Bitte haben sie etwas Geduld...";
printLoadingString["fr"] = "Printing initialised. Please wait..."; //FIXME
printLoadingString["it"] = "Printing initialised. Please wait..."; //FIXME
printLoadingString["pt_PT"] = "Printing initialised. Please wait..."; //FIXME
printLoadingString["uk"] = "Printing initialised. Please wait..."; //FIXME
printLoadingString["hu"] = "Printing initialised. Please wait..."; //FIXME
printLoadingString["ro"] = "Printing initialised. Please wait..."; //FIXME
printLoadingString["ru"] = "Печать инициализирована . Пожалуйста, подождите...";

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
leftPanelTitleString["uk"] = "Дані та інструменти";
leftPanelTitleString["hu"] = "Információk és Eszközök";
leftPanelTitleString["ro"] = "Informații și unelte";
leftPanelTitleString["ru"] = "Информация и инструменты";

//title of search panel
var searchPanelTitleString = new Array();
searchPanelTitleString["en"] = "Search";
searchPanelTitleString["es"] = "Buscar";
searchPanelTitleString["de"] = "Suche";
searchPanelTitleString["fr"] = "Chercher";
searchPanelTitleString["it"] = "Cerca";
searchPanelTitleString["pt_PT"] = "Pesquisar";
searchPanelTitleString["uk"] = "Пошук";
searchPanelTitleString["hu"] = "Keres";
searchPanelTitleString["ro"] = "Căutare";
searchPanelTitleString["ru"] = "Поиск";

//text of theme Switcher button
var mapThemeButtonTitleString = new Array();
mapThemeButtonTitleString["en"] = "Map themes";
mapThemeButtonTitleString["es"] = "Temas de mapas";
mapThemeButtonTitleString["de"] = "Kartenthemen";
mapThemeButtonTitleString["fr"] = "Modèles de carte";
mapThemeButtonTitleString["it"] = "Temi della mappa";
mapThemeButtonTitleString["pt_PT"] = "Pesquisar";
mapThemeButtonTitleString["uk"] = "Теми";
mapThemeButtonTitleString["hu"] = "Tematikus térképek";
mapThemeButtonTitleString["ro"] = "Tematici hărti";
mapThemeButtonTitleString["ru"] = "Темы";

//theme switcher window title
var themeSwitcherWindowTitleString = new Array();
themeSwitcherWindowTitleString["en"] = "Map theme choice";
themeSwitcherWindowTitleString["es"] = "Elección de tema de mapa";
themeSwitcherWindowTitleString["de"] = "Kartenthemenwechsel";
themeSwitcherWindowTitleString["fr"] = "Choix des modèles de carte";
themeSwitcherWindowTitleString["it"] = "Scelta del tema della mappa";
themeSwitcherWindowTitleString["pt_PT"] = "Escolha temas de mapa";
themeSwitcherWindowTitleString["uk"] = "Вибір теми";
themeSwitcherWindowTitleString["hu"] = "Tematikus térkép választó";
themeSwitcherWindowTitleString["ro"] = "Alegere tematică hartă";
themeSwitcherWindowTitleString["ru"] = "Выбор темы";

//theme switcher filter label string
var themeSwitcherFilterLabelString = new Array();
themeSwitcherFilterLabelString["en"] = "Filter by map title: ";
themeSwitcherFilterLabelString["es"] = "Filtrar por título de mapa: ";
themeSwitcherFilterLabelString["de"] = "Filterung nach Kartentitel: ";
themeSwitcherFilterLabelString["fr"] = "Filtrer par titre de carte: ";
themeSwitcherFilterLabelString["it"] = "Filtra sul titolo della mappa: ";
themeSwitcherFilterLabelString["pt_PT"] = "Filtrar pelo titulo do mapa: ";
themeSwitcherFilterLabelString["uk"] = "Фільтр за назвою мапи: ";
themeSwitcherFilterLabelString["hu"] = "Szűrés térkép cím alapján:";
themeSwitcherFilterLabelString["ro"] = "Filtrează harta dupa titlu: ";
themeSwitcherFilterLabelString["ru"] = "Фильтр тем по названию: ";

//theme switcher all themes string in list view
var themeSwitcherAllThemesListViewString = new Array();
themeSwitcherAllThemesListViewString["en"] = "All map themes";
themeSwitcherAllThemesListViewString["es"] = "Todos los temas de mapas";
themeSwitcherAllThemesListViewString["de"] = "Alle Kartenthemen";
themeSwitcherAllThemesListViewString["fr"] = "Tous les modèles de carte";
themeSwitcherAllThemesListViewString["it"] = "Tutti i temi della mappa";
themeSwitcherAllThemesListViewString["pt_PT"] = "Todos os temas de mapa";
themeSwitcherAllThemesListViewString["uk"] = "Усі теми мап";
themeSwitcherAllThemesListViewString["hu"] = "Összes tematikus térkép";
themeSwitcherAllThemesListViewString["ro"] = "Toate tematicile hărtilor";
themeSwitcherAllThemesListViewString["ru"] = "Все темы";

var themeSwitcherTooltipResponsibleString = new Array();
themeSwitcherTooltipResponsibleString["en"] = "Responsible: ";
themeSwitcherTooltipResponsibleString["es"] = "Responsable: ";
themeSwitcherTooltipResponsibleString["de"] = "Verantwortlich: ";
themeSwitcherTooltipResponsibleString["fr"] = "Responsable: ";
themeSwitcherTooltipResponsibleString["it"] = "Responsabile: ";
themeSwitcherTooltipResponsibleString["pt_PT"] = "Responsavel: ";
themeSwitcherTooltipResponsibleString["uk"] = "Відповідальний: ";
themeSwitcherTooltipResponsibleString["hu"] = "Felelős: ";
themeSwitcherTooltipResponsibleString["ro"] = "Responsabil: ";
themeSwitcherTooltipResponsibleString["ru"] = "Ответственный: ";
//either tags or keywords
var themeSwitcherTooltipTagString = new Array();
themeSwitcherTooltipTagString["en"] = "Tags: ";
themeSwitcherTooltipTagString["es"] = "Etiquetas: ";
themeSwitcherTooltipTagString["de"] = "Stichwörter: ";
themeSwitcherTooltipTagString["fr"] = "Etiquettes: ";
themeSwitcherTooltipTagString["it"] = "Etichette: ";
themeSwitcherTooltipTagString["pt_PT"] = "Etiquetas: ";
themeSwitcherTooltipTagString["uk"] = "Теги: ";
themeSwitcherTooltipTagString["hu"] = "Címkék: ";
themeSwitcherTooltipTagString["ro"] = "Etichete: ";
themeSwitcherTooltipTagString["ru"] = "Тэги: ";

var themeSwitcherTooltipMapThemeString = new Array();
themeSwitcherTooltipMapThemeString["en"] = "Map theme: ";
themeSwitcherTooltipMapThemeString["es"] = "Tema de mapa: ";
themeSwitcherTooltipMapThemeString["de"] = "Kartenthema: ";
themeSwitcherTooltipMapThemeString["fr"] = "Modèle de carte: ";
themeSwitcherTooltipMapThemeString["it"] = "Tema delle mappa: ";
themeSwitcherTooltipMapThemeString["pt_PT"] = "Tema de mapa: ";
themeSwitcherTooltipMapThemeString["uk"] = "Тема мапи: ";
themeSwitcherTooltipMapThemeString["hu"] = "Tematikus térkép: ";
themeSwitcherTooltipMapThemeString["ro"] = "Tematica hărții: ";
themeSwitcherTooltipMapThemeString["ru"] = "Тема карты: ";

var themeSwitcherTooltipUpdateString = new Array();
themeSwitcherTooltipUpdateString["en"] = "Update interval: ";
themeSwitcherTooltipUpdateString["es"] = "Intervalo de actualización: ";
themeSwitcherTooltipUpdateString["de"] = "Aktualisierung: ";
themeSwitcherTooltipUpdateString["fr"] = "Intervalle de mise à jour: ";
themeSwitcherTooltipUpdateString["it"] = "Update interval: "; //FIXME
themeSwitcherTooltipUpdateString["pt_PT"] = "Intervalo de atualização: ";
themeSwitcherTooltipUpdateString["uk"] = "Час оновлення: ";
themeSwitcherTooltipUpdateString["hu"] = "Frissítés intervalluma: ";
themeSwitcherTooltipUpdateString["ro"] = "Intervalul de actualizare: ";
themeSwitcherTooltipUpdateString["ru"] = "Интервал обновления: ";

var themeSwitcherTooltipLastUpdateString = new Array();
themeSwitcherTooltipLastUpdateString["en"] = "Last update: ";
themeSwitcherTooltipLastUpdateString["es"] = "Última actualización: ";
themeSwitcherTooltipLastUpdateString["de"] = "Letze Aktualisierung: ";
themeSwitcherTooltipLastUpdateString["fr"] = "Dernière mise à jour ";
themeSwitcherTooltipLastUpdateString["it"] = "Utimo aggiornamento: ";
themeSwitcherTooltipLastUpdateString["pt_PT"] = "Última atualização: ";
themeSwitcherTooltipLastUpdateString["uk"] = "Останнє оновлення: ";
themeSwitcherTooltipLastUpdateString["hu"] = "Utolsó frissítés: ";
themeSwitcherTooltipLastUpdateString["ro"] = "Ultima actualizare: ";
themeSwitcherTooltipLastUpdateString["ru"] = "Последнее обновление: ";

var themeSwitcherTooltipPwProtectedString = new Array();
themeSwitcherTooltipPwProtectedString["en"] = "password protected";
themeSwitcherTooltipPwProtectedString["es"] = "protegido por contraseña";
themeSwitcherTooltipPwProtectedString["de"] = "passwortgeschützt";
themeSwitcherTooltipPwProtectedString["fr"] = "protégé par mot de passe";
themeSwitcherTooltipPwProtectedString["it"] = "protetto tramite password";
themeSwitcherTooltipPwProtectedString["pt_PT"] = "protegido por palavra passe";
themeSwitcherTooltipPwProtectedString["uk"] = "захищено паролем";
themeSwitcherTooltipPwProtectedString["hu"] = "jelszóval védett";
themeSwitcherTooltipPwProtectedString["ro"] = "protejat cu parolă";
themeSwitcherTooltipPwProtectedString["ru"] = "защищено паролем";

var emptyThemeSearchFieldString = new Array();
emptyThemeSearchFieldString["en"] = "Insert filter string";
emptyThemeSearchFieldString["es"] = "Inserte el texto para filtrar";
emptyThemeSearchFieldString["de"] = "Filtertext eingeben";
emptyThemeSearchFieldString["fr"] = "Entrer le texte pour filtrer";
emptyThemeSearchFieldString["it"] = "Inserire stringa di filtro";
emptyThemeSearchFieldString["pt_PT"] = "Inserir texto do filtro";
emptyThemeSearchFieldString["uk"] = "Ведіть текст для фільтрації";
emptyThemeSearchFieldString["hu"] = "Szűrő feltétel helye";
emptyThemeSearchFieldString["ro"] = "Introduceți textul de filtrare";
emptyThemeSearchFieldString["ru"] = "Введите строку для фильтрации";

var resetThemeSearchFieldTooltipString = new Array();
resetThemeSearchFieldTooltipString["en"] = "Reset map theme search filter";
resetThemeSearchFieldTooltipString["es"] = "Borrar el filtro de búsqueda de temas de mapa";
resetThemeSearchFieldTooltipString["de"] = "Kartenthemenfilter zurücksetzen";
resetThemeSearchFieldTooltipString["fr"] = "Réinitialiser le filtre de recherche pour le modèle de carte";
resetThemeSearchFieldTooltipString["it"] = "Resetta il filtro per la ricerca del tema della mappa";
resetThemeSearchFieldTooltipString["pt_PT"] = "Apagar o filtro de pesquisa do tema de mapa";
resetThemeSearchFieldTooltipString["uk"] = "Скинути фільтр пошуку тем мапи";
resetThemeSearchFieldTooltipString["hu"] = "Szűrő mező törlése";
resetThemeSearchFieldTooltipString["ro"] = "Resetează filtrul de căutare a tematicii de hartă";
resetThemeSearchFieldTooltipString["ru"] = "Сбросить фильтр поиска темы";

//title of map panel
var mapPanelTitleString = new Array();
mapPanelTitleString["en"] = "Map";
mapPanelTitleString["es"] = "Mapa";
mapPanelTitleString["de"] = "Karte";
mapPanelTitleString["fr"] = "Carte";
mapPanelTitleString["it"] = "Mappa";
mapPanelTitleString["pt_PT"] = "Mapa";
mapPanelTitleString["uk"] = "Мапа";
mapPanelTitleString["hu"] = "Térkép";
mapPanelTitleString["ro"] = "Harta";
mapPanelTitleString["ru"] = "Карта";

//title of map layer tree
var layerTreeTitleString = new Array();
layerTreeTitleString["en"] = "Map Layers";
layerTreeTitleString["es"] = "Capas";
layerTreeTitleString["de"] = "Kartenebenen";
layerTreeTitleString["fr"] = "Couches";
layerTreeTitleString["it"] = "Layer";
layerTreeTitleString["pt_PT"] = "Temas";
layerTreeTitleString["uk"] = "Шари мапи";
layerTreeTitleString["hu"] = "Térkép rétegei";
layerTreeTitleString["ro"] = "Straturi hartă";
layerTreeTitleString["ru"] = "Слои карты";

//title of layer order panel
var layerOrderPanelTitleString = new Array();
layerOrderPanelTitleString["en"] = "Layer order";
layerOrderPanelTitleString["es"] = "Layer order"; //FIXME
layerOrderPanelTitleString["de"] = "Ebenenreihenfolge";
layerOrderPanelTitleString["fr"] = "Ordre des couches";
layerOrderPanelTitleString["it"] = "Ordine dei layer";
layerOrderPanelTitleString["pt_PT"] = "Ordem e transparência camadas";
layerOrderPanelTitleString["uk"] = "Layer order"; //FIXME
layerOrderPanelTitleString["hu"] = "Réteg sorrend";
layerOrderPanelTitleString["ro"] = "Ordinea straturilor";
layerOrderPanelTitleString["ru"] = "Порядок слоев";

//tooltip of layer settings button in layer order panel
var layerOrderPanelLayerSettingsTooltipString = new Array();
layerOrderPanelLayerSettingsTooltipString["en"] = "Settings";
layerOrderPanelLayerSettingsTooltipString["es"] = "Settings"; //FIXME
layerOrderPanelLayerSettingsTooltipString["de"] = "Einstellungen";
layerOrderPanelLayerSettingsTooltipString["fr"] = "Réglages";
layerOrderPanelLayerSettingsTooltipString["it"] = "Impostazioni";
layerOrderPanelLayerSettingsTooltipString["pt_PT"] = "Configurações";
layerOrderPanelLayerSettingsTooltipString["uk"] = "Settings"; //FIXME
layerOrderPanelLayerSettingsTooltipString["hu"] = "Beállítások";
layerOrderPanelLayerSettingsTooltipString["ro"] = "Setări";
layerOrderPanelLayerSettingsTooltipString["ru"] = "Настройки";

//tooltip of remove layer button in layer order panel
var layerOrderPanelVisibilityChangeTooltipString = new Array();
layerOrderPanelVisibilityChangeTooltipString["en"] = "Change Layer Visibility";
layerOrderPanelVisibilityChangeTooltipString["es"] = "Change Layer Visibility"; //FIXME
layerOrderPanelVisibilityChangeTooltipString["de"] = "Ebenensichtbarkeit ändern";
layerOrderPanelVisibilityChangeTooltipString["fr"] = "Changer la visibilité de la couche";
layerOrderPanelVisibilityChangeTooltipString["it"] = "Cambia la visilità del layer"; //FIXME
layerOrderPanelVisibilityChangeTooltipString["pt_PT"] = "Mudar visibilidade da camada";
layerOrderPanelVisibilityChangeTooltipString["uk"] = "Change Layer Visibility"; //FIXME
layerOrderPanelVisibilityChangeTooltipString["hu"] = "Réteg ki/be kapcsolása";
layerOrderPanelVisibilityChangeTooltipString["ro"] = "Shimbă vizibilitatea stratului";
layerOrderPanelVisibilityChangeTooltipString["ru"] = "Изменить видимость слоя";

//text when dragging layer in layer order panel
var layerOrderPanelMoveLayerTextString = new Array();
layerOrderPanelMoveLayerTextString["en"] = "Move layer";
layerOrderPanelMoveLayerTextString["es"] = "Move layer"; //FIXME
layerOrderPanelMoveLayerTextString["de"] = "Ebene verschieben";
layerOrderPanelMoveLayerTextString["fr"] = "Supprimer la couche";
layerOrderPanelMoveLayerTextString["it"] = "Sposta layer";
layerOrderPanelMoveLayerTextString["pt_PT"] = "Deslocar camada";
layerOrderPanelMoveLayerTextString["uk"] = "Move layer"; //FIXME
layerOrderPanelMoveLayerTextString["hu"] = "Réteg mozgatása";
layerOrderPanelMoveLayerTextString["ro"] = "Mută stratul";
layerOrderPanelMoveLayerTextString["ru"] = "Переместить слой";

//tooltip of transparency sliders in layer order panel
var layerOrderPanelTransparencyTooltipString = new Array();
layerOrderPanelTransparencyTooltipString["en"] = "Transparency {0}%";
layerOrderPanelTransparencyTooltipString["es"] = "Transparency {0}%"; //FIXME
layerOrderPanelTransparencyTooltipString["de"] = "Transparenz {0}%";
layerOrderPanelTransparencyTooltipString["fr"] = "Transparence {0}%";
layerOrderPanelTransparencyTooltipString["it"] = "Trasparenza {0}%";
layerOrderPanelTransparencyTooltipString["pt_PT"] = "Transparência {0}%";
layerOrderPanelTransparencyTooltipString["uk"] = "Transparency {0}%"; //FIXME
layerOrderPanelTransparencyTooltipString["hu"] = "Átlászóság {0}%";
layerOrderPanelTransparencyTooltipString["ro"] = "Transparență {0}%";
layerOrderPanelTransparencyTooltipString["ru"] = "Прозрачность {0}%";

//title of legend tab
var legendTabTitleString = new Array();
legendTabTitleString["en"] = "Legend";
legendTabTitleString["es"] = "Leyenda";
legendTabTitleString["de"] = "Legende";
legendTabTitleString["fr"] = "Légende";
legendTabTitleString["it"] = "Legenda";
legendTabTitleString["pt_PT"] = "Legenda";
legendTabTitleString["uk"] = "Легенда";
legendTabTitleString["hu"] = "Jelkulcs";
legendTabTitleString["ro"] = "Legendă";
legendTabTitleString["ru"] = "Легенда";

//legend loading message in legend tab
var legendTabLoadingString = new Array();
legendTabLoadingString["en"] = "Loading legend, please wait...";
legendTabLoadingString["es"] = "Leyenda"; //FIXME
legendTabLoadingString["de"] = "Legende"; //FIXME
legendTabLoadingString["fr"] = "Légende"; //FIXME
legendTabLoadingString["it"] = "Legenda in caricamento, attendere prego...";
legendTabLoadingString["pt_PT"] = "Legenda"; //FIXME
legendTabLoadingString["uk"] = "Легенда"; //FIXME 
legendTabLoadingString["hu"] = "Jelkulcs"; //FIXME
legendTabLoadingString["ro"] = "Legendă"; //FIXME
legendTabLoadingString["ru"] = "Загрузка легенды. Пожалуйста, подождите"; 

//title of metadata tab
var metadataTabTitleString = new Array();
metadataTabTitleString["en"] = "Metadata";
metadataTabTitleString["es"] = "Metadatos";
metadataTabTitleString["de"] = "Metadaten";
metadataTabTitleString["fr"] = "Métadonnées";
metadataTabTitleString["it"] = "Metadati";
metadataTabTitleString["pt_PT"] = "Metadados";
metadataTabTitleString["uk"] = "Метадані";
metadataTabTitleString["hu"] = "Metaadat";
metadataTabTitleString["ro"] = "Metadate";
metadataTabTitleString["ru"] = "Метаданные";

//title of help window
var helpWindowTitleString = new Array();
helpWindowTitleString["en"] = "Help";
helpWindowTitleString["es"] = "Ayuda";
helpWindowTitleString["de"] = "Hilfe";
helpWindowTitleString["fr"] = "Aide";
helpWindowTitleString["it"] = "Aiuto";
helpWindowTitleString["pt_PT"] = "Ajuda";
helpWindowTitleString["uk"] = "Довідка";
helpWindowTitleString["hu"] = "Segítség";
helpWindowTitleString["ro"] = "Ajutor";
helpWindowTitleString["ru"] = "Помощь";

//title of legend and per layer metadata window
var legendMetadataWindowTitleString = new Array();
legendMetadataWindowTitleString["en"] = "Legend and metadata information of layer";
legendMetadataWindowTitleString["es"] = "Legend and metadata information of layer"; //FIXME
legendMetadataWindowTitleString["de"] = "Legende und Metadaten der Ebene";
legendMetadataWindowTitleString["fr"] = "Légende et métadonnée de la couche";
legendMetadataWindowTitleString["it"] = "Legenda e metadati del layer";
legendMetadataWindowTitleString["pt_PT"] = "Legenda e metadados da camada";
legendMetadataWindowTitleString["uk"] = "Legend and metadata information of layer"; //FIXME
legendMetadataWindowTitleString["hu"] = "Jelkulcs és metaadat információ a következő rétegről: ";
legendMetadataWindowTitleString["ro"] = "Legenda și informațiile tip metadate ale stratului";
legendMetadataWindowTitleString["ru"] = "Легенда и метаданные слоя";

//title of metadata section
var metadataSectionTitleString = new Array();
metadataSectionTitleString["en"] = "Metadata of layer";
metadataSectionTitleString["es"] = "Metadata of layer"; //FIXME
metadataSectionTitleString["de"] = "Metadaten der Ebene";
metadataSectionTitleString["fr"] = "Métadonnée de la couche";
metadataSectionTitleString["it"] = "Metadati del layer";
metadataSectionTitleString["pt_PT"] = "Metadados da camada";
metadataSectionTitleString["uk"] = "Metadata of layer"; //FIXME
metadataSectionTitleString["hu"] = "Réteg neve:";
metadataSectionTitleString["ro"] = "Metadatele stratului";
metadataSectionTitleString["ru"] = "Метаданные слоя";

//Abstract
var abstractString = new Array();
abstractString["en"] = "Abstract:";
abstractString["es"] = "Abstract:"; //FIXME
abstractString["de"] = "Zusammenfassung:";
abstractString["fr"] = "Résumé:";
abstractString["it"] = "Riassunto:";
abstractString["pt_PT"] = "Resumo:";
abstractString["uk"] = "Abstract:"; //FIXME
abstractString["hu"] = "Absztrakt:";
abstractString["ro"] = "Abstract:";
abstractString["ru"] = "Абстрактные:";

//title of legend and per layer metadata window
var layerQueryable = new Array();
layerQueryable["en"] = "This layer is queryable: ";
layerQueryable["es"] = "This layer is queryable: "; //FIXME
layerQueryable["de"] = "Diese Ebene ist abfragbar: ";
layerQueryable["fr"] = "Cette couche est requêtable: ";
layerQueryable["it"] = "Questo layer è interrogabile: ";
layerQueryable["pt_PT"] = "A camada pode-se pesquisar: ";
layerQueryable["uk"] = "This layer is queryable: "; //FIXME
layerQueryable["hu"] = "Ez a réteg lekérdezhető: ";
layerQueryable["ro"] = "Acest strat este interogabil: ";
layerQueryable["ru"] = "Возможны запросы к слою: ";

//in case we need a yes
var yesString = new Array();
yesString["en"] = "yes";
yesString["es"] = "yes"; //FIXME
yesString["de"] = "ja";
yesString["fr"] = "oui";
yesString["it"] = "si";
yesString["pt_PT"] = "sim";
yesString["uk"] = "yes"; //FIXME
yesString["hu"] = "igen";
yesString["ro"] = "da";
yesString["ru"] = "да";

//in case we need a no
var noString = new Array();
noString["en"] = "no";
noString["es"] = "no"; //FIXME
noString["de"] = "nein";
noString["fr"] = "non";
noString["it"] = "no";
noString["pt_PT"] = "não";
noString["uk"] = "no"; //FIXME
noString["hu"] = "nem";
noString["ro"] = "nu";
noString["ru"] = "нет";

//metadata: layer group
var layerGroupString = new Array();
layerGroupString["en"] = "Layer group";
layerGroupString["es"] = "Layer group"; //FIXME
layerGroupString["de"] = "Ebenengruppe";
layerGroupString["fr"] = "Layer group"; //FIXME
layerGroupString["it"] = "Layer group"; //FIXME
layerGroupString["pt_PT"] = "Layer group"; //FIXME
layerGroupString["uk"] = "Layer group"; //FIXME
layerGroupString["hu"] = "Layer group"; //FIXME
layerGroupString["ro"] = "Layer group"; //FIXME
layerGroupString["ru"] = "Группа слоев"; //FIXME

//metadata: display field (for tooltips)
var displayFieldString = new Array();
displayFieldString["en"] = "Display-Field";
displayFieldString["es"] = "Display-Field"; //FIXME
displayFieldString["de"] = "Anzeigefeld";
displayFieldString["fr"] = "Affichage";
displayFieldString["it"] = "Campo visualizzato";
displayFieldString["pt_PT"] = "Atributo que será visualizado";
displayFieldString["uk"] = "Display-Field"; //FIXME
displayFieldString["hu"] = "Megjelenő-Mező";
displayFieldString["ro"] = "Afișaj";
displayFieldString["ru"] = "Display-Field"; //FIXME

//metadata: coordinate systems
var coordinateSystemsString = new Array();
coordinateSystemsString["en"] = "Available Coordinate Systems";
coordinateSystemsString["es"] = "Available Coordinate Systems"; //FIXME
coordinateSystemsString["de"] = "Verfügbare Koordinatensysteme";
coordinateSystemsString["fr"] = "Système de coordonnées disponible";
coordinateSystemsString["it"] = "Sistemi di coordinate disponibili";
coordinateSystemsString["pt_PT"] = "Sistemas de coordenadas disponíveis";
coordinateSystemsString["uk"] = "Available Coordinate Systems"; //FIXME
coordinateSystemsString["hu"] = "Elérhető koordináta rendszerek";
coordinateSystemsString["ro"] = "Sisteme de coordonate disponibile";
coordinateSystemsString["ru"] = "Доступные системы координат";

//metadata: geographic extent
var geographicExtentString = new Array();
geographicExtentString["en"] = "Geographic Extent";
geographicExtentString["es"] = "Geographic Extent"; //FIXME
geographicExtentString["de"] = "Geographischer Ausschnitt";
geographicExtentString["fr"] = "Etendue géographique";
geographicExtentString["it"] = "Estensione geografica";
geographicExtentString["pt_PT"] = "Extensão geográfica";
geographicExtentString["uk"] = "Geographic Extent"; //FIXME
geographicExtentString["hu"] = "Földrajzi kiterjedés";
geographicExtentString["ro"] = "Întinderea geografică";
geographicExtentString["ru"] = "Географический экстент";

//metadata: geographic extent
var westString = new Array();
westString["en"] = "west";
westString["es"] = "west"; //FIXME
westString["de"] = "Westen";
westString["fr"] = "ouest";
westString["it"] = "ovest";
westString["pt_PT"] = "oeste";
westString["uk"] = "west"; //FIXME
westString["hu"] = "nyugat";
westString["ro"] = "vest";
westString["ru"] = "запад";

//metadata: geographic extent
var eastString = new Array();
eastString["en"] = "east";
eastString["es"] = "east"; //FIXME
eastString["de"] = "Osten";
eastString["fr"] = "est";
eastString["it"] = "est";
eastString["pt_PT"] = "leste";
eastString["uk"] = "east"; //FIXME
eastString["hu"] = "kelet";
eastString["ro"] = "est";
eastString["ru"] = "восток";

//metadata: geographic extent
var northString = new Array();
northString["en"] = "north";
northString["es"] = "north"; //FIXME
northString["de"] = "Norden";
northString["fr"] = "nord";
northString["it"] = "nord";
northString["pt_PT"] = "norte";
northString["uk"] = "north"; //FIXME
northString["hu"] = "észak";
northString["ro"] = "nord";
northString["ru"] = "север";

//metadata: geographic extent
var southString = new Array();
southString["en"] = "south";
southString["es"] = "south"; //FIXME
southString["de"] = "Süden";
southString["fr"] = "sud";
southString["it"] = "south"; //FIXME
southString["pt_PT"] = "sul";
southString["uk"] = "south"; //FIXME
southString["hu"] = "dél";
southString["ro"] = "sud";
southString["ru"] = "юг";

//attributes / fields
var attributesString = new Array();
attributesString["en"] = "Attributes / Fields";
attributesString["es"] = "Atributos";
attributesString["de"] = "Attribute / Felder";
attributesString["fr"] = "Attributs / Champs";
attributesString["it"] = "Attributi";
attributesString["pt_PT"] = "Atributos";
attributesString["uk"] = "Атрибути";
attributesString["hu"] = "Attribútumok / Mezők";
attributesString["ro"] = "Atribute / Câmpuri";
attributesString["ru"] = "Атрибуты / Поля";

//attribute name string
var attributeNameString = new Array();
attributeNameString["en"] = "Attribute name";
attributeNameString["es"] = "Attribute name";
attributeNameString["de"] = "Attributname";
attributeNameString["fr"] = "Nom des attributs";
attributeNameString["it"] = "Attribute name";
attributeNameString["pt_PT"] = "Attribute name";
attributeNameString["uk"] = "Attribute name";
attributeNameString["hu"] = "Attribútum név";
attributeNameString["ro"] = "Nume atribute";
attributeNameString["ru"] = "Название атрибута";

//attribute type string
var attributeTypeString = new Array();
attributeTypeString["en"] = "Type";
attributeTypeString["es"] = "Type";
attributeTypeString["de"] = "Typ";
attributeTypeString["fr"] = "Type";
attributeTypeString["it"] = "Type";
attributeTypeString["pt_PT"] = "Type";
attributeTypeString["uk"] = "Type";
attributeTypeString["hu"] = "Típus";
attributeTypeString["ro"] = "Tip";
attributeTypeString["ru"] = "Тип";

//attribute comment string
var attributeCommentString = new Array();
attributeCommentString["en"] = "Comment";
attributeCommentString["es"] = "Comment";
attributeCommentString["de"] = "Kommentar";
attributeCommentString["fr"] = "Commentaire";
attributeCommentString["it"] = "Comment";
attributeCommentString["pt_PT"] = "Comment";
attributeCommentString["uk"] = "Comment";
attributeCommentString["hu"] = "Megjegyzés";
attributeCommentString["ro"] = "Comentariu";
attributeCommentString["ru"] = "Комментарий";

//attribute length string
var attributeLengthString = new Array();
attributeLengthString["en"] = "Length";
attributeLengthString["es"] = "Length";
attributeLengthString["de"] = "Länge";
attributeLengthString["fr"] = "Longueur";
attributeLengthString["it"] = "Length";
attributeLengthString["pt_PT"] = "Length";
attributeLengthString["uk"] = "Length";
attributeLengthString["hu"] = "Hossz";
attributeLengthString["ro"] = "Lungime";
attributeLengthString["ru"] = "Длина";

//attribute length string
var attributePrecisionString = new Array();
attributePrecisionString["en"] = "Precision";
attributePrecisionString["es"] = "Precision";
attributePrecisionString["de"] = "Präzision";
attributePrecisionString["fr"] = "Précision";
attributePrecisionString["it"] = "Precision";
attributePrecisionString["pt_PT"] = "Precision";
attributePrecisionString["uk"] = "Precision";
attributePrecisionString["hu"] = "Pontosság";
attributePrecisionString["ro"] = "Precizie";
attributePrecisionString["ru"] = "Точность";

//label in main toolbar for object identification
var objectIdentificationTextLabel = new Array();
objectIdentificationTextLabel["en"] = "Object identification: ";
objectIdentificationTextLabel["es"] = "Identificación de objetos: ";
objectIdentificationTextLabel["de"] = "Objektidentifikation: ";
objectIdentificationTextLabel["fr"] = "Identification d'entité: ";
objectIdentificationTextLabel["it"] = "Identificazione oggetti: ";
objectIdentificationTextLabel["pt_PT"] = "Identificação de objectos: ";
objectIdentificationTextLabel["uk"] = "Вибір об'єкту: ";
objectIdentificationTextLabel["hu"] = "Elem azonosítás: ";
objectIdentificationTextLabel["ro"] = "Identificare obiect: ";
objectIdentificationTextLabel["ru"] = "Идентификация объекта: ";

//Coordinate text label (coordinate display in bottom toolbar of main map window)
var coordinateTextLabel = new Array();
coordinateTextLabel["en"] = "Coordinate:";
coordinateTextLabel["es"] = "Coordenadas:";
coordinateTextLabel["de"] = "Koordinate:";
coordinateTextLabel["fr"] = "Coordonnées:";
coordinateTextLabel["it"] = "Coordinate:";
coordinateTextLabel["pt_PT"] = "Coordenadas:";
coordinateTextLabel["uk"] = "Координати:";
coordinateTextLabel["hu"] = "Koordináta:";
coordinateTextLabel["ro"] = "Coordonate:";
coordinateTextLabel["ru"] = "Координаты:";

//search
var searchFieldDefaultTextString = new Array();
searchFieldDefaultTextString["en"] = "Search (addresses, parcel-nrs, names, etc.)";
searchFieldDefaultTextString["es"] = "Buscar (direcciones, registros, nombres, etc.)";
searchFieldDefaultTextString["de"] = "Suche (Adressen, Parzellenr, Flurnamen, etc.)";
searchFieldDefaultTextString["fr"] = "Chercher (adresses, n° de parcelles, noms, etc.)";
searchFieldDefaultTextString["it"] = "Ricerca (indirizzi, n° delle particelle, nomi, ecc.)";
searchFieldDefaultTextString["pt_PT"] = "Pesquisar (morada, parcelas, nomes, etc.)";
searchFieldDefaultTextString["uk"] = "Шукати (адреси, назви, тощо.)";
searchFieldDefaultTextString["hu"] = "Keres (cím, név, stb.)";
searchFieldDefaultTextString["ro"] = "Cauta (adrese, nr. parcele, nume, etc.)";
searchFieldDefaultTextString["ru"] = "Поиск (адрес, индекс, название и др.)";

//search button
var searchButtonString = new Array();
searchButtonString["en"] = "Search";
searchButtonString["es"] = "Buscar";
searchButtonString["de"] = "Suchen";
searchButtonString["fr"] = "Chercher";
searchButtonString["it"] = "Cerca";
searchButtonString["pt_PT"] = "Pesquisar";
searchButtonString["uk"] = "Пошук";
searchButtonString["hu"] = "Keres";
searchButtonString["ro"] = "Caută";
searchButtonString["ru"] = "Поиск";

//reset button
var resetButtonString = new Array();
resetButtonString["en"] = "Clear";
resetButtonString["es"] = "Limpiar";
resetButtonString["de"] = "Zurücksetzen";
resetButtonString["fr"] = "Effacer";
resetButtonString["it"] = "Annulla";
resetButtonString["pt_PT"] = "Apagar";
resetButtonString["uk"] = "Очистити";
resetButtonString["hu"] = "Törlés";
resetButtonString["ro"] = "Șterge";
resetButtonString["ru"] = "Очистить";

//please wait
var pleaseWaitString = new Array();
pleaseWaitString["en"] = "Please wait";
pleaseWaitString["es"] = "Por favor espere";
pleaseWaitString["de"] = "Bitte warten";
pleaseWaitString["fr"] = "Attendez s'il vous plait";
pleaseWaitString["it"] = "Attendere prego";
pleaseWaitString["pt_PT"] = "Por favor espere";
pleaseWaitString["uk"] = "Зачекайте";
pleaseWaitString["hu"] = "Kérem várjon";
pleaseWaitString["ro"] = "Asteaptă te rog";
pleaseWaitString["ru"] = "Пожалуйста, подождите";

//search result
var searchResultString = new Array();
searchResultString["en"] = "Search result";
searchResultString["es"] = "Resultado de la búsqueda";
searchResultString["de"] = "Suchresultat";
searchResultString["fr"] = "Resultat de la recherche";
searchResultString["it"] = "Risultati ricerca";
searchResultString["pt_PT"] = "Resultado de pesquisa";
searchResultString["uk"] = "Результати пошуку";
searchResultString["hu"] = "Keresés eredménye";
searchResultString["ro"] = "Rezultatul căutării";
searchResultString["ru"] = "Результаты поиска";

//network error
var networkErrorString = new Array();
networkErrorString["en"] = "Network error";
networkErrorString["es"] = "Error de red";
networkErrorString["de"] = "Netzwerkfehler";
networkErrorString["fr"] = "Erreur reseau";
networkErrorString["it"] = "Errore di rete";
networkErrorString["pt_PT"] = "Erro de rede";
networkErrorString["uk"] = "Помилка мережі";
networkErrorString["hu"] = "Hálózati hiba";
networkErrorString["ro"] = "Eroare de rețea";
networkErrorString["ru"] = "Сетевая ошибка";

// missing or invalid search params
var missingOrInvalidSearchParams = new Array();
missingOrInvalidSearchParams["en"] = "Missing or invalid values in search form";
missingOrInvalidSearchParams["es"] = "Valores inválidos o faltantes en el formulario de búsqueda";
missingOrInvalidSearchParams["de"] = "Fehlende oder ungültige Werte im Suchformular";
missingOrInvalidSearchParams["fr"] = "Valeurs invalides ou manquantes dans la recherche";
missingOrInvalidSearchParams["it"] = "Valori mancanti o in validi nel modulo di ricerca";
missingOrInvalidSearchParams["pt_PT"] = "Valores em falta ou inválidos no formulário de pesquisa";
missingOrInvalidSearchParams["uk"] = "Відсутні або не правильні дані в полі пошуку";
missingOrInvalidSearchParams["hu"] = "Hiányzó vagy érvénytelen értékek a keresési űrlapon";
missingOrInvalidSearchParams["ro"] = "Valori lipsă sau invalide în căutare";
missingOrInvalidSearchParams["ru"] = "Отсутствуют или неправильны данные в форме поиска";

//search error
var searchErrorString = new Array();
searchErrorString["en"] = "Error during search";
searchErrorString["es"] = "Error en la búsqueda";
searchErrorString["de"] = "Fehler bei Suche";
searchErrorString["fr"] = "Erreur pendant la recherche";
searchErrorString["it"] = "Errore durante la ricerca";
searchErrorString["pt_PT"] = "Erro durante a pesquisa";
searchErrorString["uk"] = "Помилка під час пошуку";
searchErrorString["hu"] = "Hiba a keresés alatt";
searchErrorString["ro"] = "Eroare în timpul căutarii";
searchErrorString["ru"] = "Ошибка поиска";

//search no records found
var searchNoRecordsFoundString = new Array();
searchNoRecordsFoundString["en"] = "No records found"; 
searchNoRecordsFoundString["es"] = "Error en la búsqueda"; // FIXME
searchNoRecordsFoundString["de"] = "Fehler bei Suche"; // FIXME
searchNoRecordsFoundString["fr"] = "Aucun résultat trouvé (la recherche est sensible à la casse)";
searchNoRecordsFoundString["it"] = "Nessun risultato";
searchNoRecordsFoundString["pt_PT"] = "Erro durante a pesquisa"; // FIXME
searchNoRecordsFoundString["uk"] = "Помилка під час пошуку"; // FIXME
searchNoRecordsFoundString["hu"] = "Hiba a keresés alatt"; // FIXME
searchNoRecordsFoundString["ro"] = "Eroare în timpul căutarii"; // FIXME
searchNoRecordsFoundString["ru"] = "Записи не найдены"; 

//print settings toolbar title
var printSettingsToolbarTitleString = new Array();
printSettingsToolbarTitleString["en"] = "Print Settings";
printSettingsToolbarTitleString["es"] = "Configuración de impresión";
printSettingsToolbarTitleString["de"] = "Druckeinstellungen";
printSettingsToolbarTitleString["fr"] = "Configuration de l'impression";
printSettingsToolbarTitleString["it"] = "Configurazione della stampa";
printSettingsToolbarTitleString["pt_PT"] = "Configuração de impressão";
printSettingsToolbarTitleString["uk"] = "Налаштовування друку";
printSettingsToolbarTitleString["hu"] = "Nyomtatás beállításai";
printSettingsToolbarTitleString["ro"] = "Setări tipărire/print";
printSettingsToolbarTitleString["ru"] = "Настройки печати";

//print rotation text label
var printSettingsRotationTextlabelString = new Array();
printSettingsRotationTextlabelString["en"] = "Rotation: ";
printSettingsRotationTextlabelString["es"] = "Rotación: ";
printSettingsRotationTextlabelString["de"] = "Rotation: ";
printSettingsRotationTextlabelString["fr"] = "Rotation: ";
printSettingsRotationTextlabelString["it"] = "Rotazione: ";
printSettingsRotationTextlabelString["pt_PT"] = "Rotação: ";
printSettingsRotationTextlabelString["uk"] = "Поворот: ";
printSettingsRotationTextlabelString["hu"] = "Forgatás: ";
printSettingsRotationTextlabelString["ro"] = "Rotește: ";
printSettingsRotationTextlabelString["ru"] = "Поворот: ";

//print button text
var printButtonTextString = new Array();
printButtonTextString["en"] = "Print";
printButtonTextString["es"] = "Imprimir";
printButtonTextString["de"] = "Drucken";
printButtonTextString["fr"] = "Imprimer";
printButtonTextString["it"] = "Stampa";
printButtonTextString["pt_PT"] = "Impressão";
printButtonTextString["uk"] = "Друк";
printButtonTextString["hu"] = "Nyomtat";
printButtonTextString["ro"] = "Printează";
printButtonTextString["ru"] = "Печать";

//print cancel button text
var printCancelButtonTextString = new Array();
printCancelButtonTextString["en"] = "Cancel";
printCancelButtonTextString["es"] = "Cancelar";
printCancelButtonTextString["de"] = "Abbrechen";
printCancelButtonTextString["fr"] = "Annuler";
printCancelButtonTextString["it"] = "Annullare";
printCancelButtonTextString["pt_PT"] = "Cancelar";
printCancelButtonTextString["uk"] = "Відмінити";
printCancelButtonTextString["hu"] = "Mégsem";
printCancelButtonTextString["ro"] = "Anulează";
printCancelButtonTextString["ru"] = "Отмена";

//objectIdentificationModeStrings
var objectIdentificationModeString = new Array();
objectIdentificationModeString["topMostHit"] = new Array();
objectIdentificationModeString["topMostHit"]["en"] = "Topmost hit";
objectIdentificationModeString["topMostHit"]["es"] = "Capa superior";
objectIdentificationModeString["topMostHit"]["de"] = "Oberster Treffer";
objectIdentificationModeString["topMostHit"]["fr"] = "Couche la plus haute";
objectIdentificationModeString["topMostHit"]["it"] = "Layer in alto";
objectIdentificationModeString["topMostHit"]["pt_PT"] = "Tema superior";
objectIdentificationModeString["topMostHit"]["uk"] = "Верхній шар";
objectIdentificationModeString["topMostHit"]["hu"] = "Legfelső találat";
objectIdentificationModeString["topMostHit"]["ro"] = "Stratul superior";
objectIdentificationModeString["topMostHit"]["ru"] = "Верхний слой";

objectIdentificationModeString["allLayers"] = new Array();
objectIdentificationModeString["allLayers"]["en"] = "All layers";
objectIdentificationModeString["allLayers"]["es"] = "Todas las capas";
objectIdentificationModeString["allLayers"]["de"] = "Alle Ebenen";
objectIdentificationModeString["allLayers"]["fr"] = "Toutes les couches";
objectIdentificationModeString["allLayers"]["it"] = "Tutti i layer";
objectIdentificationModeString["allLayers"]["pt_PT"] = "Todos os temas";
objectIdentificationModeString["allLayers"]["uk"] = "Усі шари";
objectIdentificationModeString["allLayers"]["hu"] = "Minden réteg";
objectIdentificationModeString["allLayers"]["ro"] = "Toate straturile";
objectIdentificationModeString["allLayers"]["ru"] = "Все слои";

objectIdentificationModeString["activeLayers"] = new Array();
objectIdentificationModeString["activeLayers"]["en"] = "Active Layer";
objectIdentificationModeString["activeLayers"]["es"] = "Capa activa";
objectIdentificationModeString["activeLayers"]["de"] = "Aktive Ebene";
objectIdentificationModeString["activeLayers"]["fr"] = "Couche active";
objectIdentificationModeString["activeLayers"]["it"] = "Layer attivo";
objectIdentificationModeString["activeLayers"]["pt_PT"] = "Tema activo";
objectIdentificationModeString["activeLayers"]["uk"] = "Активний шар";
objectIdentificationModeString["activeLayers"]["hu"] = "Aktív réteg";
objectIdentificationModeString["activeLayers"]["ro"] = "Stratul activ";
objectIdentificationModeString["activeLayers"]["ru"] = "Активный слой";

//measure distance result prefix
var measureDistanceResultPrefixString = new Array();
measureDistanceResultPrefixString["en"] = "Distance";
measureDistanceResultPrefixString["es"] = "Distancia";
measureDistanceResultPrefixString["de"] = "Distanz";
measureDistanceResultPrefixString["fr"] = "Distance";
measureDistanceResultPrefixString["it"] = "Distanza";
measureDistanceResultPrefixString["pt_PT"] = "Distância";
measureDistanceResultPrefixString["uk"] = "Відстань";
measureDistanceResultPrefixString["hu"] = "Távolság";
measureDistanceResultPrefixString["ro"] = "Distanța";
measureDistanceResultPrefixString["ru"] = "Дистанция";

//distance prefix for result:
var measureAreaResultPrefixString = new Array();
measureAreaResultPrefixString["en"] = "Area";
measureAreaResultPrefixString["es"] = "Área";
measureAreaResultPrefixString["de"] = "Fläche";
measureAreaResultPrefixString["fr"] = "Surface";
measureAreaResultPrefixString["it"] = "Area";
measureAreaResultPrefixString["pt_PT"] = "Área";
measureAreaResultPrefixString["uk"] = "Площа";
measureAreaResultPrefixString["hu"] = "Terület";
measureAreaResultPrefixString["ro"] = "Aria";
measureAreaResultPrefixString["ru"] = "Площадь";

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
zoomRectangleTooltipString["uk"] = "Масштабувати прямокутником";
zoomRectangleTooltipString["hu"] = "Nagyítás téglalappal";
zoomRectangleTooltipString["ro"] = "Zoom cu un dreptunghi";
zoomRectangleTooltipString["ru"] = "Масштаб прямоугольником";

//zoom to full view
var zoomFullViewTooltipString = new Array();
zoomFullViewTooltipString["en"] = "Zoom to the maximum map extent";
zoomFullViewTooltipString["es"] = "Zoom a la extensión máxima ";
zoomFullViewTooltipString["de"] = "Zoom zum maximalen Kartenausschnitt";
zoomFullViewTooltipString["fr"] = "Zoomer sur l'étendue complète de la carte";
zoomFullViewTooltipString["it"] = "Zoom all'estensione massima";
zoomFullViewTooltipString["pt_PT"] = "Zoom à extensão total do mapa";
zoomFullViewTooltipString["uk"] = "Масштаб за розмірами мапи";
zoomFullViewTooltipString["hu"] = "Teljes nézet";
zoomFullViewTooltipString["ro"] = "Zoom la întinderea maximă a hărtii";
zoomFullViewTooltipString["ru"] = "Масштаб по размеру карты";

//navigation history backward
var navigationHistoryBackwardTooltipString = new Array();
navigationHistoryBackwardTooltipString["en"] = "Navigation history backward";
navigationHistoryBackwardTooltipString["es"] = "Ir a la vista anterior";
navigationHistoryBackwardTooltipString["de"] = "Navigationshistorie zurück";
navigationHistoryBackwardTooltipString["fr"] = "Zone précédente dans l'historique";
navigationHistoryBackwardTooltipString["it"] = "Inquadramento precedente";
navigationHistoryBackwardTooltipString["pt_PT"] = "Enquadramento anterior";
navigationHistoryBackwardTooltipString["uk"] = "Історія навігіції: назад";
navigationHistoryBackwardTooltipString["hu"] = "Előző nagyítás";
navigationHistoryBackwardTooltipString["ro"] = "Înapoi la ultima zonă";
navigationHistoryBackwardTooltipString["ru"] = "Навигация назад";

//navigation history forward
var navigationHistoryForwardTooltipString = new Array();
navigationHistoryForwardTooltipString["en"] = "Navigation history forward";
navigationHistoryForwardTooltipString["es"] = "Ir a la vista posterior";
navigationHistoryForwardTooltipString["de"] = "Navigationshistorie vorwärts";
navigationHistoryForwardTooltipString["fr"] = "Zone suivante dans l'historique";
navigationHistoryForwardTooltipString["it"] = "Inquadramento successivo";
navigationHistoryForwardTooltipString["pt_PT"] = "Enquadramento seguinte";
navigationHistoryForwardTooltipString["uk"] = "Історія навігації: вперед";
navigationHistoryForwardTooltipString["hu"] = "Következő nagyítás";
navigationHistoryForwardTooltipString["ro"] = "La zona de dinainte";
navigationHistoryForwardTooltipString["ru"] = "Навигация вперед";

//discrete zoom in button above zoom slider
var zoomInTooltipString = new Array();
zoomInTooltipString["en"] = "Zoom in (discrete step)";
zoomInTooltipString["es"] = "Acercar (un nivel)";
zoomInTooltipString["de"] = "Einzoomen (eine Stufe)";
zoomInTooltipString["fr"] = "Zoom avant";
zoomInTooltipString["it"] = "Ingrandisci";
zoomInTooltipString["pt_PT"] = "Ampliar";
zoomInTooltipString["uk"] = "Збільшити";
zoomInTooltipString["hu"] = "Nagyítás (diszkrét lépéssekkel)";
zoomInTooltipString["ro"] = "Zoom înauntru (un nivel)";
zoomInTooltipString["ru"] = "Увеличить";

//discrete zoom in button above zoom slider
var zoomOutTooltipString = new Array();
zoomOutTooltipString["en"] = "Zoom out (discrete step)";
zoomOutTooltipString["es"] = "Alejar (un nivel)";
zoomOutTooltipString["de"] = "Rauszoomen (eine Stufe)";
zoomOutTooltipString["fr"] = "Zoom arrière";
zoomOutTooltipString["it"] = "Rimpicciolisci";
zoomOutTooltipString["pt_PT"] = "Diminuir";
zoomOutTooltipString["uk"] = "Зменшити";
zoomOutTooltipString["hu"] = "Kicsinyít (diszkrét lépéssekkel)";
zoomOutTooltipString["ro"] = "Zoom în afară (un nivel)";
zoomOutTooltipString["ru"] = "Уменьшить";

//object identification tooltip
var objIdentificationTooltipString = new Array();
objIdentificationTooltipString["en"] = "Object identification (attribute data)";
objIdentificationTooltipString["es"] = "Indentificación de objetos (atributos)";
objIdentificationTooltipString["de"] = "Objektidentifizierung (Attributdaten)";
objIdentificationTooltipString["fr"] = "Identification d'entité (attributs)";
objIdentificationTooltipString["it"] = "Identificazione di oggetti (attributi)";
objIdentificationTooltipString["pt_PT"] = "Identificação de objectos (atributos)";
objIdentificationTooltipString["uk"] = "Вибір об'єкту (атрибути)";
objIdentificationTooltipString["hu"] = "Elem azonosítás (attribútum adatok)";
objIdentificationTooltipString["ro"] = "Identificare obiect (date atribut)";
objIdentificationTooltipString["ru"] = "Идентификация объектов (атрибуты)";


//MapTips tooltip
var mapTipsTooltipString = new Array();
mapTipsTooltipString["en"] = "Display MapTips (attribute data)";
mapTipsTooltipString["es"] = "Desplegar textos emergentes (atributos)";
mapTipsTooltipString["de"] = "MapTips anzeigen (Attributdaten)";
mapTipsTooltipString["fr"] = "Afficher les infobulles (attributs)";
mapTipsTooltipString["it"] = "Mostra le informazioni (attributi)";
mapTipsTooltipString["pt_PT"] = "Mostrar MapTips (atributos)";
mapTipsTooltipString["uk"] = "Показівати виринаючі підказки (атрибути)";
mapTipsTooltipString["hu"] = "Megjeleníti térkép szövegbuborákait (attribútum adatok)";
mapTipsTooltipString["ro"] = "Afișează Indicii harta (date atribut)";
mapTipsTooltipString["ru"] = "Показывать подсказки (атрибуты)";

//Measure Distance
var measureDistanceTooltipString = new Array();
measureDistanceTooltipString["en"] = "Measure distance";
measureDistanceTooltipString["es"] = "Medir distancia";
measureDistanceTooltipString["de"] = "Distanz messen";
measureDistanceTooltipString["fr"] = "Mesurer une distance";
measureDistanceTooltipString["it"] = "Misura distanza";
measureDistanceTooltipString["pt_PT"] = "Medir distância";
measureDistanceTooltipString["uk"] = "Вимірювання відстані";
measureDistanceTooltipString["hu"] = "Távolság mérés";
measureDistanceTooltipString["ro"] = "Măsoară distanța";
measureDistanceTooltipString["ru"] = "Измерение дистанции";

//Measure Area
var measureAreaTooltipString = new Array();
measureAreaTooltipString["en"] = "Measure area";
measureAreaTooltipString["es"] = "Medir área";
measureAreaTooltipString["de"] = "Fläche messen";
measureAreaTooltipString["fr"] = "Mesurer une surface";
measureAreaTooltipString["it"] = "Misura superficie";
measureAreaTooltipString["pt_PT"] = "Medir área";
measureAreaTooltipString["uk"] = "Вимірювання площі";
measureAreaTooltipString["hu"] = "Terület mérés";
measureAreaTooltipString["ro"] = "Măsoară aria";
measureAreaTooltipString["ru"] = "Измерение площади";

//Print Map
var printMapTooltipString = new Array();
printMapTooltipString["en"] = "Print Map";
printMapTooltipString["es"] = "Imprimir mapa";
printMapTooltipString["de"] = "Karte drucken";
printMapTooltipString["fr"] = "Imprimer la carte";
printMapTooltipString["it"] = "Stampa la mappa";
printMapTooltipString["pt_PT"] = "Imprimir mapa";
printMapTooltipString["uk"] = "Друкувати мапу";
printMapTooltipString["hu"] = "Térkép nyomtatás";
printMapTooltipString["ro"] = "Tipărește/Print harta";
printMapTooltipString["ru"] = "Печать карты";

//Print Map disabled
var printMapDisabledTooltipString = new Array();
printMapDisabledTooltipString["en"] = "Print disabled, no layout is defined in the QGIS project";
printMapDisabledTooltipString["es"] = "Imprimir deshabilitado, no hay formato definido en el proyecto de QGIS";
printMapDisabledTooltipString["de"] = "Drucken nicht möglich, da keine Layouts im QGIS-Projekt definiert wurden";
printMapDisabledTooltipString["fr"] = "Impossible d'imprimer car il n'y a pas de mise en page définie dans le projet QGIS";
printMapDisabledTooltipString["it"] = "Stampa disabilitata: nel progetto QGIS non è definito alcun layout";
printMapDisabledTooltipString["pt_PT"] = "Impressão indisponível: não tem definido nenhum layout no projecto QGIS";
printMapDisabledTooltipString["uk"] = "Друк відключено, не вказано шар в QGIS проекті";
printMapDisabledTooltipString["hu"] = "Nyomtatás letiltva, nincs nyomtatási nézet definiálva a QGIS projektben";
printMapDisabledTooltipString["ro"] = "Tipărirea nu este activă deoarece nu e definit niciun print-layout în proiectul QGIS";
printMapDisabledTooltipString["ru"] = "Печать отключена.  Нет макета в проекте QGIS";

//Send permalink
var sendPermalinkTooltipString = new Array();
sendPermalinkTooltipString["en"] = "Email a link to this map";
sendPermalinkTooltipString["es"] = "Email a link to this map"; //FIXME
sendPermalinkTooltipString["de"] = "Einen Link auf diese Karte per Email verschicken";
sendPermalinkTooltipString["fr"] = "Partager le lien de cette carte";
sendPermalinkTooltipString["it"] = "Email a link to this map"; //FIXME
sendPermalinkTooltipString["pt_PT"] = "Enviar mapa através E-Mail";
sendPermalinkTooltipString["uk"] = "Email a link to this map"; //FIXME
sendPermalinkTooltipString["hu"] = "Email egy linkkel erre a térképre";
sendPermalinkTooltipString["ro"] = "Trimite un link catre această hartă";
sendPermalinkTooltipString["ru"] = "Послать ссылку на карту по E-mail";

//Send permalink
var sendPermalinkLinkFromString = new Array();
sendPermalinkLinkFromString["en"] = "Link from ";
sendPermalinkLinkFromString["es"] = "Link from "; //FIXME
sendPermalinkLinkFromString["de"] = "Link von ";
sendPermalinkLinkFromString["fr"] = "Lien de ";
sendPermalinkLinkFromString["it"] = "Link from "; //FIXME
sendPermalinkLinkFromString["pt_PT"] = "Link de ";
sendPermalinkLinkFromString["uk"] = "Link from "; //FIXME
sendPermalinkLinkFromString["hu"] = "Link from ";
sendPermalinkLinkFromString["ro"] = "Link de la ";
sendPermalinkLinkFromString["ru"] = "Ссылка из ";

//Show Help
var showHelpTooltipString = new Array();
showHelpTooltipString["en"] = "Show Help";
showHelpTooltipString["es"] = "Mostrar ayuda";
showHelpTooltipString["de"] = "Hilfe öffnen";
showHelpTooltipString["fr"] = "Afficher l'aide";
showHelpTooltipString["it"] = "Mostra l'aiuto";
showHelpTooltipString["pt_PT"] = "Mostrar ajuda";
showHelpTooltipString["uk"] = "Показати довідку";
showHelpTooltipString["hu"] = "Mutasd a súgót";
showHelpTooltipString["ro"] = "Afișează Ajutorul";
showHelpTooltipString["ru"] = "Показать помощь";

//Geonames loading string
var geonamesLoadingString = new Array();
geonamesLoadingString["en"] = "Search in Geonames...";
geonamesLoadingString["es"] = "Buscar en Geonames...";
geonamesLoadingString["de"] = "Suche in Geonames...";
geonamesLoadingString["fr"] = "Recherche dans Geonames...";
geonamesLoadingString["it"] = "Ricerca con Geonames...";
geonamesLoadingString["pt_PT"] = "Pesquisar em Geonames...";
geonamesLoadingString["uk"] = "Пошук в Геоданих...";
geonamesLoadingString["hu"] = "Keresés geoadatokban...";
geonamesLoadingString["ro"] = "Caută în Geonames...";
geonamesLoadingString["ru"] = "Поиск в геоданных...";

//Geonames empty string
var geonamesEmptyString = new Array();
geonamesEmptyString["en"] = "Search location in Geonames";
geonamesEmptyString["es"] = "Buscar lugar en Geonames";
geonamesEmptyString["de"] = "Suche Ort in Geonames";
geonamesEmptyString["fr"] = "Rechercher le lieu dans Geonames";
geonamesEmptyString["it"] = "Cerca località con Geonames";
geonamesEmptyString["pt_PT"] = "Pesquisar localização em Geonames";
geonamesEmptyString["uk"] = "Пошук місць у Геоданих";
geonamesEmptyString["hu"] = "Keresés a térképen";
geonamesEmptyString["ro"] = "Caută locația în Geonames";
geonamesEmptyString["ru"] = "Поиск местоположения в геоданных";

//Reset Search Field
var resetSearchFieldTooltipString = new Array();
resetSearchFieldTooltipString["en"] = "Reset/empty Searchfield";
resetSearchFieldTooltipString["es"] = "Limpiar campo de búsqueda";
resetSearchFieldTooltipString["de"] = "Suchfeld zurücksetzen";
resetSearchFieldTooltipString["fr"] = "Réinitialiser la recherche";
resetSearchFieldTooltipString["it"] = "Azzerare il campo di ricerca";
resetSearchFieldTooltipString["pt_PT"] = "Limpar campo de pesquisa";
resetSearchFieldTooltipString["uk"] = "Очистити поле пошуку";
resetSearchFieldTooltipString["hu"] = "Kereső mező törlése";
resetSearchFieldTooltipString["ro"] = "Resetează/golește câmpul de căutare";
resetSearchFieldTooltipString["ru"] = "Очистить поле поиска";

//print window title
var printWindowTitleString = new Array();
printWindowTitleString["en"] = "The server is generating a PDF file. For correct up to scale printing please deactivate the option 'Fit to Page'!";
printWindowTitleString["es"] = "El servidor está generando un archivo PDF. Para corregir la escala de impresión desactive la opción 'Ajustar a la página'!";
printWindowTitleString["de"] = "PDF wird vom Server generiert. Für massstäbliches Drucken deaktivieren Sie bitte das 'Anpassen der Seitengrösse'!";
printWindowTitleString["fr"] = "Le serveur génère le fichier PDF. Pour conserver l'échelle, ne pas activer l'option 'Ajuster à la page'!"
printWindowTitleString["it"] = "Il server sta generando il file PDF. Per stampare alla scala corretta disattivare l'opzione 'Ridimensiona alla pagina'!"
printWindowTitleString["pt_PT"] = "O servidor está a gerar um ficheiro PDF. Para imprimir na escala correcta, desactivar a opção 'Fit to Page'!";
printWindowTitleString["uk"] = "На сервері створюється PDF файл. Для корректного масштабуваня друку відключіть опцію 'Підігнати до сторінки'!";
printWindowTitleString["hu"] = "A szerver generál egy PDF állományt. A helyes lépték érdekében kérem kapcsolja ki a 'Oldalhoz igazítás' opciót!";
printWindowTitleString["ro"] = "Serverul generează un fișier PDF . Pentru o imprimare la scară corectă deactivați opțiunea 'Fit to Page/Incadrare pe pagină' când dați print la acesta!";
printWindowTitleString["ru"] = "Сервер генерирует PDF файл . Для корректного масштабирования печати отключите опцию 'Подогнать по странице'!";

//print object data alternative string in case no pdf plugin is present in browser
//attention: single quotes around string, partially html formatting
var printingObjectDataAlternativeString1 = new Array();
printingObjectDataAlternativeString1["en"] = 'It looks like your browser cannot open PDF files directly. Not a big problem - you can <a href="';
printingObjectDataAlternativeString1["es"] = 'Su navegador no puede abrir archivos PDF directamente. No es problema - usted puede <a href="';
printingObjectDataAlternativeString1["de"] = 'Es sieht so aus als ob Ihr Browser kein PDF Plugin unterstützt. Kein Problem, Sie können die <a href="';
printingObjectDataAlternativeString1["fr"] = 'Il semble que votre navigateur ne supporte pas le plugin PDF. Pas de problème, vous pouvez <a href="';
printingObjectDataAlternativeString1["it"] = 'Sembra che il vostro browser non possa aprire direttamente i files PDF. Nessun problema -  potete <a href="';
printingObjectDataAlternativeString1["pt_PT"] = 'Parece que o seu navegador não pode abrir ficheiros PDF directamente. Não tem problema - pode <a href="';
printingObjectDataAlternativeString1["uk"] = 'Схоже Ваш оглядач не вміє відкривати PDF файли. Не проблема - скористуйтесь <a href="';
printingObjectDataAlternativeString1["hu"] = 'Böngésző nem tudja megnyítni a PDF állományokat. PDF állomány elérhető <a href="';
printingObjectDataAlternativeString1["ro"] = 'Se pare ca browser-ul tău nu poate deschide direct fisiere PDF. Nu e grav - poți să <a href="';
printingObjectDataAlternativeString1["ru"] = 'Похоже, ваш браузер не может открыть PDF. Нет проблем - <a href="';

//the second part of the string after the URL
//attention: single quotes around string, partially html formatting
var printingObjectDataAlternativeString2 = new Array();
printingObjectDataAlternativeString2["en"] = '">download the PDF file here.</a>.</p></object>';
printingObjectDataAlternativeString2["es"] = '">descargar el archivo PDF aquí.</a>.</p></object>';
printingObjectDataAlternativeString2["de"] = '">PDF-Datei hier herunterladen</a>.</p></object>';
printingObjectDataAlternativeString2["fr"] = '">télécharger le fichier PDF ici</a>.</p></object>';
printingObjectDataAlternativeString2["it"] = '">scaricare il PDF qui.</a>.</p></object>';
printingObjectDataAlternativeString2["pt_PT"] = '">descarregar ficheiro PDF aqui.</a>.</p></object>';
printingObjectDataAlternativeString2["uk"] = '">посиланням</a> аби завантажити PDF файл..</p></object>';
printingObjectDataAlternativeString2["hu"] = '">ezen a linken.</a>.</p></object>';
printingObjectDataAlternativeString2["ro"] = '">descarci fișierul PDF aici.</a>.</p></object>';
printingObjectDataAlternativeString2["ru"] = '">скачайте PDF-файл здесь.</a>.</p></object>';

//print button tooltip
var printButtonTooltipString = new Array();
printButtonTooltipString["en"] = "Print (Generate PDF)";
printButtonTooltipString["es"] = "Imprimir (Generar PDF)";
printButtonTooltipString["de"] = "Drucken (PDF generieren)";
printButtonTooltipString["fr"] = "Imprimer (générer un PDF)";
printButtonTooltipString["it"] = "Stampa (generare un PDF)";
printButtonTooltipString["pt_PT"] = "Imprimir (gerar PDF)";
printButtonTooltipString["uk"] = "Друкувати (PDF)";
printButtonTooltipString["hu"] = "Nyomtat (PDF generálása)";
printButtonTooltipString["ro"] = "Print/Tipărește (Generează un PDF)";
printButtonTooltipString["ru"] = "Печать (Генерация PDF)";

//print cancel button tooltip
var printCancelButtonTooltipString = new Array();
printCancelButtonTooltipString["en"] = "Cancel Print (Close)";
printCancelButtonTooltipString["es"] = "Cancelar impresión (Cerrar)";
printCancelButtonTooltipString["de"] = "Druck abbrechen (Schliesen)";
printCancelButtonTooltipString["fr"] = "Annuler l'impression (fermer)";
printCancelButtonTooltipString["it"] = "Annulla la stampa (chiudi)";
printCancelButtonTooltipString["pt_PT"] = "Cancelar impressão (Fechar)";
printCancelButtonTooltipString["uk"] = "Скасувати друк (Закрити)";
printCancelButtonTooltipString["hu"] = "Mégsem nyomtat (bezár)";
printCancelButtonTooltipString["en"] = "Cancel Print (Close)";
printCancelButtonTooltipString["ro"] = "Anulează Tipărirea (Închide)";
printCancelButtonTooltipString["ru"] = "Отмена печати (Закрыть)";

//theme switcher button tooltip
var mapThemeButtonTooltipString = new Array();
mapThemeButtonTooltipString["en"] = "Click to choose a new map theme";
mapThemeButtonTooltipString["es"] = "Haga click para escoger un nuevo tema de mapa";
mapThemeButtonTooltipString["de"] = "Klicken Sie um das Kartenthema zu wechseln";
mapThemeButtonTooltipString["fr"] = "Cliquer pour choisir un nouveau modèle de carte";
mapThemeButtonTooltipString["it"] = "Click per scegliere un nuovo tema di mappa";
mapThemeButtonTooltipString["pt_PT"] = "Clique para escolher um novo tema de mapa";
mapThemeButtonTooltipString["uk"] = "Клацніть щоб обрати нову тему мапи";
mapThemeButtonTooltipString["hu"] = "Klikkeljen ide új tematikus térkép választásához";
mapThemeButtonTooltipString["ro"] = "Click pentru a alege o nouă tematică de hartă";
mapThemeButtonTooltipString["ru"] = "Кликните чтобы выбрать новую тему для карты";

/***********************
Error Messages
***********************/

//error messages on startup
var errMessageStartupMapParamString = new Array();
errMessageStartupMapParamString["en"] = "Startup-Parameter 'map' missing!";
errMessageStartupMapParamString["es"] = "Falta el parámetro de inicio 'map'!";
errMessageStartupMapParamString["de"] = "Start-Parameter 'map' fehlt!";
errMessageStartupMapParamString["fr"] = "Le paramètre de démarrage 'map' est manquant!";
errMessageStartupMapParamString["it"] = "Il parametro di inizializzazione manca!";
errMessageStartupMapParamString["pt_PT"] = "Parâmetro de inicialização em falta!";
errMessageStartupMapParamString["uk"] = "Параметр 'map' відсутній!";
errMessageStartupMapParamString["hu"] = "Indulási-Paraméter 'map' hiányzik!";
errMessageStartupMapParamString["ro"] = "Lipsește parametrul de pornire 'map'!";
errMessageStartupMapParamString["ru"] = "Параметр 'map' отсутствует!";

//additional startup error message
var errMessageStartupNotAllParamsFoundString = new Array();
errMessageStartupNotAllParamsFoundString["en"] = "Some mandatory startup paramaters are missing or an optional startup parameter is invalid.";
errMessageStartupNotAllParamsFoundString["es"] = "Faltan algunos parámetros obligatorios";
errMessageStartupNotAllParamsFoundString["de"] = "Es wurden nicht alle notwendigen Web-GIS-Parameter gefunden oder ein optionaler Start-Parameter ist falsch.";
errMessageStartupNotAllParamsFoundString["fr"] = "Certains paramètres indispensables manquent.";
errMessageStartupNotAllParamsFoundString["it"] = "Alcuni parametri necessari mancano.";
errMessageStartupNotAllParamsFoundString["pt_PT"] = "Faltam alguns parâmetros necessários.";
errMessageStartupNotAllParamsFoundString["uk"] = "Відсутні обов'язкові параметри, або деякі параметри мають невірне значення.";
errMessageStartupNotAllParamsFoundString["hu"] = "Néhány kötelező indítási paramétert hiányzik, vagy egy opcionális indítási paraméter érvénytelen.";
errMessageStartupNotAllParamsFoundString["ro"] = "Lipsesc niște parametri obligatorii sau un parametru opțional de start este invalid.";
errMessageStartupNotAllParamsFoundString["ru"] = "Отсутствуют обязательные параметры или необязательный параметр неверен.";

//error message if optional startExtent parameter is wrong
var errMessageExtentParamWrongPart1 = new Array();
errMessageExtentParamWrongPart1["en"] = "Start-parameter '";
errMessageExtentParamWrongPart1["es"] = "Parámetro de inicialización '";
errMessageExtentParamWrongPart1["de"] = "Start-Parameter '";
errMessageExtentParamWrongPart1["fr"] = "Paramètre d'initialisation '";
errMessageExtentParamWrongPart1["it"] = "Parametro di inizializzazione '";
errMessageExtentParamWrongPart1["pt_PT"] = "Parâmetro de inicialização '";
errMessageExtentParamWrongPart1["uk"] = "Параметр '";
errMessageExtentParamWrongPart1["hu"] = "Indulási-paraméter '";
errMessageExtentParamWrongPart1["ro"] = "Parametrul de start '";
errMessageExtentParamWrongPart1["ru"] = "Параметр запуска '";

//error message if optional startExtent parameter is wrong
var errMessageExtentParamWrongPart2 = new Array();
errMessageExtentParamWrongPart2["en"] = "' needs to be in OpenLayers.Bounds format: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["es"] = "' debe estar en formato OpenLayers.Bounds: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["de"] = "' muss im OpenLayers.Bounds format sein: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["fr"] = "' devrait être dans le format OpenLayers.Bounds: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["it"] = "' deve essere nel formato di OpenLayers.Bounds: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["pt_PT"] = "' precisa de estar em OpenLayers.Bounds formato: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["uk"] = "' має бути в форматі OpenLayers.Bounds: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["hu"] = "' következő formátum szükséges OpenLayers.Bounds: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["ro"] = "' trebuie sa fie in format OpenLayers.Bounds: 'left,bottom,right,top'.";
errMessageExtentParamWrongPart2["ru"] = "' должен быть в формате OpenLayers.Bounds: 'left,bottom,right,top'.";

//error message invalid language code, part 1
var errMessageInvalidLanguageCodeString1 = new Array();
errMessageInvalidLanguageCodeString1["en"] = "Invalid language code provided: ";
errMessageInvalidLanguageCodeString1["es"] = "El código de idioma es inválido: ";
errMessageInvalidLanguageCodeString1["de"] = "Falscher Sprachparameter übergeben: ";
errMessageInvalidLanguageCodeString1["fr"] = "Identifiant de langue incorrect: ";
errMessageInvalidLanguageCodeString1["it"] = "Identificativo della lingua non corretto: ";
errMessageInvalidLanguageCodeString1["pt_PT"] = "Identificação do idioma incorrecto: ";
errMessageInvalidLanguageCodeString1["uk"] = "Вказано невірний код мови: ";
errMessageInvalidLanguageCodeString1["hu"] = "Érvénytelen nyelvi kód: ";
errMessageInvalidLanguageCodeString1["ro"] = "Codul de limbă este invalid: ";
errMessageInvalidLanguageCodeString1["ru"] = "Неверный код языка: ";

//error message invalid language code, part 2
var errMessageInvalidLanguageCodeString2 = new Array();
errMessageInvalidLanguageCodeString2["en"] = "Switching back to default language ";
errMessageInvalidLanguageCodeString2["es"] = "Restableciendo el idioma por defecto ";
errMessageInvalidLanguageCodeString2["de"] = "Wechsle zurück zur Standardsprache ";
errMessageInvalidLanguageCodeString2["fr"] = "La langue par défaut sera utilisée ";
errMessageInvalidLanguageCodeString2["it"] = "Si utilizza la lingua di default ";
errMessageInvalidLanguageCodeString2["pt_PT"] = "Mudar para idioma padrão  ";
errMessageInvalidLanguageCodeString2["uk"] = "Переключаюсь на мову за замовчуванням ";
errMessageInvalidLanguageCodeString2["hu"] = "Visszatér az alapértelmezett nyelvhez ";
errMessageInvalidLanguageCodeString2["ro"] = "Trec pe limba implicită ";
errMessageInvalidLanguageCodeString2["ru"] = "Возвращение к языку по умолчанию ";

//error message of search combo network request title
var errMessageSearchComboNetworkRequestFailureTitleString = new Array();
errMessageSearchComboNetworkRequestFailureTitleString["en"] = "Network request failed";
errMessageSearchComboNetworkRequestFailureTitleString["es"] = "Falló la solicitud de red";
errMessageSearchComboNetworkRequestFailureTitleString["de"] = "Netzwerk-Request fehlgeschlagen";
errMessageSearchComboNetworkRequestFailureTitleString["fr"] = "La requête réseau a échoué";
errMessageSearchComboNetworkRequestFailureTitleString["it"] = "La richiesta di rete è fallita";
errMessageSearchComboNetworkRequestFailureTitleString["pt_PT"] = "Pedido de rede falhou";
errMessageSearchComboNetworkRequestFailureTitleString["uk"] = "Помилка мережевого запиту";
errMessageSearchComboNetworkRequestFailureTitleString["hu"] = "Hálózati kérés sikertelen";
errMessageSearchComboNetworkRequestFailureTitleString["ro"] = "Cererea de rețea a eșuat";
errMessageSearchComboNetworkRequestFailureTitleString["ru"] = "Ошибка сетевого запроса";

//error message of search combo network request detailed message - do not forget the \n at the end of the string!
var errMessageSearchComboNetworkRequestFailureString = new Array();
errMessageSearchComboNetworkRequestFailureString["en"] = "The network request for the geometry of the search result failed:\n";
errMessageSearchComboNetworkRequestFailureString["es"] = "Falló la solicitud de red para la geometría del resultado de la búsqueda:\n";
errMessageSearchComboNetworkRequestFailureString["de"] = "Netzwerk-Request für Geometrie des gesuchten Objekts fehlgeschlagen:\n";
errMessageSearchComboNetworkRequestFailureString["fr"] = "La requête réseau pour la géométrie du résultat de la recherche a échoué:\n";
errMessageSearchComboNetworkRequestFailureString["it"] = "La richiesta di rete è fallita per la geometria del risultato di ricerca:\n";
errMessageSearchComboNetworkRequestFailureString["pt_PT"] = "O pedido de rede para a geometria do resultado de pesquisa falhou:\n";
errMessageSearchComboNetworkRequestFailureString["uk"] = "Не вдалося виконати запит геометрії для результатів пошуку:\n";
errMessageSearchComboNetworkRequestFailureString["hu"] = "Hálozati kérés a keresett geometriára sikertelen:\n";
errMessageSearchComboNetworkRequestFailureString["ro"] = "Cererea de rețea pentru geometria rezultatului căutarii a eșuat:\n";
errMessageSearchComboNetworkRequestFailureString["ru"] = "не удалось выполнить запрос геометрии для результатов поиска:\n";
