# Importing required libraries

# Importing required Libraries
import geopandas as gpd
import json
import pandas as pd

import numpy as np
import matplotlib.pyplot as plt
from pylab import *
import cmasher as cmr

cmap = cm.get_cmap('viridis', 500)    # PiYG
stop=1
start=0
lista=np.linspace(start, stop, num=500)
colors = cmr.take_cmap_colors('viridis', 500, return_fmt='hex')
print(lista)
print(colors)
def change_style(geojson):
    with open('static/geojson/'+geojson+'.geojson', 'r') as j:
        json_data = json.load(j)
        print(json_data.keys())
        for n in range(0,len(json_data['features'])):
            value=int(json_data['features'][n]['properties']['Riesgo']/0.002004008016032064 )
            print(json_data['features'][n]['properties']['Riesgo'])
            print(lista[value])
            print(json_data['features'][n]['properties']['style']['fillColor'])
            json_data['features'][n]['properties']['style']['fillColor']=colors[value]
            print(json_data['features'][n]['properties']['style']['fillColor'])
        with open('static/geojson/'+geojson+'_l2.geojson', 'w') as file:
            json.dump(json_data, file)

change_style('geo_json_1c01f61c237048b1a33f3863cd4c9286')
change_style('geo_json_775ed9e500574898863ca9e695e4e33c')
change_style('geo_json_51446edfa7624e4999700360925288bb')
change_style('geo_json_a7a99b2187454e69bfb81f6b424dc6bf')
change_style('geo_json_af5fd4f02abf42caaa66306a8ba1d7bb')