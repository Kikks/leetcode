function sortedSquares(nums: number[]): number[] {
	return nums.map(number => number ** 2).sort((a, b) => a - b);
}
