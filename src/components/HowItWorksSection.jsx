import styles from './HowItWorksSection.module.css'

// Image assets from Figma
const imgFrame1 = "https://www.figma.com/api/mcp/asset/3c22d660-04cd-4d42-ac19-85ca3f0d35b6";
const imgFrame2 = "https://www.figma.com/api/mcp/asset/b284fd89-7031-456e-8119-91a839eeb2b6";
const imgScreenshot = "https://www.figma.com/api/mcp/asset/24e55802-9ae5-4a6d-8773-d61497f919d2";
const imgPlus = "https://www.figma.com/api/mcp/asset/ac3e3b68-3892-447f-8cfd-316c4420ca15";

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Banka ekstresi veya e-fatura yükle",
      description: null,
    },
    {
      title: "CFO Assistant otomatik analiz etsin.",
      description: null,
    },
    {
      title: "Her gün net tabloyu gör.",
      description: null,
    },
  ]

  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <h2 className={styles.title}>Seyfo nasıl çalışır?</h2>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepColumn}>
              <div className={styles.stepCard}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <div className={styles.stepVisual}>
                  {index === 0 && <img src={imgFrame1} alt={step.title} />}
                  {index === 1 && <img src={imgScreenshot} alt={step.title} />}
                  {index === 2 && <img src={imgFrame2} alt={step.title} />}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={styles.stepDivider}>
                  <img src={imgPlus} alt="next step" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
