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

  dikstra(start, end) {
    let distFromStart = {}
    distFromStart[start] = 0;
    let visited = {};
    let previous = {};

    // start the queue
    // use while loop. while queue is not empty
      // dequeue to see which vertext we will look at
      // update visited and previous for children and dist
      // enqueue children

    let path = [end];
    let current = end;
    while (current !== start) {
      path.push(previous[end]);
      current = previous[end];
    }
    path.push(start);

    return path.reverse();
  }
}

// // test for weighted graph
// let G = new WeightedGraph();
// G.addVertex("A");
// G.addVertex("B");
// G.addVertex("C");
// G.addEdge("A", "B", 9);
// G.addEdge("A", "C", 5);


class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(value, priority) {
    this.queue.push({ value, priority});
    this.queue.sort((a, b) => a.priority - b.priority);
  }
  dequeue() {
    return this.queue.shift();
  }
}

// //test for priority queue
// let Q = new PriorityQueue();
// Q.enqueue("B", 3);
// Q.enqueue("C", 5);
// Q.enqueue("D", 2);
// Q.enqueue("Q", 20);
// console.log(Q.dequeue());