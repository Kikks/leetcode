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

function findBottomLeftValue(root: TreeNode | null): number {
	const queue = [root];
	let leftmost: TreeNode | null | undefined = null;

	while (queue.length > 0) {
		leftmost = queue.shift();

		if (leftmost?.right) {
			queue.push(leftmost.right);
		}
		if (leftmost?.left) {
			queue.push(leftmost.left);
		}
	}

	return leftmost?.val || 0;
}
