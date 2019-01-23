var DinnerStatusView = function(container, model) {

  this.dishesBoxList = container.find("#dishItemView");

  var numberOfGuests = (container.find("#numberOfGuests").length > 0) ? container.find("#numberOfGuests") : console.log('ID #numberOfGuests empty');
  if(numberOfGuests)  numberOfGuests.html(3);

  var searchFor = model.getAllDishes('starter', '');
  if(typeof searchFor === 'object' && searchFor.length > 0){
    this.dishesBoxList.html('');
    for(var i = 0; i < 3; i++){
      this.dishesBoxList.append(
        '<div class="column">'+
        '<div>'+
        '<img id="'+searchFor[i].id+'" class="pickupDishes" src="images/'+searchFor[i].image+'" alt="Lasagne" style="width:45%">'+
        '<p style="padding-right: 4em">'+searchFor[i].name+'</p>'+
        '</div>'+
        '<p style="padding-right: 4em">52.90 SEK</p>'+
        '</div>');
    }
  }

}
