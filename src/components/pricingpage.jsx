import { useState } from 'react'
import styles from './pricingpage.module.css'

const plans = [
  
  {
    id: 'profesyonel',
    name: 'Profesyonel Plan',
    description: 'Büyüyen işletmeler için',
    monthlyPrice: 1000,
    features: [
      '30 Günlük Nakit Tahmini',
      'Gider Analizi ve Hatalı Gider Tespiti',
      'Yaklaşan Nakit Açığı Uyarıları',
      'Finansal Sağlık Skoru',
      'Gerçek Zamanlı Dashboard',
      'Risk Görünümü',
    ],
    featured: true,
  },
  
]

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 10.5L8 14.5L16 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function PricingPage({ onNavigate }) {
  const [isYearly, setIsYearly] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  const getPrice = (monthlyPrice) => {
    if (!monthlyPrice) return null
    if (isYearly) {
      return Math.round(monthlyPrice * 0.8)
    }
    return monthlyPrice
  }

  const handleSelect = (planId) => {
    setSelectedPlan(planId)
    if (onNavigate) onNavigate('contact')
  }

  const goToContact = () => {
    if (onNavigate) onNavigate('contact')
  }

  return (
    <div className={styles.pricingPage} id="pricing">
      {/* Header */}
      <section className={styles.header}>
        <h1>Size uygun planı seçin</h1>

        {/* Toggle */}
        <div className={styles.toggleWrapper}>
          <span className={`${styles.toggleLabel} ${styles.toggleSide} ${!isYearly ? styles.toggleActive : ''}`}>Aylık</span>
          <button
            className={`${styles.toggleSwitch} ${isYearly ? styles.toggleOn : ''}`}
            onClick={() => setIsYearly(!isYearly)}
            aria-label="Aylık / Yıllık geçiş"
          >
            <span className={styles.toggleKnob} />
          </button>
          <div className={`${styles.toggleSide} ${styles.toggleRight}`}>
            <span className={`${styles.toggleLabel} ${isYearly ? styles.toggleActive : ''}`}>
              Yıllık
            </span>
            <span className={`${styles.discountBadge} ${isYearly ? styles.discountVisible : ''}`}>%20 İndirim</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className={styles.pricingCards}>
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`${styles.card} ${plan.featured ? styles.featured : ''} ${selectedPlan === plan.id ? styles.selected : ''}`}
          >
            {plan.featured && <div className={styles.badge}>En Popüler</div>}

            <h2>{plan.name}</h2>
            <p className={styles.description}>{plan.description}</p>

            <div className={styles.priceBlock}>
              {plan.monthlyPrice ? (
                <>
                  <div className={styles.priceRow}>
                    <span className={styles.amount}>{getPrice(plan.monthlyPrice)}₺</span>
                    <span className={styles.period}>/ay</span>
                  </div>
                  <p className={styles.billingNote}>
                    {isYearly
                      ? `Yıllık ${getPrice(plan.monthlyPrice) * 12}₺ tek seferde faturalandırılır. (${getPrice(plan.monthlyPrice)}₺ /ay)`
                      : `Aylık ${plan.monthlyPrice}₺ olarak faturalandırılır`}
                  </p>
                  {isYearly && (
                    <span className={styles.originalPrice}>{plan.monthlyPrice}₺/ay</span>
                  )}
                </>
              ) : (
                <div className={styles.priceRow}>
                  <span className={styles.amount}>Özel</span>
                  <span className={styles.period}>fiyat</span>
                </div>
              )}
            </div>

            <div className={styles.divider} />

            <ul className={styles.features}>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <span className={styles.checkIcon}><CheckIcon /></span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={plan.featured ? styles.btnPrimary : styles.btnSecondary}
              onClick={() => handleSelect(plan.id)}
            >
              {plan.monthlyPrice ? 'Hemen Başla' : 'Bizimle İletişime Geçin'}
            </button>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <p>Sorularınız mı var? Sizinle konuşmak isteriz.</p>
        <button className={styles.btnContact} onClick={goToContact}>İletişime Geçin</button>
      </section>
    </div>
  )
}
