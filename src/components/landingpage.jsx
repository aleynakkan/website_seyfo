
import { useState } from 'react';
import styles from './landingpage.module.css';

// Yeni Figma assetleri
const imgButtonSvg = "https://www.figma.com/api/mcp/asset/9ebfc226-a366-4bed-a5c4-efea3a66da5e";
const imgVector = "https://www.figma.com/api/mcp/asset/9ef61035-2883-4997-b586-6d1fd395d50e";
const imgVector1 = "https://www.figma.com/api/mcp/asset/64b18f44-131a-438f-b8a5-a3ebbb502e98";
const imgVector4 = "https://www.figma.com/api/mcp/asset/7b9a5412-afb8-44e8-ba0d-72779666d80c";
const imgVector6 = "https://www.figma.com/api/mcp/asset/37455917-a553-4124-80c8-1c79987dda89";
const imgGroup = "https://www.figma.com/api/mcp/asset/1795d047-b9ab-4370-9ed9-d7ff87bdab0d";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/809a4761-914d-4b2d-8e25-38c97229278a";
const imgGroup2 = "https://www.figma.com/api/mcp/asset/1947d5c2-e4ee-487c-b812-175e065da5f2";
const imgGroup3 = "https://www.figma.com/api/mcp/asset/8aaf2bc8-d430-45af-b519-4cc5b7642042";
const imgGroup4 = "https://www.figma.com/api/mcp/asset/becf6320-3673-44dd-9bb6-6284c1b48a39";
const imgEllipse10 = "https://www.figma.com/api/mcp/asset/c572c403-4fb3-45bb-8efb-bfcc08ca77a8";
const imgEllipse11 = "https://www.figma.com/api/mcp/asset/6e856ffa-fd8c-41d3-945f-7bff877c7e7f";
const imgEllipse12 = "https://www.figma.com/api/mcp/asset/fdfc94de-d9fe-4f3d-b324-b7a539107422";
const imgEllipse13 = "https://www.figma.com/api/mcp/asset/97f11c71-73d4-4d67-b3d2-98a8d1a4faf9";
const imgEllipse14 = "https://www.figma.com/api/mcp/asset/c982e433-5be1-44f4-ab8a-c9e58eb48c31";
const imgEllipse16 = "https://www.figma.com/api/mcp/asset/645c8252-6f5c-4f7b-b266-bf796c60c564";
const imgScreenshot20260119At121104Pm1 = "https://www.figma.com/api/mcp/asset/634397cd-0803-4d28-bd47-c8075d33ea55";
const imgTheMobilePhoneScreenWithAllActiveBudgetsOverview = "https://www.figma.com/api/mcp/asset/16819fac-7ff0-4cc4-a98f-a4c384917629";
const imgTheMobilePhoneScreenWithAllFinancialAccountsOverview = "https://www.figma.com/api/mcp/asset/259a45a2-4028-49ba-84bb-c49a21a4d73a";
const imgTheMobilePhoneScreenWithAllTransactionsOverview = "https://www.figma.com/api/mcp/asset/b10e1e45-fc31-41cc-adb4-942dce640c9d";
const imgHttpsAppLottiefilesComAnimationD76Ceed906204907Aa1ED7B217B64Bd0 = "https://www.figma.com/api/mcp/asset/d6e3ad65-8fa6-4774-a3c1-ea81c782e071";
const imgHttpsLottiefilesComAnimationsMoneyJAunOSeHil = "https://www.figma.com/api/mcp/asset/e86f5e24-0f3b-44b0-87e4-50f700652f16";
const imgIcRoundPlus = "https://www.figma.com/api/mcp/asset/3ed4e47a-d201-499b-a8c9-ab3e7f0a8306";
const imgIcRoundPlus1 = "https://www.figma.com/api/mcp/asset/da4696ae-b6db-4989-9070-ffea25115d81";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Email subscription logic here
    console.log("Email submitted:", email);
  };

  return (
    <div className={styles.landingPage}>
      {/* HEADER / NAVBAR */}
      <header className={styles.header}>
        <div className={styles.logoArea}>
          <div className={styles.logoIcon}>
            <div className={styles.logoRed1} />
            <div className={styles.logoRed2} />
            <div className={styles.logoRed3} />
          </div>
          <span className={styles.logoText}>seyfo</span>
        </div>
        <nav className={styles.navLinks}>
          <a href="#features">Özellikler</a>
          <a href="#pricing">Fiyatlar</a>
          <a href="#contact">İletişim</a>
        </nav>
        <div className={styles.headerActions}>
          <button className={styles.loginBtn}>Giriş Yapın</button>
          <button className={styles.tryBtn}>Ücretsiz Deneyin</button>
        </div>
      </header>

      {/* HERO SECTION */}
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

      {/* HOW IT WORKS SECTION */}
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

      {/* FEATURES SECTION */}
      <section className={styles.featuresSection} id="features">
        <h2 className={styles.sectionTitle}>Seyfo ile neler yapabilirsiniz?</h2>
        <p className={styles.sectionSubtitle}>Your personal finance is vital to managing your day-to-day needs and planning your future. A proper financial overview gives you clarity and peace of mind.</p>
        <div className={styles.featuresCards}>
          <div className={styles.featureCard}>
            <img src={imgHttpsAppLottiefilesComAnimationD76Ceed906204907Aa1ED7B217B64Bd0} alt="Animasyon 1" />
            <h3>Giderlerini fark et, hatalı harcamaları tespit et, kontrolü ele al.</h3>
            <ul>
              <li>“Bu ay enerji giderin %27 arttı.”</li>
              <li>“Aydınlar Market bu ay geç ödeyebilir.”</li>
              <li>“14 gün sonra kasada eksi oluşabilir.”</li>
            </ul>
          </div>
          <div className={styles.featureCard}>
            <img src={imgHttpsLottiefilesComAnimationsMoneyJAunOSeHil} alt="Animasyon 2" />
            <h3>Finansal kontrol sende, yarınlarını bugünden şekillendir.</h3>
            <p>Gün sonunda “Bugün para kazandım mı?” diye düşünüyorsan</p>
            <p>Excel’den yorulduysan, ve bir ERP’ye ihtiyacin yoksa</p>
            <p>Paranın nereye gittiğini net göremiyorsan ve bunun takipini yapmaya ihtiyacin varsa</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>
          <span>14 gün boyunca </span>
          <span className={styles.ctaTitleAccent}>ücretsiz</span>
          <span> deneyin!</span>
        </h2>
        <p className={styles.ctaDesc}>Kredi kartı gerekmeden ücretsiz deneyin, memnun kalırsanız abone olun.</p>
        <form className={styles.ctaForm} onSubmit={handleEmailSubmit}>
          <input type="email" placeholder="e-Posta adresinizi girin" className={styles.ctaInput} value={email} onChange={e => setEmail(e.target.value)} required />
          <button type="submit" className={styles.ctaFormBtn}>Ücretsiz Deneyin</button>
        </form>
        <p className={styles.ctaNote}>Kredi kartı bilgisi gerekmeden hemen başlayabilir ve işletmenizi kontrol edebilirsiniz.</p>
      </section>
      {/* FOOTER */}
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
    </div>
  );
}
