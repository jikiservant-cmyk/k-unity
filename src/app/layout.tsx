import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  metadataBase: new URL('https://ncfonlinechurch.netlify.app'),
  title: {
    default: 'Nabweru Christian Fellowship | NCF Church',
    template: '%s | Nabweru Christian Fellowship',
  },
  description: 'Official website of Nabweru Christian Fellowship (NCF Church). Join our community in Kampala for live worship services, prayer, and biblical teaching. Experience grace and truth with us.',
  keywords: ['Nabweru Christian Fellowship', 'NCF Church', 'Church in Kampala', 'Nabweru Road Church', 'Uganda Church', 'Online Worship', 'Faith Community', 'Christian Fellowship Kampala'],
  authors: [{ name: 'Nabweru Christian Fellowship' }],
  creator: 'Nabweru Christian Fellowship',
  publisher: 'Nabweru Christian Fellowship',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Nabweru Christian Fellowship | Welcome Home',
    description: 'Official website of Nabweru Christian Fellowship. Join us for live services, community worship, and spiritual growth in Kampala.',
    url: 'https://ncfonlinechurch.netlify.app',
    siteName: 'Nabweru Christian Fellowship',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nabweru Christian Fellowship | Welcome Home',
    description: 'Join Nabweru Christian Fellowship for live services, community worship, and spiritual growth.',
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
