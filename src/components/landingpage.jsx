import { useMemo, useState } from 'react'
import styles from './landingpage.module.css';
import React from 'react';

// Görsel Importları
import imgScreenshot from '../assets/landing/veriyonetimiss.svg'
import plusicon from '../assets/landing/plusicon.svg'
import dene from '../assets/landing/dene.svg'
import gif1 from '../assets/landing/gif1.gif'
import gif2 from '../assets/landing/gif2.gif'
import gif3 from '../assets/landing/gif3.gif'

export default function LandingPage({ onNavigate }) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  const steps = useMemo(() => ([
    {
      title: 'Banka ekstresi veya e-fatura yükle',
      description: 'CSV/Excel veya e-fatura dosyanızı yükleyin. Seyfo verileri otomatik sınıflandırır.'
    },
    {
      title: 'CFO Assistant otomatik analiz etsin.',
      description: 'Gelir-gider, nakit akışı ve trendleri çıkarır. Riskleri ve fırsatları iş diliyle özetler.'
    },
    {
      title: 'Her gün net tabloyu gör.',
      description: '“Kasada ne var, ne olacak?” sorusunun cevabını günlük olarak net biçimde takip edin.'
    },
  ]), [])

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    const normalized = email.trim().toLowerCase()
    if (!normalized) return
    try {
      setIsSubmitting(true)
      console.log('Email submitted:', normalized)
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
        <img src={dene} alt="arkaplan" className={styles.heroBackground} aria-hidden="true" />
        
        <div className={styles.heroContent}>
          <div className={styles.heroTextWrapper}>
            <div className={styles.headingWrapper}>
              <h1 className={styles.mainHeading}>
                <br /><span className={styles.highlight}> İşletmenizin finansal fotoğrafını </span><br /> her gün daha net görün.
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
                onClick={() => onNavigate('contact')} // App.js'deki handleNavigation'ı tetikler
              >
                Ücretsiz Dene
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features} aria-labelledby="features-heading">
        <h2 id="features-heading" className={styles.sectionTitle}>
          <span className={styles.titleAccent}>Seyfo</span> ile neler yapabilirsiniz?
        </h2>
        
        <div className={styles.featureGrid}>
          <article className={styles.featureCard}>
            <div className={styles.featureVisual}>
              <img src={gif1} alt="Nakit Akışı" />
            </div>
            <h3 className={styles.featureTitle}>
              <b>Nakit akışını netleştirir.</b> <br/>
              Paranın nereye gittiğini otomatik görürsün.
            </h3>
          </article>

          <article className={styles.featureCard}>
            <div className={styles.featureVisual}>
              <img src={gif2} alt="Risk Analizi" />
            </div>
            <h3 className={styles.featureTitle}>
              <b>Finansal riskleri önceden gösterir.</b> <br/>
              Önümüzdeki 30-60-90 gün içinde nakit durumunu önceden bilirsin.
            </h3>
          </article>

          <article className={styles.featureCard}>
            <div className={styles.featureVisual}>
              <img src={gif3} alt="Raporlama" />
            </div>
            <h3 className={styles.featureTitle}>
              <b>Finansal durumu iş diliyle özetler.</b> <br/>
              Muhasebe dilini değil, iş diliyle rapor alırsın.
            </h3>
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
                return (
                  <div key={idx} className={styles.stepRow} role="listitem">
                    <button
                      className={styles.stepItem}
                      aria-expanded={expanded}
                      onClick={() => toggleStep(idx)}
                      type="button"
                    >
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <img src={plusicon} alt="Daha fazla" className={styles.stepIcon} />
                    </button>

                    {expanded && (
                      <div className={styles.stepPanel}>
                        <p className={styles.stepDescription}>{step.description}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className={styles.demoImageWrapper}>
              <img
                src={imgScreenshot}
                alt="Seyfo uygulama demosu"
                className={styles.demoImage}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaHeading}>
            7 gün boyunca <span className={styles.ctaHighlight}>ücretsiz</span> deneyin!
          </h2>
          <p className={styles.ctaDescription}>
            Kredi kartı gerekmeden hemen başlayın.
          </p>
          <form className={styles.emailForm} onSubmit={handleEmailSubmit}>
            <button 
                type="button" 
                className={styles.ctaButton} 
                onClick={() => onNavigate('contact')}
            >
              Ücretsiz Deneyin
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}