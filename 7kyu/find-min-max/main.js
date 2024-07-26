function getMinMax(arr){
    let newArray = [];
    
    //sort array
    arr.sort((a,b) => a-b);
  
    //push according to arr length
    arr.length === 1 ? newArray.push(arr[0],arr[0]) : newArray.push(arr.shift(), arr.pop())
  
    return newArray;
  };
  
console.log('The min max of array [31,21,2,54] is: '+getMinMax([31,21,2,54]));