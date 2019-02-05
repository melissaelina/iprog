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
	//var sidebarView = new SidebarView($("#sidebarView,#sidebarView-2"), model);
	var sidebarView = new SidebarView($("#sidebarView"), model);	// to use when cortrollers are in place
	var dinnerStatus = new DinnerStatus($("#dinnerStatusView"), model);		 // to use when cortrollers are in place
	//var dinnerStatusView = new DinnerStatus($("#dinnerStatusView,#dinnerStatusView-2"), model);			// remove when controller are in place


	// Controllers
	//var generalStateController = new GeneralStateController($("#welcomeView,#searchDishView,#dishDetailsView,#dinnerOverview,#dinnerPrintoutView,#sidebarView,#sidebarView-2,#dinnerStatusView,#dinnerStatusView-2"), model);
	var sidebarController = new SidebarController(sidebarView, model, this);   // to use when cortrollers are in place
	//var sidebarController = new SidebarController(model, sidebarView, sidebarView-2, this);		// remove when controller are in place
	var statusController = new StatusController(dinnerStatus, model, this)  // fix
	//var statusController = new StatusController(model, dinnerStatusView, dinnerStatusView-2, this)  // fix
	var welcomeController = new WelcomeController(welcomeView, model, this)  // fix
	var searchDishController = new SearchDishController(searchDishView, model, this);
	var detailsController = new DetailsController(dishDetailsView, model, this)  // fix
	//var searchController = new SearchController($(""))  // fix
	var overviewController = new OverviewController(dinnerOverview, model, this)   // fix
	var printController = new PrintController(dinnerPrintoutView, model, this)  // fix
	//var confirmController = new ConfirmController(  // fix
	//var goprintController = new GoPrintController($(""))  // fix

	/* GENERAL STATE CONTROLLER */
	var hideAllViews = function() {
		$("#welcomeView").hide();
    $("#searchDishView").hide();
    $("#dishDetailsView").hide();
    $("#dinnerOverview").hide();
    $("#dinnerPrintoutView").hide();
    $("#sidebarView").hide();
    $("#dinnerStatusView").hide();
	}

	this.showWelcomeScreen = function(){
		hideAllViews();
		$("#welcomeView").show();
  }

  this.showSearchDishScreen = function(){
		hideAllViews();
		$("#searchDishView").show();
		$("#sidebarView").show();
  }

  this.showDishDetailsScreen = function(){
		hideAllViews();
		$("#dishDetailsView").show();
		$("#sidebarView").show();
  }

  this.showDinnerOverviewScreen = function(){
		hideAllViews();
		$("#dinnerOverview").hide();
		$("#sidebarView").show();
		$("#dinnerStatusView").hide();
  }

  this.showDinnerPrintoutScreen = function(){
		hideAllViews();
		$("#dinnerPrintoutView").hide();
		$("#dinnerStatusView").hide();
  }
});
