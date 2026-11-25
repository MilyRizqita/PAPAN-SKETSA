# PAPAN-SKETSA @Painters
Aplikasi web papan menggambar sederhana yang interaktif, dibangun menggunakan HTML, CSS, dan JavaScript, serta memanfaatkan bantuan AI (Gemini) untuk penyusunan kode dan pengembangan fiturnya.

Fitur Utama
Kanvas Menggambar: Area kerja bebas dengan tema warna biru langit yang nyaman.
Pemilih Warna (Color Picker): Memilih berbagai warna bebas untuk coretan.
Pengatur Ukuran Kuas: Mengatur ketebalan kuas secara dinamis dari ukuran kecil hingga besar.
Pilihan Jenis Kuas:
Kuas Solid (Garis standar)
Kuas Spray (Efek semprotan bintik artistik)
Kuas Neon (Efek cahaya bersinar)
Penghapus & Pembersih Layar: Menghapus bagian tertentu atau membersihkan seluruh kanvas.
Tombol Unduh (Download): Menyimpan hasil karya seni langsung ke perangkat.

# FILE SOURCE AI GEMINI PROMPT-ANSWER
# A. Brainstorming
"Halo Gemini. Posisikan kamu sebagai seorang programmer web profesional yang sudah berpengalaman dan sekarang menjadi guru pembimbing ku. Aku adalah seorang siswa yang belum terlalu pandai dalam membuat web, tidak ada pengalaman sama sekali. Namun, aku diberi tugas oleh guru ku untuk membuat sebuah coding web yang dapat menyelesaikan suatu masalah sederhana. Dalam hal ini, kami diperbolehkan menggunakan bantuan ai. Namun aku bingung tidak punya ide, bisakah kamu bantu aku untuk menemukan ide untuk membuat web apa? Apk yang digunakan adalah github, dengan bahasa pemrograman html, css, javascript, dan phyton. Tolong bantu berikan aku beberapa ide, jangan tulis codenya dulu."

Halo! Selamat datang di dunia pemrograman web. Sebagai mentor kamu, aku senang sekali melihat semangatmu. Tenang saja, semua programmer hebat, termasuk aku, pernah berada di posisi nol seperti kamu sekarang. Yang penting ada kemauan untuk belajar.
Karena kamu menggunakan HTML, CSS, JavaScript, dan Python, kombinasi ini sangat kuat. HTML untuk kerangka halaman, CSS untuk mempercantik tampilan, JavaScript untuk interaksi di browser, dan Python bisa digunakan di bagian belakang (backend) jika nanti ingin menyimpan data atau melakukan pemrosesan khusus.
Berikut adalah 3 ide project web sederhana yang bisa menyelesaikan masalah sehari-hari dan sangat cocok untuk pemula:
1. Aplikasi Pencatat Tugas & Deadline (Task & Deadline Tracker)
 * Masalah yang diselesaikan: Sering lupa mengumpulkan PR atau tugas sekolah karena jadwalnya berantakan.
 * Gambaran Project:
   * Halaman web tempat kamu bisa memasukkan nama tugas, mata pelajaran, dan tanggal tenggat waktu (deadline).
   * Tugas yang sudah selesai bisa dicentang atau dihapus.
   * Tampilan dibuat rapi dengan CSS, dan JavaScript digunakan agar daftar tugas bisa bertambah secara dinamis tanpa harus refresh halaman.
2. Kalkulator Tabungan / Pengeluaran Harian (Pocket Money & Savings Tracker)
 * Masalah yang diselesaikan: Bingung uang saku habis untuk apa saja dan ingin mulai belajar menabung untuk membeli sesuatu.
 * Gambaran Project:
   * Web sederhana untuk mencatat pemasukan (uang saku) dan pengeluaran harian (beli jajanan, alat tulis, dll.).
   * Menampilkan sisa saldo secara real-time.
   * Kamu bisa menambahkan target tabungan (misal: ingin beli buku seharga Rp50.000) dan melihat seberapa dekat kamu dengan target tersebut.
3. Kamus Istilah / Flashcard Belajar Pintar (Study Glossary App)
 * Masalah yang diselesaikan: Sulit menghafal rumus atau istilah pelajaran (misal: istilah Biologi atau Sejarah) menjelang ujian.
 * Gambaran Project:
   * Web yang menampilkan daftar istilah penting beserta artinya.
   * Dilengkapi tombol interaktif (dengan JavaScript) untuk menyembunyikan arti agar kamu bisa menebaknya terlebih dahulu sebelum mengeceknya (seperti kartu flashcard digital).
Mana dari ketiga ide di atas yang paling menarik dan dekat dengan keseharianmu?

"Aku ingin membuat sebuah web yang berhubungan dengan seni, seperti menggambar. Kalau ingin membuat web untuk menggambar apakah sulit?"

