function firstMissingPositive(nums: number[]): number {
	let smallestPositive = Infinity;
	let largestPositive = -Infinity;
	const numSet = new Set(nums);

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (num > 0) {
			if (smallestPositive > num) smallestPositive = num;
			if (largestPositive < num) largestPositive = num;
		}
	}

	if (smallestPositive > 1) return 1;

	for (let i = 1; i < largestPositive; i++) {
		if (!numSet.has(i)) return i;
	}

	return largestPositive + 1;
}
