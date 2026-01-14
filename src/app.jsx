import { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import HeroSection from './components/herosection'
import FeaturesSection from './components/featuressection'
import HowItWorksSection from './components/howitworkssection'
import CTASection from './components/ctasection'
import LandingPage from './components/landingpage'
import FeaturesPage from './components/featurespage'
import PricingPage from './components/pricingpage'
import ContactPage from './components/contactpage'
import './app.css'

function App() {
  const [email, setEmail] = useState('')
  const [currentPage, setCurrentPage] = useState('home') // 'home', 'features', 'pricing', 'contact'

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    // TODO: Send email to backend
    console.log('Submitted email:', email)
    setEmail('')
  }

  const handleNavigation = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  return (
    <div className="app">
      <Navbar onNavigate={handleNavigation} currentPage={currentPage} />
      <main className="main-content">
        {currentPage === 'home' && (
          <>
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <CTASection email={email} setEmail={setEmail} onSubmit={handleEmailSubmit} />
          </>
        )}
        {currentPage === 'features' && <FeaturesPage />}
        {currentPage === 'pricing' && <PricingPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer onNavigate={handleNavigation} />
    </div>
  )
}

export default App
