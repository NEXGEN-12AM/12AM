import Image from "next/image";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="w-full h-[100vh] justify-center items-center mt-24 mx-0 relative z-10">
      <Image
        src="/bg.png"
        alt="Background"
        layout="fill"
        quality={100}
        priority
      />
    </div>
  );
};

export default Hero; // ✅ Ensure this is present!
