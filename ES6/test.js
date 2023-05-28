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


