function findDuplicate(nums: number[]): number {
	const arr = new Array(nums.length).fill(0);
	for (let n of nums) {
		if (arr[n - 1] > 0) return n;
		arr[n - 1] = n;
	}

	return -1;
}