Membuat web untuk menggambar sebenarnya tidak sesusah yang dibayangkan, bahkan ini adalah salah satu proyek paling seru dan klasik bagi pemula yang baru belajar JavaScript!
Di HTML, ada satu elemen khusus bernama <canvas>. Kamu bisa membayangkan elemen ini seperti selembar kertas kosong digital. Dengan bantuan JavaScript, kita cukup memberi perintah sederhana seperti: "Saat kursor mouse ditekan dan digerakkan di atas kertas ini, buatlah garis mengikuti arah mouse."
Untuk pemula, tingkat kesulitannya bisa kamu atur sendiri dari yang paling dasar hingga yang lebih canggih:
Level 1: Sangat Mudah (Cukup HTML, CSS, & JavaScript dasar)
 * Fitur: Hanya papan putih untuk coret-coret menggunakan mouse/layar sentuh dengan satu warna (hitam) dan satu tombol untuk menghapus seluruh gambar (Clear).
 * Manfaat: Cocok untuk menyelesaikan tugas sekolah dengan cepat tanpa pusing memikirkan hal rumit.
Level 2: Menengah (Mulai terasa seperti aplikasi beneran)
 * Fitur: Menambahkan pilihan warna (merah, biru, kuning, dll.), pengatur ketebalan kuas, alat penghapus (eraser), serta tombol untuk menyimpan hasil gambar ke komputer/HP (Download sebagai PNG).
 * Manfaat: Tampilannya sudah sangat menarik, interaktif, dan fungsional untuk dipakai sehari-hari.
Level 3: Lanjutan (Menggunakan Python di bagian belakang)
 * Fitur: Menambahkan galeri karya agar gambar yang sudah dibuat bisa disimpan secara permanen ke database dan dilihat orang lain di halaman web tersebut.
 * Manfaat: Kamu bisa mempraktikkan bahasa Python yang tadi kamu sebutkan, sekaligus membuat web pameran karya seni mini.
Masalah sederhana yang diselesaikan:
Web ini bisa menjadi papan sketsa kilat bagi pelajar atau kreator yang tiba-tiba mendapat ide gambar atau butuh membuat diagram cepat tanpa harus membuka aplikasi berat seperti Photoshop atau menginstal aplikasi tambahan.
Bagaimana menurutmu? Apakah kamu tertarik untuk mencoba membuat web papan gambar ini sebagai proyek tugasmu?

# B. Code HTML
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Papan Sketsa Langit - Web Menggambar</title>
    <!-- Menghubungkan ke file CSS untuk desain warna biru langit -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1>☁️ Papan Sketsa Langit</h1>
        <p>Tuangkan ide dan imajinasimu di atas kanvas digital</p>
    </header>

    <main>
        <!-- Area Alat Gambar (Toolbar) -->
        <div class="toolbar">
            <div class="tool-group">
                <label for="colorPicker">Warna Kuas:</label>
                <input type="color" id="colorPicker" value="#0284c7">
            </div>

            <div class="tool-group">
                <label for="brushSize">Ukuran Kuas:</label>
                <input type="range" id="brushSize" min="1" max="30" value="5">
                <span id="sizeDisplay">5px</span>
            </div>

            <div class="tool-group">
                <button id="eraserBtn" type="button">Penghapus</button>
                <button id="clearBtn" type="button">Bersihkan Semua</button>
                <button id="saveBtn" type="button">Simpan Gambar</button>
            </div>
        </div>

        <!-- Area Kertas Gambar (Canvas) -->
        <div class="canvas-container">
            <canvas id="drawingCanvas" width="800" height="500"></canvas>
        </div>
    </main>

    <footer>
        <p>Dibuat dengan semangat belajar pemrograman web</p>
    </footer>

    <!-- Menghubungkan ke file JavaScript agar kanvas bisa dipakai menggambar -->
    <script src="script.js"></script>
</body>
</html>

