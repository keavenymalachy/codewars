function getCount(str) {
    const regex = /[aeiouAEIOU]/g
    
    const match = str.match(regex)
    
    return (match === null ? 0 : match.length)
  }