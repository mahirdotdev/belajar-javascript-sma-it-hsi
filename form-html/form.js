let inputNama = document.getElementById("nama");
let inputKota = document.getElementById("kota");
let inputPesan = document.getElementById("pesan");

console.log("test apakah sudah benar inisiasinya");


inputNama.addEventListener("input", function (event) {
  const hasilNama = document.getElementById("hasil-nama");
  console.log(event);
  //name/nama
  // hasilNama.textContent = event.target.value;
  hasilNama.innerHTML = `<strong>${event.target.value}</strong>`
});

// inputKota.addEventListener()


inputKota.addEventListener("change",function(event){
    console.log(event.currentTarget.value)
})

//lengkapi event listener nya dan tampilkan hasilnya seperti pada contoh
//rubah semua label style display block dengan javascript getElementByClassName // getElementsByTagName

//getElementById
//getElementByClassName
//getElementsByTagName
//

// const label = document.getElementsByClassName("input-label")
const label = document.getElementsByTagName("label");
// console.log(label)

for (urutan = 0; urutan < label.length; urutan++) {
  label[urutan].style.display = "block";
  label[urutan].style.color = "blue";
  label[urutan].style.fontSize = "10px";
}

const input = document.getElementsByTagName("input");
for(i = 0;i < input.length;i++){
  input[i].style.border = "1px solid red"
}
