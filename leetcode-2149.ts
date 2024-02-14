function rearrangeArray(nums: number[]): number[] {
	const n = nums.length;
	const res: number[] = new Array(n);
	let i = 0,
		pos = 0,
		neg = 1;

	while (i < n) {
		if (nums[i++] > 0) {
			res[pos] = nums[i - 1];
			pos += 2;
		} else {
			res[neg] = nums[i - 1];
			neg += 2;
		}
	}

	return res;
}
