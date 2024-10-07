function position(letter){
    //initialize alphabet database
    let alphabet = [
      {char: 'a', pos: 1},
      {char: 'b', pos: 2},
      {char: 'c', pos: 3},
      {char: 'd', pos: 4},
      {char: 'e', pos: 5},
      {char: 'f', pos: 6},
      {char: 'g', pos: 7},
      {char: 'h', pos: 8},
      {char: 'i', pos: 9},
      {char: 'j', pos: 10},
      {char: 'k', pos: 11},
      {char: 'l', pos: 12},
      {char: 'm', pos: 13},
      {char: 'n', pos: 14},
      {char: 'o', pos: 15},
      {char: 'p', pos: 16},
      {char: 'q', pos: 17},
      {char: 'r', pos: 18},
      {char: 's', pos: 19},
      {char: 't', pos: 20},
      {char: 'u', pos: 21},
      {char: 'v', pos: 22},
      {char: 'w', pos: 23},
      {char: 'x', pos: 24},
      {char: 'y', pos: 25},
      {char: 'z', pos: 26},
    ]
    //declare position
    let position;
    
    //loop through alphabet array
    for (let x of alphabet) {
      // test if x obj has target
      if (x.char === letter) {
        // set position
        position = x.pos
      }
    }
    return `Position of alphabet: ${position}`
  }
  /*
  -p:a letter, str
  -r: Position of alphabet: ${position}
  -e: letter=a -> 1
  -p: ^
  */

  console.log(position('a')) //returns 1
  console.log(position('z')) //returns 26
