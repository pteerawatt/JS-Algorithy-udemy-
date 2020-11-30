class PriorityQueue {
  constructor() {
    this.values = [];
  }

  insert(val, priority) {
    // push val to storage
    let newNode = new Node(val, priority);
    this.values.push(newNode);

    // bubble up the val to the correct position
      // find the childindex // parent index
      // while child element > parent
        // swap
        // update child // parent index
    let childIndex = this.values.length - 1;
    let parentIndex = Math.floor((childIndex - 1)/2);
    while (this.values[parentIndex].priority && this.values[childIndex].priority > this.values[parentIndex].priority) {
      [this.values[parentIndex], this.values[childIndex]] = [this.values[childIndex], this.values[parentIndex]]
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1)/2);
    }
  }

  remove() {
    // swap first and last value, and remove last value
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
  
      // correct the tree by sinking
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild.priority > element.priority) || (swap !== null && rightChild.priority > leftChild.priority)) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      [this.values[idx], this.values[swap]] = [this.values[swap], this.values[idx]];
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}