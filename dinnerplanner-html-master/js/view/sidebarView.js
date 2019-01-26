var SidebarView = function (container, model) {

	var numberOfGuests = (container.find("#numberOfGuests").length > 0) ? container.find("#numberOfGuests") : console.log('ID #numberOfGuests empty');

	// Find corresponding container in HTML
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
  //this.searchBox = container.find("#searchbarDishes");
	this.confirmButton = container.find("#confirmButton");
	this.showDishInfo = container.find("#showDishInfo");

	if(numberOfGuests)	numberOfGuests.html(0);

// MOVE THIS TO CONTROLLER
  this.minusButton.click((e) => {
    var result = model.setNumberOfGuests(numberOfGuests.html(),"minus");
    numberOfGuests.html(result);
  });
  this.plusButton.click((e) => {
    var result = model.setNumberOfGuests(numberOfGuests.html(),"plus");
    numberOfGuests.html(result);
  });

	// testing get numbeer of guests function in dinnermodel
	var totalguests = (container.find("getNumberOfGuests").length)
	console.log(totalguests);

	var dishprice = container.find("#price");
	dishprice.html(model.getTotalMenuPrice());


  /*this.searchBox.keyup(() => {
    var keyword = this.searchBox.val();
    if(keyword.length > 1){
      console.log(model.getAllDishes('starter', keyword));
    }
  });*/
}


// TESTING START
/*
var SidebarView = function(container, model) {
this.numberOfGuests = container.find("#numberOfGuests");
this.plusButton = container.find("#plusGuest");
this.minusButton = container.find("#minusGuest");
}
 */
// TESTING STOP
