function minimumLength(s: string): number {
	const sArr: string[] = s.split("");
	let left: number = 0,
		right: number = sArr.length - 1;
	let toBeTaken: string;

	while (left < right) {
		if (sArr[left] !== sArr[right]) return right - left + 1;

		toBeTaken = sArr[left];

		while (sArr[left] === toBeTaken && left < right) {
			left++;
		}

		while (sArr[right] === toBeTaken && left <= right) {
			right--;
		}
	}

	return right - left + 1;
}
