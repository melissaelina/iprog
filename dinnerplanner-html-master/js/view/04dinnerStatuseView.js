var DinnerStatusView = function(container, model) {

  container.append(`
    <nav class="navbar" id="dinnerStatusView">
    </nav>
    <article id="dishItemView" class="main">
    </article>
    <div id="total">
    </div>
    `);

  this.dishesBoxList = container.find("#dishItemView");
  this.dishesTotal = container.find("#total");
  var nbPersons = model.getNumberOfGuests();
  var searchFor = model.getAllDishes('all');
  if(typeof searchFor === 'object' && searchFor.length > 0){
    this.dishesBoxList.html('');
    for(var i = 0; i < searchFor.length; i++){
      var price = 0;
      for(var a = 0; a < searchFor[i].ingredients.length; a++){
        price += searchFor[i].ingredients[a].price;
      }
      var finalPrice = price * model.getNumberOfGuests();
      this.dishesBoxList.append('<img id="'+searchFor[i].id+'" class="pickupDishes" src="images/'+searchFor[i].image+'">'+finalPrice.toFixed(2)+' SEK');
    }
  }
  this.dishesTotal.html(model.getTotalMenuPrice().toFixed(2)+' SEK');

}
