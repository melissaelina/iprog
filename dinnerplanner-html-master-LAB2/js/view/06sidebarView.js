var SidebarView = function(sidebarView, model) {
  this.nbPersons = sidebarView.find("#numberOfGuests");   //test
  this.plusButton = sidebarView.find("#plusGuest");   //test
  this.minusButton = sidebarView.find("#minusGuest");   //test

  sidebarView.append(`
					<h2>My dinner</h2>
					<div id="label">Guests: <span id="numberOfGuests"></span>
					</div>
					<div>
						<button id="minusGuest" class="btn">-</button>
						<button id="plusGuest" class="btn">+</button>
					</div>
					<p>Dish name: <span id="name"></span>
					</p>
					<p>Cost: <span id="cost"></span>
					</p>
					<hr>
					<p id="totalCost">Total cost: <span id="totalPrice"></span>
					</p>
					<button id="confirmButton" class="button">Confirm Dinner</button>
	`);
  var nbPersons = model.getNumberOfGuests();
  document.getElementById("numberOfGuests").innerHTML = nbPersons;

  var displaySidebar = function() {
    var nbPersons = model.getNumberOfGuests();
    var totalPrice = model.getTotalMenuPrice();
    var ourMenu = model.getFullMenu();
    this.dishNameBox = sidebarView.find('#name');
    this.dishPriceBox = sidebarView.find('#cost');
    this.totalPriceBox = sidebarView.find('#totalPrice');
    this.dishNameBox.html('');
    ourMenu.forEach(function(ourDish) {
      var ingredientsPrice = 0;
      var ourDishName = ourDish.name;
      this.dishPriceBox.html('');
      this.totalPriceBox.html('');
      this.dishNameBox.append(`
        <div>${ourDishName}</div>
        `);
      for (var i = 0; i < ourDish.ingredients.length; i++) {
        ingredientsPrice += ourDish.ingredients[i].price;
			}
			ingredientsPrice = (ingredientsPrice * nbPersons).toFixed(2);
			this.dishPriceBox.append(`
        <div>${ingredientsPrice} SEK</div>
        `);
      this.totalPriceBox.append(`
        <div>${totalPrice} SEK</div>`)

    });
  }
  displaySidebar();

  this.update = function() {
    var nbPersons = model.getNumberOfGuests();
    document.getElementById("numberOfGuests").innerHTML = nbPersons;
    displaySidebar();
  }
  model.addObservers(this.update);
}
