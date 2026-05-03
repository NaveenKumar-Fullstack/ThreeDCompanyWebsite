'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const TermsAndConditions = () => {
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
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Terms and Conditions</h1>
            <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300">Last updated: January 23, 2026</p>
          </div>

          {/* Content */}
          <div className="bg-linear-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10 shadow-2xl">

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using the Stack Mints Labs website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                Permission is granted to temporarily download one copy of the materials (information or software) on Stack Mints Labs website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or &quot;mirroring&quot; the materials on any other server</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed">
                The materials on Stack Mints Labs website are provided on an &quot;as is&quot; basis. Stack Mints Labs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
              <p className="text-gray-300 leading-relaxed">
                In no event shall Stack Mints Labs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Stack Mints Labs website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Accuracy of Materials</h2>
              <p className="text-gray-300 leading-relaxed">
                The materials appearing on the Stack Mints Labs website could include technical, typographical, or photographic errors. Stack Mints Labs does not warrant that any of the materials on the website are accurate, complete, or current. Stack Mints Labs may make changes to the materials contained on the website at any time without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Links</h2>
              <p className="text-gray-300 leading-relaxed">
                Stack Mints Labs has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Stack Mints Labs of the site. Use of any such linked website is at the user&apos;s own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Modifications</h2>
              <p className="text-gray-300 leading-relaxed">
                Stack Mints Labs may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction where Stack Mints Labs is located, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. User Responsibilities</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                When using our website and services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                <li>Provide accurate and complete information when requested</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use the website only for lawful purposes</li>
                <li>Not engage in any conduct that restricts or inhibits anyone&apos;s use of the website</li>
                <li>Not transmit obscene, offensive, or unlawful material</li>
                <li>Not disrupt the normal flow of dialogue within the website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Intellectual Property Rights</h2>
              <p className="text-gray-300 leading-relaxed">
                All content on the Stack Mints Labs website, including text, graphics, logos, images, and software, is the property of Stack Mints Labs or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, transmit, or display any content without prior written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Third-Party Services and Links</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may contain links to third-party services. We are not responsible for the content, accuracy, or practices of these third-party websites. Your use of third-party services is subject to their own terms and conditions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">12. Payment and Billing</h2>
              <p className="text-gray-300 leading-relaxed">
                If you purchase services or products from Stack Mints Labs, you agree to pay all charges incurred in accordance with the pricing and payment terms provided at the time of purchase. All payments must be made in the currency and method specified.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">13. Cancellation and Refunds</h2>
              <p className="text-gray-300 leading-relaxed">
                Refund policies are determined on a case-by-case basis. Please contact our customer service team for information about cancellations and refunds for specific services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">14. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                To the maximum extent permitted by law, Stack Mints Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">15. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                If you have questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="bg-slate-900/50 rounded-xl p-6 border border-white/10">
                <p className="text-gray-300 mb-2"><strong>Email:</strong> SMLitsolution@gmail.com</p>
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

export default TermsAndConditions
