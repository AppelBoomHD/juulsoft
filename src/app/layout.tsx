import { Metadata } from 'next';

import './globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import Providers from './providers';

export const metadata: Metadata = {
  title: 'JuulSoft - by Julian Riemersma',
  description: 'Full Stack App Developer',
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <main className="h-screen w-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
