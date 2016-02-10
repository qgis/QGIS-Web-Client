#!/usr/bin/python
# -*- coding: utf-8 -*-
"""
/***************************************************************************
creates a custom Translations.js file
                             -------------------
begin                : 2014-04-28
copyright            : (C) 2014 by Bernhard Stroebl
email                : bernhard.stroebl@jena.de
***************************************************************************/

/***************************************************************************
 *                                                                         *
 * Copyright (2010-2012), The QGIS Project All rights reserved.
 * QGIS Web Client is released under a BSD license. Please see
 * https://github.com/qgis/qgis-web-client/blob/master/README
 * for the full text of the license and the list of contributors.                             *
 *                                                                         *
 ***************************************************************************/
"""

import codecs

def main():
    try:
        configFile = codecs.open("translations.cfg", 'r', "utf_8")
    except:
        print "!"
        print "Config file translations.cfg not found!"
        print "!"
        return None

    try:
        inputFile = codecs.open("../Translations.js", 'r', "utf_8")
    except:
        print "!"
        print "Datei download.txt nicht gefunden!"
        print "!"
        return None

    languages = ["en"] # default
    
    for aLine in configFile:
        if aLine[:1] != "#": # comment
            if aLine.strip() != "": # no empty lines
                languages = aLine.strip().split(" ")
                break
        

    configFile.close()
    outFile = codecs.open("../Translations_custom.js", "w", "utf_8")
    outFile.write("/* \n \
* \n \
* Translations_cfg.js -- part of QGIS Web Client \n \
* \n \
* Copyright (2010-2012), The QGIS Project All rights reserved. \n \
* QGIS Web Client is released under a BSD license. Please see \n \
* https://github.com/qgis/qgis-web-client/blob/master/README \n \
* for the full text of the license and the list of contributors. \n \
* \n \
*/ \n\n")

    for aLine in inputFile:
        if aLine[:4] == "var ":
            outFile.write(aLine)
        elif aLine.find("new Array()") != -1:
            outFile.write(aLine)
        else:
            for aLang in languages:
                if aLine.find("availableLanguages[") != -1:
                    if aLine.find("availableLanguages[\"" + aLang.strip() + "\"]") != -1:
                        if aLine.find("= {names:[]") != -1:
                            outFile.write(aLine)
                        else:
                            for bLang in languages:
                                if aLine.find("names[\"" + bLang + "\"]") != -1:
                                    outFile.write(aLine)
                else:
                    if aLine.find("[\"" + aLang.strip() + "\"]") != -1:
                        outFile.write(aLine)
                    elif aLine.find("[\'" + aLang.strip() + "\']") != -1:
                        outFile.write(aLine)
        
    inputFile.close()
    outFile.close()

if __name__ == "__main__":
    main()
