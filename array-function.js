let angkaAsli = [1, 2, 3, 4, 5,6,7,8,9,10,11];

console.log("Angka Asli:", angkaAsli);

//anonymous/inline function
let kaliDua = angkaAsli.map(function(angka){
  return angka * 12;
});

console.log("kali dua",kaliDua)

// named function
function perkalianDua(number){
    return number * 2;
}

kaliDua = angkaAsli.map(perkalianDua);

console.log(kaliDua)





function perkalianTiga(number) {
  return number * 3;
}
console.log(angkaAsli.map(perkalianTiga))


// find and filter;

function cariGanjil(angka){
    return angka % 2 === 1;
}
console.log("Angka Gajil",angkaAsli.filter(cariGanjil))

let angkaGenap = angkaAsli.filter(function(angka){
    return angka % 2 ===0
})

console.log(angkaGenap)

console.log(

    angkaAsli.find(function(angka){
    return angka === 11
})

)

