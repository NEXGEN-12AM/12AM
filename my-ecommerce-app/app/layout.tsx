
import './globals.css';
import Footer from '../components/Footer/Footer';


export const metadata = {
  title: '12AM - Twelve AM',
  description: 'Where Today Meet Tomorrow',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col relative"> 
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

