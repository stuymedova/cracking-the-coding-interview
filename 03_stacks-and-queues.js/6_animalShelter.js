/**
 * An animal shelter, which holds only dogs and cats,
 * operates on a strictly "first in, first out" basis.
 * People must adopt either the "oldest" (based on arrival
 * time) of all animals at the shelter, or they can select
 * whether they would prefer a dog or a cat (and will
 * receive the oldest animal of that type). They cannot
 * select which specific animal they would like. Create the
 * data structures to maintain this system and implement
 * operations such as enqueue, dequeueAny, dequeueDog, and
 * dequeueCat.
 */

import { Queue } from '../data-structures/Queue.js';

class AnimalQueue {
	constructor() {
		this.catsQueue = new Queue();
		this.dogsQueue = new Queue();
		this.animals = [];
	}

	enqueue(type, id) {
		this.animals.push(type);
		if (type === 'dog') {
			this.dogsQueue.enqueue(id);
		}
		else if (type === 'cat') {
			this.catsQueue.enqueue(id);
		}
	}

	dequeueAny() {
		const type = this.animals.shift();
		if (type === 'dog') {
			return this.dogsQueue.dequeue();
		}
		if (type === 'cat') {
			return this.catsQueue.dequeue();
		}
	}

	dequeueDog() {
		const indexInAnimalList = this.animals.indexOf('dog');
		if (indexInAnimalList === -1) {
			throw new Error('No dogs available.');
		}
		this.animals.splice(indexInAnimalList, 1);
		return this.dogsQueue.dequeue();
	}

	dequeueCat() {
		const indexInAnimalList = this.animals.indexOf('cat');
		if (indexInAnimalList === -1) {
			throw new Error('No cats available.');
		}
		this.animals.splice(indexInAnimalList, 1);
		return this.catsQueue.dequeue();
	}
}

// TEST CASES
const animalQueue = new AnimalQueue();
animalQueue.enqueue('dog', '0001');
animalQueue.enqueue('dog', '0002');
animalQueue.enqueue('cat', '0003');
animalQueue.enqueue('dog', '0004');
animalQueue.enqueue('cat', '0005');

const cat = animalQueue.dequeueCat();
const any = animalQueue.dequeueAny();
const dog = animalQueue.dequeueDog();

console.log(cat); // 0003
console.log(any); // 0001
console.log(dog); // 0002
