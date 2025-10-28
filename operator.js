//apa yang akan di bandingkan/hitung

let hargaBuku   = 50000;
let jumlahBeli  = 3;
let ongkir      = 10000;

let totalBelanja = (hargaBuku * jumlahBeli) + ongkir;

console.log("Hasil Total Belanja", totalBelanja);

let angka = 10;
angka++;
console.log("Angka setelah increment",angka)


let sisa_kue =  7 % 3;
console.log("Sisa Kue",sisa_kue);



// operator assignment

let x = 10;
let y = 30;

// x = y;
// x += y; // x = x + y
// x = x - y;
x -= y;

console.log("Nilai X: ",x,"Nilai Y: ",y)


// Operator perbandingan => true/false


let umur_budi = 20;
let umur_andi = 12;

console.log("Apakah umur budi sama dengan 20", umur_budi === 20);
console.log("Apakah Andi lebih tua dari budi?", umur_andi > umur_budi)
console.log("Apakah Budi lebih tua dari Andi?", umur_budi > umur_andi);
console.log("Apakah Andi lebih muda dari Budi?", umur_andi < umur_budi);

console.log("Apakah umur Andi tidak sama dengan umur Budi", umur_andi !== umur_budi);

console.log(
  "Apakah umur Andi, lebih besar atau sama dengan 20? ",
  umur_andi >= 20
);

console.log(
  "Apakah umur Andi, lebih kecil atau sama dengan 20? ",
  umur_andi <= 20
);


let punya_sim = true;
let umur_cukup = 17;

let boleh_menyetir = punya_sim && (umur_andi >= umur_cukup);

console.log("Boleh nyetir?",boleh_menyetir)

//surat tilang diberikan kepada Andi ketika tidak boleh menyetir
let surat_tilang = !boleh_menyetir;
// - * + = -, - * - = +
console.log("Surat tilang", surat_tilang);
