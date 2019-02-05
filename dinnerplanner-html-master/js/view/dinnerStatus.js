var DinnerStatus = function (container, model) {
	var nbPersons = model.getNumberOfGuests();		// NOT USING DINNERSTATUS
// NOT USING DINNERSTATUS
	container.append(`
		<h2>My dinner: ${nbPersons} people
		</h2>
		<div id="buttonplacement">
			<button class="button" onclick= "(new GeneralStateController()).showSearchDishScreen()"><b>Go back and edit dinner</b></button>
		</div>
		`);

/*	container.append(`
		<h2>My dinner: <span id="numberOfGuests"></span> people
		</h2>
		<div id="buttonplacement">
			<button class="button" onclick= "StatusController()"><b>Go back and edit dinner</b></button>
		</div>
		`);*/
}
