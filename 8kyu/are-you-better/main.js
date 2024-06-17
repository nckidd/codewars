function betterThanAverage(classPoints, yourPoints) {
    // reduce arr to avg
    let avg = classPoints.reduce((acc, thisValue) => acc+thisValue)
    avg = avg/classPoints.length
    // return true if higher, false otherwise
    return yourPoints > avg ? true : false
  }
  
  /*
  -p: arr and int
  -r: true or false:
  -example: betterTA([80,80,80], 80) -> false
  -p: ^
  */

  console.log(betterThanAverage([80,80,80], 80)) //returns false
  console.log(betterThanAverage([80,80,95], 95)) //returns true
