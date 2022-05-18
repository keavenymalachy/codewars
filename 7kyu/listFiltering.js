function filter_list(l) {
  
    filteredArray = []
    
    l.forEach((v,i) => {
      console.log(typeof v)
      
      if (typeof v === 'number') {
        filteredArray.push(v)
      }
      
    })
    
    return filteredArray
    
  }