function isIsomorphic(s: string, t: string): boolean {
	if (s.length !== t.length) return false;

	const charMap = new Map<string, string>();
	const values: string[] = [];

	for (let i = 0; i < s.length; i++) {
		if (charMap.has(s[i])) {
			if (charMap.get(s[i]) !== t[i]) return false;
		} else {
			if (values.includes(t[i])) return false;
			charMap.set(s[i], t[i]);
			values.push(t[i]);
		}
	}

	return true;
}
