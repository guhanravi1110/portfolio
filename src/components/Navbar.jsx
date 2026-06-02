import React, { useState, useEffect } from 'react'

// Responsive sticky navbar with accessible hamburger for mobile
export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 700) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  function handleLinkClick() {
    setOpen(false)
  }

  return (
    <header className="navbar">
      <div className="nav-inner container">
        <div className="brand">John Doe</div>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="hamburger" />
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#education" onClick={handleLinkClick}>Education</a>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </nav>
      </div>
    </header>
  )
}
