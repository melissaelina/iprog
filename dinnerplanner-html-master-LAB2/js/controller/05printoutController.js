var PrintoutController = function(view, model, app) {
  this.editbutton = $(app).find("#editmealbutton");
  this.editbutton.click(function() {
    app.toMenu();
  });
}
