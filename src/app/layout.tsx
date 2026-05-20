import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  metadataBase: new URL('https://ncfonlinechurch.netlify.app'),
  title: {
    default: 'Nabweru Community SACCO | Empowering Financial Growth',
    template: '%s | Nabweru Community SACCO',
  },
  description: 'Official website of Nabweru Community SACCO. We provide professional savings, affordable credit, and financial literacy to empower the people of Nabweru.',
  keywords: ['Nabweru SACCO', 'Community Banking Kampala', 'Microfinance Uganda', 'Low interest loans', 'Savings Cooperative', 'Financial Empowerment'],
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
    description: 'Join Nabweru Community SACCO for reliable savings and affordable business credit in Nabweru.',
    url: 'https://ncfonlinechurch.netlify.app',
    siteName: 'Nabweru Community SACCO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nabweru Community SACCO | Secure Your Future',
    description: 'Empowering the Nabweru community through cooperative financial excellence.',
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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
