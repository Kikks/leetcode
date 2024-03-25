function findDuplicates(nums: number[]): number[] {
	const arr = new Array(nums.length).fill(0);
	const ans: number[] = [];
	for (let n of nums) {
		arr[n - 1] = (arr?.[n - 1] ?? 0) + 1;
		if (arr[n - 1] > 1) ans.push(n);
	}
	return ans;
}
