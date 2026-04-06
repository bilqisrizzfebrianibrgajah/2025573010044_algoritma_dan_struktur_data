let nilaiujian = 78;
console.log('=== konversi grade ===');
console.log('nilai:', nilaiujian);
if (nilaiujian >= 90)
{
console.log('grade: A (sangat baik)');
}
 else if (nilaiujian >= 80)
{
console.log('grade: B (baik)');
}
 else if (nilaiujian >= 70)
{
console.log('grade: C (cukup)');
}
 else if (nilaiujian >= 60) 
{
console.log('grade: D (kurang)');
} 
else
{
console.log('grade: E (tidak lulus)');
}
let namahari = 'rabu';
console.log('\n=== cek jenis hari ===');
switch (namahari)
{
case 'senin':
case 'selasa':
case 'rabu':
case 'kamis':
case 'jumat':
console.log(`${namahari} adalah hari kerja.`);
break;
case 'sabtu':
case 'minggu':
console.log(`${namahari} adalah akhir pekan.`);
break;
default:
console.log('nama hari tidak dikenali.');
}
let nilaiakhir = 65;
let statuslulus = nilaiakhir >= 60 ? 'LULUS' : 'TIDAK LULUS';
console.log('\n=== status kelulusan ===');
console.log(`nilai ${nilaiakhir}: ${statuslulus}`);

console.log("\n=== latihan2: konverter musim dan status cuaca ===");

const bulan = 7;
let musim;

if (bulan === 12 || bulan === 1 || bulan === 2)
{
  musim = "dingin";
} else if (bulan === 3 || bulan === 4 || bulan === 5) 
{
  musim = "semi";
} else if (bulan === 6 || bulan === 7 || bulan === 8)
{
  musim = "panas";
} else if (bulan === 9 || bulan === 10 || bulan === 11)
{
  musim = "gugur";
} else
{
  musim = "bulan tidak valid";
}

console.log(`bulan: ${bulan}`);
console.log(`musim: ${musim}`);

const adaawan = true;
const adaangin = false;

console.log(`cuaca mendung & berangin? ${adaawan && adaangin}`);
console.log(`ada awan atau angin? ${adaawan || adaangin}`);
console.log(`langit cerah (tidak ada awan)? ${!adaawan}`);