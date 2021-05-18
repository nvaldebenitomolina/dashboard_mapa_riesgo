var bounds = null;

/* Disclaimer before */
$("#myModal").modal("show");

/* Map */
var map_64b9894af4814ae08fe869ab362ce2b4 = L.map('map_64b9894af4814ae08fe869ab362ce2b4', {
    center: [-33.04, -71.56635993377701],
    zoom: 12,
    maxBounds: bounds,
    layers: [],
    worldCopyJump: false,
    crs: L.CRS.EPSG3857,
    zoomControl: true,
    editable: true,
    printable: true,
    downloadable: true
    });


/* Title */
var tile_layer_7fb2e0f6fe2e4c3c8a268247fc549c37 = L.tileLayer(
    'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    {
    "attribution": null,
    "detectRetina": false,
    "maxNativeZoom": 18,
    "maxZoom": 18,
    "minZoom": 0,
    "noWrap": false,
    "opacity": 1,
    "subdomains": "abc",
    "tms": false
}).addTo(map_64b9894af4814ae08fe869ab362ce2b4);
        var myStyle = {
            "color": "#ff7800",
            "opacity": 0.65,
            "weight": 5
        };

/* Marker 1 */
var marker_52cc9e51f47d4f8598a21a9973e46343 = L.marker(
    [-33.021182, -71.559811],
    {
        icon: new L.Icon.Default(),
        }
).addTo(map_64b9894af4814ae08fe869ab362ce2b4);

var icon_5dc95357a2ca4d6e968bfa44886bb6c0 = L.AwesomeMarkers.icon({
    icon: 'info-sign',
    iconColor: 'white',
    markerColor: 'blue',
    prefix: 'glyphicon',
    extraClasses: 'fa-rotate-0'
    });
/*marker_52cc9e51f47d4f8598a21a9973e46343.setIcon(icon_5dc95357a2ca4d6e968bfa44886bb6c0);*/

var popup_e64c9980a9eb47b2a892a52331f405a8 = L.popup({maxWidth: '100%'});
    
var html_cc0429301e574089ac2acd76ec9858fe = $(`<div id="html_cc0429301e574089ac2acd76ec9858fe" style="width: 100.0%; height: 100.0%;">Estero Marga Marga</div>`)[0];

popup_e64c9980a9eb47b2a892a52331f405a8.setContent(html_cc0429301e574089ac2acd76ec9858fe);

marker_52cc9e51f47d4f8598a21a9973e46343.bindPopup(popup_e64c9980a9eb47b2a892a52331f405a8);
    
marker_52cc9e51f47d4f8598a21a9973e46343.bindTooltip(
    `<div>`
    + `click` + `</div>`,
    {"sticky": true}
);
    
/* Marker 2 */
var marker_d67b9d9f28524eec9fc4bc4fd8b7e715 = L.marker(
    [-32.972695, -71.541038],
    {
        icon: new L.Icon.Default(),
    }
).addTo(map_64b9894af4814ae08fe869ab362ce2b4);

var icon_e69fc271b5504f1c91cd508c7772ac43 = L.AwesomeMarkers.icon({
    icon: 'info-sign',
    iconColor: 'white',
    markerColor: 'blue',
    prefix: 'glyphicon',
    extraClasses: 'fa-rotate-0'
    });

/*marker_d67b9d9f28524eec9fc4bc4fd8b7e715.setIcon(icon_e69fc271b5504f1c91cd508c7772ac43);*/

var popup_88140694bafb41c282097ec166a506a5 = L.popup({maxWidth: '100%'});

var html_d1315c690fc64e14ae2db4e682551734 = $(`<div id="html_d1315c690fc64e14ae2db4e682551734" style="width: 100.0%; height: 100.0%;">Estero Reñaca</div>`)[0];

popup_88140694bafb41c282097ec166a506a5.setContent(html_d1315c690fc64e14ae2db4e682551734);

marker_d67b9d9f28524eec9fc4bc4fd8b7e715.bindPopup(popup_88140694bafb41c282097ec166a506a5);

