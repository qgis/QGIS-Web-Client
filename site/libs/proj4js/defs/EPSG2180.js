// Polish National Coordinate System "PUWG 1992"
// change 'yx: {"EPSG:900913": false}' for  'yx: {"EPSG:2180": true}' in GlobalOptions.js
// and make "true" the 'var useGeodesicMeasurement' in GlobalOptions.js
Proj4js.defs["EPSG:2180"]= "+title=PolandCS92 +proj=tmerc +lat_0=0 +lon_0=19 +k=0.9993 +x_0=500000 +y_0=-5300000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";
