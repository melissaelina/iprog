/*var WelcomeController = function(container, model, app) {
  //<script>
  //this.dishesBoxList = container.find('#dishItemView');
  //function myFunction() {
  var x = document.getElementById("welcomeView");
  if (x.style.display === "none") {
  x.style.display = "block";
  } else {
  x.style.display = "none";
  }
  SearchController();
  //call on controller to show search dish view
  //}
  //</script>
}

  /*this.createdinnerButton = container.find("#createnew");

  this.createdinnerButton.click((e) => {
    //if (e.target.nodeName === "IMG") {
      //var dish = model.getDish(e.target.id);
      console.log("test printing");
      //this.dishesBoxList.find(".column").hide();
      //this.dishesBoxList.find(".column").remove();
    }


/* TESTING */
var WelcomeController = function(view, model, app) {
  this.createnew = $(app).find("#createnew"); // create new dinner button
  this.createnew.click(function(e) {
    app.showSearchDishScreen();
  });
}
