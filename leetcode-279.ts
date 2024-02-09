function numSquares(n: number): number {
	const squares: number[] = [0, 1];

	for (let i = 2; i <= n; i++) {
		squares[i] = Infinity;

		for (let j = 1; j * j <= i; j++) {
			const numSquares = squares[i - j * j] + 1;
			squares[i] = Math.min(squares[i], numSquares);
		}
	}

	return squares[n];
}
