function between(a, b) {
    // declare arr
    let arr = []
    // for loop
    for ( let i = a; i <=b; i++) {
          // push to arr
      arr.push(i)
    }
    return arr
  }
  /*
  -p: two ints
  -r: arr of ints between inputs, inclusive
  -e: <
  -p: ^
  */

 console.log(between(1,4)) // returns [1,2,3,4]
 console.log(between(5,10)) // returns [5,6,7,8,9,10]