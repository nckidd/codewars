function anyArrows(arrows){
    // parse through array
    // if one obj doesn't have damage prop or damge: false, change check to true
    console.log(arrows)
    let check = false;
    arrows.forEach( x => {
      if( !x.hasOwnProperty('damaged') || x.damaged === false ) { check = true}
        });
    return check
  }
  
  /*
  -p: arr of obj
  -r: boolean
  -e: anyArrows([{range: 10, damaged: true}]) -> false
  -p: ^
  */

console.log(anyArrows([{damaged: false}, {damaged: true}])) // should return true
console.log(anyArrows([{}])) //should return false