//Menggabungkan variable string/number

let nama_depan = "Muhammad";
let nama_belakang = "Faqih";

let umur = 20;
let nama_lengkap = nama_depan + "  " + nama_belakang; // cara pertama
console.log("Cara 1: ", nama_lengkap);

//template literal
nama_lengkap = `${nama_depan}   ${nama_belakang}`;

console.log("Cara 2: ", nama_lengkap);

nama_lengkap = `${nama_depan} ${nama_belakang}  Umur ${umur}`;

console.log("Cara 3: ", nama_lengkap, typeof nama_lengkap);

console.log(umur);
// single dan double quote. new line/line break
console.log(
  "Nama Depan" + nama_depan + "\n" + "\tNama Belakang" + nama_belakang
);

console.log(`Nama Depan: ${nama_depan}
Nama Belakang: ${nama_belakang}
    jsjdsjdsjdsddsj
    kakskas
`);
// console.log
//Enter <> Entar

console.log("-------------Ternary---------");

let usia = 90;

//cara penulisan logika ? "benar" : "salah"; // cara 1
// balita,anak-anak, remaja, dewasa,tua,tua banget

let isBalita = usia <= 5 ? "Balita" : "Remaja";
let isDewasa = usia >= 18 ? "Dewasa" : "Anak-anak";


console.log("isBalita:", isBalita);
console.log("isDewasa:", isDewasa);

let kondisi = undefined; // undefined/null/0/false
let hasil = kondisi && "Ada";

console.log(hasil);


let quote = `Dia Berkata "Saya mau ke pasar". 'begitu'`;
quote = "Ok kalau 'begitu'"+ ' supaya' + `bisa jadi`;
// console.log(quote);

let harga = 2000;
let diskon = 20/100;

// console.log(`Anda mendapatkan diskon sebesar ${harga * diskon}`);

// console.log(`Anda mendapatkan diskon sebesar ${harga >=3000 ? harga * diskon: 0}`);

let narasi  = 'saya \nsuka makan "roti"'
// console.log(narasi);
narasi      = "saya\n'suka' makan roti"
// console.log(narasi);
narasi      = `Saya

'suka' makan "roti"`
// console.log(narasi);




let tulisan = "Saya adalah santri \"HSI\"";
tulisan = "Saya \\adalah"

console.log(tulisan)


//Menghitung jumlah karakter
tulisan = "Saya";
console.log("Jumlah karakter",tulisan.length)

//merubah Huruf Besar/Kecil toUpperCase/toLowerCase

tulisan = "budi";
console.log("upper case",tulisan.toUpperCase() );
console.log("lower case",tulisan.toLowerCase() );

// 1 dan "1" <= tidak sama
//a-z,A-Z <= case sensitif
//angka 0-9

let angka = 9999999999;
console.log(angka.toString());

let jumlah = "999999";
console.log(Number(jumlah));
//pengecekan
let kalimat = "Javascript adalah Bahasa yang asik";
console.log(kalimat.indexOf("bahasa")) // -1
console.log(kalimat.indexOf("Bahasa")); //18 -> dimulai 0
console.log(kalimat.includes("bahasa"))// false
console.log(kalimat.includes("Bahasa"))//true
//apakah di kalimat itu diawali kata java?
console.log(kalimat.startsWith("Java"))
//HSI
//0-1-2
//1-2-3

