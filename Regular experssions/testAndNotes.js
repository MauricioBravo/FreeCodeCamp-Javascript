//**** Buscar palabras en común, con match o test.  ****
// regex= regular expresion a buscar
    "Hello, World!".match(/Hello/);
    let ourStr = "Regular expressions";
    let ourRegex = /expressions/;
    ourStr.match(ourRegex);
    //Here the first match would return ["Hello"] and the second would return ["expressions"].

    //Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

    'string'.match(/regex/);
    /regex/.test('string');

// EXCERCISE
    //Apply the .match() method to extract the string coding.

    let extractStr = "Extract the word 'coding' from this string.";
    let codingRegex = /coding/; // Change this line
    // let result = extractStr.match(codingRegex); // Change this line

// IF MATCHS ARE MORE THAN ONE

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // g flag for both coincidences
// let result = twinkleStar.match(starRegex); // esto guarda en result algo como ["Twinkle", "twinkle"]


let difficultSpelling = "Mississippi";
// let myRegex = /s+/g; // Change this line
// let result = difficultSpelling.match(myRegex);
// console.log(result);

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
console.log(result);




function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // Expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // Expected output: 0
  
  console.log(Math.random());
  // Expected output: a number from 0 to <1
  

/*
Usernames can only use alpha-numeric characters.
The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
Username letters can be lowercase and uppercase.
Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/
let username = "JackOfAllTrades";
let userCheck =/^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);
/*Code Explanation

^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input
*/