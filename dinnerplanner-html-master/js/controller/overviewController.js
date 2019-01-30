var OverviewController = function(container, model) {
  console.log("testing");

  var k = document.getElementById("dinnerOverview");

  if (k.style.display === "none") { //is shown
    k.style.display = "block"; //hides it
  } else {
    k.style.display = "block"; //only this else statement works

  }

  //PrintController(container, model); //skicka tillbaka till search sidan
}
