var DinnerOverview = function(dinnerOverview, model) {
  dinnerOverview.append(`
    <div class="parent">
      <nav class="navbar" id="dinnerStatusView">
      </nav>
      <div class="main">
        <article id="dishItemView" class="flex-container">
        </article>
        <div id="total">
        </div>
      </div>
    </div>
    <button id="printbutton" class="button">Print full recipe</button>
    `);
}

/*
var DinnerOverview = function(container, model) {
  container.append(`
    <div class="parent">
      <nav class="navbar" id="dinnerStatusView">
      </nav>
      <div class="main">
        <article id="dishItemView" class="flex-container">
        </article>
        <div id="total">
        </div>
      </div>
    </div>
    <button id="printbutton" class="button">Print full recipe</button>
    `);

  var currentDish = function() {
    this.dishesBoxList = container.find("#dishItemView");
    this.dishesTotal = container.find("#total");
    var nbPersons = model.getNumberOfGuests(); // accessing the getNumberOfGuests method from owner DinnerModel
    var searchFor = model.getAllDishes('all');
    if (typeof searchFor === 'object' && searchFor.length > 0) {
      this.dishesBoxList.html('');
      for (var i = 0; i < searchFor.length; i++) {
        var price = 0;
        for (var a = 0; a < searchFor[i].ingredients.length; a++) {
          price += searchFor[i].ingredients[a].price;
        }
        var finalPrice = price * nbPersons;
        this.dishesBoxList.append(`
        <div class="column">
          <img id="${searchFor[i].id}" class="pickupDishes" src="images/${searchFor[i].image}">
          <p>${finalPrice.toFixed(2)} SEK</p>
        </div>
      `);
      }
    }
    this.dishesTotal.html(model.getTotalMenuPrice().toFixed(2) + ' SEK');
  }

  currentDish();
  this.update = function(model) {
    allDishes = model.getFullMenu();
    finalPrice = model.getTotalMenuPrice();
    dishCost = 0;
    nbPersons = model.getNumberOfGuests();
    currentDish();
  }
  model.addObservers(this.update);
}
*/
