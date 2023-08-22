function largestOfFour(arr) {
    let max=-10000;
    let arr2=new Array();
    for(let i=0;i<4;i++){
        max=-10000;
        for(let j=0;j<4;j++){
            console.log(arr[i][j]);
        if (max<arr[i][j]) {
            max=arr[i][j];
            console.log(max);
        }   

    }

    arr2.push(max); 
}
    console.log(arr2);
    return arr2;
}

  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


