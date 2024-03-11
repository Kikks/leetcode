function groupAnagrams(strs: string[]): string[][] {
	const anagramMap = new Map<string, string[]>();

	for (let i = 0; i < strs.length; i++) {
		const sortedChars = strs[i].split("").sort().join("");
		anagramMap.set(sortedChars, [
			...(anagramMap.get(sortedChars) || []),
			strs[i]
		]);
	}

	const answer: string[][] = [];

	for (let [_, values] of anagramMap) {
		answer.push(values);
	}

	return answer;
}
