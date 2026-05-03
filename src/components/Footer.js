// 'use client'

// import React, { useState } from 'react'

// const Footer = () => {
//   const [email, setEmail] = useState('')
//   const [status, setStatus] = useState({ type: '', message: '' })

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const isValid = /.+@.+\..+/.test(email.trim())
//     if (!isValid) {
//       setStatus({ type: 'error', message: 'Please enter a valid email.' })
//       return
//     }
//     setStatus({ type: 'success', message: 'Thanks! You are subscribed.' })
//     setEmail('')
//   }

//   return (
//     <footer className="relative overflow-hidden text-white
// bg-[#05070d] backdrop-blur-xl border-t border-white/10">  {/* Background elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full top-[-100px] left-[-100px]" />
//         <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
//         <div className="grid md:grid-cols-4 gap-8 mb-12">
//           {/* Company Info */}
//           <div>
//             <div className="flex items-center space-x-1.5 mb-4">
//               <img src="/image/companylogo.png" alt="SML logo" width={60} height={60} />
//               <div className="flex flex-col justify-center">
//                 <span className="font-bold text-lg leading-tight">Stack</span>
//                 <span className="text-xs text-gray-400 leading-tight">Mints Lab</span>
//               </div>
//             </div>
//             <p className="text-gray-400 mb-6 leading-relaxed">
//               Transforming businesses through innovative IT solutions and cutting-edge technology.
//             </p>
//             <div className="flex gap-4">
//               <a href="https://www.facebook.com/share/1ENX3fc2gX/" className="text-gray-400 hover:text-blue-400 transition text-sm font-semibold">Facebook</a>
//               <a href="https://www.instagram.com/stack_mints_labs?igsh=MWJwbzJmN2lrMzZnMA==" className="text-gray-400 hover:text-blue-400 transition text-sm font-semibold">Instagram</a>
//               <a href="https://www.linkedin.com/in/stackmints-labs-2a7611405" className="text-gray-400 hover:text-blue-400 transition text-sm font-semibold">LinkedIn</a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-black mb-6">Quick Links</h4>
//             <ul className="space-y-3 text-gray-400">
//               <li><a href="/" className="hover:text-blue-400 transition font-medium">Home</a></li>
//               <li><a href="/services" className="hover:text-blue-400 transition font-medium">Services</a></li>
//               <li><a href="/technologies" className="hover:text-blue-400 transition font-medium">Technologies</a></li>
//               <li><a href="/portfolio" className="hover:text-blue-400 transition font-medium">Portfolio</a></li>
//               <li><a href="/contact" className="hover:text-blue-400 transition font-medium">Contact</a></li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-lg font-black mb-6">Services</h4>
//             <ul className="space-y-3 text-gray-400">
//               <li><a href="#" className="hover:text-blue-400 transition font-medium">Web Development</a></li>
//               <li><a href="#" className="hover:text-blue-400 transition font-medium">Mobile Apps</a></li>
//               <li><a href="#" className="hover:text-blue-400 transition font-medium">IT Consulting</a></li>
//               <li><a href="#" className="hover:text-blue-400 transition font-medium">Cybersecurity</a></li>
//               <li><a href="#" className="hover:text-blue-400 transition font-medium">Cloud Solutions</a></li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h4 className="text-lg font-black mb-6">Stay Updated</h4>
//             <p className="text-gray-400 mb-4 text-sm">Subscribe to our newsletter for latest updates and offers.</p>
//             <form onSubmit={handleSubmit} className="flex flex-col gap-2">
//               <div className="flex gap-2">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="you@example.com"
//                   className="flex-1 px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-blue-500 outline-none font-medium"
//                   aria-label="Email for newsletter"
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition font-bold"
//                   aria-label="Subscribe"
//                 >
//                   →
//                 </button>
//               </div>
//               {status.message && (
//                 <p className={`text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
//                   {status.message}
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>

