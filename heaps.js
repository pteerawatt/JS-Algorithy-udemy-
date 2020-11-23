class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    // push val to storage
    this.values.push(val);

    // bubble up the val to the correct position
      // find the childindex // parent index
      // while child element > parent
        // swap
        // update child // parent index
    let childIndex = this.values.length - 1;
    let parentIndex = Math.floor((childIndex - 1)/2);
    while (this.values[parentIndex] && this.values[childIndex] > this.values[parentIndex]) {
      [this.values[parentIndex], this.values[childIndex]] = [this.values[childIndex], this.values[parentIndex]]
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1)/2);
    }
  }

}