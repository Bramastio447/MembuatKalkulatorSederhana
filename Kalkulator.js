const angka1 = document.getElementById('angka1');
const operasi = document.getElementById('operasi');
const angka2 = document.getElementById('angka2');
const hitung = document.getElementById('hitung');
const hasil = document.getElementById('hasil');

hitung.addEventListener('click', function() {
    const nilai1 = parseFloat(angka1.value);
    const nilai2 = parseFloat(angka2.value);
    const operasiPilihan = operasi.value;

    let hasilPerhitungan;

    switch (operasiPilihan) {
        case '+':
            hasilPerhitungan = nilai1 + nilai2;
            break;
        case '-':
            hasilPerhitungan = nilai1 - nilai2;
            break;
    }

    hasil.textContent = hasilPerhitungan;
});
