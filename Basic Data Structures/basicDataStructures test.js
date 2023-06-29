function forecast(arr) {
    // Only change code below this line
    console.log(arr.slice(2,4));
    var arr2 = arr.slice(2,2);
    console.log(arr.slice(2,2));
    return arr2;
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));



  // Copy an Array with the Spread Operator

  function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr=[...arr];
    console.log(newArr);
    num--;
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));