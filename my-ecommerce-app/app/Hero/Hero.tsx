import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="main-container mx-auto w-full h-[950px] p-4 mb-4">
      <div className=" h-[100vh] flex flex-col justify-center items-start mt-24 mx-0 relative z-10">
      {/* Background Image */}
      <div className="">
    <Image
      src="/bg.png"
      alt="Background"
      layout="fill"
      quality={100}
    />
  </div>

      {/* Text Container */}
      <div className="flex flex-col absolute left-1 top-10">
  {/* TWELVE Text */}
  <span className="font-humane font-bold text-[180px] md:text-[250px] lg:text-[300px] xl:text-[350px] leading-[120px] md:leading-[180px] lg:leading-[210px] xl:leading-[230px] text-black tracking-[5px] md:tracking-[8px] xl:tracking-[10px] mt-2 md:mt-4">
    TWELVE
  </span>

  {/* AM Text */}
  <span className="font-humane text-[160px] md:text-[220px] lg:text-[280px] xl:text-[330px] leading-[120px] md:leading-[180px] lg:leading-[220px] xl:leading-[250px] text-black tracking-[5px] md:tracking-[8px] xl:tracking-[10px] mt-6 md:mt-10 xl:mt-14">
    AM
  </span>
</div>

    </div>
    </div>
  );
};

export default Hero;
