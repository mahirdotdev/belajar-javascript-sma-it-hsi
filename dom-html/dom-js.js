const catatan = document.getElementsByClassName("catatan");

console.log(catatan);
catatan[0].textContent = "Urutan ke satu"
catatan[1].textContent = "Urutan ke dua"
catatan[2].textContent = "Urutan ke tiga"

// catatan[1].style.color = "red";


// masalahnya, gimana caranya agar semua yang memiliki classname "catatan" menjadi text berwarna merah?
//dan seandainya yang meiliki class "catatan" ada 1000, kemudian tempatnya juga berbeda-beda?

//looping => konsep berputar dari mana sampai mana!


//looping
// for (inisiai;kondisi;iterasi){}
//inisiai => dari urutan ke berapa?
//kondisi => keadaan kapan dia harus berputar
//iterasi => bagaimana cara melangkah ke putaran berikutnya

for (let urutan = 0; urutan < catatan.length; urutan +=2) {
  catatan[urutan].style.color = "red";
}
