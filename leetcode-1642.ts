function furthestBuilding(
	heights: number[],
	bricks: number,
	ladders: number
): number {
	const minHeap = new Array<number>();

	let [sum, i] = [0, 0];
	for (i = 1; i < heights.length; i++) {
		const delta = heights[i] - heights[i - 1];

		if (delta > 0) {
			if (ladders > 0) {
				minHeap.push(delta);
				heapifyUp(minHeap.length - 1, minHeap);
				ladders--;
			} else if (bricks > 0) {
				let bricksToUse = delta;
				if (minHeap[0] < delta) {
					[bricksToUse, minHeap[0]] = [minHeap[0], delta];
					heapifyDown(0, minHeap);
				}

				if (bricksToUse <= bricks) {
					bricks -= bricksToUse;
				} else {
					break;
				}
			} else {
				break;
			}
		}
	}

	return i - 1;
}

function heapifyUp(i: number, heap: number[]) {
	const { length: size } = heap;

	if (i < 0 || i >= size) {
		throw Error("Invalid argument exception");
	}

	let p = Math.floor((i - 1) / 2);
	while (i > 0 && heap[p] > heap[i]) {
		[heap[p], heap[i]] = [heap[i], heap[p]];
		i = p;
		p = Math.floor((i - 1) / 2);
	}
}

function heapifyDown(i: number, heap: number[]) {
	const { length: size } = heap;

	if (i < 0 || i >= size) {
		throw Error("Invalid argument exception");
	}

	let keepHeapify = size > 0;

	while (keepHeapify) {
		const [l, r] = [2 * i + 1, 2 * i + 2];

		let m = i;
		if (l < size && heap[l] < heap[m]) {
			m = l;
		}
		if (r < size && heap[r] < heap[m]) {
			m = r;
		}

		if (m !== i) {
			[heap[m], heap[i]] = [heap[i], heap[m]];
			i = m;
		} else {
			keepHeapify = false;
		}
	}
}

function poll(heap: number[]): number | undefined {
	if (heap.length === 0) {
		return undefined;
	}

	let [first, last] = [heap[0], heap.pop()];
	if (first !== last) {
		if (last) heap[0] = last;
		heapifyDown(0, heap);
	}

	return first;
}
