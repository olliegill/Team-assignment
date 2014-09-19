/* ==========================================================================
Google Maps API code below:   
========================================================================== */
//Sets Google Maps options & initializes Google Maps
function initialize() {
        var mapOptions = {
          center: { lat: 34.840137, lng: -82.39894199999999},
          zoom: 16
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        var marker = new google.maps.Marker({
          position: { lat: 34.840143, lng: -82.398298},
          map: map,
          title: 'Swamp Creek Bikes Mo-fo! Ride or Die!!!'
        });
      }

google.maps.event.addDomListener(window, 'load', initialize);

//Google Maps Geo Location Data
var address = "The Iron Yard 411 University Ridge Greenville, SC 29601";
var geo_url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address;

var geo = $.ajax({
  type: 'GET',
  url: geo_url,
  success: function(results){
    var lat = results.results[0].geometry.location.lat
    var lng = results.results[0].geometry.location.lng
    
    console.log(lat, lng);
  }
})




/* ==========================================================================
Flicker API code below: 
========================================================================== */

var flickrApi = 'https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=a59e46bc559caf69b42be8464990c102&format=json&tags=bicycles,bicycle&per_page=3&extras=last_update&jsoncallback=?';




/* ==========================================================================
Underscore Render Template code below:   
========================================================================== */

function renderTemplate(templateID, location, dataModel) {
  var templateString = $(templateID).text();
  var templateFunction = _.template(templateString);
  var renderedTemplate = templateFunction(dataModel);
  $(location).append(renderedTemplate);
}

//attempting to get the data with a basic ajax request (doesn't work, but throws no errors??)
$.ajax({
  type: 'GET',
  url: flickrApi,
  dataType: 'json'
}).done(function(data) {
  var sortedData = _.sortBy(data.photos.photo, function(photo){
    return photo.lastupdated;
  });
  _.each(sortedData, function(photo) {
    renderTemplate('#templates-bicycle-pics', '.bicycle-pics', photo);
  });
});

