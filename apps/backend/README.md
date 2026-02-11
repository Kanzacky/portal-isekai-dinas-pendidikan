# ⚙️ Portal Isekai Backend - Enterprise Service

Repositori ini berisi layanan API untuk **Portal Isekai Dinas Pendidikan**. Backend ini dibangun menggunakan Node.js dengan arsitektur modular **One File = One Endpoint** dan standar keamanan HMAC-SHA512 sesuai regulasi internal perusahaan.

---

## 🏛️ Arsitektur & Standar Coding

Untuk menjaga konsistensi kode antar tim, backend ini menerapkan standar wajib berikut:

### 1. Routing & Modularisasi

* **Versioned API**: Semua endpoint berada di bawah prefix `/api/v1/...`.
* **Atomic Files**: Setiap file hanya menangani satu fungsionalitas (Contoh: `user_create.js` hanya untuk POST create).
* **Router Indexing**: Setiap folder memiliki `index.js` sebagai *gatekeeper* dan pengatur rute sub-modul.

### 2. Konvensi Penamaan (Hungarian Notation)

Setiap variabel lokal wajib memiliki prefix sesuai tipe datanya:

| Prefix | Tipe Data | Deskripsi | Contoh |
| --- | --- | --- | --- |
| **o** | Object | Variabel berupa object | `oPayload`, `oUser` |
| **va** | Array | Variabel berupa array | `vaData`, `vaUsers` |
| **c** | String | Variabel berupa teks | `cUniqueId`, `cRole` |
| **n** | Number | Variabel berupa angka | `nTotal`, `nId` |
| **b** | Boolean | Variabel True/False | `bIsValid`, `bIsActive` |
| **d** | Date/Time | Variabel format waktu | `dCreatedAt`, `dNow` |

---

## 🛠️ Instalasi & Setup

### 1. Persiapan Environment

Salin atau buat file `.env` di root folder dan sesuaikan kredensialnya:

```env
APP_PORT=8000

DB_HOST=127.0.0.1
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=db_isekai_dinas

USER_KEY=isekai_internal_key
USER_SECRET=isekai_secret_signature

```

### 2. Setup Database Essential

Sebelum menjalankan backend, struktur tabel wajib diinisialisasi secara manual:

1. Pastikan database sesuai `DB_DATABASE` sudah dibuat.
2. Jalankan/Impor file **`essential.sql`** ke database tersebut menggunakan Database Manager (DBeaver/Navicat/MySQL Workbench).
3. Pastikan tabel `user_credential`, `user_navigation`, dan `mst_navigation` sudah terbentuk.

### 3. Setup Data (Seeding)

Setelah tabel terbentuk, jalankan seeding untuk mengisi data master:

```bash
# Install dependensi terlebih dahulu
npm install

# Jalankan seeder lengkap (Superadmin & Navigasi default)
npx knex seed:run --specific=initial_users.js

```

### 4. Menjalankan Server

```bash
# Mode Pengembangan (Hot-reload)
npm run dev

# Mode Produksi
npm start

```

---

## 🔒 Layer Keamanan (Middleware Policy)

Setiap request ke modul **Setup** dan **Function** wajib melewati proteksi berikut secara berurutan:

1. **validateAccessToken**: Verifikasi JWT Bearer Token.
2. **validateSignature**: Verifikasi integritas pesan menggunakan hashing HMAC (Tamper-proof).
3. **contextMiddleware**: Injeksi identitas user ke dalam *request object* untuk audit logging.

---

## 📄 API Documentation (Quick Reference)

### Authentication

* `POST /api/v1/auth/token` - Mendapatkan Access Token (Basic Auth).
* `POST /api/v1/auth/login` - User Login (Bearer Token).

### User Management (Setup)

* `POST /api/v1/setup/user-login/user-data` - List user & pagination.
* `POST /api/v1/setup/user-login/user-create` - Tambah user baru.
* `POST /api/v1/setup/user-login/user-update` - Update profil user.

---

## ⚖️ Lisensi

Hak Cipta © 2026 **Portal Isekai Dinas Pendidikan**. Seluruh Hak Dilindungi.

---

### Tips untuk Tim:

> **PENTING**: Jika kamu mendapatkan error `Table doesn't exist`, pastikan kamu tidak melewatkan langkah **2.1 (Jalankan essential.sql)**. Seeder Knex tidak akan bisa berjalan jika tabel fisiknya belum ada di database.
