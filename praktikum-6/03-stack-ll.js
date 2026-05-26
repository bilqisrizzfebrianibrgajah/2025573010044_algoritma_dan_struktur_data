class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }


  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }


  removeHead() {
    if (this.head === null) {
      return null;
    }

    const removed = this.head.data;
    this.head = this.head.next;
    this.length--;

    return removed;
  }

  getHead() {
    return this.head ? this.head.data : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  print() {
    let current = this.head;
    let result = "";

    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }

    result += "null";
    console.log(result);
  }
}

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.prepend(data);
  }

  pop() {
    return this.list.removeHead();
  }

  peek() {
    return this.list.getHead();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  size() {
    return this.list.size();
  }

  print() {
    this.list.print();
  }
}



const undoStack = new Stack();

undoStack.push("Ketik A");
undoStack.push("Ketik B");
undoStack.push("Hapus B");
undoStack.push("Ketik C");

console.log("Isi Stack:");
undoStack.print();

console.log("\nUndo:");
console.log("Undo aksi:", undoStack.pop());
console.log("Undo aksi:", undoStack.pop());

console.log("\nStack setelah undo:");
undoStack.print();

console.log("\nPeek:", undoStack.peek());
console.log("Size:", undoStack.size());
console.log("Is Empty:", undoStack.isEmpty());
