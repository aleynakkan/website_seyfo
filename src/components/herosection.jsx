
import styles from './herosection.module.css';
// Yeni Figma assetleri
const imgScreenshot20260119At121104Pm1 = "https://www.figma.com/api/mcp/asset/634397cd-0803-4d28-bd47-c8075d33ea55";
const imgGroup = "https://www.figma.com/api/mcp/asset/1795d047-b9ab-4370-9ed9-d7ff87bdab0d";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/809a4761-914d-4b2d-8e25-38c97229278a";
const imgGroup2 = "https://www.figma.com/api/mcp/asset/1947d5c2-e4ee-487c-b812-175e065da5f2";
const imgGroup3 = "https://www.figma.com/api/mcp/asset/8aaf2bc8-d430-45af-b519-4cc5b7642042";
const imgGroup4 = "https://www.figma.com/api/mcp/asset/becf6320-3673-44dd-9bb6-6284c1b48a39";



const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          İşletmenizin finansal fotoğrafını <br />
          <span className={styles.heroTitleAccent}>seyfo</span> ile her gün daha net görün.
        </h1>
        <p className={styles.heroDesc}>
          Seyfo banka hareketlerinizi, gelir–giderlerinizi ve nakit akışınızı otomatik analiz eder. Size her gün “Kasada ne var, ne olacak?” sorusunun cevabını verir.
        </p>
        <div className={styles.heroActions}>
          <button className={styles.tryBtn}>Ücretsiz Deneyin</button>
          <button className={styles.demoBtn}>Demo İzle</button>
        </div>
      </div>
      <div className={styles.heroVisuals}>
        <img src={imgScreenshot20260119At121104Pm1} alt="Seyfo App Screenshot" className={styles.heroImage} />
        {/* Decorative groups */}
        <img src={imgGroup} alt="" className={styles.heroDeco1} />
        <img src={imgGroup1} alt="" className={styles.heroDeco2} />
        <img src={imgGroup2} alt="" className={styles.heroDeco3} />
        <img src={imgGroup3} alt="" className={styles.heroDeco4} />
        <img src={imgGroup4} alt="" className={styles.heroDeco5} />
      </div>
    </section>
  );
};

export default HeroSection;
