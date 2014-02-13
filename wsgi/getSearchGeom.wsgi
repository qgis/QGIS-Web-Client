#!/usr/bin/python
# -*- coding: utf-8 -*-
#http://localhost/wsgi/getSearchGeom.wsgi?searchtable=av_user.suchtabelle&displaytext=Oberlandautobahn (Strasse, Uster)

DB_CONN_STRING="host='yourhost' dbname='yourdb' port='5432' user='yourusername' password='yourpassword'"

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

  #sanitize
  if re.search(r"[^A-Za-z,._]", searchtable):
    print >> environ['wsgi.errors'], "offending input: %s" % searchtable
    sql = ""
  else:
    sql = "SELECT ST_AsText(the_geom) AS geom FROM "+searchtable+" WHERE displaytext = %(displaytext)s;"

  errorText = ''
  try:
    conn = psycopg2.connect(DB_CONN_STRING)
  except:
    errorText += 'error: database connection failed.'
    # write the error message to the error.log
    print >> environ['wsgi.errors'], "%s" % errorText
    response_headers = [('Content-type', 'text/plain'),
                        ('Content-Length', str(len(errorText)))]
    start_response('500 INTERNAL SERVER ERROR', response_headers)

    return [errorText]

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

  response = Response(result,"200 OK",[("Content-type","text/plain"),("Content-length", str(len(result)) )])

  conn.close()

  return response(environ, start_response)
