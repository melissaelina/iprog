$(function() {
	// We instantiate our model
	var model = new DinnerModel();

	// Views
	var welcomeView = new WelcomeView($("#welcomeView"), model);
	var searchDishView = new SearchDishView($("#searchDishView"), model);
	var dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
	var dinnerOverview = new DinnerOverview($("#dinnerOverview"), model);
	var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerPrintoutView"), model);

	// Additional view components
	var sidebarView = new SidebarView($("#sidebarView,#sidebarView-2"), model);
	//var dinnerStatus = new DinnerStatus($("#dinnerStatusView"), model);		 // to use when cortrollers are in place
	var dinnerStatus = new DinnerStatus($("#dinnerStatusView,#dinnerStatusView-2"), model);			// remove when controller are in place

	// Controllers
	//var generalStateController = new GeneralStateController($("#welcomeView,#searchDishView,#dishDetailsView,#dinnerOverview,#dinnerPrintoutView,#sidebarView,#sidebarView-2,#dinnerStatusView,#dinnerStatusView-2"), model);
	//var sidebarController = new SidebarController($("#sidebarView"), model);   // to use when cortrollers are in place
	var sidebarController = new SidebarController(model, sidebarView, sidebarView-2, this);		// remove when controller are in place
	var statusController = new StatusController(model, dinnerStatusView, dinnerStatusView-2, this))  // fix
	var homeController = new HomeController(model, welcomeView, this))  // fix
	var searchDishController = new SearchDishController(model, searchDishView, this);
	var detailsController = new DetailsController(model, dishDetailsView, this)  // fix
	//var searchController = new SearchController($(""))  // fix
	var overviewController = new OverviewController(model, dinnerOverview, this)   // fix
	var printController = new PrintController(model, dinnerPrintoutView, this)  // fix
	//var confirmController = new ConfirmController(  // fix
	//var goprintController = new GoPrintController($(""))  // fix

	/* GENERAL STATE CONTROLLER */
	this.showWelcomeScreen = function(){
    welcomeView.show();
    searchDishView.hide();
    dishDetailsView.hide();
    dinnerOverview.hide();
    dinnerPrintoutView.hide();
    sidebarView.hide();
    dinnerStatus.hide();
  }

  this.showSearchDishScreen = function(){
    welcomeView.hide();
    searchDishView.show();
    dishDetailsView.hide();
    dinnerOverview.hide();
    dinnerPrintoutView.hide();
    sidebarView.show();
    dinnerStatus.hide();
  }

  this.showDishDetailsScreen = function(){
    welcomeView.hide();
    searchDishView.hide();
    dishDetailsView.show();
    dinnerOverview.hide();
    dinnerPrintoutView.hide();
    sidebarView.show();
    dinnerStatus.hide();
  }

  this.showDinnerOverviewScreen = function(){
    welcomeView.hide();
    searchDishView.hide();
    dishDetailsView.hide();
    dinnerOverview.show();
    dinnerPrintoutView.hide();
    sidebarView.show();
    dinnerStatus.show();
  }

  this.showDinnerPrintoutScreen = function(){
    welcomeView.hide();
    searchDishView.hide();
    dishDetailsView.hide();
    dinnerOverview.hide();
    dinnerPrintoutView.show();
    sidebarView.hide();
    dinnerStatus.show();
  }
});
