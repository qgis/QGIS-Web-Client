#!/bin/bash


if [ ! -z "$1" ]; then
LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/ale/apps/lib ; export LD_LIBRARY_PATH
    QGIS_PROJECT_FILE=/home/ale/public_html/asti/QGIS-Web-Client/projects/asti.qgs \
    QGIS_DEBUG=1 \
    QGIS_LOG_FILE=/tmp/qgis.log \
    QUERY_STRING=$1 \
/home/ale/apps/bin/qgis_mapserv.fcgi

else

LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/ale/apps/lib ; export LD_LIBRARY_PATH
    QGIS_PROJECT_FILE=/home/ale/public_html/asti/QGIS-Web-Client/projects/asti.qgs \
    QGIS_DEBUG=1 \
    QGIS_LOG_FILE=/tmp/qgis.log \
/home/ale/apps/bin/qgis_mapserv.fcgi

fi
