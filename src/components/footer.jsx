// Footer.jsx
import styles from './footer.module.css'

// Sosyal ikonlar (Figma’dan)
const imgVector  = "https://www.figma.com/api/mcp/asset/9ef61035-2883-4997-b586-6d1fd395d50e"
const imgVector1 = "https://www.figma.com/api/mcp/asset/64b18f44-131a-438f-b8a5-a3ebbb502e98"
const imgVector4 = "https://www.figma.com/api/mcp/asset/7b9a5412-afb8-44e8-ba0d-72779666d80c"
const imgVector6 = "https://www.figma.com/api/mcp/asset/37455917-a553-4124-80c8-1c79987dda89"

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {/* Marka */}
        <div className={styles.brandBlock}>
          <a href="#" className={styles.brand} aria-label="Seyfo Ana Sayfa">
            <span className={styles.brandDot} aria-hidden="true" />
            <span className={styles.brandText}>Seyfo</span>
          </a>
          <p className={styles.tagline}>Nakit akışınızı görün, kararlarınızı hızlandırın.</p>
        </div>

        {/* Kısa linkler */}
        <nav className={styles.nav} aria-label="Alt menü">
          <a href="#features">Özellikler</a>
          <a href="#how-it-works">Nasıl Çalışır</a>
          <a href="#pricing">Fiyatlandırma</a>
          <a href="/contact" className={styles.navLink}>İletişim</a>

        </nav>

        {/* Sosyal ikonlar */}
        <div className={styles.social} aria-label="Sosyal bağlantılar">
          <a href="#" aria-label="Twitter"><img src={imgVector} alt="" /></a>
          <a href="#" aria-label="LinkedIn"><img src={imgVector1} alt="" /></a>
          <a href="#" aria-label="Instagram"><img src={imgVector4} alt="" /></a>
          <a href="#" aria-label="YouTube"><img src={imgVector6} alt="" /></a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Seyfo</span>
        <div className={styles.legal}>
          <a href="#privacy">Gizlilik</a>
          <span aria-hidden="true">·</span>
          <a href="#terms">Kullanım Koşulları</a>
        </div>
      </div>
    </footer>
  )
}