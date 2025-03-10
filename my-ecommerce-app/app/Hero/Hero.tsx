import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col justify-between">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="/wall.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 pt-6 lg:pt-32">
        
        {/* Left Side - Text Content */}
        <div className="text-left">
          <div className="flex items-center space-x-4">
            <h1 className="text-[120px] sm:text-[200px] md:text-[280px] lg:text-[350px] font-humane leading-none ml-8">
              TWELVE
            </h1>
            <span
              className="text-[120px] sm:text-[200px] md:text-[280px] lg:text-[350px] font-humane leading-none text-white"
              style={{
                WebkitTextStroke: "2px black",
                textShadow:
                  "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black",
              }}
            >
              AM
            </span>
          </div>

          <p className="text-2xl font-medium mt-[-12] ml-12 leading-tight">
            TWELVE AM WHERE, TODAY MEET TOMORROW <br /> 
            <span className="font-bold">15% ON EVERY ITEM</span>
          </p>

          {/* Shop Now Button */}
          <button
            className="mt-8 mb-12 px-12 py-6 text-2xl font-bronx text-white rounded-full transition bg-cover bg-center text-right pr-8 transform duration-300 ease-in-out hover:scale-105"
            style={{
              backgroundImage: "url('/Button.png')",
              minWidth: "250px",
              minHeight: "80px",
            }}
          >
            SHOP NOW
          </button>
        </div>

        {/* Right Side - Module Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <Image
            src="/hero.png" // Ensure the image is in /public folder
            alt="12AM Model"
            width={600} // Adjust width as needed
            height={800} // Adjust height as needed
            objectFit="contain"
            className="drop-shadow-lg"
          />
        </div>
      </div>

      {/* "TWELVE TWELVE TWELVE" Section at the Bottom */}
<div className="absolute bottom-0 left-0 w-full mt-20">

  {/* "TWELVE TWELVE TWELVE" Image */}
  <div className="relative z-10 w-full h-[80px] overflow-hidden">
    <Image
      src="/twelve1.png"
      alt="Twelve Twelve Twelve"
      width={1920}  // Full width
      height={200}   // Smaller height
      objectFit="cover"
    />
  </div>
</div>

    </div>
  );
};

export default Hero;
