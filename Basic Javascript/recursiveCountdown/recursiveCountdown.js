function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5));

console.log("esto antes");

  function countup2(n) {
    if (n > 5) {
      return [];
    } else {
      const countArray = countup2(n + 1);
      countArray.push(n);
      console.log("hola" + n);
      return countArray;
    }
  }
  console.log(countup2(1));



  function countdown(n){
    const start=0;
    if(n == start){
      return[];
    }else{
      const array = countdown (n-1);
      array.push(n);
      return array;
    }
  }
  console.log(countdown(10));