# 🏫 Portal Isekai Layanan Terpadu – Dinas Pendidikan

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge\&logo=nextdotjs\&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge\&logo=typescript\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)
![NextAuth](https://img.shields.io/badge/Auth-NextAuth.js-000?style=for-the-badge)

</div>

---

## 🌟 Deskripsi Proyek

**Portal Isekai Layanan Terpadu – Dinas Pendidikan** adalah aplikasi web berbasis **Next.js (App Router)** yang berfungsi sebagai *Single Entry Point* untuk seluruh layanan digital pendidikan.

Portal ini dirancang dengan:

* Arsitektur **enterprise-ready**
* Pola **secure frontend → bridge → backend**
* Sistem autentikasi terstandarisasi (Token + Session)

Tujuan utama proyek ini adalah meningkatkan **efisiensi birokrasi**, **keamanan akses**, dan **konsistensi pengalaman pengguna** untuk internal dinas maupun masyarakat umum.

---

## ✨ Fitur Utama

### 🎨 UI & UX

* Modern, clean, dan konsisten
* Responsive (Desktop, Tablet, Mobile)
* Layout terpisah untuk *Auth Page* dan *Main Application*

### 🔐 Authentication & Security

* **Two-step Authentication Flow**

  1. Auto Token (Client Credentials → `/auth/token`)
  2. User Login (`/auth/login` dengan Bearer Token)
* **NextAuth Credentials Provider**
* Session berbasis **JWT**
* Middleware proteksi route

### 🔁 API Bridge Architecture

* Frontend **tidak pernah** berkomunikasi langsung dengan Backend
* Semua request melewati:

  ```text
  /api/bridge/login
  ```
* Header dikontrol & difilter untuk keamanan

### 🧩 Modular Architecture

* Setiap module memiliki:

  * Controller (logic & state)
  * Interfaces (local typing)
  * Display components (pure UI)

---

## 🛠️ Tech Stack

### Frontend

* **Framework**: Next.js 14 (App Router)
* **UI Library**: React
* **Styling**: Tailwind CSS
* **Language**: TypeScript (strict mode)

### Auth & Security

* **Auth**: NextAuth.js (Credentials Provider)
* **Session Strategy**: JWT
* **Encryption**: RSA (public key)

### Networking

* **HTTP Client**: Axios
* **Proxy Pattern**: Next.js Route Handlers (Bridge)

---

## 🔐 Authentication Flow (Important)

```text
[Login Page]
     ↓
[fetchAutoToken]
     ↓  (Basic Auth)
/auth/token
     ↓  access_token
[POST /auth/login]
     ↓
[NextAuth signIn(credentials)]
     ↓
[JWT Session + Middleware]
```

### 🔑 Auto Token

Digunakan sebagai **Base Token** untuk mengakses endpoint login.

Response backend:

```json
{
  "status": "00",
  "access_token": "<token>",
  "token_type": "Bearer"
}
```

Frontend hanya membaca:

```ts
res.data.access_token
```

---

## 👤 User Identity (PENTING)

⚠️ **User ID TIDAK BOLEH HARDCODE**

❌ Salah:

```ts
id: "USR000001"
```

✅ Benar:

```ts
id: backendResponse.uniqueId
```

`uniqueId` adalah **primary identifier** user (contoh: `USR000001`, `USR000002`, dst) dan **HARUS berasal dari backend**, bukan frontend.

NextAuth hanya memerlukan `id` sebagai identifier session — nilai ini **boleh dan dianjurkan** menggunakan `uniqueId` dari database.

---

## 📂 Struktur Folder

```text
├── app/
│   ├── (full-page)/            # Layout tanpa Sidebar/Navbar
│   │   └── auth/login/         # Login Module
│   │       ├── page.tsx        # Controller (state, submit, auth)
│   │       └── component/      # Local interfaces
│   │
│   ├── (main)/                 # Layout utama (authenticated)
│   │   ├── dashboard/
│   │   └── setup/
│   │       └── users/
│   │           ├── page.tsx    # Parent logic
│   │           ├── components/
│   │           │   ├── endpoints.ts
│   │           │   ├── interfaces.ts
│   │           │   └── display/
│   │
│   ├── api/
│   │   ├── bridge/login/       # API Bridge (Proxy)
│   │   └── interceptor/        # Global interceptor
│   │
│   ├── layout.tsx              # Root Layout
│   └── middleware.ts           # Session & Route Protection
│
├── lib/
│   ├── axios/                  # postData.ts, formData.ts
│   ├── tools/                  # authTools.ts, serverTools.ts
│   └── key/                    # RSA Public Key
│
├── layout/                     # Sidebar & App Layout
├── public/                     # Static Assets
└── .env                        # Environment Variables
```

---

## 🚀 Cara Menjalankan Project

### Prasyarat

* Node.js 18+
* npm / yarn / pnpm

### Instalasi

```bash
git clone https://github.com/Kanzacky/portal-isekai-dinas-pendidikan.git
cd portal-isekai-dinas-pendidikan/frontend
npm install
```

### Environment Variable

```env
API_URL=https://backend-domain
NEXTAUTH_SECRET=your-secret
NEXT_PUBLIC_USER_KEY=client_key
NEXT_PUBLIC_USER_SECRET=client_secret
```

### Development

```bash
npm run dev
```

Akses:

```
http://localhost:3000
```

---

## 🛡️ Security Notes

* ❌ Jangan commit `.env`
* ❌ Jangan log token / credential
* ✅ Semua request backend lewat Bridge
* ✅ Header difilter secara ketat

---

## 📄 Lisensi

Hak Cipta © 2026
**Portal Isekai – Dinas Pendidikan**

---

<div align="center">
Dibangun dengan arsitektur serius oleh <b>Kanzacky</b> 🚀
</div>
