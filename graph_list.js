class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    // currently duplicates will be replaced. and conditional statement is needed to handle duplicates.
    this.adjacencyList[vertex] = [];
  }
}