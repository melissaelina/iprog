$(function() {
	// We instantiate our model
	var model = new DinnerModel();

	// Views
	var welcomeView = new HomeView($("#welcomeView"), model);
	var selectDish = new SelectDishesView($("#selectDish"), model);
	var dishDetails = new DishDetailsView($("#dishDetails"), model);
	var overview = new DinnerStatusView($("#statusView"), model);
	var printout = new DinnerPrintout($("#dinnerPrintout"), model);
	//COMPONENTS
	var sidebarView = new SidebarBox($("#sidebarView,#sidebarView-2"), model);
	var topbarView = new TopBarBox($("#dinnerStatusView,#dinnerStatusView-2"), model);

	// Controllers
	var sidebar1Controller = new SidebarController($("#sidebarView,#sidebarView-2"), model);
	var controller = new GlobalController($("#dishSearchView,#statusView,#dinnerPrintout"), model);




	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
