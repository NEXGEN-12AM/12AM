import Link from "next/link";

export default function Nav() {
  
  return (
    <div className="main-container fixed top-0 left-0 w-full h-[56px] z-[50] ">
      
  {/* Black Section */}
  <div className="absolute top-0 left-0 w-full h-[30px] bg-black"></div>
  <div className="main-container w-[185.045px] h-[82.995px] bg-[url(https://static.codia.ai/image/2025-03-03/e0db1a94-9580-4d4c-a132-15357d2be074.svg)] bg-cover bg-no-repeat relative mx-auto my-[-14]">
  {/* Transparent Section (Overlapping) */}
  <div className="absolute top-0 left-0 w-full h-[20px] bg-transparent"></div>
</div>
    {/* Left Menu Icon */}
    <div className="w-[56px] h-[56px] bg-[#000] rounded-[38.22px] absolute top-[3px] left-[16px] flex z-[9]">
      <img 
        src="/menu.png" 
        alt="Menu Icon" 
        className="w-[32.251px] h-[32.59px] object-cover relative z-10 mt-[14.2px] ml-[11.518px]" 
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
    <span className="flex justify-center items-center font-humane text-[60.32px] font-normal leading-[40.74px] text-white tracking-[3.31px] absolute left-1/2 transform -translate-x-1/2 top-[22px] whitespace-nowrap z-[12]">
      12AM
    </span>

    {/* Navigation Container */}
    {/* Navigation Container */}
<div className="font-bronx w-full h-[40px] flex justify-center items-center absolute top-7 left-0">
  <div className="w-full max-w-6xl flex justify-between items-center px-4">
    
    {/* Left Links */}
    <div className="flex space-x-32">
      <span className=" text-[22.75px] font-normal text-black cursor-pointer relative group">
        HOME
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
      </span>
      <span className=" text-[22.75px] font-normal text-black cursor-pointer relative group">
        SHOP
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
      </span>
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
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
      </span>
    </Link>
    </div>
  </div>
</div>
  </div>
  );
}