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
// --- Tambahan Logika Jenis Kuas di Bawah Sendiri ---
const brushType = document.getElementById('brushType');
let currentBrush = 'solid';

brushType.addEventListener('change', (e) => {
    currentBrush = e.target.value;
    isEraser = false;
    eraserBtn.classList.remove('active-tool');
});

// Fungsi draw yang mendukung Kuas Semprot & Neon
function draw(event) {
    if (!isDrawing) return;
    if (event.cancelable) event.preventDefault();

    const coords = getCoordinates(event);
    ctx.lineWidth = currentSize;
    ctx.strokeStyle = isEraser ? '#ffffff' : currentColor;
    ctx.fillStyle = isEraser ? '#ffffff' : currentColor;

    if (currentBrush === 'solid' || isEraser) {
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(coords.x, coords.y);
    } 
    else if (currentBrush === 'spray') {
        const density = 20;
        for (let i = 0; i < density; i++) {
            const offsetX = (Math.random() - 0.5) * currentSize * 2;
            const offsetY = (Math.random() - 0.5) * currentSize * 2;
            if (Math.sqrt(offsetX * offsetX + offsetY * offsetY) <= currentSize) {
                ctx.fillRect(coords.x + offsetX, coords.y + offsetY, 2, 2);
            }
        }
    } 
    else if (currentBrush === 'neon') {
        ctx.shadowBlur = 15;
        ctx.shadowColor = currentColor;
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(coords.x, coords.y);
        ctx.shadowBlur = 0;
    }
}
