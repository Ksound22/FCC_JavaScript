console.log(`Hello World`)

//Rounding to the nearest whole nummber
console.log(5/2);

//Rounding to the nearest whole nummber
console.log(Math.floor(5/2));


//Compound Assignment
var myVar = 0;
myVar += 5;
console.log(myVar);

// Using assignment operator to assign a variable
var theVar
theVar = 5;
var theNum
theNum = theVar;
console.log(theNum);

//escape characters
var sample = "Bright said \"Kolade is enjoying learning JS.\"";
console.log(sample); 

var sam = "Kolade";
console.log(sam) 

//concatenating with assignment operator
var first = "I came first.";
first += " I no dey come last.";
console.log(first)

//finding the index of a letter
var firstName = "Kolade";
var lastLetter = firstName[firstName.length - 1]
console.log(lastLetter)

var nickName = "Ksound";
var secondToLast = nickName[nickName.length - 2]
console.log(secondToLast);   

//Array .push method
var bea = [2, 4, 5, 4];
var bear = bea.push(7);
console.log(bea);
console.log(bear); //outputs the length and not the array


//functions
function myFunc () {
	return console.log("Hello World")
}
myFunc();

function args (num1, num2) { 
	console.log(num1 + num2)
} 
args(1, 2);

function test() {
	var loc = "foo";
	console.log(loc);
} 
test();  

var sum = 0;
function addSum(num) {
	sum = sum + num;
}
addSum(3); 
console.log(sum)


var processed = 0;

function processArg(num) {
	return (num + 3) / 5; 
}
var processed = processArg(7)
console.log(processed) 

//Conditional If Statements
function test(myCondition) {
	if (myCondition) {
		return "Its true";
	}
	return "Its false";
}   
console.log(test(true))
console.log(test(false)) 


console.log("true" === "love"); 



function testGreaterOrEqual(val) {
	if (val >= 20){
		return "Its greater than 20";
	}
	if (val >= 10) {
		return "Its greater than 10";
	}
	return "Its less than 10";
}
console.log(testGreaterOrEqual(9))    


function testLessThan(val) {
	if(val < 15) {  
		return "It is less than 15"
	}
 	return "it is not less than 15"
}
console.log(testLessThan(16));


//Comparison with Logical And && Operator
function checkIf(num) {
if (num > 5) {
	if (num > 10) {
		return "Yes"
	}
}
return "No";
}
console.log(checkIf(6)); 

//OR

function checkIfAgain(num) {
	if (num > 5 && num < 10) {
		return "Num is greater than 5"
	}
	return "Num is not greater than 5"
}
console.log(checkIfAgain(4)); 

//Comparison Logical Or || OPerator 
function checkOr(num) {
	if (num > 5) {
		if (num < 10) {
			return "Yes, num is greater than 5";
		}
	}
	return "No, num is less than 5"
}
console.log(checkOr(4));

//OR

function checkOrAgain(num) {
	if (num > 5 || mum < 10) {
		return "Yes, num is greater than 5";
	}
	return "No, num is less than 5"
}
console.log(checkOrAgain(7));

//Else if
function elseIf(val) {
	if (val > 10) {
		return "Greater than 10";
	} else if (val < 5) {
		return "Smaller than 5"
	} else { 
		return "Between 5 and 10"
	}
}
console.log(elseIf(7));

//Multiple Identical options in switch statements
function multipleSwitch (val) {
	var answer = ""
	switch(val) {
		case 1:
		case 2:
		case 3:
		return "Low";  
		break;
		case 4:
		case 5:
		case 6:
		return "Mid";
		break;
		case 7:
		case 8:
		case 9:
		return "High"
		default:
		return "Not within"  
	}
}
console.log(multipleSwitch(0))


function myFun() {
	console.log("Hello");
	return "World";
	console.log("Bye")
}
myFun();

//card counting function
let count = 0;
function cc(card) {
	switch (card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		count++;
		break;
		case 10:
		case "J":
		case "Q":
		case "K":
		case "A":
		count--;
		break;
	}
	if (count > 0) {
		return count + " Bet";
	} else {
		return count + " Hold"; 
	}
}
cc(2); cc(3); cc(7); cc("K"); cc("A");


