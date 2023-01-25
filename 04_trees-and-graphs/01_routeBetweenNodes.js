/**
 * Given a directed graph, design an algorithm to find 
 * out whether there is a route between two nodes.
 */

function findRoute(givenNode, otherNode) {
  if (givenNode === otherNode) {
    return true;
  }
  const queue = [];
  givenNode.isVisited = true;
  queue.push(givenNode);

  while (queue.length !== 0) {
    const currentNode = queue.unshift();
    for (const child of currentNode.children) {
      if (!child.isVisited) {
        if (child === otherNode) {
          return true;
        }
        child.isVisited = true;
        queue.push(child);
      }
    }
  }
  return false;
}
