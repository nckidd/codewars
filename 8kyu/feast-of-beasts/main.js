function feast(beast, dish) {
    //return true of String at index 0 and str.length-1 equals eachother
    return (beast.endsWith(dish.slice(-1)) && beast.startsWith(dish.slice(0,1))) ? true : false
}

let beastName = 'Henry'
let dishName = 'Clam Bake'
console.log(`The beast's name is ${beastName} and the dish they brough is ${dishName}. ${feast(beastName, dishName) ? 'Let\'s eat!' : 'They can\'t sit with us'}`)