var SidebarController = function(view, model, app) {
//test
  //var numberOfGuests = ($(app).find("#numberOfGuests").length > 0) ? $(app).find("#numberOfGuests") : console.log('#numberOfGuests doesn\'t exist');
  //if (numberOfGuests) numberOfGuests.html(model.getNumberOfGuests());
  //this.nbPersons = $(app).find("#numberOfGuests");  //test
  this.plusButton = $(app).find("#plusGuest");
  this.minusButton = $(app).find("#minusGuest");
  this.confirmButton = $(app).find("#confirmButton");
  //console.log(this.plusButton);
  this.confirmButton.click(function() {
    app.dinnerConfirmed();
  });
  /*this.minusButton.click((e) => {
    var result = model.setNumberOfGuests(numberOfGuests.html(), "minus");
    numberOfGuests.html(result);
    //model.setNumberOfGuests(numberOfGuests.html(result));
    model.setNumberOfGuests(result);
  });
  this.plusButton.click((e) => {
    var result = model.setNumberOfGuests(numberOfGuests.html(), "plus");
    numberOfGuests.html(result);
    //model.setNumberOfGuests(numberOfGuests.html(result));
    model.setNumberOfGuests(result);
  });*/
  this.plusButton.click(function(){
    model.setNumberOfGuests(model.getNumberOfGuests()+1);
  });
  this.minusButton.click(function(){
    model.setNumberOfGuests(model.getNumberOfGuests()-1);
  });
}
