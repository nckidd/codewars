function periodIsLate(last, today, cycleLength) {
    //return false if diff < cycleLength; true otherwise
    let diff = (today-last)/86400000;
    console.log(`${diff} and cycle length ${cycleLength}`)
    console.log(  diff < cycleLength ? false : true);
    return diff > cycleLength ? true : false;
  }
  
  /*
  --params: two date objects and int 
  --returns: true or false
  --example: p(8/23, 9/11, 29) -> false
  --pseudo: ^
  */