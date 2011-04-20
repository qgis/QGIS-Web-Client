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

def application(environ, start_response):
  request = Request(environ)
  searchtable = request.params["searchtable"]
  displaytext = request.params["displaytext"]
  
  sql = "SELECT ST_AsText(the_geom) AS geom FROM "+searchtable+" WHERE displaytext = %(displaytext)s;"
  
  errorText = ''
  try:
    conn = psycopg2.connect("db='yourdb' port='5432' user='yourusername' password='yourpassword'")
  except:
    errorText += 'error: database connection failed.'
  
  cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
  
  try:
    cur.execute(sql,{'displaytext':displaytext})
  except:
    exceptionType, exceptionValue, exceptionTraceback = sys.exc_info()
    errorText += 'error: could not execute query: '+str(exceptionValue)
    
  #result = sql;
  #result += ";" + errorText;
  row = cur.fetchone()
  result = row['geom']
  
  response = Response(result,"200 OK",[("Content-type","text/plain"),("Content-length", str(len(result)) )])
  
  conn.close()
  
  return response(environ, start_response)
