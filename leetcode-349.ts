function intersection(nums1: number[], nums2: number[]): number[] {
	const set1 = new Set(nums1);
	const set2 = new Set(nums2);

	const res: number[] = [];

	set1.forEach(item => {
		if (set2.has(item)) res.push(item);
	});

	return res;
}
