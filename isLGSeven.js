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
const result= isLGSeven('bsan')
console.log(result);