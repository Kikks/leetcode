function rangeBitwiseAnd(left: number, right: number): number {
	if (left.toString(2).length !== right.toString(2).length) return 0;

	let ans = left;
	for (let i = left + 1; i <= right; i++) ans &= i;
	return ans;
}
