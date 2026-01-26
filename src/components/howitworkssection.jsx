
import styles from './howitworkssection.module.css';
// Yeni Figma assetleri
const imgTheMobilePhoneScreenWithAllActiveBudgetsOverview = "https://www.figma.com/api/mcp/asset/16819fac-7ff0-4cc4-a98f-a4c384917629";
const imgTheMobilePhoneScreenWithAllFinancialAccountsOverview = "https://www.figma.com/api/mcp/asset/259a45a2-4028-49ba-84bb-c49a21a4d73a";
const imgTheMobilePhoneScreenWithAllTransactionsOverview = "https://www.figma.com/api/mcp/asset/b10e1e45-fc31-41cc-adb4-942dce640c9d";



const HowItWorksSection = () => {
  return (
    <section className={styles.howItWorksSection} id="how-it-works">
      <h2 className={styles.sectionTitle}>Seyfo nasıl çalışır?</h2>
      <p className={styles.sectionSubtitle}>Kurulum yok. ERP şart değil. Excel yükler gibi başla!</p>
      <div className={styles.howItWorksCards}>
        <div className={styles.howItWorksCard}>
          <img src={imgTheMobilePhoneScreenWithAllActiveBudgetsOverview} alt="Nakit akışını netleştirir" />
          <h3>Nakit akışını netleştirir</h3>
          <p>Paranın nereye gittiğini otomatik görürsün.</p>
        </div>
        <div className={styles.howItWorksCard}>
          <img src={imgTheMobilePhoneScreenWithAllFinancialAccountsOverview} alt="Finansal riskleri önceden gösterir" />
          <h3>Finansal riskleri önceden gösterir</h3>
          <p>Önümüzdeki 30 gün içinde nakit sıkışacak mısın önceden bilirsin.</p>
        </div>
        <div className={styles.howItWorksCard}>
          <img src={imgTheMobilePhoneScreenWithAllTransactionsOverview} alt="Finansal durumu iş diliyle özetler" />
          <h3>Finansal durumu iş diliyle özetler</h3>
          <p>Muhasebe dilini değil, iş diliyle rapor alırsın.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
