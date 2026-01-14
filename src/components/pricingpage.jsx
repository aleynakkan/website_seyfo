import { useState } from 'react'
import styles from './pricingpage.module.css'

const checkIcon = "https://www.figma.com/api/mcp/asset/e84c6033-5313-4d2d-91cc-019748781262"

export default function PricingPage() {
  return (
    <div className={styles.pricingPage}>
      {/* Header */}
      <section className={styles.header}>
        <h1>Size uygun planı seçin</h1>
        <p>Tüm planlar 14 gün ücretsiz deneme ile gelir. Kredi kartı bilgisi gerekmez.</p>
      </section>

      {/* Pricing Cards */}
      <section className={styles.pricingCards}>
        {/* Başlangıç Plan */}
        <div className={styles.card}>
          <h2>Başlangıç</h2>
          <p className={styles.description}>Küçük işletmeler için ideal</p>
          
          <div className={styles.price}>
            <span className={styles.amount}>499₺</span>
            <span className={styles.period}>/ay</span>
          </div>

          <ul className={styles.features}>
            <li><img src={checkIcon} alt="check" /> 1 kullanıcı</li>
            <li><img src={checkIcon} alt="check" /> Banka entegrasyonu</li>
            <li><img src={checkIcon} alt="check" /> Temel raporlar</li>
            <li><img src={checkIcon} alt="check" /> E-posta desteği</li>
            <li><img src={checkIcon} alt="check" /> Mobil uygulama</li>
          </ul>

          <button className={styles.btnSecondary}>Hemen Başla</button>
        </div>

        {/* Profesyonel Plan - Featured */}
        <div className={`${styles.card} ${styles.featured}`}>
          <div className={styles.badge}>En Popüler</div>
          
          <h2 className={styles.whiteText}>Profesyonel</h2>
          <p className={styles.descriptionLight}>Büyüyen işletmeler için</p>
          
          <div className={styles.price}>
            <span className={`${styles.amount} ${styles.whiteText}`}>999₺</span>
            <span className={styles.periodLight}>/ay</span>
          </div>

          <ul className={`${styles.features} ${styles.featuresLight}`}>
            <li><img src={checkIcon} alt="check" /> 5 kullanıcıya kadar</li>
            <li><img src={checkIcon} alt="check" /> Tüm banka entegrasyonları</li>
            <li><img src={checkIcon} alt="check" /> Gelişmiş raporlar ve analizler</li>
            <li><img src={checkIcon} alt="check" /> Öncelikli destek</li>
            <li><img src={checkIcon} alt="check" /> Mobil uygulama</li>
            <li><img src={checkIcon} alt="check" /> Nakit akış tahminleri</li>
            <li><img src={checkIcon} alt="check" /> Özel kategoriler</li>
          </ul>

          <button className={styles.btnPrimary}>Hemen Başla</button>
        </div>

        {/* Kurumsal Plan */}
        <div className={styles.card}>
          <h2>Kurumsal</h2>
          <p className={styles.description}>Büyük şirketler için</p>
          
          <div className={styles.price}>
            <span className={styles.amount}>Özel</span>
            <span className={styles.period}>fiyat</span>
          </div>

          <ul className={styles.features}>
            <li><img src={checkIcon} alt="check" /> Sınırsız kullanıcı</li>
            <li><img src={checkIcon} alt="check" /> Tüm özellikler</li>
            <li><img src={checkIcon} alt="check" /> 7/24 destek</li>
            <li><img src={checkIcon} alt="check" /> Özel entegrasyonlar</li>
            <li><img src={checkIcon} alt="check" /> Eğitim ve danışmanlık</li>
            <li><img src={checkIcon} alt="check" /> Özel SLA</li>
            <li><img src={checkIcon} alt="check" /> API erişimi</li>
          </ul>

          <button className={styles.btnSecondary}>Hemen Başla</button>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <p>Sorularınız mı var? Sizinle konuşmak isteriz.</p>
        <button className={styles.btnContact}>İletişime Geçin</button>
      </section>
    </div>
  )
}
