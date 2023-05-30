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
    let result = extractStr.match(codingRegex); // Change this line