var DinnerStatusView = function(container, model) {

  var numberOfGuests = (container.find("#numberOfGuests").length > 0) ? container.find("#numberOfGuests") : console.log('ID #numberOfGuests empty');

  numberOfGuests.html(0);
}
