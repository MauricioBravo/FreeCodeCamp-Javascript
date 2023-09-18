function mutation(arr) {
    var flag = false;
    var arr1 = "";
    var arr2 = [];
    arr1 = arr[0].toString();
    console.log(arr1);
    arr1 = arr1.toLowerCase();
    console.log(arr1);

    arr2 = arr[1].toString();
    console.log(arr2);
    arr2 = arr2.toLowerCase();
    console.log(arr2);

    // el programa no debe tener orden porque debe ser capaz de detectar 
    //  las letras independientes de su posicion
    for (var i = 0; i < arr2.length; i++) {
        console.log(arr2[i]);
        for (var j = 0; j < arr1.length; j++) {
            console.log(arr1[j]);
            if (arr2[i] == arr1[j]) {
                console.log(arr2[j]);
                flag = true;
                j = arr1.length;
            }

            if (j != arr1.length) {
                flag = false;
            }
        }
        if(flag==false){
            i = arr2.length;
        }


    }
    console.log(flag);
    return flag;
}
console.log( mutation(["hello", "neo"]) );
// console.log(mutation(["hello", "Hello"]));
// console.log(mutation(["hello", "hey"]));
// console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));// debe ser true

// poner la comparacion en orden para revisar la letra del arra2 en el arr1 y en caso de ser la ultima
// del arr2 si no encuentra la letra devolver falso
// si encuentra la letra y tambien encontró las demás anteriores devuelve verdadero