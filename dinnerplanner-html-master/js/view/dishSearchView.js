var DishSearchView = function(container, model) {

  this.searchBox = container.find("#searchbarDishes");

  this.searchBox.keyup(() => {
    var keyword = this.searchBox.val();
    if(keyword.length > 1){
      console.log(model.getAllDishes('starter', keyword));
    }
  });

}
