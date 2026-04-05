import { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import LandingPage from './components/landingpage'
import FeaturesPage from './components/featurespage'
import PricingPage from './components/pricingpage'
import ContactPage from './components/contactpage'
import './app.css'
import myfavicon from './assets/landing/logoonly.png'

// metadata objesini sildim, standart React'te bu şekilde kullanılmaz.

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [pendingSectionId, setPendingSectionId] = useState(null)

  const handleNavigation = (page, sectionId = null) => {
    setCurrentPage(page)
    setPendingSectionId(sectionId)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    if (currentPage !== 'home' || !pendingSectionId) {
      return
    }

    const targetElement = document.getElementById(pendingSectionId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setPendingSectionId(null)
    }
  }, [currentPage, pendingSectionId])

  useEffect(() => {
    // Mevcut favicon link elementini bul veya oluştur
    let link = document.querySelector("link[rel~='icon']");
    
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    
    // Import ettiğin görseli href olarak ata
    link.href = myfavicon;
  }, []);

  return (
    <div className="app">
      <Navbar onNavigate={handleNavigation} currentPage={currentPage} />
      <main className="main-content">
        {currentPage === 'home' && <LandingPage onNavigate={handleNavigation} />}
        {currentPage === 'features' && <FeaturesPage />}
        {currentPage === 'pricing' && <PricingPage onNavigate={handleNavigation} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer onNavigate={handleNavigation} />
    </div>
  )
}

export default App