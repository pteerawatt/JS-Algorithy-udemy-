// write a function that finds the minimal length for a sub array that has a sum equal or more than target.

// idea: find the first subarray that is qualified. then iterate the array
    // add the right element and remove the left
        // if above target, move left
        // if below target, move right
    // we have to keep track of the smallest length of arr
    
    let minSubArrayLen = (arr, target) => {
      let total = 0;
      let i = 0;
      while (total < target) {
          if (i > arr.length) return 0
          total += arr[i];
          i++;
      }
      let length = i + 1;
      for (let j = i + 1; j < arr.length; j++) {
          let tempTotal = total + arr[j] - arr[length - j];
          if (tempTotal < target) {
              // how many times do we need to add
          }
          if (tempTotal > target) {
              // we dont know how many times can we move 
          }
      }
  }