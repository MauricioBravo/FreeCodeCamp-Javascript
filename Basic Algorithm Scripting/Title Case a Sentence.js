function titleCase(str) {

    // ************ my answer ****************
    /*
    var arr = str.split("");
    for (let i = 0; i < str.length; i++) {

        if (arr[i - 1] == " "|| i==0) {
            var nuevaPalabra = str[i].toUpperCase(); + str.slice(i);
            arr[i] = nuevaPalabra;
            console.log(nuevaPalabra);
            str[i] = nuevaPalabra;
        }
        else{
            var nuevaPalabra = str[i].toLowerCase(); + str.slice(i);
            arr[i] = nuevaPalabra;
            console.log(nuevaPalabra);
            str[i] = nuevaPalabra;
        }

    }
    var arr2 = arr.join("");
    console.log(arr2);
console.log(typeof arr2);
str = arr2;
    return str;

    */

    // ****** frecodecamp solution ********


        const newTitle = str.split(" ");
        const updatedTitle = [];
        for (let st in newTitle) {
          updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
        }
        return updatedTitle.join(" ");

}





console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));