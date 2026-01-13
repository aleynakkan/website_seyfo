# Seyfo Website

Seyfo ürünün web sitesi. React ve Vite ile inşa edildi.

## Proje Yapısı

```
website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / Navbar.module.css
│   │   ├── HeroSection.jsx / HeroSection.module.css
│   │   ├── FeaturesSection.jsx / FeaturesSection.module.css
│   │   ├── HowItWorksSection.jsx / HowItWorksSection.module.css
│   │   ├── CTASection.jsx / CTASection.module.css
│   │   └── Footer.jsx / Footer.module.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css (Global styles & design tokens)
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Teknolojiler

- **React 19** - UI Framework
- **Vite** - Build tool
- **CSS Modules** - Component styling
- **JavaScript ES6+** - Programming language

## Kurulum

```bash
# Dependencies yükle
npm install

# Development server başlat
npm run dev

# Production build oluştur
npm run build

# Build'i preview et
npm run preview
```

## Figma Tasarımı

Website tasarımı Figma'dan otomatik olarak üretildi:
- Node ID: 77:485
- File: https://www.figma.com/design/EQWIxvzw5Byke4MezWNeoM/Seyfo

## Özellikler

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern CSS Grid & Flexbox
- ✅ Accessibility-focused HTML
- ✅ Performance optimized
- ✅ Design system integration

## Bileşenler

### Navbar
- Logo ve kurumsal kimlik
- Navigation menüsü
- Login ve CTA butonları
- Mobile responsive

### HeroSection
- Ana başlık ve açıklama
- İllüstrasyon ve animasyon
- CTA butonları

### FeaturesSection
- 3 ana özellik kartı
- İllüstrasyonlarla desteklenmiş
- Hover efektleri

### HowItWorksSection
- 3 adımlı proses gösterimi
- Görsel referanslarla birlikte
- Adımlar arasında geçiş göstergesi

### CTASection
- Newsletter signup formu
- Öne çıkan mesaj
- Email validasyonu

### Footer
- Kurumsal bilgiler
- Hızlı linkler
- İletişim bilgileri
- Sosyal medya bağlantıları

## Design Tokens

Global design tokens `src/index.css` içinde tanımlanmıştır:

- **Renkler**: Primary red (#dc0005), secondary, backgrounds
- **Spacing**: xs, sm, md, lg, xl, 2xl, 3xl
- **Border Radius**: sm, md, lg, xl
- **Typography**: Font sizes, weights, families

## Geliştirme

Her component'in kendi styling dosyası vardır (`.module.css`). Bu yapı:
- Stil izolasyonunu sağlar
- Component'i refactor etmeyi kolaylaştırır
- Global çatışmaları önler
- Reusability'i artırır

## Duyarlı Tasarım

Responsive breakpoints:
- **Desktop**: 1024px ve üzeri
- **Tablet**: 768px - 1024px
- **Mobile**: 768px altı

## Sonraki Adımlar

- [ ] Form submission backend entegrasyonu
- [ ] Analytics tracking
- [ ] A/B testing setup
- [ ] Blog/İçerik yönetimi
- [ ] SEO optimizasyonu
- [ ] Performance monitoring
