import localFont from "next/font/local";
import "./globals.css";
import { Lalezar, Montserrat, Inter } from 'next/font/google';

const lalezar = Lalezar({
  subsets: ['latin'],
  weight: '400',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Yalla, DevRel LLC',
  description: 'Developer Relations impact you can measure',
  icons: {
    icon: '/favicon.ico', 
    shortcut: '/favicon.ico', 
    apple: '/apple-touch-icon.png', 
    other: [
      {
        rel: 'manifest',
        url: '/manifest.json',
      },
    ],
  },
  keywords: ['DevRel', 'Developer Relations', 'Consulting', 'Yalla DevRel'],
  authors: [{ name: 'Yalla, DevRel LLC', url: 'https://yalladevrel.com' }],
  openGraph: {
    title: 'Yalla, DevRel LLC',
    description: 'Developer Relations impact you can measure',
    url: 'https://yalladevrel.com',
    siteName: 'Yalla, DevRel LLC',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yalla, DevRel LLC',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yalladevrel',
    creator: '@hummusonrails',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
