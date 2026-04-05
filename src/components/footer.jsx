// Footer.jsx
import styles from './footer.module.css'

// Sosyal ikonlar (Figma’dan)
import twitter from '../assets/footer/twitter.svg'
import linkedin from '../assets/footer/linkedin.svg'
import youtube from '../assets/footer/youtube.svg'
import instagram from '../assets/footer/instagram.svg'

export default function Footer({ onNavigate }) {
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
          <a href="#features-heading" onClick={(e) => { e.preventDefault(); onNavigate('home', 'features-heading') }}>Özellikler</a>
          <a href="#how-it-works-heading" onClick={(e) => { e.preventDefault(); onNavigate('home', 'how-it-works-heading') }}>Nasıl Çalışır</a>
          <a href="#pricing" onClick={(e) => { e.preventDefault(); onNavigate('pricing') }}>Fiyatlandırma</a>
          <a href="/contact" className={styles.navLink} onClick={(e) => { e.preventDefault(); onNavigate('contact') }}>İletişim</a>

        </nav>

        {/* Sosyal ikonlar */}
        <div className={styles.social} aria-label="Sosyal bağlantılar">
          <a href="https://www.linkedin.com/company/cfo-seyfo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src={linkedin} alt="LinkedIn" /></a>
          <a href="https://www.instagram.com/cfoseyfo?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src={instagram} alt="Instagram" /></a>
          <a href="#" aria-label="YouTube"><img src={youtube} alt="YouTube" /></a>
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