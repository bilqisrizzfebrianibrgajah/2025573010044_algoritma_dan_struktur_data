function fnA(n) {
    return n * 2;
}
function fnB(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
function fnC(n) {
    for (let i = 1; i < n; i *= 2) {
        console.log(i);
    }
}
function fnD(n) {
    let arr = [];
    for (let i = 0; i < n; i++) arr.push(i);

    arr.forEach(x => {
        arr.forEach(y => {
            arr.forEach(z => {
                console.log(x, y, z);
            });
        });
    });
}
function hitungKompleksitas(n, fn, nama) {
    let start = Date.now();
    fn(n);
    let end = Date.now();
    console.log(`${nama} waktu: ${end - start} ms`);
}

let n = 1000;

hitungKompleksitas(n, fnA, "Fungsi A");
hitungKompleksitas(100, fnB, "Fungsi B");
hitungKompleksitas(n, fnC, "Fungsi C");
hitungKompleksitas(50, fnD, "Fungsi D");