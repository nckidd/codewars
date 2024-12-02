function setAlarm(employed, vacation){
    // if employed is true & vacation is false, return true
    //else return false
    return employed === true && vacation === false ? true : false
  }
  /*
  param: true or false
  return: true or false
  example: true, true -> false
  pseudo: ^
  */

console.log(setAlarm(false, false)) // returns false
console.log(setAlarm(true, false)) // returns true