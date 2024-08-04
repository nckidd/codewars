function cakes(recipe, available) {
  
  //convert objects to array
  const recipeArr = Object.entries(recipe)
  const availArr = Object.entries(available)
  
  let newArr = []
  let missingIngredient;
  
  //parse through recipe
  recipeArr.forEach((ingredient, a) => {
    
    //if you don't have a recipe ingredient, tell me! or else!
    if (!Object.hasOwn(available, ingredient[0])) {
      missingIngredient = true;
      
     //otherwise, let's figure out how much we can make with whatchu got
    } else {
      availArr.forEach((has, index) => {
        (ingredient[0] === has[0]) && newArr.push((has[1])/(ingredient[1]))
      });
    }
  });
  
  //if you don't have enough of an ingredient, go to target (they have everything)
  if ( newArr.some((x) => x < 1) || missingIngredient) {
    return 0
    
  //if you have enough of everything, this returns how many servings you can make
  } else {
    newArr.sort((a,b) => a-b)
    return Math.floor(newArr[0])
  }
  
}