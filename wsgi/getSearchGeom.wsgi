#!/usr/bin/python
# -*- coding: utf-8 -*-
#http://localhost/wsgi/getSearchGeom.wsgi?searchtable=av_user.suchtabelle&displaytext=Oberlandautobahn (Strasse, Uster)

import re #regular expression support
import string #string manipulation support
from webob import Request
from webob import Response
import psycopg2 #PostgreSQL DB Connection
import psycopg2.extras #z.b. für named column indexes
import sys #für Fehlerreporting
import os

# append the Python path with the wsgi-directory
qwcPath = os.path.dirname(__file__)
if not qwcPath in sys.path:
  sys.path.append(qwcPath)
    
import qwc_connect

def application(environ, start_response):
  request = Request(environ)
  searchtable = request.params["searchtable"]
  displaytext = request.params["displaytext"]

  #sanitize
  if re.search(r"[^A-Za-z,._]", searchtable):
    print >> environ['wsgi.errors'], "offending input: %s" % searchtable
    sql = ""
  else:
    sql = "SELECT COALESCE(ST_AsText(the_geom), \'nogeom\') AS geom FROM "+searchtable+" WHERE displaytext = %(displaytext)s;"
  
  result = "nogeom"
  
  if searchtable != "" and searchtable != "null":
    errorText = ''
    conn = qwc_connect.getConnection(environ, start_response)
  
    if conn == None:
      return [""]

    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

    try:
      cur.execute(sql,{'displaytext':displaytext})
    except:
      exceptionType, exceptionValue, exceptionTraceback = sys.exc_info()
      conn.close()
      errorText += 'error: could not execute query'
      # write the error message to the error.log
      print >> environ['wsgi.errors'], "%s" % errorText+": "+str(exceptionValue)
      response_headers = [('Content-type', 'text/plain'),
                          ('Content-Length', str(len(errorText)))]
      start_response('500 INTERNAL SERVER ERROR', response_headers)

      return [errorText]

    #result = sql;
    #result += ";" + errorText;
    row = cur.fetchone()
    result = row['geom']
    conn.close()

  response = Response(result,"200 OK",[("Content-type","text/plain"),("Content-length", str(len(result)) )])

  return response(environ, start_response)
