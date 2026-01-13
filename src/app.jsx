import { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/herosection'
import FeaturesSection from './components/featuressection'
import HowItWorksSection from './components/howitworkssection'
import CTASection from './components/ctasection'
import Footer from './components/footer'
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
