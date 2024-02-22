function findJudge(n: number, trust: number[][]): number {
	if (n === 1) return 1;

	const peopleWhoTrust = Array(n).fill(0);
	const trustedPeople = Array(n).fill(0);

	trust.forEach(item => {
		const i = item[0] - 1;
		const j = item[1] - 1;
		peopleWhoTrust[i] += (peopleWhoTrust[i] ?? 0) + 1;
		trustedPeople[j] += (peopleWhoTrust[j] ?? 0) + 1;
	});

	for (let i = 0; i < n; i++) {
		if (peopleWhoTrust[i] === 0 && trustedPeople[i] === n - 1) return i + 1;
	}

	return -1;
}
