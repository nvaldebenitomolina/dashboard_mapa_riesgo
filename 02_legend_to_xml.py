#TO GEOSERVER

import geopandas as gpd
import pandas as pd 


tabla = pd.read_csv('semaforo.csv')

#earthquake = gpd.read_file('geo_json_14e5dc33d2964115af3b54f84ed08074.geojson')
#print(earthquake.keys())

#print(earthquake['Riesgo'].max())
#print(earthquake['Riesgo'].min())


vari=tabla['variable']
mini=tabla['min']
maxi=tabla['max']
color=tabla['color']
title=tabla['title']

print(maxi)
print(mini)


import xml.etree.cElementTree as ET


root 	= ET.Element("xml", {"version":"1.0", "encoding":"UTF-8"})
root 	= ET.Element("StyledLayerDescriptor" , {"version":"1.0.0",
 "xsi:schemaLocation":"http://www.opengis.net/sld StyledLayerDescriptor.xsd",
"xmlns":"http://www.opengis.net/sld", "xmlns:ogc":"http://www.opengis.net/ogc", "xmlns:xlink":"http://www.w3.org/1999/xlink",
"xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance"})
doc  	= ET.SubElement(root, "NamedLayer")

ET.SubElement(doc, "Name").text = "area"

user 	= ET.SubElement(doc, "UserStyle")
feature = ET.SubElement(user,"FeatureTypeStyle")

for n in range(0,len(vari)):
	if n == 0:
		rule 	= ET.SubElement(feature,"Rule")

		ET.SubElement(rule, "Name").text = "MinPop"
		ET.SubElement(rule, "Title").text = title[n]

		ogcfilter 	= ET.SubElement(rule, "ogc:Filter")
		ogcproperty	= ET.SubElement	(ogcfilter, "ogc:PropertyIsLessThan")


		ET.SubElement(ogcproperty, "ogc:PropertyName").text = vari[n]
		ET.SubElement(ogcproperty, "ogc:Literal").text = str(maxi[n])

		polygon = ET.SubElement(rule,"PolygonSymbolizer")
		fill 	= ET.SubElement(polygon, "Fill")

		ET.SubElement(fill, "CssParameter", {"name":"fill"}).text = color[n]

	elif n == len(vari):
		rule 	= ET.SubElement(feature,"Rule")

		ET.SubElement(rule, "Name").text = "MaxPop"
		ET.SubElement(rule, "Title").text = title[n]

		ogcfilter 	= ET.SubElement(rule, "ogc:Filter")
		ogcproperty	= ET.SubElement	(ogcfilter, "ogc:PropertyIsGreaterThan")


		ET.SubElement(ogcproperty, "ogc:PropertyName").text = vari[n]
		ET.SubElement(ogcproperty, "ogc:Literal").text = str(maxi[n])

		polygon = ET.SubElement(rule,"PolygonSymbolizer")
		fill 	= ET.SubElement(polygon, "Fill")

		ET.SubElement(fill, "CssParameter", {"name":"fill"}).text = color[n]

	else:
		rule 	= ET.SubElement(feature,"Rule")

		ET.SubElement(rule, "Name").text = "smallPop"
		ET.SubElement(rule, "Title").text = title[n]

		ogcfilter 	= ET.SubElement(rule, "ogc:Filter")
		ogcand		= ET.SubElement(ogcfilter, "ogc:And")

		ogcproperty	= ET.SubElement(ogcand, "ogc:PropertyIsGreaterThanOrEqualTo")


		ET.SubElement(ogcproperty, "ogc:PropertyName").text = vari[n]
		ET.SubElement(ogcproperty, "ogc:Literal").text = str(mini[n])

		ogcproperty = ET.SubElement(ogcand, "ogc:PropertyIsLessThan")

		ET.SubElement(ogcproperty, "ogc:PropertyName").text = vari[n]
		ET.SubElement(ogcproperty, "ogc:Literal").text = str(maxi[n])

		polygon = ET.SubElement(rule,"PolygonSymbolizer")
		fill 	= ET.SubElement(polygon, "Fill")

		ET.SubElement(fill, "CssParameter", {"name":"fill"}).text = color[n]










tree 	= ET.ElementTree(root)

text	='''<?xml version="1.0" encoding="UTF-8"?>'''
#text.write("filename.xml")
tree.write("filename.xml")