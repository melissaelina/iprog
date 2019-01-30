var SearchController = function(container, model) {
  console.log("HELOOO")
  var x = document.getElementById("searchDishView");
  if (x.style.display === "block") {//block =nothing showed
  x.style.display = "none";//none = shows content
  } else {
  x.style.display = "block";//block =nothing showed
  }

}
