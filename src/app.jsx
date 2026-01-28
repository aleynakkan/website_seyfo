import { useState, useEffect } from 'react' // <--- useEffect buraya eklendi
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

  const handleNavigation = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

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
        {currentPage === 'pricing' && <PricingPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer onNavigate={handleNavigation} />
    </div>
  )
}

export default App