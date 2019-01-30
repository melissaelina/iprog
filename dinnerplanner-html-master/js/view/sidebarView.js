var SidebarView = function (container, model) {
	var searchFor = model.getDish(2);
	var nbPersons = model.getNumberOfGuests();
	var ingredientsPrice = 0;
	for (var b = 0; b < searchFor.ingredients.length; b++) {
		ingredientsPrice += searchFor.ingredients[b].price;
		container.find("#ingredient-" + i).append(searchFor.ingredients[b].quantity +
			(ingredientsPrice * nbPersons).toFixed(2));
		}
	container.append(`
		<h2>My dinner</h2>
		<label>People: <span id="numberOfGuests"></span>
		</label>
		<div>
			<button id="minusGuest" class="btn">-</button>
			<button id="plusGuest" class="btn">+</button>
		</div>
		<p>Dish name: <span id="name">${searchFor.name}</span>
		</p>
		<p>Cost: <span id="cost">${ingredientsPrice*nbPersons} SEK</span>
		</p>
		<button class="button" onclick= "ConfirmController()">Confirm Dinner</button>
		`);
}
