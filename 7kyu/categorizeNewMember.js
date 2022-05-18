function openOrSenior(data){
  
    let category = []
    
    data.forEach((h) => {
      //console.log(h[0])
      if (h[0] >= 55 & h[1] > 7) {
        category.push('Senior')
      } else {
        category.push('Open')
      }
    })
    
    return category
    
  }