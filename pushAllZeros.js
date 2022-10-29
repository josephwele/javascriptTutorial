function pushZero(arr) {
    let nonZero = 0;
    let x = arr.length - 1;
    let arr1 = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== 0) {
        arr1[nonZero] = arr[j]
        nonZero++
      } else {
        arr1[x] = 0
        x--
      }
    }
    return arr1
  }
  console.log(pushZero([0,1,0,3,0,5]));