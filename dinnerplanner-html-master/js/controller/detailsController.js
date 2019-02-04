var DetailsController = function(container, model, app) {
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
}
