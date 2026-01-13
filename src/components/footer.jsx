import styles from './footer.module.css'

// Social media icons from Figma
const imgFacebook = "https://www.figma.com/api/mcp/asset/ab26929c-6893-4497-9bd8-8f4d0fbf7310";
const imgTwitter = "https://www.figma.com/api/mcp/asset/6ff12441-010a-4726-b584-ebb6774ea57b";
const imgInstagram = "https://www.figma.com/api/mcp/asset/4ce5a173-2369-4c40-b977-f7d4b238be0a";
const imgLinkedin = "https://www.figma.com/api/mcp/asset/1cb0a090-0f43-4cfd-8c9d-2462092cee9b";
const imgYoutube = "https://www.figma.com/api/mcp/asset/36efb62d-a6bd-40ed-a826-45ffd1a6e148";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company Section */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Seyfo</h4>
            <ul className={styles.links}>
              <li><a href="#about">Hakkımızda</a></li>
              <li><a href="#contact">İletişim</a></li>
              <li><a href="#privacy">Çevre Politikası</a></li>
              <li><a href="#social">Sosyal Politika</a></li>
              <li><a href="#marketplace">Pazaryeri</a></li>
            </ul>
          </div>

          {/* Features Section */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Özellikler</h4>
            <ul className={styles.links}>
              <li className={styles.staticText}>Ön Muhasebe Yönetimi</li>
              <li><a href="#accounts">Cari Hesap Takibi</a></li>
              <li><a href="#offers">Teklif Yönetimi</a></li>
              <li><a href="#cash">Nakit Yönetimi</a></li>
              <li><a href="#inventory">Stok ve Depo Takibi</a></li>
              <li><a href="#reports">Ön Muhasebe Raporları</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>İletişim</h4>
            <div className={styles.contactInfo}>
              <p className={styles.label}>Telefon</p>
              <a href="tel:+905392937843" className={styles.contactLink}>539293784793</a>
              <p className={styles.label} style={{ marginTop: '16px' }}>E-Posta</p>
              <a href="mailto:iletisim@seyfo.com" className={styles.contactLink}>iletisim@seyfo.com</a>
            </div>
          </div>

          {/* Social Section */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Takipte Kalın</h4>
            <div className={styles.socialLinks}>
              <a href="#facebook" className={styles.socialIcon} title="Facebook">
                <img src={imgFacebook} alt="Facebook" />
              </a>
              <a href="#twitter" className={styles.socialIcon} title="Twitter">
                <img src={imgTwitter} alt="Twitter" />
              </a>
              <a href="#instagram" className={styles.socialIcon} title="Instagram">
                <img src={imgInstagram} alt="Instagram" />
              </a>
              <a href="#linkedin" className={styles.socialIcon} title="LinkedIn">
                <img src={imgLinkedin} alt="LinkedIn" />
              </a>
              <a href="#youtube" className={styles.socialIcon} title="YouTube">
                <img src={imgYoutube} alt="YouTube" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; 2026 Seyfo. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  )
}

export default Footer
