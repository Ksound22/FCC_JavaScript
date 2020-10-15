// alert('Hello World')
// objects in Javascript are modelled after real world objects
// and given real world properties
// Example(s)
/*let dog = {
	name: 'Jack' ,
	numLegs: 4,
	// Creating a method for the object
	sayName: function() {return "The name of the dog is " + dog.name + ".";}
};
let result = dog.sayName() //calls the function
// Accessing the properties of dog
console.log(dog.numLegs);
console.log(dog.name);
console.log(result) */   

//this key word coming in to the play to avoid errors in case 
//we are working with obkjects having a lot of references
let dog = {
	name: 'Jack' ,
	numLegs: 4,
	// Creating a method for the object
	sayName: function() {return "The name of the dog is " + this.name + ".";}
};
let result = dog.sayName() //calls the function
// Accessing the properties of dog
console.log(dog.numLegs);
console.log(dog.name);    
console.log(result);  
//this in this context refers to the object that the method is 
//associated with

let dove = {
	name: "Lady",
	numWings: 2,
	sayName: function() {return "The name of the dove is " + this.name + "."}
}
let doveResult = dove.sayName(); 
console.log(doveResult);


// Defining a constructor function
function Dog() {
	this.name = "Jack",
	this.color = "Green",
	this.numLegs = 4;
}
// Creating objects with the constructor
let hound = new Dog();

// accessing the properties of the new object
let nName = hound.name;
let nColor = hound.color;
let nLegs = hound.numLegs;
console.log(nName);
console.log(nColor);
console.log(nLegs);

// Practice
/*function Penguin() {
	this.name = "Oliver",
	this.color = "Black and White",
	this.wings = 0
} 
let oliver = new Penguin() 
let pName = oliver.name;
let pColor = oliver.color;
console.log(pName);
console.log(pColor); */

//Modifying the object properties
hound.name = "Clark"
console.log(hound.name); 

//Extending constructor to receive parameters 
function Dogs(name, color) {
	this.name = "Jack",
	this.color = "Green",
	this.numLegs = 4;
}
// Creating objects with the constructor and passing arguments
let terrier = new Dogs("Clark", "White");
console.log(terrier.constructor === Dogs)
//verifying constructor property
console.log(terrier instanceof Dogs); 			   //verifying Dogs constructor 
//console.log(brad instanceof Dogs); returns false //with instanceof

// accessing the properties of the new object
let tName = terrier.name;
let tColor = terrier.color;
let tLegs = terrier.numLegs;
console.log(tName);  
console.log(tColor);
console.log(tLegs);

//Modifying the object properties
terrier.name = "Clark"
console.log(terrier.name); 
// Discovery: multiple constructor can be created with the same name
// in the same project, Dog!

// Understanding Own Properties
function Bird(name) {
	this.name = name;
	this.numLegs = 2;
	//the above two are called own properties
	//because they are defined directly on the 
	//instance object
};

// Defining the prototype to prevent duplication of numLegs variable
Bird.prototype.numLegs = 2;
console.log(terrier.numLegs)
let canary = new Bird("Pelican"); 
//canary has its own separate copy of the "own properties"
let ownProps = [];
let protoypeProps = []; //new line
//pushing the properties of Bird to canary; well, it has them originally
for (let property in canary) {
	if(canary.hasOwnProperty(property)) {
		ownProps.push(property)
	} else {
		protoypeProps.push(property) //new line
	}
}
console.log(ownProps); 
console.log(protoypeProps); 

//Understanding and verifying Constructor property
function Cow (name) {
	this.name = name;
}
function joinCowFraternity(candidate) {
	if(candidate.constructor == Cow) {
		return true;
	} else {
		return false;
	}
}
let cResult = joinCowFraternity("cow")
console.log(cResult)

