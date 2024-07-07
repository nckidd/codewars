//count how many times a letter appears in a string
function strCount(str, letter){  
    //convert string to array
    let arr = str.split('')
    //create array of matching letters
    let matches = arr.filter(x => x === letter)
    //return the number target letter appeared in string
    return matches.length
  }

console.log("p appears in apples "+ strCount('apples', 'p') +" times");
console.log("a appears in apples "+ strCount('apples', 'a') +" time");
console.log("p appears in apathy "+ strCount('apathy', 'p') + " time");
console.log("a appears in apathy "+ strCount('apathy', 'a') + " times");