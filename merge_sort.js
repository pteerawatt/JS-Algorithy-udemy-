// helper function to merge and sort two already sorted arrays
const mergeSortedArr = (arr, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;
  // while there are still elements, compare and push element to result
  while (i < arr.length && j < arr2.length) {
      console.log(i, j)
      if (arr[i] < arr2[j] ) result.push(arr[i++]);
      else  result.push(arr2[j++]);

  }
  while (i < arr.length) result.push(arr[i++]);
  while (j < arr2.length) result.push(arr2[j++])
  return result;
}

// idea: recurse till we get down to single element arr. and use mergeSortedArr to concat them as you recurse back
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length/2); 
  return mergeSortedArr(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}