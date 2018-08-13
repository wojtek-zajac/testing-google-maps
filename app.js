let map;

function initMap() {
    // Contructor creates a new map - only center and zoom are required.
    // First specify where on the HTML to load the map (first parameter):
    map = new google.maps.Map(document.getElementById('map'), {
    // Second parameter - what part of the world to show:
        center: {lat: 40.7413549, lng: -73.9980244},
        // The highr the number, the more details. You can go up to 22.
        zoom: 13
    });
}