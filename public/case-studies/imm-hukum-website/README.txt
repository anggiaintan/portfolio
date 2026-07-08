Taruh screenshot/gambar untuk studi kasus "imm-hukum-website" di folder ini.

Nama file bebas, urutan tampil mengikuti urutan alfabet nama file -- jadi kalau mau urut tertentu, kasih prefix angka, misal:
  1-login.png
  2-dashboard.png
  3-detail.png

Setelah taruh file di sini, daftarkan path-nya di src/data/projects.js
pada project dengan slug "imm-hukum-website", di field "gallery", contoh:

  gallery: [
    '/case-studies/imm-hukum-website/1-home.png',
    '/case-studies/imm-hukum-website/2-berita.png',
    '/case-studies/imm-hukum-website/3-tentang.png',
  ],

Kalau field "gallery" kosong ([]), section galeri otomatis tidak akan muncul di halaman studi kasus.
