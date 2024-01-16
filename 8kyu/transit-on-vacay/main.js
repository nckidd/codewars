function rentalCarCost(d) {
    //daily rate
    let cost = 40*d; 
    //special rate conditionals
    if(d < 7 && d >= 3) {
      cost -= 20
    } else if (d >= 7){
      cost -=50 
    }
    return cost
  }

  console.log('The rental car cost for 10 days is $'+ rentalCarCost(10))
  console.log('The rental car cost for 3 days is $'+ rentalCarCost(3))