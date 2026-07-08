Taruh screenshot/gambar untuk studi kasus "homy-laundry" di folder ini.

Nama file bebas, urutan tampil mengikuti urutan alfabet nama file -- jadi kalau mau urut tertentu, kasih prefix angka, misal:
  1-login.png
  2-dashboard.png
  3-detail.png

Setelah taruh file di sini, daftarkan path-nya di src/data/projects.js
pada project dengan slug "homy-laundry", di field "gallery", contoh:

  gallery: [
    '/case-studies/homy-laundry/1-login.png',
    '/case-studies/homy-laundry/2-dashboard.png',
    '/case-studies/homy-laundry/3-inputpesanan.png',
  ],

Kalau field "gallery" kosong ([]), section galeri otomatis tidak akan muncul di halaman studi kasus.
