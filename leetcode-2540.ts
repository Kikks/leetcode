function getCommon(nums1: number[], nums2: number[]): number {
	let i = 0,
		j = 0;

	while (i < nums1.length && j < nums2.length) {
		if (nums1[i] === nums2[j]) return nums1[i];
		if (nums1[i] > nums2[j]) j++;
		else i++;
	}

	return -1;
}
