import geopandas as gpd
from geopandas.tools import sjoin
import pandas as pd
from fiona.crs import from_epsg


def process_markers(name, second_name = None):
    print('************************')
    print(name)
    
    # #Viña
    df1= gpd.read_file(f'../03 Equipamiento/{name}.shp',encoding='UTF-8').to_crs('EPSG:4326')
    try:
        df1=df1[['geometry','NOMBRE']]
    except:
        print('not NOMBRE')
    try:
        df1=df1[['geometry','Nombre']]
        df1=df1.rename(columns={'Nombre':'NOMBRE'})
    except:
        print('not Nombre')
    try:
        df1=df1[['geometry','NOMBRE_UNI']]
        df1=df1.rename(columns={'NOMBRE_UNI':'NOMBRE'})
    except:
        print('not NOMBRE_UNI')
    df1['COMUNA']='Viña del Mar'
    df1['REGION']='Valparaiso'
    df1['INFO']= name
    df1['LATITUD']=df1['geometry'].y
    df1['LONGITUD']=df1['geometry'].x
    #print(df1)
    df2= gpd.read_file(f'../03 Equipamiento v1/{name}.shp',encoding='UTF-8').to_crs('EPSG:4326')
    try:
        df2=df2[['geometry','NOMBRE']]
    except:
        df2=df2[['geometry','Nombre']]
        df2=df2.rename(columns={'Nombre':'NOMBRE'})
    
    df2['COMUNA']='Valparaiso'
    df2['REGION']='Valparaiso'
    df2['INFO']= name
    df2['LATITUD']=df2['geometry'].y
    df2['LONGITUD']=df2['geometry'].x
    
    if second_name == None:
        df= gpd.GeoDataFrame( pd.concat([df1,df2], ignore_index=True), crs=from_epsg(4326))
        
        df.to_file(f'markers_output/{name}.shp',encoding='UTF-8')
    else:
        df3=gpd.read_file(f'../03 Equipamiento v1/{second_name}.shp',encoding='UTF-8').to_crs('EPSG:4326')
        try:
            df3=df3[['geometry','NOMBRE']]
        except:
            print('not NOMBRE')
        try:
            df3=df3[['geometry','Nombre']]
            df3=df3.rename(columns={'Nombre':'NOMBRE'})
        except:
            print('not Nombre')
        try:
            df3=df3[['geometry','NOMBRE_UNI']]
            df3=df3.rename(columns={'NOMBRE_UNI':'NOMBRE'})
        except:
            print('not NOMBRE_UNI')
        df3['COMUNA']='Viña del Mar'
        df3['REGION']='Valparaiso'
        df3['INFO']= second_name
        df3['LATITUD']=df3['geometry'].y
        df3['LONGITUD']=df3['geometry'].x
        df= gpd.GeoDataFrame( pd.concat([df1,df2,df3], ignore_index=True), crs=from_epsg(4326))
        
        df.to_file(f'markers_output/{name}.shp',encoding='UTF-8')

def newshape(name):
    print('************************')
    print(name)
    df1= gpd.read_file(f'../03 Equipamiento v1/{name}.shp',encoding='UTF-8').to_crs('EPSG:4326')
    try:
        df1=df1[['geometry','NOMBRE']]
    except:
        print('not NOMBRE')
    try:
        df1=df1[['geometry','Nombre']]
        df1=df1.rename(columns={'Nombre':'NOMBRE'})
    except:
        print('not Nombre')
    try:
        df1=df1[['geometry','NOMBRE_UNI']]
        df1=df1.rename(columns={'NOMBRE_UNI':'NOMBRE'})
    except:
        print('not NOMBRE_UNI')
    df1['COMUNA']='Viña del Mar'
    df1['REGION']='Valparaiso'
    df1['INFO']= name
    df1['LATITUD']=df1['geometry'].y
    df1['LONGITUD']=df1['geometry'].x
    #print(df1)
    df1.to_file(f'markers_output/{name}.shp',encoding='UTF-8')


process_markers('Centros_de_salud_PRAIS') #salud
process_markers('Centros_de_salud_terciaria_Hospitales') #hospitales
process_markers('Compañías_de_Bomberos') #BOmberos
process_markers('Establecimientos_Educacionales') #Educacionales
process_markers('Jardines_Infantiles_JUNJI') #Jardin
process_markers('Jardines_Infantiles_INTEGRA') #Jardin
process_markers('Cuartel_de_Carabineros') #Carabineros
newshape('Centros_de_salud_secundaria') #salud
process_markers('Centros_de_salud_primario_Consultorios','Centros_de_salud_primario_Postas_de_salud_rural') #salud




