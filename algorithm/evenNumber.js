function evenNumber (num) {
  let evenNum = []
  for (let i = 0;i <= num;i++) {
    if (i % 2 == 0) {
      evenNum.push(i)
    }
  }
  return evenNum
}
