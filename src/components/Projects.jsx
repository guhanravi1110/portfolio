import React from 'react'
import project1 from '../assets/images/project1.svg'
import project2 from '../assets/images/project2.svg'
import project3 from '../assets/images/project3.svg'

const projects = [
  { id: 1, name: 'Portfolio Website', desc: 'Built using React and CSS.', tech: ['React', 'CSS'], img: project1, github: '#', live: '#' },
  { id: 2, name: 'Weather App', desc: 'Uses API to fetch weather data.', tech: ['JavaScript', 'API'], img: project2, github: '#', live: '#' },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">  
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.id}>
            <img src={p.img} alt={p.name} />
            <div className="project-body">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <p className="tech">{p.tech.join(' • ')}</p>
              <div className="project-actions">
                <a href={p.github} className="btn btn-sm" target="_blank">
                  GitHub
                </a>
                <a href={p.live} className="btn btn-sm btn-outline" target="_blank">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
