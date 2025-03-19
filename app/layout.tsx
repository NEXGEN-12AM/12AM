
"use client";

import './globals.css';
import Footer from '../components/Footer/Footer';
import Navbar from '../app/NavBar/Navbar';
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react"; // ✅ Import SessionProvider

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // ✅ Hide Navbar on Login and Signup Pages
  const showNavbar = !["/login", "/signup"].includes(pathname);


  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">

        <SessionProvider> {/* ✅ Wrap your entire app with SessionProvider */}


          {showNavbar && <Navbar />}
          
          {/* ✅ Enhanced Page Transition Effect */}
          <AnimatePresence mode="wait">
            <motion.main
              key={pathname}
              initial={{ opacity: 0, scale: 0.95, y: 10 }} // Start slightly smaller and lower
              animate={{ opacity: 1, scale: 1, y: 0 }} // Fade in and grow to normal size
              exit={{ opacity: 0, scale: 0.98, y: -10 }} // Fade out with a slight lift
              transition={{ duration: 0.5, ease: "easeOut" }} // Smooth out
              className="flex-1 flex flex-col"
            >
              {children}
            </motion.main>
          </AnimatePresence>

          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
