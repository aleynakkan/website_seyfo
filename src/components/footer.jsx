// Footer.jsx
import styles from './footer.module.css'

// Sosyal ikonlar (Figma’dan)
import twitter from '../assets/footer/twitter.svg'
import linkedin from '../assets/footer/linkedin.svg'
import youtube from '../assets/footer/youtube.svg'
import instagram from '../assets/footer/instagram.svg'

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
          <a href="#" aria-label="Twitter"><img src={twitter} alt="" /></a>
          <a href="https://www.linkedin.com/company/cfo-seyfo" aria-label="LinkedIn"><img src={linkedin} alt="" /></a>
          <a href="#" aria-label="Instagram"><img src={instagram} alt="" /></a>
          <a href="#" aria-label="YouTube"><img src={youtube} alt="" /></a>
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