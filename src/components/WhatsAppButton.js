'use client'
import { useMemo } from 'react'

export default function WhatsAppButton({ phone = '916204899360', message = 'Hi! I would like to know more about your services.' }) {
  const href = useMemo(() => {
    // Remove any non-digit characters from phone number
    const cleanPhone = phone.replace(/\D/g, '')
    const encoded = encodeURIComponent(message)
    return `https://wa.me/${cleanPhone}?text=${encoded}`
  }, [phone, message])

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 left-6 z-50 flex items-center justify-center px-4 py-3 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white font-semibold shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 border border-white/20"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-6 h-6 fill-white"
        aria-hidden="true"
      >
        <path d="M16 .6C7.6.6.6 7.7.6 16.2c0 2.8.8 5.6 2.2 7.9L.6 32l8.2-2.1c2.2 1.2 4.6 1.8 7.2 1.8 8.4 0 15.3-7 15.3-15.5C31.3 7.7 24.4.6 16 .6Zm0 28.2c-2.3 0-4.5-.6-6.4-1.7l-.5-.3-4.8 1.2 1.3-4.7-.3-.5a12.8 12.8 0 0 1-2-6.6c0-7 5.7-12.7 12.7-12.7 3.4 0 6.6 1.4 9 3.8a12.7 12.7 0 0 1 3.7 9c0 7-5.7 12.8-12.7 12.8Zm6.8-9.6c-.4-.2-2.5-1.3-2.9-1.4-.4-.2-.7-.2-1 .2-.3.4-1.2 1.4-1.4 1.7-.2.2-.4.2-.8 0-.4-.2-1.7-.6-3.2-2a11.7 11.7 0 0 1-2.2-2.7c-.2-.4 0-.6.2-.8l.5-.5.3-.5c.2-.3 0-.6 0-.8l-1-2.5c-.2-.6-.4-.6-.7-.6l-.7-.1c-.3 0-.8.1-1.2.5-.4.4-1.6 1.6-1.6 3.9 0 2.3 1.6 4.5 1.8 4.8.2.3 3.2 5 7.7 7 4.6 2 4.6 1.3 5.4 1.2.8-.1 2.6-1 3-2s.4-1.8.3-2c-.1-.2-.3-.3-.7-.5Z" />
      </svg>
    </a>
  )
}
