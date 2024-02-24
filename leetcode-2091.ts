function findAllPeople(
	n: number,
	meetings: number[][],
	firstPerson: number
): number[] {
	const secrets = new Set([0, firstPerson]);
	const time_map = {};

	for (let [src, dst, t] of meetings) {
		if (!time_map[t]) time_map[t] = {};
		if (!time_map[t][src]) time_map[t][src] = [];
		if (!time_map[t][dst]) time_map[t][dst] = [];

		time_map[t][src].push(dst);
		time_map[t][dst].push(src);
	}

	function dfs(src, adj, visit) {
		if (visit.has(src)) return;

		visit.add(src);
		secrets.add(src);

		for (let neighbour of adj[src]) {
			dfs(neighbour, adj, visit);
		}
	}

	for (let t of Object.keys(time_map)) {
		let visit = new Set();
		for (let src in time_map[t]) {
			if (secrets.has(Number(src))) {
				dfs(Number(src), time_map[t], visit);
			}
		}
	}

	return Array.from(secrets);
}
