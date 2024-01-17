function uniqueOccurrences(arr: number[]): boolean {
	const occurenceMap = new Map<number, number>();
	for (let i = 0; i < arr.length; i++) {
		occurenceMap.set(arr[i], (occurenceMap.get(arr[i]) || 0) + 1);
	}

	const occurences = [...occurenceMap.values()].sort((a, b) => a - b);
	for (let i = 1; i < occurences.length; i++) {
		if (occurences[i] === occurences[i - 1]) return false;
	}

	return true;
}
