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
    model.addDishToMenu(view.id);
  });
}
