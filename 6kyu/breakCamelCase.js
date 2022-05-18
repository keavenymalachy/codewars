function solution(string) {
  
    let newStr = ""
    
    for (char of string) {
      char === char.toUpperCase() ? newStr+= ` ${char}` : newStr += char
    }
    
    return newStr
    
  }