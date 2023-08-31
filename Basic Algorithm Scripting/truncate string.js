function truncateString(str, num) {
    var finalStr = [];
    var arr = "";
    var num2=num;
    if(num > str.length){
        num = str.length;
    }

    console.log(str);

    for (let i = 0; i < num; i++) {
        finalStr.push(str[i]);
    }
    console.log(finalStr);

    if(num < str.length){
        finalStr.push("...");
        for (let j = 0; j <= num; j++) {
            arr += finalStr[j];
        }
    }

    if(num == str.length){
        for (let j = 0; j < num; j++) {
            arr += finalStr[j];
        }
    }    
    console.log(arr);
    return arr;
}

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
// should return the string A-tisket a-tasket A green and yellow basket.