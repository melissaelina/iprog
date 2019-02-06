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
	//var sidebarView = new SidebarView($("#sidebarView"), model);	// to use when cortrollers are in place
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

	this.takeMeHome = function(){		// show welcome screen
		hideAllViews();
		$("#welcomeView").show();
  }

  this.toMenu = function(){		// show search dish screen
		hideAllViews();
		$("#searchDishView").show();
		$("#sidebarView").show();
  }

  this.provideDishInfo = function(id){		// show dish details screen
		hideAllViews();
		$("#dishDetailsView").show();
		$("#sidebarView").show();
		dishDetailsView.provideDishDetails(id);
  }

  this.dinnerConfirmed = function(){		// show dinner overview screen
		hideAllViews();
		$("#dinnerOverview").hide();
		$("#sidebarView").show();
		$("#dinnerStatusView").hide();
  }

  this.dinnerPrinted = function(){		// show dinner printout screen
		hideAllViews();
		$("#dinnerPrintoutView").hide();
		$("#dinnerStatusView").hide();
  }
});
