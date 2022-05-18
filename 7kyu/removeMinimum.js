function removeSmallest(numbers) {
  
    let smallestRemoved = numbers.slice()
    
    if (numbers.length === 0) { 
       return []
    }else {
    
    let smallest = numbers[0]
    let smallestIndex = 0
    
    numbers.forEach((i,v) => {
      
      if (i < smallest) {
        smallest = i
        smallestIndex = v
      }
      
    })
      
      let removed = smallestRemoved.splice(smallestIndex, 1)
      
      return smallestRemoved
    
   } 
  }