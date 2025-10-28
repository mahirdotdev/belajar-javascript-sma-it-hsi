// Function

//Cara Penulisan
//kebab-case
//  function penjumalahan-sederhana(){} // tidak base
// 9 - 5;
// function penjumlahan_sederhana(paramter){
//    //value

// } //snake_case
// function penjumlahanSederhana(){} //camel case
// function PenjumalahanSederhana(){} //pascal case

function fullName(tengah, belakang, depan) {
  return `${depan} ${belakang}`;
}

console.log(fullName("xxx", "Santoso", "Budi"));
console.log(fullName("Andi", "Budiarto"));
console.log(fullName("Ajiz", "Abdurrahman"));

// challenge

//function untuk membuat penjumlahan a+b

function penjumlahan(a, b) {
  return a + b;
}

//menghitung nilai segitiga 1/2 x panjang x tinggi
// with default parameter value
function luasSegiTiga(panjang, tinggi, satuan = "cm") {
  return `${(1 / 2) * panjang * tinggi} ${satuan}`;
}

console.log("Penjumlahan", penjumlahan(100, 30));
console.log("luasSegiTiga 1:", luasSegiTiga(200, 50, "inch"));
console.log("luasSegiTiga 2:", luasSegiTiga(90, 50));

// format nomor handphone
// contoh inputnya adalah "62 812 000", "62-813-111", "62 815828282"

//ekspektasinya, valuenya adalah nomor saja tanpa ada spasi atau tanda baca.

function formatPhoneNumber(phoneNumber) {
  return phoneNumber
    .replaceAll(" ", "")
    .replaceAll("-", "")
    .replaceAll(".", "")
    ;
}
// text.replace().replace().replaceAll();

console.log("", formatPhoneNumber("62 812 000"));
console.log("", formatPhoneNumber("62-812-000"));
console.log("", formatPhoneNumber("62 812000"));
console.log("", formatPhoneNumber("62 812    000    ."));
//output yang diinginkan adalah seperti ini 62812000


