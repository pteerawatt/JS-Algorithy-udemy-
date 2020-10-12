// as we iterate though the array we look at two elements at a time. we push the greatest value to the right. with each iteration we know the furthest value to the right is the max value so we iterate again in a smaller array omitting the last right value

const bubbleSort = (arr) => {
    let noSwap;
    for (let i = arr.length -1; i >= 0; i--) {
        noSwap = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwap = false;
            }
        }
        if (noSwap) return arr;
    }
    return arr;
}

let test = [1, 2, 3, 5, 4];
console.log(bubbleSort(test))
