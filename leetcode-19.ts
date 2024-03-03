class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	if (!head) return head;

	let nodeCount = 1;
	let node: ListNode | null = head;

	while (node?.next) {
		nodeCount++;
		node = node.next;
	}

	let currentNode = 0;
	node = head;

	if (!head?.next && n === 1) return null;

	if (nodeCount === n) {
		head = head?.next;
		return head;
	}

	while (node?.next) {
		if (nodeCount - n - 1 === currentNode) {
			node.next = node.next?.next ?? null;
		}

		node = node.next;
		currentNode++;
	}
	return head;
}
