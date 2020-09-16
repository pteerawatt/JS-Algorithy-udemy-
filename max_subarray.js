// create a function that finds the maxmimum sum of numbers in a collection. the number of items to be added is determined by window size
    // window is a section of the larger array. the length is determined by the second argument
    
// idea: find the sum of the first window. move the window and compare the sum of the next window
function maxSubarraySum(arr, size){
  if (size > arr.length) return null
  let max = 0;
  for (let i = 0; i < size; i++) {
      max += arr[i];
  }
  let movingMax = max;
  for (let i = size; i < arr.length; i++) {
      movingMax += arr[i] - arr[i - size];
      max = Math.max(max, movingMax);
  }
  return max;
}