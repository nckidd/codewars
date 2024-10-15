function pipeFix(numbers){
    let arr = []
    //parse through numbers
    let counter = 0;
    while (counter <= numbers[numbers.length-1]-numbers[0]) {
      arr.push(numbers[0]+counter)
      counter++
    }
    return arr;
    
  }
  
  /*
  -p: arr
  -r: arr
  -e: <
  -p: ^
  */

  console.log(pipeFix([6,8,9])) // returns [6,7,8,9]
  console.log(pipeFix([5,8,10])) // returns [5,6,7,8,9,10]
