function findWinners(matches: number[][]): number[][] {
	const winMap = new Map<number, number>();
	const lossMap = new Map<number, number>();

	for (let i = 0; i < matches.length; i++) {
		winMap.set(matches[i][0], (winMap.get(matches[i][0]) || 0) + 1);
		lossMap.set(matches[i][1], (lossMap.get(matches[i][1]) || 0) + 1);
	}

	const noLoses: number[] = [];
	const oneLoss: number[] = [];

	for (let [key] of winMap) {
		if (!lossMap.has(key)) noLoses.push(key);
	}

	for (let [key, value] of lossMap) {
		if (value === 1) oneLoss.push(key);
	}

	noLoses.sort((a, b) => a - b);
	oneLoss.sort((a, b) => a - b);

	return [noLoses, oneLoss];
}
