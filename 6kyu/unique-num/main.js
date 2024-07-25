function findUniq(arr) {
    //return x if it isn't equal to the number before or after it
    return arr.find((x,a) => a === 0 ? x!== arr[arr.length-1] && x!== arr[a+1]: x !== arr[a-1] && x!== arr[a+1]);
}

let array = [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
console.log('The unique number in the array '+array+' is: ' +findUniq(array))