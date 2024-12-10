function evenOrOdd(number) {
    // return "Even" for evens & "Odd" otherwise
    return number%2 === 0 ? "Even" : "Odd"
  }
  
  /*
  --params: one int
  --returns: "Even" or "Odd"
  --example: number = 2 -> "Even"
  --pseudo: ^
  */

  console.log(evenOrOdd(0)) //returns "Even"
  console.log(evenOrOdd(-123)) //returns "Odd"