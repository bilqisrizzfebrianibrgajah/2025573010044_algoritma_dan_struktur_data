function sapa() {
    console.log('halo! selamat datang di praktikum javascript.');
}
sapa();
sapa();
function sapanama(nama){
    console.log('halo,${nama}! selamat belajar.');
}
sapanama('budi');
sapanama('siti');

 function tambah(angka1,angka2){
    const hasil =angka1+angka2;
    return hasil;
 }
 const hasilpenjumlahan = tambah(10,25);
 console.log('10 + 25 =',hasilpenjumlahan);
 console.log('7 + 13=', tambah (7,13));

 function hitung(nilai,pengali= 2){
    return nilai * pengali;
 }
 console.log(hitung(5));
 console.log(hitung(5, 3));

 const pesanglobal ='saya ada dimana saja'
 function cekscope(){
    const pesanlokal ='saya hanya ada didalam function ini';
    console.log(pesanglobal);
    console.log(pesanlokal);
 }
 cekscope();
 console.log(pesanglobal);



("===Latihan 1: Kalkulator Sederhana===");
function tambah(a, b) {
    return a + b;
}
function kurang(a, b) {
    return a - b;
}
function kali(a, b) {
    return a * b;
}
function bagi(a, b) {
    if (b === 0) {
        console.log("error: tidak bisa membagi dengan nol");
        return null;
    }
    return a / b;
}
function kalkulator(a, operator, b) {
    if (operator === "+") {
        return tambah(a, b);
    } else if (operator === "-") {
        return kurang(a, b);
    } else if (operator === "*") {
        return kali(a, b);
    } else if (operator === "/") {
        return bagi(a, b);
    } else {
        console.log("operator tidak dikenali");
        return null;
    }
}
console.log(kalkulator(10, "+", 5));
console.log(kalkulator(10, "-", 5)); 
console.log(kalkulator(10, "*", 5)); 
console.log(kalkulator(10, "/", 5));
console.log(kalkulator(10, "/", 0)); 

