function minSteps(s: string, t: string): number {
	let count = 0;
	const charsMap = new Map<string, number>();

	for (let i = 0; i < s.length; i++) {
		charsMap.set(s[i], (charsMap.get(s[i]) || 0) + 1);
	}

	for (let i = 0; i < t.length; i++) {
		if (charsMap.get(t[i])) {
			charsMap.set(t[i], (charsMap.get(t[i]) || 0) - 1);
		} else {
			count += 1;
		}
	}

	return count;
}
