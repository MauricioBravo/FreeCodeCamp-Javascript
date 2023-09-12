function frankenSplice(arr1, arr2, n) {
    const arrBackup = [].concat(arr2);

    //asigno a arr2 y a backup el mismo array original, la pregunta es, por que cambia si nunca asigno un nuevo valor a backup?
    console.log(arr2);
    console.log(arrBackup);

    var arr =  [].concat(arr2);
    var arrDividido2 = arr.length / 2;

    if (n == 0) {
        return arr1;
    }
    else {
        for (let i = 0; i < arr1.length; i++) {

            if (arr.length % 2 == 0) {
                arr.splice(arrDividido2 + i, null, arr1[i]);
                console.log(arr2);
            }
            else {
                arr.splice(arrDividido2 + i, null, arr1[i]);
            }
            //Array.splice(start, removeCount, newItem, newItem, newItem, ...)

        }
    }
    //******* valor de backup cambiado sin ninguna explicación aparente  */
    console.log(arrBackup);
    arr2 = arrBackup;
    console.log(arr2);
    return arr;

}
console.log(frankenSplice([1, 2], ["a", "b"], 1));//should return ["a", 1, 2, "b"])
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
//   console.log(frankenSplice([1, 2, 3,4], [5,6,7,8], 1));