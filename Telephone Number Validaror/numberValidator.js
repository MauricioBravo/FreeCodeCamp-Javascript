function telephoneCheck(str) {


  const validUSPhone = /^(1[\s-]?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

  return validUSPhone.test(str);

}



/*


var valorLetras=true;
var valorNumeros=true;
var valorParentecis=true;
var valorGuiones=true;

    //paso 0 revisar que no contenga letras
    console.log(haveLetters(str));
    if (haveLetters(str)==false){// si tiene letras retorna falso
      valorLetras = false;
    }

    if(countHyphen(str)==false){
      valorGuiones= false;
    }

    //paso 1 transformar la cadena a todos numeros
    console.log(cleaningString(str));
    let str2 = cleaningString(str);
    console.log(str2.length);

    console.log(countNumbers(str2));
    if(countNumbers(str2)==false){//
      valorNumeros= false;
    }
          
    // const reglaRegex = /^[A-Za-z0-9|\-|\(|\)]*$/;
    // console.log(str.match(reglaRegex));
    // if (str.match(reglaRegex)){
    //   valor = true;
    // }
        
//se revisa la apertura y cierre de parentesis
valorParentecis=revisarParentecis(str);
console.log(revisarParentecis(str));



    if(valorLetras==false || valorNumeros==false || valorParentecis==false || valorGuiones==false){
      return false;
    }else{
      return true;
    }
    
  }

  function revisarParentecis(str){
    let valor = false;
    let cadena = str;
    var contador = 0;
      
    var textoSinEspacios = str.replace(/\s/g, "");
  
    var regex = /[()]+/; // busca parentecis
    console.log(cadena.match(regex) !== null);
    if(cadena.match(regex) !== null){// Si la expresión tiene parentecis entonces:
      let cerrado = false;
      let abierto= false;
  
      if(textoSinEspacios.length==10){
        console.log(textoSinEspacios);
        for(let i = 0 ; i<textoSinEspacios.length;i++){
          if(textoSinEspacios[i]=="(" && i==1){
            console.log(textoSinEspacios[i], "en la posicion", i);
            abierto =true;
            contador++;
          }
          if(textoSinEspacios[i]==")" && i ==5){
            cerrado=true;
            contador++;
          }
        }
      }
      if(textoSinEspacios.length==11){
        console.log(textoSinEspacios);
        for(let i = 0 ; i<textoSinEspacios.length;i++){
          if(textoSinEspacios[i]=="(" && i==1){
            console.log(textoSinEspacios[i], "en la posicion", i);
            abierto =true;
            contador++;
          }
          if(textoSinEspacios[i]==")" && i ==5){
            cerrado=true;
            contador++;
          }
        }
      }
      if(textoSinEspacios.length==13){
        console.log(textoSinEspacios);
        for(let i = 0 ; i<textoSinEspacios.length;i++){
          if(textoSinEspacios[i]=="(" && i==0){
            console.log(textoSinEspacios[i], "en la posicion", i);
            abierto =true;
            contador++;
          }
          if(textoSinEspacios[i]==")" && i ==4){
            console.log(textoSinEspacios[i], "en la posicion", i);
            cerrado=true;
            contador++;
          }
        }
      }
      if(textoSinEspacios.length==14){
        console.log(textoSinEspacios);
        for(let i = 0 ; i<textoSinEspacios.length;i++){
          if(textoSinEspacios[i]=="(" && i==1){
            console.log(textoSinEspacios[i], "en la posicion", i);
            abierto =true;
            contador++;
          }
          if(textoSinEspacios[i]==")" && i ==5){
            console.log(textoSinEspacios[i], "en la posicion", i);
            cerrado=true;
            contador++;
          }
        }
      }
     
      if(abierto == true && cerrado == true && contador ==2){
        valor = true;
      }
      else{
        valor = false;
      }
      return valor;
  
    }
  
    }

  function countHyphen(str){
    let contador=0;
    for(let i = 0; i < str.length; i++){
      if(str[i]=="-"){
        contador++;
      }
    }
    console.log(contador);
    if(contador>2){
      return false;
    }
  }

function haveLetters(str){
    const regex = /d^()/gi;
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

  // console.log(telephoneCheck("555-555-5555"));  
  // console.log(telephoneCheck("1 555-555-5555")); //should return true.
  //console.log(telephoneCheck("1(555)555-5555") );//should return true.
  // console.log(telephoneCheck("123**&!!asdf#"));// debe retornar falso
  // console.log(telephoneCheck("2 (757) 622-7382"));
  // console.log(telephoneCheck("-1 (757) 622-7382"));//should return false
  // console.log(telephoneCheck("555)-555-5555"));//false
console.log(telephoneCheck("(555)555-5555"));//should return true.
  //console.log(telephoneCheck("(6054756961)")); // false
  console.log(telephoneCheck("55 55-55-555-5"));//false


/*

let gusto = 9;
let arrepetirDejarlaIr= 6;
let arrepentirComprarOtraCosa = 7.5;

let ganasDeTenerla=6;
let ganasDeComprarOtra=10-arrepentirComprarOtraCosa;
console.log(ganasDeComprarOtra);

let totalPosibleDejartela = 10 +  10 + ganasDeComprarOtra; 
//maximo gusto posible + arrepentimiento por dejarla + cuanto NO te arrepentis de comprar otra cosa
console.log(totalPosibleDejartela);

let ganasTotales = 9 + 6 + ganasDeComprarOtra;
console.log(ganasTotales);


var resultado = ganasTotales/totalPosibleDejartela;
console.log(resultado);
//ganas totales dividido la cantidad maxima de puntos para dejartela, mientras más cercano a 1 más ganas de dejartela
if(resultado > 0.6){// si el resultado en mayor a 0.6 te la quedas
  console.log("te la dejas");
}
*/