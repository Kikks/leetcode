function frequencySort(s: string): string {
	const hash = new Map<string, number>();

	for (const char of s) {
		if (hash.has(char)) {
			hash.set(char, (hash.get(char) ?? 0) + 1);
			continue;
		}

		hash.set(char, 1);
	}

	let res = "";

	const sorted = [...hash.entries()].sort((a, b) => b[1] - a[1]);

	for (let i = 0; i < sorted.length; i++) {
		const [key, value] = sorted[i];
		res += key.repeat(value);
	}

	return res;
}
