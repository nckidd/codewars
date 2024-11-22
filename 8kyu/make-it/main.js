const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (fuelLeft*mpg >= distanceToPump) {
      return true;
    } else {
      return false;
    }
  };

let miles = 50;
let mpg = 25;
let fuel = 2;
let makeit;

console.log(`With ${miles} mi left til the next pump, ${fuel} gallons of fuel, and a car that does ${mpg} miles a gallon, you will ${makeit = zeroFuel(miles, mpg, fuel) ? 'certainly' : 'not'} make it.`)