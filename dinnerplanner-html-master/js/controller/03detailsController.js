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
  /*this.backbutton = $(app).find("#backbutton");
  this.addtomenu = $(app).find("#addtomenu");

  this.backbutton.click(function() {
    app.toMenu();
  });
  this.addtomenu.click(function() {
    model.addDishToMenu(app.id);
  });*/
  $("body").on('click',"#backbutton", function() {
    app.toMenu();
  });
  $("body").on('click',"#addtomenu", function() {
    console.log(123);
  });
}
