function rainAmount(mm){
    if (mm < 40) {
         return `You need to give your plant ${40 - mm}mm of water`
    } else {
         return "Your plant has had more than enough water for today!"
    };
}

/*
-p: int 
-r: str
-e: ?
-p: ^
*/

console.log(rainAmount(40)) // should return "Your plant has had more than enough water for today!"
console.log(rainAmount(35)) // should `You need to give your plant 5mm of water`