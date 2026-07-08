Taruh screenshot/gambar untuk studi kasus "umy-website-research" di folder ini.

Nama file bebas, urutan tampil mengikuti urutan alfabet nama file -- jadi kalau mau urut tertentu, kasih prefix angka, misal:
  1-login.png
  2-dashboard.png
  3-detail.png

Setelah taruh file di sini, daftarkan path-nya di src/data/projects.js
pada project dengan slug "umy-website-research", di field "gallery", contoh:

  gallery: [
    '/case-studies/umy-website-research/1-semuapulau.png',
    '/case-studies/umy-website-research/2-luarjawa.png',
  ],

Kalau field "gallery" kosong ([]), section galeri otomatis tidak akan muncul di halaman studi kasus.
