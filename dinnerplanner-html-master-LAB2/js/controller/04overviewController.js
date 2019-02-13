var OverviewController = function(view, model, app) {
  this.editbutton = $(app).find("#editbutton");
  this.editbutton.click(function() {
    app.toMenu();
  });
  this.printbutton = $(app).find("#printbutton");
  this.printbutton.click(function() {
    app.dinnerPrinted();
  });
}
