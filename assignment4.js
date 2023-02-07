function mindGame(number){
  if(typeof number !=='number'){
    return ' please input a valid number'
}
    let multiply = number *3;
    let sum = multiply + 10;
    let divide = sum / 2;
    let subtract= divide -5;
   return subtract;
}



function evenOdd(number){
  if(typeof number !=='string'){
    return 'error'
  }
    for(let i= 0 ; i<number.length;i++){
          const elem = number[i];
    if( elem / 2){
      result= 'even'
   }
   else{
         result= 'odd'
      }
      }
     
    return result
  }



  function isLGSeven(number){
    if(typeof number !=='number'){
      return 'incorrect your character'
  }
    let divide = number -7;
    if(divide < 7){
        return divide;
    }
    else{
        return number * 2
    }
}




function findingBadData(number){
  if(typeof number !=='number'){
    return ' your character is wrong'
  }
  let arr= [];
  for(let i= 0 ; i<number.length;i++){
    const element=  number[i];
     if(element < 0){ 
       arr.push(element)
       
    }
  }
  return arr.length
  
}




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