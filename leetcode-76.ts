function minWindow(s: string, t: string): string {
	const remainingByLetter: Map<string, number> = new Map();
	for (const letter of t) {
		const val = remainingByLetter.get(letter);
		if (val === undefined) remainingByLetter.set(letter, 1);
		else remainingByLetter.set(letter, val + 1);
	}
	let remainingCount = t.length;
	let minString = "";
	let left = 0;

	for (let right = 0; right < s.length; right++) {
		const letter = s[right];
		const val = remainingByLetter.get(letter);
		if (val !== undefined) {
			remainingByLetter.set(letter, val - 1);
			if (val > 0) remainingCount--;
		}

		while (remainingCount === 0 && left <= right) {
			if (right + 1 - left < minString.length || minString === "") {
				minString = s.slice(left, right + 1);
				if (minString.length === t.length) return minString;
			}

			const leftLetter = s[left];
			const val2 = remainingByLetter.get(leftLetter);
			if (val2 !== undefined) {
				remainingByLetter.set(leftLetter, val2 + 1);
				if (val2 >= 0) remainingCount++;
			}
			left++;
		}
	}

	return minString;
}
