var smallerNumbersThanCurrent = function(nums) {
  let result = [];
  
  for (let i = 0; i < nums.length; i++) {
      let counter = 0;
      for (let j = 0; j < nums.length; j++) {
          if (j !== i) {
              if (nums[i] > nums[j]) counter++;
          }
      }
      result.push(counter);
  }
  return result;
}

// On solution. idea: make arrays to store frequency and use elements as index

var smallerNumbersThanCurrent = function(nums) {
  // use the elements as index
  
  // sort array 
  // find the frequency of each number
  // in an array, we just add the freq to the left to find total numbers
  let copy = [...nums];
  let sorted = copy.sort((a, b) => a - b);
  
  let storage = [];
  for (let i = 0; i < sorted.length; i++) {
      if (!storage[sorted[i]]) storage[sorted[i]] = 1;
      else storage[sorted[i]]++;
  }
  
  let sum = 0;
  for (let i = 0; i < storage.length; i++) {
      if (storage[i]) {
          storage[i] += sum;
          sum = storage[i];
      } else storage[i] = sum;
  }
  
  for (let i = 0; i < nums.length; i++) {
      nums[i] = storage[nums[i] - 1] || 0;
  }
  
  return nums
};