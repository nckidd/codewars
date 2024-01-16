solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    //declare R gas constant
    let gasConstant = 0.082
    //convert celsius to Kelvin
    temp += 273.15
    //return pressure calc 
    return (((givenMass1/molarMass1)+(givenMass2/molarMass2))*(gasConstant*temp))/volume
  }

  console.log(`Given arbitrary values, the pressure within the container is ${solution(1,1,2,2,5,10)} atm`)
  /*
  params:
  -- molar mass of 1st molecule
  -- molar mass of 2nd molecule
  -- mass of 1st molecule
  -- mass of 2nd molecule
  -- volume of vessel
  -- temp of vessel
  
  return:
  -- total pressure in units atm
  
  example: no
  
  pseudocode: ^
  */