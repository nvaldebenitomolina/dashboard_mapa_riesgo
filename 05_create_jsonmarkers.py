import geopandas as gpd
import json
import pandas as pd
from fiona.crs import from_epsg

# process_markers('Centros_de_salud_terciaria_Hospitales') #hospitales
# process_markers('Compañías_de_Bomberos') #BOmberos
# process_markers('Establecimientos_Educacionales') #Educacionales
# process_markers('Cuartel_de_Carabineros') #Carabineros

# process_markers('Centros_de_salud_PRAIS') #salud
# newshape('Centros_de_salud_secundaria') #salud
# process_markers('Jardines_Infantiles_JUNJI') #Jardin
# process_markers('Jardines_Infantiles_INTEGRA') #Jardin

# process_markers('Centros_de_salud_primario_Consultorios','Centros_de_salud_primario_Postas_de_salud_rural') #salud

data={}

def read_create_json(name,path):
    df = gpd.read_file(path,encoding='UTF-8')
    data[name]=[[df['NOMBRE'][n],df['LATITUD'][n],df['LONGITUD'][n]] for n in range(df.shape[0])]
    print(df['NOMBRE'])
    return data

def merge_create_json(name,path):
    dfs=[]
    for i in range(len(path)):
        globals()["df" + str(i)] =  gpd.read_file(path[i],encoding='UTF-8')
        dfs.append(globals()["df" + str(i)])
        
    df = gpd.GeoDataFrame( pd.concat(dfs, ignore_index=True), crs=from_epsg(4326))
    data[name]=[[df['NOMBRE'][n],df['LATITUD'][n],df['LONGITUD'][n]] for n in range(df.shape[0])]
    print(df['NOMBRE'])
    return data

read_create_json("carabineros",'markers_output/Cuartel_de_Carabineros.shp')
read_create_json('hospitales','markers_output/Centros_de_salud_terciaria_Hospitales.shp')
read_create_json('bomberos','markers_output/Compañías_de_Bomberos.shp')
read_create_json('educacionales','markers_output/Establecimientos_Educacionales.shp')
merge_create_json('jardines',['markers_output/Jardines_Infantiles_JUNJI.shp','markers_output/Jardines_Infantiles_INTEGRA.shp'])
merge_create_json('centros_salud',['markers_output/Centros_de_salud_PRAIS.shp','markers_output/Centros_de_salud_secundaria.shp','markers_output/Centros_de_salud_primario_Consultorios.shp'])
with open('static/js/markers.js', 'w') as outfile:
    json.dump('markers='+str(data), outfile)