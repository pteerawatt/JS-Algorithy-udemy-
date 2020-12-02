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

  DFSRecursive(vertex, storage = [], memo = {}) {
    // memo this vertex
    memo[vertex] = true;
    // basecase: if theres no children
    if (!this.adjacencyList[vertex].length) return;
    // loop over children
      // if children is not visited (not in memo)
        // recurse to that child
    for (let e in this.adjacencyList[vertex]) {
      if (!memo[e]) {
        storage.push(e);
        this.DFSRecursive(e, storage, memo);
      }
    }
    return storage;
  }

}

let G = new Graph();
G.addVertex("pete");
G.addVertex("cj");
G.addVertex("penny");
G.addVertex("anubia");
G.addEdge("pete", "cj");
G.addEdge("pete", "penny");
G.addEdge("cj", "anubia");
G.addEdge("penny", "anubia");
console.log(G.DFSRecursive("pete"));
console.log(G.adjacencyList);