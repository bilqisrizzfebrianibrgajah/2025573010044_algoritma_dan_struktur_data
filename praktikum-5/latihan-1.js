function fn(n) {
  return n * 2;
}
function fungsiB(n) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count++;
    }
  }

  console.log("Total operasi:", count);
}
function fungsiC(n) {
  let i = 1;
  let count = 0;

  while (i < n) {
    count++;
    i *= 2;
  }

  console.log("Total iterasi:", count);
}
function fungsiD(arr) {
  let count = 0;

  arr.forEach((x) => {
    arr.forEach((y) => {
      arr.forEach((z) => {
        count++;
      });
    });
  });

  console.log("Total operasi:", count);
}
function hitungKompleksitas(n, fn) {
  const start = Date.now();
  fn(n);
  const end = Date.now();

  console.log("Waktu:", end - start, "ms");
}
const n = 50;

console.log("=== Fungsi A (O(1)) ===");
hitungKompleksitas(n, fn);

console.log("\n=== Fungsi B (O(n^2)) ===");
hitungKompleksitas(n, fungsiB);

console.log("\n=== Fungsi C (O(log n)) ===");
hitungKompleksitas(n, fungsiC);

console.log("\n=== Fungsi D (O(n^3)) ===");
const arr = [1, 2, 3, 4, 5];
const start = Date.now();
fungsiD(arr);
const end = Date.now();
console.log("Waktu:", end - start, "ms");
