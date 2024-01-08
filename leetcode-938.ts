/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
	let sum = 0;

	function inorderTraversal(node: TreeNode | null): void {
		if (node !== null) {
			inorderTraversal(node.left);
			if (low <= node.val && high >= node.val) sum += node.val;
			inorderTraversal(node.right);
		}
	}

	inorderTraversal(root);
	return sum;
}
