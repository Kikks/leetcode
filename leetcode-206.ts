class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function reverseList(head: ListNode | null): ListNode | null {
	if (!head || head.next == null) {
		return head;
	}
	const stack = [];
	let currentNode = head;

	while (currentNode != null) {
		stack.push(currentNode);
		currentNode = currentNode.next;
	}
	let newHead = stack[stack.length - 1];
	while (stack.length > 0) {
		currentNode = stack.pop();
		const nextElement = stack[stack.length - 1] || null;
		currentNode.next = nextElement;
	}
	return newHead;
}
