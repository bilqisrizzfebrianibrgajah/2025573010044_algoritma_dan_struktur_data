const mahasiswa = {
    nama : 'Budi Santoso',
    umur : 20,
    jurusan : 'Teknik Informatika',
    ipk : 3.75,
    aktif : true,
};
console.log('=== Akses Property ===');
console.log('Nama :', mahasiswa.nama); 
console.log('Jurusan :', mahasiswa['jurusan']); 

const keyYangDicari = 'ipk';
console.log('IPK :', mahasiswa[keyYangDicari]); 

mahasiswa.email = 'budi@email.com'; 
mahasiswa.umur = 21; 
console.log('\nSetelah diubah:', mahasiswa);

delete mahasiswa.aktif;
console.log('Setelah delete:', mahasiswa);

const dosen = {
    nama : 'Dr. Ahmad Fauzi',
    mataKuliah : 'Struktur Data',
    pengalaman : 10,

perkenalan() {
    return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
},
statusSenior() {
    if (this.pengalaman >= 10) {
        return `${this.nama} adalah dosen senior.`;
    }
    return `${this.nama} adalah dosen junior.`;
}
};
console.log('\n=== Method Object ===');
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

console.log('\n=== Iterasi Object ===');
for (const key in dosen) {
    if (typeof dosen[key] !== 'function') { 
        console.log(` ${key}: ${dosen[key]}`);
    }
}

console.log('Keys :', Object.keys(mahasiswa));
console.log('Values:', Object.values(mahasiswa));



console.log("\n===== LATIHAN 1 =====\n");
const buku = {
  judul: "Belajar JavaScript",
  pengarang: "Andi Setiawan",
  tahunTerbit: 2022,
  harga: 100000,
  tersedia: true,

  info: function () {
    return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: ${this.harga}, Tersedia: ${this.tersedia}`;
  },

  
  diskon: function (persen) {
    return this.harga * (1 - persen / 100);
  }
};

console.log(buku.info());
console.log("Harga setelah diskon 10%:", buku.diskon(10));

const koleksiBuku = [
  {
    judul: "HTML Dasar",
    pengarang: "ara",
    tahunTerbit: 2020,
    harga: 50000,
    tersedia: true,
    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: ${this.harga}, Tersedia: ${this.tersedia}`;
    }
  },
  {
    judul: "CSS Lanjutan",
    pengarang: "Siti",
    tahunTerbit: 2021,
    harga: 75000,
    tersedia: false,
    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: ${this.harga}, Tersedia: ${this.tersedia}`;
    }
  },
  {
    judul: "React JS",
    pengarang: "amara",
    tahunTerbit: 2023,
    harga: 120000,
    tersedia: true,
    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: ${this.harga}, Tersedia: ${this.tersedia}`;
    }
  }
];


console.log("=== Semua Buku ===");
koleksiBuku.forEach(b => {
  console.log(b.info());
});


const bukuTersedia = koleksiBuku.filter(b => b.tersedia === true);

console.log("=== Buku yang Tersedia ===");
bukuTersedia.forEach(b => {
  console.log(b.info());
});