//         <div className="border-t border-slate-700 pt-8">
//           <div className="grid md:grid-cols-2 gap-4 text-gray-400 text-sm">
//             <div>
//               <p>&copy; {new Date().getFullYear()} SML. All rights reserved.</p>
//             </div>
//             <div className="flex gap-6 justify-end">
//               <a href="/privacy" className="hover:text-blue-400 transition font-medium">Privacy Policy</a>
//               <a href="/terms" className="hover:text-blue-400 transition font-medium">Terms of Service</a>
//               <a href="/cookie" className="hover:text-blue-400 transition font-medium">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

'use client'

import React, { useState } from 'react'
import {
  FaFacebookF, FaInstagram, FaLinkedinIn,
} from 'react-icons/fa'

/* ─── DATA ─────────────────────────────────────────────── */
const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
]

const SERVICES = [
  'Web Development',
  'Mobile Apps',
  'IT Consulting',
  'Cybersecurity',
  'Cloud Solutions',
]

const SOCIALS = [
  { Icon: FaFacebookF, href: 'https://www.facebook.com/share/1ENX3fc2gX/', label: 'Facebook' },
  { Icon: FaInstagram, href: 'https://www.instagram.com/stack_mints_labs?igsh=MWJwbzJmN2lrMzZnMA==', label: 'Instagram' },
  { Icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/stackmints-labs-2a7611405', label: 'LinkedIn' },
]

const BOTTOM_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookie' },
]

