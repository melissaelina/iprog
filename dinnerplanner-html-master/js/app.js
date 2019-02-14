$(function() {
	// We instantiate our model
	var model = new DinnerModel();

	// Views
	var welcomeView = new WelcomeView($("#welcomeView"), model);
	var searchDishView = new SearchDishView($("#searchDishView"), model);
	var dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
	var dinnerOverview = new DinnerOverview($("#dinnerOverview"), model);
	var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerPrintoutView"), model);
	var sidebarView = new SidebarView($(".sidebarView"), model); 		// class in dynamic html, searchDishView and dishDetailsView
	//var sidebarView = new SidebarView($("#sidebarView"), model);	// to use when cortrollers are in place

	// Controllers
	var welcomeController = new WelcomeController(welcomeView, model, this)  // fix
	var searchDishController = new SearchDishController(searchDishView, model, this);
	var detailsController = new DetailsController(dishDetailsView, model, this)  // fix
	var overviewController = new OverviewController(dinnerOverview, model, this)   // fix
	var printoutController = new PrintoutController(dinnerPrintoutView, model, this)  // fix
	var sidebarController = new SidebarController(sidebarView, model, this);   // to use when cortrollers are in place

	/* GENERAL STATE CONTROLLER */
	var currentView = function(view) {

		$(".container").removeClass("show").addClass("hide");
	  view.removeClass("hide").addClass("show");

		/*$("#welcomeView").hide();
    $("#searchDishView").hide();
    $("#dishDetailsView").hide();
    $("#dinnerOverview").hide();
    $("#dinnerPrintoutView").hide();
    $("#sidebarView").hide();
    $("#dinnerStatusView").hide();*/
	}

	this.takeMeHome = function(){		// show welcome screen
		currentView($("#welcomeView"));
  }

  this.toMenu = function(){		// show search dish screen
		currentView($("#searchDishView"));
		/*$("#searchDishView").show();
		$("#sidebarView").show();*/
  }

  this.provideDishInfo = function(id){		// show dish details screen
		currentView($("#dishDetailsView"));
		dishDetailsView.provideDishDetails(id);
		/*hideAllViews();
		$("#dishDetailsView").show();
		$("#sidebarView").show();
		console.log(dishDetailsView);
		*/
  }

  this.dinnerConfirmed = function(){		// show dinner overview screen
		currentView($("#dinnerOverview"));
		/*hideAllViews();
		$("#dinnerOverview").hide();
		$("#sidebarView").show();
		$("#dinnerStatusView").hide();*/
  }

  this.dinnerPrinted = function(){		// show dinner printout screen
		currentView($("#dinnerPrintoutView"));
		/*hideAllViews();
		$("#dinnerPrintoutView").hide();
		$("#dinnerStatusView").hide();*/
  }
	this.takeMeHome;
});
