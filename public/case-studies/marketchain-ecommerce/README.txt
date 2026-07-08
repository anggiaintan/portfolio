Taruh screenshot/gambar untuk studi kasus "marketchain-ecommerce" di folder ini.

Nama file bebas, urutan tampil mengikuti urutan alfabet nama file -- jadi kalau mau urut tertentu, kasih prefix angka, misal:
  1-login.png
  2-dashboard.png
  3-detail.png

Setelah taruh file di sini, daftarkan path-nya di src/data/projects.js
pada project dengan slug "marketchain-ecommerce", di field "gallery", contoh:

  gallery: [
    '/case-studies/marketchain-ecommerce/1-login.png',
    '/case-studies/marketchain-ecommerce/2-ecommerce.png',
    '/case-studies/marketchain-ecommerce/3-marketing.png',
  ],

Kalau field "gallery" kosong ([]), section galeri otomatis tidak akan muncul di halaman studi kasus.
