
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }

function fibonacci (numero) {
    if (numero <= 1) return numero;
    return fibonacci (numero - 1) + fibonacci (numero - 2);
}
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5)); // 5
console.log(fib(6)); 
console.log(fib(7)); // 13
console.log(fib(8));
console.log(fib(9));
console.log(fib(15)); // de 77 es : 5527939700884757

const factorial = n => {                    //return 1;
    if(n <= 1) return 1                     //return 2 * factorial(1);
    return n * factorial(n - 1);            //return 3 * factorial(2);
}
console.log(factorial(3));
console.log(factorial(100));





