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

class PriorityHeap {
  constructor() {
    this.storage = [];
  }

  enqueue(value, priority) {
    // push into storage and then bubble up
    // in a loop, check parent. if parent is lower, switch
    this.storage.push({ value, priority });
    let currIdx = this.storage.length - 1;
    let parentIdx = Math.floor((currIdx - 1)/2);
    while (parentIdx >= 0) {
      if (this.storage[currIdx].priority < this.storage[parentIdx].priority) {
        [this.storage[parentIdx], this.storage[currIdx]] = [this.storage[currIdx], this.storage[parentIdx]];
        currIdx = parentIdx;
      } else break;
    }
  }

  dequeue() {

  }
}

let H = new PriorityHeap();
H.enqueue("A", 4);
H.enqueue("B", 2);
H.enqueue("C", 1);
console.log(H.storage);

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

    for (let key in this.adjacencyList) {
      if (key !== start) {
        distFromStart[key] = Infinity;
      }
    }

    // start the queue
    let queue = new PriorityQueue();
    queue.enqueue(start, 0);

    while (queue.queue.length) {
      let current = queue.dequeue();
      let vertex = current.value;
      if (!visited[vertex]) {
        visited[vertex] = true;
        for (let key of this.adjacencyList[vertex]) {
          // update distant from start to vertex if its a smaller value
          let currentDist = distFromStart[vertex] + key.weight;
          if (currentDist < distFromStart[key.node]) {
            distFromStart[key.node] = currentDist;
            previous[key.node] = vertex;
          }
          queue.enqueue(key.node, currentDist);
        }
      }
    }

    let path = [end];
    let current = end;
    while (current !== start) {
      path.push(previous[current]);
      current = previous[current];
    }

    return path.reverse();
  }
}

// // test for weighted graph
// let G = new WeightedGraph();
// G.addVertex("A");
// G.addVertex("B");
// G.addVertex("C");
// G.addVertex("D");
// G.addVertex("E");
// G.addVertex("F");
// G.addEdge("A", "B", 4);
// G.addEdge("A", "C", 2);
// G.addEdge("B", "E", 3);
// G.addEdge("C", "D", 2);
// G.addEdge("C", "F", 4);
// G.addEdge("D", "E", 3);
// G.addEdge("D", "F", 1);
// G.addEdge("E", "F", 1);
// console.log(G.dikstra("A", "E"));

