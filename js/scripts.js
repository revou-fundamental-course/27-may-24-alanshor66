document.getElementById('formulir').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah pengiriman formulir default


    //membuat tanggal sekarang
    const now = new Date();
    const dateTimeString = now.toLocaleString();
   

    // Ambil nilai dari formulir
   
    const nama = document.getElementById('nama').value;
    const tglLahir = document.getElementById('tglLahir').value;
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
    const pesan = document.getElementById('pesan').value;

    // Buat teks hasil inputan
    const resultText = `Date/time: ${dateTimeString}\n \nNama: ${nama}\nTanggal Lahir: ${tglLahir}\nJenis Kelamin: ${jenisKelamin}\nPesan:\n${pesan}`;

    // Tampilkan hasil inputan di text area
    document.getElementById('result').value = resultText;

    // Tampilkan pesan alert
    alert('Pesan telah tersubmit');
});

