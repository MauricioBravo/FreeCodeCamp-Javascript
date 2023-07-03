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
    newArr.push([...arr]);
    console.log(newArr);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));blob:file:///fc2589cb-04e7-4489-b3d9-67f85653c6f6



// INDEXOF PARA BUSCAR EN ARREGLO COINCIDENCIAS

function quickCheck(arr, elem) {
    // Only change code below this line
    console.log(arr.indexOf(elem));
    if(arr.indexOf(elem)>=0){
        return true;
    }
    else return false;
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
  console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
  console.log(quickCheck(["onions", "squash", "shallots"], "onions"));