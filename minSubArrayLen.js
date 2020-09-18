// write a function that returns the length of the samllest subarr that has a sum equal or more than the target value

// idea: iterate through the arr as a sub array
    // have to pointers left/right
    // we know we hit the end of the iteration when left is all the way to the end
    // keep track of the smallest length
    
    let minSubArrayLen = (arr, target) => {
      let left = 0;
      let right = 0;
      let length = Infinity;
      let total = 0;
      // iterate while left is less than arr.length
      while (left < arr.length) {
          if (total < target && right < arr.length) {
              // we add an element to the right
              total += arr[right];
              right++;
          } else if (total >= target){
              // we remove an element from the left
              total -= arr[left];
              left++;
              length = Math.min(length, right - left + 1);
              if (left === arr.length && total < target) return 0;
          } else {
              break;
          }
      }
      return length === Infinity ? 0 : length;
  }