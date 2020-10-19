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
  }

  pop() {
    if (!this.head) return 'No item';
    
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
console.log(LL)