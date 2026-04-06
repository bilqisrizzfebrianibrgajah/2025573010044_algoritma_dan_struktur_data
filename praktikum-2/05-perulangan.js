console.log('=== for loop: hitung 1 sampai 5 ===');
for (let i = 1; i <= 5; i++)
{
console.log(`iterasi ke-${i}`);
}

console.log('\n=== while Loop: countdown ===');
let hitung = 5;
while (hitung > 0) 
{
console.log(`hitung mundur: ${hitung}`);
hitung--; 
}
console.log('selesai!');

console.log('\n=== bilangan genap antara 1 - 20 ===');
for (let i = 1; i <= 30; i++)
{
if (i % 2 === 0) 
{ 
process.stdout.write(i + ' '); 
}
}
console.log(''); 

console.log('\n=== break dan continue ===');
for (let i = 1; i <= 10; i++)
{
if (i === 4) 
{
console.log(`melewati angka ${i} (continue)`);
continue; 
}
if (i === 8) 
{
console.log(`berhenti di angka ${i} (break)`);
break;
}
console.log(`angka: ${i}`);
}

console.log('\n=== latihan3: segitiga bintang ===');
for (let i = 1; i <= 5; i++) 
{
  let bintang = '';
  for (let j = 1; j <= i; j++)
{
    bintang += '*';
}
  console.log(bintang);
}

console.log('\n=== deret bilangan prima 1 - 50 ===');
for (let i = 2; i <= 50; i++) 
{
  let prima = true;
  for (let j = 2; j < i; j++) 
    {
    if (i % j === 0)
         {
      prima = false;
      break;
         }
     }

  if (prima) 
    {
    process.stdout.write(i + ' ');
      
    }
}
console.log('');