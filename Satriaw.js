function tambahSiswa() {
    const namaInput = document.getElementById('namaSiswa');
    const nama = namaInput.value.trim();
    if (!nama) return alert("Nama siswa tidak boleh kosong!");

    const list = document.getElementById('listSiswa');
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${nama}</span>
        <button onclick="editSiswa(this)">Edit</button>
        <button onclick="hapusSiswa(this)">Hapus</button>
    `;
    
    list.appendChild(li);
    namaInput.value = '';
    namaInput.focus();
}

function editSiswa(button) {
    const li = button.parentElement;
    const span = li.querySelector('span');
    const namaBaru = prompt("Masukkan nama baru:", span.textContent.trim());
    
    if (namaBaru !== null && namaBaru.trim() !== '') {
        span.textContent = namaBaru.trim();
    }
}

function hapusSiswa(button) {
    const li = button.parentElement;
    if (confirm("Apakah Anda yakin ingin menghapus siswa ini?")) {
        li.remove();
    }
}
