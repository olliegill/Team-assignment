// var flickrApi = 'https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=a59e46bc559caf69b42be8464990c102&format=json&tags=bike,bicycles,bikes,bicycle';

var flickrApi = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=bike,bicycles,bikes,bicycle';

function renderTemplate(templateID, location, dataModel) {
  var templateString = $(templateID).text();
  var templateFunction = _.template(templateString);
  var renderedTemplate = templateFunction(dataModel);
  $(location).append(renderedTemplate);
}

var bikeArray = [];


//attempting to get the data with a basic ajax request
// $.ajax({
//   type: 'get',
//   url: flickrApi
// }).done(function(data) {
//   console.log(data);
//   _.each(data.items, function(data) {
//     bikeArray.push({'bikePic': ""+ data.media.m});
//   });
//   _.times(3, function(n) {
//     console.log(bikeArray[n]);
//     renderTemplate('#templates-bicycle-pics', '.bicycle-pics', bikeArray[n]);
//   });
// });


//attempting to get the data with a $.getJSON format
$.getJSON(flickrApi, function(data) {
  console.log(data);
  _.each(data.items, function(data) {
    var imgURL = data.media.m.slice(0, data.media.m.length -5) + "z.jpg";
    console.log(imgURL);
    bikeArray.push({'bikePic': imgURL});
  });
  _.times(3, function(n) {
    console.log(bikeArray[n]);
    renderTemplate('#templates-bicycle-pics', '.bicycle-pics', bikeArray[n]);
  });
});
