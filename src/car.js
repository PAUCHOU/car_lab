//Phase 1

function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  // do the same for year and color
  this.state = "off"
  this.previousOwners = [];
  this.currentOwner = "manufacturer";
  this.passengers = [];
}

var newCar = new Car("Toyota", "Camry", "2012", "white") 

Car.prototype.sale = function(newOwner){
	this.previousOwners.push(this.currentOwner);
	this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};

//Phase 2

Car.prototype.start = function(startCar){
	this.state = "on";
};

Car.prototype.off = function(shutCar){
	this.state = "off";
}

Car.prototype.driveTo = function(destination){
	if this.state("on") = function(){
	console.log("driving to ", destination)
	}
}

Car.prototype.park = function(park){
	if this.state("off") = function(){
		console.log("parked!");
	}
}

//Phase 3

Car.prototype.pick_up = function(name){
	if this.state("on") = function(){
		console.log("driving to pick up", name);
		this.passengers.push(name);
	}
}

Car.prototype.dropOff = function(name){
	if this.state("on") = fucntion(){
		this.passengers.pop(name);
	}
}

