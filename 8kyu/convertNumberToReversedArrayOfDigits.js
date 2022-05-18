function digitize(n) {
  
    let reverseArray = []
    let numString = n.toString()
    
    for (let i = numString.length - 1; i >=0; i--) {
      reverseArray.push(Number(numString[i]))
    }
    
    return reverseArray
    
  }