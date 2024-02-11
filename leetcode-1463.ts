function cherryPickup(grid: number[][]): number {
	const M: number = grid.length;
	const N: number = grid[0].length;
	let dp: number[][] = Array.from({ length: N }, () => Array(N).fill(0));

	for (let r: number = M - 1; r >= 0; r--) {
		const tmp: number[][] = dp.map(val => [...val]);
		for (let left: number = 0; left < N - 1; left++) {
			for (let right: number = left + 1; right < N; right++) {
				const curr: number = grid[r][left] + grid[r][right];
				let max: number = curr;
				for (let lj: number = -1; lj <= 1; lj++) {
					for (let rj: number = -1; rj <= 1; rj++) {
						if (left + lj < 0 || right + rj >= N || left + lj === right + rj) {
							continue;
						}

						max = Math.max(max, curr + dp[left + lj][right + rj]);
					}
				}
				tmp[left][right] = max;
			}
		}
		dp = tmp;
	}

	return dp[0][N - 1];
}
