class Produk {
  constructor(id, nama, harga, stok) {
    this.id = id;
    this.nama = nama;
    this.harga = harga;
    this.stok = stok;
  }

  info() {
    console.log(`ID: ${this.id}`);
    console.log(`Nama: ${this.nama}`);
    console.log(`Harga: Rp${this.harga}`);
    console.log(`Stok: ${this.stok}`);
  }

  tersedia() {
    return this.stok > 0;
  }

  jual(jumlah) {
    if (jumlah <= this.stok) {
      this.stok -= jumlah;
      console.log(`${jumlah} unit ${this.nama} berhasil dijual.`);
    } else {
      console.log(`Stok tidak cukup untuk ${this.nama}!`);
    }
  }
}
class ProdukDigital extends Produk {
  constructor(id, nama, harga, ukuranFile, formatFile) {
    super(id, nama, harga, Infinity); 
    this.ukuranFile = ukuranFile;
    this.formatFile = formatFile;
  }

  info() {
    super.info();
    console.log(`Ukuran File: ${this.ukuranFile} MB`);
    console.log(`Format File: ${this.formatFile}`);
  }

  download() {
    console.log(`Mengunduh ${this.nama}...`);
  }

  jual() {
    console.log(`Produk digital tidak mengurangi stok.`);
  }
}
class ProdukFisik extends Produk {
  constructor(id, nama, harga, stok, beratGram, dimensi) {
    super(id, nama, harga, stok);
    this.beratGram = beratGram;
    this.dimensi = dimensi;
  }

  info() {
    super.info();
    console.log(`Berat: ${this.beratGram} gram`);
    console.log(`Dimensi: ${this.dimensi}`);
  }

  hitungOngkir(tarifPerKg) {
    let beratKg = this.beratGram / 1000;
    return beratKg * tarifPerKg;
  }
}
const produk1 = new ProdukDigital(1, "Ebook JS", 50000, 5, "PDF");
const produk2 = new ProdukDigital(2, "Template Web", 75000, 20, "ZIP");

const produk3 = new ProdukFisik(3, "Mouse", 150000, 10, 200, "10x5x3 cm");
const produk4 = new ProdukFisik(4, "Keyboard", 300000, 5, 800, "45x15x3 cm");

const daftarProduk = [produk1, produk2, produk3, produk4];

console.log("\n=== Semua Produk ===");
daftarProduk.forEach(p => {
  p.info();
  console.log("-------------------");
});

console.log("\n=== Produk Tersedia ===");
const tersedia = daftarProduk.filter(p => p.tersedia());
tersedia.forEach(p => console.log(p.nama));

console.log("\n=== Nama Produk ===");
const namaProduk = daftarProduk.map(p => p.nama);
console.log(namaProduk);
