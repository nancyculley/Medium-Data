
    var myMap = L.map('map-id').setView([32, -96], 4);


    L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        id: 'mapbox.light',
        attribution:"Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
        accessToken: API_KEY
    }).addTo(myMap);

L.geoJson(statesData).addTo(myMap);


/* var target_count={};
d3.json('Target_Counts.json', function(data) { 
    target_count=data;
    new_data = target_count.map(td=>{var tmp={}; tmp[td.State]=td.Target; return tmp;})
    console.log(new_data);
}); */


/* var Station_count={};
$.getJSON('Station_Counts.json', function(data) { 
    //Station_Counts=data;
    console.log(data);
}); */

function getColor(d) {
    console.log(d);
    return d > 99  ? '#9D0F0F' :
           d > 74  ? '#FD8D3C' :
           d > 49   ? '#FEB24C' :
           d > 24   ? '#FED976' :
                      '#FFEDA0';
}

function style(color) {
    return {
        fillColor: getColor(color.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
L.geoJson(statesData, {style: style}).addTo(myMap);

// Function to highlight on mouse over
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

// Function to reset on mouseout
function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

// Function for zoom in on Click
function zoomToFeature(e) {
    myMap.fitBounds(e.target.getBounds());
}

// Function to call the Mouseover, Mouseout and Zoom in on Click
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(myMap);

var info = L.control();

info.onAdd = function (Map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>Country Radio Stations</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.density + ' Country Radio Stations'
        : 'Hover over a state');
};

info.addTo(myMap);

function highlightFeature(e) {
    var layer = e.target;
    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    var layer = e.target;
    info.update();
}

