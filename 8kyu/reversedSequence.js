const reverseSeq = n => {
  
    let revList = []
    let i = n+1
    
    for (n ; n--; n >= 0) {
      revList.push(n+1)
      //console.log(n+1)
    }
    
    return revList;
  };