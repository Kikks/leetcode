function maxFrequencyElements(nums: number[]): number {
	const map = new Map<number, number>();
	let highestFrequency = 1;
	nums.forEach(item => {
		if (map.has(item)) {
			const newCount = (map.get(item) ?? 0) + 1;
			if (newCount > highestFrequency) highestFrequency++;
			map.set(item, newCount);
		} else {
			map.set(item, 1);
		}
	});

	let answer = 0;
	for (const [key, value] of map) {
		if (value === highestFrequency) answer += highestFrequency;
	}
	return answer;
}
