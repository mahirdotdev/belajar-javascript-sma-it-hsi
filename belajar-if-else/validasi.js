const inputUmur = document.getElementById("input-umur");
let tombolCek = document.getElementById("tombol-cek");

var hasilDiv = document.getElementById("hasil");

tombolCek.addEventListener("click", function () {
  const umur = parseFloat(inputUmur.value); //number

  const umurMinimal = 17; //number

  //jika umur lebih kecil dari umurMinimal
  if (umur < umurMinimal) {
    //maka......
    hasilDiv.textContent = "Anda belum cukup umur";
    hasilDiv.className = "tampil tidak-layak";

    //selain itu.....
  } else {
    hasilDiv.textContent = "Selamat, Anda memenuhi syarat";
    hasilDiv.className = "tampil layak";
  }

  console.log("umunya ", umur, " minimalnya", umurMinimal);
});


// Tugas
// 1. Buat baru, file belajar-if-eselse-2
// 2. cek kelayakan Pendaftarkan SIM, berdasarkan tinggi badan
//3. minimum tinggi adalah adalah 160
