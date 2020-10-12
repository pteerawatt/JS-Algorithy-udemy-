// idea: as we iterate through the array we sort the left portion of the array and we find where the current element fits in the sorted leftside

{
  const insertionSort = (arr) => {
      // have an outer loop iterate from front to end (this will take care of our left sorted side)
      for (let i = 0; i < arr.length; i++) {
          console.log(arr)
          // have inner loop check to see where current value goes
          // the inner loop will loop from the back and just check each value
          let current = arr[i]
          for (let j = i - 1; j >= 0; j--) {
              // if current value is less than arr[j] we "move"(copy) arr[j]'s value to the right'
              if (current < arr[j]) {
                  arr[j + 1] = arr[j];
              } 
              // else we found a value that is less than current. which means we know current goes after arr[j]
              else {
                  arr[j + 1] = current;
                  break;
              }
          }
      }
      
      return arr;
  }

  const test = [1, 4, 5, 3, 2];
  console.log(insertionSort(test))
}