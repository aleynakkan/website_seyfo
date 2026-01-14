# Seyfo Website

Modern bir finansal yönetim platformu web sitesi - React ve Node.js ile yapılmış.

## Kurulum

### Gereklilikler
- Node.js 16+
- npm veya yarn

### 1. Bağımlılıkları Yükleyin
```bash
npm install
```

### 2. Environment Değişkenlerini Ayarlayın

`.env.example` dosyasını `.env` olarak kopyalayın ve ayarları yapın:

```bash
cp .env.example .env
```

`.env` dosyasını düzenleyin:
```
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_TO=iletisim@cfoseyfo.com
PORT=3000
NODE_ENV=development
```

#### Gmail SMTP Ayarları
1. Google Account'a gidin
2. Security bölümüne gidin
3. "App passwords" oluşturun
4. 16 karakterlik şifreyi `.env` dosyasına ekleyin

### 3. Geliştirme Sunucusunu Başlatın

Terminal 1'de (Frontend - Vite):
```bash
npm run dev
```

Terminal 2'de (Backend - Express):
```bash
npm run server
```

Frontend: `http://localhost:5173`
Backend: `http://localhost:3000`

### 4. Production Build'i Oluşturun
```bash
npm run build
```

## Email Gönderme

İletişim formundan gönderilen mesajlar:
1. Admin'e gönderilir: `iletisim@cfoseyfo.com`
2. Kullanıcıya onay e-postası gönderilir

## API Endpoints

### POST /api/send-email
Mesaj gönder ve admin + kullanıcıya email yolla

**Request Body:**
```json
{
  "name": "Ad Soyad",
  "email": "example@email.com",
  "phone": "+90 (555) 123 45 67",
  "company": "Şirket Adı",
  "message": "Mesaj içeriği"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Mesajınız başarıyla gönderildi..."
}
```

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
