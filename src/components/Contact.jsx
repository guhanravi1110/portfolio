import React, { useState } from 'react'
import { sendEmail } from '../services/emailjs'

// Contact form with validation and EmailJS integration
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    // Basic validation
    if (!form.name || !form.email || !form.message) {
      setStatus({ ok: false, msg: 'Please fill required fields.' })
      return
    }

    setStatus({ ok: null, msg: 'Sending...' })
    try {
      await sendEmail(form)
      setStatus({ ok: true, msg: 'Message sent successfully!' })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ ok: false, msg: 'Failed to send.' })
    }
  }

  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="field">
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="field">
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="field">
          <label>Subject</label>
          <input name="subject" value={form.subject} onChange={handleChange} />
        </div>
        <div className="field">
          <label>Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} required />
        </div>

        <button className="btn" type="submit">Send Message</button>

        {status && (
          <p className={`status ${status.ok ? 'ok' : 'err'}`}>{status.msg}</p>
        )}
      </form>
    </section>
  )
}
