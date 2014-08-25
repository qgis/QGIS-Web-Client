#!/usr/bin/python
# -*- coding: utf-8 -*-
# Script to create a short permalink from a long list of parameters
# currently, only a Postgis db is supported - we may later add a spatialite version if there is demand
# adapt potentially your schema and table in the two queries (SELECT and INSERT) below
#http://servername/wsgi/createShortPermalink.wsgi?longPermalink=...


import string #string manipulation support
from webob import Request
from webob import Response
import psycopg2 #PostgreSQL DB Connection
import psycopg2.extras #z.b. für named column indexes
import sys #für Fehlerreporting
import uuid
import urllib2
import os

# append the Python path with the wsgi-directory
qwcPath = os.path.dirname(__file__)
if not qwcPath in sys.path:
  sys.path.append(qwcPath)
  
import qwc_connect

def application(environ, start_response):
  request = Request(environ)

  longPermalink = urllib2.unquote(request.params["longPermalink"].encode('utf-8'))
  servername = longPermalink.split("/")[2]
  newUuid = str(uuid.uuid4())

  errorText = ''
  
  #SQL database connection
  conn = qwc_connect.getConnection(environ, start_response)
  
  if conn == None:
    return [""]
  
  cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
  
  #first we need to query if we already have an existing entry
  sqlQuery = "SELECT uuid_key FROM webgis.permalinks WHERE long_url = %(longPermalink)s;"
    
  try:
    cur.execute(sqlQuery,{'longPermalink':longPermalink})
  except:
    exceptionType, exceptionValue, exceptionTraceback = sys.exc_info()
    conn.close()
    errorText += 'error: could not execute query'
    # write the error message to the error.log
    print >> environ['wsgi.errors'], "%s" % errorText+": "+str(exceptionValue)
    print >> environ['wsgi.errors'], "%s" % sqlQuery
    response_headers = [('Content-type', 'text/plain'),
                        ('Content-Length', str(len(errorText)))]
    start_response('500 INTERNAL SERVER ERROR', response_headers)
    return [errorText]

  row = cur.fetchone()
  
  if (row):
	newUuid = row['uuid_key']
  else:
    sqlInsert = "INSERT INTO webgis.permalinks (uuid_key, long_url, create_date) VALUES (%(newUuid)s,%(longPermalink)s,now());"

    try:
      cur.execute(sqlInsert,{'newUuid':newUuid,'longPermalink':longPermalink})
      conn.commit()
    except:
      exceptionType, exceptionValue, exceptionTraceback = sys.exc_info()
      conn.close()
      errorText += 'error: could not execute query'
      # write the error message to the error.log
      print >> environ['wsgi.errors'], "%s" % errorText+": "+str(exceptionValue)
      print >> environ['wsgi.errors'], "%s" % sqlInsert
      response_headers = [('Content-type', 'text/plain'),
                        ('Content-Length', str(len(errorText)))]
      start_response('500 INTERNAL SERVER ERROR', response_headers)
      return [errorText]
	  
  shortURL = "http://"+servername+"/wsgi/webgisLauncher.wsgi?uuid="+newUuid
  resultString = '{"shortUrl": "'+shortURL+'", "errorText": "'+errorText+'"}'
    
  response = Response(resultString,"200 OK",[("Content-type","application/json; charset=utf-8"),("Content-length", str(len(resultString)) )])

  conn.close()
  
  return response(environ, start_response)
