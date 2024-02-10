function countPalindromesFromMiddle(l: number, r: number, s: string) {
	let count = 0;
	while (l >= 0 && r < s.length && s[l] === s[r]) {
		count++;
		l--;
		r++;
	}

	return count;
}

function countSubstrings(s: string): number {
	let count = 0;

	for (let i = 0; i < s.length; i++) {
		count += countPalindromesFromMiddle(i, i, s);
		count += countPalindromesFromMiddle(i, i + 1, s);
	}

	return count;
}
