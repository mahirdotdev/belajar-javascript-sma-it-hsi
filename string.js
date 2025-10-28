//startsWith
let sekolah = "SMA IT HSI";

console.log("Startwith",sekolah.startsWith("SMA"))
console.log("Startwith",sekolah.startsWith("IT",4))

let phoneNumber = "6282290011049";
phoneNumber = "628158228222"
console.log("Chek nomor",phoneNumber.startsWith("62"));
console.log("Kartu apa",phoneNumber.startsWith("822",2) ? "Simpati":"gak tahu")
console.log("Kartu apa",phoneNumber.includes("822") ? "Simpati":"Gak tahu")

console.log("jumlah karakter:", phoneNumber.length)

let nipHsi = "ARN182-10140";

console.log(`Siapa dia ${nipHsi}`,nipHsi.startsWith("ARN")? "Ikhwan" :"Akhwat");

nipHsi = "ART221-10000";
console.log(
  `Siapa dia ${nipHsi}`,
  nipHsi.startsWith("ARN") ? "Ikhwan" : "Akhwat"
);


//endsWith
console.log("endsWith NIP",nipHsi.endsWith("0"));

//slice << memecah string

console.log("Slice",nipHsi.slice(0,3));
//check awalan nomor handphone 62822
let karakter_awal =  phoneNumber.slice(0,2);
console.log("Karakter",karakter_awal)
console.log("Chek nomor", karakter_awal === "62");


let awal_nip = nipHsi.slice(0,2);
console.log("awal nip",awal_nip);

let teksPanjang = "Ini adalah contoh teks yang sangat panjang";
console.log(teksPanjang.slice(0,10));
console.log(teksPanjang.slice(11));
console.log(teksPanjang.slice(-7))

//Split menjadi array
let daftarBuah = "apel,jeruk,mangga,pisang";
let arrayBuah = daftarBuah.split(","); //explode

console.log(
    daftarBuah,
    arrayBuah,
     daftarBuah.length,
     arrayBuah.length);
console.log("--------------------------------------------");

let kataDasar = "SEPATU";
console.log(kataDasar.indexOf("A"));
console.log(kataDasar[3]);//sama dengan charAt
// console.log(kataDasar.charAt(3));
console.log("index daftarBuah", daftarBuah[3]);
console.log("index arrayBuah", arrayBuah[3]);

// Replace

let pesan = "Saya suka kopi, kopi itu enak. kopi";
console.log(pesan.replace("kopi", "teh")); // Output: Saya suka teh, kopi itu enak.
console.log(pesan.replaceAll("kopi", "teh")); // Output: Saya suka teh, teh itu enak.



