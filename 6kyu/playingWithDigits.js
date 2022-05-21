function digPow(n, p){
  
    let sum = 0
    
    for (digit of String(n)) {
      num = Number(digit)
      
      sum += digit ** p
      p+=1
    }
    
    if (Number.isInteger(sum / n)) {
      return sum / n
    } else {
      return -1
    }
        
  }