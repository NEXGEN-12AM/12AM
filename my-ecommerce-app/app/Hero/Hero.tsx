import Image from "next/image";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-start mt-24 mx-0 relative z-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
    <Image
      src="/bg.png"
      alt="Background"
      layout="fill"
      quality={100}
      priority
      className="object-cover fixed" // Add `fixed` to keep the image stationary
    />
  </div>

      {/* Text Container */}
      <div className="flex flex-col absolute left-2 top-10 z-[12]">
        {/* TWELVE Text */}
        <span className="font-['Aka-AcidGR-Compacta'] text-[300px] font-normal leading-[300px] text-black tracking-[3.31px]">
          TWELVE
        </span>

        {/* AM Text */}
        <span className="font-['Aka-AcidGR-Compacta'] text-[280px] font-normal leading-[250px] text-black tracking-[3.31px]">
          AM
        </span>

        {/* Button Wrapper - Moves to the Right */}
      </div>
      <div className="flex justify-center items-center p-4">
      <button 
        className="absolute right-4 top-[640px] shop-now-button w-[520px] h-[124px] rounded-[57px] overflow-hidden cursor-pointer transition-transform hover:scale-105 focus:outline-none"
      >
        <div className="w-full h-full bg-[url(https://static.codia.ai/image/2025-03-01/b06e305f-2c67-4cdd-b7e0-ffaf42fa9fb5.png)] bg-cover bg-no-repeat absolute top-0 left-0" />
        <span className="left-4 text-center block h-[32px] font-['Bronx'] text-[38px] font-normal leading-[0px] text-[#fff] tracking-[3.11px] relative text-left whitespace-nowrap z-[1] mt-[32.86px] mr-0 mb-0 ml-[189.002px]">
          shop now
        </span>
      </button>
      <button 
        className="absolute right-4 top-[790px] shop-now-button w-[520px] h-[124px] rounded-[57px] overflow-hidden cursor-pointer transition-transform hover:scale-105 focus:outline-none"
      >
        <div className="w-full h-full bg-[url(https://static.codia.ai/image/2025-03-01/b06e305f-2c67-4cdd-b7e0-ffaf42fa9fb5.png)] bg-cover bg-no-repeat absolute top-0 left-0" />
        <span className="left-0 block h-[32px] text-center font-['Bronx'] text-[38px] font-normal leading-[0px] text-[#fff] tracking-[3.11px] relative text-left whitespace-nowrap z-[1] mt-[32.86px] mr-4 mb-0 ml-[189.002px]">
          search
        </span>
      </button>
    </div>
    </div>
  );
};

export default Hero;
