'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const CookiePolicy = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-linear-to-br from-slate-950 via-cyan-900 to-purple-950 relative overflow-hidden pt-32 pb-20">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl bottom-0 right-0"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Cookie Policy</h1>
            <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">Last updated: January 23, 2026</p>
          </div>

          {/* Content */}
          <div className="bg-linear-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10 shadow-2xl">

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-300 leading-relaxed">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit our website. They contain information about your browsing activity and help us remember your preferences. Cookies are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Types of Cookies We Use</h2>
              <p className="text-gray-300 leading-relaxed mb-3">Our website uses the following types of cookies:</p>
              <ul className="space-y-4 ml-2">
                <li>
                  <strong className="text-white">Essential Cookies:</strong>
                  <p className="text-gray-300 mt-1">These cookies are necessary for the website to function properly. They enable you to navigate the website and use its features. Without these cookies, services like shopping carts or login functionality would not work.</p>
                </li>
                <li>
                  <strong className="text-white">Analytics Cookies:</strong>
                  <p className="text-gray-300 mt-1">These cookies help us understand how visitors interact with our website. They collect information such as the number of visitors, pages visited, and the duration of visits. This data helps us improve the quality of our website.</p>
                </li>
                <li>
                  <strong className="text-white">Preference Cookies:</strong>
                  <p className="text-gray-300 mt-1">These cookies remember your preferences and choices, such as language preference, font size, and other customizations, to personalize your experience on future visits.</p>
                </li>
                <li>
                  <strong className="text-white">Marketing Cookies:</strong>
                  <p className="text-gray-300 mt-1">These cookies are used to track your browsing activity across different websites to deliver targeted advertising and measure the effectiveness of our marketing campaigns.</p>
                </li>
                <li>
                  <strong className="text-white">Third-Party Cookies:</strong>
                  <p className="text-gray-300 mt-1">These are cookies set by parties other than Stack Mints Labs, such as advertising networks, analytics providers, and social media platforms.</p>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-3">We use cookies for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                <li>To provide and maintain our website services</li>
                <li>To improve website performance and user experience</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To remember your preferences and login information</li>
                <li>To deliver personalized content and advertisements</li>
                <li>To prevent fraud and enhance security</li>
                <li>To measure the effectiveness of marketing campaigns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Duration of Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-3">Cookies have different lifespans depending on their type:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                <li><strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> These remain on your device for a set period (from days to years) or until you delete them</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Controlling Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                <li>View what cookies are stored on your device</li>
                <li>Delete cookies from your device</li>
                <li>Block cookies from being set</li>
                <li>Disable cookies for specific websites</li>
                <li>Clear cookies when closing your browser</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Please note that disabling cookies may affect the functionality and performance of our website. Some features may not work properly without cookies enabled.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Cookie Policy</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                We use the following third-party services that may set cookies:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                <li><strong>Google Analytics:</strong> For website analytics and traffic analysis</li>
                <li><strong>Resend:</strong> For email service delivery</li>
                <li><strong>Facebook Pixel:</strong> For advertising and conversion tracking</li>
                <li><strong>Social Media Platforms:</strong> For social media integration and sharing</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                These third parties have their own privacy policies and cookie policies. We encourage you to review their policies to understand how they use cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Do Not Track (DNT)</h2>
              <p className="text-gray-300 leading-relaxed">
                Some browsers include a &quot;Do Not Track&quot; feature. Currently, there is no industry standard for recognizing DNT signals. We do not currently respond to DNT browser signals. However, you can use other tools to control cookies and online tracking as described in Section 5.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Cookie Consent</h2>
              <p className="text-gray-300 leading-relaxed">
                By continuing to use our website, you consent to our use of cookies as described in this Cookie Policy. If you do not agree with our use of cookies, please modify your browser settings or refrain from using our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. GDPR and Cookie Law Compliance</h2>
              <p className="text-gray-300 leading-relaxed">
                We comply with applicable cookie laws and regulations, including the General Data Protection Regulation (GDPR) and the ePrivacy Directive. For users in the European Union, we obtain your consent before placing non-essential cookies on your device.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                If you have questions about our Cookie Policy or our use of cookies, please contact us at:
              </p>
              <div className="bg-slate-900/50 rounded-xl p-6 border border-white/10">
                <p className="text-gray-300 mb-2"><strong>Email:</strong> vpmitsolution@gmail.com</p>
                <p className="text-gray-300 mb-2"><strong>Phone:</strong> +91 6204899360</p>
                <p className="text-gray-300"><strong>Address:</strong> Stack Mints Labs, Jharkhand, India</p>
              </div>
            </section>

          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link href="/" className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition duration-300 font-bold">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CookiePolicy
