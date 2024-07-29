/*
param: any string
returns: array of 2 chars / char+_
example: 'apple' => ['ap','pl','e_']
psuedo code below
*/
console.log('The split string of apple is: ')
console.log(solution('apple'))

function solution(str){
    //declare array
    let result = []
    //slice 0-1, 2-3, 4-5
    for (let i=0; i < str.length; i+=2) {
      let pair;
      //if last str has length of 1, add _
      if (i === str.length-1) {
        pair = `${str.charAt(i)}_`
      } else {
        pair = str.charAt(i) + str.charAt(i+1)
      }
      //push to array
      result.push(pair)
    }
    //return array
    return result
  }