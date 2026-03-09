import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  metadataBase: new URL('https://ncfonlinechurch.netlify.app'),
  title: {
    default: 'NCF Online Church | Welcome Home',
    template: '%s | NCF Online Church',
  },
  description: 'Join NCF Online Church for live services, community worship, and spiritual growth. Everyone is welcome to join our global congregation.',
  keywords: ['NCF Church', 'Nabweru Christian Fellowship', 'Church Kampala', 'Online Church', 'Worship', 'Jesus', 'Faith'],
  authors: [{ name: 'NCF Church' }],
  creator: 'NCF Church',
  publisher: 'NCF Church',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'NCF Online Church | Welcome Home',
    description: 'Join NCF Online Church for live services, community worship, and spiritual growth.',
    url: 'https://ncfonlinechurch.netlify.app',
    siteName: 'NCF Online Church',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NCF Online Church | Welcome Home',
    description: 'Join NCF Online Church for live services, community worship, and spiritual growth.',
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
