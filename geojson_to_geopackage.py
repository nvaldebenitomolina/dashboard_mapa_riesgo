import geopandas as gpd


earthquake = gpd.read_file('shapefiles/Indices_incendios.shp')
print(earthquake.keys())
# # style=earthquake['style']
# # print(style)
# # new_file={}
# # for n in range(0,len(style)):	
# # 	if style[n]['fillColor'] != '#eff3ffff':
# # 		print(n)
# # 		print(style[n]['fillColor'])
		

earthquake.to_file("geopackages/Incendios_Forestales.gpkg", layer='Incendios Forestales', driver="GPKG")


earthquake = gpd.read_file('shapefiles/Indices_calor_extremo.shp')
print(earthquake.head())
earthquake.to_file("geopackages/Calor_Extremo.gpkg", layer='Calor Extremo', driver="GPKG")

earthquake = gpd.read_file('shapefiles/Indices_marejada.shp')
print(earthquake.head())
earthquake.to_file("geopackages/Marejadas.gpkg", layer='Marejadas', driver="GPKG")

earthquake = gpd.read_file('shapefiles/Indices_inundaciones.shp')
print(earthquake.head())
earthquake.to_file("geopackages/Inundaciones.gpkg", layer='Inundaciones', driver="GPKG")

earthquake = gpd.read_file('shapefiles/Indices_remocion_masa.shp')
print(earthquake.head())
earthquake.to_file("geopackages/Remoción_en_Masa.gpkg", layer='Remoción en Masa', driver="GPKG")