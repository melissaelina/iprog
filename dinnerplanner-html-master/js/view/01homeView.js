var HomeView = function(container, model) {

  this.createnew = container.find("#createnew");    // create new dinner button

  container.append(`
    <p id="homepageparagraph">
    Lorem ipsum dolordenifalekfn sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <div class="centered">
      <button id="createnew" class="button">
      <b>Create new dinner</b>
      </button>
    </div>
  `);
}
