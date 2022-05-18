var number = function(busStops){
  
    let count = 0
    
    busStops.forEach((v,i) => {
      
      count += v[0]
      count -= v[1]
    })
    
    return count
  }