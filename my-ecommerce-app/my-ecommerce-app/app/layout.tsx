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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* <header className="bg-black text-white py-4">
          <div className="container mx-auto px-4">
            <h1 className="font-custom text-2xl font-bold">12AM</h1>
          </div>
        </header> */}

        <main className="">{children}
          
        </main>
        <Footer />

      </body>
    </html>
  );
}
