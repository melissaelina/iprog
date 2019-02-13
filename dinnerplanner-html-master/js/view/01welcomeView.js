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
