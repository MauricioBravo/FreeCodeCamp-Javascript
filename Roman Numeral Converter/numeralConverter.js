function convertToRoman(number){


const numberArray = String(number)
  .split('')
  .map(Number);  
console.log(numberArray);
let numberPosition=[];

let i=numberArray.length-1;
console.log(i);

    numberPosition[i] = firstLetter(numberArray[i]);
    console.log(numberPosition);
    i--;
    numberPosition[i] = secondLetter(numberArray[i]);
    console.log(numberPosition);
    console.log(numberPosition.join(""));
    return numberPosition.join("");
    
}


function firstLetter(number) {
console.log(number);

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
    console.log(number);
    
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


convertToRoman(36);