//Mengganti array menjadi string dengan join()
const namaBuah = "Apel,Mangga,Jeruk,Pisang";
const buahBuahan = namaBuah.split(",");
console.log("Nama Buah:",namaBuah)

console.log("Buah Array: ",buahBuahan)

let hari = ["Senin", "Selasa", "Rabu", "Kamis","Jum'at","Sabtu","Ahad"];

console.log("Hari Array", hari);

let hariHari = hari.join(", ")
console.log("Hari String:",hariHari)

// // menggabungkan 2 atau lebih array
// console.log("----------------");

let angka = [1,2];
let angka2 = [24,54]
let angka3 = [100, 1000];
let gabungan = angka.concat(angka2, angka3);
console.log(gabungan)

// Function

// let namaDepan = "Budi";
// let namaBelakang = "Santoso";

// let namaLengkap = `${namaDepan} ${namaBelakang}`;

function fullName(namaDepan,namaBelakang){
    return `${namaDepan} ${namaBelakang}`;
}

console.log(fullName("Budi","Santoso"));
console.log(fullName("Andi","Budiarto"));
console.log(fullName("Ajiz","Abdurrahman"));


