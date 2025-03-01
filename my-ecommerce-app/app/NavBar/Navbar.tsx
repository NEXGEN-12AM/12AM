import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from "next/image";

export default function Nav() {
  
  return (
    <div className="main-container fixed top-0 left-0 w-full h-[80px] bg-black shadow-md z-[50]">
      
    {/* Left Menu Icon */}
    <div className="w-[65px] h-[64px] bg-[#000] rounded-[38.22px] absolute top-[3px] left-[16px] flex z-[9]">
      <img 
        src="/menu.png" 
        alt="Menu Icon" 
        className="w-[37.251px] h-[44.59px] object-cover relative z-10 mt-[8.2px] ml-[14.518px]" 
      />
    </div>

    {/* Right Profile Icon */}
    <div className="w-[65px] h-[64px] absolute top-[3px] right-[16px] z-[11] flex justify-center items-center">
      <img 
        src="/profile.png" 
        alt="Profile Icon" 
        className="w-full h-full object-cover"
      />
    </div>

    {/* Center Logo */}
    <span className="flex justify-center items-center font-['Aka-AcidGR-Compacta'] text-[47.32px] font-normal leading-[49.74px] text-white tracking-[3.31px] absolute left-1/2 transform -translate-x-1/2 top-[22px] whitespace-nowrap z-[12]">
      12AM
    </span>

    {/* Navigation Container */}
    <div className="w-full h-[88.4px] flex justify-center items-center">
      <div className="w-full max-w-6xl flex justify-between items-center px-4">
        
        {/* Left Links */}
        <div className="flex space-x-36">
          <span className="font-['Bronx'] text-[22.75px] font-normal text-white cursor-pointer relative group">
            HOME
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
          <span className="font-['Bronx'] text-[22.75px] font-normal text-white cursor-pointer relative group">
            SHOP
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </div>
        
        {/* Right Links */}
        <div className="flex space-x-36">
          <span className="font-['Bronx'] text-[22.75px] font-normal text-white cursor-pointer relative group">
            CONTACT
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
          <span className="font-['Bronx'] text-[22.75px] font-normal text-white cursor-pointer relative group">
            CART
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </div>
      </div>
    </div>
  </div>
  );
}