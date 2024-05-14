class Person {
    // set this instance's variables
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    // getter
    get info() {
      return `${this.name}s age is ${this.age}`;
    }
  }
  
  /*
  -p: must accept a name and age
  -r: completed constructor, getInfo -> `${name}s age is ${age}`
  -e: let john = new Person('john', 34) -> john.info -> 'johns age is 34'
  -p: ^
  */

  let amy = new Person('amy', 40)
  console.log(amy.info) //returns 'amys age is 40'