function rot13(str) {
    console.log(str);
    var ch = 'A';
    var index = 0;
    var lett=[];
    var final=[];
    var finaloso=[];

    for(let i=0; i<str.length;i++){

     // 65 -90 son los caracteres letras


        console.log(str[i]);

        lett = str[i].charCodeAt(0);
        console.log(str[i].charCodeAt(0));
        if(lett != 32 && lett <=77 && lett > 64){ 
            lett =lett+13;
            final[i]=lett;
        }else if(lett>77){ //hay que ver como evitar que las exclamaciones o simbolos necesarios entren a este if (!)
            lett =lett+13;
            lett=lett-90+64;
            final[i]=lett
        }else if(lett ==32 || lett < 65){
            final[i]=lett;
        }
            
        console.log(final[i]);
        //transformal el arreglo final de ascii a char

        finaloso[i]=String.fromCharCode(final[i]);      
        console.log(finaloso);
    }
    console.log(finaloso);
    finaloso=finaloso.join("");

    console.log(str);
    return finaloso;
    }
    
  

    // console.log(rot13("SERR PBQR PNZC"));
    console.log(rot13("SERR CVMMN!")); //FREE PIZZA!
    // console.log(rot13("SERR YBIR?")); //FREE LOVE?
    // console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); //THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
