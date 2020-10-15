//Setting Property to a new object 
function Dog(name) {
	this.name = name;
}	
Dog.prototype = {
	//Defining the constructor property on Dog prototype
	constructor: Dog,
	numLegs: 2,
	eat: function() {
		console.log("nom nom nom");
	},
	describe: function() {
		console.log("My name is " + this.name);
	} 
}

//Understanding where an object prototype comes

function Dogs (name) {
	this.name = name;
}
let a = typeof Dogs.prototype
console.log(a); //signifies an object prototype is itself an object
let beagle = new Dog("Snoopy");
let result = Dogs.prototype.isPrototypeOf(beagle);
console.log(result); 
let aResult = Object.prototype.isPrototypeOf(Dog.prototype);
console.log(aResult);

// DRY
//Initially:
/*function Cat(name) {
	this.name = name;
 }

 Cat.prototype = {
 	constructor: Cat,
 	eat: function() {
 		console.log("nom nom nom")
 	}
 };

function Bear(name) {
	this.name = name;
}

Bear.prototype = {
	constructor: Bear,
	eat: function() {
		console.log("nom nom nom")
	}
}; */

//Editing in the spirit of DRY by removing the eat() method
//And creating a supertype called Animal
function Cat(name) {
	this.name = name;
 }

 Cat.prototype = {
 	constructor: Cat,
 };

function Bear(name) {
	this.name = name;
}

Bear.prototype = {
	constructor: Bear,
};

function Animal () {}
Animal.prototype = {
	constructor: Animal,
	eat: function() {
 		console.log("nom nom nom")
 	} 
};
//Since Animal now includes eat method, it doesn't have to be
//in Bear and Cat anymore

// Reusing the Animal method
let duck = Object.create(Animal.prototype);
let pelican = Object.create(Animal.prototype);

//Making Dog inherit from Animal
function Dog() { }
Dog.prototype = Object.create(Animal.prototype)
let jackie = new Dog();
jackie.eat(); 
console.log(jackie.constructor) 
//Returns Animal () {} instead of showing they were constructed from bird

//To fix it
let show = Dog.prototype.constructor = Dog;
console.log(show); //returns Dog() { }

console.log(jackie) //Returns Dog{}


//Adding Methods after inheritance 
Dog.prototype.bark = function() {
	console.log("Gbow Gbow")
};
jackie.eat();
jackie.bark();

//Overifing Animal.eat()
Dog.prototype.eat = function() {
	return "kro kro kro"; 
}; 
let nEat = jackie.eat()
console.log(nEat)

//Mixin
// Mixin is brtter when dealing with unrelated objects
let flyMixin = function(obj) {
	obj.fly = function() {
		console.log("Flying, wu la laa!")
	}
};
//passing objects
let bird = {
	name: "Donald",
	numLegs: 2
};

let plane = {
	model: "777",
	numPassengers: 524
};
flyMixin(bird);
flyMixin(plane);
bird.fly();
plane.fly();


//Demo of function closure
function Giraffe () {
	let babyGiraffe = 600 //private variable

	/*Publicly available variable that the giraffe Objedt can use*/
	this.getBabyGirrafe = function() {
		return babyGiraffe;
	};	
};
let whityG = new Giraffe();
let gResult = whityG.getBabyGirrafe();
console.log(gResult);

// IIFE: A function that calls itself
(function () {
	console.log("This is an immediately invoked function expresiion")
})();

// Using IIFE to create a module
function glideMixin(obj) {
	obj.glide = function() {
		console.log("Gliding on the water")
	};
}
function fliMixing(obj) {
	obj.fli = function() {
		console.log("Flying, Wu la laa!")
	};
}

//Grouping the mixins into module
let motionModule = (function() {
	return {
		glideMixin: function(obj) {
			obj.glide = function() {
				console.log("Gliding on the water");
			};
		},
		fliMixing: function(obj) {
			obj.fli = function() {
				console.log("Flying wu la laa");
			};
		}
	}
})(); 
motionModule.glideMixin(pelican)
//pelican.glide();