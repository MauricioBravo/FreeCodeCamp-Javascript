function rangeOfNumbers(startNum, endNum) {
    if (endNum<startNum) {
        return [];
    }
    else {
        const array = rangeOfNumbers(startNum,endNum-1);
        array.push(endNum);
        return array;
    }
};

console.log(rangeOfNumbers(10,20));
console.log(rangeOfNumbers(1,5));