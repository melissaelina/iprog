var DishDetailsView = function(container, model) {
  this.dishesBoxList = container.find("#printListOut");

  var numberOfGuests = (container.find("#numberOfGuests").length > 0) ? container.find("#numberOfGuests") : console.log('ID #numberOfGuests empty');
  if(numberOfGuests)  numberOfGuests.html(3);
  var searchFor = model.getAllDishes('starter', '');
  if(typeof searchFor === 'object' && searchFor.length > 0){
    container.html('');
    for(var i = 0; i < 3; i++){
      console.log(searchFor[i]);
      container.append(
        '<div class="row">'+'<div class="column">'+'<div>'+'<br><br><br>'+
        '<im1>'+'<img src="images/'+searchFor[i].image+'" alt="'+searchFor[i].name+'" style="width:70%">'+'</im1>'+
        '</div>'+'</div>'+
        '<div class="column" id="column30">'+
        '<div>'+
        '<h5>'+searchFor[i].name+'</h5>'+
        '<p2>'+searchFor[i].description+'</p2>'+
        '</div>'+
        '</div>'+
        '<div class="column" id="column30">'+
        '<div>'+
        '<br>'+
        '<h6>Preparation</h6>'+
        '<p2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. <br> <br>Viverra aliquet eget sit amet'+
        'tellus cras. Mattis aliquam faucibus purus in massa tempor nec feugiat. Erat imperdiet sed euismod nisi porta lorem mollis. Accumsan tortor posuere ac ut consequat semper viverra nam. Enim blandit volutpat maecenas volutpat. Eget duis at'+
        'tellus at urna. Viverra ipsum nunc aliquet bibendum. Magna fringilla urna porttitor rhoncus. In aliquam sem fringilla ut morbi tincidunt augue interdum velit.</p2>'+
        '</div>'+'</div>'+'</div>');
    }
  }

}
