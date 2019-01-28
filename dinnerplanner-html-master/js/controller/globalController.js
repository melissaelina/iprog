var GlobalController = function(container, model) {

  var numberOfGuests = (container.find("#numberOfGuests").length > 0) ? container.find("#numberOfGuests") : console.log('#numberOfGuests doesn\'t existing');
	if(numberOfGuests)	numberOfGuests.html(model.getNumberOfGuests());

  /*this.searchBox = container.find("#searchbarDishes");
  this.dishesBoxList = container.find("#dishItemView");
  this.dishesBoxType = container.find("#typeDishes option");
  this.searchButton = container.find("#searchButton");
  this.pickupDish = container.find(".pickupDishes");*/
  /*this.searchButton.click(() => { // add listener on pressing enter
    var keyword = this.searchBox.val().toLowerCase(); // lowercase to match dishes names
    var type = false;
    for (var i = 0; i < this.dishesBoxType.length; i++) {
      if (this.dishesBoxType[i].selected === true) type = this.dishesBoxType[i].value;
    }
    if (type !== false) {
      this.dishesBoxList.html('');
      var searchFor = model.getAllDishes(type, keyword);
      if (typeof searchFor === 'object' && searchFor.length > 0) {
        for (var i = 0; i < searchFor.length; i++) {
          this.dishesBoxList.append(
            '<div class="column">' +
            '<div>' +
            '<im1>' +
            '<img id="' + searchFor[i].id + '" class="pickupDishes" src="images/' + searchFor[i].image + '" alt="Ice Cream" style="cursor:pointer;width:100%">' +
            '</im1>' +
            '<p>' + searchFor[i].name + '</p>' +
            '</div>' +
            '</div>');
        }
      }
    }
  });
  this.dishesBoxList.click((e) => {
    if (e.target.nodeName === "IMG") {
      var dish = model.getDish(e.target.id);
      console.log(dish);
      //this.dishesBoxList.find(".column").hide();
      //this.dishesBoxList.find(".column").remove();
    }
  });*/
}
