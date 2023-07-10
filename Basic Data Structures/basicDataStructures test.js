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




  let arr2 = [2,3,4];
  let newArr2 =[];
arr2.splice(1,0,[]);
console.log(arr2);

//ELIMINAR ARRAY CON VALOR EN COMÚN 

function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for(let i=0;i<arr.length;i++){
          if(arr[i].indexOf(elem)==-1){
           newArr.push(arr[i]);
           console.log(newArr);
          }
        }
      
    // Only change code above this line
    return newArr;
  }
  

  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)); //[[10, 8, 3], [14, 6, 23]]
console.log(filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter"));
//[["amy", "beth", "sam"]]



const refrigerator = {
    'milk': 1,
    'eggs': 12,
  };
  
  for (const food in refrigerator) {
    console.log(food, refrigerator[food]);
    console.log(food);
  }

  const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Only change code below this line
    var counter=0;
    for (const usr in allUsers){
        console.log(allUsers[usr]);
        console.log(allUsers[usr].online);
      if(allUsers[usr].online == true ) {
        counter=counter +1;
      }
      
    }
    return counter;
    // Only change code above this line
  }
  
  console.log(countOnline(users));