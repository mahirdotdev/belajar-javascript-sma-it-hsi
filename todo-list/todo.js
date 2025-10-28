// Pilih elemen
var input = document.getElementById("input-tugas");
var tombol = document.getElementById("tombol-tambah");
var daftar = document.getElementById("daftar-tugas");

// Array tugas
var tugas = [];

// FUNGSI: Tampilkan tugas
function tampilkan() {
  daftar.innerHTML = ""; // Kosongkan dulu

  for (var i = 0; i < tugas.length; i++) {
    //buat element <li></li>
    var li = document.createElement("li");

    li.className = "item-tugas";
    li.innerHTML =
      "<span>" +
      tugas[i] +
      '</span><button onclick="hapus(' +
      i +
      ')">Hapus</button>';
    // li.textContent = "satu"
      // li.innerHTML = `<span>${tugas[i]}</span>`
    daftar.appendChild(li);
  }
}

// FUNGSI: Tambah tugas
function tambah() {
  //validasi data
  var teks = input.value.trim();

  //jika, text === kosong
  if (teks === "") {
    //maka, berikan peringatan
    alert("Tugas tidak boleh kosong!");
    //dan stop prosesnya
    return;
  }

  // [] => ["satu"]
  //["satu"] => ["satu","dua"]

  tugas.push(teks); // Masukkan ke array
  localStorage.setItem("tugas", JSON.stringify(tugas)); // Simpan ke localStorage
localStorage.setItem("coba","coba-coba")
  input.value = ""; // Kosongkan input
  tampilkan(); // Tampilkan ulang
}

// FUNGSI: Hapus tugas
function hapus(index) {
  tugas.splice(index, 1); // Hapus dari array
  localStorage.setItem("tugas", JSON.stringify(tugas)); // Simpan perubahan
  localStorage.setItem("key_basu",["satu","dua"]); // Simpan perubahan
  tampilkan(); // Tampilkan ulang
}

// FUNGSI: Muat data dari localStorage
function muat() {
  var data = localStorage.getItem("tugas");
  if (data !== null) {
    tugas = JSON.parse(data);
  }
  tampilkan();
}

// Event tombol
tombol.addEventListener("click", tambah);

// Jalankan saat halaman dimuat
muat();
