var DinnerPrintoutView = function(dinnerPrintoutView, model) {
  var nbPersons = model.getNumberOfGuests();
  var ourMenu = model.getFullMenu();
  dinnerPrintoutView.append(`
    <nav class="navbar">
      <h2>My dinner: ${nbPersons} guests</h2>
      <div id="buttonplacement">
        <button id="editmealbutton"class="button"<b>Go back and edit dinner</b></button>
      </div>
    </nav>
    <div>
      <article id="menuItemForPrint" class="main-2">
      </article>
    </div>
    `);

  var currentMenu = function() {
    this.ourMenuBox = dinnerPrintoutView.find('#menuItemForPrint');
    ourMenu.forEach(function(dish) {
      this.ourMenuBox.append(`
        <div class="prepsparent">
          <div class="left">
            <img src="images/${dish.image}" alt="${dish.name}">
          </div>
          <div class="right">
            <p>${dish.description}</p>
          </div>
        </div>
        `);
      });
    }

  currentMenu();

  this.update = function(model) {
    var ourMenu = model.getFullMenu();
    currentMenu();
  }
  model.addObservers(this.update);
}
