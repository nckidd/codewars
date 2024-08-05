var Vector = function (components) {
  
    this.components = components;
    // methods
    this.add= function(vector) {
      const anotherVector = vector.components;
      //check length
  //     if (!this.sameLength(anotherVector)) {
  //       throw new Error('These vectors are not the same length.');
  //     }
      //parse through another vector, map()
      //return result array
      return anotherVector.map((x,a) => x+this.components[a]);
  
    };
    this.subtract = function(vector) {
      const anotherVector = vector.components;
  
      //check length
      if (!this.sameLength(anotherVector)) {
        throw new Error('These vectors are not the same length.');
      }
      //parse through another vector, map()
      //return result array
      return anotherVector.map((x,a) => x-components[a]);      
    };
    this.dot = function(vector) {
      const anotherVector = vector.components;
      //check length
      if (!this.sameLength(anotherVector)) {
        throw new Error('These vectors are not the same length.');
      }    //parse through another vector using reduce
      let mult = anotherVector.map((x,a) => x*components[a])
      return mult.reduce((acc, current) => acc + current)
    };
    this.norm = function() {
      //parse through components using reduce
      let squared = this.components.reduce((acc, current) => acc + (current^2))
      //return sqrt(result)
      return Math.sqrt(squared)
    };
    this.sameLength = function(anotherVector) {
      //if this vector and another vector have same length, return true
      if (anotherVector.length === this.components.length) {
        return true
      }
      return false
      //if diff lengths return false
    };
  };
  
  //parameters: [1,2,3], [3,4,5], any array of numbers
  //results: 
          // throw an error or => 
          // add() and subtract() returns a new vector; 
          // dot() returns an integer; 
       //norm() returns a sqrt(integer) value or integer
  //examples: see left 
  //psuedocode: ^