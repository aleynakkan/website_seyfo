import { useState } from 'react'
import styles from './navbar.module.css'
import imglogoicon from 'src/assets/landing/logo+name.svg'

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
  <img src={imglogoicon} alt="Seyfo" className={styles.logoIcon} />
</div>


        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          {/*<button 
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
          </button>*/}
        </div>

        {/* Buttons */}
        <div className={styles.buttons}>
          {/*<button className={styles.loginBtn}>Giriş Yapın</button>*/}
          <button className={styles.primaryBtn} onClick={() => handleNavClick('contact')}>Ücretsiz Deneyin</button>
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
