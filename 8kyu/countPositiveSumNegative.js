function countPositivesSumNegatives(input) {
  
    let count = 0
    let sum = 0
      
    if (input === null) { return []}
    
    input.forEach(num => {
      num > 0 ? count += 1 : sum += num
    })
    
    if (count === 0 & sum === 0) { 
      return [] 
      }
    
    
    return [count, sum]
    
  }