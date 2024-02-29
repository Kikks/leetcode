class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

function isEvenOddTree(root: TreeNode | null): boolean {
	if (root === null) return false;

	const queue: TreeNode[] = [];
	queue.push(root);
	let level = -1;

	while (queue.length > 0) {
		level++;
		const size = queue.length;
		let prev = 0;

		for (let i = 0; i < size; i++) {
			const curr = queue.shift()!;

			if (level === 0 && curr.val % 2 === 0) {
				return false;
			}

			if (i === 0) {
				if (
					(level % 2 === 0 && curr.val % 2 === 1) ||
					(level % 2 === 1 && curr.val % 2 === 0)
				) {
					prev = curr.val;
				} else {
					return false;
				}
			} else {
				if (level % 2 === 1) {
					if (curr.val % 2 === 0 && prev > curr.val) {
						prev = curr.val;
					} else {
						return false;
					}
				} else {
					if (curr.val % 2 === 1 && prev < curr.val) {
						prev = curr.val;
					} else {
						return false;
					}
				}
			}

			if (curr.left !== null) {
				queue.push(curr.left);
			}

			if (curr.right !== null) {
				queue.push(curr.right);
			}
		}
	}

	return true;
}
