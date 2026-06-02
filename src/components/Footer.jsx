import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>Guhan R</div>
        <div className="socials">
          <a href="https://github.com/guhanravi1110/">GitHub</a>
          <a href="https://www.linkedin.com/in/guhanr1110/">LinkedIn</a>
          <a href="mailto:guhanravi1110@gmail.com">Email</a>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} Guhan R. All rights reserved.</div>
    </footer>
  )
}
