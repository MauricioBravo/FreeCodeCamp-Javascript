/*

let printNumTwo2;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo2 = function() {
      return i;
    };
  }
}
console.log(printNumTwo2());
console.log(i);
*/


/************  Diferencia entre LET y VAR *********** */
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      console.log(i);
      return i;
    };
  }
}
console.log(printNumTwo());

let printNumTwo2;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo2 = function() {
      return i;
    };
  }
}
console.log(printNumTwo2());
console.log(i);

// Here the console will display the values [0, 1, 2] and 3.

const s = [5, 6, 7];
// s = [1, 2, 3];
s[2] = 45;
s[0]=1;
s[1]=2;
s[2]=3;
console.log(s);

const doubler = (item) => item * 2;
doubler(4);
console.log(doubler(4));

console.log(doubler(6));



const faltan = 152;
const hechos = 142;
const totales = faltan + hechos;
const porcentajeAvanzado = (hechos*100)/totales;
console.log(totales);
console.log(porcentajeAvanzado);
