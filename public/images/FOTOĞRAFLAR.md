# Fotoğraf Rehberi — TraumGartenservice

## Klasör Yapısı
```
public/images/
├── hero-bg.jpg          ← Hero arka planı (1920x1080px)
├── about.jpg            ← Über uns ana fotoğrafı (800x560px)
├── about-2.jpg          ← Über uns küçük fotoğrafı (400x320px)
└── services/
    ├── rasenmähen.jpg   ← Rasenmähen (600x450px)
    ├── bewässern.jpg    ← Bewässern & Gießen
    ├── jäten.jpg        ← Jäten
    ├── mulchen.jpg      ← Mulchen
    ├── laubrechen.jpg   ← Laubrechen
    ├── reinigung.jpg    ← Verkehrsflächenreinigung
    ├── grabpflege.jpg   ← Grabpflege
    └── rollrasen.jpg    ← Rollrasen verlegen
```

## Fotoğraf Arama Önerileri (Unsplash, Pexels)
- hero-bg.jpg      → "Vienna garden landscape panoramic"
- about.jpg        → "gardener work professional team outdoor"
- about-2.jpg      → "garden detail closeup plants"
- rasenmähen.jpg   → "lawn mowing freshly cut grass"
- bewässern.jpg    → "garden watering irrigation sprinkler"
- jäten.jpg        → "weeding garden soil hands plants"
- mulchen.jpg      → "mulching garden beds bark"
- laubrechen.jpg   → "autumn leaves raking garden fall"
- reinigung.jpg    → "courtyard cleaning pressure washing pavement"
- grabpflege.jpg   → "grave flowers cemetery care maintenance"
- rollrasen.jpg    → "turf laying roll lawn installation"

## Fotoğraf Eklendikten Sonra

Hero (Hero.tsx):
```tsx
// Bu satırı aktif edin:
backgroundImage: "url('/images/hero-bg.jpg')"
// Bu satırı silin:
background: '#1C3A2B'
```

Servis kartları otomatik — dosya adları eşleşince çalışır.
About fotoğrafları da otomatik — dosya adları eşleşince çalışır.
