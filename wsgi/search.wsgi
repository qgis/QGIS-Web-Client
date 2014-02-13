#!/usr/bin/python
# -*- coding: utf-8 -*-
#sample queries
#http://localhost/wsgi/search.wsgi?searchtables=abwasser.such§tabelle&query=1100&cb=bla
#http://localhost/wsgi/search.wsgi?query=Oberlandstr&cb=bla


DB_CONN_STRING="host='yourhost' dbname='yourdb' port='5432' user='yourusername' password='yourpassword'"

import re #regular expression support
import string #string manipulation support
from webob import Request
from webob import Response
import psycopg2 #PostgreSQL DB Connection
import psycopg2.extras #z.b. für named column indexes
import json
import sys #für Fehlerreporting

def application(environ, start_response):
  request = Request(environ)
  searchtables = []; # enter your default searchtable(s) here
  searchtablesstring = '';
  if "searchtables" in request.params:
    searchtablesstring = request.params["searchtables"]
    if len(searchtablesstring) > 0:
      #sanitize
      if re.search(r"[^A-Za-z,._]", searchtablesstring):
        print >> environ['wsgi.errors'], "offending input: %s" % searchtablesstring
        searchtables = [] # set empty to have no search table error returned
      else:
        searchtables.extend(searchtablesstring.split(','))

  querystring = request.params["query"]
  #strip away leading and trailing whitespaces
  querystring = querystring.strip()
  #split on whitespaces
  regex = re.compile(r'\s+')
  querystrings = regex.split(querystring)

  searchtableLength = len(searchtables)
  querystringsLength = len(querystrings)
  sql = ""
  errorText = ''

  # any searchtable given?
  if searchtableLength == 0:
    errorText += 'error: no search table'
    # write the error message to the error.log
    print >> environ['wsgi.errors'], "%s" % errorText
    response_headers = [('Content-type', 'text/plain'),
                        ('Content-Length', str(len(errorText)))]
    start_response('500 INTERNAL SERVER ERROR', response_headers)

    return [errorText]

  data = ()
  #for each table
  for i in range(searchtableLength):
    sql += "SELECT displaytext, '"+searchtables[i]+r"' AS searchtable, search_category, substring(search_category from 4) AS searchcat_trimmed, "
    # the following line is responsible for zooming in to the features
    # this is supposed to work in PostgreSQL since version 9.0
    sql += "'['||replace(regexp_replace(BOX2D(the_geom)::text,'BOX\(|\)','','g'),' ',',')||']'::text AS bbox "
    # if the above line does not work for you, deactivate it and uncomment the next line
    #sql += "'['||replace(regexp_replace(BOX2D(the_geom)::text,'BOX[(]|[)]','','g'),' ',',')||']'::text AS bbox "
    sql += "FROM "+searchtables[i]+" WHERE "
    #for each querystring
    for j in range(0, querystringsLength):
      # to implement a search method uncomment the sql and its following data line
      # for tsvector issues see the docs, use whichever version works best for you
      # this search does not use the field searchstring_tsvector at all but converts searchstring into a tsvector, its use is discouraged!
      #sql += "searchstring::tsvector @@ lower(%s)::tsquery"
      #data += (querystrings[j]+":*",)
      # this search uses the searchstring_tsvector field, which _must_ have been filled with to_tsvector('not_your_language', 'yourstring')
      #sql += "searchstring_tsvector @@ to_tsquery(\'not_your_language\', %s)"
      #data += (querystrings[j]+":*",)
      # if all tsvector stuff fails you can use this string comparison on the searchstring field
      sql += "searchstring ILIKE %s"
      data += ("%" + querystrings[j] + "%",)

      if j < querystringsLength - 1:
        sql += " AND "
    #union for next table
    if i < searchtableLength - 1:
      sql += " UNION "

  sql += " ORDER BY search_category ASC, displaytext ASC;"

  try:
    conn = psycopg2.connect(DB_CONN_STRING)
  except:
    errorText += 'error: database connection failed'
    # write the error message to the error.log
    print >> environ['wsgi.errors'], "%s" % errorText
    response_headers = [('Content-type', 'text/plain'),
                        ('Content-Length', str(len(errorText)))]
    start_response('500 INTERNAL SERVER ERROR', response_headers)

    return [errorText]

  cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

  try:
    cur.execute(sql, data)
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

  rowData = [];
  rows = cur.fetchall()
  lastSearchCategory = '';
  for row in rows:
    if lastSearchCategory != row['search_category']:
      rowData.append({"displaytext":row['searchcat_trimmed'],"searchtable":None,"bbox":None})
      lastSearchCategory = row['search_category']
    rowData.append({"displaytext":row['displaytext'],"searchtable":row['searchtable'],"bbox":row['bbox']})

  resultString = '{"results": '+json.dumps(rowData)+'}'
  resultString = string.replace(resultString,'"bbox": "[','"bbox": [')
  resultString = string.replace(resultString,']"}',']}')

  #we need to add the name of the callback function if the parameter was specified
  if "cb" in request.params:
    resultString = request.params["cb"] + '(' + resultString + ')'

  response = Response(resultString,"200 OK",[("Content-type","application/json"),("Content-length", str(len(resultString)) )])

  conn.close()

  return response(environ, start_response)
