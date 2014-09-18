var flickrApi = 'https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=a59e46bc559caf69b42be8464990c102&format=json&tags=bike,bicycles,bikes,bicycle&json&per_page=3&jsoncallback=?';

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
  _.each(data.photos.photo, function(data) {
    renderTemplate('#templates-bicycle-pics', '.bicycle-pics', data);
  });
});