/* ─── FOOTER ────────────────────────────────────────────── */
export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleSubmit = e => {
    e.preventDefault()
    if (!/.+@.+\..+/.test(email.trim())) {
      setStatus({ type: 'error', message: 'Please enter a valid email.' })
      return
    }
    setStatus({ type: 'success', message: 'Thanks! You are subscribed.' })
    setEmail('')
  }

  return (
    <>
      <style>{CSS}</style>

      <footer className="ft-root">
        {/* ── decorative orbs ── */}
        <div className="ft-orb ft-orb-l" />
        <div className="ft-orb ft-orb-r" />
        {/* grid lines overlay */}
        <div className="ft-grid" />

        <div className="ft-inner">

          {/* ══ TOP DIVIDER LINE ══ */}
          <div className="ft-top-line">
            <span className="ft-line-dot" />
            <span className="ft-line-body" />
            <span className="ft-line-dot" />
          </div>

          {/* ══ MAIN GRID ══ */}
          <div className="ft-grid-main">

            {/* ── Col 1: Brand ── */}
            <div className="ft-col ft-brand">
              <div className="ft-logo-row">
                <img src="/image/companylogo.png" alt="StackMints Labs logo" width={52} height={52} className="ft-logo-img" />
                <div className="ft-logo-text">
                  <span className="ft-logo-top">Stack</span>
                  <span className="ft-logo-bot">Mints Lab</span>
                </div>
              </div>

              <p className="ft-desc">
                Transforming businesses through innovative IT solutions and cutting-edge technology.
              </p>

              {/* social icons */}
              <div className="ft-socials">
                {SOCIALS.map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    aria-label={label} className="ft-social-btn">
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* ── Col 2: Quick Links ── */}
            <div className="ft-col">
              <h4 className="ft-col-title">
                <span className="ft-title-accent" />
                Quick Links
              </h4>
              <ul className="ft-list">
                {QUICK_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="ft-link">
                      <span className="ft-link-arrow">›</span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3: Services ── */}
            <div className="ft-col">
              <h4 className="ft-col-title">
                <span className="ft-title-accent" />
                Services
              </h4>
              <ul className="ft-list">
                {SERVICES.map(s => (
                  <li key={s}>
                    <a href="#" className="ft-link">
                      <span className="ft-link-arrow">›</span>
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 4: Newsletter ── */}
            <div className="ft-col">
              <h4 className="ft-col-title">
                <span className="ft-title-accent" />
                Stay Updated
              </h4>
              <p className="ft-newsletter-desc">
                Subscribe for latest updates and offers.
              </p>
              <form onSubmit={handleSubmit} className="ft-form">
                <div className="ft-input-row">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    aria-label="Email for newsletter"
                    className="ft-input"
                    required
                  />
                  <button type="submit" aria-label="Subscribe" className="ft-subscribe-btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                {status.message && (
                  <p className={`ft-status ${status.type === 'success' ? 'ft-ok' : 'ft-err'}`}>
                    {status.message}
                  </p>
                )}
              </form>

              {/* contact pill */}
              <a href="mailto:stackmintslabs@gmail.com" className="ft-contact-pill">
                <span className="ft-pill-dot" />
                stackmintslabs@gmail.com
              </a>
            </div>

          </div>

          {/* ══ BOTTOM BAR ══ */}
          <div className="ft-bottom">
            <p className="ft-copy">
              © {new Date().getFullYear()} <span className="ft-copy-brand">SML</span>. All rights reserved.
            </p>
            <div className="ft-bottom-links">
              {BOTTOM_LINKS.map(({ label, href }, i) => (
                <React.Fragment key={label}>
                  {i > 0 && <span className="ft-sep">·</span>}
                  <a href={href} className="ft-bottom-link">{label}</a>
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}

/* ─── STYLES ────────────────────────────────────────────── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

/* root */
.ft-root {
  position: relative; overflow: hidden;
  background: #05070d;
  border-top: 1px solid rgba(255,255,255,0.06);
  font-family: 'DM Sans', sans-serif;
  color: #e2e8f0;
}

/* orbs */
.ft-orb {
  position: absolute; border-radius: 50%;
  filter: blur(90px); pointer-events: none;
}
.ft-orb-l {
  width: 520px; height: 520px;
  background: radial-gradient(circle, rgba(0,229,255,0.07), transparent 70%);
  top: -160px; left: -160px;
}
.ft-orb-r {
  width: 520px; height: 520px;
  background: radial-gradient(circle, rgba(168,85,247,0.07), transparent 70%);
  bottom: -160px; right: -160px;
}

/* subtle grid overlay */
.ft-grid {
  position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* inner */
.ft-inner {
  position: relative; z-index: 1;
  max-width: 1200px; margin: 0 auto;
  padding: 0 24px 32px;
}

/* top decorative line */
.ft-top-line {
  display: flex; align-items: center; gap: 0;
  margin-bottom: 56px; padding-top: 4px;
}
.ft-line-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: linear-gradient(135deg, #00e5ff, #a855f7);
  flex-shrink: 0;
}
.ft-line-body {
  flex: 1; height: 1px;
  background: linear-gradient(90deg, rgba(0,229,255,0.4), rgba(168,85,247,0.2), transparent);
}

/* main grid */
.ft-grid-main {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.3fr;
  gap: 48px;
  margin-bottom: 52px;
}
@media (max-width: 900px) {
  .ft-grid-main { grid-template-columns: 1fr 1fr; gap: 36px; }
}
@media (max-width: 560px) {
  .ft-grid-main { grid-template-columns: 1fr; gap: 32px; }
}

/* col */
.ft-col {}

/* brand */
.ft-logo-row {
  display: flex; align-items: center; gap: 12px; margin-bottom: 18px;
}
.ft-logo-img { border-radius: 12px; }
.ft-logo-text { display: flex; flex-direction: column; }
.ft-logo-top {
  font-family: 'Syne', sans-serif; font-size: 1.15rem; font-weight: 800;
  color: #fff; line-height: 1.1;
}
.ft-logo-bot { font-size: 0.72rem; color: #64748b; letter-spacing: 0.06em; }

.ft-desc {
  color: #4a5568; font-size: 0.875rem; line-height: 1.75;
  margin-bottom: 22px; max-width: 240px;
}

/* social buttons */
.ft-socials { display: flex; gap: 10px; }
.ft-social-btn {
  width: 38px; height: 38px; border-radius: 10px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  display: flex; align-items: center; justify-content: center;
  color: #4a5568; text-decoration: none;
  transition: color 0.25s, background 0.25s, border-color 0.25s, transform 0.25s;
}
.ft-social-btn:hover {
  color: #00e5ff;
  background: rgba(0,229,255,0.08);
  border-color: rgba(0,229,255,0.3);
  transform: translateY(-3px);
}

/* col title */
.ft-col-title {
  font-family: 'Syne', sans-serif; font-size: 0.9rem; font-weight: 700;
  color: #fff; letter-spacing: 0.06em; text-transform: uppercase;
  margin-bottom: 20px;
  display: flex; align-items: center; gap: 10px;
}
.ft-title-accent {
  display: inline-block; width: 18px; height: 2px; border-radius: 2px;
  background: linear-gradient(90deg, #00e5ff, #a855f7);
  flex-shrink: 0;
}

/* list */
.ft-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
.ft-link {
  color: #4a5568; font-size: 0.875rem; text-decoration: none;
  display: flex; align-items: center; gap: 8px;
  transition: color 0.2s, gap 0.2s;
}
.ft-link:hover { color: #00e5ff; gap: 12px; }
.ft-link-arrow {
  font-size: 1rem; line-height: 1;
  color: rgba(0,229,255,0.3);
  transition: color 0.2s, transform 0.2s;
}
.ft-link:hover .ft-link-arrow { color: #00e5ff; transform: translateX(2px); }

/* newsletter */
.ft-newsletter-desc {
  color: #4a5568; font-size: 0.83rem; line-height: 1.6; margin-bottom: 16px;
}
.ft-form { margin-bottom: 18px; }
.ft-input-row { display: flex; gap: 8px; }
.ft-input {
  flex: 1; min-width: 0;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  color: #e2e8f0; border-radius: 10px; padding: 10px 14px;
  font-size: 0.83rem; font-family: 'DM Sans', sans-serif; outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.ft-input::placeholder { color: #334155; }
.ft-input:focus {
  border-color: rgba(0,229,255,0.4);
  box-shadow: 0 0 0 3px rgba(0,229,255,0.08);
}
.ft-subscribe-btn {
  width: 42px; height: 42px; flex-shrink: 0; border: none; cursor: pointer;
  border-radius: 10px;
  background: linear-gradient(135deg, #00e5ff, #0891b2);
  color: #050a14; display: flex; align-items: center; justify-content: center;
  transition: transform 0.2s, box-shadow 0.3s;
}
.ft-subscribe-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,229,255,0.25);
}
.ft-subscribe-btn:active { transform: scale(0.96); }

.ft-status { font-size: 0.78rem; margin-top: 8px; }
.ft-ok { color: #34d399; }
.ft-err { color: #f87171; }

/* contact pill */
.ft-contact-pill {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(0,229,255,0.06); border: 1px solid rgba(0,229,255,0.15);
  border-radius: 999px; padding: 6px 14px 6px 10px;
  font-size: 0.76rem; color: #64748b; text-decoration: none;
  transition: background 0.25s, color 0.25s, border-color 0.25s;
}
.ft-contact-pill:hover {
  background: rgba(0,229,255,0.12); color: #00e5ff; border-color: rgba(0,229,255,0.3);
}
.ft-pill-dot {
  width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0;
  background: #00e5ff;
  box-shadow: 0 0 6px rgba(0,229,255,0.8);
  animation: pulse-dot 2s ease-in-out infinite;
}
@keyframes pulse-dot {
  0%,100% { box-shadow: 0 0 4px rgba(0,229,255,0.6); }
  50%      { box-shadow: 0 0 12px rgba(0,229,255,1); }
}

/* bottom bar */
.ft-bottom {
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,0.05);
}
.ft-copy { font-size: 0.8rem; color: #334155; }
.ft-copy-brand {
  font-family: 'Syne', sans-serif; font-weight: 700;
  background: linear-gradient(90deg, #00e5ff, #a855f7);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.ft-bottom-links { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.ft-bottom-link {
  font-size: 0.78rem; color: #334155; text-decoration: none;
  transition: color 0.2s;
}
.ft-bottom-link:hover { color: #00e5ff; }
.ft-sep { color: #1e293b; }
`