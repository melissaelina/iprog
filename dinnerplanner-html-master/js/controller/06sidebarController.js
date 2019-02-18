var SidebarController = function(view, model, app) {
  this.plusButton = $(app).find(".sidebarView").find("#plusGuest");
  this.minusButton = $(app).find(".sidebarView").find("#minusGuest");
  this.confirmButton = $(app).find(".sidebarView").find("#confirmButton");
  this.confirmButton.click(function() {
    app.dinnerConfirmed();
  });
  this.plusButton.click(function(){
    model.setNumberOfGuests(model.getNumberOfGuests()+1);
  });
  this.minusButton.click(function(){
    model.setNumberOfGuests(model.getNumberOfGuests()-1);
  });
}
