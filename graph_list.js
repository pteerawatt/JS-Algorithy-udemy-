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
}