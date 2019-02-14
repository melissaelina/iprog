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
      if (typeof data.results === 'object') {
        var numbPersons = model.getNumberOfGuests();    //test
        this.dishesDetails.html('');
        var ingredients = model.getAllIngredients(data.results.ingredients);
        this.dishesDetails.append(`
            <article class="dishparent">
              <div class="dishImgcolumn">
                <h2>${data.results.title}</h2>
                <img src="${data.baseUri}${data.results.image}" alt="${data.results.title}">
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
                <p id="preparationstext">${data.results.summary}</p>
                <hr>
              </div>
            </article>
        `);
        //var numbPersons = model.getNumberOfGuests();    //test
        //document.getElementById("numberOfGuests").innerHTML = numbPersons; //test
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
  }).catch( error => {
      console.log("ERROR");
  })
  }
  this.provideDishDetails = provideDishDetails;
  this.update = function() {
    var numbPersons = model.getNumberOfGuests();
    //document.getElementById("numberOfGuests").innerHTML = nbPersons;
    provideDishDetails(ID);
  }
  model.addObservers(this.update);
}
