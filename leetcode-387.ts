function firstUniqChar(s: string): number {
	const lettersMap = new Map<string, number>();
	for (let i = 0; i < s.length; i++)
		lettersMap.set(s[i], (lettersMap.get(s[i]) || 0) + 1);
	for (let i = 0; i < s.length; i++) {
		if (lettersMap.get(s[i]) === 1) return i;
	}

	return -1;
}
