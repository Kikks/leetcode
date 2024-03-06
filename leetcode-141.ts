class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function hasCycle(head: ListNode | null): boolean {
	if (!head) return false;

	let walker: ListNode | null | undefined = head;
	let runner: ListNode | null | undefined = head;

	while (true) {
		walker = walker?.next;
		runner = runner?.next?.next;
		if (!walker || !runner) return false;
		if (walker === runner) return true;
	}
}
