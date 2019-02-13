var SearchDishController = function(view, model, app) {
  this.searchBox = $(app).find("#searchbarDishes");
  this.dishesBoxList = $(app).find("#dishItemView");
  this.dishesBoxType = $(app).find("#typeDishes option");
  this.searchButton = $(app).find("#searchButton");
  this.pickupDish = $(app).find(".pickupDishes");
  this.searchButton.click(() => { // add listener on pressing enter
    var keyword = this.searchBox.val().toLowerCase(); // lowercase to match dishes names
    var type = false;
    for (var i = 0; i < this.dishesBoxType.length; i++) {
      if (this.dishesBoxType[i].selected === true) type = this.dishesBoxType[i].value;
    }
    if (type !== false) {
      this.dishesBoxList.html('');

/* ____________________ LAB 2 ____________________ */

      /*var searchFor = model.getAllDishes(type, keyword);
      if (typeof searchFor === 'object' && searchFor.length > 0) {
        for (var i = 0; i < searchFor.length; i++) {
          var price = 0;
          for (var a = 0; a < searchFor[i].ingredients.length; a++) {
            price += searchFor[i].ingredients[a].price;
          }
          this.dishesBoxList.append(`
                <div class="column">
                  <div>
                    <im1>
                      <img id="${searchFor[i].id}" class="pickupDishes" src="images/${searchFor[i].image}" alt="Ice Cream" style="width:80%">
                    </im1>
                    <p style="padding-right: 4em">${searchFor[i].name}</p>
                  </div>
                  <p style="padding-right: 4em">${price.toFixed(2)} SEK</p>
                </div>
                `);
        }
      }*/

/* ____________________ LAB 3 API ____________________ */

      var searchFor = model.getAllDishes(type, keyword);
      searchFor.then(response => response.json()).then(data => {
          if (typeof data.results === 'object' && data.results.length > 0) {
            //this.dishesBoxList.html('');
            for (var i = 0; i < data.results.length; i++) {
              //console.log(data.results[i]);
              //var price = 0;
              //for (var a = 0; a < data.results[i].ingredients.length; a++) {
              //  price += data.results[i].ingredients[a].price;
              //}
              this.dishesBoxList.append(`
                    <div class="column">
                      <div>
                        <im1>
                          <img id="${data.results[i].id}" class="pickupDishes" src="${data.baseUri}${data.results[i].image}" alt="Ice Cream" style="width:80%">
                        </im1>
                        <p style="padding-right: 4em">${data.results[i].name}</p>
                      </div>
                      <p style="padding-right: 4em">0 SEK</p>
                    </div>
                    `);
            }
          }
      }).catch( error => {
          console.log("ERROR");
      })

/* ____________________ END ____________________ */


    }
  });
  /*this.dishesBoxList.click(function() {
    app.showDishDetailsScreen();
  });*/
/* TESTING */
  this.dishesBoxList.click((e) => {
      if (e.target.nodeName === "IMG") {    // e, short for event
        var dish = model.getDish(e.target.id);
        //console.log(dish.id); // notify model on current dish
        app.provideDishInfo(dish.id);
        //console.log(dish);
        //this.welcome.find(".show").hide();
        //this.dishesBoxList.find(".column").hide(!dish.id);
        //this.dishesBoxList.find(".column").remove();
      }
    });
}
