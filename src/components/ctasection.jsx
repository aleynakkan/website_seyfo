import styles from './ctasection.module.css'

const CTASection = ({ email, setEmail, onSubmit }) => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <span>14 gün boyunca </span>
            <span className={styles.underline}>ücretsiz</span>
            <span> deneyin!</span>
          </h2>

          <p className={styles.subtitle}>
            Kredi kartı gerekmeden ücretsiz deneyin, memnun kalırsanız abone olun.
          </p>

          <form className={styles.form} onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="e-Posta adresinizi girin"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
            <button type="submit" className={styles.submitBtn}>
              Ücretsiz Deneyin
            </button>
          </form>

          <p className={styles.disclaimer}>
            Kredi kartınızı kullanmadan ücretsiz deneyin, istediğiniz zaman abone olun.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTASection
