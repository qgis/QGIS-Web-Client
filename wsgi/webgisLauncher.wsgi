#!/usr/bin/python
# -*- coding: utf-8 -*-
# this script returns a long URL by querying a table with the key of a short URL
# currently, only a Postgis db is supported - we may later add a spatialite version if there is demand
# adapt potentially your schema and table in the two queries (SELECT) below
# also adapt the line for the case there is no match for the given UUID
#http://servername/wsgi/webgisLauncher.wsgi?uuid=...
#http://webgis.uster.ch/wsgi/webgisLauncher.wsgi?uuid=130eb8ce-e0b5-49e2-bc57-0c0a28ce289c


import string #string manipulation support
from webob import Request
from webob import Response
import psycopg2 #PostgreSQL DB Connection
import psycopg2.extras #z.b. für named column indexes
import sys #für Fehlerreporting
import urllib2
import os

# append the Python path with the wsgi-directory
qwcPath = os.path.dirname(__file__)
if not qwcPath in sys.path:
  sys.path.append(qwcPath)
  
import qwc_connect

def application(environ, start_response):
  request = Request(environ)

  uuid_key = urllib2.unquote(request.params["uuid"]).encode('utf-8')

  sqlErrorText = ''
  
  #SQL database connection
  conn = qwc_connect.getConnection(environ, start_response)
  
  if conn == None:
    return [""]
  
  cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
  
  #first we need to query if we already have an existing entry
  sqlQuery = "SELECT long_url FROM webgis.permalinks WHERE uuid_key = %(uuid_key)s;"
    
  try:
    cur.execute(sqlQuery,{'uuid_key':uuid_key})
  except:
    exceptionType, exceptionValue, exceptionTraceback = sys.exc_info()
    sqlErrorText += 'error: Could not execute SELECT Query: '+str(exceptionValue)
  
  if (cur.rowcount > 0):
    #succesful query - page redirect
    row = cur.fetchone()
    long_url = row['long_url']
    long_url = long_url.replace('"','%22')
    resultString = '<html><head><meta http-equiv="Refresh" content="0; URL='+long_url+'"/></head></html>'
  else:
    #unsuccessful query - error message
    #adapt this string to match your project name
    resultString = '<html><body><h1>Webgis der Stadt Uster</h1><p>Fehler: zu ihrem Permalink des Webgis Uster existiert kein Eintrag. Bitte konsultieren Sie die <a href="http://gis.uster.ch/">GIS Uster</a> Startseite um ein Thema zu wählen.</p></body></html>'
    
  response = Response(resultString,"200 OK",[("Content-type","text/html; charset=utf-8"),("Content-length", str(len(resultString)) )])

  conn.close()
  
  return response(environ, start_response)