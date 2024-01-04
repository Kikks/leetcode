function countOnes(binaryString: string) {
	let count = 0;
	for (let i = 0; i < binaryString.length; i++) {
		if (binaryString[i] === "1") count += 1;
	}
	return count;
}

function numberOfBeams(bank: string[]): number {
	let beams = 0;
	const ones = bank.filter(string => countOnes(string) !== 0);
	for (let i = 0; i < ones.length - 1; i++) {
		beams += countOnes(ones[i]) * countOnes(ones[i + 1]);
	}
	return beams;
}
