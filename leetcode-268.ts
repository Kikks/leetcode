function missingNumber(nums: number[]): number {
	const n = nums.length;
	const apSum = (n * (n + 1)) / 2;
	const sum = nums.reduce((acc, curr) => acc + curr, 0);
	return apSum - sum;
}
