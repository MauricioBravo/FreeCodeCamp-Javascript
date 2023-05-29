//ESTE PROGRAMA SOLO TRANSFORMA HASTA LOS 3999 A NUMEROS ROMANOS

function convertToRoman(number) {
    const numberArray = String(number)
        .split('')
        .map(Number);
        //primero se transforma el numero ingresado a la funcion a un arreglo
    console.log(numberArray);
    let numberPosition = [];

    let i = numberArray.length - 1;
    //luego se declara i que es el largo del arreglo para empezar siempre por la última parte, los numeros bajos

    numberPosition[i] = firstLetter(numberArray[i]);
    i--;
    //una vez que las unidades mas pequeñas fueron agregadas al array se le resta uno a "i" para ir con la siguiente unidad
    numberPosition[i] = secondLetter(numberArray[i]);
    i--;
    numberPosition[i] = thirdLetter(numberArray[i]);
    i--;
    numberPosition[i] = fourthLetter(numberArray[i]);
    
    return numberPosition.join("");
    //retorno de el arreglo con todas las letras evitando la coma que los separa y uniendolos:
}


function firstLetter(number) {

    switch (number) {
        case 1:
            return "I"
            break;
        case 2:
            return "II"
            break;
        case 3:
            return "III";
        case 4:
            return "IV"
        case 5:
            return "V"
        case 6:
            return "VI";
        case 7:
            return "VII"
        case 8:
            return "VIII"
        case 9:
            return "IX"
        default:
            break;
    }
}
function secondLetter(number) {

    switch (number) {
        case 1:
            return "X";
            break;
        case 2:
            return "XX";
            break;
        case 3:
            return "XXX";
        case 4:
            return "XL";
        case 5:
            return "L";
        case 6:
            return "LX";
        case 7:
            return "LXX";
        case 8:
            return "LXXX";
        case 9:
            return "XC";
        default:
            break;
    }
}
function thirdLetter(number) {

    switch (number) {
        case 1:
            return "C";
            break;
        case 2:
            return "CC";
            break;
        case 3:
            return "CCC";
        case 4:
            return "CD";
        case 5:
            return "D";
        case 6:
            return "DC";
        case 7:
            return "DCC";
        case 8:
            return "DCCC";
        case 9:
            return "CM";
        default:
            break;
    }
}

function fourthLetter(number) {
    switch (number) {
        case 1:
            return "M";
            break;
        case 2:
            return "MM";
            break;
        case 3:
            return "MMM";
        default:
            break;
    }
}

convertToRoman(36);