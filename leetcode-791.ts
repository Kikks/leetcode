function customSortString(order: string, s: string): string {
	const hash = new Map();

	for (let i = 0; i < order.length; i++) {
		hash.set(order[i], i);
	}

	function getValue(key: string) {
		const value = hash.get(key);

		if (value >= 0) {
			return value;
		}

		return -1;
	}

	return s
		.split("")
		.sort((a, b) => getValue(a) - getValue(b))
		.join("");
}
