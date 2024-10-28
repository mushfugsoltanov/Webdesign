// Function to initialize Google Map
function initMap() {
    // Tartu coordinates
    var tartu = { lat: 47.4979, lng: 19.0402 };

    // Create a map centered in Tartu
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: tartu
    });

    // Add marker for the specified location
    var marker = new google.maps.Marker({
        position: { lat: 47.4979, lng: 19.0402 },
        map: map,
        title: 'Tartu'
    });

    // Add info window to the marker with a link to the specified location
    var infowindow = new google.maps.InfoWindow({
        content: '<h2>Tartu</h2><p><a href="https://maps.app.goo.gl/6XKMBsnEaJeuXkAC7" target="_blank">View on Google Maps</a></p>'
    });

    // Show info window when marker is clicked
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}