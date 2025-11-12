// ============================================
// STEP 1: AMBIL ELEMEN HTML
// ============================================

// Ambil elemen tombol
var tombolTampil = document.getElementById("tombol-tampil");

// Ambil elemen list (ul) untuk menampilkan daftar bilangan
var daftarBilangan = document.getElementById("daftar-bilangan");

// ============================================
// STEP 2: BUAT LOGIKA LOOPING
// ============================================

// Event listener: saat tombol diklik, jalankan fungsi di bawah
tombolTampil.addEventListener("click", function () {
  // Kosongkan list terlebih dahulu
  daftarBilangan.innerHTML = "";

  // ============================================
  // FOR LOOP DIMULAI DI SINI
  // ============================================

  // CARA MEMBACA:
  // Mulai dari i = 1, selama i <= 10, naikkan i sebesar 1 setiap putaran
  for (var i = 1; i <= 10; i++) {
    // Kode di dalam loop ini dijalankan berulang kali
    // Putaran 1: i = 1
    // Putaran 2: i = 2
    // ... dan seterusnya sampai i = 10

    // Buat elemen <li> baru
    var li = document.createElement("li");

    // Isi teks elemen li dengan nilai i
    li.textContent = i;

    // Tambahkan elemen li ke dalam daftarBilangan (ul)
    daftarBilangan.appendChild(li);
  }
  // Loop berakhir saat i sudah lebih dari 10
});



