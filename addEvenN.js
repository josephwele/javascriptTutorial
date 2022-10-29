function sum(arr){
  let sum=0
  for (let i of arr){
    sum+=i
  }
  return sum
}
//console.log(sum([1,2,3]))

function addEvenN(n,callBack){
  let EvenN=[]
  
  for(let i=0;i<=n;i++){
    if(i%2==0){
    EvenN.push(i)
      console.log(EvenN)
    }
  }
  return callBack(EvenN)
}
  console.log(addEvenN(10,sum))