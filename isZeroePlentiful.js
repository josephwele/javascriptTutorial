function isZeroPlentiful(array) {
    let count=0;
   let length=0;
   for (let j = 0; j < array.length; j++) {
    if (array[j]===0) {
        length++ 
      if (length==4) {
        count++
        length=0
      }
      }else if(length!==0) {
        return 0; 
    }
    }
    return count;
      }
  console.log(isZeroPlentiful([0,0,0,0,1,0,0,0,0,2,0,0,0,0]));
  
  