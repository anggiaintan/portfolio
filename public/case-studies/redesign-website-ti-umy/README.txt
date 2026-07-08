Taruh screenshot/gambar untuk studi kasus "redesign-website-ti-umy" di folder ini.

Nama file bebas, urutan tampil mengikuti urutan alfabet nama file -- jadi kalau mau urut tertentu, kasih prefix angka, misal:
  1-login.png
  2-dashboard.png
  3-detail.png

Setelah taruh file di sini, daftarkan path-nya di src/data/projects.js
pada project dengan slug "redesign-website-ti-umy", di field "gallery", contoh:

  gallery: [
    '/case-studies/redesign-website-ti-umy/1-home.png',
    '/case-studies/redesign-website-ti-umy/2-fasilitas.png',
    '/case-studies/redesign-website-ti-umy/3-berita.png',
  ],

Kalau field "gallery" kosong ([]), section galeri otomatis tidak akan muncul di halaman studi kasus.
