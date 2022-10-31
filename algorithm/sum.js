function sum (arr) {
  let sum = 0
  for (let a of arr) {
    sum += a
  }
  return sum
}
function evenNumber (num) {
  let evenNum = []
  for (let i = 0;i <= num;i++) {
    if (i % 2 == 0) {
      evenNum.push(i)
    }
  }
  return evenNum
}





 function addOddNumbers(n){
  let OddNumbers=[]
  for (let i=0;i<n;i++){
    if(i%2!==0){
      OddNumbers.push(i)

    }
  }
  return OddNumbers
 }
 console.log(addOddNumbers(9))