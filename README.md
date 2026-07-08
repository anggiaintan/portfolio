# Anggia Intan Widyaningrum — Portfolio UI/UX Designer

Portfolio dibangun dengan React + Vite, Tailwind CSS v4, Framer Motion, dan Lucide React. Seluruh konten (bio, pengalaman, 6 studi kasus) sudah diisi dengan data nyata dari laporan magang, capstone project, skripsi, dan riset yang pernah dikerjakan.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Build untuk produksi

```bash
npm run build
npm run preview
```

Hasil build ada di folder `dist/` — bisa langsung di-deploy ke Vercel, Netlify, Cloudflare Pages, dsb.

## ⚠️ Yang masih perlu kamu isi sendiri

Beberapa hal sengaja saya biarkan sebagai placeholder karena kamu bilang mau isi sendiri:

1. **Email & nomor WA** — di `src/components/Contact.jsx`, cari `infoRows` (masih `anggia.email@example.com` dan `+62 8xx-xxxx-xxxx`).
2. **Tombol "Unduh CV"** — saat ini tombolnya belum terhubung ke file PDF. Upload CV kamu ke folder `public/` (misalnya `public/cv-anggia.pdf`), lalu di `src/components/Hero.jsx` dan `src/components/Experience.jsx` ubah `href="#"` jadi `href="/cv-anggia.pdf"` dan tambahkan atribut `download`.
3. **Foto profil** — bingkai ala Figma di Hero (`src/ui/FigmaFrame.jsx`) masih pakai monogram huruf "A". Untuk pakai foto asli, taruh file fotonya di `public/` lalu tambahkan prop `photoSrc="/foto-kamu.jpg"` pada pemanggilan `<FigmaFrame />` di `src/components/Hero.jsx`.
4. **File sertifikat** — supaya kartu sertifikasi di section Pengalaman bisa diklik dan membuka sertifikat asli, taruh file PDF/gambar di `public/certificates/` dengan nama `bnsp-system-analyst.pdf` dan `certiport-html-css.pdf` (lihat `public/certificates/README.txt`). Kalau formatnya gambar, sesuaikan ekstensi di `src/data/en.js` / `id.js` pada key `experience.certifications`.
5. **Link sosial** — sekarang bentuknya tombol Email/WhatsApp/Instagram/LinkedIn di section Kontak. Isi link aslinya di `src/components/Contact.jsx` (lihat "Revisi terbaru (v3)" di atas untuk contohnya).
6. **Testimoni** — bagian ini saya hapus dulu karena belum ada quote asli. Kalau nanti dapat testimoni dari dosen pembimbing, atasan magang, atau pemilik Homy Laundry, buat lagi komponennya dan isi `testimonials.items` di `src/data/en.js` / `id.js`.
7. **Tahun proyek IMM Hukum UMY** — saya isi "2024" sebagai perkiraan karena kamu tidak menyebutkan tahunnya. Sesuaikan di `src/data/projects.js` (slug `imm-hukum-website`) kalau perlu.

## Studi kasus yang sudah dibuat (6 proyek nyata)

1. **Homy Laundry** — capstone project, kamu sebagai UI/UX Designer & Usability Tester. Datanya diambil dari hasil usability testing asli (31 task, task success & time on task).
2. **Kesatriyan (Evolution IT)** — magang merombak interface sistem absensi karyawan.
3. **Riset Website UMY** — magang UX research, survei 251 responden dari 34 provinsi.
4. **IMM Hukum UMY** — redesign & implementasi website organisasi di WordPress, dikerjakan bertiga.
5. **MarketChain** — skripsi kamu, modul E-Commerce & Marketing untuk game simulasi bisnis, dengan hasil User Acceptance Testing (88,4% expert, 86,6% user, kategori "Sangat Baik").
6. **Redesign Website TI UMY** — redesign website prodi untuk mendukung akreditasi (proposal, belum live) — lihat catatan di "Revisi terbaru".

## Revisi terbaru (v3)

- **Kontras dark mode di halaman studi kasus diperbaiki** — sebelumnya area gradient warna di atas halaman studi kasus tetap terang di dark mode sehingga teks jadi susah dibaca. Sekarang opacity gradiennya otomatis diturunkan di dark mode.
- **Skills dipindah ke section "Tools & Skills"** — supaya isinya sesuai judul (dulu skill tags ada di section Pengalaman, sekarang digabung dengan logo tools).
- **Karya diurutkan berdasarkan tahun** (terbaru dulu). Kalau mau urutan sebaliknya (terlama dulu), tinggal ubah `b - a` jadi `a - b` di baris sort pada `src/data/projects.js`.
- **Form kontak dihapus**, diganti tombol Email / WhatsApp / Instagram / LinkedIn. Semua masih placeholder — ganti di `src/components/Contact.jsx` pada array `CHANNELS`:
  ```js
  { id: 'email', ..., href: 'mailto:emailkamu@domain.com' },
  { id: 'whatsapp', ..., href: 'https://wa.me/62812xxxxxxx' },
  { id: 'instagram', ..., href: 'https://instagram.com/username_kamu' },
  { id: 'linkedin', ..., href: 'https://linkedin.com/in/username_kamu' },
  ```
  Logo Instagram & WhatsApp asli (dari Simple Icons, CC0). Logo LinkedIn tidak tersedia bebas lisensi di source itu, jadi dipakai badge teks "in" generik.
