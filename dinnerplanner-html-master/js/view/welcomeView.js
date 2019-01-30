var WelcomeView = function(container, model) {

  this.createnew = container.find("#createnew"); // create new dinner button

  container.append(`
    <div id="testar">
    <p id="homepageparagraph">
    Lorem ipsum dolordenifalekfn sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <div class="centered">
      <button id="createnew" class="button">
      <b onclick= "myFunction()">Create new dinner</b>
      </button>
    </div>
    </div>
    <script>
function myFunction() {
  var x = document.getElementById("testar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
</script>
  `);
  /*this.createnew.click((e) => {
    //if (e.target.nodeName === "IMG") {
      //var dish = model.getDish(e.target.id);
      /*if (e.target.nodeName === "IMG") {
        var dish = model.getDish(e.target.id);
        console.log(dish);
        //this.welcome.find(".show").hide();
        this.dishesBoxList.find(".column").hide();
        //this.dishesBoxList.find(".column").remove();
      }
      else{

      }
      console.log("test printing");

      //this.dishesBoxList.find(".column").hide();
      //this.dishesBoxList.find(".column").remove();
    });*/
}
//this.createdinnerButton = container.find("#createnew");
