var countSheep = function (num){
    //ensure num is positive
    num = Math.abs(num)
    let str = ""
    //iterate sheep
    for (let i = 1;i <=num ; i++) {
      str += `${i} sheep...`
    }
    return str
  }

  console.log(countSheep(9))
  console.log(countSheep(100))