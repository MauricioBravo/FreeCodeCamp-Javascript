function getIndexToIns(arr, num) {

    var arrOrdenado = [...arr].sort((a, b) => a - b);
    console.log(arrOrdenado);
    for(var i=0;i<arr.length;i++){
        console.log(i);
        console.log(arrOrdenado[i]);

        if(num == arrOrdenado[i]){

            return i;
        }

        if(num >= arrOrdenado[i] &&  num <= arrOrdenado[i+1]){
        return i+1;
        }
    }
    return i;
    }
    
// console.log(getIndexToIns([40, 60], 50)); //1
// console.log(getIndexToIns([5, 3, 20, 3], 5));//2
// console.log(getIndexToIns([10, 20, 30, 40, 50], 35));//3
// console.log(getIndexToIns([10, 20, 30, 40, 50], 30));//2
// console.log( getIndexToIns([3, 10, 5], 3));//0
console.log( getIndexToIns([2, 20, 10], 19));
console.log( getIndexToIns([2, 5, 10], 15));