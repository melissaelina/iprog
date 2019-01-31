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
	var generalStateController = new GeneralStateController($("#welcomeView,#searchDishView,#dishDetailsView,#dinnerOverview,#dinnerPrintoutView,#sidebarView,#sidebarView-2,#dinnerStatusView,#dinnerStatusView-2"), model);
	//var sidebarController = new SidebarController($("#sidebarView"), model);   // to use when cortrollers are in place
	var sidebarController = new SidebarController($("#sidebarView,#sidebarView-2"), model);		// remove when controller are in place
	var searchDishController = new SearchDishController($("#searchDishView"), model);
	var homeController = new HomeController($("welcomeView"))  // fix
	var searchController = new SearchController($(""))  // fix
	var detailsController = new DetailsController($(""))  // fix
	var statusController = new StatusController($("#dinnerStatusView,#dinnerStatusView-2", model))  // fix
	var sidebarController = new SidebarController($(""))  // fix
	var searchDishController = new SearchDishController($(""))  // fix
	var overviewController = new OverviewController($(""))  // fix
	var printController = new PrintController($(""))  // fix
	var confirmController = new ConfirmController($(""))  // fix
	var goprintController = new GoPrintController($(""))  // fix
});
