var DishDetailsView = function(dishDetailsView, model, id) {
  dishDetailsView.append(`
    <div class="parent">
      <div class="side">
        <aside id="sidebarView-2">
        </aside>
      </div>
      <div class="main">
        <section id="dishDetails" class="flex-container">
      </div>
    </div>
    `);
  var nbPersons = model.getNumberOfGuests();
  var ID;
  var provideDishDetails = (id) => {
    this.id = id;
    ID = id;
    this.dishesDetails = dishDetailsView.find("#dishDetails");
    var searchFor = model.getDish(id);
    if (typeof searchFor === 'object') {
      this.dishesDetails.html('');
      var ingredients = model.getAllIngredients(searchFor.ingredients);
      this.dishesDetails.append(`
          <article class="dishparent">
            <div class="dishImgcolumn">
              <h2>${searchFor.name}</h2>
              <img src="images/${searchFor.image}" alt="${searchFor.name}">
              <button id="backbutton" class="button">back to menu</button>
            </div>
            <div class="dishPrepcolumn">
              <article id="ingredientsliststyling">
                <hr>
                Ingredients for ${nbPersons}
                <ul id="ingredient"></ul>
                <div id="total"></div>
                <br><br>
                <hr>
                <button id="addtomenu" class="button">Add to menu</button>
              </article>
            </div>
            <div>
              <h2>Preparations</h2>
              <p id="preparationstext">${searchFor.description}</p>
              <hr>
            </div>
          </article>
      `);
      var ingredientsPrice = 0;
      for (var b = 0; b < ingredients.length; b++) {
        ingredientsPrice += ingredients[b].price;
        dishDetailsView.find("#ingredient").append(`
            <li>
              ${(ingredients[b].quantity * nbPersons).toFixed(2)}
              ${ingredients[b].unit}
              ${ingredients[b].name} SEK
              ${(ingredients[b].price * nbPersons).toFixed(2)}
            </li>
            `);
      }
      dishDetailsView.find("#total").html('SEK ' + (ingredientsPrice * nbPersons).toFixed(2));
    }
  }
  this.provideDishDetails = provideDishDetails;
  this.update = function() {
    //nbPersons = model.getNumberOfGuests();
    provideDishDetails(ID);
  }
  model.addObservers(this.update);
}
