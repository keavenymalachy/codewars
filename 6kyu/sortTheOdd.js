function sortArray(array) {

    let evenArr = []
    let oddArr = []
    let sortedArr = []

    array.filter(n => {
        n %2 !== 0 ? oddArr.push(n) : evenArr.push(n)
    })

    oddArr = oddArr.sort((a,b) => a-b)

    array.forEach((v,i) => {
        v %2 !== 0 ? sortedArr.push(oddArr.shift()) : sortedArr.push(evenArr.shift())
    })

    return sortedArr


}