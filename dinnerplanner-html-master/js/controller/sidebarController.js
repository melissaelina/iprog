var SidebarController = function(container, model) {

  var numberOfGuests = (container.find("#numberOfGuests").length > 0) ? container.find("#numberOfGuests") : console.log('#numberOfGuests doesn\'t exist');
	if(numberOfGuests)	numberOfGuests.html(model.getNumberOfGuests());

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.confirmButton = container.find("#confirmButton");

  this.minusButton.click((e) => {
    var result = model.setNumberOfGuests(numberOfGuests.html(),"minus");
    numberOfGuests.html(result);
  });
  this.plusButton.click((e) => {
    var result = model.setNumberOfGuests(numberOfGuests.html(),"plus");
    numberOfGuests.html(result);
  });


  /* FROM confirmController */
  var x = document.getElementById("searchDishView");
  if (x.style.display === "none") {
  x.style.display = "block";
  } else {
  x.style.display = "none";
  }
  //console.log("bklnöklfch");
  OverviewController();



}
