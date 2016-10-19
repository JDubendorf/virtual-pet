function View(controller) {  

	this.createPetHTML = function(pet) {

		var $buttonPlay = $("<button>Play</button>");
		var $buttonFeed = $("<button>Feed</button>");
		var $inputNumFeed = $("<p>Feed your pet by a certain amount: <input id='numA' type='number'></p>");
		var $buttonNumFeed = $("<button>Submit Food</button>");

		$buttonPlay.click(function() {
			controller.playWithPet(pet.name, 5);
			this.showAllPets();
		}.bind(this));

		$buttonFeed.click(function() {
			controller.feedPet(pet.name, 5);
			this.showAllPets();
		}.bind(this));

		$buttonNumFeed.click(function() {
			var num = $("#numA").val();
			num = parseInt(num);
			controller.feedPet(pet.name, num);
			this.showAllPets();
		}.bind(this));

		var $pet = $("<p>" +
			pet.name +
			" Hunger: " +
			pet.hunger +
			" - Fun: " +
			pet.fun +
			"</p>"
		);

		$pet.append($buttonPlay, $buttonFeed, $inputNumFeed, $buttonNumFeed);
		return $pet;
	};

	this.showAllPets = function() {
		$('#output').html("");
		var allPets = controller.getAllPets();
		for(var pet of allPets) {
			var petHTML = this.createPetHTML(pet);
			$('#output').append(petHTML);
		}
	};

	this.createPet = function() {				// from click listener in main.js
		var name = $('#petname').val();
		controller.addPet(name);
		this.showAllPets();
		$("#petname").val("");
	};

}
