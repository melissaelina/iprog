$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	// And create the instance of ExampleView +++
	// var exampleView = new ExampleView($("#exampleView"), model);			// NB jQuery

	// OBS class names starts with capital letter, see js files under js -> view folder
	// view files according to prototype provided
	//var welcomeView = new WelcomeView($("#welcomeView"), model);
	var sidebarView = new SidebarView($("#sidebarView"), model);
	// var dishItemView = new DishItemView($("#dishItemView"), model);
	var dishSearchView = new DishSearchView($("#dishSearchView"), model);
	// var dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
	// var dinnerStatusView = new DinnerStatusView($("#dinnerStatusView"), model);

	//console.log(model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
