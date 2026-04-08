function pangkat(basis, eksponen) {
  if (eksponen === 0) return 1;

  return basis * pangkat(basis, eksponen - 1);
}

console.log("=== Uji Fungsi Pangkat ===");
console.log(`2^3 = ${pangkat(2, 3)}`); 
console.log(`5^2 = ${pangkat(5, 2)}`); 
console.log(`7^0 = ${pangkat(7, 0)}`); 

function balikString(str) {
  if (str.length <= 1) return str;
  return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}

console.log("\n=== Uji Fungsi Balik String ===");
console.log(`"halo" -> ${balikString("halo")}`); 
console.log(`"javascript" -> ${balikString("javascript")}`);
console.log(`"12345" -> ${balikString("12345")}`);

function cekPalindrom(str) {
  return str === balikString(str);
}

console.log("\n=== Uji Fungsi Cek Palindrom ===");
console.log(`"katak" -> ${cekPalindrom("katak")}`); 
console.log(`"civic" -> ${cekPalindrom("civic")}`); 
console.log(`"level" -> ${cekPalindrom("level")}`); 
console.log(`"hello" -> ${cekPalindrom("hello")}`); 