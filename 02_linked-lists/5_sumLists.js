/**
 * You have two numbers represented by a linked list,
 * where each node contains a single digit. The digits are
 * stored in reverse order,such that the 1's digit is at
 * the head of the list. Write a function that adds the
 * two numbers and returns the sum as a linked list.
 */

import { ListNode } from '../data-structures/ListNode.js';

function sumLists(head1, head2) {
	let carry = 0;
	let sumListDummyHead = new ListNode(0);
	let sumListNode = sumListDummyHead;

	while (head1 !== null || head2 !== null || carry !== 0) {
		const head1Value = head1?.value || 0;
        const head2Value = head2?.value || 0;
		const columnSum = head1Value + head2Value + carry;

		sumListNode.next = new ListNode(columnSum % 10);
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
const head1 = new ListNode(6)
	.append(new ListNode(1))
	.append(new ListNode(7));

// 5 -> 9 -> 2
const head2 = new ListNode(2)
	.append(new ListNode(9))
	.append(new ListNode(5));

// 5 -> 9 -> 3
const head3 = new ListNode(3)
	.append(new ListNode(9))
	.append(new ListNode(5));

// 5 -> 9
const head4 = new ListNode(9)
	.append(new ListNode(5));

// 2 -> 1 -> 9
const result = sumLists(head1, head2);
console.log(result);

// 2 -> 1 -> 0 -> 1
const result2 = sumLists(head1, head3);
console.log(result2);

// 2 -> 1 -> 7
const result3 = sumLists(head1, head4);
console.log(result3);
