

let myArray = [1, 2, 3];
    let arraySum = myArray.reduce((previous, current) => (previous + current));
    console.log(`Sum of array values is: ${arraySum}`);



    function zeroArray(m, n) {
        // Creates a 2-D array with m rows and n columns of zeroes
        let newArray = [];
        let row = [];
        for (let i = 0; i < m; i++) {
          // Adds the m-th row into newArray
      
          for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            row.push(0);
          }
          // Pushes the current row, which now has n zeroes in it, to the array
          newArray.push(row);
          
          // *** SI SE DESCOMENTA LO SIGUIENTE SE CUMPLE LO BUSCADO
          // row=[];  

        }
        return newArray;
      }
      
      let matrix = zeroArray(3, 2);
      console.log(matrix);