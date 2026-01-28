import { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import LandingPage from './components/landingpage'
import FeaturesPage from './components/featurespage'
import PricingPage from './components/pricingpage'
import ContactPage from './components/contactpage'
import './app.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home') // 'home', 'features', 'pricing', 'contact'

  const handleNavigation = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  

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
