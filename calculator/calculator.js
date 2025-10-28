// Kalkulator DOM Dasar JavaScript (deskripsi dan nama variabel dalam Bahasa Indonesia)
var tampilan = document.getElementById("tampilan");
var angkaTombol = document.getElementsByClassName("angka");
var operatorTombol = document.getElementsByClassName("operator");
var samaDenganTombol = document.getElementsByClassName("sama-dengan");
var resetTombol = document.getElementsByClassName("reset");

let namaAntum = document.getElementsByClassName("nama-kamu")[0];
namaAntum.style.color = "red"
namaAntum.innerHTML = `<h2 style="color:blue">Nama Saya</h2>`


var sementara = "";
var operator = "";
var angka1 = null;
var angka2 = null;
var hasilBaru = false;
// 10 + 11

// 1. Event untuk tombol angka dan titik
for (var i = 0; i < angkaTombol.length; i++) {
  angkaTombol[i].addEventListener("click", function () {
    if (hasilBaru) {
      sementara = "";
      hasilBaru = false;
    }
    console.log("Cek Tombol angka",this.textContent,hasilBaru)
    sementara += this.textContent;
    tampilan.value = sementara;
    // this.style.background ="blue"
  });
}

//debugging

//2. Tombol opperator
for (let index = 0; index < operatorTombol.length; index++) {
  operatorTombol[index].addEventListener("click", function () {
console.log("cek operator", sementara, this.textContent,operator);

    if (sementara === "" && this.textContent !== "-") {
      return;
    }

    if (operator !== "") {
      return;
    }

    angka1 = parseFloat(sementara);
    operator = this.textContent.replaceAll(" ","");
    sementara = "";
    tampilan.value = operator;
  });
}

//event untuk tombol sama dengan
for (let k = 0; k < samaDenganTombol.length; k++) {
  samaDenganTombol[k].addEventListener("click", function () {
    //stop proses berikutnya jika operator dan data sementara tidak ada
    console.log(operator,sementara)
    if (operator === "" || sementara === "") {
      return;
    }

    angka2 = parseFloat(sementara);
    let hasil;

    //jika operator sama dengan +
    if (operator === "+") {
      //maka hasil adalah angka1 + angka2
      hasil = angka1 + angka2;
      //selain itu, jika operator samadengan -
    } else if (operator === "-") {
      //maka hasil adalah angka1 - angka2
      hasil = angka1 - angka2;
    } else if (operator === "x") {
      hasil = angka1 * angka2;
    } else if (operator === "/") {
      hasil = angka1 / angka2;
    } else {
      return;
    }

    tampilan.value = hasil;
    sementara = String(hasil);
    angka1 = null;
    angka2 = null;
    operator = "";
    hasilBaru = true;
  });
}

//tombol reset
for (let r = 0; r < resetTombol.length; r++) {
  resetTombol[r].addEventListener("click", function () {
    tampilan.value = "";
    sementara = "";
    operator = "";
    angka1 = null;
    angka2 = null;
    hasilBaru = false;
  });
}
