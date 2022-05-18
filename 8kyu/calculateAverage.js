function find_average(array) {
    let sum = 0;
   for (i = 0; i< array.length; i++){
    sum += array[i]
   }
    if (array.length === 0){
      return 0
    }else {
      return sum / array.length
    }
  }