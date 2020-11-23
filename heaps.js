class Heap {
  constructor() {
    this.storage = [];
  }

  insert(val) {
    // push val to storage
    this.storage.push(val);

    // bubble up the val to the correct position
      // find the childindex // parent index
      // while child element > parent
        // swap
        // update child // parent index
    let childIndex = this.storage.length;
    let parentIndex = Math.floor((childIndex - 1)/2);

    while (this.storage[parrentIndex] && this.storage[childIndex] > this.storage[parentIndex]) {
      [this.storage[parentIndex], this.storage[childIndex]] = [this.storage[childIndex], this.storage[parentIndex]]
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1)/2);
    }
  }

}