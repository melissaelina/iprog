// DinnerModel Object constructor
var DinnerModel = function() {

  /* variables decleared and values assigned */
  var guests = 1;
  var menu = [];
  var observers = [];

  this.addObservers = function(observer) {
    observers.push(observer);
    //console.log(observer);
  }

  this.notifyObservers = function() {
    for (var i = 0; i < observers.length; i++) {
      observers[i](this);
    }
  }

  //this.removeObserver = fumction(observer) {}

  this.setNumberOfGuests = function(value, type) { // first DinnerModel object method
    var a = false; // where "this" refers to the owner of the method
    if (value && type) { // DinnerModel owns the setNumberOfGuests method
      if (type === "plus") {
        a = parseInt(value) + 1; // parseInt returns variable as integer
      } else {
        a = (value >= 1) ? parseInt(value) - 1 : 0;
      }
    }
    return a;
    this.notifyObservers("changeInNbGuests");
  }
  /*this.setNumberOfGuests = function(num) {
    if (num > 0) {
			nbGuests = num;
    }
    this.notifyObservers();
	}*/

  this.getNumberOfGuests = function(value) {
    var resultGuests = (value) ? value : guests;
    return resultGuests;
  }

  //Returns the dish that is on the menu for selected type
  this.getSelectedDish = function(type) {}

  //Returns all the dishes on the menu.
  this.getFullMenu = function() {
    return menu;
    //console.log(menu);
  }

  //Returns all ingredients for all the dishes on the menu.
  this.getAllIngredients = function(obj) {
    var ingredients = false;
    if (typeof obj === 'object') {
      ingredients = [];
      for (var a = 0; a < obj.length; a++) {
        ingredients.push(obj[a]);
      }
    }
    return ingredients;
  }

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  this.getTotalMenuPrice = function() {
    var totalprice = 0;
    menu.forEach(function(dishInMenu) {
      dishInMenu.ingredients.forEach(function(ingredient) {
        totalprice += ingredient.price;
      });
    });
    return totalprice * this.getNumberOfGuests;
  }

  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  this.addDishToMenu = function(id) {
    var quantity = 0;
    var duplicate = false;
    let dishType = (this.getDish(id)).type;
    if (menu === undefined || menu.length == 0) {
      menu[0] = this.getDish(id);
    }
    else {
      menu.forEach(function(menuDishes) {
        if (menuDishes.id == id) {
          duplicate = true;
          alert("DISH ALREADY ADDED TO MENU");
          return;
        }
        else if (menuDishes.type == dishType) {
          duplicate = true;
          alert("THERE IS ALREADY ONE DISH OF THE SAME TYPE MENU");
          return;
        }
        quantity++;
      });
      if (duplicate == true) {
        return;
      } else {
        //console.log(menu);
        menu.push(this.getDish(id));
        //console.log(menu);
      }
    }
    this.notifyObservers();
  }


  //Removes dish from menu
  this.removeDishFromMenu = function(id) {
    var amount = 0;
    var idExists = false;
    if (menu.length == 1) {
      if (menu[amount].id == id) {
        menu.splice(amount, 1);
      } else {
        alert("ERROR, no dish like this!");
      }
    } else {
      menu.forEach(function(theDish) {
        if (theDish.id == id) {
          menu.splice(amount, 1);
          idExists = true;
        }
        amount++;
      });
      if (idExists == false) {
        alert("ERROR, no dish like this!");
      }
    }
  }



  //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
  //you can use the filter argument to filter out the dish by name or ingredient (use for search)
  //if you don't pass any filter all the dishes will be returned
  this.getAllDishes = function(type, filter) {
    if (!type && !filter) {
      return dishes;
    }
    if (type === "starter" || type === "main" || type === "dessert") {
      return dishes.filter(function(dish) {
        var found = true;
        if (filter) {
          found = false;
          if (dish.name.toLowerCase().indexOf(filter) != -1) // all dish names in lower case
          {
            found = true;
          }
          return dish.type == type && found;
        } else {
          return dish.type;
        }
        if (!filter) {
          return dish.type;
        }
      });
    } else {
      return dishes.filter(function(dish) {
        var found = true;
        if (filter) {
          if (dish.name.toLowerCase().indexOf(filter) != -1) {
            return dish;
          }
        }
      });
    }

    /*API*/
    /*return fetch("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search") {
              headers:{
                  'X-Mashape-Key': API_KEY
              }
        }).then(response => response.json())
          .then(data => data.results)
          */
  }

  //function that returns a dish of specific ID
  this.getDish = function(id) {
    for (key in dishes) {
      if (dishes[key].id == id) {
        return dishes[key];
      }
    }
  }


  // the dishes variable contains an array of all the
  // dishes in the database. each dish has id, name, type,
  // image (name of the image file), description and
  // array of ingredients. Each ingredient has name,
  // quantity (a number), price (a number) and unit (string
  // defining the unit i.e. "g", "slices", "ml". Unit
  // can sometimes be empty like in the example of eggs where
  // you just say "5 eggs" and not "5 pieces of eggs" or anything else.
  var dishes = [{
    'id': 1,
    'name': 'French toast',
    'type': 'starter',
    'image': 'toast.jpg',
    'description': "In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
    'ingredients': [{
      'name': 'eggs',
      'quantity': 0.5,
      'unit': '',
      'price': 10
    }, {
      'name': 'milk',
      'quantity': 30,
      'unit': 'ml',
      'price': 6
    }, {
      'name': 'brown sugar',
      'quantity': 7,
      'unit': 'g',
      'price': 1
    }, {
      'name': 'ground nutmeg',
      'quantity': 0.5,
      'unit': 'g',
      'price': 12
    }, {
      'name': 'white bread',
      'quantity': 2,
      'unit': 'slices',
      'price': 2
    }]
  }, {
    'id': 2,
    'name': 'Sourdough Starter',
    'type': 'starter',
    'image': 'sourdough.jpg',
    'description': "Here is how you make it... Lore ipsum...",
    'ingredients': [{
      'name': 'active dry yeast',
      'quantity': 0.5,
      'unit': 'g',
      'price': 4
    }, {
      'name': 'warm water',
      'quantity': 30,
      'unit': 'ml',
      'price': 0
    }, {
      'name': 'all-purpose flour',
      'quantity': 15,
      'unit': 'g',
      'price': 2
    }]
  }, {
    'id': 3,
    'name': 'Baked Brie with Peaches',
    'type': 'starter',
    'image': 'bakedbrie.jpg',
    'description': "Here is how you make it... Lore ipsum...",
    'ingredients': [{
      'name': 'round Brie cheese',
      'quantity': 10,
      'unit': 'g',
      'price': 8
    }, {
      'name': 'raspberry preserves',
      'quantity': 15,
      'unit': 'g',
      'price': 10
    }, {
      'name': 'peaches',
      'quantity': 1,
      'unit': '',
      'price': 4
    }]
  }, {
    'id': 100,
    'name': 'Meat balls',
    'type': 'main dish',
    'image': 'meatballs.jpg',
    'description': "Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
    'ingredients': [{
      'name': 'extra lean ground beef',
      'quantity': 115,
      'unit': 'g',
      'price': 20
    }, {
      'name': 'sea salt',
      'quantity': 0.7,
      'unit': 'g',
      'price': 3
    }, {
      'name': 'small onion, diced',
      'quantity': 0.25,
      'unit': '',
      'price': 2
    }, {
      'name': 'garlic salt',
      'quantity': 0.7,
      'unit': 'g',
      'price': 2
    }, {
      'name': 'Italian seasoning',
      'quantity': 0.6,
      'unit': 'g',
      'price': 3
    }, {
      'name': 'dried oregano',
      'quantity': 0.3,
      'unit': 'g',
      'price': 3
    }, {
      'name': 'crushed red pepper flakes',
      'quantity': 0.6,
      'unit': 'g',
      'price': 3
    }, {
      'name': 'Worcestershire sauce',
      'quantity': 6,
      'unit': 'ml',
      'price': 7
    }, {
      'name': 'milk',
      'quantity': 20,
      'unit': 'ml',
      'price': 4
    }, {
      'name': 'grated Parmesan cheese',
      'quantity': 5,
      'unit': 'g',
      'price': 8
    }, {
      'name': 'seasoned bread crumbs',
      'quantity': 15,
      'unit': 'g',
      'price': 4
    }]
  }, {
    'id': 101,
    'name': 'MD 2',
    'type': 'main dish',
    'image': 'bakedbrie.jpg',
    'description': "Here is how you make it... Lore ipsum...",
    'ingredients': [{
      'name': 'ingredient 1',
      'quantity': 1,
      'unit': 'pieces',
      'price': 8
    }, {
      'name': 'ingredient 2',
      'quantity': 15,
      'unit': 'g',
      'price': 7
    }, {
      'name': 'ingredient 3',
      'quantity': 10,
      'unit': 'ml',
      'price': 4
    }]
  }, {
    'id': 102,
    'name': 'MD 3',
    'type': 'main dish',
    'image': 'meatballs.jpg',
    'description': "Here is how you make it... Lore ipsum...",
    'ingredients': [{
      'name': 'ingredient 1',
      'quantity': 2,
      'unit': 'pieces',
      'price': 8
    }, {
      'name': 'ingredient 2',
      'quantity': 10,
      'unit': 'g',
      'price': 7
    }, {
      'name': 'ingredient 3',
      'quantity': 5,
      'unit': 'ml',
      'price': 4
    }]
  }, {
    'id': 103,
    'name': 'MD 4',
    'type': 'main dish',
    'image': 'meatballs.jpg',
    'description': "Here is how you make it... Lore ipsum...",
    'ingredients': [{
      'name': 'ingredient 1',
      'quantity': 1,
      'unit': 'pieces',
      'price': 4
    }, {
      'name': 'ingredient 2',
      'quantity': 12,
      'unit': 'g',
      'price': 7
    }, {
      'name': 'ingredient 3',
      'quantity': 6,
      'unit': 'ml',
      'price': 4
    }]
  }, {
    'id': 200,
    'name': 'Chocolat Ice cream',
    'type': 'dessert',
    'image': 'icecream.jpg',
    'description': "Here is how you make it... Lore ipsum...",
    'ingredients': [{
      'name': 'ice cream',
      'quantity': 100,
      'unit': 'ml',
      'price': 6
    }]
  }, {
    'id': 201,
    'name': 'Vanilla Ice cream',
    'type': 'dessert',
    'image': 'icecream.jpg',
    'description': "Here is how you make it... Lore ipsum...",
    'ingredients': [{
      'name': 'ice cream',
      'quantity': 100,
      'unit': 'ml',
      'price': 6
    }]
  }, {
    'id': 202,
    'name': 'Strawberry',
    'type': 'dessert',
    'image': 'icecream.jpg',
    'description': "Here is how you make it... Lore ipsum...",
    'ingredients': [{
      'name': 'ice cream',
      'quantity': 100,
      'unit': 'ml',
      'price': 6
    }]
  }];

}
