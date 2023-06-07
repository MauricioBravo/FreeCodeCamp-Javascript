function telephoneCheck(str) {

    //paso 0 revisar que no contenga letras
    console.log(haveLetters(str));
    if (haveLetters(str)==false){// si tiene letras retorna falso
      return false;
    }
    //paso 1 transformar la cadena a todos numeros
    console.log(cleaningString(str));
    let str2 = cleaningString(str);
    console.log(str2.length);

    console.log(countNumbers(str2));
    if(countNumbers(str2)==false){
      return false;
    }
    const reglaRegex = /^[A-Za-z0-9|\-|\(|\)]*$/;
    
    if (str.match(reglaRegex)){
      return true;
    }

    return true;
    
  }
  
function haveLetters(str){
    const regex = /d/gi;
    for(let i = 0 ; i < str.length; i++){
        if(str[i].match(regex)){
            return false;
        }
    }
  return true;
}

function cleaningString(str){
    if(str.length )
    return str.replace(/[^a-zA-Z0-9]/g, '');
}
function countNumbers(str){ //cuenta los numeros, si es de 10 de largo y no empieza con 1 retorna false
                            // si es de 9 retorna la cantidad de numeros
  let i=0;
  console.log(str.length);
  if(str.length==11){
    if(str[i]!=1){
      return false;
    }
    else{
      return true;
    }
  }
  else if(str.length==10){
    return 10;
  }
  else{
    return false;
  }
  
}

  console.log(telephoneCheck("555-555-5555"));  
  console.log(telephoneCheck("1 555-555-5555")); //should return true.
  console.log(telephoneCheck("1(555)555-5555") );//should return true.
  console.log(telephoneCheck("123**&!!asdf#"));// debe retornar falso
  console.log(telephoneCheck("2 (757) 622-7382"));