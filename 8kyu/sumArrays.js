// Sum Numbers
function sum (numbers) {
    
    if (numbers.length === 0) {
      return 0
    }
    else {
      const initialVal = 0
      const sumWithInitial = numbers.reduce(
      (previousVal, currentVal) => previousVal + currentVal,
      initialVal)
      
      console.log(sumWithInitial)
      return sumWithInitial
    }
      
  };