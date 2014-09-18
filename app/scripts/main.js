var flickrApi = 'https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=a59e46bc559caf69b42be8464990c102&format=json&tags=bicycles,bicycle&per_page=3&extras=last_update&jsoncallback=?';

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
