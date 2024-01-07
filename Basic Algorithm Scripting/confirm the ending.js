

function confirmEnding(str, target) {

    let targetLength = target.length;
    console.log(targetLength);
    let strLength = str.length;
    console.log(strLength);

    let posicion = strLength - targetLength;
    console.log(posicion);

    let i = posicion;
    let j = 0;
    var flag = true;

    for (let x = 0; x < targetLength; x++) {
        console.log(i);

        console.log(str[i]);
        console.log(target[i]);

        if (str[i] != target[j]) {
            flag = false;
        }
        console.log(flag);
        i++;
        j++;
    }
    return flag;
}

// console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));

for (let i = 0; i <= 2; i++) {
    console.log(i);
    for (let j = 0; j <= 3; j++) {
        console.log(j);
    }
}
