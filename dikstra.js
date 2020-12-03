class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight});
    this.adjacencyList[v2].push({ node: v1, weight});
  }
}

let G = new WeightedGraph();
G.addVertex("A");
G.addVertex("B");
G.addVertex("C");
G.addEdge("A", "B", 9);
G.addEdge("A", "C", 5);