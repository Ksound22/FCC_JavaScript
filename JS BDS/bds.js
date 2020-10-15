// alert(`Hello World`)

// Simple Array
let simpleArray = ["Kolade", 27, "Married", false];
console.log(simpleArray.length);  //5

// Complex array
let complexArray = [ 
[{
	one: 1,
	two: 2
},
{
	three: 3,
	four: 4
}
],   
[{
	a: "a",
	b: "b"
},
{
	c: "c",
	d: "d"
}
] 
];  
console.log(complexArray.length) //2

//accessing an array using bracket notation
let myArray = ["a", "b", "c"];
let set = myArray[0] 
console.log(set)//returns a
let oneReset = myArray[1] = "not 'b' anymore";
console.log(myArray);

//Manipulating arrays with .push() and .unshift()
let players = ["Ngolo", "Brakley", "Rudiger", "Kepa"];
let newPlayers = players.push("Kai", "Werner", "Ziyech");
let oldPlayers = players.unshift("Big Pete");
console.log(players);

//Manipulating arrays with .pop() and .shift()
let greetings = ["Whats up", "E kaaro", "E kaasan", "E kaale", "hello"];
let yorubaGreetings = greetings.pop();
let completeYorubaGreetings = greetings.shift();
console.log(greetings); 

//Manipulating arrays with .splice() 
let allArrays = ["today", "was", "not", "so", "great"];
allArrays.splice(2, 2);
console.log(allArrays);

let anotherAllarrays = ["Chelsea", "is", "bad", "and", "good"];
anotherAllarrays.splice(2, 2);
console.log(anotherAllarrays); 

let array = ["I", "am", "feeling", "really", "happy"]
array.splice(3,2, "shy") //splice takes three parameters, the third is the new element to add
console.log(array);		 //Here, shy has bee added

//Manipulating arrays with .slice() 
let theArray = ["I", "am", "not", "watching", "the", "match", "naa"];
let sliced = theArray.slice(0,6);
console.log(sliced); 

let planet = ["Earth", "and", "Jupiter", "are", "not", "the", "only", "planets"]
let cut = planet.slice(0, 3); 
console.log(cut); 

// combining arrays with spread operator
let rArray = ["Kolade Chris Ksound"];
let cArray = [...rArray, "will", "be", "an", "efficient", "frontend dev"]
console.log(cArray);

//checking for the position of an element in an array with indexOf();
function quick(arr, elem) {
	return arr.indexOf(5)
}
console.log(quick([2, 4, 5]))

let arrayInd = ["Kolade", "Ayobami", "Twinny"]
let pos = arrayInd.indexOf("Kolade");
console.log(pos)

//Kinda complex Example from FCC
function quickCheck(arr, elem) {
	//return arr.indexOf("onions") //returns 1
	return arr.indexOf(elem) >= 0 ? true : false; //returns false cause elem was not passed
}
console.log(quickCheck(["squash", "onions", "shallots", "mushrooms"]))

//Iterating through an array with for loops
function greaterThanTen(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] > 10) {
			newArr.push(arr[i]);  
		}
	}
	return newArr;
}
let gresult = greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
console.log(gresult) //returns numbers greater than 10

function lessThanTen(arr) {
	let oldArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 10) {
			oldArr.push(arr[i]);
		}
	}
	return oldArr;
}
let lessResult = lessThanTen([3, 4, 78, 54, 2, 19]);
console.log(lessResult);

//FCC challenge 
/*We have defined an a function filteredArray, 
which takes arr, a nested array, and elem, as arguments, 
and returns a new array. elem represents 
an element that may or may not be present on one 
or more of the arrays nested within arr.
Modify the function, using a for loop, 
to return a filtered version of the passed array such that 
any array nested within arr containing elem has been removed
Code: 
function filteredArray(arr, elem) {
	let newArr = [];
	//

	//
	return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)
*/
function filteredArray (arr, elem) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].indexOf(elem) == -1) {
			newArr.push(arr[i]);
		}
	}
	return newArr
}
let fresult = filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)
console.log(fresult)

//Complex Multi-dimensional array from FCC
let nestedArray = [ // top, or first level - the outer most array
  ['deep'], // an array within an array, 2 levels of depth
  [
    ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
  ],
  [
    [
      ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
    ],
    [
      [
        ['deepest-est?'] // an array nested 5 levels deep
      ]
    ]
  ]
];

console.log(nestedArray[2][1][0][0][0]);
// logs: deepest-est?

nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]); 
// now logs: deeper still

//JS Objects
const tekkenCharacter = {
	player: "Hwoarang",
	fightingStyle: "Tae Kwon Doe",
	human: true
}; 
tekkenCharacter.origin = "South Korea";
console.log(tekkenCharacter);
tekkenCharacter["hair color"] = "dyed orange";
console.log(tekkenCharacter);
const eyes = "eye color"; 
tekkenCharacter[eyes] = "brown"; //adds variable eye color to the keys
console.log(tekkenCharacter);


//complex object
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};

nestedObject.data.onlineStatus.busy = 10;
console.log(nestedObject)
//To check if an object has a particular property
console.log(nestedObject.hasOwnProperty('date'));

//Complex hasOwnProperty
let users = {
	Alan: {
		age: 27,
		online: true
	},
	Jeff: {
		age: 32,
		online: true
	},
	Sarah: {
		age: 48,
		online: true
	},
	Ryan: {
		age: 19,
		online: true
	}
};
function isEveryoneHere(obj) {
	if (
		obj.hasOwnProperty("Alan") &&
		obj.hasOwnProperty("Jeff") &&
		obj.hasOwnProperty("Sarah") &&
		obj.hasOwnProperty("Ryan") 
		) {
		return true;
	}
	return false;
}
console.log(isEveryoneHere(users))

//for...in
/*let users = {
	Alan: {
		age: 27,
		online: true
	},
	Jeff: {
		age: 32,
		online: true
	},
	Sarah: {
		age: 48,
		online: true
	},
	Ryan: {
		age: 19,
		online: true
	}
}
for (let user in users) {
	console.log(user)
}
*/

// Object.keys()
let peeps = {
	Alan: {
		age: 27,
		online: true
	},
	Jeff: {
		age: 32,
		online: true
	},
	Sarah: {
		age: 48,
		online: true
	},
	Ryan: {
		age: 19,
		online: true
	}
};
function getArrayOfPeople (obj) {
	return Object.keys(obj)
}
console.log(getArrayOfPeople(peeps));
//Object.keys() simply return the keys(properties of an array).

//Modifying an array stored in an object
let user = {
	name: "Kenneth",
	age: 28,
	data: {
		username: "KenethCodesAllDay",
		joinDate: "March 26, 2016",
		organisation: "freeCodeCamp",
		friends: [
			"sam",
			"Kira",
			"Tomo"
		],
		location: {
			city: "San Francisco",
			state: "CA",
			country: "USA"
		}
	}
};
//Fnish writing so that it takes a user objec and adds the name
// of the friend argument to the array stored in 
//user.data.friends and return that array.
function addFriend(userObj, friend) {
	userObj.data.friends.push(friend);
	return userObj.data.friends;
}
console.log(addFriend(user, "Kolade, Ene"))
//The function has added one more element to the list of element in the friend array
let foods = {
	apples: 25,
	oranges: 32,
	plums: 28,
	bananas: 13
};
delete foods.apples;

function checkInventory(scannedItem) {
	return foods[scannedItem];
}
console.log(checkInventory("apples")); //Undefined due to delete keyword used
