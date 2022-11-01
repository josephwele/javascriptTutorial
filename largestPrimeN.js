function largestPrimeN(n){
  let div =2
  while(n>1){
    n%2==0?n/div:div++
  }
  return div
}
console.log(largestPrimeN(24))