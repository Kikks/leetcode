/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
	let dummyNode = new ListNode(0, head),
		currentNode = head;
	let hashMap = new Map<number, ListNode>([[0, dummyNode]]);
	let sum: number = 0;

	while (currentNode) {
		sum += currentNode.val;

		if (hashMap.has(sum)) {
			let found: ListNode = hashMap.get(sum).next;
			hashMap.get(sum).next = currentNode.next;

			let tempSum = sum;
			while (found !== currentNode) {
				tempSum += found.val;
				hashMap.delete(tempSum);

				found = found.next;
			}
		} else hashMap.set(sum, currentNode);

		currentNode = currentNode.next;
	}

	return dummyNode.next;
}
