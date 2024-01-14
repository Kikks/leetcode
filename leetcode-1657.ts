function closeStrings(word1: string, word2: string): boolean {
	if (word1.length !== word2.length) return false;
	const word1CharsMap = new Map<string, number>();
	const word2CharsMap = new Map<string, number>();

	for (let i = 0; i < word1.length; i++) {
		word1CharsMap.set(word1[i], (word1CharsMap.get(word1[i]) || 0) + 1);
	}

	for (let i = 0; i < word2.length; i++) {
		if (!word1CharsMap.get(word2[i])) return false;
		word2CharsMap.set(word2[i], (word2CharsMap.get(word2[i]) || 0) + 1);
	}

	const word1Frequencies: number[] = [];
	const word2Frequencies: number[] = [];

	for (let [, value] of word1CharsMap) word1Frequencies.push(value);
	for (let [, value] of word2CharsMap) word2Frequencies.push(value);

	word1Frequencies.sort();
	word2Frequencies.sort();

	for (let i = 0; i < word1Frequencies.length; i++) {
		if (word1Frequencies[i] !== word2Frequencies[i]) return false;
	}

	return true;
}
