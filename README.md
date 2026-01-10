# 📚 Next.js 15 + TypeScript + PWA

Project ini adalah aplikasi **Next.js 15** menggunakan **TypeScript**, **Tailwind CSS**, dan sudah dikonfigurasi sebagai **Progressive Web App (PWA)**.

---

## 🧰 Tech Stack

- **Next.js 15 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **PWA (Web App Manifest + Service Worker)**
- **Node.js ≥ 18**

---

## 📦 Requirements

Pastikan environment kamu sudah terpasang:

- Node.js **v18 atau lebih baru**
- npm / yarn / pnpm

Cek versi:

```bash
node -v
npm -v
```

---

## 🚀 Cara Menjalankan Project (Development)

1. **Clone repository**

```bash
git clone <repository-url>
cd <project-folder>
```

2. **Install dependencies**

```bash
npm install
```

3. **Jalankan development server**

```bash
npm run dev
```

4. Buka browser:

```
http://localhost:3000
```

---

## 🏗️ Build & Run Production

```bash
npm run build
npm run start
```

Aplikasi akan berjalan dalam mode production.

---

## 📱 Cara Menjalankan & Testing PWA

> ⚠️ **PWA hanya aktif di mode production**

### 1️⃣ Build Project

```bash
npm run build
```

### 2️⃣ Jalankan Production Server

```bash
npm run start
```

Akses:

```
http://localhost:3000
```

---

### 3️⃣ Cek PWA di Browser (Chrome)

1. Buka **Chrome**
2. Klik **3 titik (⋮) → More tools → Developer Tools**
3. Masuk ke tab **Application**
4. Pastikan:
   - **Manifest** terbaca
   - **Service Worker** statusnya `activated`

---

### 4️⃣ Install PWA (optional)

#### Desktop (Chrome / Edge)

- Akan muncul icon **Install** di address bar
- Atau:
  - Klik **3 titik (⋮)**
  - Pilih **Install App**

## 📄 File Penting untuk PWA

### `public/manifest.`json

Digunakan untuk konfigurasi PWA:

- name
- short_name
- icons
- theme_color
- display

### Service Worker

Biasanya di-generate otomatis (misalnya via `next-pwa`) di public akan regenerate sw\.js dan workbook-\*js

---

## ❗ Troubleshooting PWA

- ❌ **PWA tidak muncul di dev mode** → ✔️ normal, PWA hanya aktif di production
- ❌ **Install tidak muncul** → pastikan:
  - HTTPS (atau `localhost`)
  - Manifest valid
  - Service worker aktif

---

## 🧪 Recommended Testing

### 🔌 Test PWA Mode Offline

Kamu bisa memastikan PWA berjalan saat **tanpa koneksi internet** dengan langkah berikut:

#### Cara 1: Chrome DevTools (Recommended)

1. Jalankan app di **production mode**:

```bash
npm run build
npm run start
```

2. Buka app di Chrome:

```
http://localhost:3000
```

3. Buka **Developer Tools** (`F12` atau `Ctrl + Shift + I`)
4. Masuk ke tab **Network**
5. Centang opsi **Offline**
6. Reload halaman (`Ctrl + R`)

✅ Jika PWA sudah benar:

- App **tetap terbuka**
- Halaman masih bisa diakses
- Asset (CSS, JS, icon) tetap termuat

---

#### Cara 2: Test Setelah Install PWA

1. Install PWA ke desktop / device
2. Matikan koneksi internet (WiFi / Data)
3. Buka aplikasi dari icon PWA

✅ App seharusnya:

- Tetap bisa dibuka
- Menampilkan UI terakhir yang tersimpan

---

#### Cara 3: Lighthouse Offline Check

1. Buka **Chrome DevTools → Lighthouse**
2. Pilih kategori **PWA**
3. Klik **Analyze**

Pastikan tidak ada error:

- `Does not work offline`

---

⚠️ Catatan Penting:

- Data API **tidak otomatis tersedia offline** kecuali di-cache
- Untuk offline API:
  - Gunakan **Cache API / IndexedDB**
  - Atau strategi `stale-while-revalidate`

---

---

## 📝 Notes

- Jangan lupa clear cache saat update PWA
- Untuk update PWA versi baru, **hard reload** atau reinstall app

---

## 👩‍💻 Author

Annisa Tahira

---

Happy coding 🚀
