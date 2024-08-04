function firstNonRepeatingLetter(s) {
  
  let nonrepeats = []
  let str = s.split('')
  
  //collect all non repeating letters
  str.forEach((char,a) => {
    //for this char, search for all repeats in string
    let repeats = str.filter((letter) => letter.toLowerCase() === char.toLowerCase())
    
    //if none, add to non repeating letters array
    if (repeats.length == 1) {
      nonrepeats.push(char)
    }
  });
  
  //if any non repeats were found, return the first one
  if (nonrepeats.length > 0) {
    return nonrepeats[0]
    
  //otherwise return empty string
  } else {
    return ''
  }
  
}