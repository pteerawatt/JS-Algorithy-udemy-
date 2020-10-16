



// helper function allows us to get a value at a position. like index but start from the right side

// 7323, 2
// 7323/100 = 73.23
// floor => 73
// 73 % 10 = 3
const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};


const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const maxDigits = (nums) => {
  let max = 0;
  for (let e of nums) max = Math.max(digitCount(e), max);
  return max;
}
// console.log(maxDigits([1,23, 12345, 22, 2, 13451]))

const radixSort = (nums) => {
  // find max digit 
  const maxdigits = maxDigits(nums); 
  // loop over max digt ammount of time
    // create bucket
    // place element element in bucket
    // concat all arrays in bucket
  for (let t = 0; t < maxdigits; t++) {
    let bucket = Array.from({length: 10}, () => [])
    for (let i = 0; i < nums.length; i++) {
       let num = getDigit(nums[i], t);
       bucket[num].push(nums[i]);
    }
    nums = [].concat(...bucket);
  }
  
  
  return nums
}