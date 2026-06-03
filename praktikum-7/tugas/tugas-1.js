class Pasien {
  constructor(id, nama, prioritas, waktuDaftar) {
    this.id = id;
    this.nama = nama;
    this.prioritas = prioritas;
    this.waktuDaftar = waktuDaftar;
  }
}

class AntrianRS {
  constructor() {
    this.antrianDarurat = [];
    this.antrianBiasa = [];
  }

  daftar(pasien) {
    if (pasien.prioritas === "darurat") {
      this.antrianDarurat.push(pasien);
    } else {
      this.antrianBiasa.push(pasien);
    }

    console.log(`${pasien.nama} berhasil daftar (${pasien.prioritas})`);
  }

  layani() {
    let pasienDilayani;

    if (this.antrianDarurat.length > 0) {
      pasienDilayani = this.antrianDarurat.shift();
    } else if (this.antrianBiasa.length > 0) {
      pasienDilayani = this.antrianBiasa.shift();
    } else {
      console.log("Tidak ada pasien dalam antrian.");
      return;
    }

    console.log("Pasien dilayani:");
    console.log(`ID: ${pasienDilayani.id}`);
    console.log(`Nama: ${pasienDilayani.nama}`);
    console.log(`Prioritas: ${pasienDilayani.prioritas}`);
    console.log(`Waktu Daftar: ${pasienDilayani.waktuDaftar}`);
    console.log("-------------------------");
  }

  tampilkanAntrian() {
    console.log("\n=== ANTRIAN DARURAT ===");
    if (this.antrianDarurat.length === 0) {
      console.log("Kosong");
    } else {
      this.antrianDarurat.forEach((p) => {
        console.log(`${p.nama} (${p.prioritas})`);
      });
    }

    console.log("\n=== ANTRIAN BIASA ===");
    if (this.antrianBiasa.length === 0) {
      console.log("Kosong");
    } else {
      this.antrianBiasa.forEach((p) => {
        console.log(`${p.nama} (${p.prioritas})`);
      });
    }
  }
}

const rs = new AntrianRS();

const namaPasien = [
  "Andi",
  "Budi",
  "Citra",
  "Dina",
  "Eko",
  "Fajar",
  "Gina",
  "Hani",
  "Indra",
  "Joko",
];

for (let i = 0; i < 10; i++) {
  const prioritas = Math.random() > 0.5 ? "darurat" : "biasa";

  const pasien = new Pasien(
    i + 1,
    namaPasien[i],
    prioritas,
    new Date().toLocaleTimeString(),
  );

  rs.daftar(pasien);
}

rs.tampilkanAntrian();

console.log("\n=== MULAI MELAYANI PASIEN ===");

while (rs.antrianDarurat.length > 0 || rs.antrianBiasa.length > 0) {
  rs.layani();
}
