var SidebarView = function (container, model) {
	container.append(`
		<h2>My dinner</h2>
		<label>People: <span id="numberOfGuests"></span>
		</label>
		<div>
			<button id="minusGuest" class="btn">-</button>
			<button id="plusGuest" class="btn">+</button>
		</div>
		<p>Dish name: <span id=""></span>
		</p>
		<p>Cost: <span id="cost">${model.getTotalMenuPrice().toFixed(2)} SEK</span>
		</p>
		<button class="button">Confirm Dinner</button>
		`);
}
