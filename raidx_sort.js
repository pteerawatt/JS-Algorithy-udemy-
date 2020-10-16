



// helper function allows us to get a value at a position. like index but start from the right side

// 7323, 2
// 7323/100 = 73.23
// floor => 73
// 73 % 10 = 3
const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};


const digitCount = (num) => {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}