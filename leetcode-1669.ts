class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function mergeInBetween(
	list1: ListNode | null,
	a: number,
	b: number,
	list2: ListNode | null
): ListNode | null {
	let dummy = new ListNode(-1, list1);
	let left = null;
	let right = null;
	let c = 0;

	while (list1 && (!left || !right)) {
		c++;

		if (c === a) left = list1;
		if (c === b) right = list1.next.next;

		list1 = list1.next;
	}

	if (left) left.next = list2;

	while (list2.next) list2 = list2.next;

	list2.next = right;

	return dummy.next;
}
