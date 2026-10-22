# PANDUAN LENGKAP — ISAAC SHABRI PORTFOLIO V3

> Tutorial praktis untuk pemula. Website ini 100% statis: GitHub Pages + Jekyll + Pages CMS. Tidak perlu VPS, database, atau instalasi Node di laptop. Biaya hosting/domain `github.io` Rp0 pada repository publik dalam batas layanan gratis.

## 0. Penting sebelum mulai

- **Jangan unggah file ZIP sebagai satu file.** Ekstrak ZIP, lalu unggah seluruh isi folder proyek ke **root** repository.
- **Jangan langsung hapus repository lama.** Backup dulu. Jika repo baru menggunakan nama yang sama, rename repo lama terlebih dahulu atau hapus setelah backup.
- **Jangan buat `.nojekyll`.** Website ini memerlukan Jekyll untuk menghasilkan halaman case study dan membaca data CMS.
- Website *tidak* bisa ditampilkan dengan benar dengan double-click `index.html` di Windows, sebab Jekyll belum memproses Liquid. Akses hasil deployment GitHub Pages.
- Semua proyek/pengalaman/sertifikat yang disertakan adalah **contoh**, bukan klaim pencapaian pribadi. Ganti melalui CMS sebelum dibagikan ke recruiter.

## A. Backup repository lama dan opsi mulai ulang

