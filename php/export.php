<?php

/*
 *
 * Sample for exporting from a postgis database to an esri shapefile using gdal ogr2ogr
 * Need to install gdal binaries (apt-get install gdal-bin) and adapt the ogr2ogr command you need.
 * Can be adapted to export/import almost everything (look at http://www.gdal.org/ogr/ogr_formats.html)
 * 
 * Nicolas Liaudat - nliaudat(at)pompiers-chatel(dot)ch
 *
 *
 * export.php -- part of QGIS Web Client
 *
 * Copyright (2014), The QGIS Project All rights reserved.
 * QGIS Web Client is released under a BSD license. Please see
 * https://github.com/qgis/qgis-web-client/blob/master/README
 * for the full text of the license and the list of contributors.
 *
*/ 

$now = date("Ymd_His");
$filename = 'myfile_' .$now .'.shp';
$filename_zip = 'myzip_' .$now .'.zip';


if(isset($_REQUEST['map0:extent'])){
	$extent =  explode(",", $_REQUEST['map0:extent']);
	$xmin = $extent[0];
	$ymin = $extent[1];
	$xmax = $extent[2];
	$ymax = $extent[3];
	
	if (! (is_numeric($xmin) && is_numeric($ymin) && is_numeric($xmax) && is_numeric($xmin) && is_numeric($ymax))){
		die('SQL injection prevention : bad extent');
	}
	
}else{
die('You must provide a valid bounding box');
}

if(isset($_REQUEST['srid'])){
	$srid = $_REQUEST['srid'];
	
	if (! is_numeric($srid)){
		die('SQL injection prevention : bad srid');
	}
	
}


//TODO : Adapt for your need
$mycmd = 'ogr2ogr -f "ESRI Shapefile" '.$filename .'PG:"host=host user=myuser password=mypass port=5432 dbname=dbname" -sql "SELECT the_geom FROM tablename WHERE the_geom && ST_MakeEnvelope(' .$xmin .', ' .$ymin .', ' .$xmax .', ' .$ymax .', ' .$srid .')" -progress';
//ST_MakeEnvelope(double precision xmin, double precision ymin, double precision xmax, double precision ymax, integer srid=unknown);

$output = shell_exec($mycmd);


$zip = new ZipArchive();

if ($zip->open($filename_zip, ZipArchive::CREATE)!==TRUE) {
    exit("Cannot write <$filename_zip>\n");
}

$zip->addEmptyDir($now);
$zip->addFile("./" .$filename ,$now ."/" .$filename);
$zip->close();


$fsize = filesize('./' .$filename_zip); 

    header("Pragma: public"); // required
    header("Expires: 0");
    header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
    header("Cache-Control: private",false); // required for certain browsers
    header("Content-Type: application/zip");
    header("Content-Disposition: attachment; filename=\"".$filename_zip."\";" );
    header("Content-Transfer-Encoding: binary");
    header("Content-Length: ".$fsize);
    ob_clean();
    flush();


    readfile('./' .$filename_zip);
	
	unlink($filename); 
	unlink($filename_zip); 

    exit;

  
?>
