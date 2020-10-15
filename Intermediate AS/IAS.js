//To sum up the total numbers within a range
function sumAll(arr) {
	var max = Math.max(arr[0], arr[1]);
	//this finds the maximum number within a range
	var min = Math.min(arr[0], arr[1]);
	//this finds the maximum number within a range
	var temp = 0;
	for(var i = min; i <= max; i++) {
		temp += i;
	}
	return temp;
}
let result = sumAll([1, 4]);
console.log(result); //returns 10

// Comparing two arrays and returning only items found in the two
function diffArray(arr1, arr2) {
	return [...diff(arr1, arr2), ...diff(arr2, arr1)];

	function diff(a, b) {
		return a.filter(item => b.indexOf(item) === -1);
	}
}
let diffResult = diffArray([5, 7, 6], [5, 6])
console.log(diffResult);

//Converting a string to spinal case
//spinal case is all lower-case-words-joined-by-hyphen
function spinalCase(str) {
	str = str.replace(/([a-z])(A-Z)/g, "$1 $2");
		return str
		.toLowerCase()
		.split(/(?:_| )+/)
		.join("-");
}
let spinalResult = spinalCase("This is the spinal case");
console.log(spinalResult);

//DNA Pairing
function pairElement(str) {
	var pairs = {
		A: "T",
		T: "A",
		C: "G",
		G: "C"
	};
	var arr = str.split("");
	return arr.map(x => [x, pairs[x]]);
}
let DNAResult = pairElement("GTCA"); 
console.log(DNAResult);

