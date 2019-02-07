var OverviewController = function(view, model, app) {
  this.printbutton = $(app).find("#printbutton");
  this.printbutton.click(function() {
    app.dinnerPrinted();
  });


}
