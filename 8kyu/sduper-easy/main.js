function problem(x) {
    return typeof x !== "number" ? x = 'Error' : x*50+6
}

let input = 1;
console.log(`The adjusted integer of ${input} is ${problem(input)}`)
input = 'hi'
console.log(`The adjusted integer of ${input} is ${problem(input)}`)