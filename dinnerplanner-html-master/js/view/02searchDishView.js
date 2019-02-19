var SearchDishView = function(searchDishView, model) {
  searchDishView.append(`
    <div class="parent">
      <div class="side">
        <aside class="sidebarView">
        </aside>
      </div>
      <div class="main">
        <article id="dishSearchView">
        <div>
          <h2>Find a dish</h2>
          <input id="searchbarDishes" placeholder="Enter key words">
          <select id="typeDishes">
            <option value="all">all</option>
            <option value="starter">starter</option>
            <option value="main dish">main dish</option>
            <option value="dessert">dessert</option>
          </select>
          <button id="searchButton" class="button">search</button>
        </div>
        <hr>
        <div id="dishItemView" class="flex-container">
        </div>
        </article>
        </div>
        </div>
    </div>
    `);

  this.dishesBoxList = searchDishView.find('#dishItemView');
  var searchForPromise = model.getAllDishes();
  searchForPromise.then(response => response.json()).then(data => {
      if (typeof data.results === 'object' && data.results.length > 0) {
        this.dishesBoxList.html('');
        for (var i = 0; i < data.results.length; i++) {
          this.dishesBoxList.append(`
                <div class="column">
                  <div>
                    <img id="${data.results[i].id}" class="pickupDishes" src="${data.baseUri}${data.results[i].image}" alt="${data.results[i].title}" style="width:80%">
                    <p style="padding-right: 4em">${data.results[i].title}</p>
                  </div>
                  <p style="padding-right: 4em"><span id="ingredientsPrice"></span></p>
                </div>
                `);
          /*this.ingredientsPriceBox = searchDishView.find('#ingredientsPrice');  // might not work...
          var dishId = data.results[i].id;
          var dishInfo = getDish(dishId);
          console.log(dishInfo);
          var ingredients = model.getAllIngredients(data.extendedIngredients);
          var ingredientsPrice = model.getDishPrice(ingredients);*/
          }
        }
  }).catch( error => {
      console.log("ERROR");
  })

  this.update = function(model) {}
  model.addObservers(this.update);
}
