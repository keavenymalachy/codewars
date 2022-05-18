function reverseWords(str) {
  
    let splitArray = str.split(" ")
    //console.log(splitArray)
    let newString = ''
    
    splitArray.forEach(element => {
      //console.log(element)
      
      for (let i = element.length - 1; i >= 0; i--) {
        //console.log(element[i])
        newString += element[i]
        console.log(newString)
      }
      
      newString += " "
      
    })
    
    //console.log(newString)
    
    newString = newString.trim()
    
    return newString
  }