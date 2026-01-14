import { useState } from 'react'
import styles from './navbar.module.css'

const Navbar = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleNavClick = (page) => {
    onNavigate(page)
    setIsOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo} onClick={() => handleNavClick('home')}>
          <div className={styles.logoIcon}>
            <div className={styles.logoBar1}></div>
            <div className={styles.logoBar2}></div>
            <div className={styles.logoBar3}></div>
          </div>
          <span className={styles.logoText}>seyfo</span>
        </div>

        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <button 
            className={`${styles.navItem} ${currentPage === 'features' ? styles.active : ''}`}
            onClick={() => handleNavClick('features')}
          >
            Özellikler
          </button>
          <button 
            className={`${styles.navItem} ${currentPage === 'pricing' ? styles.active : ''}`}
            onClick={() => handleNavClick('pricing')}
          >
            Fiyatlar
          </button>
          <button 
            className={`${styles.navItem} ${currentPage === 'contact' ? styles.active : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            İletişim
          </button>
        </div>

        {/* Buttons */}
        <div className={styles.buttons}>
          <button className={styles.loginBtn}>Giriş Yapın</button>
          <button className={styles.primaryBtn}>Ücretsiz Deneyin</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
