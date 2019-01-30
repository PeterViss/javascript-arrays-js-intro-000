var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array,element) {
  var new_array = [element, array]
  return new_array

}

function destructivelyAddElementToBeginningOfArray(array,element) {
 array.shift(element)
 return array
}

function addElementToEndOfArray(array,element) {
  var new_array = [array, element]
  return new_array
}

function destructivelyAddElementToEndOfArray(array,element){
array.push(element)
return array
}

function accessElementInArray(array,index){

  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array,element){
  array.unshift(array)
  return array[0]
}
