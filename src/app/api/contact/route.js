import { NextResponse } from 'next/server'

// Uses Resend API via HTTPS (no extra deps). Set RESEND_API_KEY in your environment.
export async function POST(request) {
  const { name = '', email = '', phone = '', company = '', message = '' } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
  }

  const html = `
    <h2>New Contact Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
  `

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL || 'you@example.com'
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing RESEND_API_KEY on the server.' }, { status: 500 })
  }

  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'SML Contact <onboarding@resend.dev>',
      to: [toEmail],
      subject: `New inquiry from ${name}`,
      reply_to: email,
      html
    })
  })

  const data = await resp.json()
  if (!resp.ok) {
    return NextResponse.json({ error: data?.message || 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
