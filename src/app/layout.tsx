import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  metadataBase: new URL('https://ncfonlinechurch.netlify.app'),
  title: {
    default: 'Youth Unity SACCO | Building Financially Responsible Youths',
    template: '%s | Youth Unity SACCO',
  },
  description: 'The official Saving and Credit Cooperative Society for youths. Promoting a culture of saving, responsible borrowing, and financial literacy.',
  keywords: ['Youth SACCO Uganda', 'Youth Savings', 'K-unity Finance', 'Cooperative Banking', 'Financial Literacy'],
  authors: [{ name: 'Youth Unity SACCO' }],
  creator: 'Youth Unity SACCO',
  publisher: 'Youth Unity SACCO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Youth Unity SACCO | Save for Your Future',
    description: 'Empowering youths through financial literacy and affordable credit.',
    url: 'https://ncfonlinechurch.netlify.app',
    siteName: 'Youth Unity SACCO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Youth Unity SACCO | Secure Your Future',
    description: 'Promoting a culture of saving and financial discipline within the community.',
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
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
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
