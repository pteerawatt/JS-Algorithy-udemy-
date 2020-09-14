// given two positive int, findout if both strings contain the same frequency of each number
// do this in ON

// findout if both strings have the same frequency for each number

// we loop through first string and store frequency in storage. loop through the second string and check in storage
function sameFrequency(str1, str2){
  str1 = JSON.stringify(str1);
  str2 = JSON.stringify(str2);
  if (str1.length !== str2.length) return false
  let storage = {};
// loop over number once and store frequency
  for (let num of str1) {
      storage[num] ? storage[num]++ : storage[num] = 1;
  }
// loop over second number and delete frquency
  for (let num of str2) {
      // if number doesnt exist, return false
      if (storage[num]) storage[num]--;
      else return false;
  }
  return true;
}
