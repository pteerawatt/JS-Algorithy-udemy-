// write a function that capitalize first letter of all elements in array

// idea: recursively remove one element at a time till we get to first element. push that element to our storage. 
    // as we recurse back we push the elements we just removed to storage

function capitalizeFirst (arr) {
    let result = [];

    let recurse = (array) => {
      // basecase: if we only have 1 element, push to result
      if (array.length === 1) result.push(array[0][0].toUpperCase() + array[0].slice(1))
      // else
      else {
        // remove last element
        let remove = array.pop();
        // recurse the array with removed element
        recurse(array);
        // once we get back we push the removed element to the results
        result.push(remove[0].toUpperCase() + remove.slice(1))
      }
    };

    recurse(arr)
    return result;
}


// this works without an inner function.
function capitalizeFirst (arr) {
  if (arr.length === 1) {
      let temp = [];
      temp.push(arr[0][0].toUpperCase() + arr[0].slice(1))
      return temp
  }

  let remove = arr.pop();
  let result = capitalizeFirst(arr);
  result.push(remove[0].toUpperCase() + remove.slice(1))
  
  return result;
}