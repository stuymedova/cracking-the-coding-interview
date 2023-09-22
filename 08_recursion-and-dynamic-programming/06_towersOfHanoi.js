/**
 * In the classic problem of the Towers of Hanoi, you have
 * 3 towers and N disks of different sizes which can slide
 * onto any tower. The puzzle starts with disks sorted in
 * ascending order of size from top to bottom (i.e., each
 * disk sits on top of an even larger one). You have the
 * following constraints:
 *
 * (1) Only one disk can be moved at a time.
 * (2) A disk is slid off the top of one tower onto
 * another tower.
 * (3) A disk cannot be placed on top of a smaller disk.
 *
 * Write a program to move the disks from the first tower
 * to the last using Stacks.
 */

import { Stack } from '../data-structures/Stack.js'

class TowersOfHanoi {
	constructor(n) {
		this.numberOfDisks = n;
		this.towers = Array.from(new Array(3), () => new Tower());
		for (let i = n; i >= 1; i--) {
			this.towers[0].addDisk(i);
		}
	}

	solve() {
		this.towers[0].moveDisks(
			this.numberOfDisks, this.towers[1], this.towers[2],
		);
		return this.towers;
	}
}

class Tower {
	constructor() {
		this.disks = new Stack();
	}

	addDisk(diameter) {
		if (!this.disks.isEmpty() && this.disks.peek() <= diameter) {
			throw new Error('Invalid placement');
		}
		this.disks.push(diameter);
	}

	moveTopTo(destination) {
		const top = this.disks.pop();
		destination.addDisk(top);
	}

	moveDisks(n, buffer, destination) {
		if (n <= 0) {
			return;
		}
		// Move top n - 1 disks from origin to buffer, using destination as a buffer.
		this.moveDisks(n - 1, destination, buffer);
		// Move top from origin to destination
		this.moveTopTo(destination);
		// Move top n - 1 disks from buffer to destination, using origin as a buffer.
		buffer.moveDisks(n - 1, this, destination);
	}
}

/* TEST */
var towers = new TowersOfHanoi(5);
console.log(towers);
towers.solve();
console.log(towers);

var towers2 = new TowersOfHanoi(6);
console.log(towers2);
towers2.solve();
console.log(towers2);
