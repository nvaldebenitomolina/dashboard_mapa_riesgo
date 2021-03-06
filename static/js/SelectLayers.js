/**
 * Created: vogdb Date: 4/30/13 Time: 6:07 PM
 */

 L.Control.SelectLayers = L.Control.ActiveLayers.extend({

    _initLayout: function () {
      var className = 'leaflet-control-layers'
      var container = this._container = L.DomUtil.create('div', className)
  
      L.DomEvent.disableClickPropagation(container)
      if (!L.Browser.touch) {
        L.DomEvent.on(container, 'mousewheel', L.DomEvent.stopPropagation)
      } else {
        L.DomEvent.on(container, 'click', L.DomEvent.stopPropagation)
      }
  
      var form = this._form = L.DomUtil.create('form', className + '-list')
  
      if (this.options.collapsed) {
        var link = this._layersLink = L.DomUtil.create('a', className + '-toggle', container)
        link.href = '#'
        link.title = 'Layers'
  
        if (L.Browser.touch) {
          L.DomEvent
            .on(link, 'click', L.DomEvent.stopPropagation)
            .on(link, 'click', L.DomEvent.preventDefault)
            .on(link, 'click', this._expand, this)
        } else {
          L.DomEvent
            .on(container, 'mouseover', this._expand, this)
            .on(container, 'mouseout', this._collapse, this)
          L.DomEvent.on(link, 'focus', this._expand, this)
        }
  
        this._map.on('movestart', this._collapse, this)
      } else {
        this._expand()
      }
  
      this._baseLayersList = L.DomUtil.create('select', className + '-base', form)
      L.DomEvent.on(this._baseLayersList, 'change', this._onBaseLayerOptionChange, this)
  
      this._separator = L.DomUtil.create('div', className + '-separator', form)
      this._title = L.DomUtil.create('p', 'p4', form)
      this._title.innerHTML += "2. Elige los marcadores que deseas visualizar"
  
      this._overlaysList = L.DomUtil.create('select', className + '-overlays', form)
      this._overlaysList.setAttribute('multiple', true)
      //extend across the width of the container
      this._overlaysList.style.width = '100%'
      L.DomEvent.on(this._overlaysList, 'change', this._onOverlayLayerOptionChange, this)
  
      container.appendChild(form)
    }
  
    ,_onBaseLayerOptionChange: function () {
      var selectedLayerIndex = this._baseLayersList.selectedIndex
      var selectedLayerOption = this._baseLayersList.options[selectedLayerIndex]
      var test = this._layers[selectedLayerIndex]
      /*var selectedLayer = this._layers[selectedLayerOption.layerId]*/
      var selectedLayer = this._layers[selectedLayerIndex]
      /*console.log(selectedLayerIndex)
      console.log(selectedLayerOption)*/
      this._changeBaseLayer(selectedLayer)
    }
  
    ,_changeBaseLayer: function (layerObj) {
      this._handlingClick = true
      /*console.log(layerObj)*/
  
      this._map.addLayer(layerObj.layer)
      this._map.removeLayer(this._activeBaseLayer.layer)
      this._map.setZoom(this._map.getZoom())
      this._map.fire('baselayerchange', {layer: layerObj.layer})
      this._activeBaseLayer = layerObj
  
      this._handlingClick = false
    }
  
    ,_onOverlayLayerOptionChange: function (e) {
      //Note. Don't try to implement this function through .selectedIndex
      //or delegation of click event. These methods have bunch of issues on Android devices.
      this._handlingClick = true
  
      var options = this._overlaysList.options
      console.log(this._layers)
      for (var i = 0; i < options.length; i++) {
        var option = options[i]
        //console.log(option.text)
        //console.log(option.selected)
        var layer1 = this._layers[5].layer //Renaca
        var layer2 = this._layers[6].layer // Marga Marga
        //console.log('selected layers')
        //console.log(this._layers[6].layer)
        //console.log(this._layers[6].name)
        
        // console.log(layer2)
        // if (option.selected) {
        //   if (!this._map.hasLayer(layer1)) {
        //     this._map.addLayer(layer1)
        //     this._map.removeLayer(layer2)
        //   }
        // } else {
        //   if (this._map.hasLayer(layer1)) {
        //     this._map.addLayer(layer2)
        //     this._map.removeLayer(layer1)
        //   }
        // }
        if (option.selected == true) {
          console.log(option.selected)
          console.log(option.text)
          if (option.text == this._layers[5].name){
            this._map.addLayer(this._layers[5].layer)
          }
          else if (option.text == this._layers[6].name){
            this._map.addLayer(this._layers[6].layer)

          }else if (option.text == this._layers[7].name){
            this._map.addLayer(this._layers[7].layer)

          }else if (option.text == this._layers[8].name){
            this._map.addLayer(this._layers[8].layer)

          }else if (option.text == this._layers[9].name){
            this._map.addLayer(this._layers[9].layer)

          }else if (option.text == this._layers[10].name){
            this._map.addLayer(this._layers[10].layer)

          }else if (option.text == this._layers[11].name){
            this._map.addLayer(this._layers[11].layer)

          }else if (option.text == this._layers[12].name){
            this._map.addLayer(this._layers[12].layer)

          }
          
          
          
        }else if (option.selected == false){
          console.log(option.selected)
          console.log(option.text)
          if (option.text == this._layers[5].name){
            this._map.removeLayer(this._layers[5].layer)
          }
          else if (option.text == this._layers[6].name){
            this._map.removeLayer(this._layers[6].layer)

          }else if (option.text == this._layers[7].name){
            this._map.removeLayer(this._layers[7].layer)

          }else if (option.text == this._layers[8].name){
            this._map.removeLayer(this._layers[8].layer)

          }else if (option.text == this._layers[9].name){
            this._map.removeLayer(this._layers[9].layer)

          }else if (option.text == this._layers[10].name){
            this._map.removeLayer(this._layers[10].layer)

          }else if (option.text == this._layers[11].name){
            this._map.removeLayer(this._layers[11].layer)

          }else if (option.text == this._layers[12].name){
            this._map.removeLayer(this._layers[12].layer)

          }
          
        }
        

        
        
      }
  
      this._handlingClick = false
    }
  
    ,_addItem: function (obj) {
      var option = this._createOptionElement(obj)
      if (obj.overlay) {
        this._overlaysList.appendChild(option)
      } else {
        this._baseLayersList.appendChild(option)
      }
    }
  
    ,_createOptionElement: function (obj) {
      
      var option = document.createElement('option')
      option.layerId = L.stamp(obj.layer)
      option.innerHTML = obj.name
      console.log(option)
      if (this._map.hasLayer(obj.layer)) {
        option.setAttribute('selected', true)
      }
      return option
    }
  
    ,_collapse: function (e) {
      if (e.target === this._container) {
        L.Control.Layers.prototype._collapse.apply(this, arguments)
      }
    }
  
  })
  
  L.control.selectLayers = function (baseLayers, overlays, options) {
    return new L.Control.SelectLayers(baseLayers, overlays, options)
  }