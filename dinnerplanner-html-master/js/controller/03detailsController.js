/*var DetailsController = function(container, model, app) {
  //<script>
  //this.dishesBoxList = container.find('#dishItemView');
  //function myFunction() {
  var x = document.getElementById("dishDetailsView");
  if (x.style.display === "none") {
  x.style.display = "block";
  } else {
  x.style.display = "none";
  }
  SearchController(); //skicka tillbaka till search sidan
}*/

/* TESTING */
/*var DetailsController = function(view, model, app) {
  this.backbutton = $(app).find("#backbutton");
  this.backbutton.click(function() {
    app.toMenu();
  });
  this.addtomenu = $(app).find("#addtomenu");
  this.addtomenu.click(function() {
    app.toMenu();
  });
}

/* TESTING */
var DetailsController = function(view, model, app) {
  this.backbutton = $(app).find("#backbutton");   // buttons lies under this.dishesDetails and app doesnt go in there
  this.backbutton.click(function() {
    //console.log(this.backbutton);
    app.toMenu();
  });
  this.addtomenu = $(app).find("#addtomenu");
  this.addtomenu.click(function() {
    //console.log(app.id);
    model.addDishToMenu(app.id);
  });
}
