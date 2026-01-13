import { useState } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <div className={styles.logoBar1}></div>
            <div className={styles.logoBar2}></div>
            <div className={styles.logoBar3}></div>
          </div>
          <span className={styles.logoText}>seyfo</span>
        </div>

        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <button className={styles.navItem}>Özellikler</button>
          <button className={styles.navItem}>Fiyatlar</button>
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
