var WelcomeController = function(view, model, app) {
  $(".container").addClass("hide");
  $("#welcomeView").removeClass("hide").addClass("show");

  this.createnew = $(app).find("#createnew"); // create new dinner button
  this.createnew.click(function(e) {
    app.toMenu();
  });
}
