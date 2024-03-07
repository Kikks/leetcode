class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function middleNode(head: ListNode | null): ListNode | null {
	if (!head?.next) return head;
	let noOfNodes = 1;
	let pointer = head;

	while (pointer?.next) {
		noOfNodes++;
		pointer = pointer.next;
	}

	if (noOfNodes === 2) return head.next;

	const half =
		noOfNodes % 2 === 0 ? noOfNodes / 2 + 1 : Math.ceil(noOfNodes / 2);
	noOfNodes = 0;
	pointer = head;

	while (pointer?.next) {
		noOfNodes++;
		if (noOfNodes === half) return pointer;
		else {
			pointer = pointer?.next;
		}
	}

	return head;
}
