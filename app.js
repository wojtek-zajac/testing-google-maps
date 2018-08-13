let map;

function initMap() {
    // Contructor creates a new map - only center and zoom are required.
    // First specify where on the HTML to load the map (first parameter):
    map = new google.maps.Map(document.getElementById('map'), {
    // Second parameter - what part of the world to show:
        center: {lat: 40.7413549, lng: -73.9980244}, // New York
        // center: {lat: 50.083086, lng: 20.015407}, // Nowa Huta District, Poland
        // The highr the number, the more details. You can go up to 22.
        zoom: 13
    });
    let tribeca = {lat: 40.719526, lng: -74.0089934};
    let marker = new google.maps.Marker({
        position: tribeca,
        map: map,
        title: 'My first Marker!',
        draggable: true,
        // animation: google.maps.Animation.BOUNCE
    });
    let infowindow = new google.maps.InfoWindow({
        content: 'Do you ever feel like an InfoWindow, floating through the wind, ready to start again?'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}