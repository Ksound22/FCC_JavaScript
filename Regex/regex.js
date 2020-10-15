let testStr = "freeCodeCamp";
let testRegex = /Code/
console.log(testRegex.test(testStr))

//Matching a literal string with different possibilities
let petString = "Kay has a pet cat";
let petRegex = /dog|cat|rat/;
let result = petRegex.test(petString)
console.log(result) 

//Ignoring case
let str = "freecodecamp";
let fccRegex = /freecodecamp/i;
let rest = fccRegex.test(str)
console.log(rest);

//Extracting matches
let ourStr = "Regular expressions";
let myReg = /expressions/;
console.log(ourStr.match(myReg));


//The g flag in action(for extracting a pattern more than once)
let dStr = "Repeat Repeat Repeat"
let repeatRegex = /Repeat/g
console.log(dStr.match(repeatRegex))

//Using wildcard period
let humStr ="I'll hum a song"
let hugStr = "Bear hug"
let huRegex = /hu./
console.log(huRegex.test(humStr));  

//Matching a particular string with character classes
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
console.log(bigStr.match(bgRegex));
console.log(bagStr.match(bgRegex));

//Matching letters of the alphabet
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bRegex = /[a-e]at/;
console.log(matStr.match(bRegex)) //null

//Matching numbers letters of the alphabet
let kayStr = "kay229784618";
let mRegex = /[a-z0-9]/ig //matches all the letters and numbers
console.log(kayStr.match(mRegex));

//To match characters that occur one or more times
let river = "Mississipi";
let rRegex = /s+/gi
let rResult = river.match(rRegex)
console.log(rResult)

//To match characters that occur zero or more times
let soccer = "gooooooal";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
let ball = soccer.match(goRegex);
let dball = gPhrase.match(goRegex);
console.log(ball);
console.log(dball);

//Lazy matching
let tobi = "Titanic";
let tRegex = /t[a-z]*?c/
let tResult = tobi.match(tRegex);
console.log(tResult) 

//Matching the first string in a sentence/pattern
let firstString = "Kolade is a JS programmer";
let firstRegex = /^Kolade/;
let kay = firstRegex.test(firstString);
console.log(kay);

//Matching the ending string
let first1 = "Kolade is a JS programmer";
let firstRe = /programmer$/;
let kays = firstRe.test(first1);
console.log(kays);

//MAtching all letters and numbers
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/; //the shorthand of the value of longHand variable in Regex
let nums = "42";
let varNames = "Kolade is growing in knowledge day by day";
var dnum = longHand.test(nums)
console.log(dnum)


//using regex to validate usernames
/*common rules
1.	Usernames can only use alpha-numeric characters
2.	The number(s) have(has) to be at the end, usernames can't start with numbers
3. 	Username letters can be lowercase or uppercase
4.	Usernames have to be at least, two characters long
	and the two must be letters only
*/
let username = "Ksound22";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; 
let userResult = userCheck.test(username) 
console.log(userResult)

//Matching white spaces
let whiteSpace = "Whitespace. whitespace everywhere!";
let spaceRegex = /\s/g;
var dspace = whiteSpace.match(spaceRegex);
console.log(dspace);

//Matching  non-white spaces
let noSpace = "Whitespace. whitespace everywhere!";
let noSpaceRegex = /\S/g;
var nspace = noSpace.match(noSpaceRegex).length; 
console.log(nspace);

//Quantity Specifiers
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
let fourAs = multipleA.test(A4)
console.log(fourAs);

//specifying exact number of matches
let a4 = "aaaah";
let a2 = "aah";
let multiplea = /a{3}h/;
let fouras = multiplea.test(A4)
console.log(fouras);

//Checking for all or none
let american = "color";
let british = "colour";
let amebri = /colou?r/
let briame = amebri.test(american)
let us = amebri.test(british)
console.log(briame);
console.log(us);

//Lookaheads
let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/; 
let loser = quit.match(quRegex);
let winner = noquit.match(qRegex);
console.log(loser);
console.log(winner);

// Using lookaheads to validate password
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
let pass = checkPass.test(password);
console.log(pass);

//Checking for mixed group of words
let mixed = "Pumpkin";
let testMix = /P(engu|umpk)in/;
var dmix = testMix.test(mixed);
console.log(dmix);

//Reuse patterns with capture groups
let repeatStr = "regex regex";
let repitRegex = /(\w+)\s\1/ //matches any word that occurs twice separated by space
let retest = repitRegex.test(repeatStr)
let rematch = repeatStr.match(repitRegex)
console.log(retest);
console.log(rematch); 

// capture groups to search and replace
let wrong = "The sky is orange";
let orangeRegex = /orange/
let novel = wrong.replace(orangeRegex, "blue")
console.log(novel);

//Trimming 
let mye = "     Kolade     "
console.log(mye.trim());  


// Freestyling
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig
let anRresult = quoteSample.match(myRegex);
console.log(anRresult)

// Setting xters not to match
let dMatch = "3 blind mice";
let unRegex = /[^aeiou^0-9]/gi
let unResult = dMatch.match(unRegex)
console.log(unResult)

// Specify lower number of matches
let Aa4 = "haaaah";
let Aa2 = "haah";
let A100 = "h" + "a" .repeat(100) + "h";
let multipleaA = /ha{3,}h/;
let multiA = multipleA.test(A4);
let multiA2 = multipleA.test(A2);
let multiA3 = multipleA.test(A100);
console.log(multiA);
console.log(multiA2);
console.log(multiA3);

// Remove whitespace with Regex
let hello = "     Hello World!     ";
let rWhiteSpace = /^\s+|\s+$/g;
let rWhiteSpaceResult = hello.replace(rWhiteSpace, "");
console.log(rWhiteSpaceResult);

let movie = "2001 Odyssey";
let movieRegex = /\d/g;
let movieRegexResult = movie.match(myRegex)
console.log(movieRegexResult)