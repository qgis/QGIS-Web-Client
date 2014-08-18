#!/usr/bin/python
# -*- coding: utf-8 -*-
# Script to connect to a PostgreSQL database. Connection object to be used in all wasgi scripts

import psycopg2 #PostgreSQL DB Connection

# configure your DB connection here
DB_CONN_STRING="host='myhost' dbname='mydb' port='5432' user='myuser' password='secret'"

def getConnection(environ, start_response):
  #SQL database connection
  try:
    conn = psycopg2.connect(DB_CONN_STRING)
    return conn
  except:
    errorText = 'error: database connection failed!'
    # write the error message to the error.log
    print >> environ['wsgi.errors'], "%s" % errorText
    response_headers = [('Content-type', 'text/plain'),
                        ('Content-Length', str(len(errorText)))]
    start_response('500 INTERNAL SERVER ERROR', response_headers)

    return None
  