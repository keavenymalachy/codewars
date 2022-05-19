function deleteNth(arr,n){
  
    let tracker = {}
    
    let filteredArray = arr.filter(num => {
      tracker[num] = (tracker[num]||0) + 1
      //console.log(tracker[num])
      return tracker[num] <= n
    })
    
    return filteredArray
    