import styles from './herosection.module.css'

// Image assets from Figma
const imgImage12 = "https://www.figma.com/api/mcp/asset/296947a2-a387-4bb4-9981-c98b4d190980";
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/31c42654-bdbe-4480-a15a-39f1a705ee7e";
const imgEllipse3 = "https://www.figma.com/api/mcp/asset/13d7d69a-da78-4e6f-9aaf-91d9ecc0d6ba";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>
              İşletmenizin finansal fotoğrafını
              <span className={styles.highlight}> </span>
              <span className={styles.normal}>görün</span>
            </h1>
          </div>

          <p className={styles.description}>
            Seyfo banka hareketlerinizi, gelir–giderlerinizi ve nakit akışınızı otomatik analiz eder. Size her gün "Kasada ne var, ne olacak?" sorusunun cevabını verir.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>Ücretsiz Deneyin</button>
            <button className={styles.secondaryBtn}>Demo İzle</button>
          </div>
        </div>

        <div className={styles.illustration}>
          <div className={styles.illustrationBg1}></div>
          <div className={styles.illustrationBg2}></div>
          <div className={styles.illustrationBg3}></div>
          <div className={styles.illustrationBg4}></div>
          <div className={styles.illustrationBg5}></div>
          <img src={imgEllipse2} alt="decoration 1" className={styles.decoration1} />
          <img src={imgImage12} alt="hero illustration" className={styles.image} />
          <img src={imgEllipse3} alt="decoration 2" className={styles.decoration2} />
        </div>
      </div>

      <div className={styles.pinkBg}></div>
    </section>
  )
}

export default HeroSection
