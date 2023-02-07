function gemsToDiamond(diamond1,diamond2, diamond3){
    if(typeof diamond1, diamond2, diamond3 !=='number'){
      return ' please enter a valid number'
    }
    let firstFd = diamond1 * 21;
    let secondFd = diamond2 * 32;
    let thirdFd = diamond3 * 43;
    const totalDiamond = firstFd + secondFd + thirdFd;
    if( totalDiamond > 2000){
        let  restDiamond = totalDiamond - 2000;
        return restDiamond;

    } 
    else {
        return totalDiamond;
    }
    


}
let result = gemsToDiamond('ban')
console.log(result);