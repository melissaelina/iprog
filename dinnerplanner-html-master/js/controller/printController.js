var PrintController = function(container, model, app) {
  var x = document.getElementById("dinnerPrintoutView");
  if (x.style.display === "block") {//block =nothing showed
  x.style.display = "none";//none = shows content
  } else {
  x.style.display = "block";//block =nothing showed
  }

}