1. Buka [GitHub](https://github.com/), login.
2. Buka repository portfolio lama (misalnya `isaacthesisabie.github.io`).
3. Pastikan branch `main`, klik tombol **Code** (hijau) > **Download ZIP**. Simpan backup di PC.
4. Jika ingin menggunakan nama repo yang sama, opsi **lebih aman**: buka repository lama > **Settings** > **General** > **Repository name** > rename menjadi `isaacthesisabie-portfolio-backup` (nama harus unik) > **Rename**. Konten backup tetap ada.
5. Kalau benar-benar ingin menghapusnya (tidak diwajibkan): **Settings** > gulir ke **Danger Zone** > **Delete this repository** > lakukan konfirmasi yang diminta GitHub. Ini tindakan permanen; jangan lakukan tanpa ZIP backup.

## B. Buat repository baru

1. Buka https://github.com/new
2. **Repository name:** `USERNAME.github.io`, di mana `USERNAME` persis sama dengan username GitHub kamu. Contoh: `isaacthesisabie.github.io`.
3. **Visibility:** `Public`.
4. **Add a README file:** boleh **Off** supaya repository kosong. Jika GitHub meminta isi awal, aktifkan README dan lanjut.
5. Klik **Create repository**.
6. Untuk tipe user-site yang paling praktis, nama repo **harus mengikuti username**. Alamat situs: `https://USERNAME.github.io/`.

## C. Upload semua source code ke GitHub

1. Download ZIP `Isaac_Portfolio_Full_V3.zip` dari ChatGPT.
2. Di Windows: klik kanan ZIP > **Extract All** > **Extract**.
3. Buka folder `Isaac_Portfolio_Full_V3` hasil ekstrak.
4. Pastikan di situ langsung terlihat `index.html`, `_config.yml`, `.pages.yml`, folder `assets`, `_data`, `_layouts`, dan collection lainnya.
5. Buka repo GitHub baru > **Add file** > **Upload files**. Kalau repo benar-benar kosong, pilih tautan **uploading an existing file**.
6. Di File Explorer, pilih **semua file dan folder di DALAM folder** dengan `Ctrl+A`, lalu **drag and drop** ke kotak upload GitHub. Jangan drag ZIP atau folder pembungkus utamanya saja.
7. Jika browser tidak ikut mengunggah folder ketika drag dari Explorer, ulangi untuk setiap folder dari Explorer. Setelah upload, lihat daftar file yang GitHub tampilkan sebelum commit.
8. Pastikan setidaknya ada `index.html`, `.pages.yml`, `_config.yml`, `_data/profile.yml`, `_layouts/default.html`, `assets/css/site.css`, `assets/js/site.js`, file-file `_projects`.
9. Pada commit message, tulis `Initial portfolio V3` > klik **Commit changes**.
10. **Penting:** folder/dokumen yang punya awalan underscore adalah normal untuk Jekyll, jangan diubah nama.

Struktur root yang benar:

```
USERNAME.github.io/
├── index.html
├── .pages.yml
├── _config.yml
├── _data/profile.yml
├── _includes/icons.html
├── _layouts/default.html
├── _layouts/project.html
├── _projects/
├── _portfolio_categories/
├── _expertise/
├── _experiences/
├── _certificates/
├── _services/
├── assets/
│   ├── css/site.css
│   ├── js/site.js
│   ├── img/
│   └── uploads/.gitkeep
├── Gemfile
├── README.md
└── PANDUAN-LENGKAP.md
```

## D. Aktifkan GitHub Pages

1. Di repository klik **Settings**.
2. Sidebar kiri cari bagian **Code and automation** > klik **Pages**.
3. Di bagian **Build and deployment** pilih **Source: Deploy from a branch**.
4. Set branch **main**, folder **/(root)**, lalu **Save**.
5. Buka tab **Actions**: cari proses `pages build and deployment`; tunggu sampai centang hijau.
6. Buka `https://USERNAME.github.io/`. Alamatnya akan aktif setelah deployment dan propagasi selesai.
7. Tekan `Ctrl+Shift+R` untuk hard refresh bila CSS lama terlihat.

**Harus ter-render:** hero desktop 2 kolom, foto placeholder di kanan **tidak memenuhi layar**, enam expertise bergradasi, kartu portfolio 3 kolom desktop, timeline dan footer. Bila tampilan cuma selebar 400 px atau ikon sangat besar, artinya CSS belum ter-load; cek file `assets/css/site.css` di repo dan tab Network browser. Jangan mengubah zoom untuk menutupi masalah.

## E. Hubungkan Pages CMS

1. Buka https://app.pagescms.org/
2. Klik **Sign in with GitHub**.
3. Berikan akses GitHub App ke repository yang baru dibuat (pilih **Only select repositories** bila kamu ingin membatasi izin).
4. Pilih repo `USERNAME.github.io` branch `main`.
5. Menu editor sudah dikonfigurasi melalui file `.pages.yml`. Seharusnya muncul:
   - 01 · Profil & Pengaturan
   - 02 · Kategori Portfolio
   - 03 · Portfolio Projects
   - 04 · Areas of Expertise
   - 05 · Pengalaman
   - 06 · Sertifikat & Penghargaan
   - 07 · Services & Collaborations
6. Kalau muncul "File not found _data/profile.yml", file upload belum lengkap. Pastikan folder `_data` dan `profile.yml` benar-benar berada langsung di root repo.
7. Kalau schema tidak diperbarui, periksa `.pages.yml` di branch `main`, refresh Pages CMS, atau pilih repository/branch kembali.

## F. Personalisasi profile dan upload foto

1. Dalam Pages CMS buka **01 · Profil & Pengaturan**.
2. Ubah `name`, `brand`, `headline`, dan `hero_description`.
3. Pada field **Foto Profil (Upload)**, pilih/unggah foto berorientasi portrait (saran 900×1200 px JPG/WebP, ukuran file terkompresi). Akan disimpan oleh Pages CMS di `assets/uploads`.
4. Ubah stats hanya berdasarkan pencapaian yang benar. Bisa matikan `show_stats` bila ingin menyembunyikan semuanya.
5. Isi `email`, `linkedin`, `github`, `location`, dan `availability`.
6. Untuk CV, upload file PDF dari field **Upload CV**. Tombol Download CV otomatis muncul bila path tersedia.
7. Edit pengantar section dan Contact. Tekan **Save**.
8. Pages CMS akan meng-commit perubahan file ke GitHub. Buka **Actions** dan periksa build halaman terbaru.

## G. Tambah kategori portfolio (DINAMIS)

1. Buka **02 · Kategori Portfolio** > **New entry**.
2. Isi contoh: `title: Event Management`, `slug: event-management`, `order: 4`.
3. Save. Slug hanya huruf kecil/angka/tanda hubung.
4. Kategori akan tersedia di field **Kategori** dalam project karena memakai `reference` ke collection categories, bukan select statis.
5. Tombol filter kategori baru muncul di website begitu ada **minimal satu project published** yang memakai kategori tersebut.
6. Jika mengubah `slug` suatu kategori yang sudah digunakan proyek, edit nilai kategori di proyek terkait agar filter tetap sinkron.

## H. Tambah project / cover / screenshots / case study

1. Buka **03 · Portfolio Projects** > **New entry**.
2. Isi `title` yang jelas. Filename dibuat otomatis dari judul.
3. Isi `summary`, pilih `category` dari referensi kategori.
4. Upload `cover`, lalu pilih beberapa gambar pada `gallery`.
5. Isi `role`, tambahkan beberapa `tools`, `timeline`, `challenge`, `process`, `results`.
6. Tambahkan tautan `demo_url`, `repo_url` jika ada (lengkap `https://...`).
7. Centang `published: true`; isi `order` (misal 1, 2, 3).
8. Tambahkan cerita detail lewat rich-text `body` jika diperlukan; Save.
9. Setelah Actions hijau, halaman project akan tersedia pada path `/projects/<filename>/`.
10. **View Screens** membuka gallery overlay; **Case Study** membuka halaman detail.
11. Jika project ingin disembunyikan, ubah `published` ke `false` (catatan: halaman detail hasil build masih dapat diakses langsung lewat URL, karena field ini hanya mengatur tampil di homepage; jangan simpan proyek rahasia dalam repo publik).

## I. Edit expertise, experience, certificates, services

- **04 · Areas of Expertise:** New entry > judul, deskripsi, ikon, warna, urutan. Boleh lebih dari 6; grid adaptif.
- **05 · Pengalaman:** New entry > posisi, organisasi, periode (mis. `2024 — Present`), kontribusi, link opsional, urutan.
- **06 · Sertifikat:** New entry > judul, tahun, penerbit, deskripsi, foto sertifikat, link verifikasi. Jika link tidak ada tetapi gambar ada, icon membuka gambar.
- **07 · Services:** New entry > judul, deskripsi, ikon, warna, link opsional, urutan.

Jangan mengubah nama folder `_expertise`, `_services` dll tanpa update `_config.yml` dan `.pages.yml`.

## J. Testing dan troubleshooting

Checklist setelah deployment:

- [ ] Website di desktop memakai lebar halaman normal.
- [ ] Foto tidak meluap keluar card; hero dua kolom desktop.
- [ ] 6 expertise menggunakan gradient, ikon sekitar 29px.
- [ ] Kartu portfolio 3 kolom desktop dan 1 kolom mobile.
- [ ] Filter All/kategori berfungsi.
- [ ] View Screens dapat dibuka/tutup dengan Escape, Next, Previous.
- [ ] Case Study membuka URL masing-masing yang valid.
- [ ] Navbar aktif mengikuti section ketika scroll dan menu HP berfungsi.
- [ ] Tema terang/gelap bekerja.
- [ ] Foto dan teks dari CMS tampil setelah Save dan Actions hijau.
- [ ] Link yang tidak diisi tidak menampilkan tombol palsu.

Jika **CSS tidak tampil**: buka `https://USERNAME.github.io/assets/css/site.css`. Harus muncul kode CSS mentah, bukan 404. Cek file ada di folder `assets/css` dan bukan bersarang dalam folder ZIP.

Jika **JS tidak tampil**: buka `/assets/js/site.js`, pastikan file tidak 404. Cek `Ctrl+Shift+I` > Console.

Jika **GitHub Actions merah**: buka repo > Actions > workflow gagal > job build > baca baris error. Periksa frontmatter YAML (indentasi dengan spasi).

Jika **CMS file not found**: buka repo GitHub > `_data` > `profile.yml`. Jika tidak ada, upload folder tersebut. `profile.yml` harus tersedia sejak upload pertama.

Jika **foto tidak muncul**: cek file baru di `assets/uploads`, periksa field `profile_photo` di `_data/profile.yml` menunjuk ke `/assets/uploads/namafile.jpg`, lalu cek deployment.

Jika **tampilan masih lama**: pastikan URL dan nama repo benar, tunggu Actions hijau, lalu `Ctrl+Shift+R`.

Jika **kategori kosong**: cek project published true, `category` sama persis dengan slug pada kategori.

Jika **Jekyll salah build pada project**: cek `.nojekyll` tidak ada dan koleksi `projects` memiliki output `true` di `_config.yml`.

## K. Operasional dan backup berkala

- Semua pembaruan konten sehari-hari dilakukan dari https://app.pagescms.org/. Tidak perlu membuka terminal atau IDE.
- Setiap Save menghasilkan commit GitHub; versi lama dapat dilihat dari **History**.
- Secara berkala klik **Code > Download ZIP** untuk backup.
- Jangan mengunggah gambar berukuran sangat besar; kompres file terlebih dahulu agar halaman cepat.
- Karena repo publik, jangan menyimpan data rahasia, password, dokumen pribadi sensitif, atau foto yang tidak ingin dipublikasikan.
- Domain `.github.io`, Pages CMS dan static publishing dapat digunakan gratis sesuai batas dan ketentuan layanan yang berlaku.

## L. Catatan kompatibilitas

- Berkas CSS/JS/ikon semuanya disimpan lokal; tidak bergantung CDN.
- `url` di `_config.yml` default untuk `isaacthesisabie.github.io`. Jika username diganti, ubah `url` pada `_config.yml` menjadi domain baru (ini pengaturan teknis satu kali, bukan edit konten harian).
- Proyek memakai Jekyll collection dan Liquid; file `index.html` tidak dimaksudkan dibuka offline tanpa proses build.
- GitHub Pages dengan Source `Deploy from a branch` menjalankan Jekyll secara otomatis.
- Situs tidak mengirim form kontak ke server. Tombol kontak memakai email (`mailto:`) yang kamu isi.
