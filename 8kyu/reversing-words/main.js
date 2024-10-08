function reverse(string){
    //remove trailing spaces and turn str into arr
    let arr = string.trim().split(' ')
    //return reversed arr and stringified arr
     return arr.reverse().join(' ')
}

let input = ' Good Morning     '
console.log(`The input is "${input}" and reversed it is ${reverse(input)}`)
