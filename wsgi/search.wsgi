#!/usr/bin/python
# -*- coding: utf-8 -*-
#sample queries
#http://localhost/wsgi/search.wsgi?searchtables=abwasser.such§tabelle&query=1100&cb=bla
#http://localhost/wsgi/search.wsgi?query=Oberlandstr&cb=bla

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
  searchtables = ['av_user.suchtabelle'];
  searchtablesstring = '';
  if "searchtables" in request.params:
    searchtablesstring = request.params["searchtables"]
    if len(searchtablesstring) > 0:
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
  
  #for each table
  for i in range(searchtableLength):
    sql += "SELECT displaytext, '"+searchtables[i]+r"' AS searchtable, search_category, substring(search_category from 4) AS searchcat_trimmed, '['||replace(regexp_replace(BOX2D(the_geom)::text,'BOX\(|\)','','g'),' ',',')||']'::text AS bbox FROM "+searchtables[i]+" WHERE "
    #for each querystring
    for j in range(0, querystringsLength):
      sql += "searchstring::tsvector @@ lower('"+querystrings[j]+":*')::tsquery"
      if j < querystringsLength - 1:
        sql += " AND "
    #union for next table
    if i < searchtableLength - 1:
      sql += " UNION "
      
  sql += " ORDER BY search_category ASC, displaytext ASC;"

  errorText = ''
  try:
    conn = psycopg2.connect("db='yourdb' port='5432' user='yourusername' password='yourpassword'")
  except:
    errorText += 'error: database connection failed!'
  
  cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    
  try:
    cur.execute(sql)
  except:
    exceptionType, exceptionValue, exceptionTraceback = sys.exc_info()
    errorText += 'error: could not execute query: '+str(exceptionValue)
    
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
