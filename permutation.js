// idea: iterate through the collection
    // take an item out and add to a temp array while iterating
    var permute = function(nums) {
      let storage = [];
      let rec = (arr, tempArr) => {
          let elementToRm = [];
          // basecase: when arr is empty we used all posible elements
          if (!arr.length) storage.push(tempArr);
          else for (let i = 0; i < arr.length; i++) {
              // remove an element
              elementToRm = arr.splice(i, 1)
              // add that element to the temp and recurse
              rec(arr, [...tempArr, ...elementToRm]);
              // everytime we break out we have to backtrack and add
              // the element back
              arr.splice(i, 0, ...elementToRm)
          }
      };
      
      rec(nums, []);
      return storage;
  };