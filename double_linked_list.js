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
  push(val) {
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

  // remove from tail
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  // remove from head
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // add to head
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // get node at index
  get(index) {
    if(index < 0 || index >= this.length) return null;
    if(index <= this.length/2) {
      let count = 0;
      let current = this.head;
      while(count !== index) {
        current = current.next;
        count++
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail; 
      while(current !== count) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  // set a value at a node
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
}