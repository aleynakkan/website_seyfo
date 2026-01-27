import { useState } from 'react'
import styles from './contactpage.module.css'

import sendIcon from "src/assets/contact/sendicon.svg"
import checkIcon from "src/assets/contact/checkicon.svg"


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        alert('Mesajınız başarıyla gönderildi! Kısa sürede sizinle iletişime geçeceğiz.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        })
      } else {
        alert('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.')
    }
  }

  return (
    <div className={styles.contactPage}>
      {/* Header */}
      <section className={styles.header}>
        <h1>Bize Ulaşın</h1>
        <p>Sorularınız, önerileriniz veya demo talepleriniz için bizimle iletişime geçin.</p>
      </section>

      {/* Contact Container */}
      <section className={styles.contactContainer}>
        {/* Left Content */}
        <div className={styles.contentLeft}>
          <h2>Seyfonun ihtiyaçlarınıza nasıl uyum sağlayabileceğini görmek için satış ekibimizle görüşün</h2>
          
          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <img src={checkIcon} alt="check" className={styles.checkIcon} />
              <p>İş hedeflerinize en uygun çözümü birlikte değerlendirin</p>
            </div>
            <div className={styles.benefit}>
              <img src={checkIcon} alt="check" className={styles.checkIcon} />
              <p>Size özel fiyatlandırma bilgisi alın</p>
            </div>
          </div>
        </div>

        {/* Right Content - Form */}
        <div className={styles.contentRight}>
          <div className={styles.formCard}>
            <h2>Mesaj Gönderin</h2>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Name Field */}
              <div className={styles.formGroup}>
                <label htmlFor="name">Ad Soyad *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Adınız ve soyadınız"
                  required
                />
              </div>

              {/* Email Field */}
              <div className={styles.formGroup}>
                <label htmlFor="email">E-posta *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ornek@email.com"
                  required
                />
              </div>

              {/* Phone Field */}
              <div className={styles.formGroup}>
                <label htmlFor="phone">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+90 (555) 123 45 67"
                />
              </div>

              {/* Company Field */}
              <div className={styles.formGroup}>
                <label htmlFor="company">Şirket Adı</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Şirketinizin adı"
                />
              </div>

              {/* Message Field */}
              <div className={styles.formGroup}>
                <label htmlFor="message">Mesajınız *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Nasıl yardımcı olabiliriz?"
                  rows="6"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className={styles.submitBtn}>
                <img src={sendIcon} alt="send" />
                Mesaj Gönder
              </button>

              {/* Disclaimer */}
              <p className={styles.disclaimer}>* ile işaretli alanlar zorunludur</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
