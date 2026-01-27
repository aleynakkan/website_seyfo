import { useMemo, useState } from 'react'
import styles from './landingpage.module.css'

// Image constants from Figma
const imgImage12 = "https://www.figma.com/api/mcp/asset/be0b37f6-1486-4857-8984-d751a9d77fe0"
import imgScreenshot from 'src/assets/landing/veriyonetimiss.png'
import imgContainer from 'src/assets/landing/tryicon.svg'
import plusicon from 'src/assets/landing/plusicon.svg'
import seyfohero from 'src/assets/landing/seyfohero.png'

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // How it works accordion state
  const [activeStep, setActiveStep] = useState(0)

  const steps = useMemo(() => ([
    {
      title: 'Banka ekstresi veya e-fatura yükle',
      description:
        'CSV/Excel veya e-fatura dosyanızı yükleyin. Seyfo verileri otomatik sınıflandırır.'
    },
    {
      title: 'CFO Assistant otomatik analiz etsin.',
      description:
        'Gelir-gider, nakit akışı ve trendleri çıkarır. Riskleri ve fırsatları iş diliyle özetler.'
    },
    {
      title: 'Her gün net tabloyu gör.',
      description:
        '“Kasada ne var, ne olacak?” sorusunun cevabını günlük olarak net biçimde takip edin.'
    },
  ]), [])

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    const normalized = email.trim().toLowerCase()
    if (!normalized) return

    try {
      setIsSubmitting(true)
      // TODO: burada API isteği yapabilirsin (fetch/axios)
      console.log('Email submitted:', normalized)
      // Basit UX: success temizleme
      setEmail('')
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleStep = (index) => {
    setActiveStep(prev => (prev === index ? -1 : index))
  }

  return (
    <div className={styles.landingPage}>
      {/* Hero Section */}
      <section className={styles.hero} role="banner">
        {/* Decorative background elements */}
        <div className={styles.heroBackground} aria-hidden="true">
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
                   <br /><span className={styles.highlight}>her gün daha net </span><br />görün.
              </h1>
            </div>

            <p className={styles.subtitle}>
              Seyfo banka hareketlerinizi, gelir–giderlerinizi ve nakit akışınızı otomatik analiz eder.
              Size her gün "Kasada ne var, ne olacak?" sorusunun cevabını verir.
            </p>

            <div className={styles.ctaButtons}>
              <button
                className={styles.primaryBtn}
                aria-label="Ücretsiz deneme başlat"
                onClick={(contact) => {
                  // TODO: signup sayfasına yönlendirme veya modal
                  console.log('Start free trial')
                }}
              >
                Ücretsiz Dene
              </button>
             </div>
          </div>

          <div className={styles.heroImageWrapper}>
            <img
              src={seyfohero}
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
              Önümüzdeki 30-60-90 gün sonraki nakit durumunu önceden bilirsin.
            </h3>
            <div className={styles.featureVisual}>
              <div className={styles.chartContainer} aria-hidden="true">
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
              <div className={styles.chartDecorative} aria-hidden="true"></div>
            </div>
          </article>

          <article className={styles.featureCard}>
            <h3 className={styles.featureTitle}>
              Muhasebe diliyle değil, iş diliyle rapor alırsın.
            </h3>
            <div className={styles.featureVisual}>
              <div className={styles.reportsStack} aria-hidden="true">
                <div className={styles.reportCard} style={{ transform: 'rotate(12deg)' }}></div>
                <div className={styles.reportCard} style={{ transform: 'rotate(-6deg)' }}></div>
                <div className={styles.reportCard} style={{ transform: 'rotate(3deg)' }}>
                  <div className={styles.reportPlusBtn}>
                    <span className={styles.plusIcon}>+</span>
                  </div>
                </div>
              </div>
              <div className={styles.reportDotLeft} aria-hidden="true"></div>
              <div className={styles.reportDotRight} aria-hidden="true"></div>
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
            <div className={styles.stepsColumn} role="list">
              {steps.map((step, idx) => {
                const expanded = activeStep === idx
                const panelId = `step-panel-${idx}`
                const buttonId = `step-button-${idx}`

                return (
                  <div key={step.title} className={styles.stepRow} role="listitem">
                    <button
                      id={buttonId}
                      className={styles.stepItem}
                      aria-expanded={expanded}
                      aria-controls={panelId}
                      onClick={() => toggleStep(idx)}
                      type="button"
                    >
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <img src={plusicon} alt="plus_icon" className={styles.stepIcon} aria-hidden="true" />
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={styles.stepPanel}
                      hidden={!expanded}
                    >
                      <p className={styles.stepDescription}>{step.description}</p>
                    </div>
                  </div>
                )
              })}
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
            7 gün boyunca <span className={styles.ctaHighlight}>ücretsiz</span> deneyin!
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
              autoComplete="email"
            />
            <button type="submit" className={styles.ctaButton} disabled={isSubmitting}>
              {isSubmitting ? 'Gönderiliyor…' : 'Ücretsiz Deneyin'}
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