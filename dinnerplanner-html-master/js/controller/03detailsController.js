var DetailsController = function(view, model, app) {
  $("body").on('click',"#backbutton", function() {
    app.toMenu();
  });
  $("body").on('click',"#addtomenu", function() {
    model.addDishToMenu(view.id);
  });
}
