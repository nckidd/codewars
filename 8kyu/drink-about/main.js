function peopleWithAgeDrink(old) {
    //declare drink
    let drink = "";
    //set drink depending on age
    old >= 21 ? drink = "whisky" : old >= 18 ? drink = "beer" : old >= 14 ? drink = "coke" : drink = "toddy";
    //return temp literal incl drink
    return `drink ${drink}`;
  };
  /*
  -p: integer
  -r: "drink x"
  -e: <
  -p: ^
  */

  console.log(peopleWithAgeDrink(13)) //return toddy
  console.log(peopleWithAgeDrink(21)) //return whisky
