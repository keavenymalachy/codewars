function rowSumOddNumbers(n) {
  
    let firstNum = (n * n) - (n - 1)
    let count = 0
    let sum = 0
    
    //console.log(firstNum)
    
    while (count < n) {
      if (firstNum % 2 !== 0) {
        sum += firstNum
        count++
      }
      firstNum++
    } 
    
    return sum
    
  }