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

let test = [-5,1,1,2,3,4,4,4,4,5];
console.log(countUniqueValues(test))