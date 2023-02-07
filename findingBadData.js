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

const ageNumber= [' bangladesh']
const altimateResult=findingBadData(ageNumber)
console.log(altimateResult);