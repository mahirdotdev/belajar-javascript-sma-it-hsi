// console.log("Halo nama saya Muhammad");



// untuk mendefinisikan variable, kita menggunakan nama let,const,var
//  <script src="./aplikasi.js"></script>

// Buat variable let nama, const kelas, var alamat


//TIPE DATA STRING
let nama = "Ihza"; // tipe string
// let nama = 'Ihza' // single quote
// let nama = "Ihza" // double quote
// let nama = `Ihza` // backtick
// let nama = "Ihza' // tidak boleh

//TIPE DATA NUMBER (Angka)
const kelas = 1; // int 0 s.d ~

//const kelas = 1500.75 // float (desimal)
// const kelas =  -10 // minus
// const kelas = "11" // ini bukan number tapi string


// TIPE DATA BOOLEAN
const isUser = true; // false

// TIPE DATA NULL
const hasChildren = null;

// TIPE DATA undefined / tidak di definisikan nilainya
const hasMoney = undefined;
let hasBook;

//TIPE DATA OBJECT



var alamat = "Bekasi";


function printDetail(){
   let  nama="Budi"
    var alamat = "Jogja";

    console.log("printDetail:", nama, "Alamat", alamat);
}

// console.log(nama, kelas, alamat);
// printDetail();

// printDetail != printdetail

// Cara Penulisan Variable

// 1. tidak boleh dengan spasi atau tanda baca kecuali _ (underscrore)

/**
CONTOH
 */
const parents = {
  mother: "Wati",
  father: "Budi",
  children: 10,
};

console.info(typeof "Budi"); // Output: "string"
console.info(typeof 123); // Output: "number"
console.log(typeof true); // Output: "boolean"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof parents, parents); // Output: "object"
console.log(typeof nama); // Output: "undefined"
