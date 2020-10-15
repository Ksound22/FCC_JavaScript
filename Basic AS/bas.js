// alert(`Hello world`)

//converting celsius to fahrenheit 
function convertToF(celsius) {
	let fahrenheit;
	return fahrenheit = celsius * (9 / 5) + 32;
	/*if (typeof fahrenheit !== "undefined") {
		return fahrenheit;
	} else {
		return "fahrenheit not defined";
	} */
}
let result = convertToF(100)
console.log(result); 

//converting fahrenheit to celsius
function convertToC(fahrenheit) {
	let celsius;
	return celsius = (fahrenheit - 32) * 5 / 9;
}
let fresult = convertToC(212) 
console.log(fresult)


//Removing falsy values from an array
function bouncer(arr) {
	return arr.filter(Boolean);
}
let bresult = bouncer([7, "ate", "", false, 9])
console.log(bresult)
