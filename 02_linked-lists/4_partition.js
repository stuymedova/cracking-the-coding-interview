/**
 * Write code to partition a linked list around a value x,
 * such that all nodes less than x come before all nodes
 * greater than or equal to x. If x is contained within
 * the list the values of x only need to be after the
 * elements less than x (see below). The partition element
 * x can appear anywhere in the "right partition"; it does
 * not need to appear between the left and right
 * partitions.
 */

import { LinkedListNode } from '../data-structures/LinkedListNode.js';

function partition(head, x) {
	const leftPartitionDummyHead = new LinkedListNode();
    const rightPartitionDummyHead = new LinkedListNode();

    let currentNode = head;
    let leftPartitionNode = leftPartitionDummyHead;
    let rightPartitionNode = rightPartitionDummyHead;

    while (currentNode !== null) {
        if (currentNode.value >= x) {
            rightPartitionNode.next = new LinkedListNode(currentNode.value);
            rightPartitionNode = rightPartitionNode.next;
        }
        else {
            leftPartitionNode.next = new LinkedListNode(currentNode.value);
            leftPartitionNode = leftPartitionNode.next;
        }
        currentNode = currentNode.next;
    }

    leftPartitionNode.next = rightPartitionDummyHead.next;
    return leftPartitionDummyHead.next;
}
