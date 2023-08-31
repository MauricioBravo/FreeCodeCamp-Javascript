function repeatStringNumTimes(str, num) {
  var finalStr=str;
    for(let i=0;i<num-1;i++){
    
      finalStr+=str;
      console.log(finalStr);
    }
    
  
    if (num=="" || num == 0 || num <0){
        finalStr ="";
        return finalStr;
    }
    return finalStr;
  }
  
//   repeatStringNumTimes("abc", 3);
console.log(repeatStringNumTimes("abc", 3));
