// iterate though the array and find the min. at the end of the loop, swap last item for first. 
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[lowest]) lowest = j;
          if (j = arr.length - 1) [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
      }
  }
  return arr
}

let test = [1, 2, 3, 5, 4];
console.log(selectionSort(test))