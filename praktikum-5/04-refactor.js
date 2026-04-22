function adaDuplikatLambat(arr) {
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++) if (arr[i] === arr[j]) return true;
  return false;
}

function adaDuplikatCepat(arr) {
  const seen = new Set();
  for (const x of arr) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
}

function frekuensiLambat(arr) {
  const unik = [];
  const hitung = [];
  for (const x of arr) {
    const idx = unik.indexOf(x);
    if (idx === -1) {
      unik.push(x);
      hitung.push(1);
    } else hitung[idx]++;
  }
  return Object.fromEntries(unik.map((u, i) => [u, hitung[i]]));
}

function frekuensiCepat(arr) {
  const counter = {};
  for (const x of arr) counter[x] = (counter[x] || 0) + 1;
  return counter;
}

const besar = Array.from({ length: 20000 }, () =>
  Math.floor(Math.random() * 1000),
);
let t = Date.now();
adaDuplikatLambat(besar);
console.log("Duplikat LAMBAT O(n2):", Date.now() - t, "ms");
t = Date.now();
adaDuplikatCepat(besar);
console.log("Duplikat CEPAT O(n) :", Date.now() - t, "ms");
const kata = ["a", "b", "a", "c", "b", "a", "d"];
console.log("\nFrekuensi:", frekuensiCepat(kata));



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

