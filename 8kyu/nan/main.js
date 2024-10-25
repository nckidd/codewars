const isReallyNaN = (val) => {
    //test type of val
    console.log(val)
    console.log(Number.isNaN(val))
    return Number.isNaN(val) ? true : false
    
  };
  
  /*
  -p: any 
  -r: true or false
  -e: isReallyNaN(37) -> false
  -p: ^
  */

  console.log(isReallyNaN(NaN)) //returns true
  console.log(isReallyNaN(undefined)) //returns false