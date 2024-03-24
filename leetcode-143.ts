class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
	let fast = head;
	let slow = head;

	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;
	}

	// store the second half of linked list
	let secondHalf = slow.next;

	// make last node in left half equal to null
	slow.next = null;

	// reverse right half
	let prev = null;
	while (secondHalf) {
		const temp = secondHalf.next;
		secondHalf.next = prev;
		prev = secondHalf;
		secondHalf = temp;
	}

	let left = head;
	let right = prev;

	// alternate nodes
	while (left && right) {
		const tempLeft = left.next;
		const tempRight = right.next;

		left.next = right;
		right.next = tempLeft;

		left = tempLeft;
		right = tempRight;
	}
}
