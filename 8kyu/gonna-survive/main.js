function hero(bullets, dragons) {
    return dragons*2 > bullets ? false : true
}

console.log('The hero has 2 bullets against 1 dragon. It is '+ hero(2,1) + ' that he will survive')
console.log('The hero has 2 bullets against 1 dragon. It is '+ hero(3,1) + ' that he will survive')
console.log('The hero has 2 bullets against 1 dragon. It is '+ hero(3,2) + ' that he will survive')
