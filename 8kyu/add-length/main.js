function addLength(str) {
    //parse through arr 
    
    return str.split(' ').map(x => {
      //add length of arr to str 
      return x+' '+x.length
    })
  }
  
  /*
  -p: arr
  -r: arr w length of words
  -e: <
  -p: ^
  */

  console.log(addLength('apple die')) // returns ['apple 5','die 3']
  console.log(addLength('fun time')) // returns ['fun 3','time 4']
