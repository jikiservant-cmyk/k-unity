import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  metadataBase: new URL('https://ncfonlinechurch.netlify.app'),
  title: {
    default: 'K-unity Finance SACCO | Kololo High School Origins',
    template: '%s | K-unity Finance SACCO',
  },
  description: 'Empowering communities through K-unity Finance SACCO. Founded at Kololo High School, we offer transparent savings and affordable loans.',
  keywords: ['K-unity SACCO', 'Kololo High School SACCO', 'Finance Uganda', 'Savings Cooperative Kampala', 'Community Banking'],
  authors: [{ name: 'K-unity Finance SACCO' }],
  creator: 'K-unity Finance SACCO',
  publisher: 'K-unity Finance SACCO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'K-unity Finance SACCO | Secure Your Future',
    description: 'Join K-unity Finance SACCO for reliable savings and affordable business credit. Originating from Kololo High School.',
    url: 'https://ncfonlinechurch.netlify.app',
    siteName: 'K-unity Finance SACCO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K-unity Finance SACCO | Secure Your Future',
    description: 'Empowering the community through cooperative financial excellence with roots in Kololo High School.',
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
