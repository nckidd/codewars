function flickSwitch(arr){
    let bool = true
    //parse through array
    let newArr = arr.map((x) => {
      //change bool if flick is found
      if (x === 'flick' && bool === true) {
        bool = false
      } else if ( x === 'flick') {
        bool = true
      }
      return x=bool;
    });
    return newArr
  }
  /*
  --params: an array of strings
  --returns: array of booleans
  --example: <
  --pseudo: ^
  */

console.log(flickSwitch(['codewars', 'flick', 'code', 'wars'])) //should return [true, false, false, false]
console.log(flickSwitch(['flick', 'chocolate','adventure', 'sunshine'])) //should return [false, false, false, false]
console.log(flickSwitch(['flick', 'flick','flick','flick','flick'])) //should return [false, true, false, true, false]
