//**** Use Destructuring Assignment to Assign Variables from Arrays ****
let a = 8, b = 6;
[a,b] = [b,a];


//   Destructuring via rest elements

const [c, d, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(c, d);
console.log(arr);



let objetivo = 294;
let avance =127 ;
let porcentaje = (avance*100)/objetivo;
console.log(porcentaje);

const person = {
    name: "Zodiac Hasbro",
    age: 56
  };
  
  const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;
  
  console.log(greeting);

  
/*      Create Strings using Template Literals        */

  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    //const failureItems = [i] =;
    const failureItems=[];
      for(let i = 0; i<3;i++){
      failureItems [i] = `<li class="text-warning">${result.failure[i]}</li>`;
      }
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  console.log(failuresList);
/*
  [
    '<li class="text-warning">no-var</li>',
    '<li class="text-warning">var-on-top</li>',
    '<li class="text-warning">linebreak</li>'
  ]
  */
