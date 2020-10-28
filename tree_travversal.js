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

  search(val, node = this.root) {
    if (!node) return null;
    if (node.val === val) return node;
    else {
      if (val < node.val) return this.search(val, node.left)
      else if (val > node.val) return this.search(val, node.right)
    }
  }

  bfs() {
    // have a queue (with root) and storage arr
    // while queue is not empty
      // dequeue and add value to storage
      // if dequeued element have child, add child to queue
    let queue = [this.root];
    let storage = [];
    
    while (queue.length) {
      let dequeue = queue.shift();
      storage.push(dequeue.val);
      if (dequeue.left) queue.push(dequeue.left);
      if (dequeue.right) queue.push(dequeue.right)
    }
  
    return storage;
    }
  
  dfs(node = this.root, storage = []) {
    storage.push(node.val);
    
    if (node.left) this.dfs(node.left, storage);
    if (node.right) this.dfs(node.right, storage);
    
    return storage;
  }
}