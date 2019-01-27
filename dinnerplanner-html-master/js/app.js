$(function() {
	// We instantiate our model
	var model = new DinnerModel();

	// Views
	//var welcomeView = new WelcomeView($("#welcomeView"), model);
	var sidebarView = new SidebarView($("#sidebarView"), model);
	//var dishItemView = new DishItemView($("#dishItemView"), model);
	var dishSearchView = new DishSearchView($("#dishSearchView"), model);
	var dishDetailsView = new DishDetailsView($("#printListOut"), model);
	var dinnerStatusView = new DinnerStatusView($("#globalPage"), model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
