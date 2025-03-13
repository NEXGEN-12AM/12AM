
import './globals.css';
import Footer from '../components/Footer/Footer';
import Navbar from '../app/NavBar/Navbar'


export const metadata = {
  title: '12AM - Twelve AM',
  description: 'Where Today Meet Tomorrow',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (

    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main> {/* ✅ Expands properly */}
        <Footer />
      </body>
    </html>
  );
}

