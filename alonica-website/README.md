# A L O N I C A Website

Website React + Vite untuk cerita A L O N I C A.

## Jalankan lokal

```bash
npm install
npm run dev
```

## Build untuk hosting

```bash
npm run build
```

Folder hasil build ada di `dist`.

## Hosting paling mudah

### Vercel
1. Upload folder project ini ke GitHub.
2. Buka Vercel.
3. Import repository.
4. Framework preset: Vite.
5. Build command: `npm run build`.
6. Output directory: `dist`.

### Netlify
1. Upload folder project ke GitHub, atau drag-and-drop folder `dist` setelah build.
2. Build command: `npm run build`.
3. Publish directory: `dist`.

## Ganti foto

Letakkan foto di:

```text
public/images/chapter-01.jpg
public/images/chapter-02.jpg
public/images/chapter-03.jpg
```

Nama file harus sama agar langsung terbaca website.
