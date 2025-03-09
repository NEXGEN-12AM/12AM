// components/HeroSection.js
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative w-full bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left text content */}
          <div className="md:w-1/2 z-10">
            <h1 className="text-8xl font-black tracking-tighter leading-none mb-4">
              TWELVE
              <br />
              AM
            </h1>
          </div>
          
          {/* Right image content */}
          <div className="md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden">
              <Image 
                src="/bg.png" 
                alt="Colorful VIBES design" 
                width={600} 
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
            
            {/* Overlay text on the image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-5xl font-bold tracking-wide bg-gradient-to-r from-purple-400 via-yellow-300 to-pink-500 text-transparent bg-clip-text">
                  VIBES
                </h2>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to action buttons */}
        <div className="absolute right-6 md:right-12 top-1/2">
          <div className="flex flex-col space-y-4">
            <Link href="/shop" 
              className="bg-white text-black font-bold px-6 py-3 rounded-full inline-block">
              SHOP NOW
            </Link>
            <Link href="/search" 
              className="bg-black text-white font-bold px-6 py-3 rounded-full inline-block border-2 border-white">
              SEARCH
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;