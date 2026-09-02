import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '59th INTER-IIT SPORTS MEET 2026 | IIT Kharagpur',
  description:
    'Official portal for the 59th Inter-IIT Sports Meet hosted by IIT Kharagpur. Live scores, event schedule, medal standings, media gallery, and athlete news.',
  keywords: [
    'Inter IIT Sports Meet',
    'IIT Kharagpur',
    'TSG',
    'Sports Meet 2026',
    'Inter IIT 2026',
    'Athletics',
    'Live Scores',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@0,400..700;1,400..700&family=Inter:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-[72px] sm:pt-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
