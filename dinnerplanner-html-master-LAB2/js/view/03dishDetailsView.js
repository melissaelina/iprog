var DishDetailsView = function(dishDetailsView, model, id) {
  dishDetailsView.append(`
    <div class="parent">
      <div class="side">
        <aside class="sidebarView">
        </aside>
      </div>
      <div class="main">
        <section id="dishDetails" class="flex-container">
      </div>
    </div>
    `);
  var ID;
  var provideDishDetails = (id) => {
    this.id = id;
    ID = id;
    this.dishesDetails = dishDetailsView.find("#dishDetails");
    var searchFor = model.getDish(id);
    if (typeof searchFor === 'object') {
      //this.nbPersons = dishDetailsView.find("#numberOfGuests");
      var numbPersons = model.getNumberOfGuests();    //test
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
                Ingredients for ${numbPersons}
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
      //var nbPersons = model.getNumberOfGuests();    //test
      //document.getElementById("numberOfGuests").innerHTML = nbPersons; //test
      var ingredientsPrice = 0;
      for (var b = 0; b < ingredients.length; b++) {
        ingredientsPrice += ingredients[b].price;
        dishDetailsView.find("#ingredient").append(`
            <li>
              ${(ingredients[b].quantity * numbPersons).toFixed(1)}
              ${ingredients[b].unit}
              ${ingredients[b].name} SEK
              ${(ingredients[b].price * numbPersons).toFixed(1)}
            </li>
            `);
      }
      dishDetailsView.find("#total").html('SEK ' + (ingredientsPrice * numbPersons).toFixed(2));
    }
  }
  this.provideDishDetails = provideDishDetails;
  this.update = function() {
    var numbPersons = model.getNumberOfGuests();
    //document.getElementById("numberOfGuests").innerHTML = nbPersons;
    provideDishDetails(ID);
  }
  model.addObservers(this.update);
}
