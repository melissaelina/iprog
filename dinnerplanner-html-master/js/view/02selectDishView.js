var SelectDishesView = function(container, model) {
  container.append('<aside class="side" id="sidebarView">'+
  '</aside>'+
  '<div class="main">'+
  '<article id="dishSearchView">'+
  '<div>'+
  '<h2>Find a dish</h2>'+
  '<input id="searchbarDishes" placeholder="Enter key words">'+
  '<select id="typeDishes">'+
  '<option value="starter">starter</option>'+
  '<option value="main dish">main dish</option>'+
  '<option value="dessert">dessert</option>'+
  '</select>'+
  '<button id="searchButton" class="button">search</button>'+
  '</div>'+
  '<hr>'+
  '<div id="dishItemView">'+
  '</div>'+
  '</article>'+
  '</div>');

  this.dishesBoxList = container.find('#dishItemView');
  var searchFor = model.getAllDishes('all');
  if(typeof searchFor === 'object' && searchFor.length > 0){
    this.dishesBoxList.html('');
    for(var i = 0; i < searchFor.length; i++){
      var price = 0;
      for(var a = 0; a < searchFor[i].ingredients.length; a++){
        price += searchFor[i].ingredients[a].price;
      }
      this.dishesBoxList.append(
        '<div class="column">'+
        '<div>'+
        '<img id="'+searchFor[i].id+'" class="pickupDishes" src="images/'+searchFor[i].image+'" alt="Lasagne" style="width:45%">'+
        '<p style="padding-right: 4em">'+searchFor[i].name+'</p>'+
        '</div>'+
        '<p style="padding-right: 4em">'+price.toFixed(2)+' SEK</p>'+
        '</div>');
    }
  }
}
