<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">        
    <xsl:output method="xml" encoding="UTF-8" indent="yes"/>
    <!-- File header -->
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title><xsl:value-of select="/webgis/@title"/></title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <style type="text/css">
                    a img{ border:none; }
                </style>
            </head>
            <body style="font-family:Tahoma,Cadastra Condensed;font-size:15px;margin:20px;">
                <table width="100%" cellpadding="5">
                    <tr>
                        <td valign="top">
                            <h1 style="font-size:20px;"><xsl:value-of select="/webgis/@title"/></h1>
                        </td>
                        <td width="195" align="right">
                            <img width="185" height="77" src="/resources/uster_logo_transparent_medium_size.png" alt="Uster Wappen" />
                        </td>
                    </tr>
                </table>
                <xsl:apply-templates select="/webgis/topic"/>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="topic">
        <h2 style="font-size:16px;"><xsl:value-of select="./@name"/></h2>
        <table cellpadding="5">
            <xsl:for-each select="./project">
                <xsl:variable name="projectfile"><xsl:value-of select="./@projectfile"/></xsl:variable>
                <xsl:variable name="url">
                    <xsl:value-of select="/webgis/@path"/>
                    <xsl:text>?map=</xsl:text>
                    <xsl:value-of select="./@projectpath"/>
                    <xsl:value-of select="./@projectfile"/>
                    <xsl:text>.qgs&amp;format=</xsl:text>
                    <xsl:value-of select="./@format"/>
                    <xsl:text>&amp;visibleLayers=</xsl:text>
                    <xsl:value-of select="./@visibleLayers"/>
                </xsl:variable>
                <xsl:variable name="urlcgi">
                    <xsl:value-of select="/webgis/@mapserver"/>
                    <xsl:text>?map=</xsl:text>
                    <xsl:value-of select="./@projectpath"/>
                    <xsl:value-of select="./@projectfile"/>
                    <xsl:text>.qgs</xsl:text>
                </xsl:variable>
                <tr>
                <td>
                    <a href="{$url}"><img width="600" height="200" src="/webgis/thumbnails/{$projectfile}.png" align="top"/></a>
                </td>
                <td valign="top">
                    <a href="{$url}"><xsl:value-of select="./@name"></xsl:value-of></a><br/><br/>
                    <a href="{$urlcgi}&amp;service=WMS&amp;Request=GetCapabilities">WMS Get Capabilities</a><br/><br/>
                    Aktualisierung: <xsl:value-of select="./@update"/><br/>
                    Zuständig: <xsl:value-of select="./@responsible"/>
                </td>
            </tr>
            </xsl:for-each>
        </table>
    </xsl:template>
</xsl:stylesheet>    