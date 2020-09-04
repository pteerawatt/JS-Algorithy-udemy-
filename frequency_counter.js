// given two strings check to see if the frequency of the characters match.

function validAnagram(str1, str2){
  if (str1.length !== str2.length) return false;
  let sto1 = {};
  let sto2 = {};
  // iterate over both strings and store frequency in object
  for (let char in str1) {
      sto1[char] = sto1[char]++ || 1;
  }
  for (let char in str2) {
      sto2[char] = sto2[char]++ || 1;
  }
  // loop over one object and check that all strings match
  for (let key in sto1) {
      if (sto1[key] !== sto2[key]) return false;
  }
  return true;
}