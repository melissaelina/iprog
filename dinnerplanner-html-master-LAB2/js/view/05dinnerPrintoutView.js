var DinnerPrintoutView = function(dinnerPrintoutView, model) {
  this.numGuests = dinnerPrintoutView.find("#numGuests");   //test
  var ourMenu = model.getFullMenu();

  dinnerPrintoutView.append(`
    <nav class="navbar">
      <h2>My dinner: <span id="numGuests"></span> guests</h2>
      <div id="buttonplacement">
        <button id="editmealbutton"class="button"<b>Go back and edit dinner</b></button>
      </div>
    </nav>
    <div class="main">
      <article id="menuItemsForPrint">
      </article>
    </div>
    `);
  var numGuests = model.getNumberOfGuests(); //test
  document.getElementById("numGuests").innerHTML = numGuests; //test
  var currentMenu = function() {
    this.ourMenuBox = dinnerPrintoutView.find('#menuItemsForPrint');
    this.ourMenuBox.html('');
    ourMenu.forEach(function(dish) {
      dishDisc = dish.description;
      this.ourMenuBox.append(`
        <div class="prepsparent">
          <div class="left">
            <img src="images/${dish.image}" alt="${dish.name}">
          </div>
          <div class="right">
            ${dishDisc}
          </div>
        </div>
        `);
      });
    }
  currentMenu();

  this.update = function(model) {
    var ourMenu = model.getFullMenu();
    var numGuests = model.getNumberOfGuests(); //test
    document.getElementById("numGuests").innerHTML = numGuests; //test
    currentMenu();
  }
  model.addObservers(this.update);
}
