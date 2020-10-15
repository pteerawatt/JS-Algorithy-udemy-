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


const quickSort = (arr) => {
  if (arr.length <= 1) return arr
  let exclude = pivot(arr);
  return [...quickSort(arr.slice(0, exclude)), arr[exclude], ...quickSort(arr.slice(exclude + 1))]
}


