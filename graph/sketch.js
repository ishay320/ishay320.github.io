function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

class Node {
  key
  value
  neighborArr = []
  constructor(key, value) {
    this.key = key
    this.value = value
  }
  getValue() {
    return this.value
  }
  addNeighbor(node) {
    this.neighborArr.push(node)
  }
  removeNeighbor(node = Node) {
    let pos = this.neighborArr.indexOf(node)
    if (pos == -1) {
      throw ("ERROR: cant find node" + node.getValue())
    }
    this.neighborArr.r////////////////////////
  }
  haveNeighbor(node) {
    let pos = this.neighborArr.indexOf(node)
    if (pos == -1) {
      return false
    }
    return true
  }
}

class graph {
  nodes
}