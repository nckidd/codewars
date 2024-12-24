function smash (words) {
    /*return words joined together by space using join method*/
    return words.join(' ')
  };
  
  /*
  p - array of words
  r - sentence in the form of a str, no leading or trailing space
  e - ['i', 'like','cake'] -> 'i like cake'
  p - ^
  */

console.log(smash(['i','like','cake']))
console.log(smash(['i', 'specifically','like','carrot','cake']))