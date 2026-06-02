import React from 'react'
import guhanimg from '/guhan.jpeg'

// About section with image and basic info
export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <div className="about-image">
          <img src={guhanimg} alt="Profile" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm an aspiring Software Developer with a strong interest in web development and software engineering. I enjoy creating responsive and user-friendly applications using technologies like Reactjs , CSS, JavaScript, Java, and SQL. I am passionate about problem-solving, learning new technologies, and improving my skills through hands-on projects. My goal is to build efficient software solutions and grow into a skilled full-stack developer while contributing to meaningful projects.
          </p>

          <ul className="info-list">
            <li>
              <strong>Name:</strong> Guhan R
            </li>
            <li>
              <strong>Location:</strong> Ariyalur, Tamil Nadu, India
            </li>
            <li>
              <strong>Email:</strong> guhanravi1110@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91 97913 73092
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
