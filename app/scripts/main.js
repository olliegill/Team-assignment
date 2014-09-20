/* ==========================================================================
Google Maps API code below:
========================================================================== */
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

var geo = $.ajax({
  type: 'GET',
  url: geo_url,
  success: function(results){
    var lat = results.results[0].geometry.location.lat;
    var lng = results.results[0].geometry.location.lng;
  }
});




/* ==========================================================================
Flicker API code below:
========================================================================== */



var flickrApi = 'https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=a59e46bc559caf69b42be8464990c102&format=json&tags=bicycles,bicycle&per_page=3&extras=last_update&jsoncallback=?';

function renderTemplate(templateID, location, dataModel) {
  var templateString = $(templateID).text();
  var templateFunction = _.template(templateString);
  var renderedTemplate = templateFunction(dataModel);
  $(location).append(renderedTemplate);
}

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
  $('.bike-pic').hammer({}).bind('swipe', function(e){
    alert(this);});
});
