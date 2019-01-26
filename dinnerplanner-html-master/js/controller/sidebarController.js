var SidebarController = function(container, model) {
  container.plusButton.click(function(){
     model.setNumberOfGuests(model.getNumberOfGuests() + 1);
  });

 container.minusButton.click(function(){
     model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 });
}
