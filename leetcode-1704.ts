function countVowels(s: string): number {
	const vowels = "aeiouAEIOU";
	let count = 0;
	for (let i = 0; i < s.length; i++) {
		if (vowels.includes(s[i])) count += 1;
	}
	return count;
}

function halvesAreAlike(s: string): boolean {
	return (
		countVowels(s.substring(0, s.length / 2)) ===
		countVowels(s.substring(s.length / 2, s.length))
	);
}
