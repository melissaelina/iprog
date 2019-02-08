var DinnerOverview = function(dinnerOverview, model) {
  var ourMenu = model.getFullMenu();
  var totalCost = model.getTotalMenuPrice();
  var nbPersons = model.getNumberOfGuests();

  dinnerOverview.append(`
    <div class="parent">
      <nav class="navbar">
        <h2>My dinner: ${nbPersons} guests</h2>
    		<div id="buttonplacement">
    			<button id="editbutton"class="button"<b>Go back and edit dinner</b></button>
    		</div>
      </nav>
      <div class="main">
        <article id="menuItemView" class="flex-container">
        </article>
        <div id="totalPrice">Total cost: ${totalCost} SEK
        </div>
      </div>
    </div>
    <button id="printbutton" class="button">Print full recipe</button>
    `);

    var currentMenu = function() {
      this.ourMenuBox = dinnerOverview.find('#menuItemView');
      ourMenu.forEach(function(dish) {
        var ingredientsPrice = 0;
        for (var i = 0; i < dish.ingredients.length; i++) {
          ingredientsPrice += dish.ingredients[i].price;
        }
        this.ourMenuBox.append(`
          <div class="column">
            <div>
              <img id="${dish.id}" class="pickupDishes" src="images/${dish.image}" alt="Lasagne" style="width:80%">
              <p style="padding-right: 4em">${dish.name}</p>
            </div>
            <p style="padding-right: 4em">${(ingredientsPrice * nbPersons).toFixed(2)} SEK</p>
          </div>
          `);
        });
      }

    currentMenu();

    this.update = function(model) {
      var ourMenu = model.getFullMenu();
      var totalCost = model.getTotalMenuPrice();
      var nbPersons = model.getNumberOfGuests();
      currentMenu();
    }
    model.addObservers(this.update);
  }