marker_d67b9d9f28524eec9fc4bc4fd8b7e715.bindTooltip(
    `<div>`
    + `click` + `</div>`,
    {"sticky": true}
);
// Marker 3
var LeafIcon = L.Icon.extend({
    options: {
        //shadowUrl: 'leaf-shadow.png',
        iconSize:     [38, 38],
        //shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        //shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});
var educacionIcon = new LeafIcon({iconUrl: 'static/images/educacion.png'}),
    saludIcon = new LeafIcon({iconUrl: 'static/images/hospital.png'}),
    hospitalIcon = new LeafIcon({iconUrl: 'static/images/signo-de-hotel.png'}),
    carabinerosIcon = new LeafIcon({iconUrl: 'static/images/estacion-de-policia.png'}),
    jardinIcon = new LeafIcon({iconUrl: 'static/images/estrella.png'}),
    bomberosIcon = new LeafIcon({iconUrl: 'static/images/casco-de-bombero.png'});


var locations = JSON.parse(markers);
mapLink =
'<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
}).addTo(map_64b9894af4814ae08fe869ab362ce2b4);
function readMarkers(name, iconmarker) {
    for (var i = 0; i < locations[name].length; i++) {
        marker = new L.marker(
            [locations[name][i][1], locations[name][i][2]],
            {icon: iconmarker})
            .bindPopup(locations[name][i][0])
            .addTo(map_64b9894af4814ae08fe869ab362ce2b4);
        }
    return marker

}
markerCarabineros = readMarkers('carabineros',carabinerosIcon)
markerHospitales = readMarkers('hospitales',hospitalIcon)
markerBomberos = readMarkers('bomberos',bomberosIcon)
markerEducacion = readMarkers('educacionales',educacionIcon)
markerJardin = readMarkers('jardines', jardinIcon)
// Init
//$("#myOption").val("none");
console.log('--LOADING--')
var x = 'none';
console.log(x)
geo_json_1c01f61c237048b1a33f3863cd4c9286=readGeojson('geo_json_1c01f61c237048b1a33f3863cd4c9286_'+x)
geo_json_775ed9e500574898863ca9e695e4e33c=readGeojson('geo_json_775ed9e500574898863ca9e695e4e33c_'+x)
geo_json_51446edfa7624e4999700360925288bb=readGeojson('geo_json_51446edfa7624e4999700360925288bb_'+x)
geo_json_a7a99b2187454e69bfb81f6b424dc6bf=readGeojson('geo_json_a7a99b2187454e69bfb81f6b424dc6bf_'+x)
geo_json_af5fd4f02abf42caaa66306a8ba1d7bb=readGeojson('geo_json_af5fd4f02abf42caaa66306a8ba1d7bb_'+x)


/* Layer Control popup */
console.log('Layer control select ...')
var layer_control_45cf59e7a6084e749d632c2f930d60f1 = {
    base_layers : { "Marejadas" : geo_json_51446edfa7624e4999700360925288bb,
    "Calor Extremo" : geo_json_af5fd4f02abf42caaa66306a8ba1d7bb,
    "Inundaciones" : geo_json_a7a99b2187454e69bfb81f6b424dc6bf,
    "Remoción en Masa" : geo_json_1c01f61c237048b1a33f3863cd4c9286,
    "Incendios Forestales" : geo_json_775ed9e500574898863ca9e695e4e33c },
    overlays : {"Estero Reñaca":marker_d67b9d9f28524eec9fc4bc4fd8b7e715,
    "Estero Marga Marga":marker_52cc9e51f47d4f8598a21a9973e46343,
    "Carabineros":markerCarabineros,
    "Hospitales":markerHospitales,
    "Bomberos":markerBomberos,
    "Centros educacionales":markerEducacion,
    "Jardín infantil":markerJardin},
    };
c = L.control.selectLayers(
    layer_control_45cf59e7a6084e749d632c2f930d60f1.base_layers,
    layer_control_45cf59e7a6084e749d632c2f930d60f1.overlays,
    );

c.addTo(map_64b9894af4814ae08fe869ab362ce2b4);

$('#jpt').append(c.onAdd(map_64b9894af4814ae08fe869ab362ce2b4))

geo_json_51446edfa7624e4999700360925288bb.remove();
geo_json_af5fd4f02abf42caaa66306a8ba1d7bb.remove();
geo_json_a7a99b2187454e69bfb81f6b424dc6bf.remove();
geo_json_1c01f61c237048b1a33f3863cd4c9286.remove();
geo_json_775ed9e500574898863ca9e695e4e33c.remove();
$("#myOption").val("l1");
var x = 'l1';
console.log(x)
createLegend(x,y)
geo_json_1c01f61c237048b1a33f3863cd4c9286=readGeojson('geo_json_1c01f61c237048b1a33f3863cd4c9286_'+x).addTo(map_64b9894af4814ae08fe869ab362ce2b4);
geo_json_775ed9e500574898863ca9e695e4e33c=readGeojson('geo_json_775ed9e500574898863ca9e695e4e33c_'+x)
geo_json_51446edfa7624e4999700360925288bb=readGeojson('geo_json_51446edfa7624e4999700360925288bb_'+x)
geo_json_a7a99b2187454e69bfb81f6b424dc6bf=readGeojson('geo_json_a7a99b2187454e69bfb81f6b424dc6bf_'+x)
geo_json_af5fd4f02abf42caaa66306a8ba1d7bb=readGeojson('geo_json_af5fd4f02abf42caaa66306a8ba1d7bb_'+x)


//geo_json_51446edfa7624e4999700360925288bb.remove();
geo_json_af5fd4f02abf42caaa66306a8ba1d7bb.remove();
geo_json_a7a99b2187454e69bfb81f6b424dc6bf.remove();
geo_json_1c01f61c237048b1a33f3863cd4c9286.remove();
geo_json_775ed9e500574898863ca9e695e4e33c.remove();

geo_json_51446edfa7624e4999700360925288bb.addTo(map_64b9894af4814ae08fe869ab362ce2b4);
// var x = 'l2';
// console.log(x)
// geo_json_1c01f61c237048b1a33f3863cd4c9286=readGeojson('geo_json_1c01f61c237048b1a33f3863cd4c9286_'+x)
// geo_json_775ed9e500574898863ca9e695e4e33c=readGeojson('geo_json_775ed9e500574898863ca9e695e4e33c_'+x)
// geo_json_51446edfa7624e4999700360925288bb=readGeojson('geo_json_51446edfa7624e4999700360925288bb_'+x)
// geo_json_a7a99b2187454e69bfb81f6b424dc6bf=readGeojson('geo_json_a7a99b2187454e69bfb81f6b424dc6bf_'+x)
// geo_json_af5fd4f02abf42caaa66306a8ba1d7bb=readGeojson('geo_json_af5fd4f02abf42caaa66306a8ba1d7bb_'+x)


// geo_json_51446edfa7624e4999700360925288bb.remove();
// geo_json_af5fd4f02abf42caaa66306a8ba1d7bb.remove();
// geo_json_a7a99b2187454e69bfb81f6b424dc6bf.remove();
// geo_json_1c01f61c237048b1a33f3863cd4c9286.remove();
// geo_json_775ed9e500574898863ca9e695e4e33c.remove();

// var x = 'l3';
// console.log(x)
// geo_json_1c01f61c237048b1a33f3863cd4c9286=readGeojson('geo_json_1c01f61c237048b1a33f3863cd4c9286_'+x)
// geo_json_775ed9e500574898863ca9e695e4e33c=readGeojson('geo_json_775ed9e500574898863ca9e695e4e33c_'+x)
// geo_json_51446edfa7624e4999700360925288bb=readGeojson('geo_json_51446edfa7624e4999700360925288bb_'+x)
// geo_json_a7a99b2187454e69bfb81f6b424dc6bf=readGeojson('geo_json_a7a99b2187454e69bfb81f6b424dc6bf_'+x)
// geo_json_af5fd4f02abf42caaa66306a8ba1d7bb=readGeojson('geo_json_af5fd4f02abf42caaa66306a8ba1d7bb_'+x)


// geo_json_51446edfa7624e4999700360925288bb.remove();
// geo_json_af5fd4f02abf42caaa66306a8ba1d7bb.remove();
// geo_json_a7a99b2187454e69bfb81f6b424dc6bf.remove();
// geo_json_1c01f61c237048b1a33f3863cd4c9286.remove();
// geo_json_775ed9e500574898863ca9e695e4e33c.remove();

$('.leaflet-control-layers.leaflet-control').hide();
$(".leaflet-control-layers").addClass("leaflet-control-layers-expanded")



/* Changing title and description */
$('.leaflet-control-layers-expanded').change(function(){
    console.log('---CHANGING TITLE---')
    console.log($('.leaflet-control-layers-expanded :selected').val())
    geo_json_51446edfa7624e4999700360925288bb.remove();
    geo_json_af5fd4f02abf42caaa66306a8ba1d7bb.remove();
    geo_json_a7a99b2187454e69bfb81f6b424dc6bf.remove();
    geo_json_1c01f61c237048b1a33f3863cd4c9286.remove();
    geo_json_775ed9e500574898863ca9e695e4e33c.remove();
    y=$('.leaflet-control-layers-expanded :selected').val()

    $('.leaflet-control-layers-base option[text="'+y+'"]').attr('selected','selected');
    var x = document.getElementById("myOption").value;
    var y = $('.leaflet-control-layers-expanded :selected').val()
    console.log(x)
    if($('#msc-1').attr('data')==$('.leaflet-control-layers-expanded :selected').val()){
    $('#msc-1').show();
    console.log($('.leaflet-control-layers-expanded :selected').val())
    $('#msc-1').show(); $('#msc-2').hide();$('#msc-3').hide();$('#msc-4').hide();$('#msc-5').hide()
    $("#myOption").val(x);
    createLegend(x,y)
    geo_json_af5fd4f02abf42caaa66306a8ba1d7bb=readGeojson('geo_json_af5fd4f02abf42caaa66306a8ba1d7bb_'+x)
    geo_json_af5fd4f02abf42caaa66306a8ba1d7bb.addTo(map_64b9894af4814ae08fe869ab362ce2b4)
    
    }

    else if($('#msc-2').attr('data')==$('.leaflet-control-layers-expanded :selected').val()){
    $('#msc-2').show();
    console.log($('.leaflet-control-layers-expanded :selected').val())
    $('#msc-1').hide();$('#msc-2').show();$('#msc-3').hide();$('#msc-4').hide();$('#msc-5').hide()
    $("#myOption").val(x);
    createLegend(x,y)
    geo_json_a7a99b2187454e69bfb81f6b424dc6bf = readGeojson('geo_json_a7a99b2187454e69bfb81f6b424dc6bf_'+x)
    geo_json_a7a99b2187454e69bfb81f6b424dc6bf.addTo(map_64b9894af4814ae08fe869ab362ce2b4)
   
    }

    else if($('#msc-3').attr('data')==$('.leaflet-control-layers-expanded :selected').val()){
    $('#msc-3').show();
    console.log($('.leaflet-control-layers-expanded :selected').val())
    $('#msc-1').hide();$('#msc-2').hide();$('#msc-3').show();$('#msc-4').hide();$('#msc-5').hide()
    $("#myOption").val(x);
    createLegend(x,y)
    geo_json_51446edfa7624e4999700360925288bb = readGeojson('geo_json_51446edfa7624e4999700360925288bb_'+x)
    geo_json_51446edfa7624e4999700360925288bb.addTo(map_64b9894af4814ae08fe869ab362ce2b4)
   
    }

    else if($('#msc-4').attr('data')==$('.leaflet-control-layers-expanded :selected').val()){
    $('#msc-4').show();
    console.log($('.leaflet-control-layers-expanded :selected').val())
    $('#msc-1').hide();$('#msc-2').hide();$('#msc-3').hide();$('#msc-4').show();$('#msc-5').hide()
    $("#myOption").val(x);
    createLegend(x,y)
    geo_json_1c01f61c237048b1a33f3863cd4c9286 = readGeojson('geo_json_1c01f61c237048b1a33f3863cd4c9286_'+x)
    geo_json_1c01f61c237048b1a33f3863cd4c9286.addTo(map_64b9894af4814ae08fe869ab362ce2b4)

   
    }

    else if($('#msc-5').attr('data')==$('.leaflet-control-layers-expanded :selected').val()){
    $('#msc-5').show();
    console.log($('.leaflet-control-layers-expanded :selected').val())
    $('#msc-1').hide();$('#msc-2').hide();$('#msc-3').hide();$('#msc-4').hide();$('#msc-5').show()
    $("#myOption").val(x);
    createLegend(x,y)
    geo_json_775ed9e500574898863ca9e695e4e33c=readGeojson('geo_json_775ed9e500574898863ca9e695e4e33c_'+x)
    geo_json_775ed9e500574898863ca9e695e4e33c.addTo(map_64b9894af4814ae08fe869ab362ce2b4)
    }
    
    //try{
    //    document.getElementById("legend")
    //    .outerHTML = "";
        /*map_64b9894af4814ae08fe869ab362ce2b4.removeControl(color_map_b7f9973159064893a83e9b3c41690486); */
        /*map_64b9894af4814ae08fe869ab362ce2b4.color_map_b7f9973159064893a83e9b3c41690486*/
    //}
    //catch{
    //    console.log('not removing legend...')
    //}
    
    console.log(y)
    $('.leaflet-control-layers-base option[text="'+y+'"]').attr('selected', true);
})
$('#msc-3').show();$('#msc-2').hide();$('#msc-1').hide();$('#msc-4').hide();$('#msc-5').hide()

// Reading geojson
function readGeojson(geojson_url) {
    console.log('---READING LAYER---')
    console.log($('.leaflet-control-layers-expanded :selected').val())
    y=$('.leaflet-control-layers-expanded :selected').val()
    try{
        geo_json_51446edfa7624e4999700360925288bb.remove();
        geo_json_af5fd4f02abf42caaa66306a8ba1d7bb.remove();
        geo_json_a7a99b2187454e69bfb81f6b424dc6bf.remove();
        geo_json_1c01f61c237048b1a33f3863cd4c9286.remove();
        geo_json_775ed9e500574898863ca9e695e4e33c.remove();
    }
    catch{
        console.log('removing')
    }
    var geo_json = new L.GeoJSON.AJAX( Flask.url_for('static', {'filename':'geojson/'+geojson_url+'.geojson' }),{style: function(feature) {return feature.properties.style;}});
    console.log(geojson_url)
    console.log($('.leaflet-control-layers-expanded :selected').val())
    
    geo_json.addTo(map_64b9894af4814ae08fe869ab362ce2b4 );
    /*geo_json_af5fd4f02abf42caaa66306a8ba1d7bb.setStyle(function(feature) {return feature.properties.style;});*/
            
        
    geo_json.bindTooltip(
    function(layer){
    // Convert non-primitive to String.
    let handleObject = (feature)=>typeof(feature)=='object' ? JSON.stringify(feature) : feature;
    let fields = ['ID_MANZENT', 'Amenaza', 'Exposicion', 'Sensibilidad', 'Respuesta', 'Riesgo'];
    
    let aliases = ['Manzana', 'Amenaza', 'Exposición', 'Sensibilidad', 'Respuesta', 'Riesgo'];
    
    return '<table>' +
    String(
        fields.map(
        columnname=>
            `<tr style="text-align: left;">
            <th style="padding: 4px; padding-right: 10px;">
                ${aliases[fields.indexOf(columnname)]
                .toLocaleString()}
            </th>
            <td style="padding: 4px;">${handleObject(layer.feature.properties[columnname])
            .toLocaleString()}</td></tr>`
        ).join(''))
        +'</table>'
    }, {"sticky": true});
   
    return geo_json
    
}

// Map color
function changeColorMap() {
    console.log('--CHANGING LEGEND AND MAP---')
    var x = document.getElementById("myOption").value;
    var y = $('.leaflet-control-layers-expanded :selected').val()
    if(x == 'none'){
        try{
            geo_json_51446edfa7624e4999700360925288bb.remove();
            geo_json_af5fd4f02abf42caaa66306a8ba1d7bb.remove();
            geo_json_a7a99b2187454e69bfb81f6b424dc6bf.remove();
            geo_json_1c01f61c237048b1a33f3863cd4c9286.remove();
            geo_json_775ed9e500574898863ca9e695e4e33c.remove();}
        catch{
            console.log('No layers')
        }
        try{
            document.getElementById("legend")
            .outerHTML = "";
            /*map_64b9894af4814ae08fe869ab362ce2b4.removeControl(color_map_b7f9973159064893a83e9b3c41690486); */
            /*map_64b9894af4814ae08fe869ab362ce2b4.color_map_b7f9973159064893a83e9b3c41690486*/
        }
        catch{
            console.log('not removing legend...')
        }

    }else{
        if(y == "Marejadas"){
            /*geo_json_51446edfa7624e4999700360925288bb.remove()*/
            createLegend(x,y)
            geo_json_51446edfa7624e4999700360925288bb=readGeojson('geo_json_51446edfa7624e4999700360925288bb_'+x)}
        else if(y =="Calor Extremo"){
            /*geo_json_af5fd4f02abf42caaa66306a8ba1d7bb.remove()*/
            createLegend(x,y)
            geo_json_af5fd4f02abf42caaa66306a8ba1d7bb=readGeojson('geo_json_af5fd4f02abf42caaa66306a8ba1d7bb_'+x)}
        else if(y =="Inundaciones"){
            createLegend(x,y)
            geo_json_a7a99b2187454e69bfb81f6b424dc6bf=readGeojson('geo_json_a7a99b2187454e69bfb81f6b424dc6bf_'+x)}
        else if(y =="Remoción en Masa"){
            createLegend(x,y)
            geo_json_1c01f61c237048b1a33f3863cd4c9286=readGeojson('geo_json_1c01f61c237048b1a33f3863cd4c9286_'+x)}
        else if(y =="Incendios Forestales"){
            createLegend(x,y)
            geo_json_775ed9e500574898863ca9e695e4e33c=readGeojson('geo_json_775ed9e500574898863ca9e695e4e33c_'+x) }
       

    }
   
    
}

/* Color map legend */
function createLegend(legend,y){
    console.log('--CREATING LEGEND--')
    try{
        document.getElementById("legend")
        .outerHTML = "";
        /*map_64b9894af4814ae08fe869ab362ce2b4.removeControl(color_map_b7f9973159064893a83e9b3c41690486); */
        /*map_64b9894af4814ae08fe869ab362ce2b4.color_map_b7f9973159064893a83e9b3c41690486*/
    }
    catch{
        console.log('LEGEND NOT WORKING')
    }
    /*console.log(legend)*/
    var text   =JSON.parse(legends)
    /*console.log(text)*/
    var color_map_b7f9973159064893a83e9b3c41690486 = {};
    /*console.log(text[legend].colors)
    console.log(text[legend].values[0])*/
    var y = $('.leaflet-control-layers-expanded :selected').val()
    color_map_b7f9973159064893a83e9b3c41690486.color = d3.scale.threshold()
          .domain(text[legend].values)
          .range(text[legend].colors);
    color_map_b7f9973159064893a83e9b3c41690486.x = d3.scale.linear()
          .domain([0.0, 1.0])
          .range([0, 400]);
    color_map_b7f9973159064893a83e9b3c41690486.legend = L.control({position: 'topright'});
    color_map_b7f9973159064893a83e9b3c41690486.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_b7f9973159064893a83e9b3c41690486.legend.addTo(map_64b9894af4814ae08fe869ab362ce2b4);
    
    color_map_b7f9973159064893a83e9b3c41690486.xAxis = d3.svg.axis()
        .scale(color_map_b7f9973159064893a83e9b3c41690486.x)
        .orient("top")
        .tickSize(1)
        .tickValues([0, 0.2, 0.4, 0.6, 0.8]);
    
    color_map_b7f9973159064893a83e9b3c41690486.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);
    
    color_map_b7f9973159064893a83e9b3c41690486.g = color_map_b7f9973159064893a83e9b3c41690486.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");
    
    color_map_b7f9973159064893a83e9b3c41690486.g.selectAll("rect")
        .data(color_map_b7f9973159064893a83e9b3c41690486.color.range().map(function(d, i) {
        return {
            x0: i ? color_map_b7f9973159064893a83e9b3c41690486.x(color_map_b7f9973159064893a83e9b3c41690486.color.domain()[i - 1]) : color_map_b7f9973159064893a83e9b3c41690486.x.range()[0],
            x1: i < color_map_b7f9973159064893a83e9b3c41690486.color.domain().length ? color_map_b7f9973159064893a83e9b3c41690486.x(color_map_b7f9973159064893a83e9b3c41690486.color.domain()[i]) : color_map_b7f9973159064893a83e9b3c41690486.x.range()[1],
            z: d
        };
        }))
    .enter().append("rect")
        .attr("height", 10)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });
    
    color_map_b7f9973159064893a83e9b3c41690486.g.call(color_map_b7f9973159064893a83e9b3c41690486.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .attr("x",20)
        .text('Riesgo Climático de '+y+' en Viña del Mar y Valparaíso');
    return color_map_b7f9973159064893a83e9b3c41690486
}
        
