// EmailJS helper wrapper (fetch-based)
// This avoids requiring the `@emailjs/browser` package and works with EmailJS REST API.
// Replace SERVICE_ID, TEMPLATE_ID and PUBLIC_KEY with your EmailJS values.
const SERVICE_ID = 'SERVICE_ID'
const TEMPLATE_ID = 'TEMPLATE_ID'
const PUBLIC_KEY = 'PUBLIC_KEY' // also called user_id in EmailJS docs

export async function sendEmail(form) {
  const templateParams = {
    from_name: form.name,
    from_email: form.email,
    subject: form.subject || 'No subject',
    message: form.message,
  }

  const body = {
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: PUBLIC_KEY,
    template_params: templateParams,
  }

  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`EmailJS send failed: ${res.status} ${text}`)
  }

  return res.json()
}
