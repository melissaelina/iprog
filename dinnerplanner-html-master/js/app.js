$(function() {
	// We instantiate our model
	var model = new DinnerModel();

	// Views
	var welcomeView = new WelcomeView($("#welcomeView"), model);
	var searchDishView = new SearchDishView($("#searchDishView"), model);
	var dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
	var dinnerOverview = new DinnerOverview($("#dinnerOverview"), model);
	var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerPrintoutView"), model);
	// Components
	var sidebarView = new SidebarView($("#sidebarView,#sidebarView-2"), model);
	var dinnerStatus = new DinnerStatus($("#dinnerStatusView,#dinnerStatusView-2"), model);
	// Controllers
	var sidebar1Controller = new SidebarController($("#sidebarView,#sidebarView-2"), model);
	var controller = new GlobalController($("#searchDishView,#dinnerOverview,#dinnerPrintoutView"), model);




	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
