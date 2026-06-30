# TraumGartenservice — Next.js

## Kurulum (Lokal)

```bash
npm install
cp .env.example .env.local
# .env.local dosyasını SMTP bilgilerinizle doldurun
npm run dev
```

## Coolify'a Deploy

### 1. GitHub'a Push
```bash
git init
git add .
git commit -m "initial"
git remote add origin https://github.com/KULLANICI/traumgartenservice.git
git push -u origin main
```

### 2. Coolify'da Yeni Proje
- **New Resource → Application → GitHub**
- Repo'yu seçin
- Build Pack: **Dockerfile**
- Port: `3000`

### 3. Environment Variables (Coolify → Environment)
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@traum-gartenservice.at
SMTP_PASS=xxxx-xxxx-xxxx-xxxx   ← Gmail App Password
MAIL_TO=info@traum-gartenservice.at
MAIL_FROM=TraumGartenservice <info@traum-gartenservice.at>
NEXT_PUBLIC_SITE_URL=https://traum-gartenservice.at
```

### Gmail App Password Oluşturma
1. Google Hesabı → Güvenlik → 2 Adımlı Doğrulama (aktif olmalı)
2. Güvenlik → Uygulama Şifreleri
3. "Posta" + "Diğer cihaz" → "TraumGarten" → Oluştur
4. 16 haneli şifreyi `SMTP_PASS` olarak girin

### Domain
Coolify → Domains → `traum-gartenservice.at` ekleyin → SSL otomatik.

## Logo Ekleme
`src/components/Header.tsx` ve `Footer.tsx` dosyalarında SVG placeholder var.
Logonuzu `public/logo.svg` veya `public/logo.png` olarak ekleyip:
```tsx
// Header.tsx içinde SVG bloğunu şununla değiştirin:
<Image src="/logo.svg" alt="TraumGartenservice" width={140} height={38} priority />
```

## Özelleştirme
- Telefon/email: `Contact.tsx` ve `Footer.tsx`
- Renkler: `globals.css` → `:root` değişkenleri
- Fotoğraflar: `BeforeAfter.tsx` → `slides` dizisi
