class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    this.stack.push(value);

    if (this.minStack.length === 0 || value <= this.getMin()) {
      this.minStack.push(value);
    }

    console.log(`${value} ditambahkan ke stack`);
  }

  pop() {
    if (this.stack.length === 0) {
      return "Stack kosong";
    }

    const removed = this.stack.pop();

    if (removed === this.getMin()) {
      this.minStack.pop();
    }

    console.log(`${removed} dihapus dari stack`);
    return removed;
  }

  getMin() {
    if (this.minStack.length === 0) {
      return null;
    }

    return this.minStack[this.minStack.length - 1];
  }

  tampilkan() {
    console.log("Isi Stack:", this.stack);
  }
}

const minStack = new MinStack();

minStack.push(5);
minStack.push(3);
minStack.push(7);
minStack.push(2);

console.log("getMin() =", minStack.getMin()); // 2

minStack.pop();

console.log("getMin() =", minStack.getMin()); // 3

minStack.pop();

console.log("getMin() =", minStack.getMin()); // 3
