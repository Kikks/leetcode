function isPowerOfTwo(n: number): boolean {
	if (n < 0) return false;
	return (
		n
			.toString(2)
			.split("")
			.reduce((acc, curr) => (curr === "1" ? acc + 1 : acc), 0) === 1
	);
}
