class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add to tail
  push = (val) => {
    let newNode = new Node(val);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.net = newNode;
      newNode.prev = this.tailthis.tail = newNode;
    }
    this.length++;
    return this;
  }

  // 
}