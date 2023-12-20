class RandomizedSet {
  private randomSet

  constructor() {
    this.randomSet = new Set()
  }

  insert(val: number): boolean {
    if (this.randomSet.has(val)) {
      return false
    }

    this.randomSet.add(val)

    return true
  }

  remove(val: number): boolean {
    if (!this.randomSet.has(val)) {
      return false
    }

    this.randomSet.delete(val)

    return true

  }

  getRandom(): number {
    const i = Math.floor(Math.random() * (this.randomSet.size))
    const items = Array.from(this.randomSet)
    return items[i] as number
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
