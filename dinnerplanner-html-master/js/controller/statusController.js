var StatusController = function(container, model) {
  //<script>
  //this.dishesBoxList = container.find('#dishItemView');
  //function myFunction() {
  var k = document.getElementById("dinnerOverview");
  var y = document.getElementById("dinnerPrintoutView");
  //if one view is shown hide that view nothing on the other if other view is shown
  //hide that none
  //So, hide shown view, ignore not shown view.
  if (k.style.display === "none") {//is shown
  k.style.display = "block";//hides it
  }else {
  k.style.display = "block";

  }
  if (y.style.display === "none") {//is shown
  y.style.display = "block";//hides it
}
  else {
    y.style.display = "block";

}
//just nu är status controller connected till både overview och print trots
//de har olika variabler k och y

  SearchController(); //skicka tillbaka till search sidan
}
