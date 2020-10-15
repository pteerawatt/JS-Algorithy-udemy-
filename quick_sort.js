// the idea is to pick a number, put all the lesser numbers to the left and greater numbers to the right
// recurse the left and the right

// this first way is with outer function
const pivot = (arr) => {
  let s = 0;
  for (let i = 1; i < arr.length; i++) {
      if (arr[0] > arr[i]) {
          s++;
          [arr[s], arr[i]] = [arr[i], arr[s]];
      }
  }
  [arr[0], arr[s]] = [arr[s], arr[0]];
  return s;
}


// without helper function

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  let counter = 0;
  
  // compare first element to element i.
  for (let i = 1; i < arr.length; i++) {
      // if element i is less than first element, update left side
      if (arr[i] < arr[0]) {
          counter ++;
          [arr[i], arr[counter]] = [arr[counter], arr[i]];
      }
  }
  
  // at the end of the loop move the first element to its correct position
  [arr[0], arr[counter]] = [arr[counter], arr[0]];

  let left = quickSort(arr.slice(0, counter));
  let right = quickSort(arr.slice(counter + 1));
  return [...left, arr[counter], ...right];
}
