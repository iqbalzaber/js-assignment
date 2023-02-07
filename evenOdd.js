function evenOdd(number ){
  if(typeof number !=='string'){
    return 'error'
  }
     
  for(let i= z0 ; i<number.length;i++){
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
  
  const total = evenOdd(12)
  console.log(total);
   


