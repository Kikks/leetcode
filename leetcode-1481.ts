function findLeastNumOfUniqueInts(arr: number[], k: number): number {
	const countMap = new Map<number, number>();
	arr.forEach(num => countMap.set(num, (countMap.get(num) ?? 0) + 1));

	let removal = k;
	const values = [...countMap.values()].sort((a, b) => a - b);

	return values.reduce((acc, curr) => {
		if (removal === 0) {
			if (curr > 0) return acc + 1;
			return acc;
		} else {
			if (curr > removal) {
				removal = 0;
				curr = curr - removal;
				return acc + 1;
			} else {
				removal = removal - curr;
				curr = 0;
				return acc;
			}
		}
	}, 0);
}
