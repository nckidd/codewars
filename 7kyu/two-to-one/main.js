function longest(s1, s2) {
    // concat both and sort
    let arr = s1.split('').concat(s2.split('')).sort()
    // parse and remove duplicates
    arr.forEach((x,a) => {
      let dupes = arr.filter(letter => letter===x)
      if (dupes.length > 1) {
        arr.splice(a,dupes.length-1)
      }
    })
    return arr.join('')
  }
  /*
  -p: 2 str containing letters from a to z
  -r: string = sorted, longest poss, distinct letters
  -e: a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" -> longest(a, b) -> "abcdefklmopqwxy"
  -p: ^
  */

  const a = "xyaabbbccccdefww";
  const b = "xxxxyyyyabklmopq";

  console.log(longest(a,b)) //returns "abcdefklmopqwxy"