function tribonacci(signature,n){
  
    if (n === 0 ) {
      return []
    }else if (n < 3){
      return signature.slice(0,n)
    }
    else {
    
    for (let i = 3; i < n; i++) {
      let last3 = signature.slice(-3)
      signature.push(last3.reduce((acc,c) => acc + c, 0))
    }
      return signature
      }
    
    
    
  }