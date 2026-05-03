import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "SML - IT Solutions & Web Development | Bhopal",
    template: "%s | Stack Mints LAb"
  },
  description: "Transform your business with cutting-edge IT solutions, website development, mobile applications, and innovative technology services. 100+ projects delivered across India.",
  keywords: ["web development", "mobile app development", "IT consulting", "cybersecurity", "cloud solutions", "data analytics", "Jharkhand IT company", "software development India"],
  authors: [{ name: "Stack Mints Labs" }],
  creator: "Stack Mints LAb",
  publisher: "Stack Mints LAb",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vpm-solutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "VPM - IT Solutions & Web Development",
    description: "Transform your business with cutting-edge IT solutions, website development, mobile applications, and innovative technology services.",
    url: 'https://vpm-solutions.com',
    siteName: 'Stack Mints LAb',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/image/companylogo.png',
        width: 1200,
        height: 630,
        alt: 'Stack Mints Lab Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "SML - IT Solutions & Web Development",
    description: "Transform your business with cutting-edge IT solutions.",
    images: ['/image/companylogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
