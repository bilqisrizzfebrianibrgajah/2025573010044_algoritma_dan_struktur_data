function jumlahArray(arr) {
  let total = 0;
  for (const x of arr) total += x;
  return total;
}

function duplikasiArray(arr) {
  const baru = [];
  for (const x of arr) baru.push(x * 2);
  return baru;
}

function faktorialRekursif(n) {
  if (n <= 1) return 1;
  return n * faktorialRekursif(n - 1);
}

function faktorialIteratif(n) {
  let hasil = 1;
  for (let i = 2; i <= n; i++) hasil *= i;
  return hasil;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Jumlah array :", jumlahArray(arr));
console.log("Duplikasi array:", duplikasiArray(arr));
console.log("Faktorial 10 rekursif :", faktorialRekursif(10));
console.log("Faktorial 10 iteratif :", faktorialIteratif(10));

function hitungUnik(arr) {
  const seen = new Set();
  for (const x of arr) seen.add(x);
  return seen.size;
}
const dataAcak = [1, 2, 3, 2, 1, 4, 5, 3, 6, 4, 7];
console.log("Elemen unik:", hitungUnik(dataAcak));

// latihan3.
function cariPasanganLambat(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}

function cariPasanganCepat(arr, target) {
  let set = new Set();

  for (let num of arr) {
    let selisih = target - num;
    if (set.has(selisih)) {
      return [selisih, num];
    }
    set.add(num);
  }
  return null;
}

let arrTest = [2, 7, 11, 15];
let target = 9;

console.log("Lambat:", cariPasanganLambat(arrTest, target));
console.log("Cepat:", cariPasanganCepat(arrTest, target));

let arrBesar = [];
for (let i = 0; i < 50000; i++) {
  arrBesar.push(Math.floor(Math.random() * 100000));
}

let targetTidakAda = -1;

function ukurWaktu(fn, arr, target, nama) {
  let start = Date.now();
  fn(arr, target);
  let end = Date.now();
  console.log(`${nama}: ${end - start} ms`);
}
ukurWaktu(cariPasanganCepat, arrBesar, targetTidakAda, "Cepat");
