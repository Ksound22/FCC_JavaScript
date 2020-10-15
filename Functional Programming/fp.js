// Avoidong Mutations and side effects 
/*var fixedValue = 4;

function incrementer() {
	return fixedValue + 1;
}
let result = incrementer();
console.log(result); */

var fixedValue = 4;

function incrementer(fixedValue) {
	return fixedValue + 1;
}
let result = incrementer(4);
console.log(result); 


/* NOTE 
I wrote  the function depending on the global variable fixedValue first
I then passed an argument into the incrementer function

*/

//The map() method
 const users = [
	{ name: 'John', age: 34},
	{ name: 'Amy', age: 20},
	{ name: 'camperCat', age: 10}
];

const names = users.map(user => user.name);
const ages = users.map(user => user.age);
console.log(names);  
console.log(ages);

// Filter method
const nusers = [
	{ name: 'John', age: 34},
	{ name: 'Amy', age: 20},
	{ name: "camperCat", age: 10}
];
const usersU30 = nusers.filter(nusers => nusers.age < 30);
console.log(usersU30);

// Reduce method
const rusers = [
	{ name: 'John', age: 34},
	{ name: 'Amy', age: 20},
	{ name: "camperCat", age: 10}
];
const sumOfAges = rusers.reduce((sum, user) => sum + user.age, 0)
console.log(sumOfAges);

//How an object can be returned containing the names of the users
//as properties with their ages as values
const ser = [
	{name: 'John', age: 34},
	{name: 'Amy', age: 20},
	{name: 'camoerCat', age: 10}
];

const serObj = ser.reduce((obj, ser) => {
	obj[ser.name] = ser.age;
	return obj;
}, {});
console.log(serObj);

// Split method
// Makes it easy to work with strings since they are immutable
const str = "Hello World";
const bySpace = str.split(" ")
console.log(bySpace);

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
console.log(byDigits);   

function splitify(str) {
	return str.split(/\W/)
}
let splitResult = splitify("Hello World,I-am code")
console.log(splitResult)

// Join Method
var arr = ["Hello", "World"];
var strr = arr.join(" ");
console.log(strr) 

function sentensify(str) {
	return str.split(/\W/).join(" ")
}
let sentence = sentensify("May-the-force-be-with-you");
console.log(sentence);

// Converting a string to URL slug 
var globalTitle = "Winter Is Coming";

function urlSlug(title) {
	return title
		.split(/\W/)
		.filter(obj => {
			return obj !== "";
		})
		.join("-")
		.toLowerCase();
}
var winterIsComing = urlSlug(globalTitle);
console.log(winterIsComing);

// Every Method
function checkPositive(arr) {
	return arr.every(function(num){
		return num > 0;
	})
}
let pResult = checkPositive([1, 2, 3, 4, 5]);
console.log(pResult);

// Some method
function checkPositiv(arr) {
	return arr.some(function(value){
		return value > 0;
	})
}
let sResult = checkPositiv([1, 2, 3, 4, 5]);
console.log(pResult);