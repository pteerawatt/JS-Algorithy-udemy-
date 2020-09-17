// write a function that finds the minimal length for a sub array that has a sum equal or more than target.

// idea: iterate through the array and add element to check current total
    // we keep track of right index and current sub array
    // if current total is less than target, add a right element
    // else (total is more or eql target) remove a left element
    
    let minSubArrayLen = (arr, target) => {
      let right = 0;
      let left = 0;
      let currSize = 0;
      let size = Infinity;
      let total = 0;
      while (right < arr.length) {
          if (total < target) {
              total += arr[right];
              currSize++;
              if (right + 1 < arr.length) right++;
          } else if (total >= target && left < arr.length){
              size = Math.min(currSize, size);
              total -= arr[left];
              left++
              currSize--;
          }
          else if (left >= arr.length) {
              break;
          }
          if (right === arr.length -1 && currSize === arr.length) return 0;
      }
      return size;
  }