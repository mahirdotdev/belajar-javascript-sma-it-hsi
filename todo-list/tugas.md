## **Tugas Mandiri: Todo List Sederhana dengan localStorage**

### **Petunjuk Pengerjaan:**

1. **Tulis seluruh kode di bawah ke dalam tiga file terpisah.**
   - `index.html`
   - `style.css`
   - `todo.js`
2. **Letakkan semua file dalam satu folder!**
3. **Buka `index.html` di browser untuk mencoba.**
4. **Jangan mengubah kode—ikuti persis kode yang diberikan. Ini agar penjelasan di kelas bisa berjalan lancar.**
5. Jika mengalami error, catat error-nya dan siap ditanyakan di kelas.

***

### **COPY KODE BERIKUT INI SESUAI FILE-NYA!**

***

#### **File 1: index.html**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Todo List localStorage</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="kontainer">
    <h2>Todo List Saya</h2>

    <input type="text" id="input-tugas" placeholder="Tulis tugas baru...">
    <button id="tombol-tambah">Tambah</button>

    <ul id="daftar-tugas"></ul>
  </div>

  <script src="todo.js"></script>
</body>
</html>
```

***

#### **File 2: style.css**
```css
body {
  font-family: Arial, sans-serif;
  background: #f0f0f0;
  padding: 20px;
}

.kontainer {
  max-width: 500px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
}

h2 {
  text-align: center;
  color: #333;
}

#input-tugas {
  width: 70%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
}

#tombol-tambah {
  padding: 10px 20px;
  font-size: 1em;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#daftar-tugas {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.item-tugas {
  background: #f9f9f9;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tombol-hapus {
  background: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
```

***

#### **File 3: todo.js**
```javascript
// Pilih elemen
var input = document.getElementById('input-tugas');
var tombol = document.getElementById('tombol-tambah');
var daftar = document.getElementById('daftar-tugas');

// Array tugas
var tugas = [];

// FUNGSI: Tampilkan tugas
function tampilkan() {
  daftar.innerHTML = '';
  for (var i = 0; i < tugas.length; i++) {
    var li = document.createElement('li');
    li.className = 'item-tugas';
    li.innerHTML = '<span>' + tugas[i] + '</span><button onclick="hapus(' + i + ')">Hapus</button>';
    daftar.appendChild(li);
  }
}

// FUNGSI: Tambah tugas
function tambah() {
  var teks = input.value.trim();
  if (teks === '') {
    alert('Tugas kosong!');
    return;
  }
  tugas.push(teks);
  localStorage.setItem('tugas', JSON.stringify(tugas));
  input.value = '';
  tampilkan();
}

// FUNGSI: Hapus tugas
function hapus(index) {
  tugas.splice(index, 1);
  localStorage.setItem('tugas', JSON.stringify(tugas));
  tampilkan();
}

// FUNGSI: Muat data dari localStorage
function muat() {
  var data = localStorage.getItem('tugas');
  if (data !== null) {
    tugas = JSON.parse(data);
  }
  tampilkan();
}

// Event tombol
tombol.addEventListener('click', tambah);

// Jalankan saat halaman dimuat
muat();
```

***

### **Catatan**
- Tugas ini akan **dijelaskan bersama in syaa Allah pada hari Senin, 27 Oktober 2025**.
- Pastikan file benar dan aplikasi Todo List bisa berjalan.
- Siapkan pertanyaan seputar localStorage, JavaScript DOM, atau error yang ditemukan.

**Selamat mengerjakan dan sampai jumpa di kelas!**
