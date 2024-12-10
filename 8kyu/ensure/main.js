function ensureQuestion(s) {
    // if no q mark, add and return; other wise return original q
    return s.includes('?') ? s : s+"?"
  }
  
  /*
  -p: str
  -r: str w question mark
  -e: <
  -p: ^
  */

  console.log(ensureQuestion("")) //returns "?"
  console.log(ensureQuestion("?")) //returns "?"