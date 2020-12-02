class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    // currently duplicates will be replaced. and conditional statement is needed to handle duplicates.
    this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      v => v !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      v => v !== v1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjVertex);
    }
    delete this.adjacencyList[vertex];
  }

  DFSRecursive(vertex, storage = [vertex], memo = {}) {
    // basecase: if theres no children
    if (!this.adjacencyList[vertex].length) return;
    // memo this vertex
    memo[vertex] = true;
    // loop over children
      // if children is not visited (not in memo)
        // recurse to that child
    for (let e of this.adjacencyList[vertex]) {
      if (!memo[e]) {
        storage.push(e);
        this.DFSRecursive(e, storage, memo);
      }
    }
    return storage;
  }

  DFSIterate(vertex) {
    let storage = [];
    let visited = {}

    let stack = [vertex]
    while (stack.length) {
      // pop the stack
      // if not visted
        // memo vertex
        // add stack to storage
        // add all the children to stack
      let v = stack.pop();
      if (!visited[v]) {
        visited[v] = true;
        storage.push(v);
        this.adjacencyList[v].forEach(e => {
          stack.push(e);
        });
      }
    }
    return storage;
  }

  BFS(vertex) {
    let queue = [vertex];
    let result = [];
    let visited = {};
    visited[vertex] = true;
    let current;

    while (queue.length) {
      current = queue.shift();
      result.push(current);

      this.adjacencyList[current].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let G = new Graph();
G.addVertex("A");
G.addVertex("B");
G.addVertex("C");
G.addVertex("D");
G.addVertex("E");
G.addVertex("F");
G.addEdge("A", "B");
G.addEdge("A", "C");
G.addEdge("B", "D");
G.addEdge("C", "E");
G.addEdge("D", "E");
G.addEdge("D", "F");
G.addEdge("E", "F");
console.log(G.DFSRecursive("A"));
console.log(G.adjacencyList);