// write a function that takes a sorted array. see if there is a pair of num that averages to the target

// because this is sorted, if we start from the beginning and the end. find the average of that number. if its more than target, we move the right side down, else we move the left side up. if its equal, we return true.
// while left is less than right
function averagePair(arr, target){
  // make left and right variable
  let left = 0;
  let right = arr.length - 1;
  // while left is less than right
  while(left < right) {
      // average left and right
      let avg = (arr[left] + arr[right])/2;
          // if equal return true
          if (avg === target) return true;
          // if more than target, more right down
          else if (avg > target) right--;
          // else move left up
          else left++;
  }
  // return false
  return false;
}
