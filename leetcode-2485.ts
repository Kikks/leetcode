function pivotInteger(n: number): number {
	var x = Math.sqrt((n * (n + 1)) / 2);
	if (x % 1 == 0) {
		return x;
	} else {
		return -1;
	}
}
