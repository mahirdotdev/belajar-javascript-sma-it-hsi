// Pilih elemen
const lampuMerah = document.getElementById("lampu-merah");
const lampuKuning = document.getElementById("lampu-kuning");
const lampuHijau = document.getElementById("lampu-hijau");
const tombolMulai = document.getElementById("mulai");
const tombolBerhenti = document.getElementById("berhenti");
const btnMerah = document.getElementById("btn-merah");
const btnKuning = document.getElementById("btn-kuning");
const btnHijau = document.getElementById("btn-hijau");
const textStatus = document.getElementById("status");

//ms = mili second / s = second, h=hour/m=minute
let intervalOtomatis; //interval, ms 1000ms=1s
let indexLampu = 0;
const urutan = ["merah", "kuning", "hijau"];
//0->1->2

// Fungsi mode otomatis
function jalanOtomatis() {
  const warna = urutan[indexLampu]
  console.log(warna)
  nyalakanLampu(warna);
  indexLampu++;
  if (indexLampu >= urutan.length) {
    indexLampu = 0;
  }
}

// Event tombol Mulai
tombolMulai.addEventListener("click", function () {
  clearInterval(intervalOtomatis); // Bersihkan interval sebelumnya
  indexLampu = 0;
  //jalan otomatis
  jalanOtomatis();

  //jalankan fungsi jalanOtomatis(), setiap 2detik
  intervalOtomatis = setInterval(jalanOtomatis, 1000); // Ganti setiap 2 detik
});

// Event tombol Berhenti
tombolBerhenti.addEventListener("click", function () {
  clearInterval(intervalOtomatis);
  matikanSemua();
  textStatus.textContent = "Status: Mati";
});



// Fungsi matikan semua lampu
function matikanSemua() {
  lampuMerah.classList.remove("nyala");
  lampuKuning.classList.remove("nyala");
  lampuHijau.classList.remove("nyala");
}

// Fungsi nyalakan lampu sesuai warna
function nyalakanLampu(warna) {
  matikanSemua();

  //switch/pilih ketika (warna)....
  switch (warna) {
    //jika warna adalah merah
    case "merah":
      //maka... lakukan hal berikut ini
      lampuMerah.classList.add("nyala");
      textStatus.textContent = "Status: Merah - BERHENTI";
      // selesai
      break;
    case "kuning":
      lampuKuning.classList.add("nyala");
      textStatus.textContent = "Status: Kuning - HATI-HATI";
      break;
    case "hijau":
      lampuHijau.classList.add("nyala");
      textStatus.textContent = "Status: Hijau - JALAN";
      break;
  }
}



//infinite loop

// Event tombol manual
btnMerah.addEventListener("click", function () {
  console.log("cek warna merah")
  clearInterval(intervalOtomatis);
  nyalakanLampu("merah");
});

btnKuning.addEventListener("click", function () {
  clearInterval(intervalOtomatis);
  nyalakanLampu("kuning");
});

btnHijau.addEventListener("click", function () {
  clearInterval(intervalOtomatis);
  nyalakanLampu("hijau");
});




