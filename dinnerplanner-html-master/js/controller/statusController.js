var StatusController = function(container, model) {

  var k = document.getElementById("dinnerOverview");
  var y = document.getElementById("dinnerPrintoutView");
  //var y = document.getElementById("dinnerPrintoutView");
  //if one view is shown hide that view nothing on the other if other view is shown
  //hide that none
  //So, hide shown view, ignore not shown view.
  if (k.style.display === "none") {//is shown
  k.style.display = "block";//hides it
  }else {
  k.style.display = "none";

  }



  SearchController(); //skicka tillbaka till search sidan
}

//THIS CONTROLLER WORKS ON GO BACK AND EDIT ON OVERVIEW PAGE BUT NOT PRINTOUT
