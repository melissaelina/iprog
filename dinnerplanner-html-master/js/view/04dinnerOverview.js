var DinnerOverview = function(dinnerOverview, model) {
  this.nbGuests = dinnerOverview.find("#nbGuests");   //test
  this.totCost = dinnerOverview.find("#totCost");
  var ourMenu = model.getFullMenu();

  dinnerOverview.append(`
    <div class="parent">
      <nav class="navbar">
        <h2>My dinner: <span id="nbGuests"></span> guests</h2>
    		<div id="buttonplacement">
    			<button id="editbutton"class="button"<b>Go back and edit dinner</b></button>
    		</div>
      </nav>
      <div class="main">
        <article id="menuItemView" class="flexx-container">
        </article>
        <hr>
        <div id="totalMenuCost">
          Total cost: <span id="totCost"></span> SEK
        </div>
      </div>
    </div>
    <button id="printbutton" class="button">Print full recipe</button>
    `);
    var currentMenu = function() {
      this.ourDishes = dinnerOverview.find('#menuItemView');
      this.ourDishes.html('');
      ourMenu.forEach(function(dish) {
        var ingredientsPrice = 0;
        for (var i = 0; i < dish.ingredients.length; i++) {
          ingredientsPrice += dish.ingredients[i].price;
        }
        var nbGuests = model.getNumberOfGuests(); //test
        document.getElementById("nbGuests").innerHTML = nbPersons;
        var totCost = model.getTotalMenuPrice();
        document.getElementById("totCost").innerHTML = totCost;
        this.ourDishes.append(`
          <div class="column">
            <img id="${dish.id}" class="pickupDishes" src="images/${dish.image}" alt="Lasagne">
            <p>${dish.name}</p>
            <p>${(ingredientsPrice * nbGuests).toFixed(2)} SEK</p>
          </div>
          `);
        });
      }
    currentMenu();

    this.update = function(model) {
      var ourMenu = model.getFullMenu();
      var totalCost = model.getTotalMenuPrice();
      var nbGuests = model.getNumberOfGuests(); //test
      document.getElementById("nbGuests").innerHTML = nbGuests; //test
      currentMenu();
    }
    model.addObservers(this.update);
  }
