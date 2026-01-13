import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import HowItWorksSection from './components/HowItWorksSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    // TODO: Send email to backend
    console.log('Submitted email:', email)
    setEmail('')
  }

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection email={email} setEmail={setEmail} onSubmit={handleEmailSubmit} />
      </main>
      <Footer />
    </div>
  )
}

export default App
