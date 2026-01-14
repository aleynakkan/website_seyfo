import { useState } from 'react'
import styles from './landingpage.module.css'

// Image constants from Figma
const imgImage12 = "https://www.figma.com/api/mcp/asset/92c5a2ab-8c6f-4131-9217-9ba9b69efd02"
const imgScreenshot = "https://www.figma.com/api/mcp/asset/4535169e-8c97-45c0-8150-6038d4f05dcb"
const imgContainer = "https://www.figma.com/api/mcp/asset/e7fae119-cba5-4cfd-bf64-a1c179b94414"

export default function LandingPage() {
  const [email, setEmail] = useState('')

  return (
    <div className={styles.landingPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.mainHeading}>
              İşletmenizin finansal fotoğrafını <span className={styles.highlight}>seyfo</span> ile her gün daha net görün.
            </h1>
            <p className={styles.subtitle}>
              Seyfo banka hareketlerinizi, gelir–giderlerinizi ve nakit akışınızı otomatik analiz eder. Size her gün "Kasada ne var, ne olacak?" sorusunun cevabını verir.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>Ücretsiz Dene</button>
              <button className={styles.secondaryBtn}>Demo İzle</button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src={imgImage12} alt="Seyfo Dashboard" />
          </div>
        </div>
      </section>

      {/* What Can You Do Section */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Seyfo ile <span>neler yapabilirsiniz?</span></h2>
        
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>Paranın nereye gittiğini otomatik görürsün.</h3>
            <div className={styles.featureImageContainer}>
              <img src={imgContainer} alt="Feature 1" />
            </div>
          </div>
          <div className={styles.featureCard}>
            <h3>Önümüzdeki 30 gün içinde nakit sıkışacak mısın önceden bilirsin.</h3>
            <div className={styles.featureChart}></div>
          </div>
          <div className={styles.featureCard}>
            <h3>Muhasebe dilini değil, iş diliyle rapor alırsın.</h3>
            <div className={styles.featureImage}></div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks}>
        <h2 className={styles.sectionTitle}>Seyfo <span>nasıl çalışır?</span></h2>
        <p className={styles.subtitle}>Kurulum yok. ERP şart değil. Excel yükler gibi başla!</p>
        
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <h3>Banka ekstresi veya e-fatura yükle</h3>
          </div>
          <div className={styles.step}>
            <h3>CFO Assistant otomatik analiz etsin.</h3>
          </div>
          <div className={styles.step}>
            <h3>Her gün net tabloyu gör.</h3>
          </div>
        </div>
        
        <div className={styles.screenshotContainer}>
          <img src={imgScreenshot} alt="How it works demo" />
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>14 gün boyunca <span className={styles.highlight}>ücretsiz</span> deneyin!</h2>
        <p>Kredi kartı gerekmeden ücretsiz deneyin, memnun kalırsanız abone olun.</p>
        
        <div className={styles.emailSubscribe}>
          <input 
            type="email" 
            placeholder="e-Posta adresinizi girin" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className={styles.subscribeBtn}>Ücretsiz Deneyin</button>
        </div>
        
        <p className={styles.disclaimer}>
          Kredi kartı bilgisi gerekmeden hemen başlayabilir ve işletmenizi kontrol edebilirsiniz.
        </p>
      </section>
    </div>
  )
}
