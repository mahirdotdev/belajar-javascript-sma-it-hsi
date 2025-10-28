// 1. Array kosong
let namaKosong = [];
console.log(namaKosong,typeof namaKosong); // Output: []


let namaBuah = ["Apel","Jeruk","Mangga","Pisang"];
console.log(namaBuah)

let nilai = [100,89,88,1999,-1,0];
console.log(nilai)

let campuran = ["Budi",100,null,0,true,false,undefined];
console.log(campuran)

let matriks = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(matriks)

// Cara mengambil value pada array

let kataMutiara = "Tidur itu lebih baik daripada begadang";
console.log("karakter ke 10",kataMutiara[0])

console.log("Nama buah pertama:", namaBuah[0]);

//menghitung jumlah value dalam array
console.log("Jumlah", namaBuah.length);

//value assignment di array
namaBuah[1] = "Buah Naga"
console.log(namaBuah)

//menambah value array
let hari = ["Senin","Selasa","Rabu","Kamis"];
console.log("hari",hari);
//menambah dari index akhir
hari.push("Jum'at","Sabtu")
console.log(hari)
//menambah dari index awal
hari.unshift("Ahad");
console.log(hari);
//menghapus value dalam array

//hapus dari index terakhir
hari.pop();
console.log("hapus dari index pertama",hari);

//hapus dari index awal
hari.shift();
console.log("Hapus dari index awal",hari)

//hapus dari tengah (index tertentu dan jumlah tertentu)
hari.splice(1,2);
console.log("splice",hari)

//mengambil sebagian
let hariBelajar = hari.slice(2,4);
console.log(hariBelajar);

let kegiatan = ["Shalat Subuh", "Mengaji", "Sarapan", "Belajar", "Istirahat"];

console.log("Cek", kegiatan.includes("Mengaji",0));
//
