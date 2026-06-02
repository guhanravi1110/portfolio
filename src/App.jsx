// Main app entry that composes the portfolio sections
import React from 'react'
import './styles/Hero.css'
import './styles/Navbar.css'
import './styles/About.css'
import './styles/Education.css'
import './styles/Skills.css'
import './styles/Projects.css'
import './styles/Contact.css'
import './styles/Footer.css'
import './index.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      {/* Navbar is sticky and contains smooth scroll links */}
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
