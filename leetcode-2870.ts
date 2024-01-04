function minOperations(nums: number[]): number {
	let map = new Map<number, number>();
	let ans = 0;

	for (let i = 0; i < nums.length; i++)
		map.set(nums[i], (map.get(nums[i]) || 0) + 1);

	for (let value of map.values()) {
		if (value < 2) return -1;
		else if (value % 3 === 0) ans += value / 3;
		else if ((value - 4) % 3 === 0) ans += (value - 4) / 3 + 2;
		else if ((value - 2) % 3 === 0) ans += (value - 2) / 3 + 1;
		else if (value % 2 === 0) ans += value / 2;
	}

	return ans;
}
