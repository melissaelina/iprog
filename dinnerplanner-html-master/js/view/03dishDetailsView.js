var DishDetailsView = function(container, model) {
  container.append('<aside class="side" id="sidebarView-2">'+
  '</aside>'+'<div class="main">'+
  '<section id="dishDetailsView">'+'</div>');

  this.dishesDetails = container.find("#dishDetailsView");
  var nbPersons = model.getNumberOfGuests();
  var searchFor = model.getAllDishes('all');
  if(typeof searchFor === 'object' && searchFor.length > 0){
    this.dishesDetails.html('');
    for(var i = 0; i < searchFor.length; i++){
      var ingredients = model.getAllIngredients(searchFor[i].ingredients);

      this.dishesDetails.append('<article>'+
      '<h2>'+searchFor[i].name+'</h2>'+
      '<img src="images/'+searchFor[i].image+'" alt="'+searchFor[i].name+'">'+
      '<p>'+searchFor[i].description+'</p>'+
      '<button class="button">back to menu</button>'+
      '</article>'+
      '<article style="background: Thistle;">'+
      '<hr>ingredients for '+nbPersons+' '+
      '<ul id="ingredient-'+i+'"></ul>'+
      '<div id="total-'+i+'"></div>'+
      '<br><br>'+'<hr>'+
      '<button class="button">Add to menu</button>'+
      '</article>'+
      '</section>'+
      '<article>'+
      '<h2>Preparations</h2>'+
      '</article>');
      var ingredientsPrice = 0;
      for(var b = 0; b < ingredients.length; b++){
        ingredientsPrice += ingredients[b].price;
        container.find("#ingredient-"+i).append('<li>'+
        ingredients[b].quantity * nbPersons+' '+
        ingredients[b].unit+' '+
        ingredients[b].name+' SEK '+
        (ingredients[b].price * ingredients[b].quantity).toFixed(2)+
        '</li>');
      }
      container.find("#total-"+i).html('SEK '+(ingredientsPrice * nbPersons).toFixed(2));
    }
  }


  /*myHTML = "";
  for(i in model.getFullMenu()){
    var name = model.getFullMenu()[i].name;
    var image = model.getFullMenu()[i].image;

    console.log(name);
    console.log(image);

    myHTML += image + name;
  }
  container.html(myHTML);*/
}
