import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>John Doe</div>
        <div className="socials">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="mailto:john@example.com">Email</a>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} John Doe. All rights reserved.</div>
    </footer>
  )
}
