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
          <div class="parent">
  					<div class="sideleft">
              <p id="underlined">Dish name</p><span id="name"></span>
  					</div>
  					<div class="sideright">
              <p id="underlined">Cost</p><span id="cost"></span>
  					</div>
          </div>
          <div>
					  <hr>
          </div>
          <div class="parent">
            <div class="sideleft">
					       <p class="bold">Total cost</p>
            </div>
            <div class="sideright">
              <p class="bold"><span id="totalPrice"></span></p>
            </div>
          </div>
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
    this.dishPriceBox.html('');
    ourMenu.forEach(function(ourDish) {
      var ingredientsPrice = 0;
      var ourDishName = ourDish.name;
      this.totalPriceBox.html('');
      this.dishNameBox.append(`
        <div>${ourDishName}</div>
        `);
      for (var i = 0; i < ourDish.ingredients.length; i++) {
        ingredientsPrice += ourDish.ingredients[i].price;
			}
			ingredientsPrice = ingredientsPrice * nbPersons;
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