# C. Code CSS
/* Pengaturan dasar untuk seluruh halaman */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    /* Gradasi warna biru langit yang lembut */
    background: linear-gradient(135deg, #e0f2fe 0%, #7dd3fc 100%);
    color: #0c4a6e;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

/* Bagian Judul Atas */
header {
    text-align: center;
    margin-bottom: 20px;
}

header h1 {
    font-size: 2.2rem;
    color: #0369a1;
    margin-bottom: 5px;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
}

header p {
    font-size: 1rem;
    color: #0284c7;
}

/* Kotak Peralatan (Toolbar) menyerupai awan putih */
.toolbar {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 15px 25px;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(2, 132, 199, 0.15);
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    border: 2px solid #bae6fd;
}

.tool-group {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    font-size: 0.95rem;
}

/* Input Pemilih Warna & Penggeser Ukuran */
input[type="color"] {
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    cursor: pointer;
    background: transparent;
}

input[type="range"] {
    accent-color: #0284c7;
    cursor: pointer;
}

/* Desain Tombol */
button {
    background-color: #0284c7;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 6px rgba(2, 132, 199, 0.2);
}

button:hover {
    background-color: #0369a1;
    transform: translateY(-2px);
}

button:active {
    transform: translateY(0);
}

/* Tombol khusus saat mode penghapus aktif (akan dipakai oleh JavaScript nanti) */
button.active-tool {
    background-color: #f59e0b;
    color: #fff;
}

/* Area Kertas Gambar (Canvas) */
.canvas-container {
    background-color: #ffffff;
    padding: 10px;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(3, 105, 161, 0.2);
    border: 3px solid #38bdf8;
    max-width: 100%;
    overflow: hidden;
}

canvas {
    display: block;
    background-color: #ffffff;
    border-radius: 8px;
    cursor: crosshair; /* Mengubah kursor menjadi tanda tambah (+) saat di atas kanvas */
    max-width: 100%;
    height: auto;
}

/* Bagian Bawah (Footer) */
footer {
    margin-top: auto;
    padding-top: 25px;
    font-size: 0.85rem;
    color: #0369a1;
}

# Code Javascript 
// 1. Mengambil elemen-elemen dari HTML agar bisa dikontrol oleh JavaScript
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d'); // Alat utama untuk menggambar 2D di kanvas

const colorPicker = document.getElementById('colorPicker');
const brushSize = document.getElementById('brushSize');
const sizeDisplay = document.getElementById('sizeDisplay');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const saveBtn = document.getElementById('saveBtn');

// 2. Pengaturan awal (status menggambar)
let isDrawing = false;
let isEraser = false;
let currentColor = colorPicker.value;
let currentSize = brushSize.value;

// Membuat ujung garis menjadi bulat dan halus (tidak patah-patah)
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

// Mengisi latar belakang awal kanvas dengan warna putih solid
// (Penting agar saat disimpan jadi gambar, background-nya tidak transparan)
function setWhiteBackground() {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
setWhiteBackground();

// 3. Fungsi menghitung posisi kursor/sentuhan secara akurat di atas kanvas
function getCoordinates(event) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if (event.touches && event.touches.length > 0) {
        return {
            x: (event.touches[0].clientX - rect.left) * scaleX,
            y: (event.touches[0].clientY - rect.top) * scaleY
        };
    }
    return {
        x: (event.clientX - rect.left) * scaleX,
        y: (event.clientY - rect.top) * scaleY
    };
}

// 4. Fungsi Utama Menggambar
function startDrawing(event) {
    isDrawing = true;
    const coords = getCoordinates(event);
    ctx.beginPath();
    ctx.moveTo(coords.x, coords.y);
    draw(event); // Agar titik tunggal juga tergambar saat diklik sekali
}

function draw(event) {
    if (!isDrawing) return;
    if (event.cancelable) event.preventDefault(); // Mencegah layar HP ikut ter-scroll saat menggambar

    const coords = getCoordinates(event);

    ctx.lineWidth = currentSize;
    // Jika mode penghapus aktif, gunakan warna putih; jika tidak, gunakan warna pilihan
    ctx.strokeStyle = isEraser ? '#ffffff' : currentColor;

    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(coords.x, coords.y);
}

function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
}

// 5. Menghubungkan gerakan Mouse & Layar Sentuh ke fungsi menggambar
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Dukungan untuk layar sentuh (HP / Tablet)
canvas.addEventListener('touchstart', startDrawing, { passive: false });
canvas.addEventListener('touchmove', draw, { passive: false });
canvas.addEventListener('touchend', stopDrawing);

// 6. Mengatur fungsi tombol-tombol di Toolbar
// Ubah warna kuas
colorPicker.addEventListener('input', (e) => {
    currentColor = e.target.value;
    isEraser = false;
    eraserBtn.classList.remove('active-tool');
});

// Ubah ukuran kuas
brushSize.addEventListener('input', (e) => {
    currentSize = e.target.value;
    sizeDisplay.textContent = `${currentSize}px`;
});

// Tombol Penghapus
eraserBtn.addEventListener('click', () => {
    isEraser = !isEraser; // Membalikkan status aktif/nonaktif
    eraserBtn.classList.toggle('active-tool', isEraser);
});

// Tombol Bersihkan Semua
clearBtn.addEventListener('click', () => {
    setWhiteBackground();
});

// Tombol Simpan Gambar (Download PNG)
saveBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'karya-sketsa-langit.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});

# personal contribution
Mencari ide dasar
Mengubah header dan beberapa text 
Menambahkan beberapa fitur tambahan sesuai keinginan dengan mengandalkan pemahaman logika dan code yang sudah ada sebelumnya
