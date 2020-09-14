// given an array of sorted numbers. return the total number of unique values

// given an array of sorted numbers. return the total number of unique values

let countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  // have a counter
  let counter = 1;
  // use two pointers. one point at index, other point at value
  let currVal = arr[0];
  // loop over array
  for (let val of arr) {
      // if current value is more
      if (val > currVal) {
        // increment counter
        counter++;
        // change current value to the new one
        currVal = val;
      }
  }
  // return the counter
  return counter;
}

// second solution with motifying the array to generate a unique array and using the back index tracker to find length (number of unique values)

function countUniqueValues(arr){
  // use two pointers and iterate through the array to generate unique values in front.
  // i will move to generate a unique arr, while j will iterate to check values
  // loop over arr
  if (!arr.length) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
      // if j is not the same as i
      if (arr[j] !== arr[i]) {
          // increment i
          i++;
          arr[i] = arr[j];
      }
  }
  // return ++i
  return ++i;
 }