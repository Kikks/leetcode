function canTraverseAllPairs(nums: number[]): boolean {
	const n = nums.length;
	const graph = new Map<number, number[]>();

	// Function to add an edge in the graph
	function addEdge(u: number, v: number) {
		if (!graph.has(u)) graph.set(u, []);
		graph.get(u)!.push(v);
	}

	// Function to get all prime factors
	function getPrimeFactors(num: number): number[] {
		const factors = new Set<number>();
		for (let i = 2; i * i <= num; i++) {
			while (num % i === 0) {
				factors.add(i);
				num /= i;
			}
		}
		if (num > 1) factors.add(num);
		return Array.from(factors);
	}

	// Creating connections based on prime factors
	const primeToIndex = new Map<number, number>();
	for (let i = 0; i < n; i++) {
		const factors = getPrimeFactors(nums[i]);
		for (const factor of factors) {
			if (primeToIndex.has(factor)) {
				addEdge(primeToIndex.get(factor)!, i);
				addEdge(i, primeToIndex.get(factor)!);
			}
			primeToIndex.set(factor, i);
		}
	}

	// Depth-First Search to check connectivity
	const visited = new Array(n).fill(false);
	function dfs(node: number) {
		visited[node] = true;
		for (const neighbor of graph.get(node) || []) {
			if (!visited[neighbor]) {
				dfs(neighbor);
			}
		}
	}

	// Start DFS from the first index
	dfs(0);

	// Check if all indices are visited
	return visited.every(v => v);
}
