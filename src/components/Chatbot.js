'use client'

import React, { useState, useRef, useEffect } from 'react'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! 👋 Welcome to SML. How can I help you today?' }
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickReplies = [
    { text: '💼 Services', response: 'We offer Web Development, Mobile App Development, UI/UX Design, SEO Optimization, and E-commerce Solutions. Which service interests you?' },
    { text: '💰 Pricing', response: 'We have three plans:\n• Standard: ₹7,999 (5 pages)\n• Premium: ₹13,999 (12 pages) - Best Value!\n• Custom: Based on requirements\n\nWould you like more details about any plan?' },
    { text: '📞 Contact', response: 'You can reach us at:\n📱 Phone: +91 9131558153\n📧 Email: vpmitsolution@gmail.com\n\nOr fill out our contact form and we\'ll get back to you within 24 hours!' },
    { text: '⏱️ Timeline', response: 'Our typical project timeline is:\n• Standard websites: 7-10 days\n• Premium websites: 14-21 days\n• Custom projects: 3-8 weeks\n\nWe pride ourselves on fast, quality delivery! 🚀' }
  ]

  const handleSend = (text = inputValue) => {
    if (!text.trim()) return

    // Add user message
    const newMessages = [...messages, { type: 'user', text }]
    setMessages(newMessages)
    setInputValue('')

    // Get multiple bot responses for multi-intent queries
    setTimeout(() => {
      const botResponses = getBotResponse(text.toLowerCase())

      // If multiple responses, send them sequentially with delay
      if (Array.isArray(botResponses)) {
        let updatedMessages = [...newMessages]
        botResponses.forEach((response, index) => {
          setTimeout(() => {
            updatedMessages = [...updatedMessages, { type: 'bot', text: response }]
            setMessages([...updatedMessages])
          }, 800 * (index + 1))
        })
      } else {
        setMessages([...newMessages, { type: 'bot', text: botResponses }])
      }
    }, 600)
  }

  const getBotResponse = (userMessage) => {
    const responses = []

    // Detect multiple intents in the message
    const hasPricing = userMessage.match(/price|cost|pricing|how much|budget|charge|fee/i)
    const hasService = userMessage.match(/service|what do you|offer|provide|do you make|can you build/i)
    const hasContact = userMessage.match(/contact|phone|email|call|reach|talk to|speak with/i)
    const hasTimeline = userMessage.match(/time|how long|duration|fast|quick|delivery|when/i)
    const hasPayment = userMessage.match(/payment|pay|installment|advance|method/i)
    const hasSupport = userMessage.match(/support|help|issue|problem|maintenance|after|update/i)
    const hasTech = userMessage.match(/technology|tech|stack|framework|language|platform|use/i)
    const hasDomain = userMessage.match(/domain|hosting|renewal|server|ssl/i)
    const hasWhy = userMessage.match(/why|best|choose|experience|portfolio|work|good/i)

    // Web specific
    const hasWeb = userMessage.match(/web|website|site|page|landing/i)
    const hasApp = userMessage.match(/app|mobile|android|ios|application/i)
    const hasSEO = userMessage.match(/seo|optimization|google|rank|search engine/i)
    const hasEcommerce = userMessage.match(/ecommerce|e-commerce|shop|store|online store|selling/i)

    // Specific plan queries
    const hasStandard = userMessage.match(/standard|basic|simple|small/i)
    const hasPremium = userMessage.match(/premium|advanced|professional|best/i)
    const hasCustom = userMessage.match(/custom|enterprise|large|complex/i)

    // Multi-intent: Service + Pricing
    if (hasService && hasPricing) {
      responses.push('🚀 Services & Pricing Overview:\n\n🌐 Web Development:\n• Standard: ₹7,999 (5 pages)\n• Premium: ₹13,999 (12 pages)\n• Custom: Based on requirements\n\n📱 Mobile Apps:\n• Starting from ₹50,000\n• Native & Cross-platform\n\n🔍 SEO Services:\n• Monthly: ₹5,000-15,000\n• One-time: ₹20,000+\n\n🛒 E-commerce:\n• Basic: ₹25,000\n• Advanced: ₹50,000+')
      responses.push('💡 All our web plans include free domain, hosting, SEO, and mobile responsiveness!\n\nWhich service are you most interested in? I can provide detailed information!')
      return responses
    }

    // Multi-intent: Service + Timeline
    if (hasService && hasTimeline) {
      responses.push('⚡ Services & Delivery Timeline:\n\n🌐 Websites:\n• Standard: 7-10 days\n• Premium: 14-21 days\n• Custom: 3-8 weeks\n\n📱 Mobile Apps:\n• Basic: 4-6 weeks\n• Complex: 8-12 weeks\n\n🛒 E-commerce:\n• Basic Store: 2-3 weeks\n• Advanced: 4-6 weeks\n\n🔍 SEO Setup:\n• Initial: 1-2 weeks\n• Ongoing: Monthly')
      responses.push('We offer expedited delivery for urgent projects! 🚀\n\nWhat type of project do you have in mind?')
      return responses
    }

    // Multi-intent: Pricing + Timeline
    if (hasPricing && hasTimeline && !hasService) {
      responses.push('💰 Pricing & Timeline Combined:\n\n⚡ Fast Track (7-10 days):\n• Standard Plan: ₹7,999\n• Perfect for quick launches\n\n✨ Premium (14-21 days):\n• Premium Plan: ₹13,999\n• More features, still fast!\n\n🎯 Custom (3-8 weeks):\n• Custom pricing\n• Fully tailored solution')
      responses.push('The investment depends on your timeline and features needed.\n\nShall we discuss your specific requirements? 📞 +91 9131558153')
      return responses
    }

    // Multi-intent: Contact + Service
    if (hasContact && hasService) {
      responses.push('📞 Let\'s Discuss Your Project!\n\n📱 Call/WhatsApp: +91 9131558153\n📧 Email: stackmintslabs@gmail.com\n\n⏰ Available: Mon-Sat, 9 AM - 7 PM\n\nBest way to start:\n1. Call us for instant consultation\n2. WhatsApp your requirements\n3. Email for detailed discussion')
      responses.push('I can also answer your questions right here! What service are you interested in? 🌐 Web, 📱 App, 🛒 E-commerce, or 🔍 SEO?')
      return responses
    }

    // Pricing related queries
    if (hasPricing) {
      if (hasStandard) {
        return '💼 Standard Plan - ₹7,999\n\nPerfect for small businesses!\n\n✓ 5 Pages Website\n✓ 1 Year Free Domain (.com/.in/.org)\n✓ 1 Year Free Hosting\n✓ Premium Design\n✓ SEO Optimization\n✓ Mobile Responsive\n✓ Contact Form\n✓ Social Media Links\n✓ 30 Days Free Support\n\n+ 18% GST (₹1,440)\nTotal: ₹9,439\n\nDelivery: 7-10 days ⚡\n\nReady to get started? Call +91 9131558153'
      } else if (hasPremium) {
        return '✨ Premium Plan - ₹13,999 (BEST VALUE! 🌟)\n\nMost Popular Choice!\n\n✓ 12 Pages Website\n✓ 1 Year Free Domain\n✓ 1 Year Free Hosting\n✓ Advanced SEO\n✓ Email Integration (5 accounts)\n✓ Analytics Dashboard\n✓ Priority Support\n✓ Blog Section\n✓ Security Features\n✓ Contact Forms\n✓ Social Media Integration\n\n+ 18% GST (₹2,520)\nTotal: ₹16,519\n\nAnnual Hosting Renewal: ₹4,000\nDelivery: 14-21 days\n\nLet\'s discuss your project! 📞 +91 9131558153'
      } else if (hasCustom) {
        return '🎯 Custom Plan - Based on Requirements\n\nTailored just for you!\n\n✓ Unlimited Pages\n✓ Custom Features\n✓ E-commerce Integration\n✓ Payment Gateway\n✓ Custom Database Design\n✓ Advanced Functionality\n✓ 24/7 Support\n✓ Training & Documentation\n✓ Ongoing Maintenance\n✓ Dedicated Project Manager\n\nPricing: Starting from ₹25,000\nTimeline: 4-12 weeks\n\nLet\'s create something amazing together!\n\nContact us for personalized quote:\n📞 +91 9131558153\n📧 stackmintslabs@gmail.com'
      }

      responses.push('💰 Our Pricing Plans:\n\n💼 Standard - ₹7,999 (5 pages)\n   Delivery: 7-10 days\n\n✨ Premium - ₹13,999 (12 pages) ⭐ BEST VALUE\n   Delivery: 14-21 days\n\n🎯 Custom - Quote based (Unlimited)\n   Delivery: 4-12 weeks')
      responses.push('All plans include:\n• Free Domain & Hosting (1 year)\n• Mobile Responsive Design\n• SEO Optimization\n• Professional Support\n• SSL Certificate\n• 30 Days Free Support\n\n+ 18% GST on all plans\n\nWhich plan suits your needs? Or ask me "compare plans" for detailed comparison!')
      return responses
    }

    // Service related queries
    if (hasService) {
      if (hasWeb) {
        return '🌐 Web Development Services\n\nWe create stunning, fast, and secure websites!\n\n✅ Types We Build:\n• Corporate Websites\n• Portfolio Websites\n• Landing Pages\n• Blog/News Websites\n• Educational Websites\n• Real Estate Websites\n• Restaurant Websites\n\n🎨 Features:\n• Custom Design\n• Mobile Responsive\n• Fast Loading\n• SEO Optimized\n• Secure (SSL)\n• Easy to Update\n\n💻 Technologies: React, Next.js, WordPress\n\n💰 Starting: ₹7,999\n⏱️ Delivery: 7-21 days\n\nReady to build your website? 📞 +91 9131558153'
      } else if (hasApp) {
        return '📱 Mobile App Development\n\nBuild powerful mobile apps for iOS & Android!\n\n✅ App Types:\n• Business Apps\n• E-commerce Apps\n• Social Media Apps\n• On-demand Services Apps\n• Educational Apps\n• Healthcare Apps\n• Food Delivery Apps\n\n🎯 Features:\n• Native & Cross-platform\n• Push Notifications\n• Payment Integration\n• GPS/Maps Integration\n• User Authentication\n• Admin Panel\n• Analytics\n\n💻 Technologies: React Native, Flutter\n\n💰 Starting: ₹50,000\n⏱️ Delivery: 6-12 weeks\n\nLet\'s discuss your app idea! 📞 +91 9131558153'
      } else if (hasSEO) {
        return '🔍 SEO Optimization Services\n\nRank higher on Google & get more customers!\n\n✅ What We Do:\n• Keyword Research & Analysis\n• On-page SEO Optimization\n• Technical SEO Audit\n• Content Optimization\n• Link Building\n• Local SEO\n• Performance Optimization\n• Google My Business Setup\n• Monthly Reporting\n\n📈 Results You Can Expect:\n• Higher Google Rankings\n• Increased Organic Traffic\n• Better Conversion Rates\n• More Business Inquiries\n\n💰 Pricing:\n• One-time: ₹20,000+\n• Monthly: ₹5,000-15,000\n\n⏱️ Results: 3-6 months\n\nIncrease your visibility! 📞 +91 9131558153'
      } else if (hasEcommerce) {
        return '🛒 E-commerce Solutions\n\nStart selling online today!\n\n✅ Store Features:\n• Product Management\n• Shopping Cart\n• Payment Gateway Integration\n• Inventory Management\n• Order Management\n• Customer Management\n• Discount & Coupons\n• Multiple Payment Options\n• Shipping Integration\n• Invoice Generation\n• Analytics & Reports\n\n💳 Payment Options:\n• Razorpay, PayU, Paytm\n• UPI, Cards, Net Banking\n• COD (Cash on Delivery)\n\n🚚 Shipping Partners:\n• Shiprocket, Delhivery, Dunzo\n\n💰 Pricing:\n• Basic: ₹25,000\n• Advanced: ₹50,000+\n\n⏱️ Delivery: 3-6 weeks\n\nReady to launch your store? 📞 +91 9131558153'
      }

      responses.push('🚀 Our Complete Services:\n\n🌐 Web Development\n   Modern, responsive websites\n   Starting: ₹7,999\n\n📱 Mobile App Development\n   iOS & Android apps\n   Starting: ₹50,000\n\n🎨 UI/UX Design\n   Beautiful, user-friendly designs\n   Starting: ₹10,000\n\n🔍 SEO Optimization\n   Rank higher on Google\n   Starting: ₹5,000/month')
      responses.push('🛒 E-commerce Solutions\n   Online stores that sell\n   Starting: ₹25,000\n\n☁️ Cloud Hosting\n   Fast & secure hosting\n   Starting: ₹3,000/year\n\n💻 Custom Software\n   Tailored solutions\n   Custom pricing\n\n🛠️ Maintenance & Support\n   Ongoing support\n   From ₹2,000/month\n\nWhich service interests you? Ask me for details!')
      return responses
    }

    // Contact information
    if (hasContact) {
      return '📞 Contact SML - Let\'s Build Something Amazing!\n\n📱 Phone/WhatsApp: +91 9131558153\n📧 Email: stackmintslabs@gmail.com\n💬 WhatsApp: Click the green button below\n🌐 Website: Fill our contact form\n\n⏰ Business Hours:\n   Mon-Sat: 9 AM - 7 PM\n   Sun: Emergency support only\n\n⚡ Quick Response:\n• Phone: Instant\n• WhatsApp: Within 10 mins\n• Email: Within 1-2 hours\n\n💡 Best way to start:\n1. Call for instant consultation\n2. WhatsApp your requirements\n3. Email for detailed discussion\n\nWhat project do you have in mind?'
    }

    // Timeline queries
    if (hasTimeline) {
      responses.push('⏱️ Project Timeline & Delivery:\n\n⚡ Websites:\n• Standard (5 pages): 7-10 days\n• Premium (12 pages): 14-21 days\n• Custom: 3-8 weeks\n\n📱 Mobile Apps:\n• Basic App: 4-6 weeks\n• Medium Complexity: 6-10 weeks\n• Complex App: 10-16 weeks\n\n🛒 E-commerce:\n• Basic Store: 2-3 weeks\n• Advanced Store: 4-6 weeks')
      responses.push('🔍 Other Services:\n• SEO Setup: 1-2 weeks\n• Landing Page: 3-5 days\n• Logo Design: 2-3 days\n\n✨ Our Process:\n1. Requirements (1-2 days)\n2. Design (30% time)\n3. Development (50% time)\n4. Testing (15% time)\n5. Deployment (5% time)\n\nWe provide:\n• Regular updates 📊\n• Preview links 🔗\n• Milestone tracking ✅\n\nNeed it faster? We offer rush delivery at 20% premium!\n\nCall: +91 9131558153')
      return responses
    }

    // Payment queries
    if (hasPayment) {
      return '💳 Payment Information:\n\n💰 Payment Structure:\n• 50% Advance (Before work starts)\n• 50% On completion (Before delivery)\n\n✅ We Accept:\n• UPI (GPay, PhonePe, Paytm)\n• Bank Transfer (NEFT/RTGS/IMPS)\n• Credit/Debit Cards\n• PayPal (International clients)\n• Cryptocurrency (For large projects)\n\n📄 Invoice & GST:\n• 18% GST applicable on all services\n• Proper invoice provided\n• GST registration available on request\n\n💡 For Projects Above ₹50,000:\n• 30% Advance\n• 40% Mid-project\n• 30% On completion\n\n🔒 Secure Payment:\n• Payment gateway protected\n• Money-back guarantee\n• Escrow available for large projects\n\nFlexible payment terms for long-term contracts!\n\nCall us: +91 9131558153'
    }

    // Support queries
    if (hasSupport) {
      responses.push('🛠️ Support & Maintenance:\n\n✅ Free Support (30 Days):\n• Bug fixes\n• Minor content updates\n• Technical guidance\n• Email/Phone support\n• Quick response time\n\n💼 Paid Support Plans:\n\n📦 Basic - ₹2,000/month\n• 2 hours support/month\n• Email support\n• Content updates\n• Bug fixes')
      responses.push('⭐ Premium - ₹5,000/month\n• 5 hours support/month\n• Priority phone support\n• Regular updates\n• Security patches\n• Performance monitoring\n\n🚀 Enterprise - Custom\n• Unlimited support hours\n• Dedicated support team\n• 24/7 availability\n• On-site support option\n\nAll plans include:\n• Security updates 🔒\n• Backup management 💾\n• Uptime monitoring 📊\n• Performance optimization ⚡\n\nNeed help now? 📞 +91 9131558153')
      return responses
    }

    // Technology queries
    if (hasTech) {
      responses.push('💻 Technologies & Tech Stack:\n\n🎨 Frontend Development:\n• React.js / Next.js (Modern)\n• Vue.js / Nuxt.js\n• Angular\n• HTML5, CSS3, JavaScript\n• TypeScript\n• Tailwind CSS, Bootstrap\n• SASS/SCSS\n\n⚙️ Backend Development:\n• Node.js / Express.js\n• PHP / Laravel\n• Python / Django, Flask\n• Ruby on Rails\n• Java / Spring Boot')
      responses.push('🗄️ Databases:\n• MongoDB (NoSQL)\n• MySQL / PostgreSQL (SQL)\n• Firebase\n• Redis (Caching)\n\n📱 Mobile Development:\n• React Native (Cross-platform)\n• Flutter (Cross-platform)\n• Swift (iOS Native)\n• Kotlin (Android Native)\n\n☁️ Cloud & DevOps:\n• AWS, Google Cloud, Azure\n• Docker, Kubernetes\n• CI/CD Pipelines\n• Git, GitHub, GitLab\n\n🔧 Other Tools:\n• WordPress, Shopify\n• Payment Gateways\n• APIs & Integrations\n• SEO Tools\n\nWe use modern, industry-standard technologies! 🚀')
      return responses
    }

    // Domain & Hosting
    if (hasDomain) {
      return '🌐 Domain & Hosting Details:\n\n✅ What\'s Included (Year 1):\n• Free domain registration (.com/.in/.org)\n• Free cloud hosting (SSD)\n• Free SSL certificate (HTTPS)\n• Professional email (5 accounts)\n• 99.9% uptime guarantee\n• Daily backups\n• DDoS protection\n• 24/7 monitoring\n\n💰 Renewal Costs (Year 2+):\n• Domain: ₹1,000-1,500/year\n  (.com: ₹1,200, .in: ₹800)\n• Hosting:\n  - Standard: ₹3,000-4,000/year\n  - Premium: ₹4,000-6,000/year\n  - E-commerce: ₹6,000-10,000/year\n• SSL: ₹2,000/year (Optional - Free available)\n\n📊 Hosting Specifications:\n• SSD Storage: 10-50 GB\n• Bandwidth: Unlimited\n• Email Accounts: 5-20\n• Databases: Unlimited\n• Subdomains: Unlimited\n\n✨ Premium plans include ₹4,000 annual hosting!\n\nQuestions? Call: +91 9131558153'
    }

    // Why choose us
    if (hasWhy) {
      responses.push('🌟 Why Choose SML?\n\n🏆 Track Record:\n• 10+ Years in Business\n• 500+ Projects Completed\n• 100+ Happy Clients\n• 4.9/5 Average Rating\n\n⚡ Fast Delivery:\n• Standard websites: 7-10 days\n• Premium websites: 14-21 days\n• Rush delivery available\n\n💰 Affordable Pricing:\n• Starting from ₹7,999\n• No hidden charges\n• Transparent pricing\n• Value for money')
      responses.push('✨ Quality Work:\n• Modern, responsive design\n• Clean, maintainable code\n• SEO optimized\n• Fast loading speed\n• Security focused\n\n🤝 Great Support:\n• 30 days free support\n• Quick response time\n• Friendly team\n• Clear communication\n• Regular updates\n\n🎯 What Makes Us Different:\n• We care about your success\n• Long-term partnerships\n• Honest advice\n• No technical jargon\n• Results-driven approach\n\nWe don\'t just build websites, we build relationships! 🤝\n\nReady to start? 📞 +91 9131558153')
      return responses
    }

    // Greetings
    if (userMessage.match(/hello|hi|hey|good morning|good afternoon|good evening|namaste/i)) {
      const hour = new Date().getHours()
      let greeting = 'Hello'
      if (hour < 12) greeting = 'Good morning'
      else if (hour < 17) greeting = 'Good afternoon'
      else greeting = 'Good evening'

      return `${greeting}! 👋 Welcome to SML!\n\nI\'m your AI assistant, here to help you with:\n\n🌐 Web Development\n📱 Mobile App Development\n💰 Pricing & Plans\n⏱️ Project Timeline\n📞 Contact Information\n🛠️ Support & Services\n\nYou can ask me things like:\n• "What services do you offer?"\n• "How much does a website cost?"\n• "How long will it take?"\n• "Tell me about premium plan"\n• "I need an e-commerce store"\n\nWhat would you like to know?`
    }

    // Thanks
    if (userMessage.match(/thank|thanks|appreciate|awesome|great|perfect|good/i)) {
      return 'You\'re very welcome! 😊 Happy to help!\n\nIs there anything else you\'d like to know about:\n• Our services & pricing\n• Project timeline\n• Technologies we use\n• Starting your project\n\nFeel free to ask or reach out directly:\n📞 +91 9131558153\n📧 stackmintslabs@gmail.com\n\nHave a wonderful day! 🌟'
    }

    // Goodbye
    if (userMessage.match(/bye|goodbye|see you|talk later|gtg|got to go/i)) {
      return 'Goodbye! 👋 Thanks for chatting with us!\n\nRemember, we\'re just a call away:\n📞 +91 9131558153\n📧 stackmintslabs@gmail.com\n💬 WhatsApp: Green button below\n\nLooking forward to working with you!\n\nHave a wonderful day! 🌟✨'
    }

    // Compare plans
    if (userMessage.match(/compare|difference|which plan|best plan|recommend/i)) {
      responses.push('📊 Plan Comparison:\n\n💼 STANDARD (₹7,999):\n✓ 5 Pages\n✓ Basic SEO\n✓ 30 Days Support\n⏱️ 7-10 days\n👥 Best for: Startups, Small business\n\n✨ PREMIUM (₹13,999) ⭐ RECOMMENDED:\n✓ 12 Pages\n✓ Advanced SEO\n✓ Email Integration\n✓ Analytics\n✓ Priority Support\n⏱️ 14-21 days\n👥 Best for: Growing businesses')
      responses.push('🎯 CUSTOM (Quote based):\n✓ Unlimited Pages\n✓ Custom Features\n✓ E-commerce\n✓ 24/7 Support\n⏱️ 4-12 weeks\n👥 Best for: Large businesses, E-commerce\n\n💡 Most Popular: Premium Plan (70% clients choose this!)\n\n🎁 Premium Advantages:\n• 7 more pages than Standard\n• Advanced features\n• Better ROI\n• Only ₹6,000 more\n\nWhich plan suits your needs? I can help you decide! 📞 +91 9131558153')
      return responses
    }

    // Default response for unmatched queries
    return 'Thanks for your message! 😊\n\nI can help you with:\n\n🌐 Services: "What services do you offer?"\n💰 Pricing: "How much does a website cost?"\n⏱️ Timeline: "How long will it take?"\n📞 Contact: "How can I reach you?"\n💳 Payment: "What payment methods?"\n🛠️ Support: "Do you provide support?"\n💻 Technology: "What technologies do you use?"\n\nOr ask me anything specific!\n\nYou can also:\n📞 Call: +91 9131558153\n📧 Email: stackmintslabs@gmail.com\n💬 WhatsApp: Click green button\n\nHow can I help you today?'
  }

  const handleQuickReply = (reply) => {
    setMessages([...messages,
    { type: 'user', text: reply.text },
    { type: 'bot', text: reply.response }
    ])
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 left-6 z-50 p-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-110 transition-all duration-300 ${isOpen ? 'rotate-90' : ''}`}
        aria-label="Toggle Chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-400/30 flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="font-bold text-white">SML Assistant</h3>
                <p className="text-xs text-white/80">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 p-2 rounded-full transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${message.type === 'user'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-br-none'
                  : 'bg-slate-800 text-gray-200 rounded-bl-none border border-cyan-400/20'
                  }`}>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-400 mb-2">Quick Questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 rounded-full border border-cyan-400/30 transition"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-cyan-400/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-slate-800 text-white px-4 py-2.5 rounded-full border border-cyan-400/30 focus:border-cyan-400 focus:outline-none text-sm"
              />
              <button
                onClick={() => handleSend()}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-2.5 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

export default Chatbot
