function sumTwoSmallestNumbers(numbers) {  
    let sortTwoSmallest = numbers.sort((a,b) => a - b).slice(0,2)
    
    let sumTwoSmallest = sortTwoSmallest.reduce((acc, c) => acc + c)
    
    return sumTwoSmallest
  }