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
    searchFor.then(response => response.json()).then(data => {
      if (typeof data === 'object') {
        var numbPersons = model.getNumberOfGuests();
        this.dishesDetails.html('');
        var ingredients = model.getAllIngredients(data.extendedIngredients);
        this.dishesDetails.append(`
              <article class="dishparent">
                <nav class="navbar">
                  <h2>${data.title}</h2>
                  <div id="buttonplacement">
                    <button id="backbutton" class="button">back to menu</button>
                </nav>
                <div class="dishImgcolumn">
                  <img src="${data.image}" alt="${data.title}">
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
                  <p id="preparationstext">${data.instructions}</p>
                  <hr>
                </div>
              </article>
          `);
        var ingredientsPrice = model.getDishPrice(ingredients);
        for (var b = 0; b < ingredients.length; b++) {
          dishDetailsView.find("#ingredient").append(`
                <li>
                  ${(ingredients[b].amount * numbPersons).toFixed(1)}
                  ${ingredients[b].unit}
                  ${ingredients[b].name} SEK
                  ${(1 * numbPersons).toFixed(1)}
                </li>
                `);
        }
        dishDetailsView.find("#total").html('SEK ' + (ingredientsPrice * numbPersons).toFixed(2));
      }
    }).catch(error => {
      console.log(error);
    })
  }
  this.provideDishDetails = provideDishDetails;
  this.update = function() {
    var numbPersons = model.getNumberOfGuests();
    provideDishDetails(ID);
  }
  model.addObservers(this.update);
}
