// app/layout.tsx
// import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '../components/Footer/Footer';



const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '12AM - Twelve AM',
  description: 'Where Today Meet Tomorrow',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col relative"> {/* Added `relative` for positioning */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

