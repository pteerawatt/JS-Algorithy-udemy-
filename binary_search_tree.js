class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert (val) {
    let newNode = new Node(val)
    if (!this.root) this.root = newNode;
    else {
      let current = this.root;
      while (current.left && current.right) {
        if (val === current.val) return 'cannot insert duplicate';
        if (val < current.val) current = current.left;
        else current = current.right;
      }
      if (val < current.val) current.left = newNode;
      else current.right = newNode;
    }
    return this;
  }
}