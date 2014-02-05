#! /usr/bin/env python
# -*- coding: utf-8 -*-

"""
 printpostget.py: As on some qgis-projects the GET parameters are extending
 2083 characters and apache url rewrite usually treats GET requests
 (but with more than 2083 characters), this post-to-get proxy can be used
 within the context of qgis-server-client
 
 *******************************************************
 *                                                                                                            
 *   This program is free software; you can redistribute it and/or modify  
 *   it under the terms of the GNU General Public License as published by  
 *   the Free Software Foundation; either version 2 of the License, or    
 *   (at your option) any later version.                                  
 *                    
 *******************************************************
"""
__autor__   = "Tobias Reber"
__email__   = "tobias.reber@bd.so.ch"
__license__ = "GPL"
__version__ = "1.0"
__status__  = "prod"

from wsgiref.simple_server import make_server
import urllib
import time
import sys
from json import dumps
from random import randint
sys.path.append("/opt/wsgi/")
from webob import Request, Response

URL_PRINT_SERVER = 'http://www.myurl.ch/wms'
URL_DOWNLOAD = 'http://www.myurl/download'
PATH_DOWNLOAD = '/var/www/tmp'


def application(environ, start_response):
    """the application skeleton"""
    req = Request(environ)
    project = ''
    str_URL_to_file = '' 
    querystring = '' 
    bol_not_first = False
    

    try: 
        req.method = 'POST'
        querystring = req.body
        project = req.POST['project']
        if project != '':
            str_URL_to_file = save(URL_PRINT_SERVER + '/' + project + '?' + querystring)
    except:
        pass
    resp = Response(content_type='application/json', body=dumps({'url': str_URL_to_file}))
    return resp(environ, start_response)
     

def save(url):
    """saving the pdf from the print-server"""
    str_file_name = 'map_' + random_name() + '.pdf'
    response = urllib.urlopen(url.encode('utf-8'))
    f = open(PATH_DOWNLOAD + '/' + str_file_name,'wb')
    f.write(response.read())
    f.close
    return URL_DOWNLOAD + '/' + str_file_name


def random_name():
    """guarantee unique names in the download directory"""
    str_random = str(randint(1,1000))
    str_unixtime = str(int(time.time()))
    return str(str_random + str_unixtime)


if  __name__ == '__main__':
    """for testing purposes a lighter server"""
    port = 8051
    httpd = make_server('localhost', port, application)
    httpd.handle_request()
    print 'Serving on http://localhost:%s' % port
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print '^C'