function exportMap() {
    var exportOptions = {
      container: map_64b9894af4814ae08fe869ab362ce2b4._container,
      caption: {
        text: 'Карта',
        font: '30px Arial',
        fillStyle: 'black',
        position: [200, 200]
      },
      exclude: ['.leaflet-control-zoom', '.leaflet-control-attribution'],
      format: 'image/jpg'
    };
    var exportedlement = map_64b9894af4814ae08fe869ab362ce2b4.export(exportOptions).then(
      result = function (value) {
        var i = 1;
      }
    );
  }

function afterRender(result) {
return result;
}

function afterExport(result) {
return result;
}

function downloadMap(caption) {
    var downloadOptions = {
        container: map_64b9894af4814ae08fe869ab362ce2b4._container,
        caption: {
        text: caption,
        font: '30px Arial',
        fillStyle: 'black',
        position: [80, 80]
        },
        exclude: ['.leaflet-control-zoom', '.leaflet-control-attribution'],
        format: 'image/png',
        fileName: 'Map.png',
        afterRender: afterRender,
        afterExport: afterExport
    };
    var promise = map_64b9894af4814ae08fe869ab362ce2b4.downloadExport(downloadOptions);
    var data = promise.then(function (result) {
        return result;
    });
}

function printMap(caption) {
    var printOptions = {
        container: map_64b9894af4814ae08fe869ab362ce2b4._container,
        exclude: ['.leaflet-control-zoom'],
        format: 'image/png',
        afterRender: afterRender,
        afterExport: afterExport
    };
    printOptions.caption = {
        text: caption,
        font: '30px Arial',
        fillStyle: 'black',
        position: [50, 50]
    };
    var promise = map_64b9894af4814ae08fe869ab362ce2b4.printExport(printOptions);
    var data = promise.then(function (result) {
        return result;
    });
}

// $(function() { 
//     $("#downloadbuttom").click(function() { 
//         html2canvas($("#map_64b9894af4814ae08fe869ab362ce2b4"), {
//             onrendered: function(canvas) {
//                 theCanvas = canvas;


//                 canvas.toBlob(function(blob) {
//                     saveAs(blob, "Dashboard.png"); 
//                 });
//             }
//         });
//     });
// });