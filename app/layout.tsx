import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Youssef Berrissoul - IT Security & Digital Trust Engineering Student',
  description: 'Portfolio de Youssef Berrissoul, étudiant en Ingénierie de Sécurité IT et Confiance Numérique. Passionné par la cybersécurité et les nouvelles technologies.',
  keywords: ['cybersecurity', 'IT security', 'digital trust', 'engineering', 'portfolio', 'Youssef Berrissoul', 'Nestlé', 'chatbot'],
  authors: [{ name: 'Youssef Berrissoul' }],
  creator: 'Youssef Berrissoul',
  publisher: 'Youssef Berrissoul',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://youssef-berrissoul.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Youssef Berrissoul - IT Security & Digital Trust Engineering Student',
    description: 'Portfolio de Youssef Berrissoul, étudiant en Ingénierie de Sécurité IT et Confiance Numérique.',
    url: 'https://youssef-berrissoul.vercel.app',
    siteName: 'Youssef Berrissoul Portfolio',
    images: [
      {
        url: '/assets/images/youssef.jpg',
        width: 1200,
        height: 630,
        alt: 'Youssef Berrissoul',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Youssef Berrissoul - IT Security & Digital Trust Engineering Student',
    description: 'Portfolio de Youssef Berrissoul, étudiant en Ingénierie de Sécurité IT et Confiance Numérique.',
    images: ['/assets/images/youssef.jpg'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

