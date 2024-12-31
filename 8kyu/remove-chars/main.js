function array(string) {
    //turn string into array
    let arr = string.split(',')
    if (arr.length < 3) {
      return null 
    } else {
      //pop and shift one element each
      arr.pop()
      arr.shift()
    }
    //return arr as str w spaces
    return arr.join(' ')
  
  }
  /*
  -p: str of comma-separated char sequence or empty str or single str
  -r: str with spaces to replace commas
  -e: <
  -p: ^
  */

  console.log(array('')) //returns null
  console.log(array('1,2,3')) //returns '2'