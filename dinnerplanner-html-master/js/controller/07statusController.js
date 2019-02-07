var StatusController = function(view, model, app) {
  var numberOfGuests = ($(app).find("#numberOfGuests").length > 0) ? $(app).find("#numberOfGuests") : console.log('#numberOfGuests doesn\'t exist');
  if(numberOfGuests)	numberOfGuests.html(model.getNumberOfGuests());
  //this.numberOfGuests = $(app).find("#numberOfGuests");
  //console.log(numberOfGuests);
  this.editbutton = $(app).find("#editbutton");
  this.editbutton.click(function() {
    app.toMenu();
  });
}
