function chunkArrayInGroups(arr, size) {

    // paso 1 hacer que el arr que se retorna tenga la cantidad de sub arrays necesaria
    var arr2 = [];
    var arr3 = [];
    var num = arr.length / size;
    console.log(num);

for(let i=0;i<num;i++){
    arr2=arr.splice(0,size);
    arr3.push(arr2);
    console.log(arr3);
}
console.log(arr3);

    return arr3;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log( chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));