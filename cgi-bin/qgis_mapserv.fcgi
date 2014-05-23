#!/bin/bash
# Sample qgis_mapserv.fcgi wrapper, change paths to suit your needs.

# The project name
PROJECT=asti

# This is useful for testing a self-compiled QGIS binary
EXTRA_LIBRARY_PATH=:/home/ale/apps/lib

# The path to the directoty containing the project
PROJECTS_DIRECTORY=/home/ale/public_html/asti/QGIS-Web-Client/projects

# Fake X server display port ...
DISPLAY="DISPLAY=:99"
# ... or leave empty if not used
# DISPLAY=''

# Full path to qgis_mapserv.fcgi
BINARY=/home/ale/apps/bin/qgis_mapserv.fcgi


if [ ! -z "$1" ]; then
LD_LIBRARY_PATH=$LD_LIBRARY_PATH$EXTRA_LIBRARY_PATH ; export LD_LIBRARY_PATH
    QGIS_PROJECT_FILE=$PROJECTS_DIRECTORY/$PROJECT.qgs \
    QGIS_DEBUG=1 \
    QGIS_LOG_FILE=/tmp/qgis.log \
    QUERY_STRING=$1 \
    $DISPLAY \
    $BINARY

else

LD_LIBRARY_PATH=$LD_LIBRARY_PATH$EXTRA_LIBRARY_PATH ; export LD_LIBRARY_PATH
    QGIS_PROJECT_FILE=$PROJECTS_DIRECTORY/$PROJECT.qgs \
    QGIS_DEBUG=1 \
    QGIS_LOG_FILE=/tmp/qgis.log \
    $DISPLAY \
    $BINARY
fi
