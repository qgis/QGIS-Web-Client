#!/bin/bash
txt2tags -o ../README -t txt README.t2t 
txt2tags -o README.html -t html README.t2t
txt2tags -o README.tex -t tex README.t2t
pdflatex README.tex