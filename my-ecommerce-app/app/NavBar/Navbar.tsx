"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // ✅ Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div className="main-container fixed top-0 left-0 w-full h-[56px] z-[50]">
      {/* Black Section */}
      <div className="absolute top-0 left-0 w-full h-[30px] bg-black"></div>
      <div className="main-container w-[185.045px] h-[82.995px] bg-[url(https://static.codia.ai/image/2025-03-03/e0db1a94-9580-4d4c-a132-15357d2be074.svg)] bg-cover bg-no-repeat relative mx-auto my-[-14]">
        {/* Transparent Section */}
        <div className="absolute top-0 left-0 w-full h-[20px] bg-transparent"></div>
      </div>

      {/* Left Menu Icon (Opens Sidebar) */}
      <div 
        className="w-[56px] h-[56px] bg-[#000] rounded-[38.22px] absolute top-[3px] left-[16px] flex justify-center items-center z-[9] cursor-pointer"
        onClick={() => setIsMenuOpen(true)}
      >
        <img 
          src="/menu.png" 
          alt="Menu Icon" 
          className="w-[32px] h-[32px] object-cover relative z-10"
        />
      </div>

      {/* Right Profile Icon */}
      <div className="w-[56px] h-[56px] absolute top-[4px] right-[16px] z-[11] flex justify-center items-center">
        <img 
          src="/profile.png" 
          alt="Profile Icon" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Center Logo */}
      <Image 
        src="/logo.png"
        alt="12AM Logo"
        width={120} 
        height={40} 
        className="absolute left-1/2 transform -translate-x-1/2 top-[5px] ml-1 z-[12]"
      />

      {/* Burger Menu (Sidebar) */}
      <div ref={menuRef} className={`fixed top-0 left-0 h-full w-[260px] bg-black text-white transition-transform transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} z-[100] shadow-lg`}>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-normal tracking-[2px] ">TE HENGLAY</h2>
            <button onClick={() => setIsMenuOpen(false)} className="text-white text-2xl">&times;</button>
          </div>
          <p className="text-xl text-gray-400">010328281</p>
        </div>
        <hr className="border-gray-700" />

        <div className="p-6 font-kano">
          <h3 className="text-md font-kano font-bold mb-10">MY ACCOUNT</h3>
          <ul className="space-y-10">
  {[
    { name: "ADDRESS", href: "/address" },
    { name: "YOUR ORDER", href: "/orders" },
    { name: "WISH LIST", href: "/wishlist" },
    { name: "HISTORY", href: "/history" },
  ].map((item, index) => (
    <li key={index} className="relative group">
      <Link 
        href={item.href} 
        className="block hover:text-gray-300 text-lg font-bold tracking-widest relative overflow-hidden"
      >
        {item.name}

        {/* Glitch Effect */}
        <span className="absolute top-0 left-0 w-full h-full text-gray-300 opacity-0 group-hover:opacity-100 group-hover:animate-glitch">
          {item.name}
        </span>
      </Link>
    </li>
  ))}
</ul>
        </div>

        <hr className="border-gray-700" />

        <div className="p-6">
          <h3 className="text-md font-bold mb-4">SETTING</h3>
          <button className="w-full bg-red-600 text-white font-bold py-2 rounded hover:bg-red-700">
            LOGOUT
          </button>
          
        </div>
        <div className="mt-16 flex justify-center">
    <Image 
      src="/twelve11.png"  // ✅ Change this to your actual image path
      alt="Additional Image"
      width={150}  // ✅ Adjust size as needed
      height={100} 
      className="rounded-md"
    />
  </div>
      </div>

      {/* Navigation Container */}
      <div className="font-bronx w-full h-[40px] flex justify-center items-center absolute top-7 left-0">
        <div className="w-full max-w-6xl flex justify-between items-center px-4">
          
          {/* Left Links */}
          <div className="flex space-x-32">
            <Link href="/" passHref>
              <span className="text-[22.75px] font-normal text-black cursor-pointer relative group">
                HOME
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link href="/" passHref>
              <span className="text-[22.75px] font-normal text-black cursor-pointer relative group">
                SHOP
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </div>
          
          {/* Right Links */}
          <div className="flex space-x-32">
            <span className="text-[22.75px] font-normal text-black cursor-pointer relative group">
              CONTACT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </span>

            <Link href="/cart">
              <span className="text-[22.75px] font-normal text-black cursor-pointer relative group">
                CART
                <span className="absolute bottom-0 left-0 w-0 h-0.5 mt-4 bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
