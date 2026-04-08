const dataMahasiswa = [
  { nama: "ara", nilai: 85 },
  { nama: "fika", nilai: 70 },
  { nama: "bilqis", nilai: 90 },
  { nama: "siti", nilai: 60 },
  { nama: "dila", nilai: 75 },
  { nama: "amara", nilai: 95 }
];

function hitungStatistik(arrMahasiswa) {
  const hasil = arrMahasiswa.reduce((acc, mhs) => {
    acc.total += 1;
    acc.jumlahNilai += mhs.nilai;
    acc.tertinggi = Math.max(acc.tertinggi, mhs.nilai);
    acc.terendah = Math.min(acc.terendah, mhs.nilai);
    return acc;
  }, {
    total: 0,
    jumlahNilai: 0,
    tertinggi: -Infinity,
    terendah: Infinity
  });

  return {
    total: hasil.total,
    rataRata: hasil.jumlahNilai / hasil.total,
    tertinggi: hasil.tertinggi,
    terendah: hasil.terendah
  };
}

function filterLulus(arrMahasiswa, batasLulus) {
  return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}

function tambahGrade(arrMahasiswa) {
  return arrMahasiswa.map(mhs => {
    let grade;

    if (mhs.nilai >= 90) grade = "A";
    else if (mhs.nilai >= 80) grade = "B";
    else if (mhs.nilai >= 70) grade = "C";
    else if (mhs.nilai >= 60) grade = "D";
    else grade = "E";

    return { ...mhs, grade };
  });
}

console.log("=== Statistik Mahasiswa ===");
const statistik = hitungStatistik(dataMahasiswa);
console.log(statistik);

console.log("\n=== Mahasiswa Lulus (>= 75) ===");
const lulus = filterLulus(dataMahasiswa, 75);
lulus.forEach(mhs => {
  console.log(`Nama: ${mhs.nama}, Nilai: ${mhs.nilai}`);
});

console.log("\n=== Data Mahasiswa + Grade ===");
const denganGrade = tambahGrade(dataMahasiswa);
denganGrade.forEach(mhs => {
  console.log(`Nama: ${mhs.nama}, Nilai: ${mhs.nilai}, Grade: ${mhs.grade}`);
});