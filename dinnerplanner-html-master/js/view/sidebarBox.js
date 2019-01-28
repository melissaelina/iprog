var SidebarBox = function (container, model) {
	//NEWL ADDED
	container.append('<h2>My dinner</h2>'+
	'<label>People: <span id="numberOfGuests"></span></label>'+
	'<div>'+
	'<!-- bootstrap script -->'+
	'<!--<button id="minusGuest" class="btn"><span class="glyphicon glyphicon-minus"></span></button>'+
	'<button id="plusGuest" class="btn"><span class="glyphicon glyphicon-plus"></span></button> -->'+
	'<!-- css script -->'+
	'<button id="minusGuest" class="btn">-</button>'+
	'<button id="plusGuest" class="btn">+</button>'+
	'</div>'+
	'<p>Dish name: <span id=""></span></p>'+
	'<p>Cost: <span id="cost">'+model.getTotalMenuPrice().toFixed(2)+' SEK</span></p>'+
	'<button class="button">Confirm Dinner</button>');

	/*// Find corresponding container in HTML
	this.showDishInfo = container.find("#showDishInfo");
	// MOVE THIS TO CONTROLLER
	// testing get numbeer of guests function in dinnermodel
	var totalguests = (container.find("getNumberOfGuests").length)
	console.log(totalguests);

	var dishprice = container.find("#price");
	dishprice.html(model.getTotalMenuPrice());*/
}
