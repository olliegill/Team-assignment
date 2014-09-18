//Google Maps Properties
function initialize() {
        var mapOptions = {
          center: { lat: 37.327571, lng: -79.5130719},
          zoom: 18
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);

//Google Maps Geo Location Data
var address = "956+Lyle+St+Bedford+Va+24523";
var geo_url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address;

$.ajax({
  type: 'GET',
  url: geo_url,
  success: function(results){
    var lat = results.results[0].geometry.location.lat
    var lng = results.results[0].geometry.location.lng
    console.log(lat, lng);
  }
})