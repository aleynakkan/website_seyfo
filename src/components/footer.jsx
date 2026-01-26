
import styles from './footer.module.css';
// Figma sosyal ikonları
const imgVector = "https://www.figma.com/api/mcp/asset/9ef61035-2883-4997-b586-6d1fd395d50e";
const imgVector1 = "https://www.figma.com/api/mcp/asset/64b18f44-131a-438f-b8a5-a3ebbb502e98";
const imgVector4 = "https://www.figma.com/api/mcp/asset/7b9a5412-afb8-44e8-ba0d-72779666d80c";
const imgVector6 = "https://www.figma.com/api/mcp/asset/37455917-a553-4124-80c8-1c79987dda89";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerCol}>
          <h3>Seyfo</h3>
          <ul>
            <li><a href="#about">Hakkımızda</a></li>
            <li><a href="#features">Özellikler</a></li>
            <li><a href="#help">Yardım Merkezi</a></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h3>Çözümler</h3>
          <ul>
            <li><a href="#sme">KOBİ İçin Finans</a></li>
            <li><a href="#ecommerce">E-ticaret İçin Çözümler</a></li>
            <li><a href="#donation">Bağış Kampanyaları</a></li>
            <li><a href="#multi">Çok Ortaklı İşletmeler</a></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h3>Destek</h3>
          <ul>
            <li><a href="#faq">Sıkça Sorulan Sorular</a></li>
            <li><a href="#contact">İletişim</a></li>
            <li><a href="#privacy">Gizlilik</a></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h3>Takip Edin</h3>
          <div className={styles.footerSocials}>
            <a href="#"><img src={imgVector} alt="" /></a>
            <a href="#"><img src={imgVector1} alt="" /></a>
            <a href="#"><img src={imgVector4} alt="" /></a>
            <a href="#"><img src={imgVector6} alt="" /></a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>© 2026 Seyfo. Tüm hakları saklıdır.</span>
      </div>
    </footer>
  );
};

export default Footer;
