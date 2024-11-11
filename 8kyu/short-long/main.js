function solution(a, b){
    return a.length < b.length ? a+b+a : b+a+b
}

let inputA = "a"
let inputB = "b"
console.log(`The solution for ${inputA} and ${inputB} is ${solution(inputA, inputB)}`)
