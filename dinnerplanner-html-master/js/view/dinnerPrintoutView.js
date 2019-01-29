var DinnerPrintoutView = function(container, model) {
    container.append(`
      <nav class="navbar" id="dinnerStatusView">
      </nav>
      <div>
        <article id="dishDetails" class="main-2">
        </article>
      </div>
      `);


  this.dishesBoxList = container.find("#dishDetails");
  var searchFor = model.getAllDishes('all');
  if(typeof searchFor === 'object' && searchFor.length > 0){
    this.dishesBoxList.html('');
    for(var i = 0; i < searchFor.length; i++){
      this.dishesBoxList.append(`
        <div class="prepsparent">
          <div class="left">
            <img src="images/${searchFor[i].image}" alt="${searchFor[i].name}">
          </div>
          <div class="right">
            <p>${searchFor[i].description}</p>
          </div>
        </div>
        `);
    }
  }
}
