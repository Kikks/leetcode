function largestPerimeter(nums: number[]): number {
	if (nums.length < 3) return -1;
	nums.sort((a, b) => a - b);
	const sums: number[] = new Array(nums.length);

	for (let i = 0; i < nums.length; i++) {
		sums[i] = (sums[i - 1] ?? 0) + nums[i];
	}

	for (let i = nums.length - 1; i >= 0; i--) {
		if (i === 0) return -1;
		if (sums[i - 1] > nums[i]) return sums[i];
	}

	return -1;
}
