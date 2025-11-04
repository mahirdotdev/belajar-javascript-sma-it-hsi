var inputGram = document.getElementById("emas-gram");
var tombol = document.getElementById("hitung");
var hasil = document.getElementById("hasil");
var historyList = document.getElementById("history");

// Nilai tukar rupiah (per gram emas)
var hargaEmasRupiah = 1100000; // contoh: Rp1.100.000/gram emas

// Muat history dari localStorage saat pertama kali halaman dibuka
function muatHistory() {
  var data = localStorage.getItem("zakatHistory");
  historyList.innerHTML = "";
  if (data) {
    var list = JSON.parse(data);
    for (var i = list.length - 1; i >= 0; i--) {
      var item = list[i];
      var ele = document.createElement("li");
      ele.textContent = item;
      historyList.appendChild(ele);
    }
  }
}

function simpanHistory(text) {
  var data = localStorage.getItem("zakatHistory");
  var list = data ? JSON.parse(data) : [];
  list.push(text);
  if (list.length > 10) list = list.slice(-10); // batasi max 10 history
  localStorage.setItem("zakatHistory", JSON.stringify(list));
  muatHistory();
}

tombol.addEventListener("click", function () {
  var emas = parseFloat(inputGram.value);
  var nisab = 85;

  if (isNaN(emas) || emas <= 0) {
    hasil.textContent = "Masukkan jumlah emas yang benar!";
    return;
  }

  if (emas < nisab) {
    hasil.textContent = "Belum wajib zakat (karena < 85 gram).";
    simpanHistory("Jumlah emas: " + emas + " gram → Belum wajib zakat");
  } else {
    var zakatGram = emas * 0.025; // 2.5% dari emas
    var zakatRupiah = zakatGram * hargaEmasRupiah;
    var teks =
      "Wajib zakat: " +
      zakatGram +
      " gram emas ≈ Rp" +
      zakatRupiah.toLocaleString("id-ID");
    hasil.textContent = teks;
    simpanHistory(
      "Jumlah emas: " +
        emas +
        " gram, zakat: " +
        zakatGram +
        " gram ≈ Rp" +
        zakatRupiah.toLocaleString("id-ID")
    );
  }
  inputGram.value = "";
});

// Tampilkan riwayat perhitungan saat halaman dibuka
muatHistory();
