class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function buatLinkedList(arr) {
  if (arr.length === 0) return null;

  let head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }

  return head;
}

function printList(head) {
  let result = "";
  let current = head;

  while (current) {
    result += current.next
      ? `[${current.data}] → `
      : `[${current.data}]`;

    current = current.next;
  }

  console.log(result);
}

function palindromLL(head) {
  let arr = [];
  let current = head;

  while (current) {
    arr.push(current.data);
    current = current.next;
  }

  let kiri = 0;
  let kanan = arr.length - 1;

  while (kiri < kanan) {
    if (arr[kiri] !== arr[kanan]) {
      return false;
    }

    kiri++;
    kanan--;
  }

  return true;
}

function hapusNDariAkhir(head, n) {
  let dummy = new Node(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
}

function tengahLinkedList(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

console.log("=== TEST PALINDROM ===");

let list1 = buatLinkedList([1, 2, 3, 2, 1]);
printList(list1);
console.log("Palindrome:", palindromLL(list1));

let list2 = buatLinkedList([1, 2, 2, 1]);
printList(list2);
console.log("Palindrome:", palindromLL(list2));

let list3 = buatLinkedList([1, 2, 3]);
printList(list3);
console.log("Palindrome:", palindromLL(list3));


console.log("\n=== TEST HAPUS N DARI AKHIR ===");

let list4 = buatLinkedList([1, 2, 3, 4, 5]);
printList(list4);
list4 = hapusNDariAkhir(list4, 2);
printList(list4);

let list5 = buatLinkedList([10, 20, 30]);
printList(list5);
list5 = hapusNDariAkhir(list5, 1);
printList(list5);

let list6 = buatLinkedList([7, 8]);
printList(list6);
list6 = hapusNDariAkhir(list6, 2);
printList(list6);


console.log("\n=== TEST TENGAH LINKED LIST ===");

let list7 = buatLinkedList([1, 2, 3, 4, 5]);
printList(list7);
console.log("Tengah:", tengahLinkedList(list7).data);

let list8 = buatLinkedList([10, 20, 30, 40]);
printList(list8);
console.log("Tengah:", tengahLinkedList(list8).data);

let list9 = buatLinkedList([100, 200, 300]);
printList(list9);
console.log("Tengah:", tengahLinkedList(list9).data);