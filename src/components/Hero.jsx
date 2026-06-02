import React from 'react'
import profilePlaceholder from '../assets/images/profile-placeholder.svg'

// Hero section with greeting, role and CTAs
export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div>
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">Guhan R</h1>
          <p className="role">Software Developer</p>
          <p className="intro">
            Aspiring Software Developer passionate about building responsive web applications and continuously learning new technologies.
          </p>
          <div className="hero-ctas">
            <a className="btn" href="/resume.pdf" download>
              Download Resume
            </a>
            <a className="btn btn-outline" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
        
      </div>
    </section>
  )
}
