function frankenSplice(arr1, arr2, n) {
    var arr =arr2;
console.log(arr.length);
    // 1 dividir el segundo array
    // 2 hace que la frecuencia de repeticion de el push sea el valor que recibe la funcion,
    // para que por ejemplo si el numero es 2 se metan 2 elementos adelante y dos atrás del array principal.
    
    
    
    
    for(let i=0; i<arr1.length;i++){
        console.log(arr);
        console.log(i);
        
        // lo que pasa es que cuando el array tiene 4 elementos o más su mitad para ubicar el nuevo elemento es una posición incorrecta
        
        if(arr.length%2 == 0){

            arr.splice(arr.length/2,null,arr1[i]);
            console.log(arr1[i]);
        }
        else{
            arr.splice(arr.length/2+1,null,arr1[i]);
        }
         // corregir esta linea que funciona al principio y luego no*************
       
        
    //Array.splice(start, removeCount, newItem, newItem, newItem, ...)


    }

    return arr;
    
  }
  console.log(frankenSplice([1, 2], ["a", "b"], 1));//should return ["a", 1, 2, "b"])
  console.log(frankenSplice([1, 2, 3], [4, 5], 1));
//   console.log(frankenSplice([1, 2, 3,4], [5,6,7,8], 1));