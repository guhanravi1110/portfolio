import React from 'react'

const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'Reactjs'],
  Programming: ['Java', 'SQL'],
  Tools: ['Git', 'GitHub', 'VS Code'],
}

// Simple progress values for beginner-friendly display
const levels = {
  HTML: 90,
  CSS: 70,
  JavaScript: 60,
  Reactjs: 40,
  Java: 60,
  SQL: 70,
  Git: 50,
  GitHub: 60,
  'VS Code': 85,
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([group, list]) => (
          <div className="skill-card" key={group}>
            <h3>{group}</h3>
            <ul>
              {list.map((s) => (
                <li key={s}>
                  <div className="skill-row">
                    <span className="skill-name">{s}</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: `${levels[s] || 50}%` }}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
