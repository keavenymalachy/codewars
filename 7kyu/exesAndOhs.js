function XO(str) {
    let xs = 0
    let os = 0
    
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === "x" || str.charAt(i) === "X") {
        xs +=1
      }
      else if (str.charAt(i) === "o" || str.charAt(i) === "O"){
        os +=1
      }
    }
  
  if (xs === os) {
    return true
  }
  else {
    return false
  }
}