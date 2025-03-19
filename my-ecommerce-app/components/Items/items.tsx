"use client";
import { motion } from "framer-motion";

const Item: React.FC = () => {
  return (
    <div className="main-container max-w-[1920px] w-full h-auto mx-auto my-10 px-4 md:px-8 lg:px-16">
      {/* SHOP Title */}
      <h2 className="flex justify-center font-humane text-[60px] md:text-[70px] lg:text-[80px] font-normal text-black tracking-[3px] my-4">
        SHOP
      </h2>

      {/* Grid Container - Fully Responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full px-4">
        {Array.from({ length: 9 }, (_, i) => (
          <motion.div
            key={i}
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="w-full max-w-[300px] sm:max-w-[320px] md:max-w-[350px] aspect-[2/3] bg-cover bg-center bg-no-repeat shadow-lg rounded-lg"
              style={{ backgroundImage: `url('/shop/item-1.png')` }}
            ></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Item;
