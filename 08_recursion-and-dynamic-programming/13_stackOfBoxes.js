/**
 * You have a stack of n boxes, with widths w1, heights hi,
 * and depths di. The boxes cannot be rotated and can only
 * be stacked on top of one another if each box in the
 * stack is strictly larger than the box above it in width,
 * height, and depth. Implement a method to compute the
 * height of the tallest possible stack. The height of a
 * stack is the sum of the heights of each box.
 */

function computeTallestStack(boxes) {
	boxes = [...boxes].sort(compareHeight);
	boxes.sort(compareWidthAndDepth);
	const memo = {};
	let restHeight = boxes.reduce((acc, box) => {
		return acc + box.height;
	}, 0);
	let tallestStack = -Infinity;
	for (let i = 0; i < boxes.length; i++) {
		tallestStack = Math.max(computeStack(boxes, i), tallestStack);
		restHeight -= boxes[i].height;
		if (restHeight <= tallestStack) {
			break;
		}
	};
	return tallestStack;

	function computeStack(boxes, boxIndex = 0, prevBoxIndex = null) {
		if (boxIndex >= boxes.length) {
			return 0;
		}
		if (prevBoxIndex === null || (
			boxes[boxIndex].width < boxes[prevBoxIndex].width &&
			boxes[boxIndex].height < boxes[prevBoxIndex].height &&
			boxes[boxIndex].depth < boxes[prevBoxIndex].depth)
		) {
			const key = JSON.stringify(boxes[boxIndex]);
			if (key in memo) {
				return memo[key];
			}
			memo[key] = boxes[boxIndex].height + computeStack(boxes, boxIndex + 1, boxIndex);
			return memo[key];
		}
		return computeStack(boxes, boxIndex + 1, prevBoxIndex);;
	}
}

function compareHeight(a, b) {
	if (a.height > b.height) {
		return -1;
	}
	return 1;
}
function compareWidthAndDepth(a, b) {
	if (a.width > b.width && a.depth > b.depth) {
		return -1;
	}
	return 1;
}

// TEST CASES
const box1 = {
	width: 3,
	height: 1,
	depth: 1
};
const box2 = {
	width: 1,
	height: 100,
	depth: 1
};
const box3 = {
	width: 1,
	height: 1,
	depth: 3
};
const boxes = [box1, box2, box3];
const result = computeTallestStack(boxes);
console.log(result); // 100

const box10 = {
	width: 15,
	height: 15,
	depth: 15
};
const box20 = {
	width: 20,
	height: 20,
	depth: 30
};
const box30 = {
	width: 15,
	height: 30,
	depth: 30
};
const box40 = {
	width: 10,
	height: 10,
	depth: 10
};
const boxes2 = [box30, box20, box10, box40];
const result2 = computeTallestStack(boxes2);
console.log(result2); // 45
