var DinnerOverview = function(container, model) {

  container.append(`
    <div class="parent">
      <nav class="navbar" id="dinnerStatusView">
      </nav>
      <div class="main">
        <article id="dishItemView" class="flex-container">
        </article>
        <div id="total">
        </div>
      </div>
    </div>
    `);

  this.dishesBoxList = container.find("#dishItemView");
  this.dishesTotal = container.find("#total");
  var nbPersons = model.getNumberOfGuests();
  console.log(nbPersons);
  var searchFor = model.getAllDishes('all');
  if(typeof searchFor === 'object' && searchFor.length > 0){
    this.dishesBoxList.html('');
    for(var i = 0; i < searchFor.length; i++){
      var price = 0;
      for(var a = 0; a < searchFor[i].ingredients.length; a++){
        price += searchFor[i].ingredients[a].price;
      }
      var finalPrice = price * model.getNumberOfGuests();
      this.dishesBoxList.append(`
        <div class="column">
          <img id="${searchFor[i].id}" class="pickupDishes" src="images/${searchFor[i].image}">
          <p>${finalPrice.toFixed(2)} SEK</p>
        </div>
      `);
    }
  }
  this.dishesTotal.html(model.getTotalMenuPrice().toFixed(2)+' SEK');

}
