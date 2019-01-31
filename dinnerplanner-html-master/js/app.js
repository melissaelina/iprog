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
	//var dinnerStatus = new DinnerStatus($("#dinnerStatusView"), model);		 // to use when cortrollers are in place
	var dinnerStatus = new DinnerStatus($("#dinnerStatusView,#dinnerStatusView-2"), model);			// remove when controller are in place

	// Controllers
	var generalStateController = new GeneralStateController($("#searchDishView,#dinnerOverview,#dinnerPrintoutView"), model);
	//var sidebar1Controller = new SidebarController($("#sidebarView"), model);   // to use when cortrollers are in place
	var sidebar1Controller = new SidebarController($("#sidebarView,#sidebarView-2"), model);		// remove when controller are in place
	var searchDishController = new SearchDishController($("#searchDishView"), model);
	var homeController = new HomeController($("welcomeView"))  // model not in use

// ADD ALL CONTROLLERS TO APP

});
