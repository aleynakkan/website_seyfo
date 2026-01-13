import styles from './FeaturesSection.module.css'

// Image assets from Figma
const imgVector1 = "https://www.figma.com/api/mcp/asset/3ed4623f-8656-4842-9c50-d1de1d08c822";
const imgLayer1 = "https://www.figma.com/api/mcp/asset/fed1ba7a-547f-46fc-b4db-1ddf0fb1159a";
const imgLayer2 = "https://www.figma.com/api/mcp/asset/69b8082e-b736-4d93-ab49-c97032b29866";
const imgVector3 = "https://www.figma.com/api/mcp/asset/52cf34f2-ac98-446e-9b32-ca0b7fc03eee";

const FeaturesSection = () => {
  const features = [
    {
      title: "Paranın nereye gittiğini otomatik görürsün.",
      icon: imgVector1,
      image: imgLayer1,
    },
    {
      title: "Önümüzdeki 30 gün içinde nakit sıkışacak mısın önceden bilirsin",
      icon: imgVector1,
      image: imgLayer2,
    },
    {
      title: "Muhasebe dilini değil, iş diliyle rapor alırsın.",
      icon: imgVector3,
      image: imgVector3,
    },
  ]

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <span className={styles.highlight}>Seyfo ile</span>
          <span className={styles.normal}> neler yapabilirsiniz?</span>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <div className={styles.cardImage}>
                <img src={feature.image} alt={feature.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
