function maximumOddBinaryNumber(s: string): string {
	let ones = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "1") ones++;
	}

	let res = "";
	for (let i = 0; i < s.length; i++) {
		if (ones > 1) {
			res += "1";
			ones--;
		} else {
			if (i === s.length - 1) {
				res += "1";
			} else {
				res += "0";
			}
		}
	}
	return res;
}
