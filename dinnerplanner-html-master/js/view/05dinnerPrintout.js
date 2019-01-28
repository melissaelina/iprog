var DinnerPrintout = function(container, model) {

  container.append('<nav class="navbar" id="dinnerStatusView-2"></nav>'+
  '<article id="dishDetails" class="main-2">'+'</article>');

  this.dishesBoxList = container.find("#dishDetails");
  var searchFor = model.getAllDishes('all');
  if(typeof searchFor === 'object' && searchFor.length > 0){
    this.dishesBoxList.html('');
    for(var i = 0; i < searchFor.length; i++){
      this.dishesBoxList.append(
        '<section>'+
        '<img src="images/'+searchFor[i].image+'" alt="'+searchFor[i].name+'">'+
        '<p>'+searchFor[i].description+'</p>'+
        '</section>');
    }
  }
}
