

function confirmEnding(str, target) {
  
    let targetLenth=target.length;
    console.log(targetLenth);
// quizá crear una funcion que revise letra por letra la comparación del final del str con el de target
    let length=str.length-1;
    console.log(length);

    if(str[length]==target){
      return true;
    }
        else{
            return false;
        }

  }
  
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
