class HashMapLinearProbing {
  constructor(capacity = 8) {
    this.capacity = capacity;
    this.size = 0;
    this.table = new Array(capacity).fill(null);

    this.DELETED = { deleted: true };
  }

  hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.capacity;
    }

    return hash;
  }

  loadFactor() {
    return this.size / this.capacity;
  }

  resize() {
    const oldTable = this.table;

    this.capacity *= 2;
    this.table = new Array(this.capacity).fill(null);
    this.size = 0;

    for (const item of oldTable) {
      if (item !== null && item !== this.DELETED) {
        this.set(item.key, item.value);
      }
    }
  }

  set(key, value) {
    if (this.loadFactor() > 0.7) {
      this.resize();
    }

    let index = this.hash(key);

    while (
      this.table[index] !== null &&
      this.table[index] !== this.DELETED &&
      this.table[index].key !== key
    ) {
      index = (index + 1) % this.capacity;
    }

    if (this.table[index] === null || this.table[index] === this.DELETED) {
      this.size++;
    }

    this.table[index] = { key, value };
  }

  get(key) {
    let index = this.hash(key);
    let start = index;

    while (this.table[index] !== null) {
      if (this.table[index] !== this.DELETED && this.table[index].key === key) {
        return this.table[index].value;
      }

      index = (index + 1) % this.capacity;

      if (index === start) break;
    }

    return undefined;
  }

  delete(key) {
    let index = this.hash(key);
    let start = index;

    while (this.table[index] !== null) {
      if (this.table[index] !== this.DELETED && this.table[index].key === key) {
        this.table[index] = this.DELETED;
        this.size--;
        return true;
      }

      index = (index + 1) % this.capacity;

      if (index === start) break;
    }

    return false;
  }

  display() {
    console.log("Hash Table:");

    this.table.forEach((item, index) => {
      if (item === null) {
        console.log(`${index}: empty`);
      } else if (item === this.DELETED) {
        console.log(`${index}: deleted`);
      } else {
        console.log(`${index}: ${item.key} => ${item.value}`);
      }
    });
  }
}

const map = new HashMapLinearProbing();

map.set("Ali", 90);
map.set("Budi", 85);
map.set("Citra", 95);
map.set("Dina", 88);

console.log("Nilai Ali:", map.get("Ali"));
console.log("Nilai Citra:", map.get("Citra"));

map.delete("Budi");

console.log("Setelah delete Budi:");
map.display();

console.log("Load Factor:", map.loadFactor());
