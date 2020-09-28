// write a function that capitalize first letter of all elements in array

// idea: recursively remove one element at a time till we get to first element. push that element to our storage. 
    // as we recurse back we push the elements we just removed to storage

function capitalizeFirst (arr) {
    let result = [];

    let recurse = (array) => {
      // basecase: if we only have 1 element, push to result
      // else
        // remove last element
        // recurse the array with removed element
        // once we get back we push the removed element to the results

    };

    recurse(arr)
    return result;
}