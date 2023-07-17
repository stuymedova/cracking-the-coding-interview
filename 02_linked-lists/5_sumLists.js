/**
 * You have two numbers represented by a linked list,
 * where each node contains a single digit. The digits are
 * stored in reverse order,such that the 1's digit is at
 * the head of the list. Write a function that adds the
 * two numbers and returns the sum as a linked list.
 */

import { LinkedListNode } from '../data-structures/LinkedListNode.js';

function sumLists(head1, head2) {
	let carry = 0;
	let sumListDummyHead = new LinkedListNode(0);
	let sumListNode = sumListDummyHead;

	while (head1 !== null || head2 !== null || carry !== 0) {
		const head1Value = head1?.value || 0;
        const head2Value = head2?.value || 0;
		const columnSum = head1Value + head2Value + carry;

		sumListNode.next = new LinkedListNode(columnSum % 10);
		carry = columnSum >= 10 ? 1 : 0;
		sumListNode = sumListNode.next;

		if (head1 !== null) {
			head1 = head1.next;
		}
		if (head2 !== null) {
			head2 = head2.next;
		}
	}

	return sumListDummyHead.next;
}

// TEST CASES

// 7 -> 1 -> 6
const head1 = new LinkedListNode(6)
	.append(new LinkedListNode(1))
	.append(new LinkedListNode(7));

// 5 -> 9 -> 2
const head2 = new LinkedListNode(2)
	.append(new LinkedListNode(9))
	.append(new LinkedListNode(5));

// 5 -> 9 -> 3
const head3 = new LinkedListNode(3)
	.append(new LinkedListNode(9))
	.append(new LinkedListNode(5));

// 5 -> 9
const head4 = new LinkedListNode(9)
	.append(new LinkedListNode(5));

// 2 -> 1 -> 9
const result = sumLists(head1, head2);
console.log(result);

// 2 -> 1 -> 0 -> 1
const result2 = sumLists(head1, head3);
console.log(result2);

// 2 -> 1 -> 7
const result3 = sumLists(head1, head4);
console.log(result3);
