function lengthOfLastWord(s: string): number {
	let count = 0;
	for (let i = s.length - 1; i >= 0; i--) {
		const char = s.charAt(i);
		if (char !== " ") count++;
		else if (char && count !== 0) return count;
	}
	return count;
}
