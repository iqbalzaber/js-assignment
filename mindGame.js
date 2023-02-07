function mindGame(number){
    let multiply = number *3;
    let sum = multiply + 10;
    let divide = sum / 2;
    let subtract= divide -5;
    
    if(typeof number !=='number'){
        return ' please input a valid number'
    }
    
   return subtract;
}

const result = mindGame('bangladesh')
console.log(result);


