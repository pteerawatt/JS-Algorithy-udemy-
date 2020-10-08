// write a function that capitalize all words in an array

// idea: keep track of an index in an array. as we reurse we increment index. this allows us to not have to make a new array;

function capitalizeWords (arr, i = 0) {
  // basecase: if index = length, return arr
  if (i === arr.length) {
      return arr
  }
  // capitalize first index
  arr[i] = arr[i].toUpperCase();
  i++;
  
  return capitalizeWords(arr, i)
}