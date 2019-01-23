var SidebarView = function (container, model) {

	var numberOfGuests = (container.find("#numberOfGuests").length > 0) ? container.find("#numberOfGuests") : console.log('ID #numberOfGuests empty');


	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
  this.searchBox = container.find("#searchbarDishes");


	if(numberOfGuests)	numberOfGuests.html(0);

  this.minusButton.click((e) => {
    var result = model.setNumberOfGuests(numberOfGuests.html(),"minus");
    numberOfGuests.html(result);
  });
  this.plusButton.click((e) => {
    var result = model.setNumberOfGuests(numberOfGuests.html(),"plus");
    numberOfGuests.html(result);
  });
  this.searchBox.keyup(() => {
    var keyword = this.searchBox.val();
    if(keyword.length > 1){
      console.log(model.getAllDishes('starter', keyword));
    }
  });


}
