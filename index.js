
function theBeatlesPlay( array1 , array2){
  let resultArray = []
  for( let i =0; i<array1.length; i++){
    resultArray[i] = `"${array1[i]} plays ${array2[i]}"`
  }
  return resultArray
}