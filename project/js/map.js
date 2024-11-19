function initMap() {
    var tartu = { lat: 47.4979, lng: 19.0402 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: tartu
    });

    var marker = new google.maps.Marker({
        position: { lat: 47.4979, lng: 19.0402 },
        map: map,
        title: 'Tartu'
    });

    var infowindow = new google.maps.InfoWindow({
        content: '<h2>Tartu</h2><p><a href="https://maps.app.goo.gl/6XKMBsnEaJeuXkAC7" target="_blank">View on Google Maps</a></p>'
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}