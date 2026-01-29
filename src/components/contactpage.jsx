import { useState } from 'react'
import styles from './contactpage.module.css'

import sendIcon from "../assets/contact/sendicon.svg"
import checkIcon from "../assets/contact/checkicon.svg"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  // 'idle', 'sending', 'sent' durumlarını tutacak state
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Gönderim başladığında butonu pasif yap ve "Gönderiliyor" de
    setStatus('sending');
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        // İstek başarılı olsa bile 3 saniye bekleme şartını sağlamak için:
        setTimeout(() => {
          setStatus('sent');
          
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: ''
          });

          // 2 saniye sonra butonu tekrar eski haline (Mesaj Gönder) döndürür
          setTimeout(() => setStatus('idle'), 2000);
        }, 3000);

      } else {
        alert('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
        setStatus('idle');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Mesaj gönderilirken bir hata oluştu.');
      setStatus('idle');
    }
  }

  return (
    <div id='contact' className={styles.contactPage}>
      {/* Header Kısmı Aynı Kalıyor */}
      <section className={styles.header}>
        <h1>Bize Ulaşın</h1>
        <p>Sorularınız, önerileriniz veya demo talepleriniz için bizimle iletişime geçin.</p>
      </section>

      <section className={styles.contactContainer}>
        {/* Left Content Kısmı Aynı Kalıyor */}
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

        <div className={styles.contentRight}>
          <div className={styles.formCard}>
            <h2>Mesaj Gönderin</h2>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Ad Soyad *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Adınız ve soyadınız" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">E-posta *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="ornek@email.com" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Telefon</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+90 (555) 123 45 67" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="company">Şirket Adı</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Şirketinizin adı" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Mesajınız *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Nasıl yardımcı olabiliriz?" rows="6" required></textarea>
              </div>

              {/* Güncellenen Buton */}
              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={status !== 'idle'}
                style={{
                  opacity: status !== 'idle' ? 0.8 : 1,
                  cursor: status !== 'idle' ? 'not-allowed' : 'pointer',
                  backgroundColor: status === 'sent' ? '#4CAF50' : '' // Opsiyonel: Başarı rengi
                }}
              >
                {status === 'idle' && (
                  <>
                    <img src={sendIcon} alt="send" />
                    Mesaj Gönder
                  </>
                )}
                {status === 'sending' && 'Gönderiliyor...'}
                {status === 'sent' && (
                  <>
                    <img src={checkIcon} alt="sent" />
                    Gönderildi
                  </>
                )}
              </button>

              <p className={styles.disclaimer}>* ile işaretli alanlar zorunludur</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}