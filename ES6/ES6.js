//alert(`Hello world`) 

//Arow functions
const greeter = () => name;


//use stric in action
function catTalk(a, b) {
	'use strict';
	 let x = 3.14
	 console.log(x)
}
catTalk()   

//Default parameters in arrow functions
/*const greet = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
*/

var printNumTwo;
for(let i = 0; i < 3; i++) {
	if(i === 2) {
		printNumTwo = function() {
			return i;
		};
	}
}
console.log(printNumTwo());

let obj = {
	name: "freeCodeCamp",
	review: "Awesome"
}
//object.freeze(obj) 
console.log(obj)

//writing arrow functions with parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5])); 

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("Kolade")); // Hello Kolade

//Rest
function howMany(...args) { 
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); 
// You have passed 4 arguments.

//spread
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); 
// returns 89 because Math.max returns the highest number in an array
console.log(maximus)


//Destructuring
const user = {name: "John Doe", age: 34};
const{name, age} = user
console.log(name, age)

//assigning to variables
const users = {name: "John Doe", age: 34};
const {name: userName, age: userAge} = user
console.log(userName, userAge)

//Destructuring objects
const usee = {
	johnDoe: {
		aged: 27,
		email: "johndoe@koladevs.com"
	}
};
//destructuring and assigning to variable(s)
const { johnDoe: {aged, email }} = usee;
console.log(aged, email); 

//Array destructuring
const [a, b,,,c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);


//Template literals
const person = {
	name: "Kolade Chris",
	age: 27
};

const helloKay = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(helloKay);  

//Class syntax for decalring constructor function
class SpaceShuttle {
	constructor(targetPlanet) {
		this.targetPlanet = targetPlanet
	}
}
var zeus = new SpaceShuttle('Jupiter')
console.log(zeus);

//Getters and Setters
class Book {
	constructor(author) {
		this._author = author;
	}
	//getter
	get writer() {
		return this._author;
	}
	//setter
	set writer(updatedAuthor) {
		this._author = updatedAuthor;
	}
}
const novel = new Book('anonymous');
console.log(novel.writer)
novel.writer = "newAuthor";
console.log(novel.writer)

//Module
//syntax
//<script type="module" src="filename.js"></script>
//export and import
/*const add = (x, y) => {
	return x + y;
}
export {add} //the function will be exported for use in another file
//to import
import {add} from '.file_path and file name.js'; */

//JS Promise syntax
/*const myPromise = new Promise((resolve, reject) => {


//Completing the promise
const myPromise = new Promise((resolve, reject) => {
	if (condition) {
		resolve ("Promise fulfilled")
	} else {
		reject ("Promise rejected")
	}
}); 

//Handling a fulfilled Promise
myPromise.then(result => {
	
});

//Handling a rejected Promise
myPromise.catch(error => {
	
});
*/

var catName;
var quote;
function catTalk() {
	'use strict';
	catName = "Oliver";
	quote = catName + " says Meow";
}
let catResult = catTalk()
console.log(catResult)

const doubler = (item) => item * 2;
let constResult = doubler(10000)
console.log(constResult)

const incre = (number, value = 1) => number + value;
let increResult = incre(1);
console.log(increResult)

const sum = (...args) => {
	return args.reduce((a, b) => a + b, 5)
}
let reduceResult = sum(3, 4)
console.log(reduceResult)


// Assigning an object properties values with different names
const man = {
	Kolade: {
		age: 27,
		email: "kolade@koladevs.com"
	}
};
const {Kolade: {age: manAge, email: manEmail}} = man;
console.log(manAge, manEmail);

// Template literals aadvanced
const result = {
	success: ["max-length", "no-amd", "prefer-arrow-functions"],
	failure: ["no-var", "var-on-top", "linebreak"],
	skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
	"use strict";
	const failureItems = [];
	for (let i = 0; i < arr.length; i++) {
		failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
	};
	return failureItems;
}
const failureList = makeList(result.failure);
console.log(failureList)


// Object Literals
const createPerson = (name, age, gender) => {
	//"use strict";
	return {
		name,
		age,
		gender
	};
};
let createPersonResult = createPerson("Kolade", 27, "male")
console.log(createPersonResult);

//Writing concise declarative functions with ES6
// Before:
/*const person = {
	name: "Taylor",
	sayHello: function() {
		return `Hello! my name us ${this.name}.`;
	}
};*/
// With ES6
const parson = {
	name: "Taylor",
	sayHi() {
		return `Hello! My name is ${this.name}.`;
	}
};
parson.sayHi() 
console.log(parson) 

//Constructor function example
class Vegetable {
	constructor(name) {
		this.name = name;
	}
} 
const carrot = new Vegetable ("Carrot")
console.log(carrot.name);

//Getter and Setter Demo
class Thermostat {
	constructor(farenheit) {
		this.farenheit = farenheit;
	}

	get temperature() {
		return (5/9) * (this.fahrenheit - 32);
	}

	set temperature(celsius) {
		this.farenheit = (celsius * 9.0) / 5 + 32;
	}
}

const thermos = new Thermostat(76) //fahrenheit scale
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;