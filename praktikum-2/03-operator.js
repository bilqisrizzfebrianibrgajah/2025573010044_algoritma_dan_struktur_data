let a = 17;
let b = 5;

console.log('=== aritmatika ===');
console.log(`${a} + ${b} = ${a + b}`); 
console.log(`${a} - ${b} = ${a - b}`); 
console.log(`${a} * ${b} = ${a * b}`); 
console.log(`${a} / ${b} = ${a / b}`); 
console.log(`${a} % ${b} = ${a % b}`); 
console.log(`${a} ** ${b} = ${a ** b}`); 

console.log('=== perbandingan ===');
console.log('10 > 5 :', 10 > 5); 
console.log('10 < 5 :', 10 < 5); 
console.log('10 >= 10 :', 10 >= 10); 
console.log('10 <= 9 :', 10 <= 9);

console.log('--- perbedaan == dan === ---');
console.log('5 == "5" :', 5 == '5'); 
console.log('5 === "5" :', 5 === '5'); 
console.log('5 !== 3 :', 5 !== 3); 

console.log('=== Logika ===');
let sudahmakan = true;
let punyauang = false;

console.log('makan && uang :', sudahmakan && punyauang);
console.log('makan || uang :', sudahmakan || punyauang); 
console.log('!sudahmakan :', !sudahmakan); 
console.log('!punyauang  :', !punyauang);

console.log("=== Latihan1: Kalkulator Sederhana ===");

const panjang = 12;
const lebar = 8;

const luas = panjang * lebar;
const keliling = 2 * (panjang + lebar);

console.log(`Luas persegi panjang: ${luas}`);
console.log(`Keliling persegi panjang: ${keliling}`);

const lebihDari100 = luas > 100;
console.log(`Apakah luas lebih dari 100? ${lebihDari100}`);
