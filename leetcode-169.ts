function majorityElement(nums: number[]): number {
	const map = new Map<number, number>();
	const half = Math.floor(nums.length / 2);
	for (let i = 0; i < nums.length; i++) {
		const count = map.get(nums[i]) || 0;
		if (count === half) return nums[i];
		map.set(nums[i], count + 1);
	}

	return 0;
}
