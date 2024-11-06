function digitize(n) {
    //turn number into arr
    let arr = n.toString().split('')
    
    //change strings to nums
    for (let x= 0; x < arr.length; x++) {
      arr[x] = Number.parseInt(arr[x])
    }
  
    //return reversed arr
    return arr.reverse()
  }
  /*
  -p: random non-neg integer
  -r: digits of integer within array, but reversed
  -e: <
  -p: ^
  */

  console.log(digitize(1534)) //returns [4,3,5,1]
  console.log(digitize(1)) //returns [1]