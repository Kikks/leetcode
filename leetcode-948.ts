function bagOfTokensScore(tokens: number[], power: number): number {
	tokens.sort((a, b) => a - b);
	let score = 0;
	let maxScore = 0;
	let i = 0;
	let j = tokens.length - 1;
	while (i <= j) {
		if (power >= tokens[i]) {
			power -= tokens[i];
			score++;
			i++;
			maxScore = Math.max(maxScore, score);
		} else if (score > 0) {
			power += tokens[j];
			score--;
			j--;
		} else {
			break;
		}
	}
	return maxScore;
}
