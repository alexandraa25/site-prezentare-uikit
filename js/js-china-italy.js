// Initialize the map
    function initMap() {
        var nyc = { lat: 40.7128, lng: -74.0060 };
        var map = new google.maps.Map(document.getElementById('footer-map'), {
            zoom: 10,
            center: nyc
        });
        var marker = new google.maps.Marker({
            position: nyc,
            map: map
        });
    }

    // Ensure the map initializes when the script is loaded
    document.addEventListener('DOMContentLoaded', function() {
        if (typeof google !== 'undefined') {
            initMap();
        }
    });
	

