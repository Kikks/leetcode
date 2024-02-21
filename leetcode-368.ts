function largestDivisibleSubset(nums: number[]): number[] {
	nums.sort((a, b) => a - b);

	const dp = new Array(nums.length).fill(1);
	let maxIndex = 0;

	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] % nums[j] === 0) {
				dp[i] = Math.max(dp[i], dp[j] + 1);
			}
		}
		if (dp[i] > dp[maxIndex]) {
			maxIndex = i;
		}
	}

	const result: number[] = [];
	let current = nums[maxIndex];
	let count = dp[maxIndex];
	for (let i = maxIndex; i >= 0; i--) {
		if (current % nums[i] === 0 && dp[i] === count) {
			result.unshift(nums[i]);
			current = nums[i];
			count--;
		}
	}

	return result;
}
