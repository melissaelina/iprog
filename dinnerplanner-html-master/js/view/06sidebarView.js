var SidebarView = function(sidebarView, model) {
  sidebarView.append(`
					<h2>My dinner</h2>
					<label>People: <span id="numberOfGuests"></span>
					</label>
					<div>
						<button id="minusGuest" class="btn">-</button>
						<button id="plusGuest" class="btn">+</button>
					</div>
					<p>Dish name: <span id="name"></span>
					</p>
					<p>Cost: <span id="cost"></span>
					</p>
					<hr>
					<p>Total cost: <span id="totcost"></span>
					</p>
					<button id="confirmButton" class="button">Confirm Dinner</button>
	`);
  var nbPersons = model.getNumberOfGuests();
  var totalPrice = model.getTotalMenuPrice();
  totalPrice = model.getTotalMenuPrice();

  var displaySidebar = function() {
    var ourMenu = model.getFullMenu();
    ourMenu.forEach(function(ourDish) {
      var ourDishName = ourDish.name;
      this.dishNameBox = sidebarView.find('#name');
      this.dishNameBox.append(`
        <div>${ourDishName}</div>
        `);
			this.dishPriceBox = sidebarView.find('#cost');
      var ingredientsPrice = 0;
      for (var i = 0; i < ourDish.ingredients.length; i++) {
        ingredientsPrice += ourDish.ingredients[i].price;
			}
			ingredientsPrice = (ingredientsPrice * nbPersons).toFixed(2);
			this.dishPriceBox.append(`
        <div>${ingredientsPrice} SEK</div>
        `);
      this.totalPriceBox = sidebarView.find('#totcost');
      this.totalPriceBox.append(`
        <div>${totalPrice}</div>`)
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
