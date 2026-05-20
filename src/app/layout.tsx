import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  metadataBase: new URL('https://ncfonlinechurch.netlify.app'),
  title: {
    default: 'Nabweru Community SACCO | Empowering Your Future',
    template: '%s | Nabweru Community SACCO',
  },
  description: 'Official website of Nabweru Community SACCO. We provide affordable loans, savings products, and financial guidance to empower our community in Kampala.',
  keywords: ['Nabweru SACCO', 'Community Savings Kampala', 'Microfinance Uganda', 'Low interest loans', 'Nabweru Road SACCO', 'Financial Empowerment', 'Savings and Credit'],
  authors: [{ name: 'Nabweru Community SACCO' }],
  creator: 'Nabweru Community SACCO',
  publisher: 'Nabweru Community SACCO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Nabweru Community SACCO | Secure Your Future',
    description: 'Join Nabweru Community SACCO for affordable credit and reliable savings plans in the heart of Nabweru.',
    url: 'https://ncfonlinechurch.netlify.app',
    siteName: 'Nabweru Community SACCO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nabweru Community SACCO | Secure Your Future',
    description: 'Empowering the Nabweru community through cooperative financial services.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Playfair+Display:wght@700;900&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
