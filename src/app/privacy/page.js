'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const PrivacyPolicy = () => {
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
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Privacy Policy</h1>
            <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">Last updated: January 23, 2026</p>
          </div>

          {/* Content */}
          <div className="bg-linear-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10 shadow-2xl">

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Stack Mints Labs (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-3">We may collect information about you in a variety of ways, including:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you provide</li>
                <li><strong>Technical Data:</strong> IP address, browser type, operating system, and website usage patterns</li>
                <li><strong>Form Submissions:</strong> Information provided through contact forms and inquiries</li>
                <li><strong>Cookies:</strong> Data collected through cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-3">We use the information we collect for various purposes:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                <li>To provide and maintain our services</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send newsletters and marketing communications</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
                <li>To prevent fraud and enhance security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Protection</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                Our website may contain links to third-party services and websites. We are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party services before providing your information.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We use services such as Resend for email delivery and may use other third-party services for analytics and functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights and Choices</h2>
              <p className="text-gray-300 leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We use cookies to enhance your experience on our website. Cookies are small files stored on your device that help us remember your preferences and improve our services. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. GDPR and Data Privacy Laws</h2>
              <p className="text-gray-300 leading-relaxed">
                We comply with applicable data protection laws, including the General Data Protection Regulation (GDPR). If you are located in the European Union or other jurisdictions with similar data protection laws, you have additional rights regarding your personal data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                If you have questions or concerns about our privacy practices, please contact us at:
              </p>
              <div className="bg-slate-900/50 rounded-xl p-6 border border-white/10">
                <p className="text-gray-300 mb-2"><strong>Email:</strong> SMLitsolution@gmail.com</p>
                <p className="text-gray-300 mb-2"><strong>Phone:</strong> +91 6204899360</p>
                <p className="text-gray-300"><strong>Address:</strong> Stack Mints Labs, Jharkhand, India</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last updated&quot; date. Your continued use of the website constitutes your acceptance of the updated policy.
              </p>
            </section>

          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link href="/" className="inline-block bg-linear-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition duration-300 font-bold">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PrivacyPolicy
