function doubleChar(str) {
    return str.split('').map(s => s+s).join('')
}

let input = 'Hello'
console.log(`The double of ${input} is ${doubleChar(input)}`)
input = 'Bye'
console.log(`The double of ${input} is ${doubleChar(input)}`)
