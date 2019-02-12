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
      var searchFor = model.getAllDishes(type, keyword);      //add promise
      //console.log(searchFor);
      //console.log(keyword);
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
      }
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
