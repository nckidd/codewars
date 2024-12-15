function spEng(sentence){

    //parse to check if input contains "english"
    return sentence.toLowerCase().includes('english') ? true : false
  
  }
  
  /*
  -p: str
  -r: true or false
  -e: "abcEnglishdef" -> true
  -p: ^
  */

  console.log(spEng('Isthisenglish?')) //returns true
  console.log(spEng('Isthis?')) //returns false