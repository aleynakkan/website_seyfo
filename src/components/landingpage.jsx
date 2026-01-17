import { useState } from 'react'
import styles from './landingpage.module.css'

// Image constants from Figma
const imgImage12 = "https://www.figma.com/api/mcp/asset/be0b37f6-1486-4857-8984-d751a9d77fe0"
const imgScreenshot = "https://www.figma.com/api/mcp/asset/aa8d3abe-9bed-4034-95c7-3b56c833a269"
const imgContainer = "https://www.figma.com/api/mcp/asset/ecfc8d3d-1969-4102-9b38-48cbf32aee54"
const imgIcRoundPlus = "https://www.figma.com/api/mcp/asset/1abbfc49-220a-4c4a-89bd-e428fac8018a"

export default function LandingPage() {
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    // Email subscription logic here
    console.log('Email submitted:', email)
  }

  return (
    <div className={styles.landingPage}>
      {/* Hero Section */}
      <section className={styles.hero} role="banner">
        {/* Decorative background elements */}
        <div className={styles.heroBackground}>
          <div className={styles.bgBlurRed}></div>
          <div className={styles.bgCircle}></div>
          <div className={styles.bgDotLeft}></div>
          <div className={styles.bgDotRight}></div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroTextWrapper}>
            <div className={styles.headingWrapper}>
              <h1 className={styles.mainHeading}>
                İşletmenizin finansal fotoğrafını
                <span className={styles.highlight}> seyfo ile her gün daha net görün.</span>
              </h1>
            </div>
            
            <p className={styles.subtitle}>
              Seyfo banka hareketlerinizi, gelir–giderlerinizi ve nakit akışınızı otomatik analiz eder. 
              Size her gün "Kasada ne var, ne olacak?" sorusunun cevabını verir.
            </p>
            
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn} aria-label="Ücretsiz deneme başlat">
                Ücretsiz Dene
              </button>
              <button className={styles.secondaryBtn} aria-label="Demo videosu izle">
                Demo İzle
              </button>
            </div>
          </div>
          
          <div className={styles.heroImageWrapper}>
            <img 
              src={imgImage12} 
              alt="Seyfo dashboard finansal analiz ekranı" 
              className={styles.heroImage}
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features} aria-labelledby="features-heading">
        <h2 id="features-heading" className={styles.sectionTitle}>
          <span className={styles.titleAccent}>Seyfo ile</span> neler yapabilirsiniz?
        </h2>
        
        <div className={styles.featureGrid}>
          <article className={styles.featureCard}>
            <h3 className={styles.featureTitle}>
              Paranın nereye gittiğini otomatik görürsün.
            </h3>
            <div className={styles.featureVisual}>
              <div className={styles.featureIconWrapper}>
                <img src={imgContainer} alt="" className={styles.featureIcon} aria-hidden="true" />
                <div className={styles.decorativeDot1}></div>
                <div className={styles.decorativeDot2}></div>
              </div>
            </div>
          </article>

          <article className={styles.featureCard}>
            <h3 className={styles.featureTitle}>
              Önümüzdeki 30 gün içinde nakit sıkışacak mısın önceden bilirsin.
            </h3>
            <div className={styles.featureVisual}>
              <div className={styles.chartContainer}>
                <div className={styles.chartBar} style={{ height: '70px' }}>
                  <div className={styles.chartDot}></div>
                </div>
                <div className={styles.chartBar} style={{ height: '117px' }}>
                  <div className={styles.chartDot}></div>
                </div>
                <div className={styles.chartBar} style={{ height: '94px' }}>
                  <div className={styles.chartDot}></div>
                </div>
                <div className={styles.chartBar} style={{ height: '141px', opacity: 0.5 }}>
                  <div className={styles.chartDot}></div>
                </div>
              </div>
              <div className={styles.chartDecorative}></div>
            </div>
          </article>

          <article className={styles.featureCard}>
            <h3 className={styles.featureTitle}>
              Muhasebe dilini değil, iş diliyle rapor alırsın.
            </h3>
            <div className={styles.featureVisual}>
              <div className={styles.reportsStack}>
                <div className={styles.reportCard} style={{ transform: 'rotate(12deg)' }}></div>
                <div className={styles.reportCard} style={{ transform: 'rotate(-6deg)' }}></div>
                <div className={styles.reportCard} style={{ transform: 'rotate(3deg)' }}>
                  <div className={styles.reportPlusBtn}>
                    <span className={styles.plusIcon}>+</span>
                  </div>
                </div>
              </div>
              <div className={styles.reportDotLeft}></div>
              <div className={styles.reportDotRight}></div>
            </div>
          </article>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks} aria-labelledby="how-it-works-heading">
        <div className={styles.howItWorksHeader}>
          <h2 id="how-it-works-heading" className={styles.sectionTitle}>
            <span className={styles.titleAccent}>Seyfo</span> nasıl çalışır?
          </h2>
          <p className={styles.howItWorksSubtitle}>
            Kurulum yok. ERP şart değil. Excel yükler gibi başla!
          </p>
        </div>
        
        <div className={styles.stepsWrapper}>
          <div className={styles.stepsAndDemo}>
            <div className={styles.stepsColumn}>
              <button className={styles.stepItem} aria-expanded="false">
                <h3 className={styles.stepTitle}>Banka ekstresi veya e-fatura yükle</h3>
                <img src={imgIcRoundPlus} alt="" className={styles.stepIcon} aria-hidden="true" />
              </button>
              
              <button className={styles.stepItem} aria-expanded="false">
                <h3 className={styles.stepTitle}>CFO Assistant otomatik analiz etsin.</h3>
                <img src={imgIcRoundPlus} alt="" className={styles.stepIcon} aria-hidden="true" />
              </button>
              
              <button className={styles.stepItem} aria-expanded="false">
                <h3 className={styles.stepTitle}>Her gün net tabloyu gör.</h3>
                <img src={imgIcRoundPlus} alt="" className={styles.stepIcon} aria-hidden="true" />
              </button>
            </div>
            
            <div className={styles.demoImageWrapper}>
              <img 
                src={imgScreenshot} 
                alt="Seyfo uygulaması demo ekran görüntüsü" 
                className={styles.demoImage}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} aria-labelledby="cta-heading">
        <div className={styles.ctaContent}>
          <h2 id="cta-heading" className={styles.ctaHeading}>
            14 gün boyunca <span className={styles.ctaHighlight}>ücretsiz</span> deneyin!
          </h2>
          
          <p className={styles.ctaDescription}>
            Kredi kartı gerekmeden ücretsiz deneyin, memnun kalırsanız abone olun.
          </p>
          
          <form className={styles.emailForm} onSubmit={handleEmailSubmit}>
            <input 
              type="email" 
              className={styles.emailInput}
              placeholder="e-Posta adresinizi girin" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="E-posta adresi"
            />
            <button type="submit" className={styles.ctaButton}>
              Ücretsiz Deneyin
            </button>
          </form>
          
          <p className={styles.ctaDisclaimer}>
            Kredi kartı bilgisi gerekmeden hemen başlayabilir ve işletmenizi kontrol edebilirsiniz.
          </p>
        </div>
      </section>
    </div>
  )
}
