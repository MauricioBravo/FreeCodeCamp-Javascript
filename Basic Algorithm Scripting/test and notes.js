function factorialize(num) {
    console.log(num);
    if(num == 0 || num == 1){
        return 1;
    }else{
        return num*factorialize(num -1);
    }
   }
   
   factorialize(5);


   function findLongestWordLength(str) {
    
    console.log(str.length);
    var currentLength=0;
    var longestLength=0;

    for(let i=0;i<str.length;i++){
        if(str[i]===" "){
            console.log(str[i]);
            if(currentLength>longestLength){
                longestLength = currentLength;
            }
            currentLength = 0;
        }
        else{
            currentLength = currentLength +1;
        }
        if (currentLength > longestLength) {
            longestLength = currentLength;
          }

    }
    console.log(longestLength);
    return longestLength;
  }
  
   findLongestWordLength("The quick brown fox jumped over the lazy dog");
  findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"); //should return 19.



  