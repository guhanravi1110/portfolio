import React from 'react'

// Education shown as simple cards
const educationData = [
  {
    title: 'Bachelor of Computer Science',
    place: 'Dhanalakshmi Srinivasan Engineering College',
    year: '2020 - 2024',
    extra: 'CGPA: 8.1',
  },
  {
    title: 'Higher Secondary',
    place: 'Dhanalakshmi Srinivasan Higher Secondary School',
    year: '2019 - 2020',
    extra: 'Percentage: 72%',
  },
  {
    title: 'SSLC',
    place: 'Aditya Birla Matriculation School',
    year: '2017 - 2018',
    extra: 'Percentage: 87%',
  },
]

export default function Education() {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-grid">
        {educationData.map((e, i) => (
          <div className="edu-card" key={i}>
            <h3>{e.title}</h3>
            <p className="place">{e.place}</p>
            <p className="year">{e.year}</p>
            <p className="extra">{e.extra}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
