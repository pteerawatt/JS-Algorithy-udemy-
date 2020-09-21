// wirte a function that returns the longest substring

// idea: iterate though the array in a window
    // we need to keep track of left and right
        // left index will be stored in the storage object
            // when we find a repeat, we will know the new length. its basically the last occurance move up 1
        // right will iterate every turn
        function findLongestSubstring(str){
          let storage = {};
          let left = 0;
          let length = 0;
          for (let right = 0; right < str.length; right++) {
              // if we find a repeated char
              if (storage[str[right]]) {
                  // reset left
                  left = Math.max(left, storage[str[right]]);
              }
              length = Math.max(length, right - left + 1);
              storage[str[right]] = right + 1
          }
          return length;
      }