var SidebarView = function(body, model) {
  this.sidebarBox = body.find(".sidebarView");
  this.containers = body.find("article.container");
  this.sidebarBox.append(`
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
  body.find("article.container").find("#numberOfGuests").html(nbPersons);

  var displaySidebar = function() {
    let numberPersons = model.getNumberOfGuests();
    var ourMenu = model.getFullMenu();
    var totalPrice = model.getTotalMenuPrice(ourMenu);
    this.dishNameBox = body.find("article.container").find('#name');
    this.dishPriceBox = body.find("article.container").find('#cost');
    this.totalPriceBox = body.find("article.container").find('#totalPrice');
    this.dishNameBox.html('');
    this.dishPriceBox.html('');
    ourMenu.forEach(function(ourDish) {
      var ingredients = model.getAllIngredients(ourDish.extendedIngredients);
      var ingredientsPrice = model.getDishPrice(ingredients);
      //var totalPrice = model.getTotalMenuPrice(ingredientsPrice);
      var ourDishName = ourDish.title;
      this.totalPriceBox.html('');
      this.dishNameBox.append(`
        <div>${ourDishName}</div>
        `);
      this.dishPriceBox.append(`
        <div>${ingredientsPrice * numberPersons} SEK</div>
        `);
      this.totalPriceBox.append(`
        <div>${totalPrice} SEK</div>
        `);
    });
  }
  displaySidebar();

  this.update = function() {
    var nbPersons = model.getNumberOfGuests();
    body.find("article.container").find("#numberOfGuests").html(nbPersons);
    displaySidebar();
  }
  model.addObservers(this.update);
}