//JS Objects
//Objects are similar to arrays, but they are enclosed by curly braces instead of square brackets
var testObj = {
	hat: "ballcap",
	"shirt": "Chelsea jersey",
	shoes: "cleats",
}; 
//accessing 
var hatValue = testObj.hat;
var shirtValue = testObj["shirt"];
console.log(shirtValue); //returns Chelsea jersey
console.log(hatValue); //returns ballcap!

//accessing objects properties with variables
var dogs = {
	Fido: "Mutt",
	Hunter: "Dobberman",
	Snoopie: "Beagle"
};
var myDog = "Hunter"; 
var myBreed = dogs[myDog];
console.log(myBreed);
//Here, the myDog variable was set to the second property, then
//the variable was used to look up the value of the hunter property
//and assigned to the myBreed variable. 

//Updating Object properties
var ourDog = {
	"name": "Camper",
	"legs": 4,
	"tails": 1,
	"friends": ["Everything"]
};
//updating the name
ourDog.name = "Happy Camper";
ourDog["friends"] = "Everybody";
console.log(ourDog.name);
console.log(ourDog["friends"]);
delete ourDog.legs
console.log(ourDog);

//using arrays for lookup
var alpha = {
	1: "Z",
	2: "Y",
	3: "X",
	4: "W",
	24: "C",
	25: "B",
	26: "A"
};
alpha[2]; //Y
var value = 2;
console.log(alpha[value]);

//Checking whether an object has a certain property
/*var myObj = {
	top: "hat",
	bottom: "pants"
};
console.log(myObj.hasOwnProperty(top));

function checkObj(obj, checkProp) {
	if(obj.hasOwnProperty(checkProp)) {
		return obj[checkProp];
	} else {
		return "Not Found";
	}
}
console.log(checkObj()) */


//nested objects
var myStorage = {
	"car": {
		"inside": {
			"glove box": "maps",
			"passenger seat": "crumbs"
		},
		"outside": {
			"trunk": "jack" 
		}
	} 
}
//accessing the nested object
var nest = myStorage.car.outside.trunk
console.log(nest);

//JS Loops
var i = 0;
while (i < 2) {
	i++;
	console.log(i);
};

var num = 0
while (num < 2) { 
	num++;
	console.log("Number " + num)
}

//for loop
for (i = 0; i < 2; i++) {
	console.log("Num " + i);
} 


var ourArray = [];
for (var i = 0; i < 5; i++) {
	ourArray.push(i);
	console.log(ourArray);
};

//iterating even numbers with for loop
for (i = 0; i < 10; i += 2) {
	console.log("even " + i)
}; //returns the even numbers up to 10

//iterating odd numbers with for loop
for (i = 1; i < 10; i += 2) {
	console.log("odd " + i);
}; 
 
//iterating backward counting with for loop
//we need to change everything to the opposite
for (i = 10; i > 0; i -= 2) {
	console.log("backward even " + i) 
};  

//to count odd numbers backward
for (i = 9; i > 0; i -= 2) {
	console.log("backward odd " + i) 
};  

//iterating through an array with a loop
var myArr = [1, 2, 3, 5,  7];
for(i = 0; i < myArr.length; i++) {
	console.log(myArr[i]);  //prints the array to the console one by one 
};

//Nesting for loops
var arr = [
[1, 2], [3, 4], [5, 6]
];
for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr[i].length; j++){
		console.log(arr[i][j]);
	}; 
};

//Do while loop
var ourArray = [];
var i = 0;
do {
	ourArray.push(i);
	i++;
	console.log("Do " + i)
} while (i < 5);


//Do while will always run once no matter what
var myArr = [];
var i = 5;
do {
	myArr.push(i);
	i++; 
	console.log("unco " + i)
} while (i < 5);


//To generate a random number between 0 and 1
function random() {
	return Math.random()
}
var rs = random(); 
console.log(rs)  

console.log(Math.floor(Math.random() * 8));    
//returns a whole number because Math.floor rounds the num to the nearest whole number

//To generate a random whole number within a certain range
function randomRange(myMin, myMax) {
	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
} 
var ranum = randomRange(6, 8);
console.log(ranum) //outputs 8, 7 or 6

//TO convert a string to a number  
var int = parseInt("19");
console.log(int);  

//radix, signifying base
function convert(str) {
	return parseInt(str, 2)
}
var con = convert("1011")
console.log(con); //returns 11

//Ternary operator
function greater(a, b) {
	return a > b ? "5 is greater" : "2 is greater";
}
var great = greater(5, 2) 
console.log(great); 

