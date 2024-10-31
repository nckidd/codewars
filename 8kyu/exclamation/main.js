function removeExclamationMarks(s) {
    //replace ! in str with ""
    return s.replaceAll("!","");
  }
  
  /*
  -p: str
  -r: str - !
  -e: remove('hi!') -> hi
  -p: ^
  */
  
  console.log(removeExclamationMarks("hi!")) //returns "hi"
  console.log(removeExclamationMarks("ur sis says hi!")) //returns "ur sis says hi"
