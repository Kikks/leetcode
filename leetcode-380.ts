class RandomizedSet {
	private map = new Map<number, number>();
	private vals: number[] = [];

	constructor() {}

	insert(val: number): boolean {
		if (this.map.has(val)) return false;
		this.map.set(val, this.vals.length);
		this.vals.push(val);
		return true;
	}

	remove(val: number): boolean {
		if (!this.map.has(val)) return false;
		this.map.delete(val);
		this.vals.splice(this.vals.indexOf(val), 1);
		return true;
	}

	getRandom(): number {
		return this.vals[Math.floor(Math.random() * this.vals.length)];
	}
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
