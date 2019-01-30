var GoPrintController = function(container, model) {

  var x = document.getElementById("dinnerOverview");
  if (x.style.display === "none") {
  x.style.display = "block";
  } else {
  x.style.display = "none";
  }
  PrintController();

  }
