function solution(str){
  
    let strReversed = ""
    
    for (let i= str.length -1; i >=0; i--) {
      console.log(str[i])
      strReversed += str[i]
    }
    
    return strReversed
  }