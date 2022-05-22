function descendingOrder(n){

    let sortedNums = ""
    const numArr = Array.from(String(n), Number)
    const sortNums = numArr.sort((a,b) => b-a)

    sortNums.forEach(v => sortedNums = sortedNums.concat(v))

    return Number(sortedNums)
  }