import { useState } from 'react'
import styles from './featurespage.module.css'

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState('pages')

  const features = {
    pages: {
      title: 'Get on the same page',
      items: [
        { subtitle: 'Real-time editing', description: 'Take notes, plan projects, and refine ideas. Seamlessly edit content with the whole team at the same time or across time zones.' },
        { subtitle: 'Commenting', description: 'Make it a team effort with in-line and page comments, likes, and visual elements such as images, GIFs, and emojis.' },
        { subtitle: 'Notifications', description: 'Alert your teammates when you tag them or assign a task so everyone stays on top of progress.' }
      ]
    },
    databases: {
      title: 'Features built to meet your team\'s needs',
      items: [
        { icon: 'download', subtitle: 'Up to 2GB file storage', description: 'Securely store your files on our cloud.' },
        { icon: 'users', subtitle: 'Up to 10 users', description: 'Empower your team to share knowledge and collaborate quickly.' },
        { icon: 'spaces', subtitle: 'Unlimited spaces and pages', description: 'Create and organize as much content as your team needs.' }
      ]
    }
  }

  const currentTab = activeTab === 'pages' ? features.pages : features.databases

  return (
    <div className={styles.featuresPage}>
      {/* Header */}
      <section className={styles.header}>
        <h1>Özellikler</h1>
        <p>Tüm özellikler 14 gün ücretsiz deneme ile gelir.</p>
      </section>

      {/* Tabs */}
      <section className={styles.tabsSection}>
        <div className={styles.tabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'pages' ? styles.active : ''}`}
            onClick={() => setActiveTab('pages')}
          >
            Pages
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'whiteboards' ? styles.active : ''}`}
            onClick={() => setActiveTab('whiteboards')}
          >
            Whiteboards
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'databases' ? styles.active : ''}`}
            onClick={() => setActiveTab('databases')}
          >
            Databases
          </button>
          <button 
            className={`${styles.tab}`}
          >
            Loom
          </button>
        </div>

        {/* Tab Content */}
        <div className={styles.tabContent}>
          <div className={styles.contentLeft}>
            <h2>{currentTab.title}</h2>
            <div className={styles.featuresList}>
              {currentTab.items.map((item, index) => (
                <div key={index} className={styles.featureItem}>
                  {item.subtitle && <h3>{item.subtitle}</h3>}
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <a href="#" className={styles.getStarted}>Get it free →</a>
          </div>

          <div className={styles.contentRight}>
            <div className={styles.screenshotPlaceholder}></div>
          </div>
        </div>
      </section>
    </div>
  )
}
