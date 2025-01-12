function findChildren(dancingBrigade) {
	// sort arr w localeCompare
  let arr = dancingBrigade.split('')
  arr.sort((a,b) => a.localeCompare(b, 'en-US-u-kf-upper'))
  // return arr
  return arr.join('');
}

/*
-p: str
-r: str
-e: "aAbaBb" -> "AaaBbb"
-p: ^
*/

console.log(findChildren('bbBaAcccC')) //returns 'AaBbbCccc'
console.log(findChildren('ABC')) //returns 'ABC'