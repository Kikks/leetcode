function isPalindrome(s: string) {
	for (let i = 0; i < Math.floor(s.length / 2); i++) {
		if (s[i] !== s[s.length - i - 1]) {
			return false;
		}
	}
	return true;
}

function firstPalindrome(words: string[]): string {
	for (let i = 0; i < words.length; i++) {
		if (isPalindrome(words[i])) return words[i];
	}
	return "";
}
