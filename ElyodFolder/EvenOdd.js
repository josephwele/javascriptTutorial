function even(n){
    let sum = 0
    while (n > 0){
      if (n % 2 == 0){
        sum += n
      }
      n--
    }
    return sum
  }
  
  console.log(even(6))
  console.log(even(10))
  console.log(even(5))




  function odd(n){
    let sum = 0
    while (n > 0){
      if (n % 2 != 0){
        sum += n
      }
      n--
    }
    return sum

  }


  console.log(odd(7))
  console.log(odd(10))
  console.log(odd(4))
