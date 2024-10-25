function checkForFactor (base, factor) {
    //return true of base%factor is 0, false if not
    return base%factor===0 ? true : false;
  }
  /*
  param:
  -- base, non neg
  -- factor, positive
  
  returns:
  -- true or false
  
  example: checkForFactor(7,2) //returns false
  
  pseudocode: ^
  */

let baseNum = 10
let factorNum = 2
console.log(`Is ${factorNum} a factor of ${baseNum}? ${checkForFactor(baseNum,factorNum) ? 'Yes!' : 'Not at all'}`)

baseNum = 9
factorNum = 2
console.log(`Is ${factorNum} a factor of ${baseNum}? ${checkForFactor(baseNum,factorNum) ? 'Yes!' : 'Not at all'}`)