- **Footer disederhanakan** — cuma baris copyright + tombol kembali ke atas, di-tengah.

## Revisi terbaru (v2)

- **Galeri screenshot per studi kasus** — sekarang tiap studi kasus bisa punya galeri gambar asli (screenshot/wireframe), selain ilustrasi abstrak yang sudah ada. Taruh file gambar di `public/case-studies/<slug-proyek>/` (folder sudah disiapkan untuk keenam proyek, lengkap dengan README.txt di masing-masing), lalu daftarkan path-nya di `src/data/projects.js` pada field `gallery` milik proyek yang sesuai, contoh:
  ```js
  gallery: [
    '/case-studies/homy-laundry/1-login.png',
    '/case-studies/homy-laundry/2-dashboard.png',
  ],
  ```
  Kalau `gallery` dibiarkan kosong (`[]`), section galeri otomatis tidak muncul — jadi aman dibiarkan kosong sampai kamu sempat upload.
- **Studi kasus ke-6: Redesign Website TI UMY** — proyek redesign website prodi untuk keperluan akreditasi (belum diimplementasikan ke web live, ditulis apa adanya di bagian "Hasil"). Slug: `redesign-website-ti-umy`.
- Smooth scroll diperbaiki (lihat bagian di bawah), About Me disatukan jadi satu card, Tools & Skills jadi section sendiri.

## Interaksi & elemen visual sebelumnya

- **Foto profil di Hero** — dibingkai seperti artboard Figma (label layer "anggia.png", handle seleksi di 4 sudut, dimensi di bawah), diposisikan di sisi kanan Hero. Ganti dengan foto asli lewat prop `photoSrc` di `src/components/Hero.jsx` → komponen `FigmaFrame`.
- **Fact card di "Tentang"** — ~~menggantikan foto lanyard sebelumnya~~ (sekarang jadi bagian dari card About Me yang disatukan, lihat "Revisi terbaru" di atas).
- Bagian "Di mana saya paling memberi nilai" dihapus — dianggap generic self-praise tanpa bukti langsung; karya di section Karya sudah lebih meyakinkan membuktikan itu.
- **Custom cursor bulat dihapus** — kembali ke cursor default browser.

## Fitur premium lainnya

- **Smooth scroll (Lenis)** — seluruh halaman punya scroll dengan sedikit inertia/momentum, bukan scroll native browser. Diaktifkan lewat `src/hooks/useSmoothScroll.js`, otomatis nonaktif kalau browser di-set "reduce motion".
- **Magnetic button** — dua tombol utama di Hero "tertarik" sedikit ke arah kursor saat didekati (`src/ui/Magnetic.jsx`).
- **Angka statistik animasi** — angka di Hero (5, 2, 2) menghitung naik dari 0 saat pertama kali terlihat di layar (`src/ui/CountUp.jsx`).
- **Page transition** — perpindahan antar halaman (Beranda ↔ studi kasus) pakai fade + slide halus lewat `AnimatePresence`, bukan perpindahan instan.
- Section "Cara Saya Bekerja" sengaja dihapus — proses kerja sudah tersampaikan lebih meyakinkan langsung di tiap studi kasus, jadi section generik itu dianggap redundan.

## Logo tools

Logo Figma, WordPress, Laravel, HTML5, CSS, dan JavaScript di section "Tools & Skills" pakai path SVG asli dari proyek [Simple Icons](https://simpleicons.org) (lisensi CC0, bebas dipakai) — ada di `src/ui/BrandIcon.jsx`. VS Code dan Canva pakai ikon generik dari Lucide karena logo resminya tidak tersedia di paket open-source tersebut (menghindari meniru logo bermerek secara manual).

## Struktur proyek

```
src/
  components/     Navbar, Hero, About, ToolsSection, Work, Experience, Contact, Footer
  ui/              Primitives, Reveal (scroll animation), DeviceMockup (ilustrasi abstrak tiap project)
  context/         ThemeContext (dark/light), LanguageContext (ID/EN)
  data/            en.js & id.js (semua string UI), projects.js (4 studi kasus, bilingual)
  pages/           Home.jsx, CaseStudy.jsx
  hooks/           useScrollSpy.js (indikator navbar aktif)
```

## Kustomisasi lanjutan

- **Edit studi kasus**: `src/data/projects.js` — tiap project punya field `en` dan `id` terpisah.
- **Edit bio/pengalaman/skill**: `src/data/en.js` dan `src/data/id.js`.
- **Warna & tipografi**: `src/index.css` bagian `@theme`.
- **Formulir kontak**: saat ini demo statis (in-memory), belum terkirim ke mana pun. Hubungkan ke Formspree/Resend/API sendiri di `src/components/Contact.jsx`.

## Fitur

- Dark/Light mode dengan persist ke localStorage
- Bilingual ID/EN tanpa reload halaman
- Scroll reveal & micro-interaction dengan Framer Motion
- Active navbar indicator mengikuti section yang sedang dilihat
- Case study routing per proyek (`/work/:slug`)
- Fully responsive, tanpa Bootstrap
