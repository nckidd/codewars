class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
      console.log(this.lives)
      console.log(this.number)
    }
    
    guess(n) {
      //return false if n !== this.number and subtract from lives
      console.log(n)
      if (this.lives > 0 && !isNaN(n)) {
        return n === this.number ? true : this.lives -= 1;
        return false;
      }
      
      throw new Error('Expect error already dead');
    }
  }
  
  
  /*
  -p: number guessed, number of lives player has left
  -r: guess returns false or true
  -e: new Guesser(10,2) -> .guess(10) -> true
  */

  let guesser = new Guesser(0, 0)
  guesser.guess(0) //throws error

  let guesser2 = new Guesser(0,1)
  console.log(guesser2.guess(0)) //returns true