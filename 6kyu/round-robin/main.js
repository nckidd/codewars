function santaSort(unsortedNames) {
    //sort array
    let sortedNames = unsortedNames.sort((a,b) => a.localeCompare(b));
    let doubles = []
    //parse from left to right
    sortedNames.forEach((x,a) => {
      //if double, slice and move to end
      if (a > 0 && x === sortedNames[a-1] ){
        doubles.push(x);
        sortedNames.splice(a,1);
      }
    });
  
    //return array, still returning second double
    return sortedNames.concat(doubles);
    
  }
  
  /* 
  param: string array, unsorted
  result: sorted str array
  example: <
  psuedo: ^ 
  */