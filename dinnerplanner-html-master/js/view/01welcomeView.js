/*var WelcomeView = function(container, model) {
  this.createnew = container.find("#createnew"); // create new dinner button
  container.append(`
    <div id="homefull">
    <p id="homepageparagraph">
    Lorem ipsum dolordenifalekfn sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <div class="centered">
      <button id="createnew" class="button">
      <b onclick="(new GeneralStateController()).showSearchDishScreen()">Create new dinner</b>
      </button>
    </div>
    </div>
  `);
  this.update = function(model, changeDetails) {
  }
  model.addObservers(this.update);
}*/


/* TESTING */
var WelcomeView = function(welcomeView, model) {
  welcomeView.append(`
    <p id="homepageparagraph">
    Lorem ipsum dolordenifalekfn sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <div class="centered">
      <button id="createnew" class="button">Create new dinner</button>
    </div>
  `);
  this.update = function(model) {
  }
  model.addObservers(this.update);
}
