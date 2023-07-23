/**
 * You are given a list of projects and a list of
 * dependencies (which is a list of pairs of projects,
 * where the second project is dependent on the first
 * project). All of a project's dependencies must be
 * built before the project is. Find a build order that
 * will allow the projects to be built. If there is no
 * valid build order, return an error.
 */

function findBuildOrder(projects, dependencies) {
	const dependencyGraph = buildDependencyGraph(projects, dependencies);

	// A sneaky way to detect cycle in a graph
	try {
		JSON.stringify(dependencyGraph);
	} catch {
		return [];
	}

	return orderProjects(dependencyGraph.nodes);
}

function buildDependencyGraph(projects, dependencies) {
	const graph = new Graph();

	for (const project of projects) {
		graph.addVertex(project);
	}

	for (const [source, destination] of dependencies) {
		graph.addEdge(source, destination);
	}

	return graph;
}

function orderProjects(projects) {
	const independentNodes = getIndependentNodes(projects);
	const queue = [...independentNodes];
	const buildOrder = [];

	while (queue.length !== 0) {
		const node = queue.shift();

		// If there are still nodes that point to the
		// current node, re-enqueue the node.
		if (node.weight >= 1) {
			queue.push(node);
			continue;
		}

		// Otherwise, add the node to build order and
		// enqueue its children.
		buildOrder.push(node.value);

		for (const child of node.adjacent) {
			child.weight -= 1;

			const isAlreadyEnqueued =
				queue.indexOf(child) === -1 ? false : true;

			if (!isAlreadyEnqueued) {
				queue.push(child);
			}
		}
	}

	return buildOrder;
}

function getIndependentNodes(nodes) {
	const independentNodes = nodes.filter((node) => {
		return node.weight === 0;
	});

	return independentNodes;
}

class GraphNode {
	constructor(value) {
		this.value = value;
		this.weight = 0;
		this.adjacent = [];
	}

	addAdjacent(node) {
		node.weight += 1;
		this.adjacent.push(node);
	}
}

class Graph {
	constructor() {
		this.nodes = [];
		return this;
	}

	addVertex(value) {
		const node = new GraphNode(value);
		this.nodes.push(node);

		return this;
	}

	addEdge(source, destination) {
		const sourceNode = this.get(source);
		const destinationNode = this.get(destination);

		if (!sourceNode) {
			throw new Error('Source Node is not found.');
		}
		if (!destinationNode) {
			throw new Error('Destination Node is not found.');
		}

		sourceNode.addAdjacent(destinationNode);
		return this;
	}

	get(value) {
		const soughtNode = this.nodes.find((node) => node.value === value);
		return soughtNode ? soughtNode : null;
	}
}

// TEST CASES
const buildOrder = findBuildOrder(
	['a', 'b', 'c', 'd', 'e', 'f', 'g'],
	[['f', 'c',], ['f', 'b'], ['c', 'a'], ['b', 'a'], ['f', 'a'], ['a', 'e'], ['b', 'e'], ['d', 'g']],
);
console.log(buildOrder);
