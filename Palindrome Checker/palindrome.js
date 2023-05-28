
function palindrome(str) {

    let string = str.toLowerCase();

    const stringCorrected = string.replace(/[^a-zA-Z0-9]/g, '');
    console.log(checkEqualityState(stringCorrected));
    return checkEqualityState(stringCorrected);
}


//están mal los bucles for porque esto se usa para revisar arreglos no una palabra con otra, es decir por cada vez que funciona el primer for 
//el segundo anda el largo de veces de la palabra, lo cual está mal.
function checkEqualityState(stringCorrected){
    let status = true;
    let j= stringCorrected.length-1;
    for(let i=0; i<stringCorrected.length; i++){

            if(stringCorrected[i]!=stringCorrected[j]){
                status=false;
            }
            console.log(j);
            j--;
            

    }
return status;
}
palindrome("eye");
palindrome("eye#*'_-");
palindrome("not a palindrome");
palindrome("joder");