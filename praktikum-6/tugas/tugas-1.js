class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.size++;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log("Index di luar batas!");
      return;
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    if (index === this.size) {
      this.append(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    newNode.next = current;
    newNode.prev = current.prev;

    current.prev.next = newNode;
    current.prev = newNode;

    this.size++;
  }

  delete(data) {
    if (!this.head) return false;

    let current = this.head;

    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = current.next;

          if (this.head) {
            this.head.prev = null;
          } else {
            this.tail = null;
          }
        } else if (current === this.tail) {
          this.tail = current.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }

        this.size--;
        return true;
      }

      current = current.next;
    }

    return false;
  }

  reverse() {
    let current = this.head;
    let temp = null;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  print() {
    if (!this.head) {
      console.log("[List kosong]");
      return;
    }

    let current = this.head;
    let forward = "";

    while (current) {
      forward += current.next ? `[${current.data}] ⇄ ` : `[${current.data}]`;
      current = current.next;
    }

    console.log("Dari depan : ", forward);

    current = this.tail;
    let backward = "";

    while (current) {
      backward += current.prev ? `[${current.data}] ⇄ ` : `[${current.data}]`;
      current = current.prev;
    }

    console.log("Dari belakang :", backward);
    console.log("Size :", this.size);
  }
}

const dll = new DoublyLinkedList();

console.log("=== Append ===");
dll.append(10);
dll.append(20);
dll.append(30);
dll.append(40);
dll.print();

console.log("\n=== Prepend ===");
dll.prepend(5);
dll.print();

console.log("\n=== InsertAt index 2 ===");
dll.insertAt(15, 2);
dll.print();

console.log("\n=== Delete 20 ===");
dll.delete(20);
dll.print();

console.log("\n=== Reverse ===");
dll.reverse();
dll.print();
