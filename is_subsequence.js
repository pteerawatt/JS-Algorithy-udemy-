// create a function that checks to see if characters in the first string appears in the second string in the correct order.
    // there can be other characters in between
    
// idea: use two pointers. second pointer will iterate over the second string. once we find a match, first pointer will iterate over the first string. if the first pointer iterate through the entire length of the first string, return true.
function isSubsequence(str1, str2) {
  // if str1 > str2, return false
  if (!str1) return true;
  if (str1.length > str2.length) return false;
  // have two pointers (track of index)
  let firstPointer = 0;
  // iterate over second string
  for (let secondPointer = 0; secondPointer < str2.length; secondPointer++) {
      // if char matches first string
      if (str2[secondPointer] === str1[firstPointer]) firstPointer++;
        // iterate over first string
    // otherwise continue to iterate the second string
      if (firstPointer === str1.length) return true;
  }
  // if we finish iterating through the entire str1, return true, otherwise false
  return false;
}