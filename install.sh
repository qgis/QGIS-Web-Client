#! /bin/bash
set -e

#######EDIT ACCORDING TO YOUR NEEDS or pass the values as arguments example:
# ./install.sh /path_to/qgis_project myurl.local false

# Ask for qgis projects dir - the one where your .qgs files are
QGISPROJECTSDIR=${1-$HOME/QGIS_projects}

# The url where the web client will be available
QGISURL=${2-qgis-web-client.localhost}

# Allows using shorter urls like
# QGISURL/maps/mymap and QGISURL/wms/mymap
ENABLEURLREWRITE=${3-true}

#Puts the vhost file in /etc/apache2/sites-available/default
OVERRIDEDEFAULTVHOST=${4-false}

#calls apachectl restart
RESTARTAPACHE=${4-true}


###UNLIKELY YOU WILL NEED TO EDIT FROM HERE ON###
if [ $# -eq 0 ]; then
    echo "Using default values."
    echo "You can edit th script according to your needs or pass the values as arguments example:"
    echo "./install.sh /path_to/qgis_project myurl.local false"
    echo
fi

echo "#####Using following configuration:############"
echo "QGISPROJECTSDIR: $QGISPROJECTSDIR"
echo "QGISURL: $QGISURL"
echo "ENABLEURLREWRITE: $ENABLEURLREWRITE"
echo "OVERRIDEDEFAULTVHOST: $OVERRIDEDEFAULTVHOST"
echo "RESTARTAPACHE: $RESTARTAPACHE"
echo "###############################################"
echo

#install the server
apt-get install -y qgis-server apache2 libapache2-mod-fcgid libapache2-mod-php5 locate sed
a2enmod php5

#Get the QGIS web client root dir
ROOTDIR=$( cd "$( dirname "$0" )" && pwd )
# search qgis server installation usually in /usr/lib/cgi-bin
if hash /usr/lib/cgi-bin/qgis_mapserv.fcgi 2>/dev/null; then
    QGISSERVERDIR=/usr/lib/cgi-bin
else
    QGISSERVERDIR=`updatedb && dirname $(locate --limit 1 qgis_mapserv.fcgi)`
fi

#####STOP EDITING#####
#create apache config file
cd $ROOTDIR/apache-conf
cp qgis-web-client.conf.tmpl qgis-web-client.conf
sed -i "s|<qgis-web-client.localhost>|$QGISURL|g" qgis-web-client.conf
sed -i "s|<absolute-path-to-qgis-web-client>|$ROOTDIR|g" qgis-web-client.conf
sed -i "s|<absolute-path-to-qgis_mapserv.fcgi-folder>|$QGISSERVERDIR|g" qgis-web-client.conf
sed -i "s|<absolute-path-to-qgis-server-projects>|$QGISPROJECTSDIR|g" qgis-web-client.conf

#Autodetect the apache server major.minor version
# now is Apache/2.4
APACHEVERSION=$(echo `apachectl -v` | grep -E -o 'Apache/[[:digit:]].[[:digit:]]');
# now is x.x
APACHEVERSION=${APACHEVERSION:7:3}
echo "Detected apache $APACHEVERSION"
#We are in apache 2.4+ land 
if [[ $APACHEVERSION > 2.3 ]]; then
    sed -i "s|#<ENABLE_FOR_APACHE_2_4>||g" qgis-web-client.conf
fi

#Urlrewrite
if [ "$ENABLEURLREWRITE" = true ]; then
    a2enmod rewrite
    sed -i "s|#<REMOVE_TO_ENABLE_URL_REWRITE>||g" qgis-web-client.conf
    cd $ROOTDIR/site/js
    sed -i "s|var serverAndCGI = \"/cgi-bin/qgis_mapserv.fcgi\"|var serverAndCGI = \"/wms\"|g" GlobalOptions.js
fi

#fixup php config
cd $ROOTDIR/site
sed -i "s|<absolute-path-to-qgis-server-projects>|$QGISPROJECTSDIR|g" index.php

#install the configuration
if [ "$OVERRIDEDEFAULTVHOST" = true ]; then
    ln -sf $ROOTDIR/apache-conf/qgis-web-client.conf /etc/apache2/sites-available/default
    a2ensite default
else
    ln -s $ROOTDIR/apache-conf/qgis-web-client.conf /etc/apache2/sites-available/
    a2ensite qgis-web-client.conf
fi

if [ "$RESTARTAPACHE" = true ]; then
    apachectl restart
fi

if [ "$OVERRIDEDEFAULTVHOST" = true ]; then
    url='localhost'
else
    echo 127.0.0.1 qgis-web-client.localhost >> /etc/hosts
    url=$QGISURL
fi
echo "Web client reachable at: " http://$url

