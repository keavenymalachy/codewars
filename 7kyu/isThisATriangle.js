function isTriangle(a,b,c)
{
   let triangle = [a,b,c]
   
   let triangleSort = triangle.sort((a,b) => a - b)
   
   console.log(triangleSort)
  
  if (triangleSort[0] + triangleSort[1] > triangleSort[2]) {
    return true
  }
  else {
    return false
  }
}