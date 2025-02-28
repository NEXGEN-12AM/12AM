// components/Navbar.js
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from "next/image";

export default function Nav() {
  return (
    <div className="main-container w-full h-[80px] relative mx-0 my-0 bg-black mb-4">
      
      <div className="w-[65px] h-[64px] bg-[#000] rounded-[38.22px] absolute top-[3px] my-3 left-[16px] flex z-[9]">
      <img src="/menu.png"
  alt="Icon" 
  className="w-[37.251px] h-[44.59px] object-cover relative overflow-hidden z-10 mt-[8.2px] mr-0 mb-0 ml-[14.518px]" 
/>
      </div>
      <div className="w-[65px] h-[64px] absolute top-[3px] my-2 left-[96%] z-[11] flex justify-center items-center">
  <img 
    src="/profile.png" 
    alt="Icon" 
    className="w-full h-full object-cover"
  />
</div>

      <span className="flex justify-center items-center font-['Aka-AcidGR-Compacta'] text-[47.32px] font-normal leading-[49.74px] text-[#fff] tracking-[3.31px] absolute left-1/2 transform -translate-x-1/2 top-[22px] whitespace-nowrap z-[12]">
        12AM
        </span>
        <div className="w-full h-[88.4px] bg-black flex justify-center items-center relative">
      {/* Navigation container */}
      <div className="w-full max-w-6xl flex justify-between items-center px-4">
        {/* Left navigation items */}
        <div className="flex space-x-36">
          <span className="font-['Bronx'] text-[22.75px] font-normal leading-[17.927px] text-white whitespace-nowrap">
            HOME
          </span>
          <span className="font-['Bronx'] text-[22.75px] font-normal leading-[17.927px] text-white whitespace-nowrap">
            SHOP
          </span>
        </div>
        
        {/* Center logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <span className="font-['Aka-AcidGR-Compacta'] text-[47.32px] font-normal leading-[49.74px] text-white tracking-[3.31px] whitespace-nowrap">
            12AM
          </span>
        </div>
        
        {/* Right navigation items */}
        <div className="flex space-x-36">
          <span className="font-['Bronx'] text-[22.75px] font-normal leading-[17.927px] text-white whitespace-nowrap">
            CONTACT
          </span>
          <span className="font-['Bronx'] text-[22.75px] font-normal leading-[17.927px] text-white whitespace-nowrap">
            CART
          </span>
        </div>
      </div>
    </div>
    </div>
  );
}

