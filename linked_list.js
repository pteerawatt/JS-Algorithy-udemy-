class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // delete from tail
  pop() {
    if (!this.head) return undefined;
    
    const removed = this.tail;
    const traverse = (node) => {
      if (!node.next) {
        this.head = null;
        this.tail = null;
      }
      else if (!node.next.next) {
        node.next = null;
        this.tail = node;
      }
      else traverse(node.next)
    }
    traverse(this.head)
    this.length--;
    return removed;
  }

  // delete from head
  shift() {
    if (!this.head) return undefined;

    const removed = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.length) this.tail = null;
    return removed;
  }

  // insert to head
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // return the value given the "index"
  get(i) {
    if (i < 0 || i >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (current) {
      if (count === i) return current;
      current = current.next; 
      count++;
    }
  }

  // set a node value
  set(i, val) {
    let foundNode = this.get(i);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // insert a node at the given index
  insert(i, val) {
    if (i < 0 || i > this.length) return false;
    if (i === this.length) return !!this.push(val);
    if (i === 0) return !!this.unshift(val);
    let priorNode = this.get(i - 1);
    let afterNode = this.get(i);
    let insertNode = new Node(val);

    priorNode.next = insertNode;
    insertNode.next = afterNode;
    this.length++;
    return true;
  }
}
 
let LL = new SinglyLinkedList();
LL.push(1);
LL.push(2);
LL.push(3);
LL.pop();
LL.pop();
LL.pop();
LL.pop();
LL.push(1)
LL.push(2)
LL.shift()
LL.shift()
LL.unshift(1)
LL.unshift(2)
console.log(LL.insert(1, 99))