//Multiple Ternary Operator
function eq(a, b) {
	return (a === b) ? "and b are equal" 
	: (a > b) ? "a is greater"
	: "b is greater";
}
var equ = eq(5, 5)
console.log(equ)  //outputs a and b are equal


//ES6
//let and var
let catName;
let quote; 
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
console.log(quote); 

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

const greetin = (name = "Anonymous") => "Hello " + name;
greeting()
console.log(greeting); // Hello John

//Rest
function howMany(...args) { 
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.

//spread
const arr = [6, 89, 3, 45];
const maximus = Math.max(...ar); // returns 89 */
var c = "freeCodeCamp";
var d = c[c.length - 1];
console.log(d); 

// The if statement syntax
function eqTest(a, b) {
	if (a === b) {
		return "Equal"
	}
	return "Hell no"
}
let eqResult = eqTest(10, '10')
console.log(eqResult);

function foo(x) {
	if(x < 1) {
		return "Less than one";
	} else if (x < 2) {
		return "Less than two";
	} else {
		return "Greater than or equal to two"
	}
}
let fooResult = foo(0)
console.log(fooResult);

function bar(x) {
	if(x < 2) {
		return "Less than two";
	} else if (x < 1) {
		return "Less than one";
	} else {
		return "Greater than or equal to two"
	}
}
let barResult = bar(0)
console.log(barResult);

function myFunc() {
	console.log("Hello");
	return "World"
}
myFunc();


var ourArray = [];
var i = 0;
while (i < 5) { 
	ourArray.push(i)
	i++;
console.log(ourArray);
}; 

// Descending order
var myArray = [];
var i = 4;
while (i >= 0) {
	myArray.push(i)
	i--;
	console.log(myArray)
}; 

for (var i = 0; i < 7; i++) {
	console.log("My number: " + i)
};

//To count in even numbers
for (i = 0; i < 10; i+=2) {
	console.log("Even Number: " + i)
}; 

// To count in odd numbers
for (i = 1; i < 10; i+=2) {
	console.log("Odd Number: " + i)
}; 

//To count backward
for (i = 10; i > 0; i--) {
	console.log("Backward Number: " + i)
}; 


//To count backward in two, with odd numbers
for (i = 9; i > 0; i-=2) {
	console.log("Backward Odd Number: " + i)
}; 

//To count backward in two, with even numbers
for (i = 12; i > 0; i-=2) {
	console.log("Backward Even Number: " + i)
}; 

var myArr = [2, 3, 4, 5, 6];
var total = 0;
for (i =0; i < myArr.length; i++) {
	total += myArr[i];
	console.log(total) 
}; 

function multiplyAll(arr) {
	var product = 1;
	for (i = 0; i < arr.length; i++) {
		for (j = 0; j < arr[i].length; j++) {
			product = product * arr[i][j];
		}
	}
	return product;
}
let proResult = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(proResult); //5040

//Do...while
var ourArray = [];
var i = 0;
do {
	ourArray.push(i)
	i++;
	console.log("Do " + i)
} while (i < 5) 


var ourArray = [];
var i = 0;
while (i < 5) {
	ourArray.push(i)
	i++;
	console.log("While " + i)
};  

var i = 0;
while (i < 7) {
	i++;
	console.log("Conv: " + i)
};

function randomFraction() {
	return Math.random();
} 
let randomResult = randomFraction();
console.log(randomResult); 

function randomWholeNum() {
	return Math.floor(Math.random() * 10) 
}
let whole = randomWholeNum()
console.log(whole);

function aRandomRange (myMin, myMax) {
	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
} 
let dReal = aRandomRange(34, 34); 
console.log(dReal);

function checkEq(a, b) {
	return a == b ? "Equal" : "Not equal"
}
let eqRst = checkEq(2, 2)
console.log(eqRst);

function checkPos(num) {
	return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"
}
let checkPosResult = checkPos(10)
console.log(checkPosResult);

// USing recursion to create a counter
function countUp(n) {
	if(n < 1) {
		return [];
	} else {
		const countArray = countUp(n - 1);
		countArray.push(n);
		return countArray;
	}
}
console.log(countUp(5));

// USing recursion to create a range
function rangeOfNumbers(startNum, endNum) {
	return startNum === endNum
	? [startNum]
	: [...rangeOfNumbers(startNum, endNum - 1), endNum];
};
console.log(rangeOfNumbers(2, 20));