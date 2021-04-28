import numpy as np
import matplotlib.pyplot as plt
from pylab import *
import cmasher as cmr

cmap = cm.get_cmap('viridis', 500)    # PiYG
stop=1
start=0
lista=np.linspace(start, stop, num=500)
print(len(lista))
colors = cmr.take_cmap_colors('viridis', 500, return_fmt='hex')
print(lista)
print(colors)