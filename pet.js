function Pet(name) { 

	this.name = name;
	this.hunger = 100;
	this.fun = 100;

	this.feed = function(food) {

			this.hunger -= food;
			this.fun -= (food / 2);

		if (this.hunger  <= 0) {
			alert("Your pet is full.");
			this.hunger = 0;
		} else if (this.fun <= 0) {
			alert("You're pet needs to have some fun very soon.");
			this.fun = 0;
		}
	};

	this.play = function(fun) {

			this.fun += fun;
			this.hunger += (fun / 2);

		if (this.fun >= 200) {
			alert("Your pet has had a lot of fun and needs a break.");
			this.fun = 200;
		} else if (this.hunger >= 200) {
			alert("You're pet needs to eat right away.");
			this.hunger = 200;
		}
	};

}
